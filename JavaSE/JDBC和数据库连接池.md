# 第十三章 JDBC和数据库连接池

## 13.1 JDBC

### 13.1.1 JDBC的基本原理

（1）JDBC 为访问不同的数据库提供了统一的接口，为使用者屏蔽了细节问题

（2）Java 程序员使用 JDBC，可以连接任何提供了 JDBC 驱动程序的数据库系统，从而完成对数据库的各种操作

（3）JDBC 是 Java 提供的一套用于数据库操作的接口 API，Java 程序员只需要面向这套接口编程即可，不同的数据库厂商需要针对这套接口提供不同的实现

（4）JDBC 的基本原理图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222039432.png)

### 13.1.2 JDBC连接数据库

#### 13.1.2.1 JDBC 程序编写步骤

（1）注册驱动 - 加载 Driver 类

（2）获取连接 - 得到 Connection

（3）执行增删改查 - 发送 SQL 给 MySQL 执行

​		Statement对象用于执行静态SQL语句并返回其生成的结果的对象。执行增删改（dml）用Statement里的executeUpdate方法，此方法返回受影响的行数；执行查询用Statement里的executeQuery方法，此方法返回Resultset数据集。

（4）释放资源 - 关闭相关连接

#### 13.1.2.2 JDBC 连接数据库方式1

```sql
create table actor ( -- 演员表
    id int primary key auto_increment,
    name varchar(32) not null default '',
    sex char(1) not null default '女',
    borndate datetime,
    phone varchar(12)
);
```

```java
/**
 * 前置工作：在项目下创建一个文件夹比如libs用来存放驱动文件，并且把驱动文件加载到模块中
 * */
public class JDBC连接数据库方式1 {
    public static void main(String[] args) throws SQLException {
        //1. 注册驱动
        Driver driver = new Driver(); //创建driver对象

        //2. 得到连接
        String url = "jdbc:mysql://localhost:3306/review";
        //将数据库用户名和密码信息存放入到Properties类中
        Properties properties = new Properties();
        properties.setProperty("user", "root");
        properties.setProperty("password", "123456");
        //进行连接
        Connection connect = driver.connect(url, properties);

        //3. 执行SQL
        String sql = "insert into actor values(null, '刘德华', '男', '1970-11-11', '110')";
        //statement 用于执行静态SQL语句并返回其生成的结果的对象
        Statement statement = connect.createStatement();
        //statement.executeUpdate(sql) 用来执行sql语句，更改表
        int rows = statement.executeUpdate(sql); //执行dml语句，返回的就是受影响的行数
        System.out.println(rows > 0 ? "成功" : "失败");

        //4. 关闭连接资源
        statement.close();
        connect.close();
    }
}
```

#### 13.1.2.3 JDBC 连接数据库方式2

```java
public class JDBC连接数据库方式2 {
    public static void main(String[] args) throws Exception {
        //1. 注册驱动
        //使用反射加载Driver类，动态加载更加灵活，减少依赖性
        Class<?> aClass = Class.forName("com.mysql.cj.jdbc.Driver");
        Driver driver = (Driver)aClass.newInstance();

        //2. 得到连接
        String url = "jdbc:mysql://localhost:3306/review";
        //将数据库用户名和密码信息存放入到Properties类中
        Properties properties = new Properties();
        properties.setProperty("user", "root");
        properties.setProperty("password", "123456");
        //进行连接
        Connection connect = driver.connect(url, properties);

        //3. 执行SQL
        String sql = "insert into actor values(null, '周星驰', '男', '1970-12-12', '111')";
        //statement 用于执行静态SQL语句并返回其生成的结果的对象
        Statement statement = connect.createStatement();
        //statement.executeUpdate(sql) 用来执行sql语句，更改表
        int rows = statement.executeUpdate(sql); //执行dml语句，返回的就是受影响的行数
        System.out.println(rows > 0 ? "成功" : "失败");

        //4. 关闭连接资源
        statement.close();
        connect.close();
    }
}
```

#### 13.1.2.4 JDBC 连接数据库方式3

```java
public class JDBC连接数据库方式3 {
    public static void main(String[] args) throws Exception{
        //1. 注册驱动
        //使用反射加载Driver
        Class<?> aClass = Class.forName("com.mysql.cj.jdbc.Driver");
        Driver driver = (Driver) aClass.newInstance();
        //注册Driver驱动
        DriverManager.registerDriver(driver);

        //2. 得到连接
        String url = "jdbc:mysql://localhost:3306/review";
        String user = "root";
        String password = "123456";
        //进行连接
        Connection connection = DriverManager.getConnection(url, user, password);

        //3. 执行SQL
        String sql = "insert into actor values(null, '张三', '男', '2000-11-11', '112')";
        //statement 用于执行静态SQL语句并返回其生成的结果的对象
        Statement statement = connection.createStatement();
        //statement.executeUpdate(sql) 用来执行sql语句，更改表
        int rows = statement.executeUpdate(sql); //执行dml语句，返回的就是受影响的行数
        System.out.println(rows > 0 ? "成功" : "失败");

        //4. 关闭连接资源
        statement.close();
        connection.close();
    }
}
```

#### 13.1.2.5 JDBC 连接数据库方式4

```java
public class JDBC连接数据库方式4 {
    public static void main(String[] args) throws Exception {
        //使用 Class.forName 自动完成注册驱动，简化代码
        //1. 注册驱动
        //使用反射加载了 Driver 类
        Class.forName("com.mysql.cj.jdbc.Driver");

        //2. 得到连接
        String url = "jdbc:mysql://localhost:3306/review";
        String user = "root";
        String password = "123456";
        //进行连接
        Connection connection = DriverManager.getConnection(url, user, password);

        //3. 执行SQL
        String sql = "insert into actor values(null, '李四', '女', '2008-11-11', '113')";
        //statement 用于执行静态SQL语句并返回其生成的结果的对象
        Statement statement = connection.createStatement();
        //statement.executeUpdate(sql) 用来执行sql语句，更改表
        int rows = statement.executeUpdate(sql); //执行dml语句，返回的就是受影响的行数
        System.out.println(rows > 0 ? "成功" : "失败");

        //4. 关闭连接资源
        statement.close();
        connection.close();
    }
}
```

#### 13.1.2.6 JDBC 连接数据库方式5（使用）

使用配置文件，将各个信息写入到.properties文件中。

```properties
user=root
password=123456
url=jdbc:mysql://localhost:3306/hspedu
driver=com.mysql.cj.jdbc.Driver
```

```java
public class JDBC连接数据库方式5 {
    public static void main(String[] args) throws IOException, ClassNotFoundException, SQLException {
        //通过Properties对象获取配置文件的信息
        Properties properties = new Properties();
        properties.load(new FileInputStream("src\\mysql.properties"));
        //获取相关的值
        String user = properties.getProperty("user");
        String password = properties.getProperty("password");
        String driver = properties.getProperty("driver");
        String url = properties.getProperty("url");

        //1. 注册驱动
        Class.forName(driver); //建议写上
        
        //2. 得到连接
        Connection connection = DriverManager.getConnection(url, user, password);

        //3. 执行SQL
        String sql = "insert into actor values(null, '李四', '女', '2008-11-11', '113')";
        //statement 用于执行静态SQL语句并返回其生成的结果的对象
        Statement statement = connection.createStatement();
        //statement.executeUpdate(sql) 用来执行sql语句，更改表
        int rows = statement.executeUpdate(sql); //执行dml语句，返回的就是受影响的行数
        System.out.println(rows > 0 ? "成功" : "失败");

        //4. 关闭连接资源
        statement.close();
        connection.close();
    }
}
```

### 13.1.3 ResultSet 底层

（1）表示数据库结果集的数据表，通常通过执行查询数据库的语句生成

（2）ResultSet对象保持一个光标指向其当前的数据行。最初，光标位于第一行之前

（3）next方法将光标移动到下一行，如果在ResultSet对象中没有更多行时返回false，因此可以在while循环中使用循环来遍历结果集

```java
public class ResultSet结果集 {
    public static void main(String[] args) throws IOException, ClassNotFoundException, SQLException {
        //通过Properties对象获取配置文件的信息
        Properties properties = new Properties();
        properties.load(new FileInputStream("src\\mysql.properties"));
        //获取相关的值
        String user = properties.getProperty("user");
        String password = properties.getProperty("password");
        String url = properties.getProperty("url");
        String driver = properties.getProperty("driver");
        
        //1. 注册驱动
        Class.forName(driver); //建议写上
        
        //2. 得到连接
        Connection connection = DriverManager.getConnection(url, user, password);
        
        //3. 得到Statement
        Statement statement = connection.createStatement();
        
        //4. 组织SQL
        String sql = "select id,name,sex,borndate from actor";
        //执行给定的SQL语句，该语句返回单个ResultSet对象
        ResultSet resultSet = statement.executeQuery(sql);
        
        //5. 使用while取出数据
        while (resultSet.next()) { //让光标向后移动，如果没有更多行，则返回false
            int id = resultSet.getInt(1); //获取该行的第1列
            //int id1 = resultSet.getInt("id"); //通过列名获取值
            String name = resultSet.getString(2);//获取该行的第1列
            String sex = resultSet.getString(3);
            Date date = resultSet.getDate(4);
            System.out.println(id + "\t" + name + "\t" + sex + "\t" + date);
        }
        
        //6. 关闭连接
        resultSet.close();
        statement.close();
        connection.close();
    }
}
```

### 13.1.4 SQL 注入

#### 13.1.4.1 基本介绍

​		Statement对象可用于执行静态SQL语句并返回其生成的结果的对象，但是会存在SQL注入问题，SQL注入是利用某些系统没有对用户输入的数据进行充分的检查，而在用户输入数据中注入非法的SQL语句段或命令，恶意攻击数据库，要防范SQL注入，可以用从Statement扩展来的PreparedStatement操作。

​		在连接建立后，需要对数据库进行访问，可以通过以下方法执行SQL语句：

​		（1）Statement [存在SQL注入]

​		（2）PreparedStatement [预处理]

​		（3）CallableStatement [存储过程]

#### 13.1.4.2 演示 SQL 注入

```sql
create table admin (
    name varchar(32) not null unique ,
    pwd varchar(32) not null default ''
);

insert into admin values('tom','123');

select * from admin where name = 'tom' and pwd = '123';

-- sql注入
-- 万能用户名: 1' or
-- 万能密码: or '1' = '1
select * from admin where name = '1' or' and pwd = 'or '1'='1'
```

```java
public class SQL注入 {
    public static void main(String[] args) throws IOException, ClassNotFoundException, SQLException {
        Scanner scanner = new Scanner(System.in);
        //让用户输入管理员名和密码
        System.out.println("请输入管理员的名字: ");
        String admin_name = scanner.nextLine();//如果希望看到SQL注入，这里需要用nextLine，因为next当接受到空格或者'就表示结束
        System.out.println("请输入管理员的密码: ");
        String admin_pwd = scanner.nextLine();

        //通过Properties对象获取配置文件的信息
        Properties properties = new Properties();
        properties.load(new FileInputStream("src\\mysql.properties"));
        //获取相关的值
        String user = properties.getProperty("user");
        String password = properties.getProperty("password");
        String url = properties.getProperty("url");
        String driver = properties.getProperty("driver");

        //1. 注册驱动
        Class.forName(driver); //建议写上

        //2. 得到连接
        Connection connection = DriverManager.getConnection(url, user, password);

        //3. 得到Statement
        Statement statement = connection.createStatement();

        //4. 组织sql
        String sql = "select name,pwd from admin where name = '" + admin_name + "' and pwd = '" + admin_pwd + "'";
        ResultSet resultSet = statement.executeQuery(sql);
        if (resultSet.next()) { //如果查询到符合要求的记录，则说明该管理存在
            System.out.println("恭喜，登录成功");
        } else {
            System.out.println("对不起，登录失败");
        }

        //5. 关闭连接
        resultSet.close();
        statement.close();
        connection.close();
        
        /*
            请输入管理员的名字: 1' or
            请输入管理员的密码: or '1' = '1
            恭喜，登录成功
        */
    }
}
```

### 13.1.5 预处理查询 PreparedStatement

（1）传统的 SQL 语句：

```sql
String sql = "select name,pwd from admin where name = '" + admin_name + "' and pwd = '" + admin_pwd + "'";
```

（2）PreparedStatement执行的SQL语句中的参数用问号 ? 来表示，即用 ? 表示占位符，调用PreparedStatement对象的 setXxx() 方法来设置这些参数，setXxx()方法有两个参数，第一个参数是要设置的SQL语句中的参数的索引（从1开始），第二个是设置SQL语句中的相应索引的值

（3）调用 executeQuery() ，执行查询，返回Resultset对象

（4）调用 executeUpdate() ，执行更新，包括增删改

（5）预处理好处：不再使用 + 拼接SQL语句，减少语法错误；有效的解决了SQL注入问题；大大减少了编译次数，效率较高

```java
public class 预处理PreparedStatement执行查询 {
    public static void main(String[] args) throws IOException, ClassNotFoundException, SQLException {
        Scanner scanner = new Scanner(System.in);
        //让用户输入管理员名和密码
        System.out.println("请输入管理员的名字: ");
        String admin_name = scanner.nextLine();//如果希望看到SQL注入，这里需要用nextLine，因为next当接受到空格或者'就表示结束
        System.out.println("请输入管理员的密码: ");
        String admin_pwd = scanner.nextLine();

        //通过Properties对象获取配置文件的信息
        Properties properties = new Properties();
        properties.load(new FileInputStream("src\\mysql.properties"));
        //获取相关的值
        String user = properties.getProperty("user");
        String password = properties.getProperty("password");
        String url = properties.getProperty("url");
        String driver = properties.getProperty("driver");

        //1. 注册驱动
        Class.forName(driver); //建议写上

        //2. 得到连接
        Connection connection = DriverManager.getConnection(url, user, password);

        //3. 得到PreparedStatement
        //3.1 组织SQL，SQL语句的 ? 就相当于占位符
        String sql = "select name, pwd from admin where name = ? and pwd = ?";
        //3.2 PreparedStatement 对象实现了PreparedStatement接口的实现类对象
        PreparedStatement preparedStatement = connection.prepareStatement(sql);
        //3.3 给 ? 赋值
        preparedStatement.setString(1, admin_name);
        preparedStatement.setString(2, admin_pwd);

        //4. 执行 select 语句使用 executeQuery
        ResultSet resultSet = preparedStatement.executeQuery();
        if (resultSet.next()) { //如果查询到符合要求的记录，则说明该管理存在
            System.out.println("恭喜，登录成功");
        } else {
            System.out.println("对不起，登录失败");
        }

        //5. 关闭连接
        resultSet.close();
        preparedStatement.close();
        connection.close();
        
        /*
            请输入管理员的名字: 
            1' or
            请输入管理员的密码: 
            or '1' = '1
            对不起，登录失败
         */
    }
}
```

```java
public class 预处理PreparedStatement执行增删改 {
    public static void main(String[] args) throws IOException, ClassNotFoundException, SQLException {
        Scanner scanner = new Scanner(System.in);
        //让用户输入管理员名和密码
        System.out.println("请输入管理员的名字: ");
        String admin_name = scanner.nextLine();//如果希望看到SQL注入，这里需要用nextLine，因为next当接受到空格或者'就表示结束
        System.out.println("请输入管理员的密码: ");
        String admin_pwd = scanner.nextLine();

        //通过Properties对象获取配置文件的信息
        Properties properties = new Properties();
        properties.load(new FileInputStream("src\\mysql.properties"));
        //获取相关的值
        String user = properties.getProperty("user");
        String password = properties.getProperty("password");
        String url = properties.getProperty("url");
        String driver = properties.getProperty("driver");

        //1. 注册驱动
        Class.forName(driver); //建议写上

        //2. 得到连接
        Connection connection = DriverManager.getConnection(url, user, password);

        //3. 得到PreparedStatement
        //3.1 组织SQL，SQL语句的 ? 就相当于占位符
        //添加记录
        String sql = "insert into admin values (?,?)";

        //修改记录
        //String sql = "update admin set pwd = ? where name = ?";

        //删除记录
        //String sql = "delete from admin where name = ?";

        //3.2 PreparedStatement 对象实现了PreparedStatement接口的实现类对象
        PreparedStatement preparedStatement = connection.prepareStatement(sql);
        //3.3 给 ? 赋值
        preparedStatement.setString(1, admin_name);
        preparedStatement.setString(2, admin_pwd);

        //4. 执行 dml 语句使用 executeUpdate
        int rows = preparedStatement.executeUpdate();
        System.out.println(rows > 0 ? "执行成功" : "执行失败");

        //5. 关闭连接
        preparedStatement.close();
        connection.close();
    }
}
```

### 13.1.6 JDBC API

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222039670.png)

### 13.1.7 JDBCUtils

#### 13.1.7.1 JDBCUtils 开发

​		JDBCUtils 即 JDBC 工具类，就是当有多个 Java 程序要连接数据库时，每个程序连接数据库时都会有相同的代码，JDBCUtils 就是把这些相同的代码提取出来写成一个工具类就是 JDBCUtils

```java
public class JDBCUtils {
    //定义相关的属性(4个)，因为只需要一份，因此用static
    private static String user; //用户名
    private static String password; //密码
    private static String url; //url
    private static String driver; //驱动名

    //在static代码块去初始化
    static {
        try {
            Properties properties = new Properties();
            properties.load(new FileInputStream("src\\mysql.properties"));
            //读取相关的属性值
            user = properties.getProperty("user");
            password = properties.getProperty("password");
            url = properties.getProperty("url");
            driver = properties.getProperty("driver");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    //连接数据库，返回Connection
    public static Connection getConnection() {
        try {
            return DriverManager.getConnection(url,user,password);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    
    //关闭相关资源
    /*
    * 1. Resultset 结果集
    * 2. Statement 或者 PreparedStatement
    * 3. Connection
    * 4. 如果需要关闭资源，就传入对象，否则传入null
    * */
    public static void close(ResultSet set, Statement statement, Connection connection) {
        //判断是否为空
        try {
            if (set != null) {
                set.close();
            }
            if (statement != null) {
                statement.close();
            }
            if (connection != null) {
                connection.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
```

#### 13.1.7.2 JDBCUtilsDML

```java
public class JDBCUtils_Use {
    public static void main(String[] args) {
        //1. 得到连接
        Connection connection = null;
        //2. 组织一个sql
        String sql = "update actor set name = ? where id = ?";
        //3. 创建PreparedStatement对象
        PreparedStatement preparedStatement = null;

        try {
            connection = JDBCUtils.getConnection();
            preparedStatement = connection.prepareStatement(sql);
            //给占位符赋值
            preparedStatement.setString(1,"周星驰");
            preparedStatement.setInt(2,2);
            //执行
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            //关闭资源
            JDBCUtils.close(null, preparedStatement, connection);
        }
    }
}
```

#### 13.1.7.3 JDBCUtils执行查询

```java
public static void main(String[] args) {
        //1. 得到连接
        Connection connection = null;
        //2. 组织一个sql
        String sql = "select * from actor where id = ?";
        //3. 创建PreparedStatement对象
        PreparedStatement preparedStatement = null;
        //4. 创建Resultset结果集
        ResultSet set = null;

        try {
            connection = JDBCUtils.getConnection();
            preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setInt(1, 1);
            //执行sql语句返回一个结果集
            set = preparedStatement.executeQuery();
            //遍历该结果集
            while (set.next()) {
                int id = set.getInt("id");
                String name = set.getString("name");
                String sex = set.getString("sex");
                String borndate = set.getString("borndate");
                String phone = set.getString("phone");
                System.out.println(id + "\t" + name + "\t" + sex + "\t" + borndate + "\t" + phone);
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            //关闭资源
            JDBCUtils.close(set,preparedStatement,connection);
        }
    }
```

### 13.1.8 事务

#### 13.1.8.1 事务介绍

（1）JDBC 程序中当一个 Connection 对象创建时，默认情况下是自动提交事务，即每次执行一个 SQL 语句时，如果执行成功就会向数据库自动提交而不能回滚

（2）JDBC 程序中为了让多个 SQL 语句作为一个整体执行，需要使用事务

（3）调用 Connection 的 setAutoCommit(false) 可以取消自动提交事务

（4）在所有的 SQL 语句都成功执行后，调用 commit() 方法提交事务

（5）在其中某个操作失败或出现异常时调用 rollback() 方法回滚事务

#### 13.1.8.2 事务处理

应用案例：模拟经典的转账业务

假设马云要给马化腾转 100 块钱，SQL 语句就要用 update 更新马云和马化腾的钱数，马云的 update 语句为减 100 块钱，马化腾的 update 语句加 100 块钱，这是两个 update 语句。如果马云的 update 语句执行成功，但马化腾的 update 语句没有执行成功则会造成很大的错误，所以要让两个 update 语句要么都执行成功，要么都执行失败，即把两个 update 语句当成一个 update 语句，这就叫事务。

```java
//没有使用事务
    @Test
    public void noTransaction() {
        //操作转账的业务
        //1. 得到连接
        Connection connection = null;
        //2. 组织一个 sql
        String sql = "update account set balance = balance - 100 where id = 1";
        String sql2 = "update account set balance = balance + 100 where id = 2";
        //3. 创建 PreparedStatement 对象
        PreparedStatement preparedStatement = null;
        ResultSet set = null;
        try {
            //在默认情况下，connection 是默认自动提交，即执行一条 sql 语句就提交一条
            connection = JDBCUtils.getConnection();
            preparedStatement = connection.prepareStatement(sql);
            //执行第一条 sql 语句
            preparedStatement.executeUpdate();

            //这里如果抛出一个异常，那么下面的第二条 sql 语句将不再执行
            int i = 1 / 0; //抛出异常

            preparedStatement = connection.prepareStatement(sql2);
            //执行第二条 sql 语句
            preparedStatement.executeUpdate();
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            //关闭资源
            JDBCUtils.close(null, preparedStatement, connection);
        }
    }
```

```java
//使用事务解决
    @Test
    public void useTransaction() {
        //操作转账的业务
        //1. 得到连接
        Connection connection = null;
        //2. 组织一个 sql
        String sql = "update account set balance = balance - 100 where id = 1";
        String sql2 = "update account set balance = balance + 100 where id = 2";
        //3. 创建 PreparedStatement 对象
        PreparedStatement preparedStatement = null;
        ResultSet set = null;
        try {
            //在默认情况下，connection 是默认自动提交，即执行一条 sql 语句就提交一条
            connection = JDBCUtils.getConnection();
            //将 connection 设置为不自动提交
            connection.setAutoCommit(false);
            preparedStatement = connection.prepareStatement(sql);
            //执行第一条 sql 语句
            preparedStatement.executeUpdate();
            
            //这里如果抛出一个异常，那么下面的第二条 sql 语句将不再执行
            //int i = 1 / 0; //抛出异常，会直接进入 catch 语句
            preparedStatement = connection.prepareStatement(sql2);
            //执行第二条 sql 语句
            preparedStatement.executeUpdate();
            //如果没有发生异常，在这里提交事务
            connection.commit();
        } catch (Exception e) {
            //这里可以进行回滚，即撤销执行的 sql
            //默认回滚到事务开始的状态
            try {
                connection.rollback();
            } catch (SQLException ex) {
                throw new RuntimeException(ex);
            }
            throw new RuntimeException(e);
        } finally {
            //关闭资源
            JDBCUtils.close(null, preparedStatement, connection);
        }
    }
```

### 13.1.9 批处理

#### 13.1.9.1 基本介绍

（1）当需要成批插入或者更新记录时，可以采用 Java 的批量更新机制，这一机制允许多条语句一次性提交给数据库批量处理，通常情况下比单独提交处理更有效率

（2）JDBC 的批量处理语句包括下面方法：

​		1）addBatch()：添加需要批量处理的 SQL 语句或参数

​		2）executeBatch()：执行批量处理语句

​		3）clearBatch()：清空批处理包的语句

（3）JDBC 连接 MySQL 时，如果要使用批处理功能，请在 url 中加参数 `?rewriteBatchedStatements=true`

（4）批处理往往和 PreparedStatement 一起搭配使用，可以减少编译次数，又减少运行次数

#### 13.1.9.2 应用案例

（1）演示向 admin2 表中添加 5000 条数据，看看使用批处理耗时多久

（2）注意：需要修改配置文件

```sql
create table admin2(
    id int primary key auto_increment,
    username varchar(32) not null ,
    password varchar(32) not null 
);
```

```java
//传统方法添加 5000 条数据到 admin2
    @Test
    public void noBatch() throws SQLException {
        Connection connection = JDBCUtils.getConnection();
        String sql = "insert into admin2 values (null,?,?)";
        PreparedStatement preparedStatement = connection.prepareStatement(sql);
        System.out.println("开始执行");
        long start = System.currentTimeMillis(); //开始执行时间
        for (int i = 0; i < 5000; i++) {
            preparedStatement.setString(1, "jack" + i);
            preparedStatement.setString(2, "666");
            preparedStatement.executeUpdate();
        }
        long end = System.currentTimeMillis();
        System.out.println("传统方式耗时 = " + (end - start)); //传统方式耗时 = 49535
        //关闭连接
        JDBCUtils.close(null,preparedStatement,connection);
    }
```

```java
//使用批处理方式添加数据
    @Test
    public void batch() throws SQLException {
        Connection connection = JDBCUtils.getConnection();
        String sql = "insert into admin2 values (null,?,?)";
        PreparedStatement preparedStatement = connection.prepareStatement(sql);
        System.out.println("开始执行");
        long start = System.currentTimeMillis(); //开始执行时间
        for (int i = 0; i < 5000; i++) {
            preparedStatement.setString(1, "tom" + i);
            preparedStatement.setString(2, "666");
            //将 sql 语句加入到批处理包中
            preparedStatement.addBatch();
            //当有 1000 条记录时，再批量执行
            if ((i + 1) % 1000 == 0) { //满 1000 条 sql
                preparedStatement.executeBatch();
                //清空处理包
                preparedStatement.clearBatch();
            }
        }
        long end = System.currentTimeMillis();
        System.out.println("批量方式耗时 = " + (end - start)); //批量方式耗时 = 316
        //关闭连接
        JDBCUtils.close(null, preparedStatement, connection);
    }
```

## 13.2 数据库连接池

### 13.2.1 传统获取 connection 问题分析

（1）传统的 JDBC 数据库连接使用 DriverManager 来获取，每次向数据库建立连接的时候都要将 connection 加载到内存中验证 IP 地址、用户名和密码，当有多个程序想要连接数据库时，就要进行多次连接操作，这将会占用很多的系统资源。

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222039272.png)

（2）每一次的数据库连接使用完都得断开，如果程序出现异常导致没有关闭，将导致数据库内存泄漏，导致重启数据库

（3）解决传统开发中的数据库连接问题，可以采用数据库连接池技术

### 13.2.2 数据库连接池原理

（1）预先在缓冲池中放入一定数量的连接，当程序需要建立数据库连接时只需从缓冲池中取出一个连接进行连接数据库，使用完毕之后再把连接放回缓冲池

（2）数据库连接池负责分配、管理和释放数据库的连接，它允许应用程序重复使用一个现有的数据库连接而不是重新建立一个数据库连接

（3）当应用程序向连接池请求的连接数超过最大连接数量时，这些请求将被加入到等待队列中

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222039336.png)

（4）JDBC 的数据库连接池使用 `javax.sql.DataSource` 来表示，DataSource 只是一个接口，该接口通常由第三方提供实现

### 13.2.3 常用的数据库连接池

#### 13.2.3.1 C3P0

应用案例：使用代码实现 C3P0 数据库连接池，注意引入 jar 包

方式一：在程序中指定相关参数，如 user、url、password 等

```java
//方式一：在程序中指定相关参数，如 user、url、password 等
    @Test
    public void testC3P0_01() throws IOException, PropertyVetoException, SQLException {
        //1. 创建一个数据源对象
        ComboPooledDataSource comboPooledDataSource = new ComboPooledDataSource();
        //2. 通过配置文件 mysql.properties 获取相关连接的信息
        Properties properties = new Properties();
        properties.load(new FileInputStream("mysql.properties"));
        //读取相关的属性值
        String user = properties.getProperty("user");
        String password = properties.getProperty("password");
        String url = properties.getProperty("url");
        String driver = properties.getProperty("driver");

        //给数据源 comboPooledDataSource 设置相关参数
        //数据源就相当于连接池，连接池是由多个数据源组成
        //连接管理是由 comboPooledDataSource 来管理
        comboPooledDataSource.setDriverClass(driver);
        comboPooledDataSource.setJdbcUrl(url);
        comboPooledDataSource.setUser(user);
        comboPooledDataSource.setPassword(password);

        //设置初始化连接数
        comboPooledDataSource.setInitialPoolSize(10);
        //设置最大连接数
        //即第 51 个连接要进入等待队列
        comboPooledDataSource.setMaxPoolSize(50);
        //测试连接池的效率，测试对 MySQL 5000 次操作
        long start = System.currentTimeMillis();
        for (int i = 0; i < 5000; i++) {
            //得到连接
            Connection connection = comboPooledDataSource.getConnection();
            //将连接放回连接池
            connection.close();
        }
        long end = System.currentTimeMillis();
        System.out.println("C3P0 5000次连接 MySQL 的第一种方式耗时 = " + (end - start)); //C3P0 5000次连接 MySQL 的第一种方式耗时 = 966
    }
```

方式二：使用配置文件模板来完成

注意：需要将 C3P0 提供的 c3p0.config.xml 拷贝到 src 目录下，该文件指定了连接数据库和连接池的相关参数

```java
//方式二:使用配置文件模板来完成
    @Test
    public void testC3P0_02() throws SQLException {
        ComboPooledDataSource comboPooledDataSource = new ComboPooledDataSource("zhishu");
        long start = System.currentTimeMillis();
        for (int i = 0; i < 5000; i++) {
            //得到连接
            Connection connection = comboPooledDataSource.getConnection();
            //将连接放回连接池
            connection.close();
        }
        long end = System.currentTimeMillis();
        System.out.println("C3P0 5000次连接 MySQL 的第二种方式耗时 = " + (end - start)); //C3P0 5000次连接 MySQL 的第二种方式耗时 = 936
    }
```

#### 13.2.3.2 德鲁伊连接池

注意：使用德鲁伊连接池需要加入 Druid jar 包，并且加入配置文件 druid.properties 将该文件拷贝到src目录

```java
@Test
    public void testDruid() throws Exception {
        //1. 创建 Properties 对象，读取配置文件
        Properties properties = new Properties();
        properties.load(new FileInputStream("src\\druid.properties"));

        //2. 创建一个指定参数的数据库连接池
        DataSource dataSource = DruidDataSourceFactory.createDataSource(properties);
        long start = System.currentTimeMillis();
        for (int i = 0; i < 5000; i++) {
            //得到连接
            Connection connection = dataSource.getConnection();
            //放回连接池
            connection.close();
        }
        long end = System.currentTimeMillis();
        System.out.println("Druid 5000次连接 MySQL 耗时 = " + (end - start)); //Druid 5000次连接 MySQL 耗时 = 1517
    }
```

### 13.2.4 德鲁伊工具类

将 JDBCUtils 工具类改成由 Druid 实现，即通过德鲁伊数据库连接池获取连接对象

```java
public class JDBCUtilsByDruid {
    private static DataSource dataSource; //dataSource为数据源，即数据库连接池
    //在静态代码块完成 dataSource 初始化
    static {
        Properties properties = new Properties();
        try {
            properties.load(new FileInputStream("src\\druid.properties"));
            //根据 Properties 里的配置信息完成 数据源 的创建
            dataSource = DruidDataSourceFactory.createDataSource(properties);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    
    //编写 getConnection 方法
    public static Connection getConnection() throws SQLException {
        return dataSource.getConnection();
    }
    
    //关闭连接，注意:在数据库连接池技术中，close 不是真的断掉连接而是把使用的 connection 对象放回连接池
    public static void close(ResultSet resultSet, Statement statement, Connection connection) {
        try {
            if (resultSet != null) {
                resultSet.close();
            }
            if (statement != null) {
                statement.close();
            }
            if (connection != null) {
                connection.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
```

### 13.2.5 Apache-DBUtils

#### 13.2.5.1 Apache-DBUtils 引出

对于 ResultSet 结果集存在的问题：当关闭 connection 后，ResultSet 结果集就无法使用，并且 ResultSet 结果集也不利于数据的管理

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222039941.png)

```sql
create table actor
(
    id       int auto_increment primary key,
    name     varchar(32) not null,
    sex      varchar(10) not null,
    borndate datetime    not null,
    phone    varchar(32) not null
);
```

#### 13.2.5.2 老办法将 ResultSet 封装到 ArrayList

```java
public class Actor {
    private int id;
    private String name;
    private String sex;
    private Date borndate;
    private String phone;

    public Actor(int id, String name, String sex, Date borndate, String phone) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.borndate = borndate;
        this.phone = phone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Date getBorndate() {
        return borndate;
    }

    public void setBorndate(Date borndate) {
        this.borndate = borndate;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "Actor{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", borndate=" + borndate +
                ", phone='" + phone + '\'' +
                '}';
    }
}
```

```java
public class ResultSetToArrayList {
    @Test
    public ArrayList<Actor> testSelectToArrayList() {
        System.out.println("使用 Druid 方式完成");
        //1. 得到连接
        Connection connection = null;
        //2. 组织一个 sql
        String sql = "select * from actor where id >= ?";
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        ArrayList<Actor> list = new ArrayList<Actor>();

        //3. 创建 PreparedStatement 对象
        try {
            connection = JDBCUtilsByDruid.getConnection();
            System.out.println(connection.getClass());
            preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setInt(1,1);
            //执行，得到结果集
            resultSet = preparedStatement.executeQuery();
            //遍历结果集
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                String sex = resultSet.getString("sex");
                Date borndate = resultSet.getDate("borndate");
                String phone = resultSet.getString("phone");
                //把得到的 resultSet 的记录封装到 Actor 对象，并放入到 list 集合
                list.add(new Actor(id, name, sex, borndate, phone));
            }
            for (Actor actor : list) {
                System.out.println("id = " + actor.getId() + "\t" + actor.getName());
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            //关闭资源
            JDBCUtilsByDruid.close(resultSet, preparedStatement, connection);
        }

        //因为 ArrayList 和 connection 没有任何关联，所以该集合可以复用
        return list;
    }
}
```

#### 13.2.5.3 Apache-DBUtils 基本介绍

（1）commons-dbutils 是 Apache 组织提供的一个开源的 JDBC 工具类库，它是对 JDBC 的封装，使用 DBUtils 能极大简化 JDBC 编码的工作量

（2）DBUtils 类介绍

​		1）QueryRunner 类：该类封装了 SQL 的执行，是线程安全的，可以实现增、删、改、查、批处理

​		2）ResultSetHandler 接口：该接口用于处理 java.sql.ResultSet，能将数据按要求转换为另一种形式，ResultSetHandler 接口的实现类如下：

| ArrayHandler：把结果集中的第一行数据转换成对象数组。<br/>ArrayListHandler：把结果集中的每一行数据都转换成一个对象数组，再存放到List中。<br/>BeanHandler：将结果集中的第一行数据封装到一个对应的JavaBean实例中。<br/>BeanListHandler：将结果集中的每一行数据都封装到一个对应的JavaBean实例中，存放到List里。<br/>MapHandler：将结果集中的第一行数据封装到一个Map里，key是列名，value就是对应的值。<br/>MapListHandler：将结果集中的每一行数据都封装到一个Map里，然后再存放到List。<br/>ColumnListHandler：将结果集中某一列的数据存放到List中。<br/>KeyedHandler(name)：将结果集中的每一行数据都封装到一个Map里(List)，再把这些map再存到一个map里，其key为指定的列。<br/>ScalarHandler:获取结果集中第一行数据指定列的值,常用来进行单值查询 |
| ------------------------------------------------------------ |

#### 13.2.5.4 DBUtils 执行查询

使用 DBUtils 和 数据库连接池完成对表的查询，注意需要引入 DBUtils 相关的 jar 包

第一种：返回所有记录的情况

```java
//使用 DBUtils 和 数据库连接池完成对表的查询
    @Test
    public void testQueryMany() throws SQLException { //返回结果是多行的情况
        //1. 得到连接(Druid)
        Connection connection = JDBCUtilsByDruid.getConnection();
        //2. 使用 DBUtils 类和接口，先引入 DBUtils 相关的 jar 包
        //3. 创建 QueryRunner 类
        QueryRunner queryRunner = new QueryRunner();
        //4. 执行相关方法，返回 ArrayList 结果集
        String sql = "select * from actor where id >= ?";

        /**
         * (1) query 方法的作用就是执行 sql 语句得到 resultSet 结果集，并把 resultSet 结果集封装到 ArrayList 集合中并返回
         * (2) connection:连接数据库
         * (3) sql:需要执行的 sql 语句
         * (4) new BeanListHandler<>(Actor.class): 将resultSet结果集中的每一行数据都封装到一个对应的 Actor 对象中，
         *     然后把一个一个的 Actor 对象封装到 ArrayList 集合中，底层使用反射机制去获取 Actor 类的属性，然后进行封装
         * (5) 1: 就是给 sql 语句中的 ? 赋值的，可以有多个值，是可变参数
         * (6) 底层得到的 resultSet 会在 query 方法中关闭，下面释放资源时就不用关闭了，还会关闭 PreparedStatement
         * */
        List<Actor> list = queryRunner.query(connection, sql, new BeanListHandler<>(Actor.class), 1);
        for (Actor actor : list) {
            System.out.println(actor);
        }

        //释放资源
        JDBCUtilsByDruid.close(null, null, connection);
    }
```

第二种：返回单行记录的情况

```java
//完成返回的结果是单行记录(单个对象)
    @Test
    public void testQuerySingle() throws SQLException {
        //1. 得到连接(Druid)
        Connection connection = JDBCUtilsByDruid.getConnection();
        //2. 使用 DBUtils 类和接口，先引入 DBUtils 相关的 jar 包
        //3. 创建 QueryRunner
        QueryRunner queryRunner = new QueryRunner();
        //4. 执行相关的方法，返回单个对象
        String sql = "select * from actor where id = ?";

        //因为返回的是单行记录(单个对象),使用的是 BeanHandler
        Actor actor = queryRunner.query(connection, sql, new BeanHandler<>(Actor.class), 2);
        System.out.println(actor);

        //释放资源
        JDBCUtilsByDruid.close(null, null, connection);
    }
```

第三种：返回的结果是单行单列的

```java
//返回的结果是单行单列的，即返回的就是 Object
    @Test
    public void testScalar() throws SQLException {
        //1. 得到连接(Druid)
        Connection connection = JDBCUtilsByDruid.getConnection();
        //2. 使用 DBUtils 类和接口，先引入 DBUtils 相关的 jar 包
        //3. 创建 QueryRunner
        QueryRunner queryRunner = new QueryRunner();
        //4. 执行相关方法，返回单行单列
        String sql = "select name from actor where id = ?";

        Object obj = queryRunner.query(connection, sql, new ScalarHandler(), 2);
        System.out.println(obj);

        //释放资源
        JDBCUtilsByDruid.close(null, null, connection);
    }
```

#### 13.2.5.5 DBUtils 执行 DML（insert、delete、update）

```java
//完成 dml(insert delete update)
    @Test
    public void testDML_insert() throws SQLException {
        //1. 得到连接(Druid)
        Connection connection = JDBCUtilsByDruid.getConnection();
        //2. 使用 DBUtils 类和接口，先引入 DBUtils 相关的 jar 包
        //3. 创建 QueryRunner
        QueryRunner queryRunner = new QueryRunner();
        //4. 这里组织 sql 完成 insert
        String sql = "insert into actor values (null, ?, ?, ?, ?)";

        /**
         * (1) 执行 DML 操作的是 queryRunner.update()
         * (2) 返回的值是受影响的行数
         * */
        int affectedRow = queryRunner.update(connection, sql, "张三", "女", "2013-05-9 18:13:14", "119");
        System.out.println(affectedRow > 0 ? "执行成功" : "执行没有影响到表");

        //释放资源
        JDBCUtilsByDruid.close(null, null, connection);
    }
```

```java
//完成 dml(insert delete update)
    @Test
    public void testDML_delete() throws SQLException {
        //1. 得到连接(Druid)
        Connection connection = JDBCUtilsByDruid.getConnection();
        //2. 使用 DBUtils 类和接口，先引入 DBUtils 相关的 jar 包
        //3. 创建 QueryRunner
        QueryRunner queryRunner = new QueryRunner();
        //4. 这里组织 sql 完成 delete
        String sql = "delete from actor where id = ?";

        /**
         * (1) 执行 DML 操作的是 queryRunner.update()
         * (2) 返回的值是受影响的行数
         * */
        int affectedRow = queryRunner.update(connection, sql, 3);
        System.out.println(affectedRow > 0 ? "执行成功" : "执行没有影响到表");

        //释放资源
        JDBCUtilsByDruid.close(null, null, connection);
    }
```

```java
//完成 dml(insert delete update)
    @Test
    public void testDML_update() throws SQLException {
        //1. 得到连接(Druid)
        Connection connection = JDBCUtilsByDruid.getConnection();
        //2. 使用 DBUtils 类和接口，先引入 DBUtils 相关的 jar 包
        //3. 创建 QueryRunner
        QueryRunner queryRunner = new QueryRunner();
        //4. 这里组织 sql 完成 update
        String sql = "update actor set name = ? where id = ?";

        /**
         * (1) 执行 DML 操作的是 queryRunner.update()
         * (2) 返回的值是受影响的行数
         * */
        int affectedRow = queryRunner.update(connection, sql, "刘德华", 2);
        System.out.println(affectedRow > 0 ? "执行成功" : "执行没有影响到表");

        //释放资源
        JDBCUtilsByDruid.close(null, null, connection);
    }
```

#### 13.2.5.6 数据库中与 JavaBean 中数据类型对应关系表

| 数据库类型 | Java类型           |
| ---------- | ------------------ |
| varchar    | java.lang.String   |
| char       | java.lang.String   |
| date       | java.sql.Date      |
| time       | java.sql.Time      |
| datetime   | java.sql.Timestamp |
| timestamp  | java.sql.Timestamp |
| year       | java.sql.Date      |

### 13.2.6 BasicDAO

#### 13.2.6.1 提出问题

Druid + DBUtils 简化了 JDBC 的开发，但还有不足：

（1）SQL 语句是固定的，不能通过参数传入，通用性不好，需要进行改进，更方便执行增删改查

（2）对于 select 操作，如果有返回值，返回类型不能固定，需要使用泛型

（3）如果将来有很多表，业务需求复杂，不可能只靠一个 Java 类完成

（4）为解决以上问题，引出 BasicDAO

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222040310.png)

（5）DAO 是专门和数据库进行交互的，即完成对数据库(表)的 crud 操作

（6）在 BasicDAO 的基础上，实现一张表对应一个 DAO，更好的完成功能，比如 Customer 表对应一个 Customer.java 类 (JavaBean) 对应一个 CustomerDAO.java

#### 13.2.6.2 DAO的分析

##### 13.2.6.2.1 DAO的设计

com.zhishu.dao

​		com.zhishu.dao.utils //工具类

​		com.zhishu.dao.domain //JavaBean

​		com.zhishu.dao.dao //存放 XxxDAO 和 BasicDAO

​		com.zhishu.dao.test //写测试类

##### 13.2.6.2.2 BasicDAO 实现

```java
//BasicDAO 是其他 DAO 的父类
public class BasicDAO<T> { //泛型指定具体类型
    private QueryRunner queryRunner = new QueryRunner(); //获取 DBUtils 类的 QueryRunner 类

    //开发通用的 DML 方法，针对任意的表，形参为要执行的 sql 语句，和 可变参数
    public int update(String sql, Object... parameters) {
        Connection connection = null;
        try {
            connection = JDBCUtilsByDruid.getConnection(); //获取连接
            int update = queryRunner.update(connection, sql, parameters); //执行 SQL 返回受影响的行数
            return update;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            //关闭资源
            JDBCUtilsByDruid.close(null, null, connection);
        }
    }

    //开发通用的查询方法,针对任意的表
    //1. 返回多个对象(即查询的结果是多行的)
    /**
     * (1) clazz 传入一个类的 Class 对象，比如 Actor.class
     * (2) parameters 传入 ? 的具体值，可以是多个
     * (3) return 根据 Actor.class 返回对应的 ArrayList 集合
     * */
    public List<T> queryMulti(String sql, Class<T> clazz, Object... parameters) {
        Connection connection = null;
        try {
            connection = JDBCUtilsByDruid.getConnection();
            //queryRunner.query() 方法返回的是集合
            //queryRunner.query() 方法先将 查询到的每行记录分别封装成相应类的对象，再将对象封装到集合中，最后返回集合
            return queryRunner.query(connection, sql, new BeanListHandler<T>(clazz), parameters);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            //关闭资源
            JDBCUtilsByDruid.close(null, null, connection);
        }

    }

    //2. 查询单行结果
    public T querySingle(String sql, Class<T> clazz, Object... parameters) {
        Connection connection = null;
        try {
            connection = JDBCUtilsByDruid.getConnection();
            return queryRunner.query(connection, sql, new BeanHandler<T>(clazz), parameters);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            //关闭资源
            JDBCUtilsByDruid.close(null, null, connection);
        }
    }

    //3. 查询单行单列的方法，即返回单值的方法
    public Object queryScalar(String sql, Object... parameters) {
        Connection connection = null;
        try {
            connection = JDBCUtilsByDruid.getConnection();
            return queryRunner.query(connection, sql, new ScalarHandler(), parameters);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            //关闭资源
            JDBCUtilsByDruid.close(null, null, connection);
        }
    }
}
```

##### 13.2.6.2.3 DAO 整体实现

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222040319.png)

```java
public class ActorDAO extends BasicDAO<Actor> {
    //根据业务需求，可以编写特有的方法
}
```

```java
public class TestDAO {
    //测试 ActorDAO 对 actor 表的 crud 操作
    @Test
    public void testActorDAO() {
        ActorDAO actorDAO = new ActorDAO();
        //1. 查询
        List<Actor> actors = actorDAO.queryMulti("select * from actor where id >= ?", Actor.class, 1);
        System.out.println("=====查询多行结果=====");
        for (Actor actor : actors) {
            System.out.println(actor);
        }

        //2. 查询单行记录
        Actor actor = actorDAO.querySingle("select * from actor where id = ?", Actor.class, 2);
        System.out.println("=====查询单行结果=====");
        System.out.println(actor);

        //3. 查询单行单列
        Object o = actorDAO.queryScalar("select name from actor where id = ?", 1);
        System.out.println("=====查询单行单列值=====");
        System.out.println(o);

        //4. DML 操作
        int update = actorDAO.update("insert into actor values(null,?,?,?,?)", "张无忌", "男", "2000-11-11", "999");
        System.out.println(update > 0 ? "执行成功" : "执行没有影响表");
    }
}
```

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222040520.png)

