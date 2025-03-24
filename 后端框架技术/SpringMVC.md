# SpringMVC

## 第 1 章 SpringMVC 介绍

### 1.1 SpringMVC 基本介绍

#### 1.1.1 SpringMVC 特点及概述

（1）SpringMVC 从易用性、效率上比曾经流行的 Struts2 更好

（2）SpringMVC 是 web 层框架【SpringMVC 接管了 web 层的组件，比如控制器、视图、视图解析、返回给用户的数据格式、同时支持 MVC 的开发模式/开发架构】

（3）SpringMVC 通过注解让 POJO 成为控制器，不需要继承类或者实现接口

（4）SpringMVC 采用低耦合的组件设计方式，具有更好的扩展和灵活性

（5）支持 REST 格式的 URL 请求

（6）SpringMVC 是基于 Spring 的，也就是说 SpringMVC 是在 Spring 基础上的，SpringMVC 的核心包是 spring-webmvc-xx.jar 和 spring-web-xx.jar

#### 1.1.2 梳理 Spring、SpringMVC、SpringBoot 的关系

（1）SpringMVC 只是 Spring 处理 web 层请求的一个模块/组件，SpringMVC 的基石是 Servlet

（2）SpringBoot 是为了简化开发者的使用推出的封神框架（约定优于配置，简化了 Spring 的配置流程），SpringBoot 包含很多组件/框架，Spring 就是最核心的内容之一，也包含 SpringMVC

（3）它们的关系大概是：SpringBoot > Spring > SpringMVC

### 1.2 SpringMVC 快速入门

#### 1.2.1 需求说明/图解

完成一个最基本的测试案例 - 登录案例

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222117482.png)

#### 1.2.2 SpringMVC 登录流程分析

#### 1.2.3 SpringMVC 登录 - 代码实现

（1）创建 SpringMVC Web 工程并配置 Tomcat

（2）导入 SpringMVC 开发需要的 jar 包

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222117422.png)

（3）创建 src/applicationContext-mvc.xml 文件（就是 Spring 的容器文件），文件名自己定

（4）配置 web.xml 文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

    <!--配置前端控制器/中央控制器/分发控制器
        用户的请求都会经过它的处理
    -->
    <servlet>
        <servlet-name>springDispatcherServlet</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <!--配置属性
            配置属性 contextConfigLocation，指定 DispatcherServlet 去操作的 Spring 配置文件
        -->
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:applicationContext-mvc.xml</param-value>
        </init-param>
        <!--在 web 项目启动时，就自动的加载 DispatcherServlet-->
        <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>springDispatcherServlet</servlet-name>
        <!--
            这里把 urlPattern 配置成 /，表示用户的请求都要经过 DispatcherServlet
            这样配置也符合 rest 风格的 url 请求
        -->
        <url-pattern>/</url-pattern>
    </servlet-mapping>
</web-app>
```

（5）创建 login.jsp

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>登录</title>
</head>
<body>
<h3>登录页面</h3>
<form action="?">
    u:<input name="username" type="text"> <br/>
    p:<input name="password" type="password"> <bt/>
    <input type="submit" value="登录">
</form>
</body>
</html>
```

（6）创建 Servlet

```java
/**
 * @Author: 止束
 * @Version: 1.0
 * @DateTime: 2024/6/23 15:06
 * @Description: (1) 如果我们使用了 SpringMVC，在一个类上标识 @Controller，表示将该类视为一个控制器注入到容器
 */
@Controller
public class UserServlet {

    //编写方法响应用户的请求

    /**
     * (1) login() 方法用于响应用户的登录请求
     * (2) @RequestMapping(value = "/login") 类似我们以前在原生的 Servlet 中配置的 url-pattern
     * (3) 即当用户在浏览器输入 http://localhost:8080/web工程路径/login 就能访问到 login() 方法
     * (4) return "login_ok"; 表示返回结果给视图解析器(InternalResourceViewResolver),视图解析器会根据配置来决定跳转到哪个页面
     * */
    @RequestMapping(value = "/login")
    public String login() {
        System.out.println("login ok...");
        return "login_ok";
    }
}
```

（7）创建 login_ok.jsp

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>登录成功</title>
</head>
<body>
<h1>恭喜，登录成功</h1>
</body>
</html>
```

（8）配置 applicationContext-mvc.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <!--配置要自动扫描的包-->
    <context:component-scan base-package="com.hspedu.web"/>

    <!--配置视图解析器-->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <!--配置属性 suffix(前缀) 和 prefix(后缀)-->
        <property name="prefix" value="/WEB-INF/pages/"/>
        <property name="suffix" value=".jsp"/>
    </bean>
</beans>
```

补充说明

```java
/**
     * (1) login() 方法用于响应用户的登录请求
     * (2) @RequestMapping(value = "/login") 类似我们以前在原生的 Servlet 中配置的 url-pattern
     * (3) 即当用户在浏览器输入 http://localhost:8080/web工程路径/login 就能访问到 login() 方法
     * (4) return "login_ok"; 表示返回结果给视图解析器(InternalResourceViewResolver),
     *     视图解析器会根据配置来决定跳转到哪个页面，比如有如下配置
     *
     *     <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
     *         <property name="prefix" value="/WEB-INF/pages/"/>
     *         <property name="suffix" value=".jsp"/>
     *     </bean>
     *     根据上面的配置，当 return "login_ok" 就是转发到 /WEB-INF/pages/login_ok.jsp
     * */
    @RequestMapping(value = "/login")
    public String login() {
        System.out.println("login ok...");
        return "login_ok";
    }
```

（9）配置 Tomcat

#### 1.2.4 注意事项和细节说明

（1）这里的 UserServlet 需要注解成 @Controller，我们称为一个 Handler 处理器

（2）UserServlet 在指定 Url 时，可以这样写 @RequestMapping("/login")，即把 value= 省略

（3）关于 SpringMVC 的 DispatcherServlet 的配置文件，如果不在 web.xml 指定 applicationContext-mvc.xml，默认在 /WEB-INF/springDispatcherServlet-servlet.xml 找这个配置文件（其中的名字 applicationContext-mvc 和 springDispatcherServlet 都是自己取得，-servlet 是系统要求有的），看下源码

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222117318.png)

修改其位置步骤：

​      1）修改 web.xml，注销 init-param 的配置

​      2）剪切原 applicationContext-mvc.xml 到 /WEB-INF 目录下，文件名为 `你配置的 DispatchServlet 的 <servlet-name> + -servlet.xml`，比如：/WEB-INF/springDispatcherServlet-servlet.xml



## 第 2 章 SpringMVC 执行流程

### 2.1 图解

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222117903.png)

## 第 3 章 @RequestMapping

### 3.1 基本使用

@RequestMapping 注解可以指定控制器/处理器的某个方法的请求的 url，基本用法前面已经写过了

### 3.2 @RequestMapping 注解其它使用方式

#### 3.2.1 @RequestMapping 可以修饰方法和类

（1）@RequestMapping 注解可以修饰方法，还可以修饰类，当同时修饰类和方法时，请求的 url 就是组合： `/类请求值/方法请求值`

web/request.jsp

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>购买商品</title>
</head>
<body>
<h1>购买商品</h1>
<form action="user/buy" method="post">
  购买人: <input type="text" name="username"> <br/>
  购买量: <input type="text" name="nums"> <br/>
  <input type="submit" value="购买">
</form>
</body>
</html>
```

src/com/hspedu/web/UserHandler.java

```java
@RequestMapping(value = "/user")
@Controller //UserHandler 就是一个处理器/控制器，注入到容器
public class UserHandler {
    /**
     * 当类上有注解 @RequestMapping(value = "/user")，方法上也有注解 @RequestMapping(value = "/buy") 时，
     * buy() 方法请求的 url: http://localhost:8080/工程路径/user/buy
     *
     * method = RequestMethod.POST 表示请求 buy() 方法的请求必须是 post 请求
     * RequestMethod 有四个常用选项：post、get、put、delete
     * SpringMVC 控制器默认支持 get 和 post 两种方式
     * */
    @RequestMapping(value = "/buy", method = RequestMethod.POST)
    public String buy() {
        System.out.println("购买商品");
        return "success";
    }
}
```

web/WEB-INF/pages/success.jsp

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>操作成功</title>
</head>
<body>
<h1>恭喜，操作成功</h1>
</body>
</html>
```

#### 3.2.2 @RequestMapping 可以指定请求方式

（1）@RequestMapping 可以指定请求的方式（post、get、put、delete），如果指定了请求方式，那么请求时的方式要和指定的一样，否则报错

（2）SpringMVC 控制器默认支持 get 和 post 两种方式，也就是当不指定 method 时，可以接收 get 和 post 请求

（3）当明确指定了 method，则需要按指定的方式请求，否则会报错

#### 3.2.3 @RequestMapping 可以指定 params 和 headers 即支持简单表达式

（1）param1：表示请求必须包含名为 param1 的请求参数

（2）!=param1：表示请求不能包含名为 param1 的请求参数

（3）param1 != value1：表示请求包含名为 param1 的请求参数，但其值不能为 value1

（4）{"param1 = value1", "param2"}：请求必须包含名为 param1 和 param2 的两个请求参数，且 param1 参数的值必须为 value1

（5）在 UserHandler.java 中增加方法

web/request.jsp

```html
<hr><h1>演示 params 的使用</h1>
<a href="user/find?bookId=100">查询书籍</a>
```

src/com/hspedu/web/UserHandler.java

```java
/**
     * params = "bookId" 表示请求该目标方法时，必须给一个 bookId 参数，其值不做限制
     * 形参中的 String bookId:表示请求目标方法时，假如 url 中携带参数 bookId = 100,那么就会把 100 赋给形参 bookId，注意形参中的 bookId 和 url 中的 bookId 是对应的
     * */
    @RequestMapping(value = "/find", params = "bookId", method = RequestMethod.GET)
    public String search(String bookId) {
        System.out.println("查询书籍 bookId = " + bookId);
        return "success";
    }
```

web/WEB-INF/pages/success.jsp

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>操作成功</title>
</head>
<body>
<h1>恭喜，操作成功</h1>
</body>
</html>
```

（6）也可以指定让请求中必须包含参数名和参数值，比如

```java
@RequestMapping(value = "/find", params = "bookId=100", method = RequestMethod.GET)
```

这样就必须要有 bookId 参数并且值为 100，否则报错

（7）需要有 bookId 参数，并且值不为 100，否则报错

```java
@RequestMapping(value = "/find", params = "bookId!=100", method = RequestMethod.GET)
```

#### 3.2.4 @RequestMapping 支持 Ant 风格资源地址

（1）`?`：匹配文件名中的一个字符

（2）`*`：匹配文件名中的任意字符

（3）`**`：匹配多层路径

（4）Ant 风格的 url 地址举例

`/user/*/createUser` ：匹配 `/user/aaa/createUser`、`/user/bbb/createUser` 等 URL

`/user/**/createUser` ：匹配 `/user/createUser`、`/user/aaa/bbb/createUser` 等 URL

`/user/createUser??` ：匹配 `/user/createUseraa`、`/user/createUserbb` 等 URL

（5）UserHandler 中增加方法 im

web/request.jsp

```java
<hr> <h1>演示 Ant 风格的请求资源方式</h1>
<a href="user/message/aa">发送消息1</a> <br/>
<a href="user/message/aa/bb/cc">发送消息2</a> <br/>
```

src/com/hspedu/web/UserHandler.java

```java
/**
     * 要求可以配置 /user/message/aa, /user/message/aa/bb/cc
     * */
    @RequestMapping(value = "/message/**")
    public String im() {
        System.out.println("发送消息");
        return "success";
    }
```

web/WEB-INF/pages/success.jsp

```java
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>操作成功</title>
</head>
<body>
<h1>恭喜，操作成功</h1>
</body>
</html>
```

#### 3.2.5 @RequestMapping 可配合 @PathVariable 映射 URL 绑定的占位符

（1）@RequestMapping 还可以配合 @PathVariable 映射 URL 绑定的占位符

（2）这样就不需要在 url 地址上带参数名了，更加的简洁明了

比如：我们的前端页面是这样的，kristina 和 300 是参数值

```html
<hr><h1>占位符的演示</h1>
<a href="user/reg/kristina/300">占位符的演示</a>
```

（3）代码实现

src/com/hspedu/web/UserHandler.java

```java
/**
     * 我们希望目标方法获取到 username 和 userid，value="/xx/{username}" - @PathVariable("username")
     * 前端页面: <a href="user/reg/kristina/300">占位符的演示</a>
     * (value = "/reg/{username}/{userid}"):表示 kristina 对应 {username}，300 对应 {userid}
     * */
    @RequestMapping(value = "/reg/{username}/{userid}")
    public String register(@PathVariable("username") String name, @PathVariable("userid") String id) {
        System.out.println("接收到的参数-- " + "username = " + name + " -- " + "userid = " + id); //接收到的参数-- username = kristina -- userid = 300
        return "success";
    }
```

web/request.jsp

```html
<hr> <h1>占位符的演示</h1>
<a href="user/reg/kristina/300">占位符的演示</a>
```

web/WEB-INF/pages/success.jsp

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>操作成功</title>
</head>
<body>
<h1>恭喜，操作成功</h1>
</body>
</html>
```

#### 3.2.6 注意事项和使用细节

（1）映射的 URL 不能重复，即不能重复映射 URL

（2）各种请求的简写形式

​      1）`@RequestMapping(value = "/buy", method = RequestMethod.POST)` 等价 `@PostMapping(value = "/buy")` 简写方式一览：@GetMapping、@PostMapping、@PutMapping、@DeleteMapping

（3）如果我们确定表单或者超链接会提交某个字段数据比如（email），要求提交的参数名和目标方法的参数名保持一致，比如：输入 `localhost:9998/user/hello3?email=tom@sohu.com`，一定要注意提交的参数名和后台方法的形参名保持一致，否则后端接收不到参数

### 3.3 必学必会技术 - Postman（接口测试工具）

#### 3.3.1 Postman 介绍

##### 3.3.1.1 Postman 是什么

（1）Postman 是一款功能超级强大的用于发送 Http 请求的测试工具

（2）做 Web 页面开发和测试人员的常用工具

（3）创建和发送任何的 Http 请求（Get、Post、Put、Delete）

#### 3.3.2 Postman 快速入门

##### 3.3.2.1 需求说明

使用 Postman 向 `http://www.baidu.com` 发送 get 请求，得到返回的 html 格式的数据

#### 3.3.3 Postman 完成 Controller 层测试

##### 3.3.3.1 测试使用实例

使用 Postman 完成对前面编写的 UserHandler 方法的请求

（1）完成请求

​      1）确定请求的地址 url，即 `http://localhost:8080/springmvc/user/buy`

​      2）确定请求的方式：Post

​      3）确定请求的参数/数据：无

​      4）确定 Headers 有没有特殊的指定：无

##### 3.3.3.2 其它说明

##### 3.3.3.3 课后作业

## 第 4 章 Rest - 优雅的 Url 请求风格

### 4.1 Rest 的基本介绍

（1）Rest：即 Representational State Transfer。资源表现层状态转化，是目前流行的请求方式，它结构清晰，很多网站采用

（2）Http 协议里面，四个表示操作方式的动词：Get、Post、Put、Delete，它们分别对应四种基本操作：Get 用来获取资源、Post 用来新建资源、Put 用来更新资源、Delete 用来删除资源

（3）传统的请求方法：

​      `getBook?id=1 GET`

​      `delete?id=1 GET`

​      `update POST`

​      `add POST`

（4）说明：传统的 url 是通过参数来说明 crud 的类型，Rest 是通过 get/post/put/delete 来说明 crud 的类型

（5）Rest 的核心过滤器

​      1）当前的浏览器只支持 post/get 请求，因此为了得到 put/delete 的请求方式需要使用 Spring 提供的 HiddenHttpMethodFilter 过滤器进行转换

​      2）HiddenHttpMethodFilter：浏览器 form 表单只支持 get 和 post 请求，而 delete、put 等 method 并不支持，Spring 添加了一个过滤器，可以将这些请求转换为标准的 http 方法，使得支持 get、post、put 与 delete 请求

​      3）HiddenHttpMethodFilter 能对 post 请求方式进行转换

​      4）这个过滤器需要在 web.xml 中配置

### 4.2 Rest 风格的 url - 完成增删改查

#### 4.2.1 需求说明

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222117878.png)

#### 4.2.2 Rest 应用案例 - 代码实现

（1）修改 web.xml 添加 HiddenHttpMethodFilter

```xml
<!--配置 HiddenHttpMethodFilter
        (1) 作用是把以 post 方式提交的 delete 和 put 请求进行转换
        (2) 配置 url-pattern 是 /* 表示请求都经过 hiddenHttpMethodFilter 过滤
    -->
    <filter>
        <filter-name>hiddenHttpMethodFilter</filter-name>
        <filter-class>org.springframework.web.filter.HiddenHttpMethodFilter</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>hiddenHttpMethodFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
```

（2）修改 springDispatcherServlet-servlet.xml

```xml
<!--加入两个常规配置-->
    <!--支持 SpringMVC 的高级功能，比如 JSR303 校验，映射动态请求-->
    <mvc:annotation-driven></mvc:annotation-driven>
    <!--将 SpringMVC 不能处理的请求，交给 Tomcat 处理，比如 css，js-->
    <mvc:default-servlet-handler/>
```

（3）创建 rest.jsp，注意需要引入 JQuery，测试的时候 查询/添加/删除/修改 一个一个的来

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>rest</title>
</head>
<body>
<h3>Rest 风格的 crud 操作案例</h3>
<br><hr>

<h3>Rest 风格的 url 查询书籍[get]</h3>
<a href="?">点击查询书籍</a>

<br><hr>

<h3>Rest 风格的 url 添加书籍[post]</h3>
<form action="?" method="?">
    name: <input name="bookName" type="text"> <br>
    <input type="submit" value="添加书籍">
</form>

<br><hr>

<h3>Rest 风格的 url 删除书籍[delete]</h3>
<a href="?" id="?">删除指定 id 的书</a>

<br><hr>

<h3>Rest 风格的 url 修改书籍[put]</h3>
<form action="?" method="?">
    <input type="submit" value="修改书籍">
</form>

</body>
</html>
```

（4）创建 BookHandler.java，处理 rest 风格的请求

（5）总代码

web.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

    <!--配置前端控制器/中央控制器/分发控制器
        用户的请求都会经过它的处理
    -->
    <servlet>
        <servlet-name>springDispatcherServlet</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <!--配置属性
            配置属性 contextConfigLocation，指定 DispatcherServlet 去操作的 Spring 配置文件
        -->
        <!--<init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:springDispatcherServlet-servlet.xml</param-value>
        </init-param>-->
        <!--在 web 项目启动时，就自动的加载 DispatcherServlet-->
        <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>springDispatcherServlet</servlet-name>
        <!--
            这里把 urlPattern 配置成 /，表示用户的请求都要经过 DispatcherServlet
            这样配置也符合 rest 风格的 url 请求
        -->
        <url-pattern>/</url-pattern>
    </servlet-mapping>



    <!--配置 HiddenHttpMethodFilter
        (1) 作用是把以 post 方式提交的 delete 和 put 请求进行转换
        (2) 配置 url-pattern 是 /* 表示请求都经过 hiddenHttpMethodFilter 过滤
    -->
    <filter>
        <filter-name>hiddenHttpMethodFilter</filter-name>
        <filter-class>org.springframework.web.filter.HiddenHttpMethodFilter</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>hiddenHttpMethodFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
    
</web-app>
```

springDispatcherServlet-servlet.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd">

    <!--配置要自动扫描的包-->
    <context:component-scan base-package="com.hspedu.web"/>

    <!--配置视图解析器-->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <!--配置属性 suffix(前缀) 和 prefix(后缀)-->
        <property name="prefix" value="/WEB-INF/pages/"/>
        <property name="suffix" value=".jsp"/>
    </bean>


    <!--加入两个常规配置-->
    <!--支持 SpringMVC 的高级功能，比如 JSR303 校验，映射动态请求-->
    <mvc:annotation-driven></mvc:annotation-driven>
    <!--将 SpringMVC 不能处理的请求，交给 Tomcat 处理，比如 css，js-->
    <mvc:default-servlet-handler/>
</beans>
```

rest.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>rest</title>
    <%--引入 JQuery--%>
    <script type="text/javascript" src="script/jquery-3.6.0.min.js"></script>
    <script type="text/javascript">
        $(function () { //当页面加载完成后，就执行
            //给删除超链接绑定一个点击事件
            $("#deleteBook").click(function () {
                //我们自己定义提交的行为
                $("#hiddenForm").attr("action", this.href); //把 id 为 deleteBook 的 href 的属性的值赋给 id 为 hiddenForm 的 action 属性
                //给 type = hidden 赋个 value 值，这样提交的话就是 _method = DELETE
                $(":hidden").val("DELETE");
                $("#hiddenForm").submit();
                return false; //改变点击超链接的行为，不再提交
            })
        })
    </script>
</head>
<body>
<h3>Rest 风格的 crud 操作案例</h3>
<br><hr>

<h3>Rest 风格的 url 查询书籍[get]</h3>
<a href="user/book/200">点击查询书籍</a>

<br><hr>

<h3>Rest 风格的 url 添加书籍[post]</h3>
<form action="user/book" method="post">
    name: <input name="bookName" type="text"> <br>
    <input type="submit" value="添加书籍">
</form>

<br><hr>

<h3>Rest 风格的 url 删除书籍[delete]</h3>
<%--重点解读
    (1) 在默认情况下 <a href="user/book/600" id="?">删除指定 id 的书</a> 这个超链接的请求是 get 请求
    (2) 怎么样将 get 请求转成 SpringMVC 可以识别的 delete 请求? 就要考虑 HiddenHttpMethodFilter 的机制
    (3) 看源码:
    public static final String DEFAULT_METHOD_PARAM = "_method";

    private static final List<String> ALLOWED_METHODS =
          Collections.unmodifiableList(Arrays.asList(HttpMethod.PUT.name(),
                HttpMethod.DELETE.name(), HttpMethod.PATCH.name()));

    //从这个判断语句可以看出只能把 post 转成 put 或者 delete 请求
    if ("POST".equals(request.getMethod()) && request.getAttribute(WebUtils.ERROR_EXCEPTION_ATTRIBUTE) == null) {
       String paramValue = request.getParameter(this.methodParam);
       if (StringUtils.hasLength(paramValue)) {
          String method = paramValue.toUpperCase(Locale.ENGLISH);
          if (ALLOWED_METHODS.contains(method)) {
             requestToUse = new HttpMethodRequestWrapper(request, method);
          }
       }
    }
    (4) 从上面的源码可以看到 HiddenHttpMethodFilter 过滤器可以对以 Post 方式提交的 delete、put、patch 进行转换，转换成 SpringMVC 识别的 RequestMethod.DELETE、RequestMethod.PUT、...
    (5) 那么又有一个问题，就是 <a href="user/book/600" id="?">删除指定 id 的书</a> 是 get 请求，要把这个 get 请求以 post 的方式提交给后端的 Handler(Servlet)，这样过滤器才会生效
    (6) 那么这个问题可以通过 JQuery 来处理
--%>
<a href="user/book/600" id="deleteBook">删除指定 id 的书</a>
<form action="" method="post" id="hiddenForm">
    <input type="hidden" name="_method"/>
</form>
<br><hr>

<h3>Rest 风格的 url 修改书籍[put]</h3>
<form action="user/book/666" method="post">
    <input type="hidden" name="_method" value="PUT">
    <input type="submit" value="修改书籍">
</form>

</body>
</html>
```

BookHandler.java

```java
/**
 * @Author: 止束
 * @Version: 1.0
 * @DateTime: 2024/6/24 12:57
 * @Description: BookHandler 处理 rest 风格的请求 - 增删改查
 */
@RequestMapping("/user")
@Controller
public class BookHandler {
    //查询 [Get]
    @RequestMapping(value = "/book/{id}", method = RequestMethod.GET)
    public String getBook(@PathVariable("id") String id) {
        System.out.println("查询书籍 id = " + id);
        return "success";
    }

    //添加 [Post]
    @PostMapping(value = "/book")
    public String addBook(String bookName) {
        System.out.println("添加书籍 bookName = " + bookName);
        return "success";
    }

    //删除[delete]
    @RequestMapping(value = "/book/{id}", method = RequestMethod.DELETE)
    public String delBook(@PathVariable("id") String id) {
        System.out.println("删除的书籍的 id = " + id);
        //return "success";
        //这里使用重定向
        //"redirect:/user/success" 会被解析成 /springmvc/user/success
        return "redirect:/user/success";
    }

    //如果请求是 /user/success，就转发到 success.jsp
    @RequestMapping(value = "/success")
    public String successGenecal() {
        return "success"; //由该方法转发到 success.jsp 页面
    }

    //修改 [PUT]
    @PutMapping(value = "/book/{id}")
    public String updateBook(@PathVariable("id") String id) {
        System.out.println("修改书籍 id = " + id);
        return "redirect:/user/success";
    }
}
```

#### 4.2.3 注意事项和细节说明

（1）HiddenHttpMethodFilter 在将 post 转成 delete、put 请求时，是按 _method 为参数名来读取的

（2）如果 Web 项目是运行在 Tomcat8 及以上的版本，会发现被过滤成 DELETE 和 PUT 的请求在到达控制器时能顺利执行，但是返回时（forward）会报 HTTP 405 的错误提示，解决方案：将请求转发（forward）改为请求重定向（redirect），重定向是重定向到一个 Handler（Servlet），由 Handler 转发到页面

（3）上面的代码在进行测试时，如果出现点击修改书籍，仍然走的是删除的 url，是因为浏览器的缓存等原因，换成 Chrome 即可

## 第 5 章 SpringMVC 映射请求数据

### 5.1 获取参数值

#### 5.1.1 说明

（1）开发中，如何获取到 `http://xxx/url?参数名=参数值&参数名=参数值` 中的 参数名=参数值，如果后端的形参和前端的参数名没有保持一致怎么办？

#### 5.1.2 代码实现

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>测试 request parameter</title>
</head>
<body>
<h2>获取到超链接参数值</h2>
<hr/>
<a href="vote/vote01?name=hsp">获取超链接的参数</a>
</body>
</html>
```

```java
@RequestMapping("/vote")
@Controller
public class VoteHandler {
    /**
     * 获取到超链接传递的数据
     * @RequestParam 表示会接收提交的参数
     * value = "name" 表示提交的参数名是 name，这个 name 是前端的参数名
     * required = false 表示该参数可以没有，如果是默认的 true，则表示必须有这个参数
     * 当使用了 @RequestParam(value = "name", required = false) 后请求的参数名和 Handler 的方法的形参名可以不一致
    */
    @RequestMapping(value = "/vote01")
    public String test01(@RequestParam(value = "name", required = false) String username) {
        System.out.println("得到的 username = " + username);
        //返回到一个结果
        return "success";
    }
}
```

### 5.2 获取 Http 请求消息头

#### 5.2.1 说明

（1）在开发中，如何获取到 http 请求的消息头信息

（2）使用较少，了解即可

#### 5.2.2 代码实现

```html
<h1>获取到消息头</h1>
<hr>
<a href="vote/vote02">获取 http 消息头信息</a>
```

```java
/**
     * 需求：获取 http 请求头信息，获取到 Accept-Encoding 和 Host
     * @RequestHeader("Http请求头字段")
    */
    @RequestMapping(value = "/vote02")
    public String test02(@RequestHeader("Accept-Encoding") String ae, @RequestHeader("Host") String host) {
        System.out.println("Accept-Encoding = " + ae);
        System.out.println("Host = " + host);
        //返回到一个结果
        return "success";
    }
```

### 5.3 获取 JavaBean 形式的数据

#### 5.3.1 使用场景说明

在开发中，如何获取到 JavaBean 的数据，就是以前的 entity/pojo 对象数据，即前端的数据经过 Handler 处理直接封装成 JavaBean 对象

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222117152.png)

#### 5.3.2 代码实现

JavaBean：

```java
public class Pet {
    private Integer id;
    private String name;

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

    @Override
    public String toString() {
        return "Pet{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
```

```java
public class Master {
    private Integer id;
    private String name;
    private Pet pet; //对象的属性是另外一个对象[涉及到级联]

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

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

    @Override
    public String toString() {
        return "Master{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", pet=" + pet +
                '}';
    }
}
```

```java
/**
     * 演示如何获取到提交的数据，并把获取到的数据封装成 java 对象
     * 想要把得到的数据封装成什么类型的 JavaBean 对象，就把这个类型写在方法的形参中,SpringMVC 会自动封装
     * 如果想要正确的自动的完成封装，要求提交的数据的参数名要和对应类型的对象的属性名保持一致
     * 如果对应类型的对象中有个属性是对象，则指定参数名时可以通过 字段名.字段名 来指定，如 pet.id
     * 如果提交的数据的参数名和对象的属性名不匹配，则对象的属性值就是 null
    */
    @RequestMapping(value = "/vote03")
    public String test03(Master master) {
        System.out.println("master = " + master);
        //返回结果
        return "success";
    }
```

```html
<hr>
<h1>添加主人信息</h1>
<!--
    (1) 此表单的数据对应 Master 对象
    (2) 提交的数据参数名和对象的属性名要保持一致
-->
<form action="vote/vote03" method="post">
    主人号:<input type="text" name="id"><br>
    主人名:<input type="text" name="name"><br>
    宠物号:<input type="text" name="pet.id"><br>
    宠物名:<input type="text" name="pet.name"><br>
    <input type="submit" value="添加主人和宠物">
</form>
```

#### 5.3.3 使用注意事项

（1）支持级联数据获取

（2）前端参数名需要和 JavaBean 对象的属性名保持一致

### 5.4 获取原生 Servlet API

#### 5.4.1 应用实例

（1）在开发中，我们可能需要使用到原生态的 Servlet API，那么该如何获取

（2）使用 Servlet API，需要引入 Tomcat/lib 下的 servlet-api.jar

#### 5.4.2 代码实现

```html
<hr>
<h1>演示 servlet api 的使用</h1>
<form action="vote/vote04" method="post">
    用户名: <input type="text" name="username"><br>
    密　码: <input type="text" name="pwd"><br>
    <input type="submit" value="添加用户">
</form>
```

```java
/**
     * 获取 servlet api 来获取提交的数据
    */
    @RequestMapping(value = "/vote04")
    public String test04(HttpServletRequest request, HttpServletResponse response) {
        String username = request.getParameter("username");
        String pwd = request.getParameter("pwd");
        System.out.println("username = " + username);
        System.out.println("pwd = " + pwd);
        //返回结果
        return "success";
    }
```

#### 5.4.3 使用注意事项

（1）除了 HttpServletRequest，HttpServletResponse 还可以获取其它对象：HttpSession、java.security.Principal、InputStream、OutputStream、Reader、Writer 等

（2）其中一些对象也可以通过 HttpServletRequest/HttpServletResponse 对象获取，比如 Session 对象，既可以通过参数传入，也可以通过 request.getSession() 获取，效果一样，推荐使用参数形式传入，更加简单明了

## 第 6 章 模型数据

### 6.1 数据放入 Request

#### 6.1.1 需求分析

（1）开发中，如何将控制器/处理器中获取到的数据放入到 request 域中，然后在前端（vue/jsp/...）中取出显示

（2）应用实例

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222117772.png)

#### 6.1.2 方式1：默认机制放入 request 域

JavaBean

```java
public class Master {
    private Integer id;
    private String name;
    private Pet pet; //对象的属性是另外一个对象[涉及到级联]

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

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

    @Override
    public String toString() {
        return "Master{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", pet=" + pet +
                '}';
    }
}
```

model_data.jsp

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>测试模型数据</title>
</head>
<body>
<h1>添加主人信息</h1>
<form action="vote/vote05" method="post">
  主人号: <input type="text" name="id"><br>
  主人名: <input type="text" name="name"><br>
  宠物号: <input type="text" name="pet.id"><br>
  宠物名: <input type="text" name="pet.name"><br>
  <input type="submit" value="添加主人和宠物">
</form>
</body>
</html>
```

VoteHandler.java

```java
/**
     * 演示将提交的数据自动封装到 JavaBean 对象中，SpringMVC 会自动的将其放入到 request 域中
     * 这样我们就可以在跳转到的页面中取出数据了
     * */
    @RequestMapping(value = "/vote05")
    public String test05(Master master) {
        /*
        * SpringMVC 会自动把获取的 model 模型放入到 request 域中，名字就是对应的 JavaBean 的名字，即 ("master", master)
        * 也可以手动将 master 放入到 request
        * */
        //返回到一个结果
        return "vote_ok";
    }
```

vote_ok.jsp

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>vote_ok</title>
</head>
<body>
<h1>获取到的数据显示页面</h1>
<hr>
取出 request 域的数据
<br>
address: <br>
主人名字 = ${requestScope.master.name}
主人 id = ${requestScope.master.id}
宠物名字 = ${requestScope.master.pet.name}
</body>
</html>
```

#### 6.1.3 方式2：通过 HttpServletRequest 放入 request 域

```java
/**
     * 演示将提交的数据自动封装到 JavaBean 对象中，SpringMVC 会自动的将其放入到 request 域中
     * 这样我们就可以在跳转到的页面中取出数据了
     * */
    @RequestMapping(value = "/vote05")
    public String test05(Master master, HttpServletRequest request) {
        /*
        * SpringMVC 会自动把获取的 model 模型放入到 request 域中，名字就是对应的 JavaBean 的类名的首字母小写，即 ("master", master)
        * 也可以手动将 master 放入到 request
        * */
        //手动给 request 域添加数据
        request.setAttribute("address", "beijing");
        //如果我们希望修改 master 的 name 的属性值，可以调用 setter 方法
        master.setName("nono");
        //返回到一个结果
        return "vote_ok";
    }
```

#### 6.1.4 方式3：通过请求的方法参数 Map<String, Object> 放入 request 域

```java
/**
     * 演示通过 Map<String, Object> 设置数据到 request 域
     * */
    @RequestMapping(value = "/vote06")
    public String test06(Master master, Map<String, Object> map) {
        //需求是通过 map 对象，添加属性到 request 域中
        //SpringMVC 会遍历 map，然后将 map 的 k-v，存放到 request 域中
        map.put("address", "beijing...");
        //如果这样写 map.put("master", null); 那么在 SpringMVC 遍历 map 时会将通过默认方式存储在 request 域中的 master 置为空
        map.put("master", null);
        //返回一个结果
        return "vote_ok";
    }
```

#### 6.1.5 方式4：通过返回 ModelAndView 对象实现 request 域数据

```html
<br/><hr/>
<h1>添加主人信息[测试 ModelAndView]</h1>
<form action="vote/vote07" method="post">
  主人号: <input type="text" name="id"><br>
  主人名: <input type="text" name="name"><br>
  宠物号: <input type="text" name="pet.id"><br>
  宠物名: <input type="text" name="pet.name"><br>
  <input type="submit" value="添加主人和宠物">
</form>
```

```java
/**
     * 演示通过返回 ModelAndView 对象，将数据放入到 request 域
     * */
    @RequestMapping(value = "/vote07")
    public ModelAndView test07(Master master) {
        ModelAndView modelAndView = new ModelAndView();
        //放入属性到 modelAndView
        modelAndView.addObject("address", "shanghai");
        //这里指定跳转的视图名称
        modelAndView.setViewName("vote_ok");
        //返回结果
        return modelAndView;
    }
```

#### 6.1.6 使用注意事项

（1）从本质看，请求响应的方法 `return "xx"`，是返回了一个字符串，其实本质是返回了一个 ModelAndView 对象，只是默认被封装起来的

（2）ModelAndView 既可以包含 model 数据，也可以包含视图信息

（3）ModelAndView 对象的 addObject 方法可以添加 key-val 数据，默认在 request 域中

（4）ModelAndView 对象的 setView 方法可以指定视图名称

### 6.2 数据放入 Session

#### 6.2.1 需求分析

开发中，控制器/处理器中获取的数据如何放入 Session 域，然后在前端（vue/jsp/...）取出显示

#### 6.2.2 代码实现

```html
<br/><hr/>
<h1>添加主人信息[测试 session]</h1>
<form action="vote/vote08" method="post">
  主人号: <input type="text" name="id"><br>
  主人名: <input type="text" name="name"><br>
  宠物号: <input type="text" name="pet.id"><br>
  宠物名: <input type="text" name="pet.name"><br>
  <input type="submit" value="添加主人和宠物">
</form>
```

```java
/**
     * 演示如何将数据设置到 Session 域中
     * */
    @RequestMapping(value = "/vote08")
    public String test08(Master master, HttpSession httpSession) {
        //master 对象是默认放在 request 域中的
        //这里我们将 master 对象放入到 session 域
        httpSession.setAttribute("master", master);
        httpSession.setAttribute("address", "guangzhou");
        return "vote_ok";
    }
```

```html
<hr>
取出 session 域的数据 <br>
address: ${sessionScope.address} <br>
主人名字 = ${sessionScope.master.name}
主人信息 = ${sessionScope.master}
```

### 6.3 @ModelAttribute 实现 prepare 方法

#### 6.3.1 应用实例

（1）开发中，有时需要使用某个前置方法（比如 prepareXxx()，方法名由程序员定）给目标方法准备一个模型对象

（2）@ModelAttribute 注解可以实现这样的需求

（3）在某个方法上，增加了 @ModelAttribute 注解后，那么在调用该 Handler 的任何一个方法时，都会先调用这个方法

```java
/**
     * (1) 当 Handler 的方法被 @ModelAttribute 标识，那么该方法就被视为一个前置方法
     * (2) 当调用该 Handler 的其它的方法时，都会先执行该前置方法
     * (3) 类似前面讲解 Spring AOP 中的前置通知
     * */
    @ModelAttribute
    public void prepareModel() {
        System.out.println("prepareModel() --- 完成准备工作");
    }
```

#### 6.3.2 @ModelAttribute 最佳实践

（1）修改用户信息流程如下：

​      1）在修改前，在前置方法中从数据库查出这个用户

​      2）在修改方法中，可以使用前置方法从数据库查询用户

​      3）如果表单中对用户的某个属性修改了，则以新的数据为准，如果没有修改，则以数据库的信息为准，比如：用户的某个属性不能修改，就保持原来的值

## 第 7 章 视图和视图解析器

### 7.1 基本介绍

（1）在 SpringMVC 中的目标方法最终返回都是一个视图（有各种视图）

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222118636.png)

（2）返回的视图都会由一个视图解析器来处理（视图解析器有很多种）

这是之前配置的视图解析器

```xml
<!--配置视图解析器-->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <!--配置属性 suffix(前缀) 和 prefix(后缀)-->
        <property name="prefix" value="/WEB-INF/pages/"/>
        <property name="suffix" value=".jsp"/>
    </bean>
```

### 7.2 自定义视图

#### 7.2.1 为什么需要自定义视图

（1）在默认情况下，我们都是返回默认的视图，然后把返回的视图交由 SpringMVC 的 InternalResourceViewResolver 视图解析器来处理的

（2）在实际开发中，我们有时需要自定义视图，这样可以满足更多更复杂的需求

#### 7.2.2 自定义视图实例 - 代码实现

（1）配置 springDispatcherServlet-servlet.xml，增加自定义视图解析器

view.jsp

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>自定义视图测试</title>
</head>
<body>
<h1>自定义视图测试</h1>
<a href="goods/buy">点击到自定义视图</a>
</body>
</html>
```

GoodsHandler.java

```java
@RequestMapping("/goods")
@Controller
public class GoodsHandler {
    @RequestMapping(value = "/buy")
    public String buy() {
        System.out.println("------buy()-----");
        return "hspView"; //hspView 是自定义视图名
    }
}
```

springDispatcherServlet-servlet.xml 配置自定义视图解析器

```xml
<!--
        配置自定义视图解析器 BeanNameViewResolver
        BeanNameViewResolver 可以去解析我们自定义的视图
        配置的属性 order，表示视图解析器执行的顺序，值越小优先级越高
        属性 order 的默认值是最低优先级，值为 Integer.MAX_VALUE
    -->
    <bean class="org.springframework.web.servlet.view.BeanNameViewResolver">
        <property name="order" value="99"/>
    </bean>
```

MyView.java 自定义视图

```java
/**
 * (1) MyView 继承了 AbstractView，就可以作为一个视图使用
 * (2) @Component(value = "hspView") 注解将该视图注入到容器中
 */
@Component(value = "hspView")
public class MyView extends AbstractView {
    @Override
    protected void renderMergedOutputModel(Map<String, Object> map, HttpServletRequest request, HttpServletResponse response) throws Exception {
        //完成视图渲染
        //确定我们要跳转的页面[请求转发]  /WEB-INF/pages/my_view.jsp
        System.out.println("进入到自己的视图...");

        /*
        * 下面这个就是进行请求转发到 /WEB-INF/pages/my_view.jsp
        * /WEB-INF/pages/my_view.jsp 会被 SpringMVC 解析成 /springmvc/WEB-INF/pages/my_view.jsp
        * */
        request.getRequestDispatcher("/WEB-INF/pages/my_view.jsp").forward(request, response);
    }
}
```

my_view.jsp

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>my_view页面</title>
</head>
<body>
<h1>进入到 my_view 页面</h1>
<p>是从自定义的视图来的</p>
</body>
</html>
```

#### 7.2.3 自定义视图工作流程

##### 7.2.3.1 自定义视图步骤

（1）自定义视图：创建一个 View 的 bean，该 bean 需要继承自 AbstractView，并实现 renderMergedOutputModel 方法，并把自定义 View 加入到 IOC 容器中

（2）自定义视图的视图处理器，使用 BeanNameViewResolver，这个视图处理器也需要配置到 IOC 容器

（3）BeanNameViewResolver 的调用优先级需要设置一下，设置 order 比 Integer.MAX_VALUE 小的值，以确保其在 InternalResourceViewResolver 之前被调用，InternalResourceViewResolver 是 SpringMVC 默认的视图解析器

##### 7.2.3.2 自定义视图解析器执行流程

（1）SpringMVC 调用目标方法（Handler），返回自定义 View 在 IOC 容器中的 id，即 hspView

（2）SpringMVC 调用 BeanNameViewResolver 解析视图：从 IOC 容器中获取返回 id 值对应的 bean，即自定义的 View 的对象，即 MyView，别名是 hspView

（3）SpringMVC 调用自定义视图的 renderMergedOutputModel 方法渲染视图

注意：如果在 SpringMVC 调用目标方法，返回自定义 View 在 IOC 容器中的 id 不存在，则仍然按照默认的视图处理器机制处理

##### 7.2.3.3 默认视图解析器执行流程

默认的视图解析器执行流程就是拼接，把目标方法中的 `return "hspView"; ` 拼接成 `/WEB-INF/pages/hspView.jsp` 然后就会直接在相应目录下找到 hspView.jsp 页面进行渲染

##### 7.2.3.4 自定义视图解析器和默认视图解析器的执行关系

当自定义视图解析器的优先级高于默认的视图解析器的优先级时，会先执行自定义视图解析器，当自定义的 View 不存在时，会走默认的视图解析器

当自定义视图解析器的优先级低于默认的视图解析器的优先级时，会先执行默认视图解析器，当默认视图解析器没有解析到自定义的视图时，会直接报错而不会再执行自定义解析器

### 7.3 目标方法直接指定转发或重定向

#### 7.3.1 使用实例

（1）默认返回的方式是请求转发，然后用视图处理器进行处理，比如在目标方法中这样写

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222118064.png)

（2）也可以在目标方法直接指定重定向或转发的 url 地址

（3）如果指定重定向，不能定向到 /WEB-INF 目录中

```java
/**
     * 演示直接指定要请求转发的或者是重定向的页面
     * */
    @RequestMapping(value = "/order")
    public String order() {
        System.out.println("=====order()=====");
        //请求转发到 /WEB-INF/pages/my_view.jsp
        //下面的 /WEB-INF/pages/my_view.jsp 会被解析成 /springmvc/WEB-INF/pages/my_view.jsp
        //return "forward:/WEB-INF/pages/my_view.jsp";

        //直接指定要重定向的页面
        //对于重定向来说，不能重定向到 /WEB-INF 目录下
        //下面的 /login.jsp 是在服务器解析，解析成 /springmvc/login.jsp
        return "redirect:/login.jsp";
    }
```

### 7.4 作业布置

完成一个简单的用户登录案例

（1）编写登录页面 login.jsp

（2）LoginHandler [doLogin 方法]，如果用户输入的用户名是 hsp 密码是 123，就可以登录，否则登录失败

（3）创建 JavaBean：User.java

（4）表单提交数据到 doLogin 方法，以 User 对象形式接收

（5）登录成功到页面 login_ok.jsp 并显示登录欢迎信息

（6）登录失败到页面 login_error.jsp，并给出重新登录的超链接

## 第 9 章 数据格式化

### 9.1 基本介绍

在我们提交数据（比如表单时），SpringMVC 怎样对提交的数据进行转换和处理的

（1）基本数据类型可以和字符串之间自动完成转换，比如：SpringMVC 上下文中内建了很多转换器，可以完成大多数 Java 类型的转换工作

### 9.2 基本数据类型和字符串自动转换

#### 9.2.1 页面演示

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222118024.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222118047.png)

Monster.java

```java
public class Monster {
    private Integer id;
    private String email;
    private Integer age;
    private String name;

    public Monster() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Monster{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", age=" + age +
                ", name='" + name + '\'' +
                '}';
    }
}
```

data_valid.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>SpringMVC[数据格式/验证等]</title>
</head>
<body>
<h1>SpringMVC[数据格式/验证等]</h1>
<hr>
<a href="<%=request.getContextPath()%>/addMonsterUI">添加妖怪</a>
</body>
</html>
```

MonsterHandler.java

```java
/**
 * @Author: 止束
 * @Version: 1.0
 * @DateTime: 2024/6/26 19:01
 * @Description: 处理器用来处理响应用户提交的数据
 */
@Controller
@Scope(value = "prototype") //表示每次请求 MonsterHandler 会生成一个新的对象
public class MonsterHandler {
    //显示添加 monster 的界面
    //Map<String, Object> map : 当我们向 map 中添加数据时，会默认存放到 request
    @RequestMapping(value = "/addMonsterUI")
    public String addMonsterUI(Map<String, Object> map) {

        /*
        * 如果你跳转的页面使用了 SpringMVC 的标签，就需要准备一个对象并且放入到 request 域中，
        * 这个对象的属性名 monster 对应 SpringMVC 表单标签的 modelAttribute = "monster"
        * */
        map.put("monster", new Monster());
        return "datavalid/monster_addUI";
    }

    /**
     * 编写方法，处理添加妖怪
     * (1) SpringMVC 可以将提交的数据按照参数名和对象的属性名匹配
     * (2) 直接封装到对象中
     * */
    @RequestMapping(value = "/save")
    public String save(Monster monster) {
        System.out.println("-----monster-----" + monster);
        return "datavalid/success";
    }
}
```

monster_addUI.jsp

```jsp
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>添加妖怪</title>
</head>
<body>
<h3>添加妖怪</h3>
<%--
  这里的表单，我们使用 SpringMVC 的标签来完成
  (1) SpringMVC 表单标签在显示之前必须在 request 中有一个 bean，该 bean 的属性和表单标签的字段要对应
  (2) request 中的 key 为：form 标签的 modelAttribute 属性值，比如这里的 monster
  (3) SpringMVC 的 form:form 标签的 action 属性值中的 / 不代表 WEB 应用的根目录
  (4) 这里使用 SpringMVC 的标签的主要目的是方便提示信息回显
--%>
<form:form action="save" method="post" modelAttribute="monster">
  妖怪名字: <form:input path="name"/> <br><br>
  妖怪年龄: <form:input path="age"/> <br><br>
  电子邮件: <form:input path="email"/> <br><br>
  <input type="submit" value="添加妖怪"/>
</form:form>
</body>
</html>
```

success.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>添加成功页面</title>
</head>
<body>
<h1>恭喜，添加成功</h1>
</body>
</html>
```

#### 9.2.2 Postman 完成测试

### 9.3 特殊数据类型和字符串间的转换

#### 9.3.1 应用实例

（1）特殊数据类型和字符串之间的转换使用注解（比如日期，规定格式的小数比如货币形式等）

（2）对于日期和货币可以使用 @DateTimeFormat 和 @NumberFormat 注解，把这两个注解标记在字段上即可

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222118257.png)

（3）修改 Monster.java，增加 birthday 和 salary 字段

Monster.java

```java
public class Monster {
    private Integer id;
    private String email;
    private Integer age;
    private String name;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date birthday;

    @NumberFormat(pattern = "###,###.##")
    private Float salary;

    public Monster() {
    }

    public Monster(Integer id, String email, Integer age, String name, Date birthday, Float salary) {
        this.id = id;
        this.email = email;
        this.age = age;
        this.name = name;
        this.birthday = birthday;
        this.salary = salary;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public Float getSalary() {
        return salary;
    }

    public void setSalary(Float salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Monster{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", age=" + age +
                ", name='" + name + '\'' +
                ", birthday=" + birthday +
                ", salary=" + salary +
                '}';
    }
}
```

data_valid.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>SpringMVC[数据格式/验证等]</title>
</head>
<body>
<h1>SpringMVC[数据格式/验证等]</h1>
<hr>
<a href="<%=request.getContextPath()%>/addMonsterUI">添加妖怪</a>
</body>
</html>
```

MonsterHandler.java

```java
/**
 * @Author: 止束
 * @Version: 1.0
 * @DateTime: 2024/6/26 19:01
 * @Description: 处理器用来处理响应用户提交的数据
 */
@Controller
@Scope(value = "prototype") //表示每次请求 MonsterHandler 会生成一个新的对象
public class MonsterHandler {
    //显示添加 monster 的界面
    //Map<String, Object> map : 当我们向 map 中添加数据时，会默认存放到 request
    @RequestMapping(value = "/addMonsterUI")
    public String addMonsterUI(Map<String, Object> map) {

        /*
        * 如果你跳转的页面使用了 SpringMVC 的标签，就需要准备一个对象并且放入到 request 域中，
        * 这个对象的属性名 monster 对应 SpringMVC 表单标签的 modelAttribute = "monster"
        * */
        map.put("monster", new Monster());
        return "datavalid/monster_addUI";
    }

    /**
     * 编写方法，处理添加妖怪
     * (1) SpringMVC 可以将提交的数据按照参数名和对象的属性名匹配
     * (2) 直接封装到对象中
     * */
    @RequestMapping(value = "/save")
    public String save(Monster monster) {
        System.out.println("-----monster-----" + monster);
        return "datavalid/success";
    }
}
```

monster_addUI.jsp

```jsp
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>添加妖怪</title>
</head>
<body>
<h3>添加妖怪</h3>
<%--
  这里的表单，我们使用 SpringMVC 的标签来完成
  (1) SpringMVC 表单标签在显示之前必须在 request 中有一个 bean，该 bean 的属性和表单标签的字段要对应
  (2) request 中的 key 为：form 标签的 modelAttribute 属性值，比如这里的 monsters
  (3) SpringMVC 的 form:form 标签的 action 属性值中的 / 不代表 WEB 应用的根目录
  (4) 这里使用 SpringMVC 的标签的主要目的是方便提示信息回显
--%>
<form:form action="save" method="post" modelAttribute="monster">
    妖怪名字: <form:input path="name"/> <br><br>
    妖怪年龄: <form:input path="age"/> <br><br>
    电子邮件: <form:input path="email"/> <br><br>
    妖怪生日: <form:input path="birthday"/> 要求以"9999-11-11"的形式 <br><br>
    薪水: <form:input path="salary"/> 要求以"123,890.12"的形式 <br><br>
  <input type="submit" value="添加妖怪"/>
</form:form>
</body>
</html>
```

success.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>添加成功页面</title>
</head>
<body>
<h1>恭喜，添加成功</h1>
</body>
</html>
```

## 第 10 章 验证及国际化

### 10.1 概述

（1）对输入的数据（比如表单数据），进行必要的验证，并给出相应的提示信息

（2）对于验证表单数据，SpringMVC 提供了很多实用的注解，这些注解由 JSR 303 验证框架提供

（3）JSR 303 是 Java 为 Bean 数据合法性校验提供的标准框架，它已经包含在 JavaEE 中

（4）JSR 303 通过在 Bean 属性上标注类似于 @NotNull、@Max 等标准的注解指定校验规则并通过标准的验证接口对 Bean 进行验证

（5）JSR 303 提供的基本验证注解有：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222118356.png)

（6）Hibernate Validator 扩展注解：Hibernate Validator 和 Hibernate 没有关系，只是 JSR 303 实现的一个扩展，Hibernate Validator 是 JSR 303 的一个参考实现，除支持所有标准的校验注解外，它还支持以下的扩展注解：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222118680.png)

### 10.2 应用实例

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222118592.png)

引入验证和国际化相关的 jar 包

Monster.java

```java
public class Monster {
    private Integer id;
    private String email;
    @Range(min = 1, max = 100) //表示接收的 age 值在 1 - 100 之间
    private Integer age;
    @NotEmpty //表示 name 不能为空
    private String name;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date birthday;

    @NumberFormat(pattern = "###,###.##")
    private Float salary;

    public Monster() {
    }

    public Monster(Integer id, String email, Integer age, String name, Date birthday, Float salary) {
        this.id = id;
        this.email = email;
        this.age = age;
        this.name = name;
        this.birthday = birthday;
        this.salary = salary;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public Float getSalary() {
        return salary;
    }

    public void setSalary(Float salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Monster{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", age=" + age +
                ", name='" + name + '\'' +
                ", birthday=" + birthday +
                ", salary=" + salary +
                '}';
    }
}
```

data_valid.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>SpringMVC[数据格式/验证等]</title>
</head>
<body>
<h1>SpringMVC[数据格式/验证等]</h1>
<hr>
<a href="<%=request.getContextPath()%>/addMonsterUI">添加妖怪</a>
</body>
</html>
```

MonsterHandler.java

```java
/**
 * @Author: 止束
 * @Version: 1.0
 * @DateTime: 2024/6/26 19:01
 * @Description: 处理器用来处理响应用户提交的数据
 */
@Controller
@Scope(value = "prototype") //表示每次请求 MonsterHandler 会生成一个新的对象
public class MonsterHandler {
    //显示添加 monster 的界面
    //Map<String, Object> map : 当我们向 map 中添加数据时，会默认存放到 request
    @RequestMapping(value = "/addMonsterUI")
    public String addMonsterUI(Map<String, Object> map) {

        /*
        * 如果你跳转的页面使用了 SpringMVC 的标签，就需要准备一个对象并且放入到 request 域中，
        * 这个对象的属性名 monster 对应 SpringMVC 表单标签的 modelAttribute = "monster"
        * */
        map.put("monster", new Monster());
        return "datavalid/monster_addUI";
    }

    /**
     * 编写方法，处理添加妖怪
     * (1) SpringMVC 可以将提交的数据按照参数名和对象的属性名匹配
     * (2) 直接封装到对象中
     * (3) @Valid Monster monster: 表示需要对 monster 接收的数据进行校验
     * (4) Errors errors 表示如果校验出现错误，将校验的错误信息保存到 errors
     * (5) Map<String, Object> map 表示如果校验出现错误，将校验的错误信息保存到 map，同时保存 monster 对象
     * (6) 校验发生的时机：在 SpringMVC 底层，反射调用目标方法时，会接收到 http 请求的数据，然后根据注解来进行验证，在验证过程中，如果出现了错误，就把错误信息填充到 errors 和 map
     *
     * */
    @RequestMapping(value = "/save")
    public String save(@Valid Monster monster, Errors errors, Map<String, Object> map) {
        System.out.println("-----monster-----" + monster);
        //我们为了看到验证的情况，我们输出 map 和 errors
        System.out.println("===== map ======");
        for (Map.Entry<String, Object> entry : map.entrySet()) {
            System.out.println("key = " + entry.getKey() + " value = " + entry.getValue());
        }
        System.out.println("===== errors =====");
        if (errors.hasErrors()) { //判断是否有错误
            List<ObjectError> allErrors = errors.getAllErrors();
            for (ObjectError error : allErrors) {
                System.out.println("error = " + error);
            }
            return "datavalid/monster_addUI";
        }
        return "datavalid/success";
    }
}
```

monster_addUI.jsp

```jsp
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>添加妖怪</title>
</head>
<body>
<h3>添加妖怪</h3>
<%--
  这里的表单，我们使用 SpringMVC 的标签来完成
  (1) SpringMVC 表单标签在显示之前必须在 request 中有一个 bean，该 bean 的属性和表单标签的字段要对应
  (2) request 中的 key 为：form 标签的 modelAttribute 属性值，比如这里的 monsters
  (3) SpringMVC 的 form:form 标签的 action 属性值中的 / 不代表 WEB 应用的根目录
  (4) 这里使用 SpringMVC 的标签的主要目的是方便提示信息回显
--%>
<form:form action="save" method="post" modelAttribute="monster">
    妖怪名字: <form:input path="name"/> <br><br>
    妖怪年龄: <form:input path="age"/> <br><br>
    电子邮件: <form:input path="email"/> <br><br>
    妖怪生日: <form:input path="birthday"/> 要求以"9999-11-11"的形式 <br><br>
    薪水: <form:input path="salary"/> 要求以"123,890.12"的形式 <br><br>
  <input type="submit" value="添加妖怪"/>
</form:form>
</body>
</html>
```

success.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>添加成功页面</title>
</head>
<body>
<h1>恭喜，添加成功</h1>
</body>
</html>
```

当验证错误时会输出以下语句：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222119285.png)

下面进行自定义验证语句

在 springDispatcherServlet-servlet.xml 中配置国际化错误信息的资源处理

```java
<!--配置国际化错误信息的资源处理 bean-->
    <bean id="messageSource" class="org.springframework.context.support.ResourceBundleMessageSource">
        <!--配置国际化文件名字
            如果这样配的话，表示 messageSource 会到 src/i18nXXX.properties 去读取错误信息
        -->
        <property name="basename" value="i18n"></property>
    </bean>
```

配置 i18n.properties 配置文件

```properties
NotEmpty.monster.name=\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a //用户名不能为空
typeMismatch.monster.age=\u5e74\u9f84\u4e0d\u80fd\u4e3a\u7a7a //年龄不能为空
typeMismatch.monster.birthday=\u751f\u65e5\u683c\u5f0f\u4e0d\u6b63\u786e //生日格式不正确
typeMismatch.monster.salary=\u85aa\u6c34\u683c\u5f0f\u4e0d\u6b63\u786e //薪水格式不正确
```

Monster.java

```java
public class Monster {
    private Integer id;
    private String email;
    @Range(min = 1, max = 100) //表示接收的 age 值在 1 - 100 之间
    private Integer age;
    @NotEmpty //表示 name 不能为空
    private String name;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date birthday;

    @NumberFormat(pattern = "###,###.##")
    private Float salary;

    public Monster() {
    }

    public Monster(Integer id, String email, Integer age, String name, Date birthday, Float salary) {
        this.id = id;
        this.email = email;
        this.age = age;
        this.name = name;
        this.birthday = birthday;
        this.salary = salary;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public Float getSalary() {
        return salary;
    }

    public void setSalary(Float salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Monster{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", age=" + age +
                ", name='" + name + '\'' +
                ", birthday=" + birthday +
                ", salary=" + salary +
                '}';
    }
}
```

data_valid.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>SpringMVC[数据格式/验证等]</title>
</head>
<body>
<h1>SpringMVC[数据格式/验证等]</h1>
<hr>
<a href="<%=request.getContextPath()%>/addMonsterUI">添加妖怪</a>
</body>
</html>
```

MonsterHandler

```java
/**
 * @Author: 止束
 * @Version: 1.0
 * @DateTime: 2024/6/26 19:01
 * @Description: 处理器用来处理响应用户提交的数据
 */
@Controller
@Scope(value = "prototype") //表示每次请求 MonsterHandler 会生成一个新的对象
public class MonsterHandler {
    //显示添加 monster 的界面
    //Map<String, Object> map : 当我们向 map 中添加数据时，会默认存放到 request
    @RequestMapping(value = "/addMonsterUI")
    public String addMonsterUI(Map<String, Object> map) {

        /*
        * 如果你跳转的页面使用了 SpringMVC 的标签，就需要准备一个对象并且放入到 request 域中，
        * 这个对象的属性名 monster 对应 SpringMVC 表单标签的 modelAttribute = "monster"
        * */
        map.put("monster", new Monster());
        return "datavalid/monster_addUI";
    }

    /**
     * 编写方法，处理添加妖怪
     * (1) SpringMVC 可以将提交的数据按照参数名和对象的属性名匹配
     * (2) 直接封装到对象中
     * (3) @Valid Monster monster: 表示需要对 monster 接收的数据进行校验
     * (4) Errors errors 表示如果校验出现错误，将校验的错误信息保存到 errors
     * (5) Map<String, Object> map 表示如果校验出现错误，将校验的错误信息保存到 map，同时保存 monster 对象
     * (6) 校验发生的时机：在 SpringMVC 底层，反射调用目标方法时，会接收到 http 请求的数据，然后根据注解来进行验证，在验证过程中，如果出现了错误，就把错误信息填充到 errors 和 map
     *
     * */
    @RequestMapping(value = "/save")
    public String save(@Valid Monster monster, Errors errors, Map<String, Object> map) {
        System.out.println("-----monster-----" + monster);
        //我们为了看到验证的情况，我们输出 map 和 errors
        System.out.println("===== map ======");
        for (Map.Entry<String, Object> entry : map.entrySet()) {
            System.out.println("key = " + entry.getKey() + " value = " + entry.getValue());
        }
        System.out.println("===== errors =====");
        if (errors.hasErrors()) { //判断是否有错误
            List<ObjectError> allErrors = errors.getAllErrors();
            for (ObjectError error : allErrors) {
                System.out.println("error = " + error);
            }
            return "datavalid/monster_addUI";
        }
        return "datavalid/success";
    }
}
```

修改 monster_addUI.jsp

```jsp
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>添加妖怪</title>
</head>
<body>
<h3>添加妖怪</h3>
<%--
  这里的表单，我们使用 SpringMVC 的标签来完成
  (1) SpringMVC 表单标签在显示之前必须在 request 中有一个 bean，该 bean 的属性和表单标签的字段要对应
  (2) request 中的 key 为：form 标签的 modelAttribute 属性值，比如这里的 monsters
  (3) SpringMVC 的 form:form 标签的 action 属性值中的 / 不代表 WEB 应用的根目录
  (4) 这里使用 SpringMVC 的标签的主要目的是方便提示信息回显
--%>
<form:form action="save" method="post" modelAttribute="monster">
    妖怪名字: <form:input path="name"/> <form:errors path="name"/> <br><br>
    妖怪年龄: <form:input path="age"/> <form:errors path="age"/> <br><br>
    电子邮件: <form:input path="email"/> <form:errors path="email"/> <br><br>
    妖怪生日: <form:input path="birthday"/> <form:errors path="birthday"/> 要求以"9999-11-11"的形式 <br><br>
    薪水: <form:input path="salary"/> <form:errors path="salary"/> 要求以"123,890.12"的形式 <br><br>
  <input type="submit" value="添加妖怪"/>
</form:form>
</body>
</html>
```

success.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>添加成功页面</title>
</head>
<body>
<h1>恭喜，添加成功</h1>
</body>
</html>
```

### 10.3 细节说明和注意事项

（1）在需要验证的 JavaBean/Pojo 的字段上加上相应的验证注解

（2）目标方法上，在 JavaBean/Pojo 类型的参数前添加 @Valid 注解，告知 SpringMVC 该 bean 是需要验证的

（3）在 @Valid 注解之后，添加一个 Errors 或 BindingResult 类型的参数，可以获取到验证的错误信息

（4）需要使用 `<form:errors path="email"></form:errors>` 标签来显示错误信息，这个标签，需要写在 `<form:form>` 标签内生效

（5）错误消息的国际化文件 i18n.properties，中文需要是 Unicode 编码，使用工具进行转码

（6）格式：验证规则.表单 modelAttribute 值.属性名 = 消息信息

```java
NotEmpty.monster.name=\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a //用户名不能为空
typeMismatch.monster.age=\u5e74\u9f84\u4e0d\u80fd\u4e3a\u7a7a //年龄不能为空
```

（7）注解 @NotNull 和 @NotEmpty 的区别说明

​      1）查看源码可以知道：@NotEmpty：Asserts that the annotated string,collection,map or array is not {@code null} or empty

​      2）查看源码可以知道：@NotNull：The annotated element must not be {@code null}.* Accepts any type.

​      3）如果是字符串验证空，建议使用 @NotEmpty

（8）SpringMVC 验证时，会根据不同的验证错误，返回对应的信息

### 10.4 注解的结合使用

#### 10.4.1 先看一个问题

在上一个案例中 age 没有填写，是空的，但是却可以提交

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222119157.png)

#### 10.4.2 解决问题

使用 @NotNull + @Range 组合使用解决

```java
    private Integer id;
    //email 是 String 类型的，使用 @NotEmpty 更合理
    private String email;
    @NotNull(message = "age不能为空")
    @Range(min = 1, max = 100) //表示接收的 age 值在 1 - 100 之间
    private Integer age;
    @NotEmpty //表示 name 不能为空
    private String name;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date birthday;

    @NumberFormat(pattern = "###,###.##")
    private Float salary;
```

### 10.5 数据类型转换校验核心类 - DataBinder

图例 SpringMVC 通过反射机制对目标方法进行解析，将请求消息绑定到处理方法的入参中，数据绑定的核心部件是 DataBinder，运行机制如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222119054.png)

### 10.6 取消某个属性的绑定

#### 10.6.1 使用实例

（1）在默认情况下，表单提交的数据都会和 POJO 类型的 JavaBean 属性绑定，如果程序员在开发中希望取消某个属性的绑定，也就是说，不希望接收到某个表单对应的属性的值，则可以通过 @InitBinder 注解取消绑定

（2）编写一个方法，使用 @InitBinder 标识该方法，可以对 WebDataBinder 对象进行初始化，WebDataBinder 是 DataBinder 的子类，用于完成由表单字段到 JavaBean 属性的绑定

（3）@InitBinder 方法不能有返回值，它必须声明为 void

（4）@InitBinder 方法的参数通常是 WebDataBinder

MonsterHandler.java 中添加方法

```java
/**
     * 取消绑定把 monster 的 name 表单提交的值给 monster.name 属性
     * 方法上需要标注 @InitBinder，SpringMVC 底层会初始化 WebDataBinder
     * 调用 webDataBinder.setDisallowedFields("name"); 表示取消指定属性的绑定
     * 即当表单提交的字段名为 name 的，就不再把接收到的字段名为 name 的值填充到 model 数据的 monster 的 name 属性中
     * webDataBinder.setDisallowedFields("name") 支持可变参数，可以填写多个字段
     * 如果我们取消某个属性的绑定，验证机制就没有意义了，应当把验证的注解去掉
     * */
    @InitBinder
    public void initBinder(WebDataBinder webDataBinder) {
        webDataBinder.setDisallowedFields("name");
    }
```

Monster.java 中把 name 属性的验证给去掉

```java
//@NotEmpty //表示 name 不能为空
    private String name;
```

#### 10.6.2 注意事项和细节说明

（1）setDisallowedFields() 是可变形参，可以指定多个字段

（2）当将一个字段/属性设置为 disallowed，就不再接收表单提交的值，那么这个字段/属性的值，就是该对象默认的值

（3）一般来说，如果不接收表单字段提交的数据，则该对象字段的验证也就没有意义，所以可以注销掉

## 第 11 章 中文乱码处理

### 11.1 自定义中文乱码过滤器

当表单提交数据为中文时，会出现乱码，来解决一下

```java
public class MyCharacterFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        //这里加入对编码的处理
        servletRequest.setCharacterEncoding("utf-8");
        //放行请求，这个规则和前面讲过的 JavaWeb 的过滤器一样
        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void destroy() {

    }
}
```

```xml
<!--配置处理中文乱码的过滤器,拦截所有请求，处理编码问题-->
    <filter>
        <filter-name>MyCharacterFilter</filter-name>
        <filter-class>com.hspedu.web.filter.MyCharacterFilter</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>MyCharacterFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
```

### 11.2 使用 Spring 提供的过滤器处理中文乱码

```xml
<!--配置 Spring 提供的过滤器，解决中文乱码问题-->
    <filter>
        <filter-name>CharacterEncodingFilter</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
        <init-param>
            <param-name>encoding</param-name>
            <param-value>utf-8</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>CharacterEncodingFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
```

## 第 12 章 处理 json 和 `HttpMessageConverter<T>`

### 12.1 处理 JSON - @ResponseBody

项目开发中，我们往往需要服务器返回的数据格式是按照 json 来返回的，我们看一下 SpringMVC 是如何处理的

引入处理 json 需要的 jar 包，注意 spring5.x 需要使用 jackson-2.9.x.jar 的包

Dog.java

```java
public class Dog {
    private String name;
    private String address;

    public Dog() {
    }

    public Dog(String name, String address) {
        this.name = name;
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Dog{" +
                "name='" + name + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
```

json.jsp

```jsp v-pre
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>json 提交</title>
    <%--引入 JQuery--%>
    <script type="text/javascript" src="script/jquery-3.6.0.min.js"></script>
    <%--编写 JQuery 代码和请求--%>
    <script type="text/javascript">
        $(function () {
            //给 id="getJson" 绑定点击事件
            $("#getJson").click(function () {
                //console.log("ok ...");
                var url = this.href;
                var args = {"time" : new Date()}; //这是要发送的数据，为了防止页面缓存
                $.post(
                    url,
                    args,
                    function (data) {
                        console.log("data = ", data);
                        console.log("dog.name = ", data.name);
                        console.log("dog.address = ", data.address);

                    },
                    "json"
                )
                return false;
            })
        })
    </script>
</head>
<body>
<h1>请求一个 json 数据</h1>
<%--当用户点击超链接时，我们发出一个 Ajax 请求--%>
<a href="<%=request.getContextPath()%>/json/dog" id="getJson">点击获取 json 数据</a>
</body>
</html>
```

JsonHandler.java

```java
@Controller
public class JsonHandler {
    /*
    * 目标方法有 @ResponseBode 注解，表示返回的数据是 json 格式
    * SpringMVC 底层根据目标方法 @ResponseBody，返回指定格式，根据 http 请求来进行处理
    * */
    @RequestMapping(value = "/json/dog")
    @ResponseBody
    public Dog getJson() {
        //SpringMVC 会根据设置，转成 json 格式数据返回
        Dog dog = new Dog();
        dog.setName("大黄狗");
        dog.setAddress("小新的家");
        return dog;
    }
}
```

### 12.2 处理 JSON - @RequestBody

前面是通过表单，或者 url 请求携带 参数名=参数值 把数据提交给目标方法

（1）这里举例客户端发送 json 字符串数据

（2）使用 SpringMVC 的 @RequestBody 将客户端提交的 json 数据封装成 JavaBean 对象

（3）再把这个 JavaBean 以 json 对象的形式返回

User.java

```java
public class User {
    private String userName;
    private Integer age;

    public User() {
    }

    public User(String userName, Integer age) {
        this.userName = userName;
        this.age = age;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "userName='" + userName + '\'' +
                ", age=" + age +
                '}';
    }
}
```

json.jsp

```jsp v-pre
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>json 提交</title>
    <%--引入 JQuery--%>
    <script type="text/javascript" src="script/jquery-3.6.0.min.js"></script>
    <%--编写 JQuery 代码和请求--%>
    <script type="text/javascript">
        $(function () {
            //给 id="getJson" 绑定点击事件
            $("#getJson").click(function () {
                //console.log("ok ...");
                var url = this.href;
                var args = {"time" : new Date()}; //这是要发送的数据，为了防止页面缓存
                $.post(
                    url,
                    args,
                    function (data) {
                        console.log("data = ", data);
                        console.log("dog.name = ", data.name);
                        console.log("dog.address = ", data.address);

                    },
                    "json"
                )
                return false;
            })

            //绑定按钮点击事件，提交 json 数据
            //SpringMVC 可以在后台将 json 转成对象
            $("button[name = 'butt1']").click(function () {
                //将 userName 和 age 封装成 json 字符串，发送给目标方法
                var url = "/springmvc/save2";
                var userName = $("#userName").val();
                var age = $("#age").val();
                //将 json 对象转成 json 字符串
                var args = JSON.stringify({"userName": userName, "age": age});

                $.ajax({
                    url: url,
                    data: args,
                    type: "POST",
                    success: function (data) {
                        console.log("返回的 data = ", data);
                    },
                    //下面这个 contentType 参数，是指定发送数据时的编码和格式
                    contentType: "application/json;charset=utf-8"
                })
            })
        })
    </script>
</head>
<body>
<h1>请求一个 json 数据</h1>
<%--当用户点击超链接时，我们发出一个 Ajax 请求--%>
<a href="<%=request.getContextPath()%>/json/dog" id="getJson">点击获取 json 数据</a>


<h1>发送一个 json 数据</h1>
u:<input id="userName" type="text"> <br/>
a:<input id="age" type="text"> <br/>
<button name="butt1">添加用户</button>
</body>
</html>
```

JsonHandler.java

```java
/**
     * @RequestBody User user 在形参指定了 @RequestBody
     * SpringMVC 就会将提交的 json 字符串数据填充给指定的 JavaBean
     */
    @RequestMapping(value = "/save2")
    @ResponseBody
    public User save2(@RequestBody User user) {
        //将前台传过来的数据以 json 的格式响应回浏览器
        System.out.println("user = " + user);
        return user;
    }
```

### 12.3 处理 JSON - 注意事项和细节

（1）目标方法正常返回 JSON 需要的数据，可以是一个对象，也可以是一个集合

```java
//编写方法，以 json 格式返回多个 Dog
    @RequestMapping(value = "/json/dogs")
    @ResponseBody
    public List<Dog> getJsons() {
        List<Dog> dogs = new ArrayList<>();
        dogs.add(new Dog("大黄狗", "小新的家"));
        dogs.add(new Dog("大黄狗2", "小新2的家"));
        dogs.add(new Dog("大黄狗3", "小新3的家"));
        return dogs;
    }
```

（2）@ResponseBody 可以直接写在 Handler 类上，这样就对这个类的所有方法生效

（3）@ResponseBody + @Controller 可以直接写成 @RestController

### 12.4 `HttpMessageConverter<T>`

SpringMVC 处理 JSON 底层实现是依靠 HttpMessageConverter&lt;T&gt; 来进行转换的

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222119524.png)

处理 JSON 的底层实现（`HttpMessageConverter<T>`）：

（1）使用 `HttpMessageConverter<T>` 将请求信息转化并绑定到处理方法的入参中，或将响应结果转为对应类型的响应信息，Spring 提供了两种途径：

​      1）使用 @RequestBody / @ResponseBody 对目标方法进行标注

​      2）使用 `HttpEntity<T>` / `ResponseEntity<T>` 作为目标方法的入参或返回值

（2）当控制器处理方法使用到 @RequestBody / @ResponseBody 或 `HttpEntity<T>` / `ResponseEntity<T>` 时，Spring 首先根据请求头或响应头的 Accept 属性选择匹配的 HttpMessageConverter，进而根据参数类型或泛型类型的过滤得到匹配的 HttpMessageConverter，若找不到可用的 HttpMessageConverter 将报错

### 12.5 文件下载 `ResponseEntity<T>`

在 SpringMVC 中，通过返回 `ResponseEntity<T>` 的类型，可以实现文件下载的功能

json.jsp

```jsp
<h1>下载文件的测试</h1>
<a href="<%=request.getContextPath()%>/downFile">点击下载文件</a>
```

JsonHandler.java

```java
//响应用户下载文件的请求
    @RequestMapping(value = "/downFile")
    public ResponseEntity<byte[]> downFile(HttpSession session) throws Exception {
        //(1) 先获取到下载文件的 inputStream
        InputStream resourceAsStream = session.getServletContext().getResourceAsStream("/img/1.jpg");
        //(2) 开辟一个存放文件的 byte 数组，这里使用 byte[] 是可以支持二进制数据
        byte[] bytes = new byte[resourceAsStream.available()];
        //(3) 将下载的文件的数据读入到 byte 数组
        resourceAsStream.read(bytes);
        //(4) 创建返回的 HttpStatus
        HttpStatus httpStatus = HttpStatus.OK;
        //(5) 创建 headers
        HttpHeaders headers = new HttpHeaders();
        //指定返回的数据，客户端应当以附件的形式下载
        headers.add("Content-Disposition", "attachment;filename=1.jpg");
        //(6) 构建一个 ResponseEntity 对象
        ResponseEntity<byte[]> responseEntity = new ResponseEntity<>(bytes, headers, httpStatus);

        return responseEntity;
    }
```

### 12.6 作业布置

把前面的数据格式化、验证以及国际化、JSON处理，文件下载相关代码和案例写一遍

## 第 13 章 SpringMVC 文件上传

### 13.1 基本介绍

（1）SpringMVC 为文件上传提供了直接的支持，这种支持是通过即插即用的 MultipartResolver 实现的，Spring 用 Jakarta Commons FileUpload 技术实现了一个 MultipartResolver 实现类：CommonsMultipartResovler

（2）SpringMVC 上下文中默认没有装配 MultipartResolver，因此默认情况下不能处理文件的上传工作，如果想使用 Spring 的文件上传功能，需先在上下文中配置 MultipartResolver

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222119102.png)

### 13.2 代码实现

（1）引入 SpringMVC 文件上传需要的 jar 包

（2）配置文件上传解析器，在 springDispatcherServlet-servlet.xml

fileUpload.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>文件上传</title>
</head>
<body>
<h1>文件上传的演示</h1>
<form action="<%=request.getContextPath()%>/fileUpload" method="post" enctype="multipart/form-data">
    文件介绍: <input type="text" name="introduce"> <br>
    选择文件: <input type="file" name="file"> <br/>
    <input type="submit" value="上传文件">
</form>
</body>
</html>
```

springDispatcherServlet-servlet.xml

```xml
<!--配置文件上传需要的 bean-->
    <bean class="org.springframework.web.multipart.commons.CommonsMultipartResolver" id="multipartResolver"/>
```

FileUploadHandler.java

```java
@Controller
public class FileUploadHandler {
    //编写方法，处理文件上传的请求
    @RequestMapping(value = "/fileUpload")
    public String fileUpload(@RequestParam(value = "file") MultipartFile file, HttpServletRequest request, String introduce) throws IOException {
        //接收到提交的文件名
        String originalFilename = file.getOriginalFilename();
        System.out.println("你上传的文件名 = " + originalFilename);
        System.out.println("introduce = " + introduce);
        //得到要把上传文件保存到哪个路径
        String fileFullPath = request.getServletContext().getRealPath("/img/" + originalFilename);
        //创建文件
        File saveToFile = new File(fileFullPath);
        //将上传的文件转存到 saveToFile
        file.transferTo(saveToFile);

        return "success";
    }
}
```

## 第 14 章 自定义拦截器

### 14.1 什么是拦截器

（1）SpringMVC 也可以使用拦截器对请求进行拦截处理，用户可以自定义拦截器来实现特定的功能

（2）自定义的拦截器必须实现 HandlerInterceptor 接口

（3）自定义拦截器的三个方法：

​      1）preHandler()：这个方法在业务处理器处理请求之前被调用，在该方法中对用户请求 request 进行处理

​      2）postHandler()：这个方法在目标方法处理完请求后执行

​      3）afterCompletion()：这个方法在完全处理完请求后被调用，可以在该方法中进行一些资源清理的操作

### 14.2 自定义拦截器执行流程分析图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222119089.png)

（1）如果 preHandle 方法返回 false，则不再执行目标方法，可以在此指定返回页面

（2）postHandle 在目标方法被执行后执行，可以在方法中访问到目标方法返回的 ModelAndView 对象

（3）若 preHandle 返回 true，则 afterCompletion 方法在渲染视图之后被执行

（4）若 preHandle 返回 false，则 afterCompletion 方法不会被调用

（5）在配置拦截器时，可以指定该拦截器对哪些请求生效，哪些请求不生效

### 14.3 自定义拦截器应用实例

#### 14.3.1 快速入门

完成一个自定义拦截器，学习如何配置拦截器和拦截器的运行流程

过滤器由 Tomcat 接管，所以在 web.xml 中配置，而拦截器是由 SpringMVC 接管，所以在 springDispatcherServlet-servlet.xml 配置

interceptor.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>测试自定义拦截器</title>
</head>
<body>
<h1>测试自定义拦截器</h1>
<a href="<%=request.getContextPath()%>/hi">测试自定义拦截器 - hi()</a>
<a href="<%=request.getContextPath()%>/hello">测试自定义拦截器 - hello()</a>
</body>
</html>
```

拦截器 MyInterceptor01.java

```java
@Component
public class MyInterceptor01 implements HandlerInterceptor {
    /**
    * @Author: 止束
    * @Params: [request, response, handler]
    * @Return boolean
    * @Description:
     * preHandle() 在目标方法执行前被执行
     * 如果 preHandle() 返回 false，就不再执行目标方法
     * 该方法可以获取到 request、response、handler
     * 这里可以根据业务，进行拦截，并指定跳转到哪个页面
    */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("--MyInterceptor01--preHandle()--");
        return true;
    }

    /**
    * @Author: 止束
    * @Params: [request, response, handler, modelAndView]
    * @Return void
    * @Description:
     * postHandle() 在目标方法执行后执行
     * 该方法可以获取到目标方法返回的 ModelAndView 对象
    */
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        System.out.println("--MyInterceptor01--postHandle()--");
    }

    /**
    * @Author: 止束
    * @Params: [request, response, handler, ex]
    * @Return void
    * @Description:
     * afterCompletion() 在视图渲染后被执行，这里可以进行资源清理工作
    */
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        System.out.println("--MyInterceptor01--afterCompletion()--");
    }
}
```

目标方法 FurnHandler.java

```java
@Controller
public class FurnHandler {
    @RequestMapping(value = "/hi")
    public String hi() {
        System.out.println("--FurnHandler--hi()--");
        return "success";
    }

    @RequestMapping(value = "/hello")
    public String hello() {
        System.out.println("--FurnHandler--hello()--");
        return "success";
    }
}
```

配置拦截器 springDispatcherServlet-servlet.xml

```xml
<!--配置自定义拦截器-->
    <mvc:interceptors>
        <!--
            第一种配置方式:直接使用 ref 引用到对应的 myInterceptor01，这种方式会拦截所有的目标方法
        -->
        <ref bean="myInterceptor01"/>
    </mvc:interceptors>
```

#### 14.3.2 注意事项和细节

（1）默认的配置会对所有的目标方法进行拦截，也可以指定哪些方法需要拦截，比如只拦截 hi()

```xml
<!--配置自定义拦截器-->
    <mvc:interceptors>      
        <!--
            第二种配置方式:
            <mvc:mapping path="/hi"/> 指定要拦截哪个路径的请求,即要拦截哪个方法
            <ref bean="myInterceptor01"/> 指定使用哪个拦截器去拦截
        -->
        <mvc:interceptor>
            <mvc:mapping path="/hi"/>
            <ref bean="myInterceptor01"/>
        </mvc:interceptor>
    </mvc:interceptors>
```

（2）mvc:mapping 支持通配符，同时指定不对哪些目标方法进行拦截

```xml
<!--配置自定义拦截器-->
    <mvc:interceptors>      
        <!--
            第三种配置方式:
            <mvc:mapping path="/h*"/> 通配符方式，表示拦截以 /h 打头的路径
            <mvc:exclude-mapping path="/hello"/> 表示不拦截 /hello
            <ref bean="myInterceptor01"/> 指定使用哪个拦截器去拦截
        -->
        <mvc:interceptor>
            <mvc:mapping path="/h*"/>
            <mvc:exclude-mapping path="/hello"/>
            <ref bean="myInterceptor01"/>
        </mvc:interceptor>
    </mvc:interceptors>
```

（3）拦截器需要配置才生效，不配置是不生效的

（4）如果 preHandler() 方法返回了 false，就不会执行目标方法，那么就可以在这个方法里根据业务指定需要跳转的页面

#### 14.3.3 Debug 执行流程

### 14.4 多个拦截器

#### 14.4.1 多个拦截器执行流程示意图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222119570.png)

```xml
<!--配置自定义拦截器-->
    <mvc:interceptors>      
        <!--
            第三种配置方式:
            <mvc:mapping path="/h*"/> 通配符方式，表示拦截以 /h 打头的路径
            <mvc:exclude-mapping path="/hello"/> 表示不拦截 /hello
            <ref bean="myInterceptor01"/> 指定使用哪个拦截器去拦截
        -->
        <mvc:interceptor>
            <mvc:mapping path="/h*"/>
            <mvc:exclude-mapping path="/hello"/>
            <ref bean="myInterceptor01"/>
        </mvc:interceptor>

        <!--配置第二个拦截器-->
        <mvc:interceptor>
            <mvc:mapping path="/h*"/>
            <ref bean="myInterceptor02"/>
        </mvc:interceptor>
    </mvc:interceptors>
```

```java
@Component
public class MyInterceptor02 implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("--MyInterceptor02--preHandle--");
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        System.out.println("--MyInterceptor02--postHandle--");
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        System.out.println("--MyInterceptor02--afterCompletion");
    }
}
```

#### 14.4.2 应用实例 1

如果用户提交的数据有禁用词（比如：病毒），则在第一个拦截器就返回，不执行目标方法

```java
@Component
public class MyInterceptor01 implements HandlerInterceptor {
    /**
    * @Author: 止束
    * @Params: [request, response, handler]
    * @Return boolean
    * @Description:
     * preHandle() 在目标方法执行前被执行
     * 如果 preHandle() 返回 false，就不再执行目标方法
     * 该方法可以获取到 request、response、handler
     * 这里可以根据业务，进行拦截，并指定跳转到哪个页面
    */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("--MyInterceptor01--preHandle()--");
        //获取到用户提交的关键字
        String keyword = request.getParameter("keyword");
        if ("病毒".equals(keyword)) {
            //请求转发到 warning
            request.getRequestDispatcher("/WEB-INF/pages/warning.jsp").forward(request, response);
            return false;
        }
        System.out.println("得到的 keyword = " + keyword);
        return true;
    }

    /**
    * @Author: 止束
    * @Params: [request, response, handler, modelAndView]
    * @Return void
    * @Description:
     * postHandle() 在目标方法执行后执行
     * 该方法可以获取到目标方法返回的 ModelAndView 对象
    */
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        System.out.println("--MyInterceptor01--postHandle()--");
    }

    /**
    * @Author: 止束
    * @Params: [request, response, handler, ex]
    * @Return void
    * @Description:
     * afterCompletion() 在视图渲染后被执行，这里可以进行资源清理工作
    */
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        System.out.println("--MyInterceptor01--afterCompletion()--");
    }
}
```

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>警告</title>
</head>
<body>
<h1>不要乱讲话</h1>
</body>
</html>
```

### 14.5 作业布置

（1）把前面的 SpringMVC 文件上传，自定义拦截器相关代码和案例过一遍

（2）简述 SpringMVC 自定义拦截器工作流程并画出示意图

## 第 16 章 异常处理

### 16.1 异常处理基本介绍

（1）SpringMVC 通过 HandlerExceptionResolver 处理程序的异常，包括 Handler 映射、数据绑定以及目标方法执行时发生的异常

（2）主要处理 Handler 中用 @ExceptionHandler 注解定义的方法

（3）ExceptionHandlerMethodResolver 内部若找不到 @ExceptionHandler 注解的话，会找 @ControllerAdvice 类的 @ExceptionHandler 注解方法，这样就相当于一个全局异常处理器

### 16.2 局部异常

如果不处理异常，界面非常不友好

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222119489.png)

exception.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>异常信息</title>
</head>
<body>
<h1>测试异常</h1>
<a href="<%=request.getContextPath()%>/testException01?num=0">点击测试异常</a> <br><br>
</body>
</html>
```

MyExceptionHandler.java

```java
@Controller
public class MyExceptionHandler {

    //编写方法，模拟异常,如果我们不做异常处理，是由 Tomcat 默认页面显示
    @RequestMapping(value = "/testException01")
    public String test01(Integer num) {
        int i = 9 / num;
        return "success";
    }

    /**
    * @Author: 止束
    * @Params: []
    * @Return java.lang.String
    * @Description:
     * localException() 方法可用来处理局部异常，即本类发生的异常
     * @ExceptionHandler({ArithmeticException.class, NullPointerException.class}) 表示有算术异常和空指针异常就来到 localException() 这个方法处理
     * Exception ex 表示生成的异常对象，可以通过 ex 得到相关的信息
    */
    @ExceptionHandler({ArithmeticException.class, NullPointerException.class})
    public String localException(Exception ex, HttpServletRequest request) {
        System.out.println("局部异常信息是 = " + ex.getMessage());
        //将异常信息带到下一个页面
        request.setAttribute("reason", ex.getMessage());
        return "exception_mes";
    }
}
```

exception_mes.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>异常信息提示</title>
</head>
<body>
<h1>程序发生了异常</h1>
异常信息 - ${requestScope.reason}
</body>
</html>
```

### 16.3 全局异常

全局异常处理机制：ExceptionHandlerMethodResolver 内部若找不到 @ExceptionHandler 注解的话，会找 @ControllerAdvice 类的 @ExceptionHandler 注解方法，这样就相当于一个全局异常处理器

exception.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>异常信息</title>
</head>
<body>
<h1>测试异常</h1>
<a href="<%=request.getContextPath()%>/testException01?num=0">点击测试局部异常</a> <br><br>
<a href="<%=request.getContextPath()%>/testGlobalException">点击测试全局异常</a> <br><br>
</body>
</html>
```

MyExceptionHandler.java 里有一个模拟异常的方法

```java
@Controller
public class MyExceptionHandler {

    //编写方法，模拟异常,如果我们不做异常处理，是由 Tomcat 默认页面显示
    @RequestMapping(value = "/testException01")
    public String test01(Integer num) {
        int i = 9 / num;
        return "success";
    }

    /**
    * @Author: 止束
    * @Params: []
    * @Return java.lang.String
    * @Description:
     * localException() 方法可用来处理局部异常，即本类发生的异常
     * @ExceptionHandler({ArithmeticException.class, NullPointerException.class}) 表示有算术异常和空指针异常就来到 localException() 这个方法处理
     * Exception ex 表示生成的异常对象，可以通过 ex 得到相关的信息
    */
    @ExceptionHandler({ArithmeticException.class, NullPointerException.class})
    public String localException(Exception ex, HttpServletRequest request) {
        System.out.println("局部异常信息是 = " + ex.getMessage());
        //将异常信息带到下一个页面
        request.setAttribute("reason", ex.getMessage());
        return "exception_mes";
    }

    //测试全局异常处理
    @RequestMapping(value = "/testGlobalException")
    public String global() {
        //这里模拟一个数字转换异常 NumberFormatException
        //该异常没有在局部异常中处理，按照异常处理机制，就会交给全局异常处理类处理
        int num = Integer.parseInt("hello");
        return "success";
    }
}
```

MyGlobalException.java 全局异常的处理

```java
/**
 * @Author: 止束
 * @Version: 1.0
 * @DateTime: 2024/7/3 17:21
 * @Description:
 * 如果类上标注了 @ControllerAdvice,就是一个全局异常处理类
 */
@ControllerAdvice
public class MyGlobalException {
    /*
    * 全局异常就是不管是哪个 Handler 抛出的异常，都可以被捕获
    * 这里处理的全局异常就是 NumberFormatException.class, ClassCastException.class
    * */
    @ExceptionHandler({NumberFormatException.class, ClassCastException.class})
    public String globalException(Exception ex, HttpServletRequest request) {
        System.out.println("全局异常处理 - " + ex.getMessage());
        //将异常信息带到下一个页面
        request.setAttribute("reason", ex.getMessage());
        return "exception_mes";
    }
}
```

exception_mes.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>异常信息提示</title>
</head>
<body>
<h1>程序发生了异常</h1>
异常信息 - ${requestScope.reason}
</body>
</html>
```

注意：异常处理时，局部异常优先级高于全局异常

### 16.4 自定义异常

（1）通过 @ResponseStatus 注解，可以自定义异常

自定义异常 AgeException.java

```java
@ResponseStatus(reason = "年龄需要在 1-120 之间", value = HttpStatus.BAD_REQUEST)
public class AgeException extends RuntimeException {

}
```

exception.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>异常信息</title>
</head>
<body>
<h1>测试异常</h1>
<a href="<%=request.getContextPath()%>/testException01?num=0">点击测试局部异常</a> <br><br>
<a href="<%=request.getContextPath()%>/testGlobalException">点击测试全局异常</a> <br><br>
<a href="<%=request.getContextPath()%>/testException02">点击测试自定义异常</a> <br><br>
</body>
</html>
```

模拟异常

```java
@RequestMapping(value = "/testException02")
    public String test02() {
        throw new AgeException();
    }
```

### 16.5 SimpleMappingExceptionResolver

#### 16.5.1 基本说明

（1）如果希望对所有异常进行统一处理，可以使用 SimpleMappingExceptionResolver

（2）它将异常类名映射为视图名，即发生异常时使用对应的视图报告异常

（3）需要在 IOC 容器中配置

#### 16.5.2 应用实例

对数组越界异常进行统一处理，使用 SimpleMappingExceptionResolver

exception.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>异常信息</title>
</head>
<body>
<h1>测试异常</h1>
<a href="<%=request.getContextPath()%>/testException01?num=0">点击测试局部异常</a> <br><br>
<a href="<%=request.getContextPath()%>/testGlobalException">点击测试全局异常</a> <br><br>
<a href="<%=request.getContextPath()%>/testException02">点击测试自定义异常</a> <br><br>
<a href="<%=request.getContextPath()%>/testException03">点击测试统一处理异常</a> <br><br>
</body>
</html>
```

MyExceptionHandler.java 里有个模拟数组越界异常的方法

```java
@RequestMapping(value = "/testException03")
    public String test03() {
        int[] arr = new int[]{3, 9, 10, 190};
        //抛出一个数组越界的异常 ArrayIndexOutOfBoundsException
        System.out.println(arr[90]);
        return "success";
    }
```

springDispatcherServlet-servlet.xml

```xml
<!--配置统一处理异常的 Bean
        arrEx 是处理显示的页面，比如 arrEx.jsp
    -->
    <bean class="org.springframework.web.servlet.handler.SimpleMappingExceptionResolver">
        <property name="exceptionMappings">
            <props>
                <prop key="java.lang.ArrayIndexOutOfBoundsException">arrEx</prop>
            </props>
        </property>
    </bean>
```

arrEx.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>数组越界异常</title>
</head>
<body>
异常信息: 数组越界异常
</body>
</html>
```

#### 16.5.3 对未知异常进行统一处理

对未知异常进行统一处理，使用 SimpleMappingExceptionResolver

exception.jsp

```jsp
<a href="<%=request.getContextPath()%>/testException04">点击测试未知异常</a> <br><br>

```

模拟异常

```java
//模拟发生没有归类的异常
    @RequestMapping(value = "/testException04")
    public String test04() {
        String str = "hello";
        //这里会抛出 StringIndexOutOfBoundsException 异常
        char c = str.charAt(10);
        return "success";
    }
```

```xml
<!--配置统一处理异常的 Bean
        arrEx 是处理显示的页面，比如 arrEx.jsp
    -->
    <bean class="org.springframework.web.servlet.handler.SimpleMappingExceptionResolver">
        <property name="exceptionMappings">
            <props>
                <prop key="java.lang.ArrayIndexOutOfBoundsException">arrEx</prop>
                <prop key="java.lang.Exception">allEx</prop>
            </props>
        </property>
    </bean>
```

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>未知异常信息</title>
</head>
<body>
<h1>系统发生了未知异常</h1>
</body>
</html>
```

#### 16.5.4 异常处理的优先级

局部异常 > 全局异常 > SimpleMappingExceptionResolver > Tomcat 默认机制


