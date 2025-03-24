# MySQL

## 第 1 章 MySQL 概述

### 1.1 数据库相关概念

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412131836139.png)

（1）所谓安装 MySQL 数据库，就是在主机安装一个数据库管理系统【DBMS】，这个管理程序可以管理多个数据库

（2）一个数据库中可以创建多个表，以保存数据信息

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412212126549.png)

### 1.2 MySQL 数据库

- 关系型数据库【RDBMS】

概念：建立在关系模型基础上，由多张相互连接的二维表组成的数据库

特点：

1. 使用表存储数据，格式统一，便于维护
2. 使用 SQL 语言操作，标准统一，使用方便

- 数据模型

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412131853630.png)

## 第 2 章 SQL

### 2.1 SQL 通用语法

1. SQL 语句可以单行或多行书写，以分号结尾
2. SQL 语句可以使用空格/缩进来增强语句的可读性
3. MySQL 数据库的 SQL 语句不区分大小写，关键字建议使用大写
4. 注释：

- 单行注释：`-- 注释内容` 或 `# 注释内容`
- 多行注释：`/*注释内容*/`

### 2.2 SQL 分类

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412131906433.png)

### 2.3 DDL

#### 2.3.1 DDL - 数据库操作

- 查询

查询所有数据库

`show databases;`

查询当前数据库

`select database();`

- 创建

`create database [if not exists] 数据库名 [default charset 字符集] [collate 排序规则];`

- 删除

`drop database [if exists] 数据库名;`

- 使用

`use 数据库名;`

#### 2.3.2 DDL - 表操作 - 查询

- 查询当前数据库所有表

`show tables;`

- 查询表结构

`desc 表名;`

- 查询指定表的建表语句

`show create table 表名;`

#### 2.3.3 DDL - 表操作 - 创建

```sql
create table 表名(
	字段1 字段1类型[comment 字段1注释],
    字段2 字段2类型[comment 字段2注释],
    字段3 字段3类型[comment 字段3注释],
    ....
    字段n 字段n类型[comment 字段n注释]
)[comment 表注释];
```

注意：[...] 为可选参数，最后一个字段后面没有逗号

#### 2.3.4 DDL - 表操作 - 数据类型

MySQL 中的数据类型有很多，主要分为三类：数值类型、字符串类型、日期时间类型

##### 2.3.4.1 数值类型

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412152159097.png)

举例：score double(4,1) 其中 4 表示最长位数，分数最长是 100.0 四位，1 表示小数位数，规定小数位数只有一位

decimal[m,d]：可以支持更加精确的小数位，M 是这个数的位数（精度）的总数，D 是小数点（标度）后面的位数，如果 D 是 0，则值没有小数点或分数部分，M 最大是 65，D 最大是 30，如果 D 被省略，默认是 0 ，如果 M 被省略，默认是 10

##### 2.3.4.2 字符串类型

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412152204283.png)

定长字符串：比如有 char(10) 不管输入多少个字符都占 10

变长字符串：比如有 varchar(10) 输入几个字符就占几个字符

char(size)：最大是 255 个**字符**

varchar(size)：最大 65535-3 即 65532 个**字节**【因为 utf8 编码用 1-3 个字节用于记录大小】，当是 utf8 编码时，一个字符占 3 个字节，所以 size 最大就是 (65535-3)/3=21844 个字符

char(4)：这个 4 表示字符数（最大255）而不是字节数，不管是中文还是字母都是放四个，按字符计算

varchar(4)：这个 4 表示字符数，不管是字母还是中文都以定义好的表的编码来存放数据

##### 2.3.4.3 日期时间类型

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412152218742.png)

TimeStamp 在 insert 和 update 时，会自动更新时间

#### 2.3.5 DDL - 表操作 - 修改

- 添加字段

`alter table 表名 add 字段名 类型(长度) [comment 注释] [约束];`

案例：为 emp 表增加一个新的字段 nickname，类型为 varchar(20)

- 修改数据类型

`alter table 表名 modify 字段名 新数据类型(长度);`

- 修改字段名和字段类型

`alter table 表名 change 旧字段名 新字段名 类型(长度) [comment 注释] [约束];`

- 删除字段

`alter table 表名 drop 字段名;`

- 修改表名

`alter table 表名 rename to 新表名;`

- 删除表

`drop table [if exists] 表名;`

- 删除指定表，并重新创建该表

`truncate table 表名;`

#### 2.3.6 总结

1. DDL - 数据库操作

```sql
show databases;
create database 数据库名;
use 数据库名;
select database();
drop database 数据库名;
```

2. DDL - 表操作

```sql
show tables;
create table 表名 (字段 字段类型, 字段 字段类型);
desc 表名;
show create table 表名;
alter table 表名 add/modify/change/drop/rename to ...;
drop table 表名;
```

### 2.4 DML

#### 2.4.1 介绍

DML 英文全称是 Data Manipulation Language（数据操作语言），用来对数据库中表的数据记录进行增删改操作

- 添加数据（insert）
- 修改数据（update）
- 删除数据（delete）

#### 2.4.2 DML - 添加数据

1. 给指定字段添加数据

`insert into 表名 (字段名1, 字段名2, ...) values (值1, 值2, ...);`

2. 给全部字段添加数据

`insert into 表名 values (值1, 值2, ...);`

3. 批量添加数据

`insert into 表名 (字段名1, 字段名2, ...) values (值1, 值2, ...), (值1, 值2, ...), (值1, 值2, ...);`

`insert into 表名 values (值1, 值2, ...), (值1, 值2, ...), (值1, 值2, ...);`

注意：

- 插入数据时，指定的字段顺序需要与值的顺序是一一对应的
- 字符串和日期型数据应该包含在引号中
- 插入的数据大小，应该在字段的规定范围内

#### 2.4.3 DML - 修改数据

`update 表名 set 字段名1 = 值1, 字段名2 = 值2, ... [where 条件];`

注意：修改语句的条件可以有，也可以没有，如果没有条件，则会修改整张表的所有数据

#### 2.4.4 DML - 删除数据

`delete from 表名 [where 条件]`

注意：

- delete 语句的条件可以有，也可以没有，如果没有条件，则会删除整张表的所有数据
- delete 语句不能删除某一个字段的值（可以使用 update）

#### 2.4.5 总结

1. 添加数据

2. 修改数据

3. 删除数据

### 2.5 DQL

#### 2.5.1 介绍

DQL 英文全称是 Data Query Language（数据查询语句），数据查询语句用来查询数据库中表的记录

查询关键字：select

#### 2.5.2 语法

```sql
select
	字段列表
from
	表名列表
where
	条件列表
group by
	分组字段列表
having
	分组后条件列表
order by
	排序字段列表
limit
	分页参数
```

- 基本查询
- 条件查询（where）
- 聚合函数（count、max、min、avg、sum）
- 分组查询（group by）
- 排序查询（order by）
- 分页查询（limit）

#### 2.5.3 DQL - 基本查询

1. 查询多个字段

`select 字段1, 字段2, 字段3 ... from 表名;`

`select * from 表名;`

2. 设置别名

`select 字段1 [as 别名1], 字段2 [as 别名2] ... from 表名;`

3. 去除重复记录

`select distinct 字段列表 from 表名;`

查询出来的内容每个字段都相同才会去重

#### 2.5.4 DQL - 条件查询

1. 语法

`select 字段列表 from 表名 where 条件列表;`

2. 条件

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412160020920.png)

#### 2.5.5 DQL - 聚合函数

1. 介绍

将一列数据作为一个整体，进行纵向计算

2. 常见的聚合函数

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412160049374.png)

3. 语法

`select 聚合函数(字段列表) from 表名;`

注意：

- null 值不参与所有聚合函数运算

- count(*) 和 count(列) 的区别：*
  - count(*) 返回满足条件的记录的行数
  - count(列) 统计满足条件的某列有多少个，但是会排除为 null 的情况

- sum 仅对数值起作用，否则会报错


#### 2.5.6 DQL - 分组查询

1. 语法

`select 字段列表 from 表名 [where 条件] group by 分组字段名 [having 分组后过滤条件];`

2. where 与 having 区别

- 执行时机不同：where 是分组之前进行过滤，不满足 where 条件不参与分组；而 having 是分组之后对结果进行过滤

- 判断条件不同：where 不能对聚合函数进行判断，而 having 可以

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412161230947.png)

3. 注意

- 执行顺序：where > 聚合函数 > having
- 分组之后，查询的字段一般为聚合函数和分组字段，查询其它字段无任何意义

#### 2.5.7 DQL - 排序查询

1. 语法

`select 字段列表 from 表名 order by 字段1 排序方式1, 字段2 排序方式2;`

2. 排序方式

- ASC：升序（默认值）
- DESC：降序

3. 注意

如果是多字段排序，当第一个字段值相同时，才会根据第二个字段进行排序

#### 2.5.8 DQL - 分页查询

1. 语法

`select 字段列表 from 表名 limit 起始索引, 查询记录数;`

2. 注意

- 起始索引从 0 开始，`起始索引 = (查询页码 - 1) * 每页显示记录数`
- 分页查询是数据库的方言，不同的数据库有不同的实现，MySQL 中是 limit
- 如果查询的是第一页数据，起始索引可以省略，直接简写为 limit 10

#### 2.5.9 案例

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412161249331.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412161252158.png)

#### 2.5.10 DQL - 执行顺序

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412161254892.png)

### 2.6 DCL

#### 2.6.1 DCL - 介绍

DCL 英文全称是 Data Control Language（数据控制语言），用来管理数据库用户、控制数据库的访问权限

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412171601198.png)

#### 2.6.2 DCL - 管理用户

1. 查询用户

```java
use mysql;
select * from user;
```

2. 创建用户

`create user '用户名'@'主机名' identified by '密码';`

3. 修改用户密码

`alter user '用户名'@'主机名' identified with mysql_native_password by '新密码';`

4. 删除用户

`drop user '用户名'@'主机名';`

5. 注意：

- 主机名可以使用 % 通配
- 这类 SQL 开发人员操作的比较少，主要是 DBA（Database Administrator 数据库管理员）使用

#### 2.6.3 DCL - 权限控制

MySQL 中定义了很多种权限，但是常用的就以下几种：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412171612225.png)

1. 查询权限

`show crants for '用户名'@'主机名';`

2. 授予权限

`grant 权限列表 on 数据库名.表名 to '用户名'@'主机名';`

3. 撤销权限

`revoke 权限列表 on 数据库名.表名 from '用户名'@'主机名';`

4. 注意

- 多个权限之间，使用逗号分隔
- 授权时，数据库名和表名可以使用 `*` 进行通配，代表所有

## 第 3 章 函数

函数是指一段可以直接被另一段程序调用的程序或代码

### 3.1 字符串函数

MySQL 中内置了很多字符串函数，常用的几个如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412171638350.png)

使用：`select 函数(参数);`

### 3.2 数值函数

常见的数值函数如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412171859487.png)

### 3.3 日期函数

常见的日期函数如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412171905620.png)

### 3.4 流程函数

流程函数也是很常用的一类函数，可以在 SQL 语句中实现条件筛选，从而提高语句的效率

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412171915302.png)

## 第 4 章 约束

### 4.1 概述

1. 概念：约束是作用于表中字段上的规则，用于限制存储在表中的数据
2. 目的：保证数据库中数据的正确，有效性和完整性
3. 分类：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412171934081.png)

4. 注意：约束是作用于表中字段上的，可以在创建表/修改表的时候添加约束

### 4.2 约束演示

案例：根据需求，完成表结构的创建

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412172019409.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412172031155.png)

### 4.3 外键约束

#### 4.3.1 概念

外键用来让两张表的数据之间建立连接，从而保证数据的一致性和完整性

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412172033699.png)

注意：目前上述的两张表，在数据库层面，并未建立外键关联，所以是无法保证数据的一致性和完整性的

#### 4.3.2 语法

- 添加外键

第一种方式：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412172037174.png)

第二种方式：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412172037282.png)

- 删除外键

`alter table 表名 drop foreign key 外键名称;`

#### 4.3.3 外键约束的删除/更新行为

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412172044412.png)

语法：`alter table 表名 add constraint 外键名称 foreign key (外键字段) references 主表名(主表字段名) on update cascade on delete cascade;`

细节说明：

（1）外键指向的表的字段要求是 primary key 或者是 unique

（2）表的类型是 innodb，这样的表才支持外键

（3）外键字段的类型要和主键字段的类型一致（长度可以不同）

（4）外键字段的值，必须在主键字段中出现过，或者为 null（前提是外键字段允许为 null）

（5）一旦建立主外键的关系，数据不能随意删除了

## 第 5 章 多表查询

### 5.1 多表关系

#### 5.1.1 概述

项目开发中，在进行数据库表结构设计时，会根据业务需求及业务模块之间的关系，分析并设计表结构，由于业务之间相互关联，所以各个表结构之间也存在着各种联系，基本上分为三种：

- 一对多（多对一）
- 多对多
- 一对一

#### 5.1.2 一对多（多对一）

- 案例：部门与员工的关系
- 关系：一个部门对应多个员工，一个员工对应一个部门
- 实现：在多的一方建立外键，指向一的一方的主键

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412172106011.png)

#### 5.1.3 多对多

- 案例：学生与课程的关系
- 关系：一个学生可以选修多门课程，一门课程也可以供多个学生选择
- 实现：建立第三张中间表，中间表至少包含两个外键，分别关联两方主键

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412172108259.png)

#### 5.1.4 一对一

- 案例：用户与用户详情的关系
- 关系：一对一关系，多用于单表拆分，将一张表的基础字段放在一张表中，其它详情字段放在另一张表中，以提升操作效率
- 实现：在任意一方加入外键，关联另外一方的主键，并且设置外键为唯一的（unique）

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412172116690.png)

### 5.2 多表查询概述

- 概述：指从多张表中查询数据
- 笛卡尔积：笛卡尔乘积是指在数学中，两个集合 A 集合和 B 集合的所有组合情况【在多表查询时，需要消除无效的笛卡尔积】
- 在默认情况下，当两个表查询时，规则是从第一张表中取出一行和第二张表的每一行进行组合，返回结果含有两张表的所有列，一共返回的记录数是第一张表行数 * 第二张表的行数
- 多表查询的条件不能少于表的个数 -1，否则会出现笛卡尔积



![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412172141946.png)

- 多表查询分类

  - 连接查询

    ​		内连接：相当于查询 A、B 交集部分数据

    ​		外连接：

    ​				左外连接：查询左表所有数据，以及两张表交集部分数据

    ​				右外连接：查询右表所有数据，以及两张表交集部分数据

    ​		自连接：当前表与自身的连接查询，自连接必须使用表别名

    ![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412172148817.png)

  - 子查询

### 5.3 内连接

内连接查询语法：

- 隐式内连接

`select 字段列表 from 表1, 表2 where 条件 ...;`

- 显式内连接

`select 字段列表 from 表1 [inner] join 表2 on 连接条件...;`

**内连接查询的是两张表交集的部分**

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412201558870.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412201623484.png)

### 5.4 外连接

子查询是利用 where 子句对两张表或者多张表形成的笛卡尔积进行筛选，根据关联条件，显示所有匹配的记录，匹配不上的，不显示。例如：列出部门名称和这些部门的员工名称和工作，同时要求显示出那些没有员工的部门该怎么办？用外连接

外连接查询语法：

- 左外连接

`select 字段列表 from 表1 left [outer] jion 表2 on 条件...;`

相当于查询表1（左表）的所有数据包含表1和表2交集部分的数据

- 右外连接

`select 字段列表 from 表1 right [outer] join 表2 on 条件...;`

相当于查询表2（右表）的所有数据包含表1和表2交集部分的数据

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412201630459.png)

### 5.5 自连接

自连接是指在同一张表的连接查询【将同一张表看做两张表】

自连接查询语法：

`select 字段列表 from 表A 别名A join 表A 别名B on 条件...;`

自连接查询，可以是内连接查询，也可以是外连接查询

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412201638300.png)

### 5.6 联合查询 - union，union all

对于 union 查询，就是把多次查询的结果合并起来，形成一个新的查询结果集

```java
select 字段列表 from 表A...
union [all]
select 字段列表 from 表B...;
```

对于联合查询的多张表的列数必须保持一致，字段类型也需要保持一致

union all 会将全部的数据直接合并在一起，union 会对合并之后的数据去重

### 5.7 子查询

- 概念：SQL 语句中嵌套 select 语句，称为嵌套查询，又称子查询

`select * from t1 where column1 = (select column1 from t2);`

子查询外部的语句可以是 insert/update/delete/select 中的任何一个

- 根据子查询结构的不同，分为：
  - 标量子查询（子查询结果为单个值）
  - 列子查询（子查询结果为一列）
  - 行子查询（子查询结果为一行）
  - 表子查询（子查询结果为多行多列）

- 根据子查询位置，分为：where 之后、from 之后、select 之后
- 标量子查询

子查询返回的结果是单个值（数字、字符串、日期等），最简单的形式，这种子查询称为标量子查询

常用的操作符：= <> > >= < <=

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412201653686.png)

- 列子查询

子查询返回的结果是一列（可以是多行），这种子查询称为列子查询

常用的操作符：in、not in、any、some、all

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412201658174.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412201701881.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412201702702.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412201704372.png)

- 行子查询

子查询返回的结果是一行（可以是多列），这种子查询称为行子查询

常用的操作符：=、<>、in、not in

- 表子查询

子查询返回的结果是多行多列，这种子查询称为表子查询

常用的操作符：in

### 5.8 多表查询案例

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412212001887.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412212012332.png)

### 5.9 表复制

自我复制数据【蠕虫复制】

有时为了对某个 SQL 语句进行效率测试，我们需要海量数据时，可以使用此法为表创建海量数据

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412261625386.png)

### 5.10 总结

1. 多表关系

一对多：在多的一方设置外键，关联一的一方的主键

多对多：建立中间表，中间表包含两个外键，关联两张表的主键

一对一：用于表结构的拆分，在其中任何一方设置外键（unique），关联另一方的主键

2. 多表查询

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412271432259.png)

## 第 6 章 事务

### 6.1 事务简介

事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败

默认 MySQL 的事务是自动提交的，也就是说，当执行一条 DML 语句，MySQL 会立即隐式的提交事务

### 6.2 事务操作

方式一：

- 查看/设置事务提交方式

```java
select @@autocommit;
set @@autocommit = 0; //设置为手动提交事务
```

- 提交事务

```java
commit;
```

- 回滚事务

```java
rollback;
```

方式二：

- 开启事务

```java
start transaction 或 begin;
```

- 提交事务

```java
commit;
```

- 回滚事务

```java
rollback;
```

### 6.3 事务四大特性【ACID】

原子性（Atomicity）：事务是不可分割的最小操作单元，要么全部成功，要么全部失败

一致性（Consistency）：事务完成时，必须使所有的数据都保持一致状态

隔离性（Isolation）：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行

持久性（Durability）：事务一旦提交或回滚，它对数据库中的数据的改变就是永久的

### 6.4 并发事务问题

一个事务包含一条及以上的sql语句

脏读：**一个事务**读到另外**一个事务**还没有提交的数据

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412281215875.png)

解读：开启事务 A 和事务 B，事务 A 查询 DB 中的一条数据，返回的是 DB 中原本的数据，此时事务 B 修改 DB 中的数据但没提交，此时事务 A 再次查询，返回的是事务 B 修改后的数据，这样事务 A 就读到事务 B 还没有提交的数据，这就是脏读 

不可重复读：**一个事务**先后读取同一条记录，但两次读取的数据不同，称之为不可重复读

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412281216811.png)

解读：开启事务 A 和事务 B，当事务 A 查询 id = 1 时返回一个结果，此时事务 B 修改了 id = 1 的记录后提交，此时事务 A 再次查询 id = 1 时返回的是修改后的结果，此时同一个事务的同样的查询语句返回的数据不同，这就是不可重复读，正常情况的可重复读是当再次查询 id = 1 的结果时返回和第一次查询时一样的结果，当事务 A 提交后再次查询才能查到修改后的结果

幻读：

1. 第一种解释：**一个事务**按照条件查询数据时没有对应的数据行，但是在插入数据时，又发现这行数据已经存在，好像出现了幻影

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412281218573.png)

解读：开启事务 A 和事务 B，当事务 A 执行 select id = 1 的语句时，此时因为 DB 中没有，所以显示没查到，此时事务 B 插入一条 id = 1 的数据后提交事务，此时 DB 中有了 id = 1 的数据，此时事务 A 插入 id = 1 的数据会报错，因为 id = 1 的数据已经存在，当事务 A 再次查询 id = 1 的这条数据时，因为解决了不可重复读的问题，导致第二次查询的结果也显示 DB 中没有，此时插入时就出现了幻影



2. 第二种解释：当同一个查询在不同的时间产生不同的结果集时，事务中就会出现所谓的幻象问题。例如，如果 SELECT 执行了两次，但第二次返回了第一次没有返回的行，则该行是“幻像”行。

幻读就是一个事务读到另一个事务新增加并提交的数据 insert。在同一个事务中，对于同一组数据读取到的结果不一致。比如，事务A 新增了一条记录，事务B 在 事务A 提交前后各执行了一次查询操作，发现后一次比前一次多了一条记录。幻读出现的原因就是由于事务并发新增记录而导致的。

1、事例
程序员某一天去消费，花了2千元，然后他的妻子去查看他今天的消费记录（妻子事务开启），看到确实是花了2千元，就在这个时候，程序员花了1万买了一部电脑，即新增INSERT了一条消费记录，并提交。当妻子打印程序员的消费记录清单时（妻子事务提交），发现有两条记录，共花了1.2万元，似乎出现了幻觉，这就是幻读。

2、分析
在这个事例中，事务B读取了数据，接着另一个事务A插入了一条数据。在随后的查询中，事务B就会发现多了一条原本不存在的记录，就好像发生了幻觉一样，这是由于数据新增导致的。

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412281226866.png)

### 6.5 事务隔离级别

|             隔离级别             | 脏读 | 不可重复读 | 幻读 |
| :------------------------------: | :--: | :--------: | :--: |
|    Read uncommitted 读未提交     |  √   |     √      |  √   |
|     Read committed 读已提交      |  ×   |     √      |  √   |
| Repeatable Read 可重复读（默认） |  ×   |     ×      |  √   |
|        Serialiable 串行化        |  ×   |     ×      |  ×   |

```java
-- 查看事务隔离级别
select @@transaction_isolation;

-- 设置事务隔离级别
set [session | global] transaction isolation level {read uncommitted | read committed | repeatable read | serializable}
```

注意：事务隔离级别越高，数据越安全，但是性能越低

## 第 7 章 存储引擎

### 7.1 MySQL 体系结构

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412281836286.png)

- 连接层：最上层是一些客户端和链接服务，主要完成一些类似于连接处理、授权认证及相关的安全方案，服务器也会为安全接入的每个客户端验证它所具有的操作权限
- 服务层：第二层架构主要完成大多数的核心服务功能，如 SQL 接口，并完成缓存的查询，SQL 的分析和优化，部分内置函数的执行，所有跨存储引擎的功能也在这一层实现，如过程、函数等
- 引擎层：存储引擎真正的负责了 MySQL 中数据的存储和提取，服务器通过 API 和存储引擎进行通信，不同的存储引擎具有不同的功能，这样我们可以根据自己的需要来选取合适的存储引擎
- 存储层：主要是将数据存储在文件系统之上，并完成与存储引擎的交互

### 7.2 存储引擎简介

存储引擎就是存储数据、建立索引、更新/查询数据等技术的实现方式，存储引擎是基于表的，而不是基于库的，所以存储引擎也可被称为表类型

1. 在创建表时，指定存储引擎

```java
create table 表名(
	字段1 字段1类型 [comment 字段1注释],
    ......
    字段n 字段n类型 [comment 字段n注释]
)engine = innodb [comment 表注释];
```

2. 查看当前数据库支持的存储引擎

```java
show engines;
```

### 7.3 存储引擎特点

1. InnoDB

介绍：InnoDB 是一种兼顾高可靠性和高性能的通用存储引擎，在 MySQL 5.5 之后，InnoDB 是默认的 MySQL 存储引擎

特点：DML 操作遵循 ACID 模型，支持事务；行级锁，提高并发访问性能；支持外键 foreign key 约束，保证数据的完整性和正确性

文件：xxx.ibd：xxx 代表的是表名，InnoDB 引擎的每张表都会对应这样一个表空间文件，存储该表的表结构（frm、sdi）、数据和索引

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412281910522.png)

2. MyISAM

介绍：MyISAM 是 MySQL 早期的默认存储引擎

特点：不支持事务，不支持外键；支持表锁，不支持行锁；访问速度快

文件：

xxx.sdi：存储表结构信息

xxx.MYD：存储数据

xxx.MYI：存储索引

3. Memory

介绍：Memory 引擎的表数据是存储在内存中的，由于受到硬件问题或断电问题的影响，只能将这些表作为临时表或缓存使用

特点：内存存放、hash 索引（默认）

文件：xxx.sdi：存储表结构信息

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412281921741.png)

### 7.4 存储引擎选择

在选择存储引擎时，应该根据应用系统的特点选择合适的存储引擎，对于复杂的应用系统，还可以根据实际情况选择多种存储引擎进行组合

- InnoDB：是 MySQL 的默认存储引擎，支持事务、外键。如果应用对事务的完整性有比较高的要求，在并发条件下要求数据的一致性，数据操作除了插入和查询之外，还包含很多的更新、删除操作，那么 InnoDB 存储引擎是比较合适的选择
- MyISAM：如果应用是以读操作和插入操作为主，只有很少的更新和删除操作，并且对事务的完整性、并发性要求不是很高，那么选择这个存储引擎是非常合适的
- MEMORY：将所有数据保存在内存中，访问速度快，通常用于临时表及缓存，MEMORY 的缺陷就是对表的大小有限制，太大的表无法缓存在内存中，而且无法保障数据的安全性

## 第 8 章 索引

### 8.1 索引概述

索引是帮助 MySQL 高效获取数据的数据结构（有序）。在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式引用（指向）数据，这样就可以在这些数据结构上实现高级查找算法，这种数据结构就是索引

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412282133288.png)

| 优势                                                         | 劣势                                                         |
| :----------------------------------------------------------- | ------------------------------------------------------------ |
| 提高数据检索的效率，降低数据库的 IO 成本                     | 索引列也是要占用空间的                                       |
| 通过索引列对数据进行排序，降低数据排序的成本，降低 CPU 的消耗 | 索引大大提高了查询效率，同时却也降低更新表的速度，如对表进行 insert、update、delete 时，效率降低 |

### 8.2 索引结构

MySQL 的索引是在存储引擎层实现的，不同的存储引擎有不同的结构，主要包含以下几种：

| 索引结构              | 描述                                                         |
| --------------------- | ------------------------------------------------------------ |
| B+Tree 索引           | 最常见的索引类型，大部分引擎都支持 B+ 树索引                 |
| Hash 索引             | 底层数据结构是用哈希表实现的，只有精确匹配索引列的查询才有效，不支持范围查询 |
| R-tree（空间索引）    | 空间索引是 MyISAM 引擎的一个特殊索引类型，主要用于地理空间数据类型，通常使用较少 |
| Full-text（全文索引） | 是一种通过建立倒排索引，快速匹配文档的方式，类似于 Lucene，Solr，ES |

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412282143378.png)

- 二叉树

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291201535.png)

二叉树缺点：顺序插入时，会形成一个链表，查询性能大大降低，大数据量情况下，层级较深，检索速度慢

- 红黑树

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291216275.png)

红黑树可以自平衡，解决了二叉树在顺序插入时会形成一个链表的问题，红黑树本质也是二叉树，在大数据量的情况下，层级较深，检索速度慢

- B-Tree【多路平衡查找树】

以一颗最大度数（max-degree）为 5（5阶）的 b-tree 为例（每个节点最多存储 4 个 key，5 个指针），树的度数指的是一个节点的子节点个数，每个节点最多存储 4 个 key，如 20/30/62/89，小于 20 走第一个指针，20 到 30 之间走第 2 个指针，依次类推

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291219495.png)

看 B 树是怎么构建的：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291223580.png)
![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121334398.gif)

先往一个节点添加数据，因为一个节点只能存放 4 个 key，所以存放第 5 个 key 后，该节点会自动分裂，分裂规则是中间元素向上分裂，分裂后的节点下挂着两个分裂后的节点

- B+Tree

以一颗最大度数为 4（4 阶）的 b+tree 为例

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291229347.png)
相对于 B-Tree 的区别：

- 所有的数据都会出现在叶子节点
- 叶子节点形成一个单向链表
![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121342329.gif)


MySQL 索引数据结构对经典的 B+Tree 进行了优化，在原 B+Tree 的基础上，增加了一个指向相邻叶子节点的链表指针，就形成了带有顺序指针的 B+Tree，提高区间访问的性能

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291235188.png)

- Hash 索引

哈希索引就是采用一定的 hash 算法，将键值换算成新的 hash 值，映射到对应的槽位上，然后存储在 hash 表中，如果两个（或多个）键值，映射到一个相同的槽位上，它们就产生了 hash 冲突（也称为 hash 碰撞），可以通过链表来解决

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291241000.png)

Hash 索引的特点：

（1）Hash 索引只能用于对等比较（=，in），不支持范围查询（between，>，<，...）

（2）无法利用索引完成排序操作

（3）查询效率高，通常只需要一次检索就可以了，效率通常要高于 B+tree 索引

（4）在 MySQL 中，支持 hash 索引的是 Memory 引擎，而 InnoDB 中具有自适应 hash 功能，hash 索引是存储引擎根据 B+Tree 索引在指定条件下自动构建的

为什么 InnoDB 存储引擎选择使用 B+tree 索引结构？

- 相对于二叉树，层级更少，搜索效率高
- 对于 B-tree，无论是叶子节点还是非叶子节点，都会保存数据，这样导致一页中存储的键值减少，指针跟着减少，要同样保存大量数据，只能增加树的高度，导致性能降低
- 相对于 Hash 索引，B+tree 支持范围匹配及排序操作

### 8.3 索引分类

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291253050.png)

在 InnoDB 存储引擎中，根据索引的存储形式，又可以分为以下两种：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291255089.png)

聚集索引选取规则：

- 如果存在主键，主键索引就是聚集索引
- 如果不存在主键，将使用第一个唯一（unique）索引作为聚集索引
- 如果表没有主键，或没有合适的唯一索引，则 InnoDB 会自动生成一个 rowid 作为隐藏的聚集索引

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291307596.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291309648.png)

1. 以下 SQL 语句，哪个执行效率高？为什么？

```java
select * from user where id = 10;
select * from user where name = 'Arm';

备注：id 为主键，name 字段创建的有索引
```

`select * from user where id = 10;` 比 `select * from user where name = 'Arm';` 效率高

2. InnoDB 主键索引的 B+tree 高度有多高呢？
![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121359657.png)

假设：一行数据大小为 1k，一页中可以存储 16 行这样的数据，InnoDB 的指针占用 6 个字节的空间，主键占用的空间取决于主键的类型，如 int 占 4 个字节，bigint 占 8 个字节，这里假设主键类型是 bigint
如果高度为 2 可以存取多大的数据量：算出最上面的节点的指针数量：设 key 的数量为 n，指针数量比 key 多 1 个，一个页的大小是 16k，那么就有`n * 8 + (n + 1) * 6 = 16 * 1024`，算出 n 约为 1170，那么就有 1171 个指针，每一个指针就指向一个节点，一个节点可以存储 16 行数据，那么总共能存储`1171 * 16 = 18736`行数据
如果高度为 3：第一层节点有 1171 个指针，那么第二层就会有 1171 个节点，第二层的每一个节点又会有 1171 个指针，那么第三层就会有 `1171 * 1171`个节点，那么就能存取`1171 * 1171 * 16 = 21939856`行数据
### 8.4 索引语法

1. 创建索引

```java
create [unique | fulltext] index index_name on table_name (index_col_name,...);
```

2. 查看索引

```java
show index from table_name;
```

3. 删除索引

```java
drop index index_name on table_name;
```

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291347037.png)

### 8.5 SQL 性能分析

1. SQL 执行频率

MySQL 客户端连接成功后，通过 `show [session | global] status` 命令可以提供服务器状态信息，通过如下指令，可以查看当前数据库的 insert、update、delete、select 的访问频次

```java
show global status like 'Com_______' //这里是 7 个下划线，一个下划线代表一个字符
```

2. 慢查询日志

慢查询日志记录了所有执行时间超过指定参数（long_query_time，单位：秒，默认 10 秒）的所有 SQL    语句的日志。MySQL 的慢查询日志默认没有开启，需要在 MySQL 的配置文件（/etc/my.cnf）中配置如下信息：

```java
# 开启 MySQL 慢日志查询开关
slow_query_log=1
# 设置慢日志的时间为 2 秒，SQL 语句执行时间超过 2 秒，就会视为慢查询，记录慢查询日志
long_query_time=2
```

配置完毕之后，通过以下指令重新启动 MySQL 服务器进行测试，查看慢日志文件中记录的信息 /var/lib/mysql/localhost-slow.log

3. profile 详情

`show profiles` 能够在做 SQL 优化时帮助我们了解时间都耗费到哪里去了，通过 have_profiling 参数，能够看到当前 MySQL 是否支持 profile 操作：

```java
select @@have_profiling;
```

默认 profiling 是关闭的，可以通过 set 语句在 session / global 级别开启 profiling：

```java
set profiling = 1;
```

执行一系列的业务 SQL 的操作，然后通过如下指令查看指令的执行耗时：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291409814.png)

4. explain 执行计划

explain 或者 desc 命令获取 MySQL 如何执行 select 语句的信息，包括在 select 语句执行过程中表如何连接和连接的顺序

语法：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291413325.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121449816.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291420721.png)

### 8.6 索引使用原则

1. 验证索引效率

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291425978.png)

2. 最左前缀法则

如果索引了多列（联合索引），假设 profession、age、status 是联合索引，要遵守最左前缀法则，那么查询时要包含最左一列的字段索引才不会失效，如果跳跃某一列，后面的字段索引失效，如果包含所有列，那么所有列的顺序随意，索引不会失效（即最左边的一列必须存在，跟位置无关）
![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121637716.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291523120.png)
![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121639932.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121641621.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121642795.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121643176.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121643007.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121646653.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121648258.png)

3. 范围查询

联合索引中，出现范围查询（>，<），范围查询右侧的列索引失效

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291533415.png)

4. 索引列运算

不要在索引列上进行运算操作，索引将失效

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291535380.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121652031.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121653675.png)

5. 字符串不加引号

字符串类型字段使用时，不加引号，索引将失效

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291537778.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121655638.png)


6. 模糊查询

如果仅仅是尾部模糊匹配，索引不会失效，如果是头部模糊匹配，索引失效

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291539895.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121657044.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121658640.png)

7. or 连接的条件

用 or 分割开的条件，or 的一侧有索引一侧没有索引，那么索引不会生效，只有两侧都有索引，索引才会生效

8. 数据分布影响

如果 MySQL 评估使用索引比全表更慢，则不使用索引

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291546358.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121704757.png)


9. SQL 提示

SQL 提示，是优化数据库的一个重要手段，简单来说，就是在 SQL 语句中加入一些人为的提示来达到优化操作的目的，比如 profession 字段已经有了联合索引，然后我又给 profession 字段添加了单列索引，那么数据库就会在这两个索引中选择一个，SQL 提示就可以让我们自己规定 MySQL 选择使用哪个索引

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291556747.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121712108.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121717942.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121714150.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121718804.png)

10. 覆盖索引

尽量使用覆盖索引，减少使用 `select *`，覆盖索引指查询使用了索引，并且需要返回的列在该索引中已经全部能够找到

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291607312.png)

先看该表中有哪些索引：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121723513.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121727615.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291607933.png)

这里上面的查询是查询 id、profession、age、status，其中 id 有聚集索引，聚集索引的叶子节点存放的是整行的信息，其中 profession、age、status 有二级索引，二级索引的叶子节点存放的该行的主键 id，该查询走的是二级索引，因为二级索引的叶子节点存放了 id，所以不用回表查询，所以效率高。下面的查询是查询 id、profession、age、status、name，走的是二级索引，因为二级索引的叶子节点中找不到 name，所以会根据 id 回表查询聚集索引，从聚集索引的叶子节点拿到整行的信息，所以效率低

再看个例子：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121736495.png)

该表的主键 id 有聚集索引，name 是二级索引

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121747186.png)

当有语句：`select * from tb_user where id = 2;`时，因为是根据 id 查，肯定走聚集索引，2 比 5 小，走左边，找到 2 后因为返回的是 `*`，又因为聚集索引叶子节点存的是该行所有数据，所以直接返回该行

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121750698.png)

当有语句：`select id, name from tb_user where name = 'Arm'` 时：会根据 name 的索引，即二级索引进行查找，因为 A 在 L 的前面，所以走 Lee 的左边，找到 Arm，因为要查找的是 id 和 name，又因为二级索引的叶子节点就是存放的 name 和主键 id，所以可以直接返回，不用回表查询

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121754724.png)

当有语句：`select id, name, gender from tb_user where name = 'Arm';` 时：根据 name 的索引，即二级索引开始查找，找到 Arm 后发现没有 gender 字段，就会根据主键 id 回到聚集索引就行查找，找到 id 为 2 的数据行后提取出 gender 字段后再返回，这就不是覆盖索引了

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121759370.png)

问题：一张表，有四个字段（id，username，password，status），由于数据量大，需要对以下 SQL 语句进行优化，该如何进行才是最优方案：

```java
select id,username,password from tb_user where username = "itcast";
```

解决：给 username 和 password 建立联合索引，这样就建立了关于 username 和 password 的二级索引，二级索引叶子节点挂的就是 id，这样就不用回表查询也可以查询到 id、username、password 这三个字段了

11. 前缀索引

当字段类型为字符串（varchar，text 等）时，有时候需要索引很长的字符串，这会让索引变得很大，查询时，浪费大量的磁盘 IO，影响查询效率，此时可以只将字符串的一部分前缀建立索引，这样可以大大节约索引空间，从而提高索引效率

```java
create index idx_xxxx on table_name(column(n));
```

索引前缀的长度：可以根据索引的选择性来决定，而选择性是指不重复的索引值（基数）和数据表的记录总数的比值，索引选择性越高则查询效率越高，唯一索引的选择性是1，这是最好的索引选择性，性能也是最好的

选择性计算公式
```SQL
# 意思就是找出不同的 email 的数量除以所有记录的数量，如果结果是 1，说明 email 全不同
select count(distinct email) / count(*) from tb_user;

# 意思先取 email 的前 5 位，找出前 5 位不同的 email 的数量除以所有记录的数量，如果结果结果接近 1，说明选择性高，就可以以 email 的前 5 位建立索引
select count(distinct substring(email, 1, 5)) / count(*) from tb_user;
```

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121807310.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503121808469.png)

前缀索引的查询流程：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291705868.png)

12. 单列索引与联合索引

单列索引：即一个索引只包含单个列

联合索引：即一个索引包含了多个列

在业务场景中，如果存在多个查询条件，考虑针对查询字段建立索引时，建议建立联合索引而非单例索引

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291712782.png)

### 8.7 索引设计原则

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291717116.png)

### 8.8 总结

1. 索引概述

索引是高效获取数据的数据结构

2. 索引结构

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291740072.png)

3. 索引分类

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291740470.png)

4. 索引语法

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291740098.png)

5. SQL 性能分析

执行频次、慢查询日志、profile、explain

6. 索引使用

- 联合索引：最左前缀法则（最左边的列必须存在，如果最左边的列不存在，整个索引就失效了，如果最左边的列存在，但是中间跳过了某列，那么后面的列失效），范围查询

- 索引失效：函数运算、字符串不加引号、在前面进行模糊匹配、or连接、MySQL 评估

- SQL 提示：告诉 MySQL 要使用哪个索引

- 覆盖索引：查询返回的列在索引结构中都包含了，我不需要回表查询了，回表查询指在查询时先走二级索引检索到这一行数据的id，再根据 id 回到聚集索引中查找这一行的数据
- 前缀索引
- 单列/联合索引

7. 索引设计原则

## 第 9 章 SQL 优化

### 9.1 插入数据

1. insert 优化

```java
insert into tb_test values(1, 'tom');
insert into tb_test values(2, 'cat');
insert into tb_test values(3, 'jerry');
...
```

优化：

（1）批量插入

```java
insert into tb_test values(1, 'tom'), (2, 'cat'), (3, 'jerry');
```

（2）手动提交事务

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011553069.png)

（3）主键顺序插入

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011553388.png)

主键顺序插入性能高于乱序插入

（4）大批量插入数据

如果一次性需要插入大批量数据，使用 insert 语句插入性能较低，此时可以使用 MySQL 数据库提供的 load 指令进行插入，操作如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011556371.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011556309.png)

### 9.2 主键优化

1. 数据组织方式

在 InnoDB 存储引擎中，表数据都是根据主键顺序组织存放的，这种存储方式的表称为索引组织表

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011603150.png)

2. 页分裂

页可以为空，也可以填充一半，也可以填充 100%，每个页包含了 2-N 行数据（如果一行数据多大，会行溢出），根据主键排列

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011608034.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011614933.png)

解读主键乱序插入：比如已经插好了1,5,9,23,47,55,67,89,101,107（每页放5个），这时插入50时，会开辟一个新的页3，然后找到1号页的50%的位置，把50%以后的元素放到3号页，然后再把50插入到3号页中，最后重新分配指针

3. 页合并

当删除一行记录时，实际上记录并没有被物理删除，只是记录被标记（flaged）为删除并且它的空间变得允许被其它记录声明使用

当页中删除的记录达到 MERGE_THRESHOLD（默认为页的 50%），InnoDB 会开始寻找最靠近的页（前或后）看看是否可以将两个页合并以优化空间使用

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011622594.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011622496.png)

MERGE_THRESHOLD：合并页的阈值，可以自己设置，在创建表或者创建索引时指定

4. 主键设计原则

- 满足业务需求的情况下，尽量降低主键的长度
- 插入数据时，尽量选择顺序插入，选择使用 AUTO_INCREMENT 自增主键
- 尽量不要使用 UUID 做主键或者是其他自然主键，如身份证号

- 业务操作时，避免对主键的修改

### 9.3 order by 优化

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011801191.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011803378.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011804295.png)

### 9.4 group by 优化

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011809059.png)

### 9.5 limit 优化

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011811928.png)

### 9.6 count 优化

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011813166.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011815914.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011818686.png)

### 9.7 update 优化

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501011827880.png)

## 第 10 章 视图/存储过程/触发器

### 10.1 视图

1. 介绍

视图是由数据库中的一个表或多个表导出的虚拟表，其作用是方便用户对数据的操作。视图是一个虚拟表，其内容由查询定义。同真实的表一样，视图包含一系列带有名称的列和行数据。但是，数据库中只存放了视图的定义，而并没有存放视图中的数据，这些数据存放在原来的表中。使用视图查询数据时，数据库系统会从原来的表中取出对应的数据。因此，视图中的数据是依赖于原来的表中的数据的。一旦表中的数据发生改变，显示在视图中的数据也会发生改变。同样对视图的更新，会影响到原来表的数据。

视图是存储在数据库中的查询的SQL语句，它主要出于两种原因：安全原因，视图可以隐藏一些数据，例如，员工信息表，可以用视图只显示姓名、工龄、地址，而不显示社会保险号和工资数等；另一个原因是可使复杂的查询易于理解和使用。这个视图就像一个“窗口”，从中只能看到你想看的数据列。这意味着你可以在这个视图上使用SELECT *，而你看到的将是你在视图定义里给出的那些数据列。

举例：朕想要了解皇宫的国库的相关情况，想知道酒窖有什么酒，剩多少，窖藏多少年，于是派最信任的高公公去清点，高公公去国库清点后报给了朕；朕又想知道藏书情况，于是又派高公公去清点并回来报告给朕，又想知道金银珠宝如何，又派高公公清点。。。过一段时间又想知道藏书情况，高公公还得重新再去清点，皇上问一次，高公公就得跑一次路。后来皇上觉得高公公不容易，就成立了国库管理部门，小邓子负责酒窖，小卓子负责藏书，而小六子负责金库的清点。。。后来皇上每次想了解国库就直接问话负责人，负责人就按照职责要求进行汇报。安排专人管理后，每次皇上想要了解国库情况，就不必让高公公每次都跑一趟，而是指定的人员按照指定的任务完成指定的汇报工作就可以了。和数据库相对应，每次进行查询工作，都需要编写查询代码进行查询；而视图的作用就是不必每次都重新编写查询的SQL代码，而是通过视图直接查询即可。

2. 创建

```java
create [or replace] view 视图名称[(列名列表)] as select语句 [with[cascaded | local] check option]
```

3. 查询

```java
查看创建视图语句：show create view 视图名称;
查看视图数据：select * from 视图名称......;
```

4. 修改

```java
方式一：create [or replace] view 视图名称[(列名列表)] as select 语句 [with[cascaded | local] check option]
方式二：alter view 视图名称[(列名列表)] as select语句 [with[cascaded | local] check option]
```

5. 删除

```java
drop view [if exists] 视图名称 [, 视图名称] ...
```

6. 视图的检查选项

当使用 `with check option` 子句创建视图时，MySQL 会通过视图检查正在更改的每个行，例如插入、更新、删除，以使其符合视图的定义，MySQL 允许基于另一个视图创建视图，它还会检查依赖视图中的规则以保持一致性，为了确定检查的范围，MySQL 提供了两个选项：`cascaded` 和 `local`，默认值为 `cascaded`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501021259760.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501021305893.png)

7. 视图的更新

要使视图可更新，视图中的行与基础表中的行之间必须存在一对一的关系，如果视图包含以下任何一项，则该视图不可更新：

- 聚合函数或窗口函数【sum()、min()、max()、count() 等】
- distinct
- group by
- having
- union 或者 union all

8. 作用

- 简单

视图不仅可以简化用户对数据的理解，也可以简化它们的操作，那些被经常使用的查询可以被定义为视图，从而使得用户不必为以后得操作每次指定全部的条件

- 安全

数据库可以授权，但不能授权到数据库特定行和特定的列上，通过视图用户只能查询和修改它们所能见到的数据

- 数据独立

视图可以帮助用户屏蔽真实表结构变化带来的影响

9. 案例

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501021328277.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501021331578.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501021332552.png)

### 10.2 存储过程

1. 介绍

存储过程是事先经过编译并存储在数据库中的一段 SQL 语句的集合，调用存储过程可以简化应用开发人员的很多工作，减少数据在数据库和应用服务器之间的传输，对于提高数据处理的效率是有好处的

存储过程思想上很简单，就是数据库 SQL 语言层面的代码封装与重用

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501021339114.png)

2. 特点

- 封装、复用
- 可以接收参数，也可以返回数据
- 减少网络交互，效率提升

3. 创建

```java
create procedure 存储过程名称([参数列表])
begin
    -- SQL语句
end;
```

4. 调用

```java
call 名称([参数]);
```

5. 查看

```java
select * from information_schema.routines where routine_schema = 'xxx'; --查询指定数据库的存储过程及状态信息
show create procedure 存储过程名称; --查询某个存储过程的定义
```

6. 删除

```java
drop procedure [if exists] 存储过程名称;
```

7. 变量

### 10.3 存储函数

### 10.4 触发器

1. 介绍

触发器是与表有关的数据库对象，指在 insert/update/delete 之前或之后触发，并执行触发器中定义的 SQL 语句集合，触发器的这种特性可以协助应用在数据库端确保数据的完整性，日志记录，数据校验等操作

使用别名 OLD 和 NEW 来引用触发器中发生变化的记录内容，这与其它的数据库是相似的，现在触发器还只支持行级触发，不支持语句级触发

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501022058835.png)

2. 语法

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501022100054.png)

没听完

## 第 11 章 锁

### 11.1 概述

1. 介绍

锁是计算机协调多个进程或线程并发访问某一资源的机制，在数据库中，除传统的计算资源（CPU、RAM、IO）的争用以外，数据也是一种供许多用户共享的资源，如何保证数据并发访问的一致性、有效性是所有数据库必须解决的一个问题，锁冲突也是影响数据库并发访问性能的一个重要因素，从这个角度来说，锁对数据库而言显得尤其重要，也更加复杂

2. 分类

MySQL 中的锁，按照锁的粒度分，分为以下三类：

- 全局锁：锁定数据库中的所有表
- 表级锁：每次操作锁住整张表
- 行级锁：每次操作锁住对应的行数据

### 11.2 全局锁

1. 介绍

全局锁就是对整个数据库实例加锁，加锁后整个实例就处于只读状态，后续的 DML 的写语句，DDL 语句，以及更新操作的事务提交语句都将被阻塞

其典型的使用场景是做全库的逻辑备份，对所有的表进行锁定，从而获取一致性视图，保证数据的完整性

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041202985.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041205369.png)

2. 特点

数据库中加全局锁，是一个比较重的操作，存在以下问题：

（1）如果在主库上备份，那么在备份期间都不能执行更新，业务基本上就得停摆

（2）如果在从库上备份，那么在备份期间从库不能执行主库同步过来的二进制日志（binlog），会导致主从延迟

在 InnoDB 引擎中，我们可以在备份时加上参数 --single-transaction 参数来完成不加锁的一致性数据备份

```java
mysqldump --single-transaction -uroot -p123456 itcast > itcast.sql
```

### 11.3 表级锁

#### 11.3.1 介绍

表级锁，每次操作锁住整张表，锁定粒度大，发生锁冲突的概率最高，并发度最低，应用在 MyISAM、InnoDB、BDB 等存储引擎中

对于表级锁，主要分为以下三类：

（1）表锁

（2）元数据锁（meta data lock、MDL）

（3）意向锁

#### 11.3.2 表锁

对于表锁，分为两类：

（1）表共享读锁（read lock）

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041220722.png)

读锁，当前用户只能读不能写，其它用户也是只能读不能写

（2）表独占写锁（write lock）

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041223124.png)

写锁，当前用户可以读可以写，其它用户不能读不能写

语法：

（1）加锁：`lock tables 表名... read/write`

（2）释放锁：`unlock tables / 客户端断开连接`

#### 11.3.3 元数据锁（meta data lock, MDL）

MDL 加锁过程是系统自动控制，无需显式使用，在访问一张表的时候会自动加上，MDL 锁主要作用是维护表元数据（表结构）的数据一致性，在表上有活动事务的时候，不可以对元数据进行写入操作。为了避免 DML 与 DDL 冲突，保证读写的正确性

在 MySQL5.5 中引入了 MDL，当对一张表进行增删改查的时候，加 MDL 读锁（共享）；当对表结构进行变更操作的时候，加 MDL 写锁（排他）

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041239605.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041305146.png)

#### 11.3.4 意向锁

为了避免 DML 在执行时，加的行锁与表锁的冲突，在 InnoDB 中引入了意向锁，使得表锁不用检查每行数据是否加锁，使用意向锁来减少表锁的检查

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041309514.png)

1. 意向共享锁（IS）：由语句 `select ... lock in share mode` 添加，与表锁共享锁（read）兼容，与表锁排它锁（write）互斥
2. 意向排他锁（IX）：由 insert、update、delete、select ... for update 添加，与表锁共享锁（read）及排它锁（write）都互斥，意向锁之间不会互斥

### 11.4 行级锁

#### 11.4.1 介绍

行级锁，每次操作锁住对应的行数据，锁定粒度最小，发生锁冲突的概率最低，并发度最高，应用在 InnoDB 存储引擎中

InnoDB 的数据是基于索引组织的，行锁是通过对索引上的索引项加锁来实现的，而不是对记录加的锁，对于行级锁，主要分为以下三类：

1. 行锁（Record Lock）：锁定单个行记录的锁，防止其它事务对此行进行 update 和 delete，在 RC、RR 隔离级别下都支持
2. 间隙锁（Gap Lock）：锁定索引记录间隙（不含该记录），确保索引记录间隙不变，防止其它事务在这个间隙进行 insert，产生幻读，在 RR 隔离级别下都支持

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041334704.png)

3. 临键锁（Next-Key Lock）：行锁和间隙锁组合，同时锁住数据，并锁住数据前面的间隙 Gap，在 RR 隔离级别下支持

#### 11.4.2 行锁

InnoDB 实现了以下两种类型的行锁：

1. 共享锁（S）：允许一个事务去读一行，阻止其它事务获得相同数据集的排它锁
2. 排它锁（X）：允许获取排它锁的事务更新数据，阻止其它事务获得相同数据集的共享锁和排它锁

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041340040.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041341065.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041347518.png)

#### 11.4.3 间隙锁/临键锁

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041513332.png)

注意：间隙锁唯一的目的是防止其它事务插入间隙，间隙锁可以共存，一个事务采用的间隙锁不会阻止另一个事务在同一间隙上采用间隙锁

## 第 12 章 InnoDB 引擎

### 12.1 逻辑存储结构

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102059031.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102101612.png)

### 12.2 架构

MySQL5.5 版本开始，默认使用 InnoDB 存储引擎，它擅长事务处理，具有崩溃恢复特性，在日常开发中使用非常广泛，下面是 InnoDB 架构图，左侧为内存结构，右侧为磁盘结构

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102103769.png)

1. 内存架构

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102106875.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102108791.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102110884.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102111903.png)

2. 磁盘结构

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102114329.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102123949.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102125746.png)

3. 后台线程

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102128782.png)

### 12.3 事务原理

1. 事务

事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败

2. 特性

- 原子性：事务是不可分割的最小操作单元，要么全部成功，要么全部失败
- 一致性：事务完成时，必须使所有的数据都保持一致状态
- 隔离性：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行
- 持久性：事务一旦提交或回滚，它对数据库中的数据的改变就是永久的

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102134521.png)

#### 12.3.1 原理

1. redo log

事务中的持久性就是通过 redo log 实现的，redo log 是重做日志，记录的是事务提交时数据页的物理修改，是用来实现事务的持久性的，该日志文件由两部分组成：重做日志缓冲【redo log buffer】以及重做日志文件【redo log file】，前者是在内存中，后者在磁盘中，当事务提交之后会把所有修改信息都存到该日志文件中，用于在刷新脏页到磁盘发生错误时进行数据恢复使用。redo log 是物理日志，记录的是这个数据页里面的内容是什么样子的

redo log 没有介入前：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102140309.png)

当对数据进行操作时，会先到缓冲区【Buffer Pool】操作数据，如果缓冲区没有该数据就会到磁盘加载该数据，在缓冲区对数据进行修改后该数据页称为脏页，然后缓冲区会把数据同步到磁盘，但是如果在把数据同步到磁盘的时候出错了，就无法保证数据持久性

redo log 介入后：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102143045.png)

在内存区对数据进行增删改后 redo log 会记下数据页的变化，当事务提交时，会把数据页的变化刷新到磁盘区，一段时间后脏页在刷新到磁盘区的时候出错了就可以通过 redo log 进行恢复

那么为什么需要通过 redo log 记录数据页变化提交后写到磁盘而不是提交时直接把修改后的脏页刷新到磁盘呢？

因为一个事务中会操作大量的随机页，通过直接把脏页写到磁盘涉及大量的随机 IO，性能是非常低的，而 redo log 日志文件是追加的，是顺序磁盘 IO，性能要高于随机 IO，这种机制叫 WAL【Write-Ahead Logging】，先写日志，一段时间后再刷新脏页

2. undo log

事务的原子性需要 undo log 来实现，undo log 是回滚日志，用于记录数据被修改前的信息，作用包含两个：提供回滚和 MVCC【多版本并发控制】。undo log 与 redo log 记录物理日志【记录的是这个数据页里面的内容是什么样子的】不同，它是逻辑日志【记录的是每一步进行了什么操作】。可以认为当 delete 一条记录时，undo log 中会记录一条对应的 insert 记录，反之亦然，当 update 一条记录时，它记录一条对应相反的 update 记录，当执行 rollback 时，就可以从 undo log 中的逻辑记录读取到相应的内容并进行回滚

undo log 销毁：undo log 在事务执行时产生，事务提交时，并不会立即删除 undo log，因为这些日志可能还用于 MVCC

undo log 存储：undo log 采用段的方式进行管理和记录，存放在前面介绍的 rollback segment 回滚段中，内部包含 1024 个 undo log segment

### 12.4 MVCC

#### 12.4.1 基本概念

- 当前读

读取的是记录的最新版本，读取时还要保证其它并发事务不能修改当前记录，会对读取的记录进行加锁，对于我们日常的操作如：`select...lock in share mode(共享锁)`，`select...for update`、update、insert、delete【排它锁】都是一种当前读

- 快照读

简单的 select 语句【不加锁】就是快照读，快照读读取的是记录数据的可见版本，有可能是历史数据，不加锁是非阻塞读

（1）Read Committed：每次 select，都生成一个快照读

（2）Repeatable Read：开启事务后第一个 select 语句才是快照读的地方

（3）Serializable：快照读会退化为当前读

- MVCC

MVCC 全称 Multi-Version Concurrency Control，多版本并发控制，指维护一个数据的多个版本，使得读写操作没有冲突，快照读为 MySQL 实现 MVCC 提供了一个非阻塞读的功能，MVCC 的具体实现，还需要依赖于数据库记录中的三个隐式字段、undo log 日志、readView。MVCC 的作用就是在快照读时要通过 MVCC 来查找对应的历史版本

#### 12.4.2 实现原理

- 记录中的隐藏字段

当创建一个表后，有：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111818054.png)

数据库会默认创建三个隐式字段：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111819716.png)

其中：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111819293.png)

- undo log

回滚日志，在 insert、update、delete 的时候产生的便于数据回滚的日志，当 insert 的时候，产生的 undo log 日志只在回滚时需要，在事务提交后，可被立即删除，而 update、delete 的时候，产生的 undo log 日志不仅在回滚时需要，在快照读时也需要，不会立即被删除

有一条记录：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111837057.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111837754.png)

开始事务 2，当事务 2 执行修改语句时，undo log 会先写日志，然后记录被修改，然后提交事务

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111839121.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111840708.png)

开始事务 3，先记录日志，记录日志后再修改，然后提交事务

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111841215.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111842273.png)

开始事务 4，事务 4 先查询记录，然后修改记录，先记录日志，然后再修改

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111845438.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111845446.png)

不同事务或相同事务对同一条记录进行修改，会导致该记录的 undo log 生成一条记录版本的链表，链表的头部是最新的旧记录，链表尾部是最早的旧记录

- readview

ReadView【读视图】是快照读 SQL 执行时 MVCC 提取数据的依据，记录并维护系统当前活跃的事务【未提交】的 id，ReadView 中包含了四个核心字段：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111850225.png)

版本链数据访问规则：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111852950.png)

不同的隔离级别生成 ReadView 的时机不同：

READ COMMITTED：在事务中每一次执行快照读时生成 ReadView

REPEATABLE READ：仅在事务中第一次执行快照读时生成 ReadView，后续复用该 ReadView

（1）READ COMMITTED 【读已提交】隔离级别下，在事务中每一次执行快照读时生成 ReadView

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111901488.png)

看事务 5 第一次查询时生成的 ReadView：其中 `m_ids:{3,4,5}`，m_ids 指的是当前活跃的事务 id 的集合，因为事务 2 已经提交，所以当前活跃的事务 id 只有 3,4,5；`min_trx_id:3`，min_trx_id 指最小活跃事务 id，所以为 3；`max_trx_id:6`，max_trx_id 指预分配事务 id，是当前最大事务的 id + 1，所以是 6；`creator_trx_id:5`，creator_trx_id 指 ReadView 创建者的事务 id，所以为 5

事务 5 第二次查询时生成的 ReadView 同理

那么这两次快照读提取的到底是哪个版本？

先看第一个快照读：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111924643.png)

此时当前记录的事务 id 是 4，那么 trx_id = 4，让 trx_id 与四条规则进行比较，发现一个都满足不了，那么表示当前快照读查找到的数据就不应该是该事务 id = 4 的记录，然后就要沿着版本链继续找，此时当前事务的 id = 3，与四条规则进行比较发现也都不成立，说明当前版本也不成立，然后继续往下找，此时当前事务的 id = 2，与四条规则进行比较发现条件 2 成立，说明可以访问该版本，说明该快照读读的就是该版本，此时把该版本的记录直接返回

第二个快照读同理

（2）在 REPEATABLE READ【可重复读】的隔离级别下，仅在事务中第一次执行快照时生成 ReadView，后续复用该 ReadView

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111936385.png)

可重复读指的是在同一个事务中读取两个相同的数据返回的结果是一样的，两个 ReadView 都一样，匹配规则都一样，当然就可以返回相同的结果，这就保证了可重复读

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111939464.png)

### 12.5 总结

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111945223.png)

