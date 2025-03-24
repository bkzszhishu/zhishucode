# 第九章 IO流

## 9.1 文件流

文件在程序中是以流的形式来操作的

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222024721.png)

流：数据在数据源（文件）和程序（内存）之间经历的路径

输入流：数据从数据源（文件）到程序（内存）的路径

输出流：数据从程序（内存）到数据源（文件）的路径

## 9.2 常用文件操作

### 9.2.1 创建文件

（1）根据路径创建

```java
@Test
    public void CreateFile01() {
        //1. 构建此文件路径
        String filePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\test01.txt";
        //2. 构建 File 对象
        File file = new File(filePath);
        //3. 开始创建文件
        try {
            file.createNewFile();
            System.out.println("创建文件成功");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
```

（2）根据父目录文件对象 + 子路径 创建

```java
@Test
    public void CreateFile02() {
        //1. 构建父目录文件对象
        File parentfile = new File("D:\\");
        //2. 构建子目录
        String fileName = "Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\test02.txt";
        //3. 构建文件对象
        File file = new File(parentfile, fileName);
        //4. 开始创建文件
        try {
            file.createNewFile();
            System.out.println("文件创建成功");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
```

（3）根据父目录 + 子路径 创建

```java
@Test
    public void CreateFile03() {
        //1. 创建父目录
        String parentPath = "D:\\";
        //2. 创建子路径
        String fileName = "Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\test03.txt";
        //3. 构建文件对象
        File file = new File(parentPath, fileName);
        //4. 开始创建文件
        try {
            file.createNewFile();
            System.out.println("文件创建成功");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
```

### 9.2.2 获取文件信息

获取文件的文件名、大小、路径、父目录、文件是否存在、是不是文件、是不是目录等信息

```java
@Test
    public void info() {
        File file = new File("D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\test04.txt");
        System.out.println("文件名字 = " + file.getName());
        System.out.println("文件绝对路径 = " + file.getAbsolutePath());
        System.out.println("文件父级目录 = " + file.getParent());
        System.out.println("文件大小(字节) = " + file.length());
        System.out.println("文件是否存在 = " + file.exists());
        System.out.println("是不是一个文件 = " + file.isFile());
        System.out.println("是不是一个目录 = " + file.isDirectory());

        /*文件名字 = test04.txt
        文件绝对路径 = D:\Study\Code\IDEA\JavaSE\chapter09\test\test04.txt 
        文件父级目录 = D:\Study\Code\IDEA\JavaSE\chapter09\test
        文件大小(字节) = 0
        文件是否存在 = false
        是不是一个文件 = false
        是不是一个目录 = false*/
    }
```

### 9.2.3 目录的操作和文件删除

`mkdir()`创建一级目录、`mkdirs()`创建多级目录、delete删除空目录或文件

```java
//判断文件是否存在，如果存在就删除
    @Test
    public void m1() {
        String filePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\test03.txt";
        File file = new File(filePath);
        if (file.exists()) {
            if (file.delete()) {
                System.out.println("文件删除成功");
            } else {
                System.out.println("文件删除失败");
            }
        } else {
            System.out.println("文件不存在");
        }
    }
```

## 9.3 IO流原理及流的分类

### 9.3.1 IO流原理

输入流 [input]：读取外部数据到程序中

输出流 [output]：将程序数据输出到磁盘等存储设备中

### 9.3.2 流的分类

按操作数据单位不同分为：字节流二进制文件、字符流文本文件

按数据流的流向不同分为：输入流、输出流

按流的角色的不同分为：节点流、处理流(包装流)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222024901.png)

**注意：Java的IO流共涉及40多个类，实际上都非常规则，都是从如上4个抽象基类派生的，由这四个类派生出来的子类名称都是以其父类名作为子类名后缀**

### 9.3.3 IO流常用的类

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222024008.png)

### 9.3.4 文件字节流

#### 9.3.4.1 InputStream字节输入流

InputStream 抽象类是所有字节输入流类的超类

InputStream 常用的子类：

​		（1）FileInputStream：文件输入流

​		（2）BufferedInputStream：缓冲字节输入流

​		（3）ObjectInputStream：对象字节输入流

##### 9.3.4.1.1 FileInputStream字节输入流

使用 FileInputStream 读取 hello.txt 文件，并将文件内容显示到控制台

```java
//使用 FileInputStream 读取 hello.txt 文件，并将文件内容显示到控制台
    @Test
    public void FileInputStream01() {
        //1. 获取文件路径
        String filePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\hello.txt";
        //2. 此 readData 用来存放读取到的字节
        int readData = 0;
        //3. 初始化字节输入流 FileInputStream
        FileInputStream fileInputStream = null;
        try {
            //4. 创建 fileInputStream 对象,用于读取文件
            fileInputStream = new FileInputStream(filePath);
            //5. 开始读取文件
            //5.1 fileInputStream.read() 返回从该输入流读取到的一个字节的数据,如果读完了就返回 -1
            while ((readData = fileInputStream.read()) != -1) {
                //5.2 将读取到的一个字节转成 char 类型输出
                System.out.print((char)readData);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            //6. 关闭文件流,释放资源
            try {
                fileInputStream.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }
```

以上代码存在的问题：因为是一个字节一个字节的读取数据，并且读取到一个字节就输出一个字节，又因为英文一个字母占一个字节，而中文一个字占三个字节，所以程序在输出英文时正确，但输出中文时会有乱码。并且每次只读写一个字节效率极低，所以下面采取一次读取和输出八个字节。

```java
//此代码先解决效率问题，中文乱码问题没有解决
@Test
    public void FileInputStream02() {
        //1. 获取文件路径
        String filePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\hello.txt";
        //2. 创建字节数组,把读取到的字节存放到字节数组中,并且字节数组可以存放八个字节
        byte[] buf = new byte[8]; //一次读取八个字节，如果字节超过八个就再读，即八个八个读
        //3. 此 readLen 的作用是记录 fileInputStream.read(buf) 读取到的实际的字节数。
        //   因为读到最后可能不够八个字节，可能最后实际只剩了五个字节，此时 fileInputStream.read(buf) 就会返回 5 ,则此时 readLen 等于 5
        int readLen = 0;
        //4. 初始化字节输入流 FileInputStream
        FileInputStream fileInputStream = null;
        try {
            //5. 创建 fileInputStream 对象,用于读取文件
            fileInputStream = new FileInputStream(filePath);
            //6. 开始读取文件
            //6.1 fileInputStream.read(buf) 从该输入流读取最多buf.length字节的数据到字节数组,会返回读取到的字节数,如果读完了就返回 -1
            while ((readLen = fileInputStream.read(buf)) != -1) {
                //System.out.println(readLen);
                //6.2 将读取到的一组 buf 字节数组里的 [0,readLen) 范围内的字节转成 String 输出
                System.out.print(new String(buf, 0, readLen));
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            //7. 关闭文件流,释放资源
            try {
                fileInputStream.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }
```

#### 9.3.4.2 OutputStream字节输出流

##### 9.3.4.2.1 FileOutputStream

使用 FileOutputStream 在 a.txt 文件中写入 "hello,yusi"，如果文件不存在，会创建文件（前提是目录已经存在）

```java
//使用FileOutputStream将程序中的数据写到文件中,如果该文件不存在就创建文件
    @Test
    public void fileOutputStream01() {
        //1. 创建文件路径
        String filePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\hello2.txt";
        //2. 初始化文件输出流对象 FileOutputStream
        FileOutputStream fileOutputStream = null;

        try {
            //3. 创建输出流对象 fileOutputStream
            //3.1 new FileOutputStream(filePath) 此创建方式表示当写入内容时,会覆盖原来的内容
            //3.2 new FileOutputStream(filePath, true) 此创建方式表示当写入内容时,是追加到原来内容的后面
            fileOutputStream = new FileOutputStream(filePath, true);
            //4. 开始写入
            //4.1 写入一个字节
            fileOutputStream.write('h');
            //4.2 写入一个字符串
            String str = "ello,yusi";
            //注意:需要把字符串转成字节数组才能写入: str.getBytes()
            fileOutputStream.write(str.getBytes());
            //4.3 可以写入指定的一段字符串 其中: 5表示起始位置 4表示要写入的长度
            fileOutputStream.write(str.getBytes(), 5, 4);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            //5. 关闭文件输出流
            try {
                fileOutputStream.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }
```

#### 9.3.4.3 FileInputStream和FileOutputStream应用实例-文件拷贝

将`D:\Study\Code\IDEA\JavaSE\chapter09\test\1.jpg`下的文件拷贝到 `D:\Study\Code\IDEA\JavaSE\chapter09\test\2.jpg`

在编写文件拷贝的程序时，应该是读取部分数据就写入到指定文件

```java
public static void main(String[] args) throws IOException {
        //将D:\Study\Code\IDEA\JavaSE\chapter09\test\1.jpg 下的文件拷贝到 D:\Study\Code\IDEA\JavaSE\chapter09\test\2.jpg
        //1. 创建原地址和目标地址
        //2. 创建文件输入流,将文件读入到程序
        //3. 创建文件输出流,将读取到的文件数据写入到指定的文件
        String srcFilePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\1.jpg"; //原地址
        String destFilePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\2.jpg"; //目标地址
        FileInputStream fileInputStream = null;
        FileOutputStream fileOutputStream = null;
        try {
            fileInputStream = new FileInputStream(srcFilePath);
            fileOutputStream = new FileOutputStream(destFilePath);
            //4. 定义一个字节数组,提高读取效率
            byte[] buf = new byte[1024];
            int readLen = 0;
            while ((readLen = fileInputStream.read(buf)) != -1) {
                //读取到后就写入文件，一边读一边写
                fileOutputStream.write(buf,0, readLen);
            }
            System.out.println("拷贝成功");
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            //5. 关闭输入输出流
            if (fileInputStream != null) {
                fileInputStream.close();
            }
            if (fileOutputStream != null) {
                fileOutputStream.close();
            }
        }
    }
```

### 9.3.5 文件字符流

FileReader 和 FileWriter 是字符流，即按照字符来操作IO流

##### 9.3.5.1 FileReader字符输入流

```java
@Test
    public void fileReader01() {
        //1. 创建文件路径
        String filePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\story.txt";
        //2. 创建data用来存放读取到的字符
        int data = 0;
        //3. 初始化 FileReader 对象
        FileReader fileReader = null;
        try {
            //4. 创建 FileReader对象
            fileReader = new FileReader(filePath);
            //5. 循环读取
            //5.1 read()一个一个字符的读取
            while ((data = fileReader.read()) != -1) {
                System.out.print((char) data);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            if (fileReader != null) {
                try {
                    fileReader.close();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
        }
    }
```

以上代码是一个一个字符的读取，效率低

```java
@Test
    public void fileReader02() {
        String filePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\story.txt";
        //创建字符数组，用来存放每一次读取到的数据
        char[] arrs = new char[100];
        //创建charLen，用来记录实际读取了多少个字符
        int charLen = 0;
        FileReader fileReader = null;
        try {
            fileReader = new FileReader(filePath);
            //循环读取，fileReader.read(arrs) 返回实际读取到的字符数，读完就返回 -1
            while ((charLen = fileReader.read(arrs)) != -1) {
                System.out.print(new String(arrs, 0, charLen));
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            //关闭流
            if (fileReader != null) {
                try {
                    fileReader.close();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
        }
    }
```

##### 9.3.5.2 FileWriter字符输出流

FileWriter使用后，必须要关闭[close]或刷新[flush]，否则写入不到指定的文件

```java
@Test
    public void fileWriter01() {
        String destFilePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\test03.txt";
        String str = "风雨之后,定见彩虹";
        char[] chars = {'a', 'b', 'c'};
        FileWriter fileWriter = null;
        try {
            fileWriter = new FileWriter(destFilePath, true);
            //写入单个字符
            fileWriter.write('H');
            //写入指定的字符数组
            fileWriter.write(chars);
            //写入指定的字符数组的指定部分
            fileWriter.write(chars,0,1);
            fileWriter.write(str.toCharArray(),0,4);
            fileWriter.write("止束",0,2);
            //写入整个字符串
            fileWriter.write("你好，止束");
            //写入字符串的指定部分
            fileWriter.write("上海天津",0,2);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            //关闭流
            if (fileWriter != null) {
                try {
                    fileWriter.close();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
        }
        System.out.println("程序运行成功");
    }
```

### 9.3.6 节点流和处理流(包装流)

#### 9.3.6.1 基本介绍

（1）节点流可以从一个特定的数据源读写数据，如FileReader、FileWriter等

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222024790.png)

（2）处理流(包装流)是连接在已存在的流[节点流或处理流]之上，为程序提供更为强大的读写功能，如BufferedReader、BufferedWriter

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222024031.png)

（3）节点流和处理流一览图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222024317.png)

（4）详解

以BuffredReader为例，它里面有个Reader属性，说明它可以处理一个节点流，只要是Reader的子类就可以。

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222024901.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222024958.png)

同样, BufferedWriter 里也封装了一个 Writer，说明它可以处理一个节点流，只要是Writrer的子类就可以。

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222024181.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222024019.png)

#### 9.3.6.2 处理流设计模式

（1）节点流是底层流/低级流，直接跟数据源相接

（2）处理流(包装流)包装节点流，既可以消除不同节点流的实现差异，也可以提供更方便的方法来完成输入输出

（3）处理流(包装流)对节点流进行包装，使用了修饰器设计模式，不会直接与数据源相连 [修饰器设计模式]

（4）处理流的功能如下：

​		1）主要以增加缓冲的方式来提高输入输出的效率

​		2）处理流提供了一系列便捷的方法来处理一次输入输出大批量的数据，使用更加灵活方便

#### 9.3.6.3 BufferedReader和BufferedWriter字符处理流

BufferedReader 和 BufferedWriter 属于字符流，是按照字符来读取数据的。关闭处理流时，只需要关闭外层流即可。

##### 9.3.6.3.1 BufferedReader 字符输入流

使用 BufferedReader 读取文本文件，并显示在控制台

```java
@Test
    public void bufferedReader01() throws IOException {
        //1. 获取文件路径
        String filePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\story.txt";
        //2. 创建 BufferedReader 对象
        BufferedReader bufferedReader = new BufferedReader(new FileReader(filePath));
        //3. 读取数据
        String line; //按行读取，效率高
        //4. bufferedReader.readLine() 是按行读取文件，当文件读完时返回 null
        while ((line = bufferedReader.readLine()) != null) {
            System.out.println(line);
        }
        //5. 关闭流
        //这里只需要关闭 BufferedReader 流，因为底层会自动的去关闭节点流 FileReader
        bufferedReader.close();
    }
```

##### 9.3.6.3.2 BufferedWriter 字符输出流

使用 BufferedWriter 将 "Hello，止束"，写入到文件中

```java
@Test
    public void bufferedWriter01() throws IOException {
        String filePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\test02.txt";
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(filePath, true));
        bufferedWriter.write("Hello,止束");
        bufferedWriter.newLine(); //插入一个和系统相关的换行
        bufferedWriter.write("Hello,余思");
        bufferedWriter.newLine(); //插入一个和系统相关的换行
        bufferedWriter.write("Hello,羡初");

        //关闭流，不然数据写不进文件
        bufferedWriter.close();
    }
```

##### 9.3.6.3.3 BufferedReader 和 BufferedWriter 综合-文本文件拷贝

因为 BufferedReader 和 BufferedWriter 是字符流，只能进行字符操作，不能操作二进制文件（如：声音、视频、doc、pdf等），会造成文件损坏

```java
@Test
    public void bufferedCopy01() {
        String srcFilePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\story.txt"; //源地址
        String destFilePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\story2.txt"; //目的地址
        BufferedReader bufferedReader = null;
        BufferedWriter bufferedWriter = null;

        try {
            bufferedReader = new BufferedReader(new FileReader(srcFilePath));
            bufferedWriter = new BufferedWriter(new FileWriter(destFilePath));
            String str;
            while ((str = bufferedReader.readLine()) != null) {
                //读一行写一行
                bufferedWriter.write(str);
                bufferedWriter.newLine();
            }
            System.out.println("拷贝成功");
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            //关闭资源
            try {
                if (bufferedReader != null) {
                    bufferedReader.close();
                }
                if (bufferedWriter != null) {
                    bufferedWriter.close();
                }
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }
```

#### 9.3.6.4 BufferedInputStream 和 BufferedOutputStream 字节处理流

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222024911.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222024561.png)

案例：字节处理流拷贝文件

```java
public class BufferedInputStream_OutputStream {
    public static void main(String[] args) {
        String srcFilePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\3.jpg";
        String destFilePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\4.jpg";
        //字节流可以操作视频、图片等文件，当然也可以操作字符文本文件，因为字符也是字节组成
        BufferedInputStream bis = null;
        BufferedOutputStream bos = null;
        try {
            //括号里 new 了一个 FileInputStream 文件源，如果要用其他源，new 其他数据源
            bis = new BufferedInputStream(new FileInputStream(srcFilePath));
            bos = new BufferedOutputStream(new FileOutputStream(destFilePath));
            byte[] buff = new byte[1024];
            int readLen = 0;
            while ((readLen = bis.read(buff)) != -1) {
                bos.write(buff, 0, readLen);
            }
            System.out.println("拷贝成功");
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            try {
                if (bis != null) {
                    bis.close();
                }
                if (bos != null) {
                    bos.close();
                }
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
```

#### 9.3.6.5 对象处理流

##### 9.3.6.5.1 基本介绍

（1）需求

​		1）将 `int num = 100` 这个 int 数据保存到文件中，注意不是 100 数字，而是 `int 100`，并且能够从文件中直接恢复 `int 100`

​		2）将 `Dog dog = new Dog("小黄, 3")` 这个 dog 对象保存到文件中，并且能够从文件恢复

​		以上的需求就是将基本数据类型或者对象进行序列化和反序列化操作

（2）序列化和反序列化

​		1）序列化就是在保存数据时，保存数据的值和数据类型

​		2）反序列化就是在恢复数据时，恢复数据的值和数据类型

​		3）需要让某个对象支持序列化机制，则必须让其类是可序列化的，为了让某个类是可序列化的，该类必须实现如下两个接口之一：`Serializable` `Externalizable`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222024769.png)

##### 9.3.6.5.2 ObjectOutputStream 序列化

案例：使用 ObjectOutputStream 序列化基本数据类型和一个 Dog 对象(name,age)，并保存到 data.dat 文件中

```java
public class ObjectOutputStream_ {
    public static void main(String[] args) throws Exception {
        //演示 ObjectOutStream 的使用，完成对数据的序列化，即将程序中的对象写入到文件

        //序列化后，保存的文件格式不是存文本，而是按照它的格式来保存
        String filePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\data.dat";

        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(filePath));

        //序列化数据到 D:\Study\Code\IDEA\JavaSE\chapter09\test\data.dat
        oos.writeInt(100); //int -> Integer(自动包装) (Integet已经实现了 Serializable)
        oos.writeBoolean(true); //boolean -> Boolean(自动包装) (Boolean 已经实现了 Serializable)
        oos.writeChar('a'); //char -> Character(自动包装) (Character 已经实现了 Serializable)
        oos.writeDouble(9.5); //double -> Double(自动包装) (Double 已经实现了 Serializable)
        oos.writeUTF("韩顺平教育"); //String (String 已经实现了 Serializable)

        //保存一个 dog 对象
        oos.writeObject(new Dog1("旺财", 10));

        oos.close();
        System.out.println("数据保存完毕(序列化形式)");
    }
}
```

```java
public class Dog1 implements Serializable {
    private String name;
    private int age;

    public Dog1(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
```

##### 9.3.6.5.3 ObjectInputStream 反序列化

```java
public class ObjectInputStream_ {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        //指定反序列化的文件
        String filePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\data.dat";

        ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filePath));

        //读取
        //读取(反序列化)的顺序需要和你保存数据(序列化)的顺序一致
        System.out.println(ois.readInt());
        System.out.println(ois.readBoolean());
        System.out.println(ois.readChar());
        System.out.println(ois.readDouble());
        System.out.println(ois.readUTF());
        //dog 的编译类型是 Object，dog 的运行类型是 Dog1
        Object dog = ois.readObject();
        System.out.println("运行类型 = " + dog.getClass());
        System.out.println("dog 信息 = " + dog); //底层 Object -> Dog

        //如果我们希望调用 Dog1 方法，需要向下转型，
        //需要将 Dog1 类的定义放到可以引用此代码的位置
        Dog1 dog1 = (Dog1) dog;
        System.out.println(dog1.getName());

        ois.close();
    }
}
```

```java
public class Dog1 implements Serializable {
    private String name;
    private int age;

    public Dog1(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
```

##### 9.3.6.5.4 对象处理流注意事项和细节

（1）读写顺序要一致

（2）要求序列化或反序列化对象需要实现 Serializable

（3）序列化的类中建议添加 SerialVersionUID，为了提高版本的兼容性

（4）序列化对象时，默认将里面所有属性都进行序列化，但除了 static 或 transient 修饰的成员

（5）序列化对象时，要求里面属性的类型也需要实现序列化接口

（6）序列化具备可继承性，也就是如果某类已经实现了序列化，则它的所有子类也已经默认实现了序列化

#### 9.3.6.6 转换流

##### 9.3.6.6.1 乱码引出转换流

```java
public class CodeQuestion {
    public static void main(String[] args) throws IOException {
        //读取 D:\Study\Code\IDEA\JavaSE\chapter09\test\test04.txt 文件到程序，让此文件为 GBK 编码
        //1. 创建字符输入流 BufferedReader [处理流]
        //2. 使用 BufferedReader 对象读取 a.txt
        //3. 默认情况下，读取文件是按照 utf-8 编码
        String filePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\test04.txt";
        BufferedReader br = new BufferedReader(new FileReader(filePath));
        String s = br.readLine();
        System.out.println("读取到的内容: " + s); //读取到的内容: ��ã�ֹ��
        br.close();
    }
}
```

##### 9.3.6.6.2 InputStreamReader 和 OutputStreamWriter 转换流

###### 9.3.6.6.2.1 介绍

（1）InputStreamReader 是 Reader 的子类，可以将 InputStream(字节流) 包装成 Reader(字符流) 

（2）OutputStreamWriter是 Writer 的子类，实现将 OutputStream(字节流) 包装成 Writer(字符流)

（3）当处理纯文本数据时，如果使用字符流效率更高，并且可以有效解决中文问题，所以建议将字节流转换成字符流

（4）可以在使用时指定编码格式（比如 utf-8、gbk、gb2312、ISO8859-1等）

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222025588.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222025956.png)

###### 9.3.6.6.2.2 应用案例

​		编写代码将字节流 FileInputStream 包装成(转换成)字符流 InputStreamReader，对文件按照 utf-8 的格式进行读取，进而再包装成 BufferedReader

```java
public class CodeQuestion {
    public static void main(String[] args) throws IOException {
        //使用 InputStreamReader 转换流解决中文乱码问题
        //将字节流 FileInputStream 转成字符流 InputStreamReader 并指定编码为 gbk
        String filePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\test04.txt";
        //1. 把 FileInputStream 转成 InputStreamReader
        //2. 指定编码 gbk
        InputStreamReader isr = new InputStreamReader(new FileInputStream(filePath), "gbk");
        //3. 把 InputStreamReader 传入 BufferedReader
        BufferedReader br = new BufferedReader(isr);
        //4. 读取
        String s = br.readLine();
        System.out.println("读取到的内容 = " + s); //读取到的内容 = 你好，止束
        br.close();
    }
}
```

​		编写代码将字节流 FileOutputStream 包装成(转换成)字符流 OutputStreamWriter，对文件按照 gbk 的格式进行写入

```java
public class OutputStreamWriter_ {
    public static void main(String[] args) throws IOException {
        String filePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\test05.txt";
        String charSet = "gbk";
        OutputStreamWriter osw = new OutputStreamWriter(new FileOutputStream(filePath), charSet);
        osw.write("hi,张三");
        osw.close();
        System.out.println("按照 " + charSet + " 保存文件成功");
    }
}
```

#### 9.3.6.7 打印流

打印流只有输出流没有输入流

PrintStream 字节流和 PrintWriter 字符流

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222025414.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222025887.png)

```java
public class PrintStream_ {
    public static void main(String[] args) throws IOException {
        PrintStream out = System.out;
        
        //在默认情况下，PrintStream 输出数据的位置是 标准输出，即显示器
        out.print("john, hello");
        
        //因为 print 底层使用的是 write，所以可以直接调用 write 进行打印/输出
        out.write("止束, 你好".getBytes());
        out.close();
        
        //可以修改打印流输出的位置/设备
        //输出修改成 D:\Study\Code\IDEA\JavaSE\chapter09\test\test06.txt
        System.setOut(new PrintStream("D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\test06.txt"));
        System.out.println("hello, 止束");
    }
}
```

```java
public class PrintWriter_ {
    public static void main(String[] args) throws IOException {
        String filePath = "D:\\Study\\Code\\IDEA\\JavaSE\\chapter09\\test\\test07.txt";
        //传入的标准输出 System.out 也就是显示器
        PrintWriter printWriter = new PrintWriter(new FileWriter(filePath));
        printWriter.print("hi,止束你好...");
        printWriter.close();
    }
}
```

## 9.4 Properties类

### 9.4.1 需求

有如下一个配置文件 mysql.properties，利用传统的方法读取此配置文件

```properties
ip=192.168.0.13
user=root
password=12345
```

```java
//1. 传统方法
public class Properties01 {
    public static void main(String[] args) throws IOException {
        //读取 mysql.properties 文件，并得到 ip、user、password
        BufferedReader bufferedReader = new BufferedReader(new FileReader("chapter09\\src\\mysql.properties"));
        String line = "";
        while ((line = bufferedReader.readLine()) != null) {
            String[] split = line.split("=");
            System.out.println(split[0] + " 的值是 " + split[1]);
            /*
                ip 的值是 192.168.0.13
                user 的值是 root
                password 的值是 123456
             */
        }
        bufferedReader.close();
    }
}
```

### 9.4.2 Properties 读文件

（1）Properties 类是专门用于读写配置文件的集合类

​				配置文件格式：

​				键=值

​				键=值

（2）注意：键值对不需要有空格，值不需要用引号引起来，默认类型是 String

（3）Properties 的常见方法

​				load：加载配置文件的键值对到 Properties 对象

​				list：将数据显示到指定设备

​				getProperty(key)：根据键获取值

​				setProperty(key,value)：设置键值对到 Properties 对象

​				store：将 Properties 中的键值对存储到配置文件，在 IDEA 中，保存信息到配置文件，如果含有中文，会存储为 Unicode 码

### 9.4.3 Properties 类应用案例

（1）使用 Properties 类完成对 mysql.properties 的读取

（2）使用 Properties 类添加 key-value 到新文件 mysql2.properties 中

（3）使用 Properties 类完成对 mysql.properties 的读取，并修改某个 key-value

```java
public class Properties02 {
    public static void main(String[] args) throws IOException {
        //使用 Properties 类来创建配置文件，修改配置文件内容
        Properties properties = new Properties();
        //创建，此时还在内存中
        //1. 如果该文件没有 key，就是创建
        //2. 如果该文件有 key，就是修改
        properties.setProperty("charset", "utf-8");
        properties.setProperty("user", "汤姆"); //中文保存的是 Unicode 码值
        properties.setProperty("pwd", "abc111");
        //将键值对存储到文件中
        properties.store(new FileOutputStream("chapter09\\src\\mysql2.properties"), null);
        System.out.println("保存配置文件成功");
        /*
            user=\u6C64\u59C6
            pwd=abc111
            charset=utf-8
         */
    }
}
```


