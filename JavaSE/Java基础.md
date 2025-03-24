# 第一章 Java 基础

## 1.1 Java源文件

1. 一个源文件中最多只能有一个 public 类，其它类的个数不限
2. 如果源文件包含一个 public 类，则文件名必须按该类名命名
3. 一个源文件最多只能有一个 public 类，其它类的个数不限，也可以将 main 方法写在非 public 类中，然后指定运行非 public 类，这样入口方法就是非 public 的 main 方法

## 1.2 Java 转义字符

Java 常用的转义字符

```java
/**
 * Java中常用的转义字符
 * 1. \t : 一个制表位，实现对齐的功能
 * 2. \n : 换行符
 * 3. \\ : 一个\
 * 4. \" : 一个"
 * 5. \' : 一个'
 * 6. \r : 一个回车,打印\r后面的字符
 */
public class 转义字符 {
    public static void main(String[] args) {
        System.out.println("Java基础\r需掌握"); //需掌握
    }
}
```

## 1.3 变量

1. 变量表示内存中的一个存储区域，不同的变量类型不同占用的空间大小不同，比如：int 占 4 个字节，double 占 8 个字节
2. 该区域有自己的变量名和数据类型
3. 变量必须先声明后使用
4. 该区域的值可以在同一类型范围内不断变化
5. 变量在同一个作用域内不能重名
6. 变量 = 变量名 + 值 + 数据类型

## 1.3 Java 数据类型

每一种数据都定义了明确的数据类型，在内存中分配了不同大小的内存空间（字节）

### 1.3.1 基本数据类型

1. 数值型：

   - 整数类型：存放整数：byte[1]，short[2]，int[4]，long[8]

   - 浮点(小数)类型：float[4]，double[8]

2. 字符型：
   - char[2]，存放单个字符

3. 布尔型：
   - boolean[1]，存放 true，false

### 1.3.2 引用数据类型

1. 类：class

2. 接口：interface

3. 数组：[]

### 1.3.3 注意事项及细节

1. 整数类型：Java 整型常量默认为 int 型，声明 long 型常量需在其后加 'l' 或 'L'。

2. 浮点类型：

   （1）Java 的浮点型常量默认为 double 型，声明 float 型常量，需在其后加 'f' 或 'F'。

   （2）通常情况下应该使用 double 型，因为它比 float 型更精确。

```java
public class 浮点类型 {
    public static void main(String[] args) {
        double num1 = 2.1234567891;
        float num2 = 2.1234567891f;
        System.out.println(num1); //2.1234567891
        System.out.println(num2); //2.1234567
    }
}
```

​		（3）浮点数使用陷阱：

```java
/**
 * 浮点数使用陷阱
 * 2.7 和 8.1 / 3 比较
 * 浮点数进行运算时，要对其运算结果格外小心
 */
public class 浮点类型 {
    public static void main(String[] args) {
        double num1 = 2.7;
        double num2 = 8.1 / 3;
        System.out.println(num2); //2.6999999999999997

        //当我们对运算结果是小数的进行相等判断时，要小心
        //错误的判断方法
        if (num1 == num2) {
            System.out.println("结果相等");
        } else {
            System.out.println("结果不相等"); //输出结果不相等
        }

        //正确的判断方法
        if (Math.abs(num1 - num2) < 0.000001) {
            System.out.println("差值非常小，小到规定的精度就认为相等");
        }

    }
}
```

3. 字符类型：在 Java 中，可以直接给 char 赋一个整数，输出时会按照对应的 Unicode 码输出字符。char 类型是可以进行运算的，相当于一个整数。

```java
public class 字符类型 {
    public static void main(String[] args) {
        // + 使用
        //当 + 左右两边都是数值型时，则做加法运算
        //当 + 左右两边有一方为字符串，则做拼接运算
        //下面这段代码输出 107 ,证明字符类型本质上是整数
        System.out.println('a' + 10); //107
        char c1 = 'b' + 1;
        System.out.println(c1); //c
    }
}
```

4. 布尔类型：不可以用 0 或非 0 的整数替代 false 和 true。

### 1.3.4 基本数据类型转换

1. 自动类型转换：精度小的类型自动转换为精度大的数据类型

   - char -> int -> long -> float -> double

   - byte -> short -> int -> long -> float -> double

注意：

（1）有多种类型的数据混合运算时，系统首先自动将所有数据转换成容量最大的那种数据类型，然后再进行计算。

（2）当把精度大的赋给精度小的就会报错，反之自动转换。byte 和 char，short 和 char 之间不会相互自动转换。byte、short、char 无论是单独各自运算还是混合运算，都会转换为 int 类型。boolean 不参与转换。

2. 强制类型转换：精度大的类型转换为精度小的类型，强制转换符 ()。

注意：

char 类型可以保存 int 的常量值，但不能保存 int 的变量值，需要强转。

```java
/**
 * char类型可以保存int的常量值，但不能保存int的变量值，需要强转。
 */
public class 强制类型转换 {
    public static void main(String[] args) {
        int i = 97;
        char c1 = 97; //对
        // char c2 = i; //错
        char c3 = (char)i; //对
        System.out.println(c3); //a
    }
}
```

3. String 类型和基本数据类型的转换

​		基本数据类型转 String 类型：将 `基本类型值 + ""` 即可

​		String 类型转基本数据类型：通过基本类型的包装类调用 parseXX 方法即可

4. 易错点

```java
public class 易错点 {
    public static void main(String[] args) {
        //int 整型相除会向下取整
        System.out.println(10 / 4); //2
        //因为 10.0 是 double 类型所以结果就是 double 类型
        System.out.println(10.0 / 4); //2.5
        //这里先算 10/4 得 2，然后把 2 赋值给 double 类型的 d 进行类型转换，然后就成为 2.0
        double d = 10 / 4;
        System.out.println(d); //2.0
    }
}
```

## 1.4 逻辑运算符

1. 短路与 `&&`，短路或 `||`，取反 `!`，逻辑与 `&`，逻辑或 `|`，逻辑异或 `^`
1. 对于与运算：一假则假，全真为真；对于或运算：一真则真，全假为假

```java
public class 逻辑运算符 {
    public static void main(String[] args) {
        int x = 5;
        int y = 5;
        //这里使用的符号是 逻辑与&
        //if (x++ == 6 & ++y == 6) 的判断逻辑：
        //先判断 x == 6，这里 x == 6 不成立，然后 x++，此时 x = 6
        //因为 x == 6 已经不成立了，整个判断条件已经为假了，已经没有判断的必要了，但是逻辑与 & 还是会继续判断，这时进行 ++y，此时 y = 6，判断条件 y == 6 成立，但是整体还是不成立的，所以不会走 x = 11，所以最后 x = 6，y = 6
        if (x++ == 6 & ++y == 6) {
            x = 11;
        }
        System.out.println("x= " + x + " y= " + y); //6 6

        
        int x2 = 5;
        int y2 = 5;
        //这里使用的符号是 短路与&&
        //if (x2++ == 6 && ++y2 == 6) 的判断逻辑：
        //先判断 x2 == 6，这里 x2 == 6 不成立，然后 x2++，此时 x2 = 6
        //因为判断 x2 == 6 已经不成立，整个判断条件已经不成立，所以没有继续判断的必要，这里就会短路，不会去执行 ++y2 == 6 这个判断条件了，所以最后 x2 = 6，y2 = 5
        if (x2++ == 6 && ++y2 == 6) {
            x2 = 11;
        }
        System.out.println("x= " + x2 + " y= " + y2); //6 5
    }
}
```

2. 复合赋值运算符会进行类型转换

```java
byte b = 1;
b += 2; //等价于 b = (byte)(b + 2);
//这里如果写成 b = b + 2 就会报错，因为 b + 2 会转换为 int 类型然后赋值给 byte 类型的 b，所以会报错
```

## 1.5 键盘输入语句

需要一个扫描器对象，就是 Scanner

```java
public class 键盘输入语句 {
    public static void main(String[] args) {
        Scanner myScanner = new Scanner(System.in);
        System.out.println("请输入姓名:");
        String name = myScanner.next();
        System.out.println("请输入年龄:");
        int age = myScanner.nextInt();
        System.out.println("姓名: " + name + " 年龄: " + age);
    }
}
```

## 1.6 Switch语法

```java
switch(表达式){
    case 常量1: 语句块1;
    break;
    case 常量2: 语句块2;
    break;
    case 常量n: 语句块n;
    break;
    default: default语句块;
    break;
}
```

break表示退出switch，如果一个都没匹配上就执行default

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502030045473.jpeg)

## 1.7 break语法

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222014232.jpeg)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222014966.jpeg)

## 1.8 continue语法

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222014618.jpeg)

## 1.9 循环题目

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222014487.jpeg)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222014108.jpeg)

## 1.10 数组

数组可以存放多个同一类型的数据。数组也是一种数据类型，是引用类型。

数组的使用：

1. 静态初始化

​	语法：数据类型 数组名[] = {元素值，元素值...};

```java
/**
 * 数组的静态初始化：数据类型 数组名[] = {};
 */
public class 数组 {
    public static void main(String[] args) {
        int a[] = {1, 2, 3, 4};
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
    }
}
```

2. 动态初始化

​	语法：数据类型[] 数组名 = new 数据类型[大小];

```java
/**
 * 数组的动态初始化：数据类型[] 数组名 = new 数据类型[大小];
 */
public class 数组 {
    public static void main(String[] args) {
        int[] a = new int[4];
        for (int i = 0; i < a.length; i++) {
            a[i] = i + 1;
        }
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
    }
}
```

3. 数组使用注意事项：

​	数组创建后，如果没有赋值，有默认值：int : 0，short : 0，byte : 0，long : 0，float : 0.0，double : 0.0，char : \u0000，boolean : false，String : null

​	基本数据类型赋值，赋值方式为值拷贝，类似C++中的单向传递

```java
//基本数据类型赋值，赋值方式为值拷贝
//n2 的变化，不会影响到 n1 的值
int n1 = 10;
int n2 = n1;

n2 = 80;
System.out.println("n1 = " + n1); // 10
System.out.println("n2 = " + n2); // 80
```

​	引用类型的数组在默认情况下是引用传递，赋的值是地址，赋值方式为引用赋值，类似C++中的双向传递

```java
public class 数组 {
    public static void main(String[] args) {
        //数组在默认情况下是引用传递，赋的值是地址，赋值方式为引用赋值，类似C++中的双向传递
        int n3[] = {1, 2, 3, 4};
        int[] n4 = n3;
        n4[0] = 5;
        for (int i = 0; i < n3.length; i++) {
            System.out.print(n3[i] + " "); //5 2 3 4
        }
        System.out.println("");
        for (int i = 0; i < n3.length; i++) {
            System.out.print(n4[i] + " "); //5 2 3 4
        }
    }
}
```
