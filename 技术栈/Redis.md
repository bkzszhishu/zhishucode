# Redis

## 第 1 章 Redis 的基础知识

## 1.1 为什么需要 Redis

### 1.1.1 企业需求

高并发、高可用、高性能、海量用户

### 1.1.2 关系型数据库【比如 MySQL】的问题

性能瓶颈：磁盘 IO 性能低下，因为 MySQL 表都是文件的形式

扩展瓶颈：数据关系复杂，扩展性差，不便于大规模集群

### 1.1.3 Redis 的优势

内存存储：降低磁盘 IO 次数

不存储关系，仅存储数据与数据之间的关系，越简单越好

## 1.2 Redis 简介

Redis 是用 C 语言开发的一个开源的高性能键值对【key-value】数据库

### 1.2.1 特征

（1）数据间没有必然的关联关系

（2）高性能

（3）多种数据结构的支持

（4）持久化支持，可以进行数据灾难恢复

### 1.2.2 应用场景

（1）为热点数据加速查询，如热点商品、热点新闻、热点咨询、推广类等高访问量信息等

（2）任务队列，如秒杀、抢购、购票排队等

（3）及时的信息查询，如排行榜、各类网站访问统计

（4）时效性信息控制，如验证码控制、投票控制等

（5）分布式数据共享，如分布式集群架构中的 session 分离

（6）消息队列

（7）分布式锁

# 第 2 章 NoSQL 数据库

NoSQL 即 Not-Only SQL，泛指非关系型的数据库，作为关系型数据库的补充

作用是在应对海量用户和海量数据的情况下，解决带来的数据处理问题

## 2.1 NoSQL 的特点

可扩容，可伸缩、大数据量下的高性能、灵活的数据模型、高可用

## 2.2 常见 NoSQL 的数据库

Redis、memcache、HBase、MongoDB

# 第 3 章 Redis 下载安装

## 3.1 Redis 下载

在实际开发中 Redis 都在 Linux 下工作

## 3.2 Redis 安装

（1）整理 Linux 的网络环境

（2）下载安装最新版的 gcc 编译器

（3）将下载好的 redis-6.2.6.tar.gz 上传到 /opt 目录

（4）进入到 /opt 目录，执行解压命令：`tar -zxvf redis-6.2.6.tar.gz`

（5）解压完成后，进入 redis-6.2.6 目录：`cd redis-6.2.6`

![](https://gitee.com/BKZSZhiShu/pic-bed/raw/master/img/202409101341502.png)

（6）在 redis-6.2.6 目录下，执行 make 命令【编译指令】

（7）执行 `make install` 进行安装

（8）安装成功，默认安装在 /usr/local/bin 目录

![](https://gitee.com/BKZSZhiShu/pic-bed/raw/master/img/202409101344612.png)

redis-benchmark:性能测试工具，可以在自己机器运行，看看自己机器性能如何 

redis-check-aof：修复有问题的 AOF 文件，rdb 和 aof 后面讲 

redis-check-dump：修复有问题的 dump.rdb 文件 

redis-sentinel：Redis 集群使用 

redis-server：Redis 服务器启动命令 

redis-cli：客户端，操作入口

## 3.3 Redis 后台启动和使用

（1）拷贝一份 redis.conf 到其它目录，比如 /etc 目录，注意执行保证能够定位到 redis.conf

`cp redis.conf /etc/redis.conf`

（2）修改 /etc/redis.conf 后台启动设置 daemonize no 改成 yes，并保持退出

`vi /etc/redis.conf`

（3）Redis 启动，注意保证能定位 redis-server 指令

`/usr/local/bin/redis-server /etc/redis.conf`

（4）查看 Redis 是否后台启动成功

`ps -aux | grep redis`

（5）用客户端访问

进入安装目录 `cd /usr/local/bin` 执行指令： `redis-cli`，默认是在 6379 端口，指定端口的方式：`redis-cli -p 6379`

（6）Redis 关闭

单实例关闭：`redis-cli shutdown`

多实例关闭，指定端口关闭：`redis-cli -p 6379 shutdown`

也可以进入 Redis 再关闭：`shutdown`

# 第 4 章 Redis 指令

## 4.1 基础操作

`set key value`：设置 key、value 数据

`get key`：根据 key 查询对应的 value，如果不存在，返回空

`clear`：清除屏幕中的信息

`quit/exit` ：退出客户端【说明：Redis 服务没有结束】

`help 命令名称`：获取命令帮助文档，获取组中所有命令信息名称

## 4.2 对 key【键】的操作

`keys *`：查看当前库所有 key

`exists key`：判断某个 key 是否存在

`type key`：查看你的 key 是什么类型

`del key`：删除指定的 key 数据

`unlink key`：根据 value 选择非阻塞删除【仅将 keys 从 keyspace 元数据中删除，真正的删除会在后续异步操作】

`expire key 10`：10 秒钟：为给定的 key 设置过期时间

`ttl key` ：查看还有多少秒过期，-1 表示永不过期，-2 表示已过期

## 4.3 对 DB【Redis 库】的操作

`select`：命令切换数据库，redis 安装后，默认有 16 个库 0-15，默认操作的是 redis 的 0 号库

`dbsize`：查看当前数据库的 key 的数量

`flushdb`：清空当前库

`flushall`：清空全部库

# 第 5 章 Redis 五大数据类型/结构

## 5.1 Redis 数据存储格式

Redis 自身是一个 Map，其中所有的数据都是采用 key:value 的形式存储。key 是字符串，value 是数据，数据支持多种类型/结构

## 5.2 Redis 数据类型 - 5种常用

### 5.2.1 string

**说明**

（1）String 是 Redis 最基本的类型，一个 key 对应一个 value

（2）String 类型是二进制安全的，Redis 的 string 可以包含任何数据。比如 jpg 图片或者序列化的对象

（3）String 类型是 Redis 基本的数据类型，一个 Redis 中字符串 value 最多可以是 512M

#### 5.2.1.1 String 常用指令

- `set <key> <value>`： 添加键值对
- `get <key>`： 查询对应键值
- `append <key> <value>`： 将给定的 `<value>` 追加到原值的末尾
- `strlen <key>`： 获得值的长度
- `setnx <key> <value>`： 只有在 key 不存在时，设置 key 的值
- `incr <key>`： 将 key 中存储的数字值（字符串）增1，只能对数字值操作，如果为空，新增值为1
- `decr <key>`： 将 key 中存储的数字值（字符串）减1，只能对数字值操作，如果为空，新增值为-1
- `incrby / decrby <key> <步长>`： 将 key 中存储的数字值增减，自定义步长
- `mset <key1> <value1> <key2> <value2> .....`： 同时设置一个或多个 key-value 键值对
- `mget <key1> <key2> <key3> .....`： 同时获取一个或多个 value
- `msetnx <key1> <value1> <key2> <value2> .....`： 同时设置一个或多个 key-value 键值对，当且仅当所有给定 key 都不存在时才设置。具有原子性，即有一个失败则都失败
- `getrange <key> <起始位置> <结束位置>`： 获得值的范围，类似 Java 中的 substring
- `setrange <key> <起始位置> <value>`： 用 `<value>` 覆写 `<key>` 所存储的字符串值，从 `<起始位置>` 开始（索引从 0 开始）
- `setex <key> <过期时间> <value>`： 设置键值的同时，设置过期时间，单位秒
- `getset <key> <value>`： 以新换旧，设置了新值同时获得旧值

### 5.2.2 hash

**说明**：Redis hash 是一个键值对集合，hash 适合用于存储对象，类似 Java 里面的 Map<String,  Object>

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411241236590.png)

#### 5.2.2.1 hash 常用指令

`hset <key> <field> <value>`：给 `<key>` 集合中的 `<field>` 键赋值 `<value>`

`hget <key1> <field>`：取出 `<key1>` 集合 `<field>` 的 `value`

`hmset <key1> <field1> <value1> <field2> <value2> ...`：批量设置 hash 的值

`hmget <key1> <field1> <field2> ...`：批量取出 hash 的 filed 的值

`hexists <key1> <field>`：查看哈希表 `<key1>` 中给定的 `<field>` 是否存在

`hkeys <key>`：列出该 hash 集合的所有 field

`hvals <key>`：列出该 hash 集合的所有 value

`hincrby <key> <field> <increment>`：为哈希表 `<key>` 中的域 `<field>` 的值加上增量 `<increment>`，增量可以是正的也可以是负的

`hsetnx <key> <field> <value>`：将哈希表 `<key>` 中的域 `<field>` 的值设置为 `<value>`，当且仅当域 `<field>` 不存在

### 5.2.3 list

**说明**：list 类型，保存多个数据，底层使用双向链表存储结构实现

#### 5.2.3.1 list 存储结构示意图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411212158067.png)

（1）Redis 列表是简单的字符串列表，按照插入顺序排序，可以添加一个元素到列表的头部或者尾部

（2）底层是个双向链表，对两端的操作性能高，通过索引下标操作中间的节点性能较差

#### 5.2.3.2 list 常用指令

`lpush/rpush <key> <value1> <value2> <value3> ...`：从左边/右边插入一个或多个值

`lpop/rpop <key>`：从左边/右边吐出一个值

`rpoplpush <key1> <key2>`：从 `<key1>` 列表右边吐出一个值插到 `<key2>` 列表左边

`lrange <key> <start> <stop>`：按照索引下标获得元素（从左到右）

`lrange mylist 0 -1`：0 是左边第一个，-1 是右边第一个（0-1 表示获取所有）

`lindex <key> <index>`：按照索引下标获得元素（从左到右）

`llen <key>`：获得列表长度

`linsert <key> before <value> <newvalue>`：在 `<value>` 的前面插入 `<newvalue>`

`lrem <key> <n> <value>`：从左边删除 n 个 value（从左到右）

`lset <key> <index> <value>`：将列表 key 下标为 index 的值替换成 value

#### 5.2.3.3 list 最佳实践

redis 应用于具有操作先后顺序的数据控制

应用场景：系统通知，按照时间顺序展示，将最近的通知列在前面，其它的比如微信的最近转发，微博的最新关注等

### 5.2.4 set

**说明**：

set 提供的功能与 list 类似是一个列表的功能，特殊之处在于 set 是可以自动排重的，即值是不允许重复的，并且无序

#### 5.2.4.1 set 常用指令

`sadd <key> <value1> <value2> ...`：将一个或多个 member 元素加入到集合 key 中，已经存在的 member 元素将被忽略

`smembers <key>`：取出该集合的所有值

`sismember <key> <value>`：判断集合 `<key>` 是否为含有该 `<value>` 值，有 1，没有 0

`scard <key>`：返回该集合的元素个数

`srem <key> <value1> <value2> ...`：删除集合中的某个元素

`spop <key>`：随机从该集合中吐出一个值

`srandmember <key> <n>`：随机从该集合中取出 n 个值，不会从集合中删除

`smove <source> <destination> <value>`：把集合中一个值从一个集合移动到另一个集合

`sinter <key1> <key2>`：返回两个集合的交集元素

`sunion <key1> <key2>`：返回两个集合的并集元素

`sdiff <key1> <key2>`：返回两个集合的差集元素（key1 中的，不包含 key2 中的）

### 5.2.5 有序集合Zset（sorted set）

**说明**：

（1）Redis 有序集合 zset 与普通集合 set 非常相似，是一个没有重复元素的字符串集合

（2）不同之处是有序集合的每个成员都关联了一个评分（score），这个评分（score）被用来按照从最低到最高分的方式排序集合中的成员，集合的成员是唯一的，但是评分可以是重复的

（3）因为元素是有序的，所以也可以很快的根据评分（score）或者次序（position）来获取一个范围的元素

（4）访问有序集合的中间元素也是非常快的，能够使用有序集合作为一个没有重复成员的列表

#### 5.2.5.1 sorted set 常用指令

`zadd <key> <score1> <value1> <score2> <value2> ...`：将一个或多个 member 元素及其 score 值加入到有序集 key 当中

`zrange <key> <start> <stop> [WITHSCORES]`：返回有序集 key 中下标在 `<start> <stop>` 之间的元素，带 WITHSCORES，可以让分数一起和值返回到结果集

`zscore <key> <member>`：返回有序集 key 中成员 member 的 score 的值

`zrangebyscore key min max [withscores] [limit offset count]`：返回有序集 key 中所有 score 值介于 min 和 max 之间（包括等于 min 或 max）的成员，有序集成员按 score 值递增次序排列

`zrevrangebyscore key max min [withscores] [limit offset count]`：同上，改为从大到小排列

`zincrby <key> <increment> <value>`：为元素的 score 加上增量

`zrem <key> <value>`：删除该集合下指定值的元素

`zcount <key> <min> <max>`：统计该集合分数区间内的元素个数

`zrank <key> <value>`：返回该值在集合中的排名，从 0 开始

# 第 6 章 Redis 配置

## 6.1 常规配置

### 6.1.1 设置密码

### 6.1.2 daemonize

### 6.1.3 loglevel

### 6.1.4 logfile

### 6.1.5 设定库的数量

## 6.2 Units 单位

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411241653883.png)

（1）配置大小单位，开头定义了一些基本的度量单位，只支持 bytes，不支持 bit

（2）不区分大小写

## 6.3 `#INCLUDES#`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411241655856.png)

多实例的情况可以把公用的配置文件提取出来，然后 include

## 6.4 `#NETWORK#`

### 6.4.1 bind

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411241658646.png)

默认情况下 bind 127.0.0.1 只能接受本机的访问请求

如果服务器是需要远程访问的，需要将其注释掉

### 6.4.2 protected-mode

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411241701884.png)

默认是保护模式，如果服务器是需要远程访问的，需要将 yes 设置为 no

### 6.4.3 port

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411241703213.png)

Redis 服务默认端口是 6379

### 6.4.4 timeout

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411241706561.png)

一个空闲的客户端维持多少秒会关闭，0 表示关闭该功能，即永不超时

### 6.4.5 tcp-keepalive

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411241710307.png)

（1）tcp-keepalive 是对访问客户端的一种心跳检测，每隔 n 秒检测一次，单位为秒

（2）如果设置为 0，则不会进行 Keepalive 检测，建议设置成 60

（3）为什么需要心跳检测机制：

TCP 协议中有长连接和短连接之分，短连接环境下数据交互完毕后，主动释放连接，长连接的环境下进行一次数据交互后，很长一段时间内无数据交互时，客户端可能意外断开，这些 TCP 连接并未来得及正常释放，那么，连接的另一方并不知道对端的情况，它会一直维护这个连接，长时间的积累会导致非常多的半打开连接，造成端系统资源的消耗和浪费，且有可能导致在一个无效的数据链路层面发送业务数据，结果就是发送失败，所以服务器端要做到快速感知失败，减少无效连接操作，这就有了 TCP 的 Keepalive（保活探测）机制

## 6.5 `#GENERAL通用#`

### 6.5.1 daemonize

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411241721756.png)

是否为后台进程，设置为 yes 后表示守护进程，后台启动

### 6.5.2 pidfile

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411241724411.png)

存放 pid 文件的位置，每个实例会产生一个不同的 pid 文件，记录 Redis 的进程号

### 6.5.3 loglevel

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411241821013.png)

redis 日志分为 4 个级别，默认的设置为 notice，开发测试阶段可以用 debug（日志内容较多，不建议生产环境使用），生产模式一般选用 notice

redis 日志分为 4 个级别说明：

（1）debug：会打印出很多信息，适用于开发和测试阶段

（2）verbose（冗长的）：包含很多不太有用的信息，但比 debug 要清爽一些

（3）notice：适用于生产模式

（4）warning：警告信息

### 6.5.4 logfile

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411241826614.png)

logfile "" 就是说默认为控制台打印，并没有日志文件生成

可以为 redis.conf 的 logfile 指定配置项

### 6.5.5 databases 16

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411241836146.png)

设定库的数量，默认是 16，默认数据库为 0 号，可以使用 `select <dbid>` 命令在连接上指定数据库 id

## 6.6 `#SECURITY安全#`

### 6.6.1 设置密码

#### 6.6.1.1 redis.conf 中设置密码

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411241847940.png)

需要在配置文件中进行永久设置，设置成 requirepass 123456

## 6.7 `#LIMITS限制#`

### 6.7.1 maxclients

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411242154766.png)

设置 redis 同时可以与多少个客户端进行连接，默认情况下为 10000 个客户端，如果达到了此限制，redis 会拒绝新的连接请求，并且向这些连接请求方发出 "max number of clients reached"

### 6.7.2 maxmemory

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411242201869.png)

在默认情况下，对 32 位实例会限制在 3GB，因为 32 位的机器最大只支持 4GB 的内存，而系统本身就需要一定的内存资源来支持运行，所以 32 位机器限制最大 3GB 的可用内存是非常合理的，这样可以避免因为内存不足而导致 Redis 实例崩溃

在默认情况下，对于 64 位实例是没有限制的

当用户开启了 redis.conf 配置文件的 maxmemory 选项，那么 Redis 将限制选项的值不能小于 1MB

### 6.7.3 maxmemory-policy

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411242209008.png)

policy 一览：

（1）volatile-lru：使用 LRU 算法移除 key，只对设置了过期时间的键生效

（2）allkeys-lru：在所有集合 key 中，使用 LRU 算法移除 key

（3）volatile-random：在过期集合中移除随机的 key，只对设置了过期时间的键

（4）allkeys-random：在所有集合 key 中，移除随机的 key

（5）volatile-ttl：移除那些 TTL 值最小的 key，即那些最近要过期的 key

（6）noeviction：不进行移除，针对写操作，只是返回错误信息

### 6.7.4 maxmemory-samples

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411242217899.png)

设置样本数量，LRU 算法和最小 TTL 算法都并非是精确的算法，而是估算值，所以你可以设置样本的大小，redis 默认会检查这么多个 key 并选择其中 LRU 的那个

一般设置 3 到 7 的数字，数值越小样本越不准确，但性能消耗越小

# 第 7 章 发布和订阅

## 7.1 发布和订阅是什么

Redis 发布订阅（pub/sub）是一种消息通信模式：发送者（pub）发送消息，订阅者（sub）接收消息，Redis 客户端可以订阅任意数量的频道

客户端订阅频道示意图：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411242228635.png)

当给这个频道发布消息后，消息就会发送给订阅的客户端

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411242232092.png)

## 7.2 如何理解发布和订阅模式

### 7.2.1 任务队列

任务队列就是传递消息的队列，与任务队列进行交互的实体有两类，一类是生产者（producer），另一类则是消费者（consumer），生产者将需要处理的任务放入任务队列中，而消费者则不断地从任务队列中读入任务信息并执行

### 7.2.2 简单理解

Subscriber：收音机，可以收到多个频道，并以队列方式显示

Publisher：电台，可以往不同的 FM 频道中发消息

Channel：不同频率的 FM 频道

从 Pub/Sub 的机制来看，它更像是一个广播系统，多个订阅者（Subscriber）可以订阅多个频道（Channel），多个发布者（Publisher）可以往多个频道（Channel）中发布消息

## 7.3 发布订阅模式分类

### 7.3.1 一个发布者，多个订阅者

主要应用场景：通知、公告

可以作为消息队列或者消息管道

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411242246286.png)

### 7.3.2 多个发布者，一个订阅者

主要应用场景：排行榜、投票、计数

各应用程序作为 Publisher 向 Channel 中发送消息，Subscriber 端收到消息后执行相应的业务逻辑，比如写数据库，显示...

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411242248767.png)

### 7.3.3 多个发布者，多个订阅者

主要应用场景：群聊、聊天

可以向不同的 Channel 中发送消息，由不同的 Subscriber 接收

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411242251901.png)

## 7.4 命令行实现发布和订阅

### 7.4.1 发布订阅操作

（1）PUBLISH channel msg

将信息 message 发送到指定的频道 channel

（2）SUBSCRIBE channel 【channel ...】

订阅频道，可以同时订阅多个频道

（3）UNSUBSCRIBE 【channel ...】

取消订阅指定的频道，如果不指定频道，则会取消订阅所有频道

（4）PSUBSCRIBE pattern 【pattern ...】

订阅一个或多个符合给定模式的频道，每个模式以 * 作为匹配符，比如 it* 匹配所有以 it 开头的频道（it.news、it.blog、it.tweets 等等），news.* 匹配所有以 news. 开头的频道（news.it、news.global.today 等等），诸如此类

（5）PUNSUBSCRIBE 【pattern 【pattern ...】】

退订指定的规则，如果没有参数则会退订所有规则

### 7.4.2 快速入门

（1）一个发布者两个订阅者

订阅者：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411250128029.png)

发布者：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411250129266.png)

（2）其它类推

注意：发布的消息没有持久化，已关闭就没了。订阅的客户端，只能收到订阅后发布的消息

# 第 8 章 Jedis

## 8.1 Jedis 介绍

Java 程序操作 Redis 的工具

## 8.2 Jedis 操作 Redis 数据

创建 Maven 项目，引入 jar 包

```java
<dependency>
            <groupId>redis.clients</groupId>
            <artifactId>jedis</artifactId>
            <version>3.2.0</version>
        </dependency>
```

```java
public class Jedis_ {
    //连接 Redis
    //1. 如果 Redis 配置了密码，则需要进行身份校验
    //2. 因为需要连接到 Redis 端口，比如 6379，就需要配置防火墙，放开端口
    //3. 注意修改 bind，支持远程连接
    @Test
    public void con() {
        Jedis jedis = new Jedis("192.168.200.130", 6379);
        //如果 Redis 配置了密码，则需要进行身份校验
        jedis.auth("123456");
        String res = jedis.ping();
        System.out.println("连接成功 ping 返回结果 = " + res);
        jedis.close(); //关闭当前连接，注意并没有关闭 Redis 服务器
    }
}
```

```java
package com.hspedu.jedis;

import org.junit.Test;
import redis.clients.jedis.Jedis;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * @Author: 止束
 * @Version: 1.0
 * @DateTime: 2024/11/25 1:46
 * @Description:
 */
public class Jedis_ {
    //连接 Redis
    //1. 如果 Redis 配置了密码，则需要进行身份校验
    //2. 因为需要连接到 Redis 端口，比如 6379，就需要配置防火墙，放开端口
    //3. 注意修改 bind，支持远程连接
    @Test
    public void con() {
        Jedis jedis = new Jedis("192.168.200.130", 6379);
        //如果 Redis 配置了密码，则需要进行身份校验
        jedis.auth("123456");
        String res = jedis.ping();
        System.out.println("连接成功 ping 返回结果 = " + res);
        jedis.close(); //关闭当前连接，注意并没有关闭 Redis 服务器
    }

    //key 操作
    @Test
    public void key() {
        Jedis jedis = new Jedis("192.168.200.130", 6379);
        jedis.auth("123456");
        jedis.set("k1", "v1");
        jedis.set("k2", "v2");
        jedis.set("k3", "v3");

        //获取 key
        Set<String> keys = jedis.keys("*");
        for (String key : keys) {
            System.out.println("key == " + key);
        }
        //判断 key 是否存在，ttl
        System.out.println(jedis.exists("k1")); //true
        System.out.println(jedis.ttl("k2")); //-1
        System.out.println(jedis.get("k3")); //v3

        //关闭连接
        jedis.close();
    }

    //string
    @Test
    public void string() {
        Jedis jedis = new Jedis("192.168.200.130", 6379);
        jedis.auth("123456");

        //批量设置 k-v
        jedis.mset("k1", "jack", "k2", "scott", "k3", "hsp");
        //批量获取
        List<String> mget = jedis.mget("k1", "k2");
        for (String s : mget) {
            System.out.println("s == " + s);
        }
        jedis.close();
    }

    //list
    @Test
    public void list() {
        Jedis jedis = new Jedis("192.168.200.130", 6379);
        jedis.auth("123456");

        //添加 list 数据
        jedis.lpush("name_list", "jack", "tom", "nono");
        List<String> name_list = jedis.lrange("name_list", 0, -1);
        for (String name : name_list) {
            System.out.println("name == " + name);
        }
        //关闭连接
        jedis.close();
    }

    //set
    @Test
    public void set() {
        Jedis jedis = new Jedis("192.168.200.130", 6379);
        jedis.auth("123456");

        jedis.sadd("city", "北京", "上海");
        jedis.sadd("city", "广州");
        jedis.sadd("city", "深圳");

        Set<String> smembers = jedis.smembers("city");
        for (String city : smembers) {
            System.out.println("city == " + city);
        }
        jedis.close();
    }

    //hash
    @Test
    public void hash() {
        Jedis jedis = new Jedis("192.168.200.130", 6379);
        jedis.auth("123456");

        //第一种方法
        //设置
        jedis.hset("hash01", "name", "李白");
        jedis.hset("hash01", "age", "30");

        //获取
        String name = jedis.hget("hash01", "name");
        System.out.println("name == " + name);

        //第二种方法
        //先构建一个 map，然后加入
        Map<String, String> maps = new HashMap<>();
        maps.put("job", "java工程师");
        maps.put("name", "smith");
        maps.put("email", "smith@qq.com");
        jedis.hset("hash02", maps);

        //取出
        List<String> person = jedis.hmget("hash02", "job", "name", "email");
        for (String s : person) {
            System.out.println("s == " + s);
        }

        jedis.close();
    }

    //zset 有序集合
    @Test
    public void zset() {
        Jedis jedis = new Jedis("192.168.200.130", 6379);
        jedis.auth("123456");

        jedis.zadd("hero", 1, "关羽");
        jedis.zadd("hero", 2, "张飞");
        jedis.zadd("hero", 3, "赵云");
        jedis.zadd("hero", 4, "马超");
        jedis.zadd("hero", 5, "黄忠");

        //取出
        Set<String> heroes = jedis.zrange("hero", 0, -1);
        for (String hero : heroes) {
            System.out.println("hero = " + hero);
        }
        jedis.close();
    }
}
```

# 第 9 章 SpringBoot2 整合 Redis

（1）创建 Maven 项目

（2）修改 pom.xml 引入相关依赖

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.6.6</version>
        <relativePath/>
    </parent>

    <groupId>com.hspedu</groupId>
    <artifactId>redis_springboot</artifactId>
    <version>1.0-SNAPSHOT</version>
    <name>redis_springboot</name>
    <description>Demo project for Spring Boot</description>


    <properties>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!-- Redis 依赖 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>

        <!-- spring2.X 集成 Redis 所需的 common-pool -->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-pool2</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.13.2.2</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>
```

（3）配置

application.properties

```properties
#Redis 服务器连接端口
spring.redis.port=6379
#Redis 如果有密码需要配置，没有密码就不要写
spring.redis.password=123456
#Redis 数据库索引（默认为 0）
spring.redis.database=0
#连接超时时间（毫秒）
spring.redis.timeout=1800000
#连接池最大连接数（使用负值表示没有限制）
spring.redis.lettuce.pool.max-active=20
#最大阻塞等待时间（负数表示没有限制）
spring.redis.lettuce.pool.max-wait=-1
#连接池中的最大空闲连接
spring.redis.lettuce.pool.max-idle=5
#连接池中的最小空闲连接
spring.redis.lettuce.pool.min-idle=0
```

redis 配置类

（1）redis 配置类是对要使用的 RedisTemplate bean 对象的配置，可以理解成是一个常规配置

（2）与 JDBCTemplate 设计理念类似

（3）如果不配置的话，SpringBoot 会使用默认的配置，这个默认的配置会出现一些问题，比如：RedisTemplate 的 key 序列化等问题，所以通常我们需要配置

```java
@EnableCaching
@Configuration
public class RedisConfig extends CachingConfigurerSupport {
    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory factory) {
        RedisTemplate<String, Object> template =
                new RedisTemplate<>();
        System.out.println("template=>" + template);
        RedisSerializer<String> redisSerializer = new StringRedisSerializer();
        Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);
        ObjectMapper om = new ObjectMapper();
        om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        om.activateDefaultTyping(
                LaissezFaireSubTypeValidator.instance,
                ObjectMapper.DefaultTyping.NON_FINAL,
                JsonTypeInfo.As.WRAPPER_ARRAY);
        jackson2JsonRedisSerializer.setObjectMapper(om);
        template.setConnectionFactory(factory);
        //key 序列化方式
        template.setKeySerializer(redisSerializer);
        //value 序列化
        template.setValueSerializer(jackson2JsonRedisSerializer);
        //value hashmap 序列化
        template.setHashValueSerializer(jackson2JsonRedisSerializer);
        return template;
    }

    @Bean
    public CacheManager cacheManager(RedisConnectionFactory factory) {
        RedisSerializer<String> redisSerializer = new StringRedisSerializer();
        Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);
        //解决查询缓存转换异常的问题
        ObjectMapper om = new ObjectMapper();
        om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        om.activateDefaultTyping(
                LaissezFaireSubTypeValidator.instance,
                ObjectMapper.DefaultTyping.NON_FINAL,
                JsonTypeInfo.As.WRAPPER_ARRAY);
        jackson2JsonRedisSerializer.setObjectMapper(om);
        // 配置序列化（解决乱码的问题）,过期时间600秒
        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofSeconds(600))
                .serializeKeysWith(RedisSerializationContext.SerializationPair.fromSerializer(redisSerializer))
                .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(jackson2JsonRedisSerializer))
                .disableCachingNullValues();
        RedisCacheManager cacheManager = RedisCacheManager.builder(factory)
                .cacheDefaults(config)
                .build();
        return cacheManager;
    }
}
```

（4）控制器-提供API接口

```java
@RestController
@RequestMapping("/redisTest")
public class RedisTestController {
    //装配 RedisTemplate
    @Resource
    private RedisTemplate redisTemplate;

    //编写第一个测试方法
    //演示设置数据和获取数据
    @GetMapping("/t1")
    public String t1() {
        //设置值到 redis
        redisTemplate.opsForValue().set("book", "天龙八部");
        //从 redis 获取值
        String book = (String) redisTemplate.opsForValue().get("book");
        return book;
    }

    //编写方法，演示如何操作 list，hash，set，zset
    @GetMapping("/t2")
    public String t2() {
        //list-存
        redisTemplate.opsForList().leftPush("books", "笑傲江湖");
        redisTemplate.opsForList().leftPush("books", "hello,java");

        //list-取出
        List books = redisTemplate.opsForList().range("books", 0, -1);
        String booksList = "";
        for (Object book : books) {
            System.out.println("book --> " + book.toString());
            booksList += book.toString() + " ";
        }
        return booksList;
    }
}
```

（5）启动类

```java
@SpringBootApplication
public class RedisSpringBootApplication {
    public static void main(String[] args) {
        SpringApplication.run(RedisSpringBootApplication.class, args);
    }
}
```

（6）注意：当报错：Unrecognized token 'beijing': was expecting ('true', 'false' or 'null') 时，是 json 转换异常，实际上是因为 RedisTemplate 在做数据存储的时候会把存储的内容序列化，所以，RedisTemplate 读取的时候也会反序列化，而在 redis 客户端 set 的时候并不会做序列化，因此在客户端 set 进去的值在用 RedisTemplate 读的时候就会报类型转换异常了

解决方法就是用 RedisTemplate 存，用 RedisTemplate 读

# 第 10 章 Redis 持久化 - RDB

## 10.1 持久化方案

（1）RDB（Redis DataBase）

（2）AOF（Append Of File）

## 10.2 RDB 是什么？

在指定的时间间隔内将内存中的数据集快照写入磁盘，也就是 Snapshot 快照，恢复时将快照文件读到内存

## 10.3 RDB 持久化流程

### 10.3.1 RDB 及其执行流程

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411251631675.png)

具体流程如下：

（1）redis 客户端执行 bgsave 命令或者自动触发 bgsave 命令

（2）主进程判断当前是否已经存在正在执行的子进程，如果存在，那么主进程直接返回

（3）如果不存在正在执行的子进程，那么就 fork 一个新的子进程进行持久化数据，fork 过程是阻塞的，fork 操作完成后主进程即可执行其它操作

（4）子进程先将数据写入到临时的 rdb 文件中，待快照数据写入完成后再原子替换旧的 rdb 文件

（5）同时发送信号给主进程，通知主进程 rdb 持久化完成，主进程更新相关的统计信息

小结：

（1）整个过程中，主进程是不进行任何 IO 操作的，这就确保了极高的性能

（2）如果需要进行大规模数据的恢复，且对于数据恢复的完整性不是非常敏感，那 RDB 方式要比 AOF 方式更加的高效

（3）RDB 的缺点是在进行最后一次持久化后又插入的数据可能丢失，如果你是正常关闭 Redis，Redis 仍然会对当前的所有数据进行持久化不会造成数据丢失，如果是 Redis 异常终止/宕机，就可能造成数据丢失

### 10.3.2 Fork & Copy-On-Write

Fork 的作用是复制一个与当前进程一样的进程，新进程的所有数据（变量、环境变量、程序计数器等）数值都和原进程一致，但是是一个全新的进程，并作为原进程的子进程

在 Linux 程序中，fork() 会产生一个和父进程完全相同的子进程，但子进程在此后多会 exec 系统调出，出于效率考虑，Linux 中引入了 “写时复制技术” 即：copy-on-write

一般情况下父进程和子进程会共用同一段物理内存，只有进程空间的各段的内容要发生变化时，才会将父进程的内容复制一份给子进程

## 10.4 RDB 配置

### 10.4.1 dump.rdb 文件

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411251700523.png)

在 redis.conf 中配置文件的名称默认是 dump.rdb，即把数据持久化到 dump.rdb 文件中

dump.rdb 文件的位置默认为 Redis 启动时命令行所在的目录下

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411251703419.png)

./ 表示当前目录，比如：进入到 /usr/local/bin 目录下，启动 Redis，这个 ./ 就是 /usr/local/bin，如果在 /root/ 目录下启动 Redis，那么 ./ 就是 /root/ 下了

rdb 文件的保存路径也可以修改，比如：dir /root/

**注意**：

我们每次启动 Redis 服务时都是在 /root/ 目录下启动的，我们在操作 Redis 并且存储数据后，关闭 Redis 后 Redis 就会在当前启动 Redis 服务的目录下【/root/】创建文件 dump.rdb 用于持久化数据，当我们再次在 /root/ 下启动 Redis 服务时，Redis 就会读取到 dump.rdb 用于回写之前持久化过的数据，这样数据就没有丢失，但是如果我们不在 /root/ 下启动 Redis 服务，而是换了一个目录启动 Redis 服务，那么 Redis 就读取不到原本的那个 dump.rdb，会造成数据丢失，所以当想要不管在哪启动 Redis 都读取到 /root/ 目录下的 dump.rdb 就要修改 redis.conf 中的 dir，把 dir ./ 修改成 dir /root/

### 10.4.2 相关配置&参数&操作

#### 10.4.2.1 默认快照配置

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411251804208.png)

如果我们没有开启 save 的注释，那么在退出 Redis 时，也会进行备份，会更新 dump.rdb

#### 10.4.2.2 save VS bgsave

（1）save：save 指令只管保存，其它不管，全部阻塞，手动保存，不建议

（2）bgsave：Redis 会在后台异步进行快照操作，快照同时还可以响应客户端请求

（3）可以通过 lastsave 命令获取最后一次成功执行快照的时间（获取到的是 unix 时间戳，可以使用工具转换）

#### 10.4.2.3 flushall

执行 flushall 命令，会把内存中的所有数据删除然后持久化空的内存到 dump.rdb，这样内存和 dump.rdb 里的数据就都被清空了，并且 flushall 是清空整个 Redis 服务器的数据，把 16 的库的数据都删除

#### 10.4.2.4 save

RDB 是整个内存压缩过的 Snapshot，RDB 的数据结构可以配置符合的快照触发条件

禁用：给 save 传入空字符串

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411251825602.png)

#### 10.4.2.5 stop-writes-on-bgsave-error

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411251827087.png)

当 Redis 无法写入磁盘的话（比如磁盘满了），直接关掉 Redis 的写操作，推荐是 yes

#### 10.4.2.6 rdbcompression

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411251829083.png)

对于存储到磁盘中的快照，可以设置是否进行压缩存储，如果是的话，Redis 会采用 LZF 算法进行压缩，如果你不想消耗 CPU 来进行压缩的话，可以设置为关闭此功能，默认为 yes

#### 10.4.2.7 rdbchecksum

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411252156353.png)

在存储快照后，还可以让 redis 使用 CRC64 算法来进行数据校验，保证文件是完整的，但是这样做会增加大约 10% 的性能消耗，如果希望获取到最大的性能提升，可以关闭此功能，推荐 yes

#### 10.4.2.8 动态停止 RDB

进入 redis-cli 输入指令 config set save "" 可以动态停止 RDB

说明：save 后给空值，表示禁用保护策略

## 10.5 RDB 备份&恢复

（1）Redis 可以充当缓存对项目进行优化，因此重要/敏感的数据建议在 MySQL 要保存一份

（2）从设计层面来说，Redis 的内存数据都是可以重新获取的【可能来自程序，也可能来自 MySQL】

（3）因此这里说的备份&恢复主要是在 Redis 启动时，初始化数据是从 dump.rdb 来的这个机制

**备份**：

（1）config get dir 命令查询 rdb 文件的目录

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411252219767.png)

（2）将 dump.rdb 进行备份，如果有必要可以写 shell 脚本来定时备份，这里简单处理

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411252222166.png)

**恢复**：

直接把 dump.rdb.bak 改名为 dump.rdb 后直接使用即可

## 10.6 RDB 的优势和劣势

**优势**：

（1）适合大规模的数据恢复

（2）对数据完整性和一致性要求不高更适合使用

（3）节省磁盘空间

（4）恢复速度快

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411252229396.png)

**劣势**：

（1）虽然 Redis 在 fork 时使用了写时拷贝技术【Copy-On-Write】，但是如果数据庞大时还是比较消耗性能

（2）在一定间隔时间（一个周期）做一次备份，如果 Redis 意外 down 掉的话就会丢失最后一次快照后的所有修改，如果正常关闭 Redis 仍然会进行 RDB 备份，不会丢失数据

# 第 11 章 Redis 持久化 - AOF

## 11.1 AOF 是什么

（1）AOF：Append Only File

（2）以日志的形式来记录每个写操作【增量保存】，将 Redis 执行过的所有写指令记录下来【比如 set/del 操作会记录，读操作 get 不记录】

（3）只许追加文件但不可以改写文件

（4）redis 启动之初会读取该文件重新构建数据

（5）redis 重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作

## 11.2 AOF 持久化流程

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411252245562.png)

（1）客户端的请求写命令会被 append 追加到 AOF 缓冲区内

（2）AOF 缓冲区根据 AOF 持久化策略【always，everysec，no】将操作 sync 同步到磁盘的 AOF 文件中

（3）AOF 文件大小超过重写策略或手动重写时，会对 AOF 文件 rewrite 重写，压缩 AOF 文件容量

（4）Redis 服务重启时，会重新 load 加载 AOF 文件中的写操作达到数据恢复的目的

## 11.3 AOF 开启

（1）在 redis.conf 中配置文件名称，默认为 appendonly.aof

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411252256910.png)

（2）AOF 文件的保存路径和 RDB 的路径一致

（3）AOF 和 RDB 同时开启，系统默认取 AOF 的数据

## 11.4 AOF 启动/修复/恢复

### 11.4.1 基本说明

AOF 的备份机制和性能虽然和 RDB 不同，但是备份和恢复的操作同 RDB 一样，都是拷贝备份文件，需要恢复时再拷贝到 Redis 工作目录下，启动系统时加载

### 11.4.2 正常恢复

（1）修改默认的 appendonly no，改为 yes

（2）将有数据的 aof 文件定时备份，需要恢复时复制一份保存到对应目录【查看目录：config get dir】

（3）恢复：重启 Redis 然后重新加载

### 11.4.3 异常恢复

（1）如果遇到 AOF 文件损坏，通过 `/usr/local/bin/redis-check-aof --fix appendonly.aof` 进行恢复

（2）建议先备份被写坏的 AOF 文件

（3）恢复：重启 Redis，然后重新加载

### 11.4.4 同步频率设置

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411260128134.png)

（1）appendfsync always

始终同步，每次 Redis 的写入都会立刻记入日志，性能较差但数据完整性比较好

（2）appendfsync everysec

每秒同步，每秒记入日志一次，如果宕机，本秒的数据可能丢失

（3）appendfsync no

Redis 不主动进行同步，把同步时机交给操作系统，Linux 默认 30s 写入一次数据到磁盘

### 11.4.5 Rewrite 压缩

（1）AOF 文件越来越大，需要定期对 AOF 文件进行重写达到压缩的效果

（2）旧的 AOF 文件含有无效命令会被忽略，保留最新的数据命令，比如：set a a1；set a b1；set a c1；保留最后一条指令就可以了

（3）多条写命令可以合并为一个，比如 set a c1 b b1 c c1

（4）AOF 重写降低了文件占用空间

（5）更小的 AOF 文件可以更快的被 Redis 加载

（6）重写触发配置

- 手动触发

直接调用 bgrewriteaof 命令

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411260147341.png)

- 自动触发

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411260152158.png)



auto-aof-rewrite-min-size：AOF 文件最小重写大小，只有当 AOF 文件大小大于该值的时候才能重写，默认配置 64MB

auto-aof-rewrite-percentage：当前 AOF 文件大小和最后一次重写后的大小之间的比率等于或者大于指定的增长百分比，如 100 代表当前 AOF 文件是上次重写的两倍的时候才重写。系统载入时或者上次重写完毕时，Redis 会记录此时 AOF 的大小，设为 base_size，如果 Redis 的 AOF 的当前大小 >= base_size + base_size * 100%（默认）且当前大小 >= 64mb（默认）的情况下，Redis 会对 AOF 进行重写

### 11.4.6 AOF 的优势和劣势

优势：

（1）备份机制更稳健，丢失数据概率更低

（2）可读的日志文件，通过操作 AOF 可以处理错误

劣势：
（1）比起 RDB 占用更多的磁盘空间

（2）恢复备份速度要慢

（3）每次读写都同步的话，有一定的性能压力

# 第 12 章 Redis 事务 锁机制 秒杀

## 12.1 Redis 的事务是什么

（1）Redis 事务是一个单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行

（2）事务在执行的过程中，不会被其它客户端发送来的命令请求所打断

（3）Redis 事务的主要作用就是串联多个命令防止别的命令插队

## 12.2 Redis 事务三特性

- 单独的隔离操作

（1）事务中的所有命令都会序列化、按顺序地执行

（2）事务在执行的过程中，不会被其他客户端发送来的命令请求所打断

- 没有隔离级别的概念

队列中的命令【指令】，在没有提交前都不会实际被执行

- 不保证原子性

事务执行过程中，如果有指令执行失败，其它的指令仍然会被执行，没有回滚

## 12.3 事务相关指令 Multi（组队）、Exec（执行）、discard（丢弃）

### 12.3.1 基本说明

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411260231587.png)

（1）从输入 Multi 命令开始，输入的命令都会依次进入命令队列中，但不会执行（类似 MySQL 的 start transaction 开启事务）

（2）输入 Exec 后，Redis 会将之前的命令队列中的命令依次执行（类似 MySQL 的 commit 提交事务）

（3）组队的过程中可以通过 discard 来放弃组队（类似 MySQL 的 rollback 回滚事务）

### 12.3.2 案例

需求：依次向 Redis 中添加三组数据：k1-v1、k2-v2、k3-v3，要求使用 Redis 的事务完成

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411261956633.png)

### 12.3.3 注意事项和细节

（1）组队的过程中，可以通过 discard 来放弃组队

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411261959339.png)

（2）如果在组队阶段报错【比如语法写错了】，会导致 exec 失败，那么事务的所有指令都不会被执行

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411262003236.png)

（3）如果组队成功，但是指令有不能正常执行的，那么 exec 提交会出现有成功有失败的情况，也就是事务得到部分执行，这种情况下 Redis 事务不具备原子性

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411262007603.png)

## 12.4 事务冲突及解决方案

### 12.4.1 问题

1. 经典的抢票问题

（1）一个请求想购买 6 张票

（2）一个请求想购买 5 张票

（3）一个请求想购买 1 张票

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411262016667.png)

解读：

（1）如果没有控制，会造成超卖现象

（2）如果 3 个指令都得到执行，最后剩余的票数是 -2

### 12.4.2 悲观锁

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411262020509.png)

悲观锁【Pessimistic Lock】，顾名思义，就是很悲观。每次获取数据的时候，都会担心数据被修改，所以每次获取数据的时候都会进行加锁，确保在自己使用的过程中数据不会被别人修改，使用完成后进行数据解锁。由于数据进行加锁，期间对该数据进行读写的其他线程都会进行等待。传统的关系型数据库里边就用到了很多这种锁机制，比如行锁、表锁、读锁、写锁等。都是在操作之前先上锁让别人无法操作该数据。

### 12.4.3 乐观锁

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503211630835.png)
（1）顾名思义，就是很乐观。每次获取数据的时候，都不会担心数据被修改，所以每次获取数据的时候都不会进行加锁，但是在更新数据库中的数据时需要判断该数据是否被别人修改过。如果数据被其他线程修改，则不进行数据更新，如果数据没有被其他线程修改，则进行数据更新。由于数据没有进行加锁，期间该数据可以被其他线程进行读写操作。

（2）一般使用版本号机制进行判断。乐观锁大多数情况是基于数据版本号（version）的机制实现的。何谓数据版本？即为数据增加一个版本标识，在基于数据库表的版本解决方案中，一般是通过为数据库表添加一个“version”字段来实现读取出数据时，将此版本号一同读出，之后更新时，对此版本号加1。此时，将提交数据的版本号与数据库表对应记录的当前版本号进行比对，如果提交的数据版本号大于数据库表当前版本号，则予以更新，否则认为是过期数据，不予更新。

（3）乐观锁适用于多读的应用类型，这样可以提高吞吐量，Redis 就是利用这种 check-and-set 机制实现事务的

### 12.4.4 watch & unwatch

**watch**：

（1）基本语法：watch key [key...]

（2）在执行 multi 之前，先执行 watch key1 [key2]，可以监视一个[或多个] key，如果在事务执行之前这个（或这些）key 被其它命令所改动，那么事务将被打断，这里可以结合乐观锁机制进行理解

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503211633042.png)


**unwatch**：

（1）基本语法

（2）作用：取消 watch 命令对所有 key 的监视

（3）如果在执行 watch 命令后，exec 命令或 discard 命令先被执行了的话，那么就不需要再执行 unwatch 了

## 12.5 火车票 - 抢票

### 12.5.1 需求分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411262216221.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411262216307.png)

### 12.5.2 思路分析

（1）一个 user 只能购买一张票，即不能复购

（2）不能出现超购，也就是多卖了

（3）不能出现火车票遗留问题，即当有100个人买票，有60张票，这60张票要卖完不能留下

### 12.5.3 版本1：完成基本购票流程，暂不考虑事务和并发问题

看笔记

### 12.5.4 抢票并发模拟，出现超卖问题

### 12.5.5 连接池技术

#### 12.5.5.1 连接池介绍

（1）节省每次连接 Redis 服务带来的消耗，把连接好的实例反复利用

（2）连接池参数

- MaxTotal：控制一个 pool 可以分配多少个 jedis 实例，通过 pool.getResource() 来获取，如果赋值为 -1 则表示不限制
- maxIdle：控制一个 pool 最多有多少个状态为 idle[空闲]的 jedis 实例
- MaxWaitMillis：表示当获取一个 jedis 实例时，最大的等待毫秒数，如果超过等待时间，则直接抛 JedisConnectionException
- testOnBorrow：获得一个 jedis 实例的时候是否检查连接可用性【ping()】，如果为 true，则得到的 jedis 实例均是可用的

#### 12.5.5.2 使用连接池，优化连接超时

通过连接池，可以指定连接超时时间，这个连接超时时间也需要合理设置，要考虑到用户的实际体验

JedisPoolUtil

```java
public class JedisPoolUtil {

    /**
     * 解读 volatile 关键字的作用
     * 1. 线程的可见性:当一个线程去修改一个共享变量时，另外一个线程可以读取到这个被修改后的值
     * 2. 顺序的一致性:禁止指令重排
     */
    private static volatile JedisPool jedisPool = null;

    private JedisPoolUtil() {

    }

    /**
     * 保证每次调用返回的 jedisPool 是单例的
     */
    public static JedisPool getJedisPoolInstance() {
        if (null == jedisPool) {
            //synchronized (JedisPoolUtil.class) {} 保证当有多个并发量，即同时有多个线程调用 getJedisPoolInstance 方法，这样就会创建多个JedisPool 对象，也就不是单例的了，写上 synchronized (JedisPoolUtil.class) {} 可以保证一次只有一个线程，相当于加了把锁
            //但是还是有问题，假如同时有10个线程进来，10个线程都冲进了 if(null == jedisPool) 的判断，但是因为 synchronized 锁的作用，只有
            //一个线程可以执行下面的代码，其它线程在等待，但是当这个线程执行完后就会释放锁，其它线程就可以执行下面的代码了，这样还是不能保证单例
            synchronized (JedisPoolUtil.class) {
                //在这里加入 if (null == jedisPool) 就可以保证即使其它线程拿到锁后也不会执行下面的代码了，因为第一个线程已经创建了 jedisPool 对象了
                //这样 jedisPool 对象就不为空了
                if (null == jedisPool) {
                    JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
                    //对连接池进行配置
                    jedisPoolConfig.setMaxTotal(200);
                    jedisPoolConfig.setMaxIdle(32);
                    jedisPoolConfig.setMaxWaitMillis(60 * 1000);
                    jedisPoolConfig.setBlockWhenExhausted(true);
                    jedisPoolConfig.setTestOnBorrow(true);
                    jedisPool = new JedisPool(jedisPoolConfig, "192.168.200.130", 6379, 60000, "123456");
                }
            }
        }
        return jedisPool;
    }

    /**
     * 释放连接资源
     */
    public static void release (Jedis jedis) {
        if (null != jedis) {
            jedis.close(); //如果这个 jedis 是从连接池获取的，这里的 jedis.close() 就是将 jedis 对象/连接释放到连接池
        }
    }
}
```

```java
/**
     * 编写一个测试方法 - 看看是否能够连通到指定的 Redis
     */
    @Test
    public void testRedis() {
        /* Jedis jedis = new Jedis("192.168.200.130", 6379);
        jedis.auth("123456"); */
        JedisPool jedisPoolInstance = JedisPoolUtil.getJedisPoolInstance();
        Jedis jedis = jedisPoolInstance.getResource();
        System.out.println(jedis.ping());
        jedis.close(); //如果这个 jedis 是从连接池获取的，这里的 jedis.close() 就是将 jedis 对象/连接释放到连接池
    }
```

### 12.5.6 利用 Redis 事务机制，解决超卖

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503211726784.png)


### 12.5.7 抢票并发模拟，出现库存遗留问题

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411272135767.png)

### 12.5.8 LUA 脚本

#### 12.5.8.1 LUA 介绍

（1）LUA 是一个小巧的脚本语言，LUA 脚本可以容易的被 C/C++ 代码调用，也可以反过来调用 C/C++ 的函数，LUA 并没有提供强大的库，一个完整的 LUA 解释器不过 200k，所以 LUA 不适合作为开发独立应用程序的语言，而是作为嵌入式脚本语言

（2）很多应用程序、游戏使用 LUA 作为自己的嵌入式脚本语言，以此来实现可配置性、可扩展性

（3）将复杂的或者多步的 Redis 操作写为一个脚本，一次提交给 Redis 执行，减少反复连接 Redis 的次数，提升性能

（4）LUA 脚本类似 Redis 事务，有一定的原子性，不会被其它命令插队，可以完成一些 Redis 事务性的操作

（5）Redis 的 LUA 脚本功能，只有在 Redis 2.6 以上的版本才可以使用

（6）通过 LUA 脚本解决争抢问题，实际上是 Redis 利用其单线程的特性，用任务队列的方式解决多任务并发问题

#### 12.5.8.2 LUA 脚本解决超卖和库存遗留思路分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411272150497.png)

（1）LUA 脚本是类似 Redis 事务，有一定的原子性，不会被其它命令插队，能完成 Redis 事务性的操作

（2）通过 LUA 脚本解决争抢问题，Redis 利用其单线程的特性，将请求形成任务队列，从而解决多任务并发问题

#### 12.5.8.3 LUA 脚本解决超卖和库存遗留代码实现

看笔记

# 第 13 章 主从复制

## 13.1 主从复制介绍

主 Redis 负责增删改，从 Redis 负责查

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411282104235.png)

（1）上图描述了主机数据更新后，自动同步到备机的 master/slaver 机制

（2）Master 以写为主，Slaver 以读为主

（3）好处：读写分离，提升效率【读写分离后，将读和写操作分布到不同的 Redis，减少单个 Redis 的压力，提升效率】

（4）好处：容灾快速恢复【如果某个 slaver 不能正常工作，可以切换到另一个 slaver】

（5）主从复制要求是一主多从，不能有多个 Master【如果有多个主服务器 Master，那么 slaver 不能确定和哪个 Master 进行同步，出现数据紊乱】

（6）要解决主服务器的高可用性，可以使用 Redis 集群

## 13.2 搭建一主多从

### 13.2.1 需求说明

（1）搭建主从复制结构

（2）这里搭建一主二从即可，其它 slaver 可以依此完成

看笔记

## 13.3 主从复制原理

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411301630040.png)

主从复制流程：

（1）Slave 启动成功连接到 master 后会发送一个 sync 命令

（2）Master 接到命令启动后台的存盘进程，同时收集所有接收到的用于修改数据集的命令，在后台进程执行完毕之后，master 将传送整个数据文件到 slave，以完成一次完全同步

（3）slave 服务在接收到数据库文件数据后，将其存盘并加载到内存中，即全量复制

（4）Master 数据变化了，会将新的收集到的修改命令依次传给 slave 完成同步，即增量复制

（5）但是只要是 slave 重新连接了 master，就会自动执行全量复制

## 13.4 主从复制的一主二从

（1）如果从服务器宕机了，重新启动仍然可以获取 Master 的最新数据

（2）如果主服务器宕机了，从服务器并不会抢占为主服务器，当主服务器恢复后，从服务器仍然指向原来的主服务器

## 13.5 主从复制的薪火相传

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411301647255.png)

（1）上一个 Slave 可以是下一个 slave 的 Master，Slave 同样可以接收其它 slaves 的连接和同步请求，那么该 slave 作为了链条中的下一个的 master，可以有效减轻 master 的写压力，去中心化降低风险

（2）风险是一旦某个 slave 宕机，后面的 slave 都没法同步

（3）主机挂了，从机还是从机，无法写数据了

## 13.6 主从复制的反客为主

在薪火相传的结构下，当一个 master 宕机后，指向 master 的 slave 可以升为 master，其后面的 slave 不用做任何修改

## 13.7 主从复制的哨兵模式【sentinel】

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411301703775.png)

（1）哨兵模式：反客为主的自动版，能够后台监控主机是否故障，如果故障了会根据投票数自动将从库转换为主库

（2）在哨兵模式下，主机宕机后的执行流程分析：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411301727110.png)

哨兵如何在从机中，推选新的 Master 主机，选择的条件依次为：

1）优先级在 redis.conf 中默认：replica-priority 100，值越小优先级越高

2）偏移量是指获得原主机数据的量，数据量最全的优先级高

3）每个 redis 实例启动后都会随机生成一个 40 位的 runid，值越小优先级越高

# 第 14 章 集群

## 14.1 为什么需要集群-高可用性

生产环境的实际需求和问题：

（1）容量不够，redis 如何进行扩容

（2）并发写操作，redis 如何分摊

（3）主从模式，薪火相传模式，主机宕机会导致 ip 地址发生变化，应用程序中配置需要修改对应的主机地址、端口等信息

传统解决方案-代理主机来解决

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411301740984.png)

（1）客户端请求先到代理服务器

（2）由代理服务器进行请求转发到对应的业务处理服务器

（3）为了高可用性，代理服务、A 服务、B 服务、C 服务都需要搭建主从结构【至少是一主一从】，这样就需要搭建至少 8 台服务器

（4）这种方案的缺点是：成本高、维护困难，如果是一主多从，成本就会更高

Redis3.0 提供的解决方案-无中心化集群配置

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411301804305.png)

（1）各个 Redis 服务仍然采用主从结构

（2）各个 Redis 服务是连通的，任何一台服务器都可以作为请求入口

（3）各个 Redis 服务器因为是连通的，可以进行请求转发

（4）这种方式就是无中心化集群配置，可以看到，只需要 6 台服务器即可搞定

（5）无中心化集群配置，还会根据 key 值，计算 slot，把数据分散到不同的主机，从而缓解单个主机的存取压力

（6）Redis 推荐使用无中心化集群配置

（7）在实际生成环境各个 Redis 服务器应当部署到不同的机器【防止机器宕机，主从复制失效】

## 14.2 集群介绍

（1）Redis 集群实现了对 Redis 的水平扩容，即启动 N 个 Redis 节点，将整个数据库分布存储在这 N 个节点中，每个节点存储总数据的 1/N

（2）Redis 集群通过分区来提供一定程度的可用性，即使集群中有一部分节点失效或者无法进行通讯，集群也可以继续处理命令请求

## 14.3 Redis 集群搭建

看笔记

## 14.4 Redis 集群使用

1. 什么是 slots

（1）Redis 集群启动后，会看到如下提示：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411301918267.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411301923699.png)

1）一个 Redis 集群包含 16384 个插槽【hash slot】，编号从 0-16383，Redis 中的每个键都属于这 16384 个插槽的其中一个

2）集群使用公式 CRC16(key) % 16384 来计算键 key 属于哪个槽，其中 CRC16(key) 语句用于计算键 key 的 CRC16 校验和

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411301934829.png)

3）集群中的每个节点负责处理一部分插槽，举个例子，如果一个集群可以有主节点，其中：

- 节点 A 负责处理 0 号至 5460 号插槽
- 节点 B 负责处理 5461 号至 10922 号插槽
- 节点 C 负责处理 10923 号至 16383 号插槽

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411301937717.png)

（2）在集群中录入值

1）在 Redis 每次录入、查询键值时，Redis 都会计算出该 key 应该送往的插槽，如果不是该客户端对应的服务器的插槽，Redis 会告知应前往的 Redis 实例地址和端口

2）redis-cli 客户端提供了 -c 参数实现自动重定向

3）如 `redis-cli -c -p 6379` 登入后，再登入，查询键值对可以自动重定向

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411301942271.png)

4）不在一个 slot 下的键值，是不能使用 mget、mset等多键操作

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411301945404.png)

5）可以通过 {} 来定义组的概念，从而使 key 中 {} 内相同内容的键值对放到一个 slot 中去

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411301948075.png)

（3）查询集群中的值

1）指令：`cluster keyslot <key>` 返回 key 对应的 slot 值

2）指令：`cluster countkeysinslot <slot>` 返回 slot 有多少个 key

3）指令：`cluster getkeysinslot <slot> <count>` 返回 count 个 slot 槽中的键

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411301957573.png)

## 14.5 Redis 集群故障恢复

1. 如果主节点下线，从节点会自动升为主节点【注意 15 秒超时，再观察比较准确】

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411302019888.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411302020058.png)

2. 主节点恢复后，主节点回来变成从机

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411302020536.png)

3. 如果某一段插槽的主从节点都宕机，Redis 服务是否还能继续，要根据不同的配置而言

1）如果某一段插槽的主从都挂掉，而 `cluster-require-full-coverage` 为 yes，那么整个集群都挂掉

2）如果某一段插槽的主从都挂掉，而 `cluster-require-full-coverage` 为 no，那么只是该插槽数据不能使用，也无法存储

3）redis.conf 中的参数 `cluster-require-full-coverage`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411302030767.png)

## 14.6 集群的 Jedis 开发

1. 即使连接的不是主机，集群会自动切换主机存储，主机写，从机读
2. 无中心化主从集群，无论从哪台主机写的数据，其它主机上都能读到数据

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202411302044268.png)

## 14.7 Redis 集群的优缺点

优点：

实现扩容、分摊压力、无中心配置相对简单

缺点：

（1）多键操作是不被支持的，除非使用组操作

（2）多键的 Redis 事务是不被支持的，Lua 脚本不被支持

（3）由于集群方案出现较晚，很多公司已经采用了其它的集群方案，而其它方案想要迁移至 redis cluster，需要整体迁移而不是逐步过渡，复杂度较大

# 第 15 章 Redis 应用问题&解决方案

## 15.1 缓存穿透

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412011136276.png)

缓存穿透的原因：

（1）key 对应的数据在数据源并不存在，每次针对此 key 的请求从缓存获取不到，请求都会压到数据源，可能压垮数据源

（2）比如：用一个不存在的用户 id 获取用户信息，不论缓存还是数据库都没有，若黑客利用此漏洞进行攻击可能压垮数据库

（3）也就是说：如果从存储层查不到数据则不会写入缓存，这将导致这个不存在的数据每次请求都要到存储层去查询，失去了缓存的意义

缓存穿透的现象/表象：

（1）应用服务器压力变大

（2）Redis 命中率降低

（3）一直查数据库

解决方案/思路：

（1）对空值缓存：

如果一个查询返回的数据为空，我们仍然把这个空结果【null】进行缓存，设置空结果的过期时间应该短些，最长不超过五分钟

（2）设置可访问的名单【白名单】

定义一个可以访问的名单，每次访问和白名单的 id 进行比较，如果访问 id 不在白名单里面，进行拦截，不允许访问，比如使用 bitmaps 实现

（3）采用布隆过滤器

布隆过滤器可以用于检索一个元素是否在一个集合中，它的优点是空间效率和查询时间都远远超过一般的算法，缺点是有一定的误识别率和删除困难

（4）进行实时监控

当发现 Redis 的命中率开始急速降低，需要排查访问对象和访问的数据，和运维人员配合，可以设置黑名单限制服务

## 15.2 缓存击穿

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412011153201.png)

缓存击穿的原因：

（1）key 对应的数据存在，但在 Redis 中过期，此时若有大量并发请求过来，这些请求发现缓存过期，会从后端 DB 加载数据并设置回到缓存，这时大并发的请求可能会瞬间把后端 DB 压垮

（2）比如某个热点数据，可能会在某些时间点被超高并发地访问，容易出现缓存击穿

缓存击穿的现象/表象：

（1）数据库访问压力瞬时增加

（2）Redis 里面没有出现大量 key 过期

（3）Redis 正常运行状态，但是数据库可能瘫痪了

缓存击穿的解决方案：

（1）预先设置热门数据

在 Redis 高峰访问之前，把一些热门数据提前存入到 Redis 里面，加大这些热门数据 key 的时长

（2）实时调整

现场监控哪些数据热门，实时调整 key 的过期时长

（3）使用锁

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412011219618.png)

1）就是在缓存失效的时候【判断拿出来的值为空】，不是立即去调用 DB

2）先使用缓存工具的某些带成功操作返回值的操作【比如 Redis 的 setnx】去 set 一个 mutex key，上一把锁，让请求去强锁

3）抢到锁的请求去操作 DB，并设置回缓存，最后删除 mutex key

4）没有抢到锁的请求证明有线程在操作 DB，当前线程睡眠一段时间再重试获得缓存的方法，因为抢到锁的请求会把数据设置回缓存，所以线程睡眠后就能拿到数据了

5）使用锁效率会有影响

## 15.3 缓存雪崩

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412011256684.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412011257539.png)

缓存雪崩的原因：

（1）key 对应的数据存在，但在 Redis 中过期，此时若有大量并发请求过来，这些请求发现缓存过期一般都会从后端 DB 加载数据并设置回到缓存

（2）这个时候大并发的请求可能会瞬间把后端 DB 压垮

（3）缓存雪崩与缓存击穿的区别在于这里针对很多 key 缓存，前者则是某一个 key

缓存雪崩的现象/表象：

（1）数据库访问压力变大，服务器崩溃

（2）在极短时间内，访问大量 key，而这些 key 集中过期

解决方案：

（1）构建多级缓存架构

nginx 缓存 + redis 缓存 + 其它缓存【ehcache 等】，这种方式开发/维护成本较高

（2）使用锁或队列

用加锁或者队列的方式来保证不会有大量的线程对数据库一次性进行读写，从而避免失效时大量的并发请求落到底层存储系统上，不适用高并发情况

（3）设置过期标志更新缓存

记录缓存数据是否过期，如果过期会触发通知另外的线程在后台去更新实际 key 的缓存

（4）将缓存失效时间分散开

比如我们可以在原有的失效时间基础上增加一个随机值，比如 1-5 分钟随机，这样每一个缓存的过期时间的重复率就会降低，就很难引发集体失效的事件

## 15.4 分布式锁

### 15.4.1 问题描述

（1）单体单机部署的系统被演化成分布式集群系统后，由于分布式系统多线程、多进程并且分布在不同机器上，这将使原单机部署情况下的并发控制锁策略失效

（2）单纯的 Java API 并不能提供分布式锁的能力

（3）为了解决这个问题就需要一种跨 JVM 的互斥机制来控制共享资源的访问，这就是分布式锁要解决的问题

（4）分布式锁是针对分布式项目的，不要和前面的 Redis 集群混淆

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412011339300.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412011340348.png)

### 15.4.2 分布式锁主流实现方案

（1）基于数据库实现分布式锁

（2）基于缓存【Redis 等】

（3）基于 Zookeeper

这里学习基于 Redis 实现分布式锁

### 15.4.3 实例：Redis 实现分布式锁 - 基本实现

（1）指令：`setnx key value`

- setnx 可以理解是上锁/加锁指令
- key 是锁的键
- value 是锁的值
- 在这个 key 没有删除前，不能执行相同 key 的上锁指令

（2）指令：`del key`

- 就是删除 key，可以理解成就是释放锁

### 15.4.4 实例：Redis 实现分布式锁 - 代码实现

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061534132.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061600855.png)

看笔记

### 15.4.5 实例：优化 - 设置锁的过期时间，防止死锁

看笔记

### 15.4.6 实例：优化 - UUID 防误删锁

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061633606.png)

该问题会导致A用户误删B用户的锁

解决方案：

（1）在获取锁的时候，给锁设置的值是唯一的 uuid

（2）在释放锁时，判断释放的锁是不是同一把锁

（3）造成这个问题的本质原因，是因为删除操作缺乏原子性

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061638894.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061640970.png)

### 15.4.7 实例：优化 - LUA 脚本保证删除原子性

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061743166.png)

这个就是当A用户的代码判断成功后，正准备删除锁时，锁因超时自动释放了，但是同时B用户设置了锁，然后执行A用户的删锁操作，这样A用户删除的就是B用户的锁

解决思路：

（1）删除操作缺乏原子性

（2）使用 Lua 脚本保证删除原子性

代码看笔记

### 15.4.8 注意事项和细节

（1）定义锁的 key，key 可以根据业务，分别设置，比如操作某商品，key 应该是为每个 sku 定义的，也就是每个 sku 有一把锁

（2）为了确保分布式锁可用，要确保锁的实现同时满足以下四个条件：

- 互斥性：在任意时刻，只有一个客户端能持有锁
- 不会发生死锁：即使有一个客户端在持有锁的期间崩溃而没有主动解锁，也能保证后续其它客户端能加锁
- 加锁和解锁必须是同一个客户端，A 客户端不能把 B 客户端加的锁给解了
- 加锁和解锁必须具有原子性

# 第 16 章 Redis 新功能

## 16.1 ACL

### 16.1.1 基本介绍

（1）Redis ACL 是 Access Control List（访问控制列表）的缩写，该功能限制可以执行的命令和可以访问的键

（2）在 Redis 5 版本之前，Redis 安全规则只有密码控制，还有通过 rename 来调整高危命令比如 flushdb、keys*、shutdown 等

（3）Redis 6 则提供 ACL 的功能对用户进行更细粒度的权限控制：

- 接入权限：用户名和密码
- 可以执行的命令
- 可以操作的 key

### 16.1.2 常用指令

（1）`acl list`：展现用户权限列表

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061806597.png)

（2）`acl cat` 命令，查看添加权限指令类别

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061822351.png)

带上参数类型名，可以查看该类型可以执行的指令

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061822136.png)

`acl whoami` 用于查看当前用户

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061834579.png)

（3）`acl setuser` 命令创建和编辑用户 ACL

1）ACL 规则说明

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061836966.png)

2）通过命令创建新用户默认权限

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061839124.png)

在上面的示例中，没有指定规则

如果用户不存在，将使用 just created 的默认属性来创建用户

如果用户已经存在，则上面的命令将不执行任何操作

3）设置有用户名、密码、ACL 权限、并启用的用户

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061841391.png)

指令：`acl setuser jack on >password ~cached:* +get`

- jack：用户名
- on：表示启用
- `>password`：表示密码就是 password
- `~cached:*`：表示操作的 key 是以 cached: 开头的
- `+get`：表示操作的指令只能是 get

4）切换用户，验证权限

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061847469.png)

5）给 jack 用户增加权限/删除用户

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061936179.png)

## 16.2 IO 多线程

1. 简介

（1）IO 多线程是指和客户端交互时，网络 IO 交互处理模块多线程，而非执行命令多线程

（2）Redis 6 执行命令依然是单线程

（3）也就是说，Redis 和客户端的交互是多线程的，在执行指令的时候，仍然是单线程 + IO 多路复用

2. 原理架构

Redis 6 加入多线程，Redis 的多线程部分只是用来处理网络数据的读写和协议解析，执行命令仍然是单线程，之所以这么设计是不想因为多线程而变得复杂，需要去控制 key、lua、事务、lpush/lpop 等等的并发问题，整体的设计大体如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061946167.png)

3. 另外，多线程 IO 默认也是不开启的，需要在配置文件 redis.conf 中配置

```java
io-threads-do-reads yes
io-threads 4
```

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061950650.png)

## 16.3 工具支持 Cluster

（1）之前老版 Redis 想要搭建集群需要单独安装 ruby 环境

（2）Redis 5 将 redis-trib.rb 的功能集成到 redis-cli

（3）另外官方 redis-benchmark 工具开始支持 cluster 模式了，通过多线程的方式对多个分片进行压测

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412061953733.png)

## 16.4 其它新功能 - 介绍

（1）RESP3 新的 Redis 通信协议：优化服务端与客户端之间的通信

（2）Client side caching 客户端缓存：基于 RESP3 协议实现的客户端缓存功能，为了进一步提升缓存的性能，将客户端经常访问的数据 cache 到客户端，减少 TCP 网络交互

（3）Proxy 集群代理模式：Proxy 功能，让 Cluster 拥有像单实例一样的接入方式，降低大家使用 cluster 的门槛

（4）Modules API：Redis6 中模块 API 开发进展非常大，Redis 可以变成一个框架，利用 Modules 来构建不同系统，而不需要从头开始写，Redis 一开始就是一个面向编写各种系统开放的平台

