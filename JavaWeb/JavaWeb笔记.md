# JavaWeb

## 第1章 B/S软件开发架构

1. B/S架构是前端（Browser浏览器）和服务器端（Server）组成的系统的框架结构

2. B/S架构可以理解为web架构，包含前端、后端、数据库三大组成部分

3. 前端开发技术工具包括：HTML、CSS、JavaScript，还有以前三者扩展出来的高级的前端框架如：bootstrap、jQuery，vue等

4. 后端开发技术工具主要有：Java、Net、PHP、Go等

5. 数据库有MySQL等

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503051027870.png)



## 第2章 HTML 

```html
<!--
	font标签是字体标签，它可以用来修改文本的字体、颜色、大小
	(1)size 属性修改文本大小
	(2)face 属性修改字体
	(3)color 属性修改颜色
-->
<font size="40px" face="微软雅黑" color="red">北京</font>

<!--
	table标签是表格标签
	(1)border 设置表格标签边框
	(2)width 设置表格宽度
	(3)height 设置表格高度
	(4)align 设置表格相对于页面的对齐方式
	(5)cellspacing 设置单元格间距
	(6)align 设置单元格文本对齐方式
-->
```

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222040628.png)

（1）提交时，假如用户名文本框输入jack，用户密码输入123，则提交时，提交uname=jack，pwd1=123，也就是说提交时提交的是 name属性值=value的值，所以提交时必须有name属性和value属性。

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222040166.png)

​		这样的话就可以解释那些单选框和复选框要写value属性值，这样的话提交时就有value值可以提交，但那些输入框不用写value属性，因为输入的内容是value属性的值，提交时提交 name属性值=输入的value的值

（2）就是想要提交上就必须有name属性

（3）提交的数据，一定要放在 form标签内，否则数据不会提交

（4）GET 请求的特点是：
		1)浏览器地址栏中的地址是：action 属性[+?+请求参数] 请求参数的格式是：**name=value&name=value**
		`http://localhost:63342/html/ok.html?username=jack&pwd1=111&pwd2=11&sport=lq&sport=sq&gender= 		male&city=bj&myfile`
		2)不安全
		3)它有数据长度的限制(不同的浏览器规定不一样，一般 2k)
（5）POST 请求的特点是：
		1）浏览器地址栏中只有 action 属性值, 提交的数据是携带在 http 请求中, 不会展示在地址栏
		2）相对于 GET 请求要安全
		3）理论上没有数据长度的限制

```html
<div> 标签可以把文档分割为独立的、不同的部分
<div> 是一个块级元素。它的内容自动地开始一个新行
```



## 第3章 CSS

### 3.1 为什么需要CSS

（1）在没有CSS之前，我们想要修改HTML元素的样式需要为每个HTML元素单独定义样式属性，费心费力。所以CSS就出现了

（2）使用CSS将HTML页面的内容与样式分离提高web开发的工作效率（针对前端开发）

（3）CSS可以让HTML元素（内容）+ 样式（CSS）分离，更好的控制页面

（4）常用样式：

​			字体颜色：color

​			边框：border

​			宽度/高度：width/height

​			背景颜色：

​			字体样式：font-size：指定大小；font-weight：指定是否粗体；font-family：指定字体类型

​			DIV居中：margin-left:auto;margin-right:auto;

​			文本居中：text-align:center;

​			超链接去下划线：text-decoration:none;

​			表格细线：（1）设置边框 border:1px solid black;（2）将边框合并 border-collapse:collapse;（3）指定宽度 width（4）给td、th设置边框 border:1px solid black;

​			列表去修饰：list-style:none



## 第4章 JS+DOM

### 4.1 JavaScript函数

#### 4.1.1 JavaScript函数入门

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>函数快速入门</title>
    <script type="text/javascript">
        //定义一个简单的函数
        //如果不调用函数，那么该函数不会执行
        //在js中如果要执行函数，有两种方式: 1.主动调用hi() 2.通过事件去触发该函数
        function hi() {
            alert("hi,老韩");
        }
    </script>
</head>
<body>
    <!--
        这里表示给button绑定了onclick事件
        当用户点击了该button，就会触发hi()函数
     -->
    <button onclick="hi()">点击这里</button>
</body>
</html>
```

#### 4.1.2 JavaScript函数定义方式

##### 4.1.2.1 function关键字来定义函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>定义函数方式1</title>
    <script type="text/javascript">
        function f1() {
            alert("f1()被调用");
        }
        f1();
    </script>
</head>
<body>

</body>
</html>
```

##### 4.1.2.2 将函数赋给变量来定义函数

语法：

```html
var 函数名 = function(形参列表) {
	函数体
	return 表达式
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>定义函数方式2</title>
    <script type="text/javascript">
        var f1 = function () {
            alert("hi,老韩");
        }
        f1();
    </script>
</head>
<body>

</body>
</html>
```

#### 4.1.3 JavaScript函数注意事项和细节

（1）JS 中函数的重载会覆盖掉上一次的定义

（2）函数的 arguments 隐形参数（作用域在 function 函数内）

​		1）隐形参数: 在 function 函数中不需要定义，可以直接用来获取所有参数的变量。

​		2）隐形参数特别像 java 的可变参数一样。 public void fun( int ... args )

​		3） js 中的隐形参数跟 java 的可变参数一样。操作类似数组

#### 4.1.4 JavaScript自定义对象

##### 4.1.4.1 JavaScript自定义对象方式1: Object形式

（1）对象的定义

```html
var 对象名 = new Object(); //对象实例（空对象）
对象名.属性名 = 值; //定义一个属性
对象名.函数名 = function(){} //定义一个函数
```

（2）对象访问

```html
对象名.属性
对象名.函数名();
```

##### 4.1.4.2 JavaScript自定义对象方式2: {}形式

（1）对象的定义

```html
var 对象名 = {
	属性名: 值, //定义属性
	属性名: 值, //定义属性,注意要用,号分隔
	函数名: function(){} //定义函数
};
```

（2）对象访问

```html
对象名.属性
对象名.函数名();
```

#### 4.1.5 JavaScript事件

##### 4.1.5.1 JavaScript事件概述

（1）事件的注册（绑定）

事件注册（绑定）：当事件响应（触发）后要浏览器执行哪些操作代码，叫事件注册或事件绑定

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222040718.png)

（2）静态注册事件

通过html标签的事件属性直接赋于事件响应后的代码，这种方式叫静态注册

（3）动态注册事件

通过JavaScript代码得到标签的dom对象，然后再通过 dom对象.事件名 = function(){} 这种形式叫动态注册

步骤：

​		1）获取标签对应的dom对象

​		2）dom对象.事件名 = function(){}

##### 4.1.5.2 onload加载完成事件[body体加载完才执行这个函数]

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>onload 加载完成事件</title>
    <script type="text/javascript">
        //定义了一个函数
        function sayOK() {
            alert("静态注册onload事件sayOK");
        }

        //1. 在js中，将页面窗口映射成window dom 对象
        //2. window对象中有很多的函数和属性可以使用
        //3. window.onload 表示页面被加载完毕
        //4. 后面的 function(){} 表示加载完毕后，要执行的代码
        window.onload = function () {
            alert("动态注册onload事件");
        }
    </script>
</head>
<!-- 静态注册，在标签中用标签的属性绑定事件 -->
<body onload="sayOK()">

</body>
</html>
```

##### 4.1.5.3 onclick单击事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>onclick 单击事件</title>
    <script type="text/javascript">
        function sayOK() {
            alert("你点击了sayOK按钮");
        }

        //使用动态注册onclick事件,这里不能直接绑定，这样写是加载不出来的
        //因为HTML是从上往下一条一条语句执行的，当它执行到 document.getElementById("btn01")时
        //它就找不到id为btn01的东西，因为id为btn01的东西在下面还没有执行，所以如果输出btn01将显示null
        //所以要等到整个body页面加载完成再进行动态注册
        /*var btn01 = document.getElementById("btn01");
        btn01.onclick = function () {
            alert("你点击了sayHi按钮");
        }*/

        //当页面加载完毕后，再进行动态绑定
        window.onload = function () {
            //动态注册onclick事件
            //1. 先拿到 id=btn01的button对应的dom对象
            //2. 通过dom对象动态的绑定onclick事件
            //3. 通过document的getElementById通过id获取对应的dom对象
            var btn01 = document.getElementById("btn01");
            btn01.onclick = function () {
                alert("你点击了sayHi按钮");
            }
        }
    </script>
</head>
<body>
    <!-- 静态注册onclick事件 -->
    <button onclick="sayOK()">sayOK按钮</button>
    <button id="btn01">sayHi按钮</button>
</body>
</html>
```

##### 4.1.5.4 onblur失去焦点事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>onblur 失去焦点事件</title>
    <script type="text/javascript">
        //静态绑定
        function upperCase() {
            //1. 得到fname输入框中的内容，即value值，得先得到对应的dom对象
            var fname = document.getElementById("fname");
            fname.value = fname.value.toUpperCase();
        }

        //动态绑定，先完成页面加载
        window.onload = function () {
            //1. 得到fname2的dom对象
            var fname2 = document.getElementById("fname2");
            fname2.onblur = function () {
                fname2.value = fname2.value.toUpperCase();
            }
        }
    </script>
</head>
<body>
    输入英文单词:
    <input type="text" id="fname" onblur="upperCase()"/> <br>
    输入英文单词:
    <input type="text" id="fname2"/>
</body>
</html>
```

##### 4.1.5.5 onchange内容发生改变事件

##### 4.1.5.6 onsubmit表单提交事件

注册按钮被点击，提交表单（需求：如果用户名或密码为空，不能提交表单）

静态绑定：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>onsubmit 表单提交事件(静态绑定)</title>
    <script type="text/javascript">
        //静态注册表单提交事件
        function register() {
            //先得到输入的用户名和密码
            var username = document.getElementById("username");
            var pwd = document.getElementById("pwd");
            //判断是否为空
            if ("" == username.value || "" == pwd.value) {
                alert("用户名和密码不能为空，不能提交");
                //这里网页会弹出 用户名和密码不能为空，不能提交的提示语，但还是会跳转到ok.html
                return false; //不提交
            }
            //表示要提交
            return true;
        }
    </script>
</head>
<body>
    <h1>注册用户 1</h1> <!-- 静态注册表单提交事件 -->
    <!--
        如果绑定的函数没有返回值，onsubmit默认返回是true，也就是默认是提交，如果绑定的函数返回的是true，也就是提交
        如果绑定的函数返回false，就不提交
        这里写 onsubmit="register() register()函数返回true或者false"
        但是还是没有返回给onsubmit，所以要写成return register()，返回给onsubmit
     -->
    <form action="ok.html" onsubmit="return register()">
        u: <input type="text" id="username" name="username"/><br/>
        p: <input type="password" id="pwd" name="pwd"/><br/>
        <input type="submit" value="注册用户"/>
    </form>
    <h1>注册用户 2</h1> <!-- 动态注册表单提交事件 -->
    <form action="ok.html" id="form2">
        u: <input type="text" name="username"/><br/>
        p: <input type="password" name="pwd"/><br/>
        <input type="submit" value="注册用户"/>
    </form>

</body>
</html>
```

动态绑定：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>onsubmit 表单提交事件(静态绑定)</title>
    <script type="text/javascript">
        //动态注册表单提交事件
        window.onload = function () {
            //得到form2表单dom对象
            var form2 = document.getElementById("form2");
            //给form2绑定onsubmit事件
            //这里直接将true或false返回给onsubmit
            form2.onsubmit = function () {
                if (form2.username.value == "" || form2.pwd.value == "") {
                    alert("用户名和密码不能为空");
                    return false;
                }
                return true;
            }
        }
    </script>
</head>
<body>
    <h1>注册用户 2</h1> <!-- 动态注册表单提交事件 -->
    <form action="ok.html" id="form2">
        u: <input type="text" name="username"/><br/>
        p: <input type="password" name="pwd"/><br/>
        <input type="submit" value="注册用户"/>
    </form>
</body>
</html>
```

### 4.2 DOM

得到相应的对象，利用对象里的属性和方法进行操作

```html
<li>xxx</li> 
当要获取两个标签之间的内容时，选择innerText或者innerHTML
<input value="xx"/>
当要获取单标签的内容时，选择value
```

#### 4.2.1 document对象

##### 4.2.1.1 点击 韩顺平教育 文本，弹出窗口获得内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>getElementById的使用</title>
    <script type="text/javascript">
        //1. 先得到h1的dom对象，通过id获取
        //2. 对h1对应的dom对象操作即可
        function getValue() {
            var myHeader = document.getElementById("myHeader");
            alert(myHeader.innerText); //获取文本， 韩顺平教育
            alert(myHeader.innerHTML); //获取html， <div>韩顺平教育</div>
        }
        
        //动态绑定
        window.onload = function () {
            //1. 获取h1的dom对象
            var myHeader = document.getElementById("myHeader");
            //2. 给myHeader绑定onclick的事件
            myHeader.onclick = function () {
                alert("动态绑定内容是= " + myHeader.innerText);
            }
        }
    </script>
</head>
<body>
    <h1 id="myHeader" onclick="getValue()"><div>韩顺平教育</div></h1>
    <p>Click on the header to alert its value</p>
</body>
</html>
```

##### 4.2.1.2 多选框案例

```html
<!--点击全选多选框全选、反选多选框反选、全不选多选框全不选-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>getElementsByName 函数</title>
    <script type="text/javascript">
        function selectAll() {
            var sports = document.getElementsByName("sport");
            for (var i = 0; i < sports.length; i++) {
                sports[i].checked = true;
            }
        }
        
        function selectNone() {
            var sports = document.getElementsByName("sport");
            for (var i = 0; i < sports.length; i++) {
                sports[i].checked = false;
            }
        }

        function selectReverse() {
            var sports = document.getElementsByName("sport");
            for (var i = 0; i < sports.length; i++) {
                sports[i].checked = !sports[i].checked;
            }
        }

    </script>
</head>
<body>
    你会的运动项目：
    <input type="checkbox" name="sport" value="zq" checked="checked">足球
    <input type="checkbox" name="sport" value="tq">台球
    <input type="checkbox" name="sport" value="ppq">乒乓球 <br/><br/>
    <button onclick="selectAll()">全选</button>
    <button onclick="selectNone()">全不选</button>
    <button onclick="selectReverse()">反选</button>
</body>
</html>
```

##### 4.2.1.3 图片切换案例

```html
<!--点击按钮切换图片，并且按钮文字也切换-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>getElementsByTagName</title>
    <script type="text/javascript">
        function changeImgs() {
            var imgs = document.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].src = "./img/" + (i + 4) + ".png";
            }
            var btn1 = document.getElementById("btn1");
            btn1.value = "查看多少小狗,并切换成小猫";
        }

    </script>
</head>
<body>
<img src="img/1.png" height="100">
<img src="img/2.png" height="100">
<img src="img/3.png" height="100">
<br/>
<input type="button" id="btn1" onclick="changeImgs()" value="查看多少小猫,并切换成小狗"/>
</body>
</html>
```

改进：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>getElementsByTagName</title>
    <script type="text/javascript">
        function changeImgs() {
            var imgs = document.getElementsByTagName("img");
            var btn1 = document.getElementById("btn1");
            if (btn1.value == "查看多少小猫,并切换成小狗") {
                for (var i = 0; i < imgs.length; i++) {
                    imgs[i].src = "./img/" + (i + 4) + ".png";
                }
                btn1.value = "查看多少小狗,并切换成小猫";
            }else if (btn1.value == "查看多少小狗,并切换成小猫") {
                for (var i = 0; i < imgs.length; i++) {
                    imgs[i].src = "./img/" + (i + 1) + ".png";
                }
                btn1.value = "查看多少小猫,并切换成小狗";
            }
        }
    </script>
</head>
<body>
    <img src="img/1.png" height="100">
    <img src="img/2.png" height="100">
    <img src="img/3.png" height="100">
    <br/>
    <input type="button" id="btn1" onclick="changeImgs()" value="查看多少小猫,并切换成小狗"/>
</body>
</html>
```

##### 4.2.1.4 添加小猫图片案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>createElement</title>
    <script type="text/javascript">
        window.onload = function () {
            var btn1 = document.getElementById("btn1");
            btn1.onclick = function () {
                //createElement方法可以创建一个新的html标签语句
                var img = document.createElement("img");
                img.src = "./img/1.png";
                //这里指定width不用加px单位
                img.width = "100";
                //展示，虽然已经创建好html语句，但是还没有展现在dom页面上
                //也可以说，还没有加入到 body 体中
                document.body.appendChild(img);
            }
        }
    </script>
</head>
<body>
<input type="button" id="btn1" value="点击创建一只小猫~"/>
</body>
</html>
```

#### 4.2.2 HTML DOM节点

##### 4.2.2.1 基本介绍

在 HTML DOM中，每个部分都是节点：

​	（1）文档本身是文档节点

​	（2）所有HTML元素是元素节点

​	（3）所有HTML属性是属性节点

​	（4）HTML元素内的文本是文本节点

​	（5）注释是注释节点

##### 4.2.2.2 节点常用属性

（1）childNodes 属性，获取当前节点的所有子节点，包括换行，因为换行也是一个节点

（2）firstChild 属性，获取当前节点的第一个子节点

（3）lastChild 属性，获取当前节点的最后一个子节点

（4）parentNode 属性，获取当前节点的父节点

（5）nextSibling 属性，获取当前节点的右兄弟节点

（6）previousSibling 属性，获取当前节点的左兄弟节点

（7）className 属性，用于获取或设置标签的 class 属性值

（8）innerHTML 属性，表示获取/设置起始标签和结束标签中的内容

（9）innerText 属性，表示获取/设置起始标签和结束标签中的文本

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>演示HTML DOM 相关方法</title>
    <link rel="stylesheet" type="text/css" href="style/css.css"/>
    <script type="text/javascript">
        //老师使用动态注册/绑定来演示
        window.onload = function () {

            //查找id=java节点
            //先获取btn01的dom
            var btn01 = document.getElementById("btn01");
            btn01.onclick = function () {
                // 查找id=java节点
                var java = document.getElementById("java");
                alert("java节点文本=" + java.innerText);
            }

            // 查找所有option节点
            var btn02 = document.getElementById("btn02");
            btn02.onclick = function () {
                var options = document.getElementsByTagName("option");
                alert(options);
                for (var i = 0; i < options.length; i++) {
                    alert("值= " + options[i].innerText);
                }
            }

            //查找name=sport的节点
            var btn03 = document.getElementById("btn03");
            btn03.onclick = function () {
                var sports = document.getElementsByName("sport");
                for (var i = 0; i < sports.length; i++) {
                    //过滤
                    if (sports[i].checked) {
                        alert("运动是= " + sports[i].value);
                    }
                }
            }

            //查找id=language 下所有li节点
            var btn04 = document.getElementById("btn04");
            btn04.onclick = function () {
                var lis = document.getElementById("language").getElementsByTagName("li");
                for (var i = 0; i < lis.length; i++) {
                    alert(lis[i].innerText);
                }
            }

            //返回id=sel01 的所有子节点
            var btn05 = document.getElementById("btn05");
            btn05.onclick = function () {
                //用这种方法获取id=sel01的节点时，没有获取到换行节点，只是获取到了option节点
                //var options = document.getElementById("sel01").getElementsByTagName("option");

                //如果不希望得到text 对象，需要将所有的内容放在一行
                var childNodes = document.getElementById("sel01").childNodes;
                for (var i = 0; i < childNodes.length; i++) {
                    if (childNodes[i].selected) {
                        alert(i + " " + childNodes[i].innerText);
                    }
                }

                alert("======================================================")
                //还有一个以前方法
                //1. sel01 是 HtmlSelectElement => 本身就有集合特点，可以把换行给过滤掉
                var sel01 = document.getElementById("sel01");
                for (var i = 0; i < sel01.length; i++) {
                    alert(sel01[i].innerText);
                }
            }

            //返回id=sel01 的第一个子节点
            var btn06 = document.getElementById("btn06");
            btn06.onclick = function () {
                //除了上面的方法外，还可以直接使用属性firstChild
                var sel01 = document.getElementById("sel01");
                alert("xx=" + sel01.firstChild);//firstChild 是按照 .childNodes 的方式得到的第一个子节点
                alert("yy=" + sel01[0]);//直接是得到第一个option节点，可以把空的换行给过滤掉
            }

            //返回id=java 的父节点
            var btn07 = document.getElementById("btn07");
            btn07.onclick = function () {
                var java = document.getElementById("java");
                //alert(java.parentNode);// object HtmlUListElement.
                //alert(java.parentNode.innerHTML);//
                //alert(java.parentNode.childNodes.length);//4
                var childNodes = java.parentNode.childNodes;
                for (var i = 0; i < childNodes.length; i++) {
                    alert("语言= " + childNodes[i].innerText);//java php,c++ py,
                }
            }

            //返回id=ct 的左右兄弟节点
            var btn08 = document.getElementById("btn08");
            btn08.onclick = function () {
                //yyds
                var ct = document.getElementById("ct");
                alert(ct.previousSibling.innerText);//这里拿到的是object text，即换行，换行也是一个节点
                alert(ct.previousSibling.previousSibling.innerText);//object htmloptionelement,艳红

                alert(ct.nextSibling.innerText);//object text, 输出undefined
                alert(ct.nextSibling.nextSibling.innerText); //object HtmlOptionElement, 输出春花
            }

            //设置#person的文本域
            var btn10 = document.getElementById("btn10");
            btn10.onclick = function () {
                var person = document.getElementById("person");
                person.innerText = "这是我们最新的介绍";
            }
        }

    </script>
</head>
<body>
<div id="total">
    <div class="inner">
        <P>
            你会的运动项目：
        </P>
        <input type="checkbox" name="sport" value="zq" checked="checked">足球
        <input type="checkbox" name="sport" value="tq">台球
        <input type="checkbox" name="sport" value="ppq">乒乓球 <br/>
        <hr/>
        <P>
            你当前女友是谁：
        </P>
        <select id="sel01">
            <option>---女友---</option>
            <option>艳红</option>
            <option id="ct" value="春桃菇凉">春桃</option>
            <option>春花</option>
            <option>桃红</option>
        </select>
        <hr/>
        <p>
            你的编程语言?
        </p>

        <ul id="language">
            <li id="java">Java~~~</li>
            <li>PHP</li>
            <li>C++</li>
            <li>Python</li>
        </ul>
        <br>
        <br>
        <hr/>
        <p>
            个人介绍:
        </p>
        <textarea name="person" id="person">个人介绍</textarea>
    </div>

</div>
<div id="btnList">
    <div>
        <button id="btn01">查找id=java节点</button>
    </div>
    <div>
        <button id="btn02">查找所有option节点</button>
    </div>
    <div>
        <button id="btn03">查找name=sport的节点</button>
    </div>
    <div>
        <button id="btn04">查找id=language 下所有li节点</button>
    </div>
    <div>
        <button id="btn05">返回id=sel01 的所有子节点</button>
    </div>
    <div>
        <button id="btn06">返回id=sel01 的第一个子节点</button>
    </div>
    <div>
        <button id="btn07">返回id=java 的父节点</button>
    </div>
    <div>
        <button id="btn08">返回id=ct 的左右兄弟节点</button>
    </div>
    <div>
        <button id="btn09">读取id=ct 的 value 属性值</button>
    </div>
    <div>
        <button id="btn10">设置#person的文本域</button>
    </div>
</div>
</body>
</html>

```

##### 4.2.2.3 乌龟吃鸡游戏

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>乌龟游戏</title>
    <script type="text/javascript">

        //定义公鸡的坐标
        var cock_top = 200;
        var cock_left = 200;

        //定义乌龟的高度和宽度
        var wugui_height = 67;
        var wugui_width = 94;
        //定义公鸡的高度和宽度
        var cock_height = 73;
        var cock_width = 76;

        //编程思想, 技巧--> 不知道是什么就输出，或者日志，或者debug
        //编程小技巧: 在不确定情况下，可以输出看看
        function move(obj) {
            //alert("val= " + obj.value);
            // 2.1 拿到wugui dom 对象
            var wugui = document.getElementById("wugui");
            // 2.2 获取wugui.style.left 和 wugui.style.top 的值， 通过修改就可以让乌龟动起来
            var wugui_left = wugui.style.left;
            var wugui_top = wugui.style.top;

            // alert(wugui_left);
            // alert(wugui_top);
            // 分析: wugui_left 和 wugui_top 是 string '100px' -> nubmer 100
            // 类型转换是靠api
            wugui_left = parseInt(wugui_left.substring(0, wugui_left.indexOf("p")));
            wugui_top = parseInt(wugui_top.substring(0, wugui_top.indexOf("p")));

            //alert("wugui_left= " + wugui_left + typeof wugui_left);
            //根据obj.value 来进行上下左右的处理

            if ("向上走" == obj.value) {
                wugui_top -= 10;
                wugui.style.top = wugui_top + "px";
            } else if ("向下走" == obj.value) {
                wugui_top += 10;
                wugui.style.top = wugui_top + "px";
            } else if ("向左走" == obj.value) {
                wugui_left -= 10;
                wugui.style.left = wugui_left + "px";
            } else if ("向右走" == obj.value) {
                wugui_left += 10;
                wugui.style.left = wugui_left + "px";
            }

            //玩一把，完成碰撞功能

            // 4. 分析如何判断乌龟和公鸡碰撞
            // 4.1 得到乌龟和公鸡左上角的距离, 纵向距离y
            // (1) 如果乌龟在上面， 当y < 乌龟图片的高度 时，说明 他们可能在纵向发生重叠， 使用yy 记录
            // (2) 如果乌龟在下面， 当y < 公鸡图片的高度 时，说明 他们可能在纵向发生重叠， 使用yy 记录
            //
            // 4.2 得到乌龟和公鸡左上角的距离, 横向距离x
            // (1) 如果乌龟在左面， 当x < 乌龟图片的宽度 时，说明 他们可能在横向发生重叠， 使用xx 记录
            // (2) 如果乌龟在右面， 当x < 公鸡图片的宽度 时，说明 他们可能在横向发生重叠， 使用xx 记录
            //
            // 4.3 如果 xx 和 yy 同时为true, 说明一定发生碰撞

            //得到乌龟和公鸡左上角的距离, 纵向距离y
            var y = Math.abs(wugui_top - cock_top);
            // 得到乌龟和公鸡左上角的距离, 横向距离x
            var x = Math.abs(wugui_left - cock_left);
            var yy = 0;//默认纵向没有重叠
            var xx = 0;//默认横向没有重叠

            //如果乌龟在上面， 当y < 乌龟图片的高度 时，说明 他们可能在纵向发生重叠， 使用yy 记录
            //如果乌龟在下面， 当y < 公鸡图片的高度 时，说明 他们可能在纵向发生重叠， 使用yy 记录
            if (wugui_top < cock_top) {//乌龟在上
                if (y < wugui_height) {
                    yy = 1;
                }
            } else {//乌龟在下
                if (y < cock_height) {
                    yy = 1;
                }
            }

            //如果乌龟在左面， 当x < 乌龟图片的宽度 时，说明 他们可能在横向发生重叠， 使用xx 记录
            //如果乌龟在右面， 当x < 公鸡图片的宽度 时，说明 他们可能在横向发生重叠， 使用xx 记录
            if (wugui_left < cock_left) {//乌龟在左面
                if (x < wugui_width) {
                    xx = 1;
                }
            } else {//乌龟在右面
                if (x < cock_width) {
                    xx = 1;
                }
            }

            //如果 xx 和 yy 同时为true, 说明一定发生碰撞
            if (xx && yy) {
                alert("乌龟很厉害!");
                //乌龟放到原来的位置
                wugui.style.left = "100px";
                wugui.style.top = "120px";
            }
        }
    </script>
</head>
<body>
<table border="1">
    <tr>
        <td></td>
        <!--
            老韩解读
            1. this表示的是你点击的这个button，而且已经是一个dom对象
            2. 可以使用属性和方法
        -->
        <td><input type="button" value="向上走" onclick="move(this)"/></td>
        <td></td>
    </tr>
    <tr>
        <td><input type="button" value="向左走" onclick="move(this)"/></td>
        <td></td>
        <td><input type="button" value="向右走" onclick="move(this)"/></td>
    </tr>
    <tr>
        <td></td>
        <td><input type="button" value="向下走" onclick="move(this)"/></td>
        <td></td>
    </tr>
</table>
<!--把乌龟放在一个div
    老韩解读
    1. style 的 position: absolute 表示绝对定位
    2. left:100px 表示图片距离窗口的原点的横坐标
    3. top:120px; 表示图片距离窗口的原点的纵坐标
    4. 针对图片而言，定位的点，是图片的左上角
-->
<div id="wugui" style="position: absolute ;left:100px;top:120px;">
    <img src="1.bmp" border="1" alt=""/>
</div>
<!--公鸡图片div-->
<div id="cock" style="left:200px;position:absolute;top:200px;">
    <img src="2.bmp" border="1" alt=""/>
</div>
</body>
</html>
```



## 第5章 XML

### 5.1 XML入门

#### 5.1.1 CDATA节

### 5.2 XML解析技术DOM4j

#### 5.2.1 XML解析技术原理

（1）不管是html文件还是xml文件，它们都是标记型文档，都可以使用w3c组织制定的dom技术来解析

（2）document对象表示的是整个文档（可以是html文档，也可以是xml文档）

#### 5.2.2 XML DOM

##### 5.2.2.1 DOM4j中，获得Document对象的三种方式

（1）读取xml文件，获得document对象（使用这个）

```xml
SAXReader reader = new SAXReader(); //创建一个解析器
Document document = reader.read(new File("src/input.xml")); //XML Document
```

（2）解析XML形式的文本，得到document对象

```xml
String text = "<members></members>";
Document document = DocumentHelper.parseText(text);
```

（3）主动创建document对象

```xml
Document document = DocumentHelper.createDocument(); //创建根节点
Element root = document.addElement("members");
```

##### 5.2.2.2 DOM4j应用

使用DOM4j对students.xml文件进行增删改查

查：

```xml
<?xml version="1.0" encoding="utf-8"?>
<students>
    <student id="01">
        <name>小龙女</name>
        <gender>女</gender>
        <age>16</age>
        <resume>古墓派掌门人</resume>
    </student>
    <student id="02">
        <name>欧阳锋</name>
        <gender>男</gender>
        <age>18</age>
        <resume>白驼山,蛤蟆神功</resume>
    </student>
</students>
```

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222041523.png)

```java
public class Dom4j_ {
    /**
     * 演示如何加载xml文件
     * */
    @Test
    public void loadXML() throws DocumentException {
        //得到一个解析器
        SAXReader reader = new SAXReader();

        //得到document对象
        //debug看document对象的属性，分析document对象的底层结构
        Document document = reader.read(new File("./src/students.xml"));
        System.out.println(document);
    }

    /**
     * 演示遍历所有的student信息
     * */
    @Test
    public void listStus() throws DocumentException {
        //得到一个解析器
        SAXReader reader = new SAXReader();

        //得到document对象
        //debug看document对象的属性，分析document对象的底层结构
        Document document = reader.read(new File("./src/students.xml"));

        //1. 得到rootElement
        Element rootElement = document.getRootElement();
        //2. 得到rootElement的student元素
        List<Element> students = rootElement.elements("student");
        //3. 遍历每个student元素节点
        for (Element student : students) {
            //获取student元素的name元素节点
            Element name = student.element("name");
            //获取student元素的age元素节点
            Element age = student.element("age");
            //获取student元素的resume元素节点
            Element resume = student.element("resume");
            //获取student元素的gender元素节点
            Element gender = student.element("gender");
            System.out.println("学生信息= " + name.getText() + " " + age.getText() + " " + resume.getText() + " " + gender.getText());
        }
    }

    /**
     * 指定读取第一个学生信息
     * */
    @Test
    public void readOne() throws DocumentException {
        //得到一个解析器
        SAXReader reader = new SAXReader();

        //得到document对象
        //debug看document对象的属性，分析document对象的底层结构
        Document document = reader.read(new File("./src/students.xml"));

        //1. 得到rootElement
        Element rootElement = document.getRootElement();

        //2. 获取第一个学生
        Element student = (Element) rootElement.elements("student").get(0);

        //3. 输出该信息
        System.out.println("该学生的信息= " + student.element("name").getText() + " " + student.element("age").getText() + " "
            + student.element("resume").getText() + " " + student.element("gender").getText()
        );

        //4. 获取student元素的属性，属性唯一
        System.out.println("id = " + student.attributeValue("id"));

    }
}
```

##### 5.2.2.3 DOM4j练习

根据给出的books.xml，创建对应的Book对象

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<books>
    <book id="1">
        <name>西游记</name>
        <author>吴承恩</author>
        <price>50</price>
    </book>
    <book id="2">
        <name>三国演义</name>
        <author>罗贯中</author>
        <price>100</price>
    </book>
</books>
```

```java
public class Homework {
    /**
     * 读取books.xml里的book元素节点，并创建book类对象
     * */
    @Test
    public void homework() throws DocumentException {
        //得到一个解析器
        SAXReader reader = new SAXReader();

        //得到document对象
        //debug看document对象的属性，分析document对象的底层结构
        Document document = reader.read(new File("./src/books.xml"));

        //1. 得到rootElement
        Element rootElement = document.getRootElement();

        List<Element> books = rootElement.elements("book");
        
        for (Element book : books) {
            Element name = book.element("name");
            Element author = book.element("author");
            Element price = book.element("price");
            String id = book.attributeValue("id");
            Books books1 = new Books();
            books1.setId(Integer.parseInt(id));
            books1.setName(name.getText());
            books1.setAuthor(author.getText());
            books1.setPrice(Double.parseDouble(price.getText()));
            System.out.println("books1对象信息: " + books1);
        }
    }
}

```

```java
public class Books {
    private Integer id;
    private String name;
    private String author;
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Books{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", author='" + author + '\'' +
                ", price=" + price +
                '}';
    }
}
```



## 第6章 Tomcat+Servlet+HTTP协议

### 6.1 Web开发介绍

（1）Web表示网络资源（页面，图片，css，js），它用于表示Web服务器（主机）供浏览器访问的资源

（2）Web服务器（主机）上供外界访问的Web资源分为：

​		1）静态Web资源（如html页面）：指Web页面中供人们浏览的数据始终是不变的，静态Web资源开发技术有html、CSS、js等

​		2）动态Web资源：如Servlet、PHP等，动态Web资源开发技术有Servlet、SpringBoot、SpringMVC、PHP、ASP.NET等

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222041129.png)

### 6.2 自己写简单的Web服务程序

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222041811.png)

```java
/**
 * 自己写一个Web服务(Web服务器)，用于把hello.html里的内容返回给浏览器
 * */

public class MyTomcat {
    public static void main(String[] args) throws IOException {
        //1. 在9999端口监听
        ServerSocket serverSocket = new ServerSocket(9999);

        //如果serverSocket没有关闭，就等待连接，不停的等待
        while (!serverSocket.isClosed()) {
            System.out.println("====我的web服务在9999端口监听====");
            //2. 等待浏览器/客户端连接，得到socket，该socket用于通信
            Socket socket = serverSocket.accept();//浏览器每请求一次就会创建一个socket
            //3. 通过socket得到输出流
            OutputStream outputStream = socket.getOutputStream();
            //返回给浏览器/客户端
            //4. 读取hello.html文件返回即可
            //得到文件输入流，这个是字符输入流
            BufferedReader bufferedReader = new BufferedReader(new FileReader("src/hello.html"));
            String buf = "";
            //循环读取hello.html
            while ((buf = bufferedReader.readLine()) != null) {
                outputStream.write(buf.getBytes());
            }
            outputStream.close();
            socket.close();
        }
        serverSocket.close();
    }
}
```

```html
hello, i am a web server!html, hspedu,hspedu,.....good~
```

### 6.3 cmd看端口监听

在开发中，可以看一下哪些端口在监听：用管理员权限打开cmd输入netstat -ano

### 6.4 浏览器访问web服务器文件UML时序图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222041440.png)

### 6.5 Tomcat

D:\Study\Java\JavaWeb笔记\IDEA2020.2中开发JavaWeb工程

#### 6.5.1 Tomcat目录结构

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222041158.png)

#### 6.5.2 Tomcat服务中部署WEB应用

##### 6.5.2.1 什么是Web应用

（1）Web应用是多个web资源的集合。简单的说，可以把web应用理解为硬盘上的一个目录，这个目录用于管理多个web资源。
（2）Web应用通常也称之为web应用程序，或web工程，通俗的说 就是网站。

##### 6.5.2.2 Web应用组成

​		一个 WEB 应用由多个 WEB 资源或其它文件组成，包括 html 文件、css 文件、js 文件、动态 web 页面、java 程序、支持 jar 包、配置文件等。开发人员在开发 web 应用时，按照规定目录结构存放这些文件。否则，在把 web 应用交给 web 服务器管理时，不仅可能会使web 应用无法访问，还会导致 web 服务器启动报错

##### 6.5.2.3 JavaWeb程序/应用/工程目录结构

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222041849.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222041491.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222041428.png)

### 6.6 Servlet

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222041272.png)

#### 6.6.1 什么是Servlet

（1）Servlet是SpringMVC的基础

（2）Servlet (Java服务器小程序），特点：

​		1）它是由服务器端调用和执行的（简单说，是Tomcat解析和执行）

​		2）它是用Java语言编写的，本质就是Java类

#### 6.6.2 开发Servlet

需求说明：

（1）开发一个 HelloServlet
（2）当浏览器 访问 `http://localhost:8080/web 应用名/helloServlet` 时，后台输出 "hi HelloServelt"

具体步骤：

（1）引入Servlet的jar包
（2）编写类HelloServlet去实现 Servlet 接口
（3）实现 service 方法，处理请求，并响应数据
（4）在 web.xml 中去配置 servlet 程序的访问地址，在web.xml配置HelloServlet，即:给HelloServlet 提供对外访问地址

```java
import javax.servlet.*;
import java.io.IOException;

/**
 * 1.开发一个Servlet需要实现Servlet接口
 * 2.实现Servlet接口的5个方法
 *
 * */
public class HelloServlet implements Servlet {
    /**
     * 1.初始化Servlet
     * 2.当创建HelloServlet实例时，会调用init方法
     * 3.该方法只会被调用一次
     * */
    @Override
    public void init(ServletConfig servletConfig) throws ServletException {
        System.out.println("init()被调用");
    }

    /**
     * 返回ServletConfig,也就是返回Servlet的配置
     * */
    @Override
    public ServletConfig getServletConfig() {
        return null;
    }

    /**
     * 1.service方法处理浏览器的请求(包括get/post)
     * 2.当浏览器每次请求Servlet时，就会调用一次service方法
     * 3.当Tomcat调用该方法时，会把http请求的数据封装成实现了ServletRequest接口的servletRequest对象
     * 4.通过servletRequest对象，可以得到用户提交的数据
     * 5.servletResponse对象可以用于返回数据给Tomcat，Tomcat再传给浏览器
     *
     * */
    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        System.out.println("hi HelloServlet");
    }

    /**
     * 返回servlet信息，使用较少
     * */
    @Override
    public String getServletInfo() {
        return null;
    }

    /**
     * 1.该方法是在servlet销毁时被调用
     * 2.只会调用一次
     * */
    @Override
    public void destroy() {

    }
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <!--在web.xml配置HelloServlet，即:给HelloServlet 提供对外访问地址-->
    <!--web.xml主要用来配置该Web应用使用到的Servlet-->
    <!--配置HelloServlet-->
    <!--
        1.servlet-name:给Servlet取名，该名字唯一
        2.servlet-class:Servlet的类的全路径:Tomcat在反射生成该Servlet需要使用
        3.url-pattern:这个就是该servlet访问的url的配置(路径)
        4.这时我们应该这样访问servlet http://localhost:8080/servlet/helloServlet,这样就能找到HelloServlet这个Java类并运行
        5.load-on-startup表示在Tomcat启动时，会自动的加载Servlet实例
    -->
    <servlet>
        <servlet-name>HelloServlet</servlet-name>
        <servlet-class>com.hspedu.servlet.HelloServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>HelloServlet</servlet-name>
        <url-pattern>/helloServlet</url-pattern>
    </servlet-mapping>
</web-app>
```

​		注意：url-pattern:这个就是该servlet访问的url的配置(路径)，这时我们应该这样访问servlet，在浏览器输入 `http://localhost:8080/servlet/helloServlet`,这样就能找到HelloServlet这个Java类并运行

#### 6.6.3 浏览器调用Servlet流程分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222041110.png)

#### 6.6.4 Servlet生命周期

##### 6.6.4.1 主要的三个方法

（1）init()初始化阶段

（2）service()处理浏览器请求阶段

（3）destroy()终止阶段

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222041234.png)

##### 6.6.4.2 Servlet生命周期的阶段

###### 6.6.4.2.1 初始化阶段（init方法）

​		Servlet容器（比如Tomcat）装载Servlet（装载Servlet就是Tomcat把Servlet对象实例在浏览器还没有发送请求前(启动Tomcat时，自动加载Servlet实例)就已经装到HashMap中，这样就可以在Tomcat维护的HashMap里找到Servlet实例），装载完成后，Servlet容器会创建一个Servlet实例并调用init()方法，init()方法只会调用一次，Servlet容器会在以下情况装载Servlet：

（1）Servlet容器（Tomcat）启动时自动装载某些Servlet，实现这个需要在web.xml文件中添加 `<load-on-startup>1</load-on-startup>`，其中1表示装载的顺序，默认情况下不写 `<load-on-startup>1</load-on-startup>`是不会进行装载的，只有在浏览器请求时才会装载，即刚开始Tomcat的HashMap里没有Servlet实例，是浏览器发出请求后经过一系列查找才把Servlet实例加入到HashMap；写上后在Tomcat启动时，Tomcat会自动加载Servlet实例

```xml
5.load-on-startup表示在Tomcat启动时，会自动的加载Servlet实例
    -->
    <servlet>
        <servlet-name>HelloServlet</servlet-name>
        <servlet-class>com.hspedu.servlet.HelloServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>HelloServlet</servlet-name>
        <url-pattern>/helloServlet</url-pattern>
    </servlet-mapping>
```

（2）在Servlet容器（Tomcat）启动后，浏览器首次向Servlet发送请求，即默认情况下不写 `<load-on-startup>1</load-on-startup>` 时，只有在浏览器第一次发送请求时才会进行装载

（3）Servlet重新装载时（比如Tomcat进行redeploy[redeploy会销毁所有的Servlet实例]），浏览器再向Servlet发送请求的第一次

###### 6.6.4.2.2 处理浏览器请求阶段（service方法）

（1）每收到一个http请求，服务器就会产生一个新的线程去处理

（2）创建一个用于封装HTTP请求消息的ServletRequest对象和一个代表HTTP响应消息的ServletResponse对象

（3）然后调用Servlet的service方法并将请求和响应对象作为参数传递进去

###### 6.6.4.2.3 终止阶段（destory方法）

​		当web应用被终止，或者Servlet容器终止运行，或者Servlet类重新装载时，会调用destroy方法，比如重启Tomcat或者redeploy web应用

#### 6.6.5 get和post分发处理

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>注册</title>
</head>
<body>
<h1>注册用户</h1>
    <form action="http://localhost:8080/servlet/helloServlet" method="get">
    u: <input type="text" name="username"/><br><br>
    <input type="submit" value="注册用户"/>
</form>
</body>
</html>
```

```java
/**
 * 1.开发一个Servlet需要实现Servlet接口
 * 2.实现Servlet接口的5个方法
 *
 * */
public class HelloServlet implements Servlet {
    /**
     * 1.初始化Servlet
     * 2.当创建HelloServlet实例时，会调用init方法
     * 3.该方法只会被调用一次
     * */
    @Override
    public void init(ServletConfig servletConfig) throws ServletException {
        System.out.println("init()被调用");
    }

    /**
     * 返回ServletConfig,也就是返回Servlet的配置
     * */
    @Override
    public ServletConfig getServletConfig() {
        return null;
    }

    /**
     * 1.service方法处理浏览器的请求(包括get/post)
     * 2.当浏览器每次请求Servlet时，就会调用一次service方法
     * 3.当Tomcat调用该方法时，会把http请求的数据封装成实现了ServletRequest接口的servletRequest对象
     * 4.通过servletRequest对象，可以得到用户提交的数据
     * 5.servletResponse对象可以用于返回数据给Tomcat，Tomcat再传给浏览器
     *
     * */
    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        System.out.println("hi HelloServlet");
        //Tomcat每处理一次http请求，就生成一个新的线程
        System.out.println("当前线程id= " + Thread.currentThread().getId());

        //思考:怎么从servletRequest对象中来获取到请求方式的信息
        //1. 在ServletRequest中没有找到可以得到请求方式的方法
        //2. 看看ServletRequest的子接口有没有相关的方法
        //3. 查看ServletRequest的子接口的快捷键 ctrl+alt+b,可以看到接口的子接口和实现子类
        //4. 把servletRequest转成其子类HttpServletRequest的引用，即向下转型，可以使用其子类特有的方法
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        String method = httpServletRequest.getMethod();
        if("GET".equals(method)) {
            doGet(); //用doGet() 处理GET请求
        } else if ("POST".equals(method)) {
            doPost(); //用doPost() 处理POST请求
        }
    }

    /**
     * 用于响应get请求的
     * */
    public void doGet() {
        System.out.println("doGet() 被调用");
    }

    /**
     * 用于响应post请求的
     * */
    public void doPost() {
        System.out.println("doPost() 被调用");
    }

    /**
     * 返回servlet信息，使用较少
     * */
    @Override
    public String getServletInfo() {
        return null;
    }

    /**
     * 1.该方法是在servlet销毁时被调用
     * 2.只会调用一次
     * */
    @Override
    public void destroy() {

    }
}
```

​		浏览器中输入：`http://localhost:8080/servlet/register.html`网址访问到相应目录下的register.html的前端页面，在输入框中输入数据后，点击提交按钮后，因为表单中的`action="http://localhost:8080/servlet/helloServlet"`，所以浏览器向action对应的地址发出请求，然后就会按照前几节的内容进行。

#### 6.6.6 通过继承HttpServlet开发Servlet

##### 6.6.6.1 HttpServlet介绍

因为通过实现Servlet接口来写Servlet项目会让实现一些没有用的方法，所以我们直接用继承HttpServlet的方式来开发Servlet项目

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222043085.png)

##### 6.6.6.2 HttpServlet入门

需求：

1.通过继承HttpServlet开发一个HiServlet

2.当浏览器访问 `http://localhost:8080/web应用名/hiServlet`时，后台输出"hi HiServlet"

开发步骤：

1.编写一个类去继承HttpServlet类

2.根据业务需要重写doGet或doPost方法

3.到web.xml中配置Servlet程序

```java
public class HiServlet extends HttpServlet {
    //重写HttpServlet的doGet和doPost方法

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("HiServlet doGet()");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("HiServlet doPost()");
    }
}
```

```xml
<!-- 配置HiServlet -->
    <servlet>
        <servlet-name>HiServlet</servlet-name>
        <servlet-class>com.hspedu.servlet.HiServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>HiServlet</servlet-name>
        <url-pattern>/hiServlet</url-pattern>
    </servlet-mapping>
```

当有两个Servlet的对象实例时，访问哪一个取决于你在网址栏输入的url-pattern是哪一个，当要访问HiServlet时，网址输入`http://localhost:8080/servlet/hiServlet`

#### 6.6.7 Servlet注解

##### 6.6.7.1 快速入门

需求：

（1）编写类OkServlet去继承HttpServlet

（2）注解方式配置OkServlet，一个Servlet支持配置多个url-pattern

```java
/**
 * 使用注解方式配置web.xml
 * */

/*
* 1. @WebServlet是一个注解
* 2. urlPatterns 对应 web.xml的 <url-pattern></url-pattern>
* 3. {"/ok1", "/ok2"}可以给OkServlet配置多个 url-pattern
* 4. 相当于这个@WebServlet(urlPatterns = {"/ok1", "/ok2"})代替了web.xml的配置
* 5. 浏览器可以这样访问OkServlet，可以 http://localhost:8080/servlet/ok1
*    或者 http://localhost:8080/servlet/ok2
* 
* */
@WebServlet(urlPatterns = {"/ok1", "/ok2"})
public class OkServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("注解方式 OkServlet doGet");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("注解方式 OkServlet doPost");
    }
}
```

注意：

（1）@WebServlet是一个注解

（2）urlPatterns 对应 web.xml的 `<url-pattern> </url-pattern>`

（3）{"/ok1", "/ok2"}可以给OkServlet配置多个 url-pattern

（4）相当于这个@WebServlet(urlPatterns = {"/ok1", "/ok2"})代替了web.xml的配置

（5）浏览器可以这样访问OkServlet，可以`http://localhost:8080/servlet/ok1`或者` http://localhost:8080/servlet/ok2` 

##### 6.6.7.2 Servlet注解URL四种匹配方式

###### 6.6.7.2.1 精确匹配

###### 6.6.7.2.2 目录匹配

###### 6.6.7.2.3 扩展名匹配

###### 6.6.7.2.4 任意匹配

###### 6.6.7.2.5 注意事项和使用细节

​		当把Servlet的URL配置成`/`，这样会覆盖Tomcat默认的Servlet，默认的Servlet的作用就是当其他的url-pattern都匹配不上时，都会走这个默认的Servlet，这样就可以处理到静态资源，比如在网址中输入一个html的静态地址，则就会返回html页面，但是当把URL配置成`/`，再输入html的静态地址则不会显示html的静态页面，而是直接调用配置成`/`的Servlet的对象实例。

#### 6.6.8 Servlet课后作业

作业一：使用 idea 开发一个 CatServlet ，要求完成：

(1) 通过实现 Servlet 接口开发该 Servlet
(2) 要求访问 url 为 `http://localhost:8080/servlet/cat`
(3) 在 Servlet 的 service 方法 ，可以输出 该 servlet 访问次数，并输出访问是get还是post
(4) 在 web.xml 配置, 编写一个 login.html , 有登录表单, 完成测试

作业二：使用 idea 开发一个 DogServlet ,要求完成 梳理思路

(1) 通过继承 HttpServlet 开发该 Servlet
(2) 要求访问 url 为 `http://localhost:8080/servlet/dog`
(3) 当访问时，分别输出 get 和 post 访问的次数(即分开统计)
(4) 在 web.xml 配置, 使用前面的 login.html, 完成测试

作业三：使用 idea 开发一个 PigServlet ,要求完成

(1) 通过继承 HttpServlett 开发该 Servlet
(2) 要求访问 url 为 `http://localhost:8080/servlet/pig1 或者 /pig2`
(3) 当访问时，分别输出 get 和 post 访问的次数(即分开统计) , 并输出浏览器/客户端的 ip
(4) 通过注解配置, 使用前面的 login.html, 完成测试
(5) 要求 PigServlet, 在 Tomcat 启动时，就自动加载

```java
@WebServlet(urlPatterns = {"/pig1","/pig2"}, loadOnStartup = 1)
public class PigServlet extends HttpServlet {
    int doGetCount = 1;
    int doPostCount = 1;

    @Override
    public void init(ServletConfig config) throws ServletException {
        System.out.println("初始化");
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Get请求访问次数 = " + doGetCount++);
        String remoteAddr = req.getRemoteAddr();
        System.out.println("ip = " + remoteAddr);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Post请求访问次数 = " + doPostCount++);
        String remoteAddr = req.getRemoteAddr();
        System.out.println("ip = " + remoteAddr);
    }
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录表单</title>
</head>
<body>
    <form action="http://localhost:8080/servlet/pig1" method="get">
        <input type="submit" value="登录"/>
    </form>
</body>
</html>
```

### 6.7 HTTP协议

#### 6.7.1 请求头、响应头、状态码介绍



#### 6.7.2 页面请求次数分析

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Http请求次数问题</title>
</head>
<body>
<h1>图片</h1>
<img src="imgs/1.png" width="300px">
<img src="imgs/2.png">
</body>
</html>
```

​		上面html代码会发出三次请求，第一次请求到test.html文件资源，当浏览器解析到第一个img标签时，发出第二次请求，用来请求第一个img图片资源，当浏览器解析到第二个img标签时，发出第三次请求，用来请求第二个img图片资源，所以总共发出三次请求，当文件里有css、js文件时也需要请求

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222043807.png)

#### 6.7.3 HTTP请求包分析（GET）

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222044262.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222044209.png)

```java
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //服务器端输出
        System.out.println("LoginServlet doGet() 被调用");
        //输出一句话，返回给浏览器
        //1. 通过response 获取流 PrintWriter,可以给浏览器回复数据
        //2. 为了让浏览器显示中文，需要告诉浏览器我们的编码是utf-8
        //(1) response.setContentType("text/html;charset=utf-8")会给回送的数据设置编码
        //(2) text/html这个是MIME类型，即告诉浏览器返回的数据是text类型下的html格式的数据[MIME类型 大类型/小类型]
        //    这样浏览器就会按照html的格式解析你响应的数据
        //(3) charset=utf-8是数据编码
        //(4) 设置编码语句一定要在获取流语句之前
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<h1>登陆成功</h1>");
        //为了确保数据返回，可以把flush()和close()带上,也可以不写
        //flush() 方法表示将缓存的数据进行刷新
        writer.flush();
        //close() 表示关闭流，及时释放资源
        writer.close(); 
    }
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户登录</title>
</head>
<body>
    <h1>用户登录</h1>
    <form action="http://localhost:8080/http/login" method="get">
        u: <input type="text" name="username"/><br/>
        p: <input type="password" name="pwd"/><br/>
        <input type="submit" value="用户登录"> <input type="reset" value="清空">
    </form>
</body>
</html>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <servlet>
        <servlet-name>LoginServlet</servlet-name>
        <servlet-class>com.hspedu.http.LoginServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>LoginServlet</servlet-name>
        <url-pattern>/login</url-pattern>
    </servlet-mapping>
</web-app>
```

#### 6.7.4 HTTP请求包分析（POST）

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222045193.png)

008CBFBC0C4B6C482FE51954C74D2E94 是 url 编码 , 在服务端会自动解码

代码同上，把GET请求改为POST请求

#### 6.7.5 在哪里会用到GET请求或POST请求

##### 6.7.5.1 GET请求

（1）form标签里的method属性设置成GET

（2）a标签的herf地址

（3）link标签引入css [以get方式来获取资源]

（4）Script标签引入js文件 [以get方式来获取资源]

（5）img标签引入图片 [以get请求来获取图片]

（6）iframe引入html页面

（7）在浏览器地址栏中输入地址后敲回车

##### 6.7.5.2 POST请求

（1）form标签里的method属性设置成POST

#### 6.7.6 HTTP响应包分析

![image-20250322204544347](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222045574.png)

#### 6.7.7 常用状态码说明

##### 6.7.7.1 HTTP状态码分类

![image-20250322204605250](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222046393.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222046850.png)

##### 6.7.7.2 302状态码

302状态码表示临时移动，与301类似，但资源只是临时被移动，客户端应继续使用原有URI

需求：

（1）浏览器请求T1Servlet

（2）T1Servlet返回302的状态码，并且指定浏览器重定向到hi.html

（3）浏览器发出第二次请求，用来请求到hi.html

```java
public class T1Servlet extends HttpServlet {
    //这里我们把doGet和doPost合并处理
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //如果有一个请求来，就重定向到hi.html
        //这句代码两个作用:(1) 返回302状态码 (2) 响应头Location:/hi.html
        response.sendRedirect("/http/hi.html");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hi</title>
</head>
<body>
<h1>Hi HTML</h1>
</body>
</html>
```

```xml
<servlet>
        <servlet-name>T1Servlet</servlet-name>
        <servlet-class>com.hspedu.http.servlet.T1Servlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>T1Servlet</servlet-name>
        <url-pattern>/t1</url-pattern>
    </servlet-mapping>
```

##### 6.7.7.3 304状态码

当我们请求资源的时，服务器会返回该资源的最近修改时间：Last-Modified: Mon, 21 Feb 2022 04:51:31 GMT
（1）如果浏览器禁用缓存（就是浏览器不缓存）, 这个 Last-Modified: 信息就没有使用, 浏览器就每次要求返回该资源
（2）如果浏览器没有禁用缓存（就是浏览器有缓存）
			浏览器在请求时，就会有：If-Modified-Since: Mon, 21 Feb 2022 04:51:31 GMT
			含义：
				1）告诉服务器我有该资源

​				2）该资源的最近修改时间是 Mon, 21 Feb 2022 04:51:31GM

​				3）这时服务器就会比较时间，如果服务器的资源更新， 就会返回该资源 , 如果发现没有修改，就返回304 状态码(但是不会返回该资源)

#### 6.7.8 MIME类型

##### 6.7.8.1 MIME介绍

​		MIME是HTTP协议中数据类型，MIME 的英文全称是"Multipurpose Internet Mail Extensions"多功能Internet邮件扩充服务。MIME 类型的格式是"大类型/小类型"，并与某一种文件的扩展名相对应

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222046249.png)

##### 6.7.8.2 常见的MIME类型

![image-20250322204711048](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222047240.png)

### 6.8 ServletConfig

#### 6.8.1 ServletConfig基本介绍

（1）ServletConfig类是为Servlet程序配置信息的类

（2）Servlet程序和ServletConfig对象都是由Tomcat负责创建

（3）Servlet程序默认是第一次访问的时候创建，ServletConfig在Servlet程序创建时，就创建一个对应的ServletConfig对象

（4）一个Servlet对应一个ServletConfig

（5）一个Web项目对应一个ServletContext

#### 6.8.2 ServletConfig类能干什么

（1）获取Servlet程序的servlet-name的值

（2）获取初始化参数init-param

（3）获取ServletContext对象

#### 6.8.3 ServletConfig应用实例

需求：编写DBServlet.java完成如下功能：

（1）在web.xml配置用来连接数据库的用户名和密码

（2）在DBServlet执行doGet()/doPost()时，可以获取到web.xml配置的用户名和密码

![image-20250322204730645](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222047852.png)

```java
public class DBServlet extends HttpServlet {

    /**
     * 梳理ServletConfig config 使用流程
     * (1) 当DBServlet对象初始化时，Tomcat会同时创建一个ServletConfig对象
     * (2) 这时如果DBServlet init() 方法中你调用 super.init(config);
     * (3) 调用 父类 GenericServlet
     * private transient ServletConfig config;
     * public void init(ServletConfig config) throws ServletException {
     *         this.config = config;
     *         this.init();
     *     }
     * 总结：当想在DBServlet类中的doPost方法或者doGet方法中调用其父类HttpServlet的父类GenericServlet里的getServletConfig()方法时，
     * 就必须在init方法中调用super.init(config)用来先初始化GenericServlet里的config属性，
     * 因为GenericServlet里的getServletConfig()方法返回的对象就是这个config对象，两者是同一个对象，如果init方法里不调用super.init(config)
     * 那么config对象就是空，那这样getServletConfig()方法返回的对象就是null
     * 默认的init方法里是有super.init(config)的，所以就不用管
     * */
    @Override
    public void init(ServletConfig config) throws ServletException {
        System.out.println("init" + config);
        super.init(config);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //在DBServlet执行doGet()/doPost()时，可以获取到web.xml配置的用户名和密码
        //DBServlet的父类GenericServlet有getServletConfig()方法
        /**
         * (1) getServletConfig()方法是 GenericServlet对象的
         * (2) 返回的 servletConfig对象是 GenericServlet里的private transient ServletConfig config;
         * (3) 当一个属性被 transient 修饰，表示该属性不会被串行化(有些重要信息，不希望保存到文件，只希望保存到内存)
         * */
        ServletConfig servletConfig = getServletConfig();
        String username = servletConfig.getInitParameter("username");
        String pwd = servletConfig.getInitParameter("pwd");
        System.out.println("初始化参数username = " + username);
        System.out.println("初始化参数pwd = " + pwd);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
```

```xml
<servlet>
        <servlet-name>DBServlet</servlet-name>
        <servlet-class>com.hspedu.servlet.DBServlet</servlet-class>
        <!--配置信息，而不是硬编码到程序-->
        <init-param>
            <param-name>username</param-name>
            <param-value>root</param-value>
        </init-param>
        <init-param>
            <param-name>pwd</param-name>
            <param-value>123456</param-value>
        </init-param>
    </servlet>
    <servlet-mapping>
        <servlet-name>DBServlet</servlet-name>
        <url-pattern>/db</url-pattern>
    </servlet-mapping>
```

### 6.9 ServletContext

#### 6.9.1 为什么需要ServletContext

需求：如果我们希望统计某个web应用的所有Servlet被访问的次数该怎么办？

方案一：用数据库存储次数

![image-20250322204757775](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222047925.png)

方案二：ServletContext

![image-20250322204820675](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222048858.png)

#### 6.9.2 ServletContext基本介绍

（1）ServletContext是一个接口，它表示Servlet上下文对象

（2）一个web工程，只有一个ServletContext对象实例

（3）ServletContext对象是在web工程启动时创建，在web工程停止时销毁

（4）ServletContext对象可以通过ServletConfig.getServletContext方法获得对ServletContext对象的引用，也可以通过this.getServletContext()来获得其对象的引用

（5）由于一个Web应用中的所有Servlet共享同一个ServletContext对象，因此Servlet对象之间可以通过ServletContext对象来实现多个Servlet间通讯。ServletContext对象通常也被称为域对象。

![image-20250322204837463](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222048666.png)

#### 6.9.3 ServletContext可以做什么

（1）获取 web.xml 中配置的上下文参数 context-param [信息和整个 web 应用相关，而不是属于某个 Servlet]

（2）获取当前的工程路径，格式: /工程路径 =》 比如 /servlet

（3）获取工程部署后在服务器硬盘上的绝对路径（D:\hspedu_javaweb\servlet\out\artifacts\servlet_war_exploded）

（4）像Map一样存取数据, 多个 Servlet 共享数据

#### 6.9.4 ServletContext应用实例

需求：

（1）获取web.xml中配置的上下文参数context-param

（2）获取当前的工程路径，格式：/工程路径

（3）获取工程部署后在服务器硬盘上的绝对路径

```java
public class ServletContext_ extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //获取web.xml的context-parameter
        //1. 获取到ServletContext对象
        ServletContext servletContext = getServletContext();
        //2. 获取website和company
        String website = servletContext.getInitParameter("website");
        String company = servletContext.getInitParameter("company");
        //3. 获取项目的工程路径
        String contextPath = servletContext.getContextPath();
        //4. 获取项目发布后，真正的工作路径
        //  /表示我们的项目发布后的根路径即: D:\Study\Code\IDEA\JavaWeb\hsp\servlet\out\artifacts\servlet_war_exploded\
        String realPath = servletContext.getRealPath("/");

        System.out.println("website= " + website);//website= http://www.hanshunping.net
        System.out.println("company= " + company);//company= 韩顺平教育
        System.out.println("contextPath= " + contextPath); //  /servlet
        System.out.println("项目发布后的绝对路径realPath= " + realPath);

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
```

```xml
</servlet-mapping>
    <servlet>
        <servlet-name>ServletContext_</servlet-name>
        <servlet-class>com.hspedu.servlet.servletcontext.ServletContext_</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>ServletContext_</servlet-name>
        <url-pattern>/servletContext_</url-pattern>
    </servlet-mapping>
    <!--配置整个网站的信息-->
    <context-param>
        <param-name>website</param-name>
        <param-value>http://www.hanshunping.net</param-value>
    </context-param>
    <context-param>
        <param-name>company</param-name>
        <param-value>韩顺平教育</param-value>
    </context-param>
```

需求：网站计数器

（1）使用Chrome访问Servlet01，每访问一次，就增加一次访问次数，在后台输出，并将结果返回给浏览器显示

（2）使用Edge访问Servlet02，每访问一次，就增加一次访问次数，在后台输出，并将结果返回给浏览器显示

```java
public class PayServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //获取到ServletContext对象
        ServletContext servletContext = getServletContext();
        System.out.println("PayServlet servletContext= " + servletContext +
                " 运行类型= " + servletContext.getClass());
        //从servletContext获取 visit_count,ServletContext对象类似HashMap，即是k-v操作
        Object visit_count = servletContext.getAttribute("visit_count");
        //判断visit_count是否为null，即是不是第一次访问
        if(visit_count == null) { //第一次访问
            servletContext.setAttribute("visit_count", 1);
            visit_count = 1;
        } else { //第二次访问即以后
            //取出visit_count属性的值，然后加1
            visit_count = Integer.parseInt(visit_count + "") + 1;
            //放回到servletContext
            servletContext.setAttribute("visit_count", visit_count);
        }

        //输出显示
        response.setContentType("text/html;charset=utf-8");;
        PrintWriter writer = response.getWriter();
        writer.print("<h1>网站被访问的次数是" + visit_count + "</h1>");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

```java
public class OrderServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //获取到ServletContext对象
        ServletContext servletContext = getServletContext();
        System.out.println("OrderServlet servletContext= " + servletContext +
                " 运行类型= " + servletContext.getClass());
        //从servletContext获取 visit_count,ServletContext对象类似HashMap，即是k-v操作
        Object visit_count = servletContext.getAttribute("visit_count");
        //判断visit_count是否为null，即是不是第一次访问
        if(visit_count == null) { //第一次访问
            servletContext.setAttribute("visit_count", 1);
            visit_count = 1;
        } else { //第二次访问即以后
            //取出visit_count属性的值，然后加1
            visit_count = Integer.parseInt(visit_count + "") + 1;
            //放回到servletContext
            servletContext.setAttribute("visit_count", visit_count);
        }

        //输出显示
        response.setContentType("text/html;charset=utf-8");;
        PrintWriter writer = response.getWriter();
        writer.print("<h1>网站被访问的次数是" + visit_count + "</h1>");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
```

```java
<servlet>
        <servlet-name>OrderServlet</servlet-name>
        <servlet-class>com.hspedu.servlet.servletcontext.OrderServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>OrderServlet</servlet-name>
        <url-pattern>/orderServlet</url-pattern>
    </servlet-mapping>
    <servlet>
        <servlet-name>PayServlet</servlet-name>
        <servlet-class>com.hspedu.servlet.servletcontext.PayServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>PayServlet</servlet-name>
        <url-pattern>/payServlet</url-pattern>
    </servlet-mapping>
```

代码优化，把两个Java代码里的相同代码封装成WebCountUtils类

```java
public class PayServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //获取到ServletContext对象
        ServletContext servletContext = getServletContext();
        System.out.println("PayServlet servletContext= " + servletContext +
                " 运行类型= " + servletContext.getClass());
//        //从servletContext获取 visit_count,ServletContext对象类似HashMap，即是k-v操作
//        Object visit_count = servletContext.getAttribute("visit_count");
//        //判断visit_count是否为null，即是不是第一次访问
//        if(visit_count == null) { //第一次访问
//            servletContext.setAttribute("visit_count", 1);
//            visit_count = 1;
//        } else { //第二次访问即以后
//            //取出visit_count属性的值，然后加1
//            visit_count = Integer.parseInt(visit_count + "") + 1;
//            //放回到servletContext
//            servletContext.setAttribute("visit_count", visit_count);
//        }
        Integer visit_count = WebCountUtils.visitCount(servletContext);

        //输出显示
        response.setContentType("text/html;charset=utf-8");;
        PrintWriter writer = response.getWriter();
        writer.print("<h1>网站被访问的次数是" + visit_count + "</h1>");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

```java
public class OrderServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //获取到ServletContext对象
        ServletContext servletContext = getServletContext();
        System.out.println("OrderServlet servletContext= " + servletContext +
                " 运行类型= " + servletContext.getClass());
//        //从servletContext获取 visit_count,ServletContext对象类似HashMap，即是k-v操作
//        Object visit_count = servletContext.getAttribute("visit_count");
//        //判断visit_count是否为null，即是不是第一次访问
//        if(visit_count == null) { //第一次访问
//            servletContext.setAttribute("visit_count", 1);
//            visit_count = 1;
//        } else { //第二次访问即以后
//            //取出visit_count属性的值，然后加1
//            visit_count = Integer.parseInt(visit_count + "") + 1;
//            //放回到servletContext
//            servletContext.setAttribute("visit_count", visit_count);
//        }
        Integer visit_count = WebCountUtils.visitCount(servletContext);

        //输出显示
        response.setContentType("text/html;charset=utf-8");;
        PrintWriter writer = response.getWriter();
        writer.print("<h1>网站被访问的次数是" + visit_count + "</h1>");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
```

```java
public class WebCountUtils {
    public static Integer visitCount(ServletContext servletContext) {
        //从servletContext获取 visit_count,ServletContext对象类似HashMap，即是k-v操作
        Object visit_count = servletContext.getAttribute("visit_count");
        //判断visit_count是否为null，即是不是第一次访问
        if(visit_count == null) { //第一次访问
            servletContext.setAttribute("visit_count", 1);
            visit_count = 1;
        } else { //第二次访问即以后
            //取出visit_count属性的值，然后加1
            visit_count = Integer.parseInt(visit_count + "") + 1;
            //放回到servletContext
            servletContext.setAttribute("visit_count", visit_count);
        }
        return Integer.parseInt(visit_count + "");
    }
}
```

### 6.10 HttpServletRequest

#### 6.10.1 HttpServletRequest介绍

（1）HttpServletRequest对象代表客户端的请求

（2）当客户端/浏览器通过HTTP协议访问服务器时，HTTP请求头中的所有信息都封装在这个对象中

（3）通过这个对象的方法，可以获得客户端/浏览器请求的信息

#### 6.10.2 HttpServletRequest常用方法

（1）getRequestURI() 获取请求的资源路径 比如：获取到`http://localhost:8080/servlet/loginServlet`里的 `/servlet/loginServlet`

（2）getRequestURL() 获取请求的统一资源定位符（绝对路径）比如：`http://localhost:8080/servlet/loginServlet`

（3）getRemoteHost() 获取客户端的主机

（4）getHeader() 获取请求头

（5）getParameter() 获取请求参数的信息

（6）getParameterValues() 获取请求参数的信息（多个值的时候使用），比如checkbox，返回的是数组

（7）getMethod() 获取请求的方式GET或POST

（8）setAttribute(key,value) 设置域数据

（9）getAttribute(key) 获取域数据

（10）getRequestDispatcher() 获取请求转发对象，请求转发的核心对象

#### 6.10.3 HttpServletRequest应用实例

需求：在一个表单里提交数据给Servlet，然后在Servlet通过HttpServletRequest对象获取相关数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>注册</title>
</head>
<body>
<h1>注册用户</h1>
<form action="http://localhost:8080/servlet/requestMethods" method="post">
    u: <input type="text" name="username"/><br><br>
    p: <input type="password" name="pwd"/><br><br>
    选择你喜欢的老师:
    <input type="checkbox" name="hobby" value="hsp">韩顺平
    <input type="checkbox" name="hobby" value="lh">老韩
    <input type="checkbox" name="hobby" value="spls">顺平老师<br/><br/>
    <input type="submit" value="注册用户"/>
</form>
</body>
</html>
```

```xml
<servlet>
        <servlet-name>HttpServletRequestMethods</servlet-name>
        <servlet-class>com.hspedu.servlet.request.HttpServletRequestMethods</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>HttpServletRequestMethods</servlet-name>
        <url-pattern>/requestMethods</url-pattern>
    </servlet-mapping>
```

```java
public class HttpServletRequestMethods extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //这里我们使用request对象获取表单提交的各种数据
        System.out.println("HttpServletRequestMethods doPost() 被调用...");

        /**
         * 获取Http请求头的相关信息
         * */
        System.out.println("请求的资源路径URI= " + request.getRequestURI());

        System.out.println("请求的统一资源定位符(绝对路径)URL= " + request.getRequestURL());

        System.out.println("请求的客户端ip地址= " + request.getRemoteAddr()); //本地就是127.0.0.1

        //获取http请求方式
        System.out.println("http请求方式=" + request.getMethod());

        //想要获取其它http请求头的信息，可以使用 request.getHeader("请求头字段") 方法来在 请求头字段 里指定它，比如 User-Agent,Host等，就是操作键值对
        System.out.println("http请求头HOST= " + request.getHeader("Host"));

        System.out.println("该请求的发起地址是= " + request.getHeader("Referer"));

        //获取访问网站的浏览器是什么
        String userAgent = request.getHeader("User-Agent");
        System.out.println("User-Agent= " + userAgent);
        //在userAgent里取出浏览器名字,用字符串分割
        String[] s = userAgent.split(" ");
        System.out.println("浏览器= " + s[s.length - 1].split("\\/")[0]);

        /**
         * 获取请求参数相关的信息，注意要求在返回数据前，获取参数
         * 即获取到 username=tom&pwd=123456&hobby=hsp&hobby=lh 这里面的参数信息
         * */
        //首先解决接收参数的中文乱码问题
        request.setCharacterEncoding("utf-8");

        //获取表单的单个数据
        String username = request.getParameter("username");
        String pwd = request.getParameter("pwd");

        //获取表单的一组数据
        String[] hobbies = request.getParameterValues("hobby");

        //输出
        System.out.println("username= " + username);
        System.out.println("pwd= " + pwd);
        //用增强for循环来遍历数组 增强for循环快捷键是 iter
        for (String hobby : hobbies) {
            System.out.println("hobby= " + hobby);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

#### 6.10.4 解决获取或响应参数信息时中文乱码问题

（1）获取请求参数信息前解决中文乱码问题，在request.getParameter()前加上request.setCharacterEncoding("utf-8")

（2）响应参数信息前解决中文乱码问题，在response.getWriter()前加上response.setContentType("text/html;charset=utf-8")

#### 6.10.5 请求转发

##### 6.10.5.1 为什么需要请求转发

（1）目前我们学习的都是一次请求对应一个Servlet

![image-20250322204902175](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222049287.png)

（2）但是在实际开发中，往往业务比较复杂，需要在一次请求中使用到多个Servlet完成一个任务

![image-20250322204917195](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222049307.png)

##### 6.10.5.2 请求转发说明

（1）实现请求转发：请求转发指一个web资源收到客户端请求后，通知服务器去调用另外一个web资源进行处理

（2）HttpServletRequest对象（也叫Request对象）提供了一个getRequestDispatcher方法，该方法返回一个RequestDispatcher对象，调用这个对象的forward方法可以实现请求转发

（3）request对象同时也是一个域对象，开发人员通过request对象在实现转发时，把数据通过request对象带给其它web资源处理，即在Servlet01里给request对象赋了一个值，那么在Servlet02里request也是那个值，为什么会相同，因为这两个request对象是同一个request对象，同一个request域对象就可以使用以下方法设置共享的K-V值。

​		setAttribute方法

​		getAttribute方法

​		removeAttribute方法

​		getAttributeNames方法

##### 6.10.5.3 请求转发执行流程

![image-20250322204935725](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222049879.png)

##### 6.10.5.4 请求转发应用实例

​		需求：有两个servlet用来处理不同的业务，CheckServlet用来判断浏览器输入的username是管理员还是普通用户，如果输入的是tom，则是管理员，否则是普通用户，ManageServlet用来把信息回显到浏览器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录表单</title>
</head>
<body>
    <form action="http://localhost:8080/servlet/checkServlet" method="get">
        <input type="text" name="username">
        <input type="submit" value="登录"/>
    </form>
</body>
</html>
```

```xml
<servlet>
        <servlet-name>CheckServlet</servlet-name>
        <servlet-class>com.hspedu.servlet.request.CheckServlet</servlet-class>
    </servlet>
    
    <servlet-mapping>
        <servlet-name>CheckServlet</servlet-name>
        <url-pattern>/checkServlet</url-pattern>
    </servlet-mapping>
    <servlet>
        <servlet-name>ManageServlet</servlet-name>
        <servlet-class>com.hspedu.servlet.request.ManageServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>ManageServlet</servlet-name>
        <url-pattern>/manageServlet</url-pattern>
    </servlet-mapping>
```

```java
public class CheckServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("CheckServlet被调用");
        //根据用户名来确定该用户是什么身份
        String username = request.getParameter("username");
        if ("tom".equals(username)) {
            //分配
            request.setAttribute("role", "管理员");
        } else {
            request.setAttribute("role", "普通用户");
        }

        //获取分发器
        //1. /manageServlet写的是要转发的Servlet的url
        //2. / 会被解析成 /servlet
        //3. requestDispatcher.forward(request, response) 表示把当前servlet的request对象和response对象传递给下一个servlet的request对象和response对象
        RequestDispatcher requestDispatcher = request.getRequestDispatcher("/manageServlet");
        requestDispatcher.forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

```java
public class ManageServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("ManageServlet被调用");

        String username = request.getParameter("username");
        String role = (String) request.getAttribute("role");

        //给浏览器回显
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("用户名: " + username + "<br/>");
        writer.print("角色: " + role);
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

##### 6.10.5.5 请求转发注意事项和细节

（1）浏览器地址不会变化，即请求转发发生在服务端，与浏览器没有关系（地址会保留在第一个Servlet的url）

（2）在同一次HTTP请求中，进行多次转发，仍然是一次HTTP请求

（3）在同一次HTTP请求中，进行多次转发，多个Servlet可以共享request域/对象的数据（因为始终是同一个request对象）

（4）可以转发到WEB-INF目录下

（5）不能访问当前WEB工程外的资源

（6）因为浏览器地址栏会停止在第一个Servlet，如果你刷新页面，会再次发出请求（并且会带数据），所以在支付页面情况下，不要使用请求转发，否则会造成重复支付

##### 6.10.5.6 请求转发作业

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>表单综合案例</title>
</head>
<body>
<form action="http://localhost:8080/servlet/registerServlet" method="post">
    用户注册信息<br/>
    用户名称: <input type="text" name="username"><br/>
    用户密码: <input type="password" name="pwd1"><br/>
    确认密码: <input type="password" name="pwd2"><br/>
    选择你喜欢的运动项目:
    <input type="checkbox" name="sport" value="lq">篮球<br/>
    <input type="checkbox" name="sport" value="zq" checked>足球<br/>
    <input type="checkbox" name="sport" value="sq" checked>手球<br/>
    请选择性别 :
    <input type="radio" name="gender" value="male">男<br/>
    <input type="radio" name="gender" value="female">女<br/>
    请选择城市:
    <select name="city">
        <option>--选择--</option>
        <option value="cd">成都</option>
        <option value="bj">北京</option>
        <option value="sh">上海</option>
    </select><br/>
    自我介绍:
    <textarea name="info" rows="6" cols="20"></textarea><br/>
    选择你的文件(头像)<input type="file" name="myfile"><br/>
    <input type="submit" value="提交"/> <input type="reset" value="重置"/>
</form>
</body>
</html>
```

```java
public class RegisterServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("RegisterServlet被调用");
        request.setCharacterEncoding("utf-8");
        String username = request.getParameter("username");
        String pwd1 = request.getParameter("pwd1");
        String pwd2 = request.getParameter("pwd2");

        //获取checkbox
        String[] sports = request.getParameterValues("sport");
        //对sports处理
        String sportsStr = "";
        for (String sport : sports) {
            sportsStr += sport + " ";
        }
        //获取radio
        String gender = request.getParameter("gender");
        //获取select
        String city = request.getParameter("city");
        //获取textarea
        String info = request.getParameter("info");

        //返回给浏览器，回显
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("username= " + username + "<br/>");
        writer.print("pwd1= " + pwd1 + "<br/>");
        writer.print("pwd2= " + pwd2 + "<br/>");
        writer.print("sports= " + sportsStr + "<br/>");
        writer.print("gender= " + gender + "<br/>");
        writer.print("city= " + city + "<br/>");
        writer.print("info= " + info + "<br/>");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

### 6.11 HttpServletResponse

#### 6.11.1 HttpServletResponse介绍

（1）每次HTTP请求，Tomcat会创建一个HttpServletResponse对象传递给Servlet程序去使用

（2）HttpServletRequest表示请求过来的信息，HttpServletResponse表示所有响应的信息，如果需要设置返回给客户端的信息，通过HttpServletResponse对象来进行设置即可 

#### 6.11.2 给客户端返回数据的方法

（1）字节流：getOutputStream() 常用于下载（处理二进制数据）

（2）字符流：getWriter() 常用于回传字符串

（3）两个流只能同时使用一个，使用了字节流就不能再使用字符流，反之亦然，否则会报错

#### 6.11.3 请求重定向

##### 6.11.3.1 请求重定向介绍

（1）请求重定向是指一个web资源收到客户端请求后，通知客户端去访问另外一个web资源，这称为请求重定向

（2）请求重定向示意图

![image-20250322205000844](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222050036.png)

##### 6.11.3.2 请求重定向应用实例

需求：演示请求重定向的使用，当访问DownServlet下载文件，重定向到DownServletNew下载文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>下载文件</title>
</head>
<body>
<a href="http://localhost:8080/servlet/downServlet">下载天龙八部</a>
</body>
</html>
```

```java
public class DownServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("DownServlet被调用");
        //想要告诉浏览器我响应的是下载一个东西的格式，就要把text/html改成application/x-tar
        //response.setContentType("text/html;charset=utf-8");
//        response.setContentType("application/x-tar;charset=utf-8");
//        PrintWriter writer = response.getWriter();
//        writer.print("hi");
//        writer.flush();
//        writer.close();
        //下面来完成请求重定向
        //DownServlet可以在完成了自己的业务后再请求重定向，也可以没有自己的业务直接请求重定向
        //1. sendRedirect 本质就会返回 302状态码和 Location: /servlet/downServletNew
        //2. 因此 302 和 /servlet/downServletNew 是浏览器解析，而不是服务器
        //3. 浏览器在解析 /servlet/downServletNew 时会解析成: http://localhost:8080/servlet/downServletNew
        response.sendRedirect("/servlet/downServletNew");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

```java
public class DownServletNew extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("DownServletNew被调用");
        //想要告诉浏览器我响应的是下载一个东西的格式，就要把text/html改成application/x-tar
        //response.setContentType("text/html;charset=utf-8");
        response.setContentType("application/x-tar;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("ok");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

##### 6.11.3.3 请求重定向注意事项和细节

（1）最佳应用场景：网站迁移，比如原域名是 `www.hsp.com `迁移到` www.hsp.cn`，但是浏览器抓取的还是原来的网址

（2）浏览器地址会发生改变，本质是两次http请求

（3）不能共享Request域中的数据，本质是两次http请求，会生成两个HttpServletRequest对象，浏览器每请求一次就会开启一个新的线程，就会创建一个新的HttpServletRequest对象

（4）不能重定向到WEB-INF下的资源

（5）可以重定向到WEB工程以外的资源，比如到：`www.baidu.com`

（6）可以用动态获取到的路径 `application context`，即web资源路径，这样改web路径时就不用改代码了

```java
//4. 可以动态获取到 application context
String contextPath = getServletContext().getContextPath();
System.out.println("contextPath= " + contextPath);// /servlet
response.sendRedirect(contextPath + "/downServletNew");
```

##### 6.11.3.4 HttpServletResponse作业布置

需求：

（1）编写一个MyPayServlet，能够接收到提交的数据

（2）编写一个简单的支付页面pay.html

（3）如果支付金额大于100，则重定向到payok.html，否则重定向到原来的pay.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>pay</title>
</head>
<body>
<h1>支付页面</h1> <br/>
<form action="http://localhost:8080/servlet/myPayServlet" method="post">
    用户编号:<input type="text" name="num">
    支付金额:<input type="text" name="pay">
    <input type="submit" value="点击支付">
</form>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>支付成功</title>
</head>
<body>
<h1>恭喜你，支付成功</h1>
</body>
</html>
```

```java
public class MyPayServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("MyPayServlet被调用");
        //如果支付金额大于100，则重定向到payok.html，否则重定向到原来的pay.html
        String pay = request.getParameter("pay");
        String contextPath = getServletContext().getContextPath();
        System.out.println("contextPath= " + contextPath);// /servlet
        int iPay = MyPayUtils.parseString(pay);
        if (iPay > 100) {
            response.sendRedirect(contextPath + "/payok.html");
        } else {
            response.sendRedirect(contextPath + "/pay.html");
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

```java
public class MyPayUtils {
    public static int parseString(String str) {
        int num = 0;
        try {
            num = Integer.parseInt(str);
        } catch (NumberFormatException e) {
            System.out.println("输入的str格式不正确");
        }
        return num;
    }
}
```



## 第7章 实现Tomcat底层机制+自己设计Servlet

### 7.1 Maven

#### 7.1.1 Maven简介

![image-20250322205035544](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222050698.png)

![image-20250322205052008](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222050196.png)

#### 7.1.2 Maven安装配置及IDEA配置Maven项目

见 [Maven仓库安装配置及使用 - DesireYang - 博客园 (cnblogs.com)](https://www.cnblogs.com/desireyang/p/12787480.html)

#### 7.1.3 Maven安装jar包

在pom.xml里配置Maven，安装jar包等

```xml
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <!-- 这里改成1.8-->
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
  </properties>

  <dependencies>
    <!-- 一个 dependency 就是一个jar包-->
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.11</version>
      <scope>test</scope>
    </dependency>

    <!-- 引入servlet.jar,为了开发servlet-->
    <!--
      1. dependency 标签是表示引入一个包
      2. groupId 表示包的公司/组织/开发团队/个人 的信息
      3. artifactId 表示项目名
      4. scope 表示引入的包的作用范围
          provided 表示Tomcat本身就有这个jar包，这里我引入的jar包是我要在我编译和测试时使用，这样程序在打包发布时就不会带上这个jar包，因为Tomcat里有这个jar包，所以就不用再打包一份
    -->
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>javax.servlet-api</artifactId>
      <version>3.1.0</version>
      <scope>provided</scope>
    </dependency>
  </dependencies>
```

#### 7.1.4 Maven下运行servlet程序

![image-20250322205111926](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222051060.png)

Java源程序要放在src下的main里，并且要先在main目录下创建一个目录选Java，前端页面代码放在webapp下

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>计算器</title>
</head>
<body>
<h1>计算器</h1>
<form action="/calServlet" method="get">
    num1:<input type="text" name="num1"><br/>
    num2:<input type="text" name="num2"><br/>
    <input type="submit" value="提交">
</form>
</body>
</html>
```

```java
public class CalServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //将接收到的数据进行计算
        String strnum1 = request.getParameter("num1");
        String strnum2 = request.getParameter("num2");

        //把strNum1 和 strNum2 转成int
        int num1 = WebUtils.parseInt(strnum1, 0);
        int num2 = WebUtils.parseInt(strnum2, 0);

        int result = num1 + num2;

        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<h1>" + num1 + " + " + num2 + " = " + result + "</h1>");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

```java
public class WebUtils {
    /**
     * 将一个字符串数字转成int数字，如果转换失败，就返回传入的原来的字符串数字
     * */
    public static int parseInt(String strNum, int defaultVal) {
        try {
            return Integer.parseInt(strNum);
        } catch (NumberFormatException e) {
            System.out.println(strNum + " 格式不对，转换失败");
        }
        return defaultVal;
    }
}
```

### 7.2 Tomcat整体架构分析

​		说明：Tomcat有三种运行模式（BIO，NIO，APR），因为核心要了解的是Tomcat如何接收客户端请求、解析请求、调用Servlet并返回结果的机制流程，所以这里采用BIO线程模型来模拟

![image-20250322205135318](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222051524.png)

![image-20250322205158334](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222051458.png)

#### 7.2.1 实现第一阶段：Http协议+Socket网络编程+IO流

![image-20250322205220373](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222052584.png)

##### 7.2.1.1 基于Socket开发服务器流程

![image-20250322205235147](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222052409.png)

##### 7.2.1.2 基于Socket开发服务器需求

浏览器请求`http://localhost:8080/??`时服务端返回hi，hspedu

###### 7.2.1.2.1 基于Socket开发服务器-读取到浏览器请求的信息

```java
/**
 * 这是第一个版本的 tomcat ,可以完成，接收浏览器的请求，并返回信息
 * 作用：能在8080端口监听，浏览器每发出一次请求都能创建一个socket对象用来打通浏览器和程序的通道
 		可以通过InputStream输入流对象来获取浏览器发送的请求的数据信息，并且通过手写响应行、响应头、响应体，用				OutputStream输出流对象把文本给传回浏览器，浏览器通过我们规定的格式把文本解析后显示在浏览器
 	缺点：不能处理不同的请求下响应不同的数据，不能很好的获得浏览器请求的信息，不能很好的编写响应的信息
 * */
public class HspTomcatV1 {
    public static void main(String[] args) throws IOException {
        //1. 创建ServerSocket在8080端口监听
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("======myTomcat在8080端口监听=======");
        while(!serverSocket.isClosed()) {
            //等待浏览器/客户端的连接
            //如果有连接来，就创建一个socket
            //这个socket就打通了浏览器和服务端的连接通道
            Socket socket = serverSocket.accept();

            //先接收浏览器发送的数据
            //这个inputStream里就存放了http请求的信息
            InputStream inputStream = socket.getInputStream();
            
            //inputStream是字节流，为了方便要转成字符流 BufferedReader
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "utf-8"));

            String mes = null;
            System.out.println("====接收到浏览器发送的数据====");
            //循环的读取
            while ((mes = bufferedReader.readLine()) != null) {
                //判断mes的长度是否为0
                if (mes.length() == 0) {
                    break;//退出
                }
                System.out.println(mes);
            }
            inputStream.close();
            socket.close();
```

###### 7.2.1.2.2 基于Socket开发服务器-给浏览器发送响应的信息

```java
//tomcat回送-http响应
            OutputStream outputStream = socket.getOutputStream();
            //构建一个http响应的头
            //\r\n表示换行
            //http响应头和响应体之间有一行空行，所以响应头最后有两个\r\n
			//响应头
            String respHeader = "HTTP/1.1 200 OK\r\n" +  //响应行
                    "Content-Type: text/html;charset=utf-8\r\n\r\n";  //响应头

			//响应体
            String resp = respHeader + "hi, hspedu 韩顺平教育";
            System.out.println("====我们的Tomcat给浏览器回送的数据====");
            System.out.println(resp);
			//我们给浏览器回传的内容是,即响应的内容是
			/*
				HTTP/1.1 200 OK
				Content-Type: text/html;charset=utf-8

				hi, hspedu 韩顺平教育
			*/
			//回传后浏览器根据以上内容进行解析，最后按格式显式 hi, hspedu 韩顺平教育
            outputStream.write(resp.getBytes()); //将resp字符串以byte[]方式返回

            outputStream.flush();
            outputStream.close();
```

###### 7.2.1.2.3 总代码

```java
/**
 * 这是第一个版本的 tomcat ,可以完成，接收浏览器的请求，并返回信息
 * */
public class HspTomcatV1 {
    public static void main(String[] args) throws IOException {
        //1. 创建ServerSocket在8080端口监听
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("======myTomcat在8080端口监听=======");
        while(!serverSocket.isClosed()) {
            //等待浏览器/客户端的连接
            //如果有连接来，就创建一个socket
            //这个socket就是浏览器和服务端的连接通道
            Socket socket = serverSocket.accept();

            //先接收浏览器发送的数据
            InputStream inputStream = socket.getInputStream();
            //inputStream是字节流，为了方便要转成字符流 BufferedReader
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "utf-8"));

            String mes = null;
            System.out.println("====接收到浏览器发送的数据====");
            //循环的读取
            while ((mes = bufferedReader.readLine()) != null) {
                //判断mes的长度是否为0
                if (mes.length() == 0) {
                    break;//退出
                }
                System.out.println(mes);
            }

            
            //tomcat回送-http响应
            OutputStream outputStream = socket.getOutputStream();
            //构建一个http响应的头
            //\r\n表示换行
            //http响应头和响应体之间有一行空行，所以响应头最后有两个\r\n
            String respHeader = "HTTP/1.1 200 OK\r\n" +
                    "Content-Type: text/html;charset=utf-8\r\n\r\n";

            String resp = respHeader + "hi, hspedu 韩顺平教育";
            System.out.println("====我们的Tomcat给浏览器回送的数据====");
            System.out.println(resp);
            outputStream.write(resp.getBytes()); //将resp字符串以byte[]方式返回

            outputStream.flush();
            outputStream.close();

            inputStream.close();
            socket.close();
        }
    }
}
```

![image-20250322205256526](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222052787.png)

#### 7.2.2 实现第二阶段：多线程+IO流+xml解析

##### 7.2.2.1 BIO线程模型介绍

![image-20250322205312394](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222053721.png)

##### 7.2.2.2 需求分析

​		浏览器请求 `http://localhost:8080`，服务端返回hi，hspedu，后台hsptomcat使用BIO线程模型，支持多线程，对前面的开发模式进行改造

###### 7.2.2.2.1 完成线程对象的代码

```java
/**
 * 1. HspRequestHandler 对象是一个线程对象，用来和前端进行请求和响应的，从浏览器拿取请求信息、给浏览器返回响应信息
 * 2. 处理一个http请求的
	好处：使得每个请求都放入到了线程里，一次请求对应一个线程
	坏处：不能处理不同的请求下响应不同的数据，但是因为一个请求对应一个线程就为后面想要响应不同的数据做好基础，
 * */
public class HspRequestHandler implements Runnable{

    //定义Socket
    private Socket socket = null;

    public HspRequestHandler(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        //这里我们可以对客户端/浏览器进行IO编程/交互
        try {
            InputStream inputStream = socket.getInputStream();

            //把inputStream转成BufferedReader
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "utf-8"));

            System.out.println("===hsptomcatv2 接收到的数据如下===");
            String mes = null;
            while ((mes = bufferedReader.readLine()) != null) {
                //如果长度为空就退出
                if (mes.length() == 0) {
                    break;
                }
                System.out.println(mes);
            }

            //构建一下http响应头
            String respHeader = "HTTP/1.1 200 OK\r\n" +
                    "Content-Type: text/html;charset=utf-8\r\n\r\n";

            String resp = respHeader + "<h1>hi hspedu 韩顺平教育</h1>";

            System.out.println("===hsptomcatv2 返回的数据是====");
            System.out.println(resp);
            //返回数据给我们的浏览器/客户端，把信息封装成http响应
            OutputStream outputStream = socket.getOutputStream();
            outputStream.write(resp.getBytes());
            outputStream.flush();
            outputStream.close();
            inputStream.close();
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //一定要确保Socket关闭了
            if (socket != null) {
                try {
                    socket.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```

###### 7.2.2.2.2 完成Socket与线程对象的交互

```java
public class HspTomcatV2 {
    public static void main(String[] args) throws IOException {
        /*
        	运行main方法，在8080端口监听，浏览器每次请求一次，就会得到一个socket对象，不同的请求有不同的socket，就有不				同的通道，然后把不同的socket传给HspRequestHandler，最后启动此线程
        */
        //在8080端口监听
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("===hsptomcatV2 在8080监听");
        while (!serverSocket.isClosed()) {
            //1. 接收到浏览器的连接后，如果成功，就会得到socket
            //2. 这个socket就是浏览器和服务器的数据通道
            Socket socket = serverSocket.accept();
            //3. 创建一个线程对象，并且把socket给该线程
            HspRequestHandler hspRequestHandler = new HspRequestHandler(socket);
            //4. 启动线程
            new Thread(hspRequestHandler).start();//调用run方法
        }
    }
}
```

![image-20250322205332711](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222053026.png)

#### 7.2.3 实现第三阶段：反射+线程+Servlet

##### 7.2.3.1 Servlet生命周期回顾

![image-20250322205350776](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222053902.png)

##### 7.2.3.2 需求分析

浏览器请求` http://localhost:8080/hspCalServlet` ，提交数据完成计算任务，如果servlet不存在，返回404

###### 7.2.3.2.1 自己定义servlet规范

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222054795.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222054323.png)

​		所以自己设计的Servlet要有HspServlet接口、HspHttpServlet抽象类、HspCalServlet业务类，因为要把Http请求信息封装成HttpServletRequest对象，把Http响应信息封装成HttpServletResponse对象，所以还要有HttpServletRequest类和HttpServletResponse类，我们这里把这两个类写成HspRequest类和HspResponse类

###### 7.2.3.2.2 完成HttpServletRequest类的简化版HspRequest的编写

​		给一个原生的Servlet代码对照着看，看原生的功能跟自己的对应这个原生的代码和 HspRequestHandler的作用相似，就是从浏览器拿取请求信息、给浏览器返回响应信息，但是具体的代码封装到了HttpServletRequest 和 HttpServletResponse里了，我们下面就是要具体的实现HttpServletRequest 和 HttpServletResponse的代码

```java
public class CalServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //将接收到的数据进行计算
        String strnum1 = request.getParameter("num1");
        String strnum2 = request.getParameter("num2");

        //把strNum1 和 strNum2 转成int
        int num1 = WebUtils.parseInt(strnum1, 0);
        int num2 = WebUtils.parseInt(strnum2, 0);

        int result = num1 + num2;

        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<h1>" + num1 + " + " + num2 + " = " + result + "</h1>");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

​		HspRequest类的作用就是得到Http请求信息（从Socket的inputStream流中获取）后，进行封装和处理，即可以让我们调用HspRequest对象时可以从中取出method、uri、参数列表等的信息。

```java
/*
 1. HspRequest作用是封装http请求的信息
 2. 先只操作第一行的信息即封装操作请求的 method、uri、参数列表,就是别人调用HspRequest.getMethod就能获得内容：get/post
 3. HspRequest作用就等价原生的Servlet里的HttpServletRequest
 4. 这里只考虑get请求
 作用：把之前写在线程里的通过socket的inputStream获取到浏览器请求信息的语句抽离出来并且加写一些方法(比如：getMethod方法、getParameter方法、getURI方法等)用来处理inputStream里的请求信息
 */
public class HspRequest {
    private String method;
    private String uri;
    //存放参数列表，存放形式:参数名-参数值，用HashMap存放
    private HashMap<String, String> parametersMapping = new HashMap<>();

    //构造器
    //因为HspRequest时用来封装处理http请求的，所以要获得http请求
    //而想要获得http请求就需要Socket来打通浏览器和服务器，并且用inputStream来获取http请求信息
    //所以这里的inputStream是与对应的http请求的socket相关联

    public HspRequest(InputStream inputStream) {
        //因为用来封装和处理http请求的代码太多，写在构造器里太乱，所以给它封装到init方法中
        //构造器中调用init方法
        init(inputStream);
    }

    private void init(InputStream inputStream) {
        try {
            //inputStream转成BufferedReader
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "utf-8"));
            //读取第一行
            /*
             GET /hspCalServlet?num1=123&num2=1234 HTTP/1.1
             Host: localhost:8080
             User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
            */
            String requestLine = bufferedReader.readLine(); //requestLine = GET /hspCalServlet?num1=123&num2=1234 HTTP/1.1
            String[] requestLineArr = requestLine.split(" "); //requestLineArr[] = ["GET", "/hspCalServlet?num1=123&num2=1234", "HTTP/1.1"]
            //得到method
            method = requestLineArr[0]; //method = GET
            //解析得到/hspCalServlet
            //1. 先看uri后面有没有带参数列表
            int index = requestLineArr[1].indexOf("?");
            if (index == -1) { //说明没有参数列表
                uri = requestLineArr[1]; //uri = /hspCalServlet
            } else {
                //[0, index) index就是 ? 的位置
                uri = requestLineArr[1].substring(0, index);

                //获取参数列表
                String parameters = requestLineArr[1].substring(index + 1);//就是从?后面全都取出来

                String[] parametersPair = parameters.split("&"); //parametersPair = ["num1=123", "num2=1234"]
                //防止用户提交时只提交 /hspCalServlet?
                if (null != parametersPair && !"".equals(parametersPair)) {
                    //再次分割
                    for (String parameterPair : parametersPair) {
                        String[] parameterVal = parameterPair.split("=");
                        if (parameterVal.length == 2) {
                            //放入到parametersMapping
                            parametersMapping.put(parameterVal[0], parameterVal[1]);
                        }
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //request对象有一个特别重要的方法是getParameter即获取请求参数的信息
    public String getParameter(String name) {//通过键名获取值名
        if (parametersMapping.containsKey(name)) { //如果存在则返回
            return parametersMapping.get(name);
        } else {
            return "";
        }
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    @Override
    public String toString() {
        return "HspRequest{" +
                "method='" + method + '\'' +
                ", uri='" + uri + '\'' +
                ", parametersMapping=" + parametersMapping +
                '}';
    }
}
```

###### 7.2.3.2.3 完成HttpServletResponse类的简化版HspResponse的编写

​		给一个原生的Servlet代码对照着看，看原生的功能跟自己的对应这个原生的代码和 HspRequestHandler的作用相似，就是从浏览器拿取请求信息、给浏览器返回响应信息，但是具体的代码封装到了HttpServletRequest 和 HttpServletResponse里了，我们下面就是要具体的实现HttpServletRequest 和 HttpServletResponse的代码

```java
public class CalServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //将接收到的数据进行计算
        String strnum1 = request.getParameter("num1");
        String strnum2 = request.getParameter("num2");

        //把strNum1 和 strNum2 转成int
        int num1 = WebUtils.parseInt(strnum1, 0);
        int num2 = WebUtils.parseInt(strnum2, 0);

        int result = num1 + num2;

        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<h1>" + num1 + " + " + num2 + " = " + result + "</h1>");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

​		HspResponse类的作用就是把响应回浏览器的信息进行封装（封装成http响应），响应回浏览器的信息包括响应行、响应头（即返回信息的格式）、响应体（即想要显式在浏览器上的内容），然后用Socket打通浏览器和服务器的通道，利用Socket的outputStream输出流把http响应输出给浏览器，然后浏览器进行解析，就能按照我们规定的格式显示我们的信息。

```java
/**
 * 1. HspResponse对象可以封装OutputStream(是与Socket关联)
 * 2. 即可以通过HspResponse对象返回Http响应给浏览器
 * 3. HspResponse对象的作用等价于原生的Servlet的HttpServletResponse
 * */
public class HspResponse {
    private OutputStream outputStream = null;

    //写一个http的响应行和响应头
    public static final String respHeader = "HTTP/1.1 200 OK\r\n" +
            "Content-Type: text/html;charset=utf-8\r\n\r\n";

    //在创建HspResponse对象时，传入的outputStream是和Socket关联的
    public HspResponse(OutputStream outputStream) {
        this.outputStream = outputStream;
    }

    //当我们需要给浏览器返回数据时，可以通过HspResponse的输出流完成
    //这段代码的作用就是让我们通过调用getOutputStream方法可以获得输出流
    public OutputStream getOutputStream() {
        return outputStream;
    }
}
```

**总代码：**

```java
public class HspTomcatV2 {
    public static void main(String[] args) throws IOException {
        //在8080端口监听
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("===hsptomcatV2 在8080监听");
        while (!serverSocket.isClosed()) {
            //1. 接收到浏览器的连接后，如果成功，就会得到socket
            //2. 这个socket就是浏览器和服务器的数据通道
            Socket socket = serverSocket.accept();
            //3. 创建一个线程对象，并且把socket给该线程
            HspRequestHandler hspRequestHandler = new HspRequestHandler(socket);
            //4. 启动线程
            new Thread(hspRequestHandler).start();
        }
    }
}
```

```java
/**
 * 1. HspRequestHandler 对象是一个线程对象，用来和前端进行请求和响应的
 * 2. 处理一个http请求的
 * 3. 这里的HspRequestHandler类的作用就是从浏览器拿取请求信息、给浏览器返回响应信息，而具体怎么拿取请求信息在HspRequest
 *    具体怎么给浏览器返回响应信息在HspResponse
 * */
public class HspRequestHandler implements Runnable{

    //定义Socket
    private Socket socket = null;

    public HspRequestHandler(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        //这里我们可以对客户端/浏览器进行IO编程/交互
        try {
            InputStream inputStream = socket.getInputStream();

            /*//把inputStream转成BufferedReader
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "utf-8"));

            System.out.println("===hsptomcatv2 接收到的数据如下===");
            String mes = null;
            while ((mes = bufferedReader.readLine()) != null) {
                //如果长度为空就退出
                if (mes.length() == 0) {
                    break;
                }
                System.out.println(mes);
            }*/

            //上面那一截就不要了，就用HspRequest代替了
            HspRequest hspRequest = new HspRequest(inputStream);
            String num1 = hspRequest.getParameter("num1");
            String num2 = hspRequest.getParameter("num2");
            System.out.println("请求的参数num1 = " + num1);
            System.out.println("请求的参数num2 = " + num2);
            System.out.println("hspRequest" + hspRequest);


            /*//构建一下http响应头
            String respHeader = "HTTP/1.1 200 OK\r\n" +
                    "Content-Type: text/html;charset=utf-8\r\n\r\n";

            String resp = respHeader + "<h1>hi hspedu 韩顺平教育</h1>";

            System.out.println("===hsptomcatv2 返回的数据是====");
            System.out.println(resp);
            //返回数据给我们的浏览器/客户端，把信息封装成http响应
            OutputStream outputStream = socket.getOutputStream();*/
            //outputStream.write(resp.getBytes());

            //上面一截代码用下面代替
            
            //这里我们可以通过HspResponse对象，返回数据给浏览器/客户端
            HspResponse hspResponse = new HspResponse(socket.getOutputStream());
            String resp = HspResponse.respHeader + "<h1>hspResponse 返回的信息 hi 你好</h1>";
            //取出输出流
            OutputStream outputStream = hspResponse.getOutputStream();
            outputStream.write(resp.getBytes());
            outputStream.flush();
            outputStream.close();
            inputStream.close();
            socket.close();

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //一定要确保Socket关闭了
            if (socket != null) {
                try {
                    socket.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```

###### 7.2.3.2.4 完成HspServlet接口、HspHttpServlet抽象类、HspCalServlet业务类的编写，并简单实现需求

```java
public interface HspServlet {
    void init() throws Exception;

    void service(HspRequest request, HspResponse response) throws IOException;

    void destroy();
}
```

```java
public abstract class HspHttpServlet implements HspServlet{
    @Override
    public void service(HspRequest request, HspResponse response) throws IOException {
        //equalsIgnoreCase方法是比较字符串内容是否相等的，并且不区分大小写
        if ("GET".equalsIgnoreCase(request.getMethod())) {
            this.doGet(request, response);
        } else if ("POST".equalsIgnoreCase(request.getMethod())) {
            this.doPost(request, response);
        }
    }

    //这里使用了模板设计模式
    //让HspHttpServlet的子类HspCalServlet去实现这个方法
    public abstract void doGet(HspRequest request, HspResponse response);
    public abstract void doPost(HspRequest request, HspResponse response);
}

```

```java
public class HspCalServlet extends HspHttpServlet {
    @Override
    public void doGet(HspRequest request, HspResponse response) {
        //写业务代码，完成计算任务
        int num1 = WebUtils.parseInt(request.getParameter("num1"), 0);
        int num2 = WebUtils.parseInt(request.getParameter("num2"), 0);
        int sum = num1 + num2;

        //返回计算结果给浏览器
        OutputStream outputStream = response.getOutputStream();
        String respMes = HspResponse.respHeader + "<h1>" + num1 + " + " + num2 + " = " + sum + "</h1>";
        try {
            outputStream.write(respMes.getBytes());
            outputStream.flush();
            outputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void doPost(HspRequest request, HspResponse response) {
        this.doGet(request, response);
    }

    @Override
    public void init() throws Exception {

    }

    @Override
    public void destroy() {

    }
}
```

```java
//这里的HspRequestHandler对象的作用：基本作用还是和前端进行请求和响应的
//要在这里new HspCalServlet()，后面要用反射，就不要在这里用这个死办法,这个死办法导致浏览器每次请求的都是HspCalServlet业务
/**
 * 1. HspRequestHandler 对象是一个线程对象，用来和前端进行请求和响应的
 * 2. 处理一个http请求的
 * 这里的HspRequestHandler更像是一个Tomcat，用来初始化Request、Response对象，并调用HspCalServlet
 * */
public class HspRequestHandler implements Runnable{

    //定义Socket
    private Socket socket = null;

    public HspRequestHandler(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        //这里我们可以对客户端/浏览器进行IO编程/交互
        try {
            //InputStream inputStream = socket.getInputStream();

            /*//把utStream转成BufferedReader
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "utf-8"));

            System.out.println("===hsptomcatv2 接收到的数据如下===");
            String mes = null;
            while ((mes = bufferedReader.readLine()) != null) {
                //如果长度为空就退出
                if (mes.length() == 0) {
                    break;
                }
                System.out.println(mes);
            }*/

            //上面那一截就不要了，就用HspRequest代替了
            HspRequest hspRequest = new HspRequest(socket.getInputStream());
            /*String num1 = hspRequest.getParameter("num1");
            String num2 = hspRequest.getParameter("num2");
            System.out.println("请求的参数num1 = " + num1);
            System.out.println("请求的参数num2 = " + num2);
            System.out.println("hspRequest" + hspRequest);*/

            /*//构建一下http响应头
            String respHeader = "HTTP/1.1 200 OK\r\n" +
                    "Content-Type: text/html;charset=utf-8\r\n\r\n";

            String resp = respHeader + "<h1>hi hspedu 韩顺平教育</h1>";

            System.out.println("===hsptomcatv2 返回的数据是====");
            System.out.println(resp);
            //返回数据给我们的浏览器/客户端，把信息封装成http响应
            OutputStream outputStream = socket.getOutputStream();*/
            //outputStream.write(resp.getBytes());

            //这里我们可以通过HspResponse对象，返回数据给浏览器/客户端
            HspResponse hspResponse = new HspResponse(socket.getOutputStream());
            /*String resp = HspResponse.respHeader + "<h1>hspResponse 返回的信息 hi 你好</h1>";
            //取出输出流
            OutputStream outputStream = hspResponse.getOutputStream();
            outputStream.write(resp.getBytes());
            outputStream.flush();
            outputStream.close();*/
                     
            //创建HspCalServlet对象，先运行下HspCalServlet是否成功
            //等会会用反射来完成创建对象
            HspCalServlet hspCalServlet = new HspCalServlet();
            hspCalServlet.doGet(hspRequest, hspResponse);

            //inputStream.close();
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //一定要确保Socket关闭了
            if (socket != null) {
                try {
                    socket.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```

```java
public class HspTomcatV2 {
    public static void main(String[] args) throws IOException {
        //在8080端口监听
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("===hsptomcatV2 在8080监听");
        while (!serverSocket.isClosed()) {
            //1. 接收到浏览器的连接后，如果成功，就会得到socket
            //2. 这个socket就是浏览器和服务器的数据通道
            Socket socket = serverSocket.accept();
            //3. 创建一个线程对象，并且把socket给该线程
            HspRequestHandler hspRequestHandler = new HspRequestHandler(socket);
            //4. 启动线程
            new Thread(hspRequestHandler).start();
        }
    }
}
```

###### 7.2.3.2.5 利用反射处理Servlet实例

​		上一节代码中在HspRequestHandler中new了一个HspCalServlet实例让HspCalServlet可以跑起来，但是这种方法太死了，如果有多个Servlet实例怎么办？Tomcat是怎么找到不同的Servlet实例的？

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222054008.png)

```xml
<!DOCTYPE web-app PUBLIC
 "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
 "http://java.sun.com/dtd/web-app_2_3.dtd" >

<web-app>
  <display-name>Archetype Created Web Application</display-name>
    
    <!-- 配置自己设计的Servlet
         因为这个不是原生的Servlet，而是我们自己设计的Servlet,所以会报错
         而且要把web.xml复制一份到
    -->
    <servlet>
        <servlet-name>HspCalServlet</servlet-name>
        <servlet-class>com.hspedu.tomcat.servlet.HspCalServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>HspCalServlet</servlet-name>
        <url-pattern>/hspCalServlet</url-pattern>
    </servlet-mapping>
    <servlet>
        <servlet-name>Hsp6CalServlet</servlet-name>
        <servlet-class>com.hspedu.tomcat.servlet.Hsp6CalServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>Hsp6CalServlet</servlet-name>
        <url-pattern>/hsp6CalServlet</url-pattern>
    </servlet-mapping>
</web-app>
```

```java
/**
 * 1. HspRequestHandler 对象是一个线程对象，用来和前端进行请求和响应的
 * 2. 处理一个http请求的
 * */
public class HspRequestHandler implements Runnable{

    //定义Socket
    private Socket socket = null;

    public HspRequestHandler(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        //这里我们可以对客户端/浏览器进行IO编程/交互
        try {
            //InputStream inputStream = socket.getInputStream();

            /*//把utStream转成BufferedReader
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "utf-8"));

            System.out.println("===hsptomcatv2 接收到的数据如下===");
            String mes = null;
            while ((mes = bufferedReader.readLine()) != null) {
                //如果长度为空就退出
                if (mes.length() == 0) {
                    break;
                }
                System.out.println(mes);
            }*/

            //上面那一截就不要了，就用HspRequest代替了
            HspRequest hspRequest = new HspRequest(socket.getInputStream());
            /*String num1 = hspRequest.getParameter("num1");
            String num2 = hspRequest.getParameter("num2");
            System.out.println("请求的参数num1 = " + num1);
            System.out.println("请求的参数num2 = " + num2);
            System.out.println("hspRequest" + hspRequest);*/

            /*//构建一下http响应头
            String respHeader = "HTTP/1.1 200 OK\r\n" +
                    "Content-Type: text/html;charset=utf-8\r\n\r\n";

            String resp = respHeader + "<h1>hi hspedu 韩顺平教育</h1>";

            System.out.println("===hsptomcatv2 返回的数据是====");
            System.out.println(resp);
            //返回数据给我们的浏览器/客户端，把信息封装成http响应
            OutputStream outputStream = socket.getOutputStream();*/
            //outputStream.write(resp.getBytes());

            //这里我们可以通过HspResponse对象，返回数据给浏览器/客户端
            HspResponse hspResponse = new HspResponse(socket.getOutputStream());
            /*String resp = HspResponse.respHeader + "<h1>hspResponse 返回的信息 hi 你好</h1>";
            //取出输出流
            OutputStream outputStream = hspResponse.getOutputStream();
            outputStream.write(resp.getBytes());
            outputStream.flush();
            outputStream.close();*/

            //创建HspCalServlet对象，先运行下HspCalServlet是否成功
            //这是硬编码，等会会用反射来完成创建对象
            /*HspCalServlet hspCalServlet = new HspCalServlet();
            hspCalServlet.doGet(hspRequest, hspResponse);*/

            //利用反射和容器进行
            //1. 得到uri 就是 servletUrlMapping 的 url-pattern
            String uri = hspRequest.getUri();
            String servletName = HspTomcatV3.servletUrlMapping.get(uri);

            if (servletName == null) {
                servletName = "";
            }
            //2. 通过uri得到servletName然后得到servlet实例
            HspHttpServlet hspHttpServlet = HspTomcatV3.servletMapping.get(servletName);
            //3. 调用service，通过动态绑定机制，调用运行类型HspCalServlet的doGet/doPost方法
            if (hspHttpServlet != null) {
                hspHttpServlet.service(hspRequest, hspResponse);
            } else {
                //没有这个servlet，返回404
                String resp = HspResponse.respHeader + "<h1>404 Not Found</h1>";
                OutputStream outputStream = hspResponse.getOutputStream();
                outputStream.write(resp.getBytes());
                outputStream.flush();
                outputStream.close();
            }

            //inputStream.close();
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //一定要确保Socket关闭了
            if (socket != null) {
                try {
                    socket.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```

```java
/*
* 第3版的Tomcat，实现通过xml+反射来初始化容器
* */
public class HspTomcatV3 {
    //1. 存放容器 servletMapping
    public static final ConcurrentHashMap<String, HspHttpServlet> servletMapping = new ConcurrentHashMap<>();

    //2. 容器 servletUtlMapping
    public static final ConcurrentHashMap<String, String> servletUrlMapping = new ConcurrentHashMap<>();

    //3. 直接对两个容器进行初始化
    public void init() {
        //读取web.xml用dom4j
        //得到web.xml文件的路径,因为其实运行的是target里的文件，又因为我们是自己搞的servlet，所以target里不会自动更新，我们要拷贝一份
        String path = HspTomcatV3.class.getResource("/").getPath();
        System.out.println("path = " + path);//path = /D:/Study/Code/IDEA/JavaWeb/hsp/hsptomcat/target/classes/
        //使用dom4j技术完成读取
        SAXReader saxReader = new SAXReader();
        try {
            Document document = saxReader.read(new File(path + "web.xml"));
            System.out.println("document = " + document);
            //得到根元素
            Element rootElement = document.getRootElement();
            //得到根元素下面的所有元素
            List<Element> elements = rootElement.elements();
            //遍历并过滤，留下servlet和servlet-mapping的信息
            for (Element element : elements) {
                if ("servlet".equalsIgnoreCase(element.getName())) {
                    System.out.println("servlet被发现");
                    //使用反射将该servlet实例放入到servletMapping
                    Element servletName = element.element("servlet-name");
                    Element servletClass = element.element("servlet-class");
                    servletMapping.put(servletName.getText(), (HspHttpServlet) Class.forName(servletClass.getText().trim()).newInstance());

                } else if ("servlet-mapping".equalsIgnoreCase(element.getName())) {
                    System.out.println("servlet-mapping被发现");
                    Element servletName = element.element("servlet-name");
                    Element urlPattern = element.element("url-pattern");
                    servletUrlMapping.put(urlPattern.getText(), servletName.getText());
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        //验证两个容器是否初始化成功
        System.out.println("servletMapping= " + servletMapping);
        System.out.println("servletUrlMapping= " + servletUrlMapping);
    }

    public static void main(String[] args) {
        HspTomcatV3 hspTomcatV3 = new HspTomcatV3();
        hspTomcatV3.init();
        //启动hspTomcat容器
        hspTomcatV3.run();
    }

    //启动HspTomcatV3容器
    public void run() {
        try {
            ServerSocket serverSocket = new ServerSocket(8080);
            System.out.println("===hspTomcatV3在8080监听");
            while(!serverSocket.isClosed()) {
                Socket socket = serverSocket.accept();
                HspRequestHandler hspRequestHandler = new HspRequestHandler(socket);
                new Thread(hspRequestHandler).start();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

```java
public class HspCalServlet extends HspHttpServlet {
    @Override
    public void doGet(HspRequest request, HspResponse response) {
        //写业务代码，完成计算任务
        int num1 = WebUtils.parseInt(request.getParameter("num1"), 0);
        int num2 = WebUtils.parseInt(request.getParameter("num2"), 0);
        int sum = num1 + num2;

        //返回计算结果给浏览器
        OutputStream outputStream = response.getOutputStream();
        String respMes = HspResponse.respHeader + "<h1>" + num1 + " + " + num2 + " = " + sum + "</h1>";
        try {
            outputStream.write(respMes.getBytes());
            outputStream.flush();
            outputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void doPost(HspRequest request, HspResponse response) {
        this.doGet(request, response);
    }

    @Override
    public void init() throws Exception {

    }

    @Override
    public void destroy() {

    }
}
```

```java
public class Hsp6CalServlet extends HspHttpServlet{
    @Override
    public void doGet(HspRequest request, HspResponse response) {
        //写业务代码，完成计算任务
        int num1 = WebUtils.parseInt(request.getParameter("num1"), 0);
        int num2 = WebUtils.parseInt(request.getParameter("num2"), 0);
        int sum = num1 * num2;

        //返回计算结果给浏览器
        OutputStream outputStream = response.getOutputStream();
        String respMes = HspResponse.respHeader + "<h1>" + num1 + " * " + num2 + " = " + sum + "</h1>";
        try {
            outputStream.write(respMes.getBytes());
            outputStream.flush();
            outputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void doPost(HspRequest request, HspResponse response) {
        doGet(request, response);
    }

    @Override
    public void init() throws Exception {

    }

    @Override
    public void destroy() {

    }
}
```

#### 7.2.4 作业

完善以上代码，让其能够识别出是静态页面还是servlet

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>计算器</title>
</head>
<body>
<h1>计算器</h1>
<form action="/calServlet" method="get">
    num1:<input type="text" name="num1"><br/>
    num2:<input type="text" name="num2"><br/>
    <input type="submit" value="提交">
</form>
</body>
</html>
```

```java
public class WebUtils {
    //将字符串转成数字的方法
    public static int parseInt(String strNum, int defaultVal) {
        try {
            return Integer.parseInt(strNum);
        } catch (NumberFormatException e) {
            System.out.println(strNum + " 不能转成数字");
        }
        return defaultVal;
    }

    //判断uri是不是HTML文件
    public static boolean isHtml(String uri) {
        return uri.endsWith(".html");
    }

    //根据文件名来读取该文件
    public static String readHtml(String filename) {
        String path = com.hspedu.utils.WebUtils.class.getResource("/").getPath();
        StringBuilder stringBuilder = new StringBuilder();
        try {
            BufferedReader bufferedReader = new BufferedReader(new FileReader(path + filename));
            String buf = "";
            while ((buf = bufferedReader.readLine()) != null) {
                stringBuilder.append(buf);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return stringBuilder.toString();
    }
}
```

```java
/**
 * 1. HspRequestHandler 对象是一个线程对象，用来和前端进行请求和响应的
 * 2. 处理一个http请求的
 * */
public class HspRequestHandler implements Runnable{

    //定义Socket
    private Socket socket = null;

    public HspRequestHandler(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        //这里我们可以对客户端/浏览器进行IO编程/交互
        try {
            //InputStream inputStream = socket.getInputStream();

            /*//把utStream转成BufferedReader
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "utf-8"));

            System.out.println("===hsptomcatv2 接收到的数据如下===");
            String mes = null;
            while ((mes = bufferedReader.readLine()) != null) {
                //如果长度为空就退出
                if (mes.length() == 0) {
                    break;
                }
                System.out.println(mes);
            }*/

            //上面那一截就不要了，就用HspRequest代替了
            HspRequest hspRequest = new HspRequest(socket.getInputStream());
            /*String num1 = hspRequest.getParameter("num1");
            String num2 = hspRequest.getParameter("num2");
            System.out.println("请求的参数num1 = " + num1);
            System.out.println("请求的参数num2 = " + num2);
            System.out.println("hspRequest" + hspRequest);*/

            /*//构建一下http响应头
            String respHeader = "HTTP/1.1 200 OK\r\n" +
                    "Content-Type: text/html;charset=utf-8\r\n\r\n";

            String resp = respHeader + "<h1>hi hspedu 韩顺平教育</h1>";

            System.out.println("===hsptomcatv2 返回的数据是====");
            System.out.println(resp);
            //返回数据给我们的浏览器/客户端，把信息封装成http响应
            OutputStream outputStream = socket.getOutputStream();*/
            //outputStream.write(resp.getBytes());

            //这里我们可以通过HspResponse对象，返回数据给浏览器/客户端
            HspResponse hspResponse = new HspResponse(socket.getOutputStream());
            /*String resp = HspResponse.respHeader + "<h1>hspResponse 返回的信息 hi 你好</h1>";
            //取出输出流
            OutputStream outputStream = hspResponse.getOutputStream();
            outputStream.write(resp.getBytes());
            outputStream.flush();
            outputStream.close();*/

            //创建HspCalServlet对象，先运行下HspCalServlet是否成功
            //这是硬编码，等会会用反射来完成创建对象
            /*HspCalServlet hspCalServlet = new HspCalServlet();
            hspCalServlet.doGet(hspRequest, hspResponse);*/

            //利用反射和容器进行
            //1. 得到uri 就是 servletUrlMapping 的 url-pattern
            String uri = hspRequest.getUri();

            if (WebUtils.isHtml(uri)) { //就是静态页面
                String content = WebUtils.readHtml(uri.substring(1));
                content = HspResponse.respHeader + content;
                //System.out.println("content= " + content);
                //得到OutputStream，返回信息给浏览器
                OutputStream outputStream = hspResponse.getOutputStream();
                outputStream.write(content.getBytes());
                outputStream.flush();
                outputStream.close();
                socket.close();
                return;
            }

            String servletName = HspTomcatV3.servletUrlMapping.get(uri);

            if (servletName == null) {
                servletName = "";
            }
            //2. 通过uri得到servletName然后得到servlet实例
            HspHttpServlet hspHttpServlet = HspTomcatV3.servletMapping.get(servletName);
            //3. 调用service，通过动态绑定机制，调用运行类型HspCalServlet的doGet/doPost方法
            if (hspHttpServlet != null) {
                hspHttpServlet.service(hspRequest, hspResponse);
            } else {
                //没有这个servlet，返回404
                String resp = HspResponse.respHeader + "<h1>404 Not Found</h1>";
                OutputStream outputStream = hspResponse.getOutputStream();
                outputStream.write(resp.getBytes());
                outputStream.flush();
                outputStream.close();
            }

            //inputStream.close();
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //一定要确保Socket关闭了
            if (socket != null) {
                try {
                    socket.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```



## 第8章 WEB路径专题+会话技术

### 8.1 Web路径专题

#### 8.1.1 工程路径

##### 8.1.1.1 相对路径

​		说明：页面所有的相对路径，在默认情况下都会参考当前浏览器地址栏的路径 `http://ip:port/工程名/ +  在html页面写的资源的目录` 来进行跳转，比如`http://localhost:8080/webpath/a.html`就会参考`http://localhost:8080/webpath`，但是有一个问题就是当资源路径有多级目录的话，但是要找的页面在另一个目录，而相对路径却不能跳出当前目录，比如`http://loacalhost:8080/webpath/d1/d2/a.html`,要去找到`http://localhost:8080/webpath/css/mycss/my.css`就不能使用相对路径，因为相对路径只会参考到`http://loacalhost:8080/webpath/d1/d2/`

所以希望有一种方式可以让浏览器固定参考到`http://ip:port/项目名`，从而定位到资源

​		如果需要指定页面相对路径参考的路径，可以使用base标签来指定

##### 8.1.1.2 base标签

###### 8.1.1.2.1 base标签介绍

（1）base 标签是 HTML 语言中的基准网址标记，它是一个单标签，位于网页头部文件的 head标签内
（2）一个页面最多只能使用一个 base 元素，用来提供一个指定的默认目标，是一种表达路径和连接网址的标记。
（3）常见的 url 路径形式分别有相对路径与绝对路径，如果 base 标签指定了目标，浏览器将通过这个目标来解析当前文档中的所有相对路径，包括的标签有（a、img、link、form）
（4）也就是说，浏览器解析时会在路径前加上 base 给的目标，而页面中的相对路径也都转换成了绝对路径。使用了 base 标签就应带上 href 属性和 target属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>a.html</title>
</head>
<body>
<h1>这是 a.html</h1>
<!-- 相对路径 -->
<a href="d1/d2/b.html">跳转到/d1/d2/b.html</a>
<br/><br/>

<!-- 1. 在实际开发中，往往不是直接访问一个资源的，而是在服务端进行转发或者重定向来访问资源
-->
<a href="servlet03">转发到/d1/d2/b.html</a>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>b.html</title>
    <!-- 老韩解读
    1. 如果没有<base href="http://localhost:10000/hspedu_servlet/">
    2. 当点击 返回 a.html 超链接，将会以当前浏览器的地址为路径来确定 路径
    3. 如果增加了<base href="http://localhost:10000/hspedu_servlet/">
    4. 将以 base 指定的 href 的地址为路径，来确定 超链接的路径
    -->

    <!-- 使用base标签
         表示的含义就是当前这个页面访问的所有资源都是以 http://localhost:8080/webpath/ 为基础的
    -->
    <base href="http://localhost:8080/webpath/">
    <!--上面的写法可以简化
        因为base标签是浏览器解析，浏览器在解析第一个 / 的时候，会把第一个 / 解析成 http://localhost:8080/
    -->
    <base href="/webpath/">

</head>
<body>
<h1>这是/d1/d2/b.html</h1>

<a href="a.html">返回 a.html~</a>
</body>
</html>
```

```java
public class Servlet03 extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //通过转发定位b.html
        System.out.println("Servlet03进行转发");
        request.getRequestDispatcher("/d1/d2/b.html").forward(request,response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}

```

#### 8.1.2 Web工程路径注意事项和细节

（1）Web工程的相对路径和绝对路径

​			相对路径是：

​				. 表示当前目录

​				.. 表示上一级目录

​				资源名 表示当前目录/资源名

​				绝对路径：`http://ip:prot/工程路径/资源路径`

（2）在实际开发中，路径都使用绝对路径而不使用相对路径

（3）在web中 / 如果被浏览器解析，得到的地址是：`http://ip:port/`

（4）在web中 / 如果被服务器解析，得到的地址是：`http://ip:port/工程路径/`，可以理解成`/工程路径/` 

（5）在JavaWeb中路径最后带 / 和不带 / 含义不同：比如

```html
<a href="/a/servlet03">网址</a> servlet03表示资源
<a href="/a/servlet03/">网址</a> servlet03表示路径
```

（6）response.sendRediect("/"); 这条语句虽然是在服务器执行的，但是，服务器是把 / 发送给浏览器解析，因此得到的地址是 `http://ip:port/`

总结：在编写资源路径时：

​	（1）看这个路径前面有没有 /

​	（2）看这个路径在哪里被解析（浏览器还是服务器）。如果路径前面有 / ，浏览器解析成` http://ip:port/` ，服务器解析成 `/工程路径/` ；如果路径前面没有 / ,浏览器解析成 当前的地址栏 去掉 资源部分，作为一个相对路径

​	（3）看这个路径最后有没有 /, 如果有表示路径，如果没有表示资源

### 8.2 Web开发会话技术

#### 8.2.1 会话介绍

（1）会话是指客户端和服务器从连接开始到结束中的每次请求和响应都属于⼀次会话。会话就是客户端和服务器交流的过程，这个过程是⼀个持续的过程，当关闭客户端或者服务器 后该次会话结束，在这个过程中的请求和响应都属于同⼀次会话，不管访问的是哪个⻚⾯或者哪个Servlet都属于该会话。
		举例：会话就好⽐打电话，A给B打电话，接通之后，会话开始，直到挂断电话，该次会话就结束了，⽽浏览器访问服务器，就跟打电话⼀样，浏览器A给服务器发送请求，访问web程序，该次会话就已经接通，其中不管浏览器发送多少请求(就相当于接通电话后说话⼀样)，都视为⼀次会话，直到浏览器关闭，本次会话结束。
		**注意：⼀个浏览器就相当于⼀部电话，如果使⽤⽕狐浏览器，访问服务器，就是⼀次会话了，然后打开google浏览器，访问服务器，这是另⼀个会话，虽然是在同⼀台电脑，同⼀个⽤户在访问，但是，这是两次不同的会话。**

（2）从浏览器访问服务器开始，到访问服务器结束，浏览器关闭为止的这段时间内容产生的多次请求和响应，合起来叫做浏览器和服务器之间的一次会话
（3）为什么要使用会话技术呢？
		实际上会话问题解决的还是客户端与服务器之间的通信问题，通过一些会话技术，可以将每个用户的数据以例如cookie/session的形式存储，方便以后用户访问web资源的时候使用
		假定场景：A和B两人在某个网上购物商场登陆账号后，A买了一个HHKB的键盘，而B则购买了一把民谣吉他，这些信息都会被保存下来
		用途是：保存账户信息，登录时询问日后是否自动登录，或者根据之前浏览，购买过的商品，分析用户喜欢什么类型的商品，做出精准推送

（4）会话过程中要解决的问题：每个用户在使用浏览器与服务器进行会话的过程中，不可避免的各自会产生一些数据，服务器要想办法为每个用户保存这些数据。例如：多个用户点击超链接通过一个servlet各自购买了一个商品，服务器应该想办法把每一个用户购买的商品保存在各自的地方，以便于这些用户点击结账servlet时，结账servlet可以得到用户各自购买的商品为用户结账。

#### 8.2.2 Cookie

##### 8.2.2.1 Cookie的作用

思考问题：

​		在访问某个网站的时候，是否能看到提示你上次登录网站的时间，而且要注意的是不同用户上次登录的时间肯定是不一样的，这是怎么实现的？

​		在访问某个购物网站的时候，是否能看到提示你曾经浏览过的商品，不同用户浏览过的商品肯定不一样，这是怎么实现的？

​		当我们登录某个网站的时候，往往可以保存登录信息，不用重复输入登录信息，这个是怎么实现的？

解决之道-Cookie技术：

​		Cookie是客户端技术，服务器把每个用户的数据以Cookie的形式写给用户各自的浏览器。当用户使用浏览器再次去访问服务器中的Web资源时，就会带着各自的数据去，这样，web资源处理的就是用户各自的数据了

​		Cookie是服务器在客户端保存的用户的信息，比如登录名、密码、浏览历史等，就可以以Cookie的方式保存

​		Cookie数据量不大，服务器端在需要的时候可以从客户端/浏览器读取

​		Cookie数据是保存在浏览器的

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222054988.png)

##### 8.2.2.2 Cookie的常用方法

（1）Cookie像是一张表，可以存放 K-V，分为两列，一个是名字，一个是值，数据类型都是String

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222054269.png)

（2）如何创建一个Cookie（在服务端创建的）

​		Cookie c = new Cookie(String name, String val);

​		c.setMaxAge(); //保存时间

（3）如何将一个Cookie添加到客户端

​		response.addCookie(c);

（4）如何读取Cookie（在服务器端读取到浏览器端的Cookie信息）

​		request.getCookies();

##### 8.2.2.3 Cookie的应用实例-创建和读取Cookie

###### 8.2.2.3.1 创建Cookie

```xml
<servlet>
        <servlet-name>CreateCookie</servlet-name>
        <servlet-class>com.hspedu.cookie.CreateCookie</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>CreateCookie</servlet-name>
        <url-pattern>/createCookie</url-pattern>
    </servlet-mapping>
```

```java
public class CreateCookie extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("CreateCookie被调用");
        //1. 创建一个Cookie对象
        // username 是该cookie的名字，是唯一的，可以理解为key
        // hsp 是该cookie的值
        // 可以创建多个cookie
        // 此时的cookie还在服务器端，还没有到浏览器
        Cookie cookie = new Cookie("username", "hsp");

        response.setContentType("text/html;charset=utf-8");
        // 2.将cookie发送给浏览器，让浏览器将该cookie保存到浏览器
        response.addCookie(cookie);
        PrintWriter writer = response.getWriter();
        writer.println("<h1>创建cookie成功~</h1>");
        writer.flush();
        writer.close();

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

###### 8.2.2.3.2 读取Cookie-读取从浏览器发送来的cookie信息

```java
public class ReadCookies extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("ReadCookies被调用");
        //1. 通过request对象读取cookie信息
        Cookie[] cookies = request.getCookies();
        //2. 遍历cookies
        if (cookies != null && cookies.length != 0) {
            for (Cookie cookie : cookies) {
                System.out.println("cookie name = " + cookie.getName() + " cookie value = " + cookie.getValue());
            }
        }

        //3. 给浏览器返回信息
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<h1>读取Cookie成功</h1>");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
```

##### 8.2.2.4 Cookie的应用实例-读取指定Cookie

需求：在服务器端如何读取到指定的Cookie，给定Cookie的Key，返回该Cookie的Value，如果不存在该Cookie则返回null

创建一个CookieUtils用来过滤cookies数组的值

```java
public class CookieUtils {
    //编写一个方法，返回指定名字的Cookie值
    public static Cookie readCookieByName(String name, Cookie[] cookies) {
        //判断传入的参数是否正确
        if (name == null || "".equals(name) || cookies == null || cookies.length == 0) {
            return null;
        }

        //遍历cookies
        for (Cookie cookie : cookies) {
            if (name.equals(cookie.getName())) {
                return cookie;
            }
        }
        return null;
    }
}
```

创建两个cookie

```java
public class CreateCookie extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("CreateCookie被调用");
        //1. 创建一个Cookie对象
        // username 是该cookie的名字，是唯一的，可以理解为key
        // hsp 是该cookie的值
        // 可以创建多个cookie
        // 此时的cookie还在服务器端，还没有到浏览器
        Cookie cookie = new Cookie("username", "hsp");
        Cookie cookie2 = new Cookie("email", "tom@sohu.com");

        response.setContentType("text/html;charset=utf-8");
        // 2.将cookie发送给浏览器，让浏览器将该cookie保存到浏览器
        response.addCookie(cookie);
        response.addCookie(cookie2);
        PrintWriter writer = response.getWriter();
        writer.println("<h1>创建cookie成功~</h1>");
        writer.flush();
        writer.close();

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

```java
public class ReadCookieByNameServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("ReadCookieByNameServlet被调用");
        //得到指定的Cookie的value
        //1. 先得到浏览器携带的所有Cookie
        Cookie[] cookies = request.getCookies();
        //2. 使用工具类来获取指定的Cookie
        Cookie emailCookie = CookieUtils.readCookieByName("email", cookies);
        if (null != emailCookie) {
            System.out.println("得到的Cookie name = " + emailCookie.getName() + " value = " + emailCookie.getValue());
        } else {
            System.out.println("sorry, 没有这个cookie");
        }

        //3. 给浏览器返回信息
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<h1>完成读取Cookie任务</h1>");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

##### 8.2.2.5 Cookie的应用实例-修改Cookie

需求：给定一个cookie的name，找到该cookie，如果找到，则修改该cookie的值为hsp-hi；如果找不到指定的cookie，则提示没有该cookie

```java
public class UpdateCookie extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("UpdateCookie被调用");
        //1. 根据name去查找cookie
        String cookieName = "email";
        Cookie[] cookies = request.getCookies();
        Cookie cookie = CookieUtils.readCookieByName(cookieName, cookies);
        //2. 找到后修改email的值
        if (null == cookie) { //表示在浏览器没有该cookie
            System.out.println("当前访问的浏览器没有该cookie");
        } else {
            cookie.setValue("hsp-hi");
        }
        //3. 验证是否修改成功，输出cookie数组
        System.out.println("===修改后的cookies信息====");
        for (Cookie cookie1 : cookies) {
            System.out.println("cookie name = " + cookie1.getName() + " cookie vlaue = " + cookie1.getValue());
        }
        //4. 修改成功后，只是把浏览器传回来的cookies数组的内容改了，还没传回给浏览器
        //5. 把修改后的cookie传回给浏览器
        if (cookie != null) {
            //这里回传一个同名的cookie，相当于覆盖原来的cookie
            response.addCookie(cookie);
        }

        //6. 给浏览器返回信息
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<h1>修改Cookie任务完成</h1>");
        writer.flush();
        writer.close();

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

##### 8.2.2.6 Cookie的生命周期

[JAVA中级(十一)cookie详解和使用,生命周期_java cookie存在哪里何时生效-CSDN博客](https://blog.csdn.net/qq_42577241/article/details/89493503)

（1）Cookie的生命周期指的是管理Cookie什么时候被销毁（删除）

（2）setMaxAge()方法：

​				正数：表示在指定的秒数后过期

​				负数：表示浏览器关闭，Cookie就会被删除（默认值是-1）

​				0：表示马上删除Cookie

​				默认：即不调用setMaxAge方法时，默认是 -1，即是会话级别的Cookie，浏览器关闭就销毁了

```java
public class CookieLive extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("CookieLive被调用");
        /**
         * 创建一个cookie，生命周期为 60s
         * */
        Cookie cookie = new Cookie("job", "java");
        //1. 从创建该cookie开始计时，60秒后无效
        //2. 浏览器来根据创建的时间计时到60秒后就认为该cookie无效
        //3. 如果该cookie无效，那么浏览器在发出http请求时就不再携带该cookie
        cookie.setMaxAge(60);
        //4. 将cookie保存到浏览器
        response.addCookie(cookie);

        /**
         * 删除一个cookie，比如删除username
         * */
        //1. 先得到username cookie
        Cookie[] cookies = request.getCookies();
        Cookie usernameCookie = CookieUtils.readCookieByName("username", cookies);

        if (usernameCookie != null) {
            //2. 将其生命周期设置为0
            usernameCookie.setMaxAge(0);
            //3. 重新保存该cookie，因为将其生命周期设置为0，就等价于让浏览器删除该cookie
            //4. 该cookie会被浏览器直接删除
            response.addCookie(usernameCookie);
        } else {
            System.out.println("没有找到该cookie，无法删除...");
        }

        //5. 给浏览器返回信息
        //6. 给浏览器返回信息
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<h1>设置Cookie生命周期成功</h1>");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

##### 8.2.2.7 Cookie的有效路径

###### 8.2.2.7.1 Cookie的有效路径规则

（1）Cookie的path属性可以有效的过滤哪些Cookie可以发送给服务器哪些不可以发，path属性是通过请求的地址来进行有效的过滤

（2）有效路径规则如下：

​		有：

​			cookie1.setPath = /工程路径

​			cookie2.setPath = /工程路径/aaa

​		如果请求地址为：`http://ip:端口/工程路径/资源`

​			cookie1 会发给服务器

​			cookie2 不会发给服务器

​		如果请求地址为：`http://ip:端口/工程路径/aaa/资源`

​			cookie1 会发给服务器

​			cookie2 会发给服务器

​	总结：当请求地址包含cookie设置的地址就能发给服务器

###### 8.2.2.7.2 Cookie有效路径的应用

```java
public class CookiePath extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("CookiePath被调用");
        //1. 创建两个cookie
        Cookie cookie = new Cookie("address", "bj");
        Cookie cookie2 = new Cookie("salary", "20000");
        //2. 设置不同的有效路径
        //   默认是 /工程路径
        //request.getContextPath() => /cs
        cookie.setPath(request.getContextPath());
        cookie2.setPath(request.getContextPath() + "/aaa");

        //3. 保存到浏览器
        response.addCookie(cookie);
        response.addCookie(cookie2);

        //4. 给浏览器返回信息
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<h1>设置Cookie路径成功</h1>");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

##### 8.2.2.8 Cookie作业

需求：完成自动填写登录账号应用案例，如果用户登录成功，则下次登录自动填写登录账户

（1）如果用户名是hspedu，密码是123456，则认为该用户合法，登录成功，否则登录失败

（2）要求实现如果登录成功，则该用户在3天内登录可以自动填写其登录名

（3）提示：登录页面需要使用servlet返回，而不能使用html

步骤：

（1）编写html登录界面

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录页面</title>
</head>
<body>
<h1>用户登录界面</h1>
<form action="#" method="post">
    u:<input type="text" name="username"><br/>
    p:<input type="password" name="pwd"><br/>
    <input type="submit" value="登录">
</form>
</body>
</html>
```

（2）将login.html修改成servlet

```java
public class UserUIServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("UserUIServlet被调用");
        //1. 得到writer
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>登录页面</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "<h1>用户登录界面</h1>\n" +
                "<form action=\"#\" method=\"post\">\n" +
                "    u:<input type=\"text\" name=\"username\"><br/>\n" +
                "    p:<input type=\"password\" name=\"pwd\"><br/>\n" +
                "    <input type=\"submit\" value=\"登录\">\n" +
                "</form>\n" +
                "</body>\n" +
                "</html>");
        writer.flush();
        writer.close();

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

总代码：

```java
public class UserUIServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("UserUIServlet被调用");

        //LoginServlet把cookie传回浏览器后，要来这个页面把cookie信息读取出来，然后显示在页面上
        //读取从浏览器发送来的cookie
        Cookie[] cookies = request.getCookies();
        Cookie loginuserCookie = CookieUtils.readCookieByName("loginuser", cookies);
        String username = ""; //因为作用域的问题而被拿到外面
        
        if (loginuserCookie != null) {
            username = loginuserCookie.getValue();
        }

        //1. 得到writer
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>登录页面</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "<h1>用户登录界面</h1>\n" +
                "<form action=\"/cs/loginServlet\" method=\"post\">\n" +
                "    u:<input type=\"text\" value=\"" + username + "\" name=\"username\"><br/>\n" +
                "    p:<input type=\"password\" name=\"pwd\"><br/>\n" +
                "    <input type=\"submit\" value=\"登录\">\n" +
                "</form>\n" +
                "</body>\n" +
                "</html>");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

```java
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("LoginServlet被调用");
        //1. 接收表单提交用户名和密码
        String username = request.getParameter("username");
        String pwd = request.getParameter("pwd");

        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        //2. 判断是否合法
        if ("hspedu".equals(username) && "123456".equals(pwd)) {
            //合法
            writer.println("<h1>登录OK</h1>");
            //将登录成功的用户名以cookie的形式保存到浏览器
            Cookie loginuserCookie = new Cookie("loginuser", username);
            //设置该cookie的生命周期，并将该cookie传回浏览器让浏览器保存
            loginuserCookie.setMaxAge(3600 * 24 * 3);
            response.addCookie(loginuserCookie);
        } else {
            //不合法
            writer.println("<h1>登录失败</h1>");
        }
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

```java
public class CookieUtils {
    //编写一个方法，返回指定名字的Cookie值
    public static Cookie readCookieByName(String name, Cookie[] cookies) {
        //判断传入的参数是否正确
        if (name == null || "".equals(name) || cookies == null || cookies.length == 0) {
            return null;
        }

        //遍历cookies
        for (Cookie cookie : cookies) {
            if (name.equals(cookie.getName())) {
                return cookie;
            }
        }
        return null;
    }
}
```

##### 8.2.2.9 Cookie注意事项和细节

（1）一个Cookie只能标识一种信息，它至少包含有一个标识该信息的名称（name）和值（value）

（2）一个Web站点可以给一个浏览器发送多个Cookie，一个浏览器也可以存储多个Web站点提供的Cookie

（3）Cookie的总数量没有限制，但是每个域名的Cookie数量和每个Cookie的大小是有限制的，Cookie不适合存放数据量大的信息

（4）删除Cookie时，path必须一致，否则不会删除

##### 8.2.2.10 解决Cookie中文乱码问题

如果存放中文的Cookie默认会报错，可以通过URL编码和解码来解决问题，但是也不建议存放中文的Cookie信息

```java
public class CookieUtils {
    //编写一个方法，返回指定名字的Cookie值
    public static Cookie readCookieByName(String name, Cookie[] cookies) {
        //判断传入的参数是否正确
        if (name == null || "".equals(name) || cookies == null || cookies.length == 0) {
            return null;
        }

        //遍历cookies
        for (Cookie cookie : cookies) {
            if (name.equals(cookie.getName())) {
                return cookie;
            }
        }
        return null;
    }
}
```

```java
public class EncoderCookie extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("EncoderCookie被调用");
        //1. 创建中文Cookie
        //1) 如果直接存放中文的Cookie，会报错
        //2) 解决方法就是将中文编成URL编码
        String company = URLEncoder.encode("韩顺平教育", "utf-8");
        Cookie cookie = new Cookie("company", company);
        //2. 保存到浏览器
        response.addCookie(cookie);

        //3. 读取中文Cookie
        

        //3. 给浏览器返回信息
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<h1>设置中文Cookie</h1>");
        writer.flush();
        writer.close();

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

```java
public class ReadCookie2 extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("ReadCookie2被调用");
        //读取到中文Cookie
        Cookie[] cookies = request.getCookies();
        Cookie companyCookie = CookieUtils.readCookieByName("company", cookies);
        String companyVal = companyCookie.getValue();
        //解码
        companyVal = URLDecoder.decode(companyVal, "utf-8");
        System.out.println("解码后 companyVal = " + companyVal);

        //3. 给浏览器返回信息
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<h1>设置中文Cookie</h1>");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

#### 8.2.3 Session

##### 8.2.3.1 Session有什么用

​		不同的用户登录网站后，不管该用户浏览该网站的哪个页面，都可显示登录人的名字，还可以随时去查看自己的购物车中的商品，是如何实现的？也就是说，一个用户在浏览网站的不同页面时，服务器是如何知道是张三在浏览这个页面还是李四在浏览这个页面？

​		解决之道：Session

​		（1）Session是服务器端技术，服务器在运行时为每一个用户的浏览器创建一个其独享的Session对象/集合

​		（2）由于Session为各个用户浏览器独享，所以用户在访问服务器的不同页面时，可以从各自的session中读取/添加数据，从而完成相应任务

##### 8.2.3.2 Session的基本原理

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222055854.png)

​		当用户打开浏览器访问某个网站并且操作Session时，服务器就会在内存（在服务端）为该浏览器分配一个session对象，该session对象被这个浏览器独占

​		这个session对象可以看做是一个容器/集合，session对象默认存在时间为30min（在tomcat/conf/web.xml里可以修改）

##### 8.2.3.3 Session可以做什么

（1）网上商城中的购物车

（2）保存登录用户的信息

（3）将数据放入到Session中，供用户在访问不同页面时，实现跨页面访问数据

（4）防止用户非法登录到某个页面

##### 8.2.3.4 Session存储结构

（1）session存储结构示意图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222055266.png)

（2）可以把Session看作是一个容器，类似HashMap，有两列（K-V），每一行就是session的一个属性，每个属性包含两个部分，一个是该属性的名字（String），另外一个是它的值（Object）

##### 8.2.3.5 Session域对象

​		session是一个域对象,与之id相配时就能共享它的数据。范围比request大。只要能取到对应的id即便重新发起请求也能共享数据。域对象就是一个保存数据的区域,开头说过session是一个能将用户数据保存在服务器内存中的一个对象。说到数据保存的对象就要知道如何往里面进行数据的增删改查了。

##### 8.2.3.6 Session的基本使用

（1）创建和获取Session

```java
HttpSession hs = request.getSession();
//第一次调用是创建Session会话，之后调用是获取创建好的Session对象
```

（2）向Session添加属性

```java
hs.setAttribute(String name, Object val);
```

（3）从Session得到某个属性

```java
Object obj = hs.getAttribute(String name);
```

（4）从Session删除掉某个属性

```java
hs.removeAttribute(String name);
```

（5）isNew() 判断是不是刚创建出来的Session

（6）每个Session都有1个唯一标识Id的值，通过 getId() 得到Session的会话id值

##### 8.2.3.7 Session底层实现机制

###### 8.2.3.7.1 图解

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222055593.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222055651.png)

###### 8.2.3.7.2 创建和读取Session

创建：

```java
public class CreateSession extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("CreateSession被调用");
        //1. 获取Session，同时也可能是创建Session
        HttpSession session = request.getSession();
        //2. 获取session的id
        System.out.println("当前sessionid = " + session.getId());
        //3. 给session存放数据
        session.setAttribute("email", "zs@qq.com");
        //4. 给浏览器发送一个回复
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<h1>创建/操作session成功</h1>");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

读取：

```java
public class ReadSession extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("ReadSession被调用");
        //1. 获取session，如果没有session也会创建
        HttpSession session = request.getSession();
        //2. 读取属性
        Object email = session.getAttribute("email");
        if (email != null) {
            System.out.println("session属性 email = " + (String) email);
        } else {
            System.out.println("session中没有email属性");
        }

        //3. 给浏览器回复
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<h1>读取Session成功</h1>");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

##### 8.2.3.8 Session生命周期

[Session的生命周期和工作原理_tp6 session生命周期-CSDN博客](https://blog.csdn.net/hanziang1996/article/details/78969044)

###### 8.2.3.8.1 Session生命周期概述

（1）调用 public void setMaxInactiveInterval(int interval){} 方法设置Session的超时时间（以秒为单位），超过指定的时长，Session就会被销毁

（2）interval 的值为正数的时候，设定Session的超时时长

（3）负数表示永不超时

（4）调用 public int getMaxInactiveInterval(){} 方法获取Session的超时时间

（5）调用 public void invalidate(){} 方法让当前Session会话立即无效

（6）如果没有调用 setMaxInactiveInterval() 来指定Session的生命时长，Tomcat会以Session默认时长为准，Session默认的超时为30分钟，可以在Tomcat的conf/web.xml设置

（7）Session的生命周期指的是：客户端/浏览器两次请求的最大间隔时长，而不是累积时长。即当客户端访问了自己的session，session的生命周期将从0开始重新计算（指的是同一个会话两次请求之间的间隔时间）

（8）底层：Tomcat用一个线程来轮询会话状态，如果某个会话的空闲时间超过设定的最大值，则将该会话销毁

（9）因为session是服务端维护的，所以关闭浏览器session不一定会被销毁

总结：（1）Session的生命周期指的是两次访问session的最大间隔时间（2）如果你在session没有过期的情况下操作session，则会重新开始计算session的生命周期（3）session是否过期是由服务器来维护和管理的（4）如果调用了 invaliate() 会直接将该session删除（5）如果希望删除session对象的某个属性，使用removeAttribute("xx")

###### 8.2.3.8.2 Session生命周期应用实例

创建session并设置生命周期

```java
public class CreateSession2 extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("CreateSession2被调用");
        //创建session
        HttpSession session = request.getSession();
        System.out.println("CreateSession2 sid = " + session.getId());
        //设置生命周期为 60s
        session.setMaxInactiveInterval(60);
        session.setAttribute("u", "jack");

        //回复浏览器
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<h1>创建Session成功</h1>");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

读取session

```java
public class ReadSession2 extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("ReadSession2被调用");
        //获取到到session
        HttpSession session = request.getSession();
        System.out.println("ReadSession2 sid = " + session.getId());
        //读取session的属性
        Object u = session.getAttribute("u");
        if (u != null) {
            System.out.println("读取到的session属性 u = " + (String) u);
        } else {
            System.out.println("读取不到session属性u");
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

删除该session

```java
public class DeleteSession extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("DeleteSession被调用");

        //删除整个session
        HttpSession session = request.getSession();
        session.invalidate();

        //删除session的某个属性
        //session.removeAttribute("xxx");

        //回复浏览器
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        writer.print("<h1>删除session成功</h1>");
        writer.flush();
        writer.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

##### 8.2.3.9 Session作业

需求：完成防止用户第一次直接可以登录应用管理页面的应用实例，就是第一次登录不能直接访问Manage界面，只有登录过才能直接访问

（1）只要密码为666666，我们认为就是登录成功

（2）用户名不限制

（3）如果验证成功，则进入管理页面ManageServlet.java，否则进入error.html

（4）如果用户直接访问ManageServlet.java，直接重定向到login.html

![image-20250322205556721](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222055907.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户登录</title>
</head>
<body>
<h1>用户登录</h1>
<form action="/cs/loginCheckServlet" method="post">
    用户名：<input type="text" name="username"/><br/><br/>
    密 码：<input type="password" name="password"><br><br/>
    <input type="submit" value="登录"></form>
</body>
</html>
```

```java
package com.hspedu.session.homework;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

public class ManageServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("ManageServlet被调用");
        //判断该用户是否登录过
        HttpSession session = request.getSession();
        Object loginuser = session.getAttribute("loginuser");
        if (loginuser == null) {
            //重新登陆，用请求重定向
            response.sendRedirect("/cs/userlogin.html");
            return;
        } else {
            response.setContentType("text/html;charset=utf-8");
            PrintWriter writer = response.getWriter();
            writer.println("<h1>用户管理页面</h1>");
            writer.println("欢迎你,管理员: " + (String) loginuser);
            writer.flush();
            writer.close();
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}

```

总代码：

```java
public class LoginCheckServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("LoginCheckServlet被调用");
        //1. 得到提交的用户名和密码
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        if ("666666".equals(password)) {
            //把用户名保存到session
            HttpSession session = request.getSession();
            session.setAttribute("loginuser", username);

            //请求转发到ManageServlet
            request.getRequestDispatcher("/manageServlet").forward(request,response);
        } else {
            //请求转发进入到error.html
            request.getRequestDispatcher("/error.html").forward(request,response);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
```

```java
public class ManageServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("ManageServlet被调用");
        //判断该用户是否登录过
        HttpSession session = request.getSession();
        Object loginuser = session.getAttribute("loginuser");
        if (loginuser == null) {
            //重新登陆，用请求重定向
            response.sendRedirect("/cs/userlogin.html");
            return;
        } else {
            response.setContentType("text/html;charset=utf-8");
            PrintWriter writer = response.getWriter();
            writer.println("<h1>用户管理页面</h1>");
            writer.println("欢迎你,管理员: " + (String) loginuser);
            writer.flush();
            writer.close();
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```



## 第9章 服务器端渲染技术

### 9.1 JSP

#### 9.1.1 为什么需要JSP

​		HTML可以处理静态页面，但是交互性不强；servlet可以动态处理数据，但是对于html静态页面的处理不方便，所以引出JSP

​		JSP公式：jsp = html + java代码 + 标签 + JavaScript + css

#### 9.1.2 JSP基本介绍

（1）JSP全称是Java Server Pages，Java的服务器页面，就是服务器端渲染技术

（2）JSP相比HTML而言，HTML只能为用户提供静态数据，而JSP技术允许在页面中嵌套Java代码，为用户提供动态数据；相比Servlet而言，Servlet很难对数据进行排版，而JSP除了可以用Java代码产生动态数据的同时，也很容易对数据进行排版。

（3）JSP技术基于Servlet，可以理解成JSP就是对Servlet的包装

#### 9.1.3 JSP快速入门

要引入两个包：
![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222056794.png)

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>jsp的简单的求和计算器</title>
</head>
<body>
<h1>jsp的简单的求和计算器</h1>
<% //在jsp的该标签中，可以写Java代码
    int i = 10;
    int j = 20;
    int res = i + j;
    //jsp中的内置对象，可以直接使用，比如 out
    out.println(i + " + " + j + " = " + res);
%>
</body>
</html>
```

#### 9.1.4 JSP运行原理

（1）JSP页面本质是一个Servlet程序，其性能是和Java关联的。

（2）第一次访问JSP页面的时候，Tomcat服务器会把JSP页面解析成为一个Java源文件，并且对它进行编译，编译成为 .class 字节码程序。如：Cal.jsp对应的cal_jsp.java 和 cal_jsp.class 文件

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222056215.png)

#### 9.1.5 常用的page指令

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
```

（1）language 表示jsp翻译后是什么语言文件，只支持Java

（2）contentType 表示jsp返回的数据类型，对应源码中的 response.setContentType() 参数值

（3）pageEncoding 属性表示当前jsp页面文件本身的字符集

（4）improt 属性跟Java源代码中一样，用于导包、导类等

#### 9.1.6 JSP常用脚本

##### 9.1.6.1 声明脚本基本语法

（1）声明脚本的格式是：<%! 声明 Java 代码 %>

（2）作用：定义jsp需要的属性、方法、静态代码块和内部类等

```jsp
<%--
  Created by IntelliJ IDEA.
  User: 52494
  Date: 2024/3/12
  Time: 19:55
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>jsp声明脚本</title>
</head>
<body>
<h1>jsp声明脚本</h1>

<%!
    //这里我们可以声明该jsp需要使用的属性、方法、静态代码块、内部类
    //就是给 statement.jsp 对应的 statement_jsp.java 类定义成员

    //1.属性
    private String name = "jack";
    private int age;
    private static String company;

    //2. 方法
    public String getName() {
        return name;
    }

    //3. 静态代码块
    static {
        company = "字节跳动";
    }
%>

</body>
</html>
```

##### 9.1.6.2 表达式脚本基本语法（输出脚本）

（1）表达式脚本的格式是：<%=表达式%>

（2）表达式脚本的作用是：在jsp页面上输出数据，就是想要在页面上输出想输出的东西就要用<%= %>

（3）脚本中的表达式不能以分号结束

```jsp
<%--
  Created by IntelliJ IDEA.
  User: 52494
  Date: 2024/3/12
  Time: 20:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>表达式脚本的使用</title>
</head>
<body>
<h1>个人信息</h1>
<%
   String name = "老韩";
   String email = request.getParameter("email");
%>
用户名: <%=name%><br/>
工作是: <%="java工程师"%><br/>
年龄: <%=request.getParameter("age")%><br/>
电邮: <%=email%><br/>
</body>
</html>
```

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222056152.png)

##### 9.1.6.3 代码脚本基本语法

（1）代码脚本的语法是：<% Java代码 %>

（2）代码脚本的作用是：可以在jsp页面中，编写我们需要的功能（使用Java）

（3）可以由多个代码脚本块组合完成一个完整的Java语句

（4）代码脚本还可以和表达式脚本一起组合使用，在jsp页面上输出数据

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222056580.png)

```java
public class Monster { //妖怪类
    private Integer id;
    private String name;
    private String skill;

    public Monster(Integer id, String name, String skill) {
        this.id = id;
        this.name = name;
        this.skill = skill;
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

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }
}
```

```jsp
<%@ page import="java.util.ArrayList" %>
<%@ page import="com.hspedu.entity.Monster" %><%--
  Created by IntelliJ IDEA.
  User: 52494
  Date: 2024/3/12
  Time: 20:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>演示代码脚本</title>
</head>
<body>
<h1>演示代码脚本</h1>
<%
    //创建ArrayList，放入两个monster对象
    ArrayList<Monster> monsterList = new ArrayList<>();
    monsterList.add(new Monster(1, "牛魔王", "芭蕉扇"));
    monsterList.add(new Monster(2, "蜘蛛精", "吐口水"));
%>
<table bgcolor="#f0f8ff" border="1px" width="300px">
    <tr>
        <th>id</th>
        <th>名字</th>
        <th>技能</th>
    </tr>
    <%
        for (int i = 0; i < monsterList.size(); i++) {
            //先取出monster对象
            Monster monster = monsterList.get(i);
    %>
    <tr>
        <td><%=monster.getId()%></td>
        <td><%=monster.getName()%></td>
        <td><%=monster.getSkill()%></td>
    </tr>
    <%
        }
    %>
</table>
</body>
</html>
```

#### 9.1.7 JSP内置对象

##### 9.1.7.1 基本介绍

​		JSP内置对象（指已经创建好的对象，直接使用即可），是指Tomcat在翻译jsp页面成为Servlet后，内部提供的九大对象，叫内置对象

##### 9.1.7.2 JSP九大内置对象

（1）out 向客户端输出数据，out.println("");

（2）request 客户端的http请求

（3）response 响应对象

（4）session 会话对象

（5）application 对应 ServletContext

（6）pageContext jsp 页面的上下文，是一个域对象，可以用 setAttribute()，作用范围只是本页面

（7）exception 异常对象，getMessage()

（8）config

（9）page

servlet和jsp对照着：

```java
public class HiServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("HiServlet被调用");

        //梳理Servlet中可以使用哪些对象
        PrintWriter writer = response.getWriter();
        writer.println("haha");

        request.getParameter("age");

        response.setContentType("text/html;charset=utf-8");

        HttpSession session = request.getSession();
        session.setAttribute("job", "java工程师");

        ServletContext servletContext = request.getServletContext();
        servletContext.setAttribute("count",666);

        ServletConfig servletConfig = getServletConfig();
        servletConfig.getInitParameter("pwd");

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

```jsp
<%--
  Created by IntelliJ IDEA.
  User: 52494
  Date: 2024/3/12
  Time: 21:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>jsp内置对象</title>
</head>
<body>
<h1>jsp内置对象</h1>
<%
    //梳理jsp的内置对象，与HiServlet.java的Servlet相对应
    //out 类型是 JspWriter 父类就是 Writer
    out.println("jsp out");

    //request是HttpServletRequest
    request.getParameter("age");

    //response就是HttpServletResponse
    response.sendRedirect("http://www.baidu.com");

    //session就是HttpSession
    session.setAttribute("job","PHP工程师");

    //application类型就是ServletContext
    application.setAttribute("name","老韩老师");

    //pageContext可以存放数据(属性)，但是该数据只能在本页面使用
    pageContext.setAttribute("age",100);

    //page这个内置对象，类似this

    //config内置对象的类型就是ServletConfig
    String pwd = config.getInitParameter("pwd");
%>

</body>
</html>
```

#### 9.1.8 JSP域（作用范围）对象

##### 9.1.8.1 什么是域对象

​		就是在某个范围（页面之间，文件之间）去存数据和取数据的对象

##### 9.1.8.2 JSP四大域对象

（1）pageContext(域对象，存放的数据只能在当前页面使用)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222056700.png)



（2）request(域对象，存放的数据在一次request请求期间有效，就是只要request对象没有发生变化，就能进行读和取)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222056174.png)

（3）session(域对象，存放的数据在一次会话有效)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222056526.png)

（4）application(域对象，存放的数据在整个web应用运行期间有效)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222056887.png)

##### 9.1.8.3 JSP四大域对象的演示

（1）浏览器访问jsp文件

```jsp
<%--
  Created by IntelliJ IDEA.
  User: 52494
  Date: 2024/3/13
  Time: 10:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>scope文件</title>
</head>
<body>
<%
    //在不同的域对象中，放入数据
    //因为四个域对象是不同的对象，因此name(key)相同时，并不会冲突
    pageContext.setAttribute("k1", "pageContext数据(k1)");
    request.setAttribute("k1", "request数据(k1)");
    session.setAttribute("k1", "session数据(k1)");
    application.setAttribute("k1", "application数据(k1)");
%>
<h1>四个域对象，在本页面获取数据的情况</h1>
pageContext-k1: <%=pageContext.getAttribute("k1")%><br/>
request-k1: <%=request.getAttribute("k1")%><br/>
session-k1: <%=session.getAttribute("k1")%><br/>
application-k1: <%=application.getAttribute("k1")%><br/>
</body>
</html>
```

（2）模拟进行请求转发后的情况

```java
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>scope文件</title>
</head>
<body>
<%
    //在不同的域对象中，放入数据
    //因为四个域对象是不同的对象，因此name(key)相同时，并不会冲突
    pageContext.setAttribute("k1", "pageContext数据(k1)");
    request.setAttribute("k1", "request数据(k1)");
    session.setAttribute("k1", "session数据(k1)");
    application.setAttribute("k1", "application数据(k1)");

    //做一个请求转发的操作
    request.getRequestDispatcher("/scope2.jsp").forward(request,response);
%>
<h1>四个域对象，在本页面获取数据的情况</h1>
pageContext-k1: <%=pageContext.getAttribute("k1")%><br/>
request-k1: <%=request.getAttribute("k1")%><br/>
session-k1: <%=session.getAttribute("k1")%><br/>
application-k1: <%=application.getAttribute("k1")%><br/>
</body>
</html>
```

```java
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>scope2.js</title>
</head>
<body>
<h1>四个域对象，在本页面获取数据的情况</h1>
pageContext-k1: <%=pageContext.getAttribute("k1")%><br/>
request-k1: <%=request.getAttribute("k1")%><br/>
session-k1: <%=session.getAttribute("k1")%><br/>
application-k1: <%=application.getAttribute("k1")%><br/>
</body>
</html>

```

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222056260.png)

（3）模拟重定向后的情况

```jsp
<%--
  Created by IntelliJ IDEA.
  User: 52494
  Date: 2024/3/13
  Time: 10:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>scope文件</title>
</head>
<body>
<%
    //在不同的域对象中，放入数据
    //因为四个域对象是不同的对象，因此name(key)相同时，并不会冲突
    pageContext.setAttribute("k1", "pageContext数据(k1)");
    request.setAttribute("k1", "request数据(k1)");
    session.setAttribute("k1", "session数据(k1)");
    application.setAttribute("k1", "application数据(k1)");

    //做一个请求转发的操作
    //request.getRequestDispatcher("/scope2.jsp").forward(request,response);

    //做一个重定向
    //response.sendRedirect("/jsp/scope2.jsp");
    String contextPath = request.getContextPath();//返回的就是web工程路径，即/jsp
    response.sendRedirect(contextPath + "/scope2.jsp");

%>
<h1>四个域对象，在本页面获取数据的情况</h1>
pageContext-k1: <%=pageContext.getAttribute("k1")%><br/>
request-k1: <%=request.getAttribute("k1")%><br/>
session-k1: <%=session.getAttribute("k1")%><br/>
application-k1: <%=application.getAttribute("k1")%><br/>
</body>
</html>
```

```jsp
<%--
  Created by IntelliJ IDEA.
  User: 52494
  Date: 2024/3/13
  Time: 10:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>scope2.js</title>
</head>
<body>
<h1>四个域对象，在本页面获取数据的情况</h1>
pageContext-k1: <%=pageContext.getAttribute("k1")%><br/>
request-k1: <%=request.getAttribute("k1")%><br/>
session-k1: <%=session.getAttribute("k1")%><br/>
application-k1: <%=application.getAttribute("k1")%><br/>
</body>
</html>
```

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222056099.png)

（4）模拟关闭浏览器后导致会话结束的情况

​		关闭浏览器，访问scope2.jsp

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222056451.png)

##### 9.1.8.4 JSP四大域对象的注意事项和细节

（1）域对象是可以像Map一样存取数据的对象，四个域对象功能一样，不同的是它们对数据的存储范围

（2）从存储范围（作用域范围看）：pageContext < request < session < application

#### 9.1.9 JSP请求转发标签

```java
<%--
  Created by IntelliJ IDEA.
  User: 52494
  Date: 2024/3/13
  Time: 10:55
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>aa.jsp</title>
</head>
<body>
<h1>aa.jsp</h1>
<%--
1. jsp提供了很多标签
2. jsp:forward 本质就是等价于 request.getRequestDispatcher("/bb.jsp).forword(request,response);
--%>
<jsp:forward page="/bb.jsp"></jsp:forward>
</body>
</html>
```

```java
<%--
  Created by IntelliJ IDEA.
  User: 52494
  Date: 2024/3/13
  Time: 10:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>bb.jsp</title>
</head>
<body>
<h1>bb.jsp</h1>
</body>
</html>
```

#### 9.1.10 JSP作业布置

需求分析：使用jsp完成一个简单的计算器

（1）要求在前端页面对输入的num1和num2进行校验（正则表达式），必须是整数

（2）验证成功，提交数据给服务器，能够显示结果

（3）点击超链接，可以返回界面

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222056583.png)

```jsp
<%--
  Created by IntelliJ IDEA.
  User: 52494
  Date: 2024/3/13
  Time: 11:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>JSP计算器</title>
    <!-- 使用js + 正则表达式完成数据校验 -->
    <script type="text/javascript">
        function check() {
            //得到num1 和 num2 的值
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;

            //验证 正则表达式
            var reg = /^[-]?([1-9]\d*|0)$/;
            if (!reg.test(num1)) { //如果不满足验证条件
                alert("num1 不是一个整数");
                return false;
            }
            if (!reg.test(num2)) {
                alert("num2 不是一个整数");
                return false;
            }
            return true;
        }

    </script>
</head>
<body>
<h1>JSP计算器</h1>
<form action="<%=request.getContextPath()%>/calServlet" method="post" onsubmit="return check()">
    num1: <input type="text" id="num1" name="num1"><br/>
    num2: <input type="text" id="num2" name="num2"><br/>
    运算符号:
    <select name="oper">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select><br/>
    <input type="submit" value="提交计算">
</form>
</body>
</html>
```

```java
public class CalServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("CalServlet被调用");
        //接收数据
        //String num1 = request.getParameter("num1");
        //String num2 = request.getParameter("num2");
        //把String转成int
        int num1 = WebUtils.parseInt(request.getParameter("num1"), 0);
        int num2 = WebUtils.parseInt(request.getParameter("num2"), 0);

        String oper = request.getParameter("oper");
        double res = 0;
        //完成计算
        if ("+".equals(oper)) {
            res = num1 + num2;

        } else if ("-".equals(oper)) {
            res = num1 - num2;

        } else if ("*".equals(oper)) {
            res = num1 * num2;

        } else if ("/".equals(oper)) {
            res = (double)num1 / num2;

        } else {
            System.out.println(oper + " 不正确");
        }
        //把结果保存到域对象中
        //把结果组织到一个字符串中，方便在下一个页面显示
        //String.format可以格式化字符串
        String formatRes = String.format("%s %s %s = %s", num1, oper, num2, res);
        request.setAttribute("res", formatRes);
        //转发到显示页面 calRes.jsp
        request.getRequestDispatcher("/cal/calRes.jsp").forward(request,response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

```jsp
<%--
  Created by IntelliJ IDEA.
  User: 52494
  Date: 2024/3/13
  Time: 12:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>计算结果</title>
</head>
<body>
<h1>计算结果</h1>
<%=request.getAttribute("res")%><br/>
<a href="<%=request.getContextPath()%>/cal/calUI.jsp">重新来玩一把</a>
</body>
</html>
```

```java
public class WebUtils {
    //把String转成int
    public static int parseInt(String strNum, int defaultVal) {
        try {
            return Integer.parseInt(strNum);
        } catch (NumberFormatException e) {
            System.out.println(strNum + " 不能转成整数...");
        }
        return defaultVal;
    }
}
```

### 9.2 EL表达式

#### 9.2.1 EL表达式介绍

（1）EL表达式主要是代替jsp页面的表达式脚本<%=request.getAttribute("xx")%>

（2）EL表达式输出数据时，比jsp的表达式脚本简洁

（3）EL表达式基本语法：${key1}, 可以理解就是一个语法糖

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>el表达式的快速入门</title>
</head>
<body>
<h1>el表达式的快速入门</h1>
<%
    request.setAttribute("name","韩顺平教育");
%>
<%--
    1. 如果name是null，request.getAttribute() 返回的是null字符串
    2. 如果name是null，${name},返回的是 ""
--%>

<h1>jsp表达式脚本</h1>
名字 = <%=request.getAttribute("name")%><br/>
<h1>el 表达式</h1>
名字 = ${name}<br/>
</body>
</html>
```

#### 9.2.2 EL表达式的输出形式

```java
public class Book {
    private String name;
    private String[] writer;
    private List<String> reader;
    private Map<String,String> topics;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String[] getWriter() {
        return writer;
    }

    public void setWriter(String[] writer) {
        this.writer = writer;
    }

    public List<String> getReader() {
        return reader;
    }

    public void setReader(List<String> reader) {
        this.reader = reader;
    }

    public Map<String, String> getTopics() {
        return topics;
    }

    public void setTopics(Map<String, String> topics) {
        this.topics = topics;
    }

    @Override
    public String toString() {
        return "Book{" +
                "name='" + name + '\'' +
                ", writer=" + Arrays.toString(writer) +
                ", reader=" + reader +
                ", topics=" + topics +
                '}';
    }
}
```

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>el 表达式输出数据演示</title>
</head>
<body>
<h1>el 表达式输出数据演示</h1>
<%
    //创建Book对象，放入相关的属性
    Book book = new Book();
    book.setName("昆虫总动员");
    book.setWriter(new String[]{"jack","tom"});
    ArrayList<String> readers = new ArrayList<>();
    readers.add("老韩");
    readers.add("老李");
    book.setReader(readers);

    //创建topics
    HashMap<String, String> topics = new HashMap<>();
    topics.put("topic1", "这是我看过的最好的动画片");
    topics.put("topic2", "不错的电影~~");
    book.setTopics(topics);

    //把book对象放入到request域对象
    request.setAttribute("bookkey", book);
    
%>
book对象: ${bookkey}<br/>
<%-- ${bookkey.name} 调用的就是 getName() 方法 --%>
book.name= ${bookkey.name}<br/>
book.writer= ${bookkey.writer}<br/>
book.writer[0]= ${bookkey.writer[0]}<br/>
book.readers= ${bookkey.reader}<br/>
book.readers第2个= ${bookkey.reader.get(1)}<br/>
book.readers第2个= ${bookkey.reader[1]}<br/>

book.topics= ${bookkey.topics}<br/>
book.topics第一个评论= ${bookkey.topics["topic1"]}<br/>
</body>
</html>
```

#### 9.2.3 EL运算操作

（1）基本语法：${ 运算表达式 }

（2）关系运算

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222057240.png)

（3）逻辑运算

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222057931.png)

（4）算数运算

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222057546.png)

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>el的运算符</title>
</head>
<body>
<h1>el的运算符</h1>
<%
    request.setAttribute("num1", 90);
    request.setAttribute("num2", 30);
%>
num1 + num2 =${num1 + num2}<br/>
num1 > num2 =${num1 > num2}<br/>
</body>
</html>
```

#### 9.2.4 EL的empty运算

（1）empty运算可以判断一个数据是否为空，如果为空，返回true，否则返回false

（2）以下几种情况为空：

​				值为null

​				值为空串

​				值是Object类型数组，长度为零

​				list集合，元素个数为零

​				map集合，元素个数为零

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>el_empty的运算</title>
</head>
<body>
<h1>el_empty的运算</h1>
<%
    request.setAttribute("k1", null);
    request.setAttribute("k2", "");
    request.setAttribute("k3", new Object[]{});
    request.setAttribute("k4", new ArrayList<>());
    request.setAttribute("k5",new HashMap<>());
%>
k1是否为空= ${empty k1}<br/>
k2是否为空= ${empty k2}<br/>
k3是否为空= ${empty k3}<br/>
k4是否为空= ${empty k4}<br/>
k5是否为空= ${empty k5}<br/>
</body>
</html>
```

#### 9.2.5 EL的三元运算

（1）表达式1 ? 表达式2 : 表达式3

（2）如果表达式1的值为真，返回表达式2的值，反之，返回表达式3的值

#### 9.2.6 EL的11个隐含对象

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222057184.png)

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>EL 获取四个特定域中的属性</title>
</head>
<body>
<h1>EL 获取四个特定域中的属性</h1>
<%
pageContext.setAttribute("key1", "pageContext_key1 的值");
pageContext.setAttribute("key2", "pageContext_key2 的值");
request.setAttribute("key1", "request_key1 的值");
session.setAttribute("key1", "session_key1 的值");
application.setAttribute("key1", "application_key1 的值");
%>
<hr/>
application 的 key1: ${applicationScope.key1 }<br/>
pageContext 的 key1: ${pageScope.key1 }<br/>
session 的 key1: ${sessionScope.key1 }<br/>
request 的 key1: ${requestScope.key1 }<br/>
</body>
</html>
```

pageContext 对象的使用

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>pageContext 对象的使用</title>
</head>
<body>
<h1>pageContext 对象的使用</h1>
<%--
//通过 request 对象来获取和 HTTP 协议相关的数据
request.getScheme() 它可以获取请求的协议
request.getServerName() 获取请求的服务器 ip 或域名
request.getServerPort() 获取请求的服务器端口号
getContextPath() 获取当前工程路径
request.getMethod() 获取请求的方式（GET 或 POST）
request.getRemoteHost() 获取客户端的 ip 地址
session.getId() 获取会话的唯一标识
--%>
<hr/>
协议： ${ pageContext.request.scheme }<br>
服务器 ip：${ pageContext.request.serverName }<br>
服务器端口：${ pageContext.request.serverPort }<br>
工程路径：${ pageContext.request.contextPath }<br>
请求方法：${ pageContext.request.method }<br>
客户端 ip 地址：${ pageContext.request.remoteHost }<br>
会话 id ：${ pageContext.session.id }<br>
<h1>使用 jsp 表达式脚本获取如上信息</h1>
ip 地址: <%=request.getRemoteHost() %> <br>
<h1>使用 el 表达式形式获取信息</h1>
<%
pageContext.setAttribute("req", request);
%>
ip 地址: ${req.remoteHost} <br>
获取请求方法: ${req.method} <br>
</body>
</html>
```

### 9.3 JSTL标签库

#### 9.3.1 JSTL快速入门

（1）EL表达式是为了替换jsp中的表达式脚本，JSTL是为了替换代码脚本，这样使jsp页面变得更加整洁

（2）JSTL由五个标签库组成

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222057766.png)

（3）使用JSTL，需要导入相关的jar包

```jsp
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>jstl的快速入门</title>
</head>
<body>
<h1>jstl的快速入门</h1>
<c:if test="${10 > 2}">
    <h1>10 > 2 成立</h1>
</c:if>
</body>
</html>
```

#### 9.3.2 <c:set />

（1）语法：<c:set scope="request" var="username" value="韩顺平教育" />

（2）<c:set /> set标签可以往域中保存数据，等价 域对象.setAttribute(key,value);

（3）scope属性设置保存到哪个域

​		1）page 表示 PageContext 域（默认值）

​		2）request 表示 Request 域

​		3）session 表示 Session 域

​		4）application 表示 ServletContext 域

（4）var 属性设置 key 是什么

（5）value 属性设置值

#### 9.3.3 <c:if />

（1）语法：<c:if test="${ 10 > 2}"> hello < /c:if>

（2）if标签用来做if判断

（3）test属性表示判断的条件（用EL表达式输出）

```jsp
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>c:if 标签使用</title>
</head>
<body>
<h1>c:if 标签使用</h1>
<hr/>
<%--<c:if />
1. if 标签用来做 if 判断。
2. test 属性表示判断的条件（用 EL 表达式输出）
--%>
<c:if test="${ 10 > 2 }">
<h1>10 > 2 为真</h1>
</c:if>
</body>
</html>
```

#### 9.3.4 <c:choose > <c:when > <c:otherwise > 标签

（1）多路判断，跟 switch ... case ... default 非常接近

```jsp
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>jstl_choose 标签使用</title>
</head>
<body>
<h1>jstl_choose 标签使用</h1>
<hr/>
<%--
	1.如果 ${ requestScope.money} 那么就明确的指定从request域对象取出数据
    2.如果 ${score}，就按照从小到大的域范围去获取 pageContext->request->session
--%>
<% request.setAttribute("money", 100000); %>
<c:choose>
	<c:when test="${ requestScope.money > 20000 }">
		有钱人
	</c:when>
	<c:when test="${ requestScope.money > 15000 }">
		比较有钱
	</c:when>
<c:otherwise>
<c:choose>
	<c:when test="${ requestScope.money > 10000 }">
		没啥钱
	</c:when>
	<c:when test="${requestScope.money > 5000}">
		只够温饱了
	</c:when>
<c:otherwise>吃了饭，没钱租房了</c:otherwise>
</c:choose>
</c:otherwise>
</c:choose>
</body>
</html>
```

#### 9.3.5 <c:forEach />标签

（1）c:forEach 标签用来遍历输出，主要有4种形式

​			普通遍历输出i到j

​			遍历数组

​			遍历Map

​			遍历List

```jsp
<%--
  Created by IntelliJ IDEA.
  User: 52494
  Date: 2024/3/13
  Time: 21:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.util.Map" %>
<%@ page import="java.util.HashMap" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.List" %>
<%@ page import="com.hspedu.entity.Monster" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>c:forEach 标签</title>
</head>
<body>
    <h1>c:forEach 标签</h1>
    <hr/>

    <h1>第 1 种遍历方式从 i 到 j</h1>
    <ul>
        <%-- 1.遍历 1 到 5，
        2. 输出 begin 属性设置开始的索引 end 属性设置结束的索引
        3. var 属性表示循环的变量(也是当前正在遍历到的数据)
        4. 等价 for (int i = 1; i <= 5; i++) {}
        5. 在默认情况下，i每次都会递增1
        --%>
        <c:forEach begin="1" end="5" var="i">
            <li>排名=${i}</li>
        </c:forEach>
    </ul>
    <hr/>

    <h1>第 2 种遍历方式：遍历数组</h1>
    <%
        request.setAttribute("sports", new String[]{"打篮球", "乒乓球"});
    %>
    <%--<c:forEach items="${ requestScope.sports }" var="item"/>
        1. items 遍历的集合
        2. var 遍历到的数据
        3. 等价 for (Object item: arr) {}
    --%>
    <c:forEach items="${requestScope.sports}" var="sport">
        运动名称= ${sport}<br/>
    </c:forEach>
    <hr/>

    <h1>第 3 种遍历方式：遍历 Map</h1>
    <%
        Map<String, Object> map = new HashMap<>();
        map.put("key1", "北京");
        map.put("key2", "上海");
        map.put("key3", "天津");
        request.setAttribute("map", map);
    %>
    <%--1. items 遍历的 map 集合
        2. var 遍历到的数据
        3. entry.key 取出 key
        4. entry.value 取出值
    --%>
    <c:forEach items="${requestScope.cities}" var="city">
        城市信息: ${city.key}--${city.value}<br/>
    </c:forEach>
    <hr/>

    <h1>第 4 种遍历方式：遍历 List</h1>
    <%
        List<Monster> monsters = new ArrayList<>();
        monsters.add(new Monster(100, "小妖怪", "巡山的"));
        monsters.add(new Monster(200, "大妖怪", "做饭的"));
        monsters.add(new Monster(300, "老妖怪", "打扫位置的"));
        request.setAttribute("monsters", monsters);
    %>
    <%--
        items 表示遍历的集合
        var 表示遍历到的数据
        begin 表示遍历的开始索引值 ,从 0 开始计算
        end 表示结束的索引值
        step 属性表示遍历的步长值
        varStatus 属性表示当前遍历到的数据的状态,可以得到 step,begin,end 等属性值
    --%>
    <c:forEach items="requestScope.monsters" var="monster">
        妖怪的信息: ${monster.id}-${monster.name}-${monster.skill}<br/>
    </c:forEach>
</body>
</html>
```

```java
public class Monster { //妖怪类
    private Integer id;
    private String name;
    private String skill;

    public Monster(Integer id, String name, String skill) {
        this.id = id;
        this.name = name;
        this.skill = skill;
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

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }
}
```

#### 9.3.6 作业



## 第10章 监听器Listener+过滤器Filter

### 10.1 Listener监听器

#### 10.1.1 Listener监听器介绍

（1）Listener 监听器是JavaWeb的三大组件之一，JavaWeb的三大组件分别是：Servlet程序、Listener监听器、Filter过滤器。

（2）Listener是JavaEE的规范，就是接口

（3）监听器的作用是：监听某种变化（一般就是对象的创建/销毁、属性变化），触发对应方法完成相应的任务

（4）JavaWeb中的监听器（共八个），目前最常用的是ServletContextListener

#### 10.1.2 JavaWeb的监听器

##### 10.1.2.1 ServletContextListener监听器

（1）作用：监听ServletContext的创建或销毁（当Web应用启动时，就会创建ServletContext），即监听生命周期

（2）应用场景：1）加载初始化的配置文件，比如spring的配置文件； 2）任务调度（配合定时器Timer/TimerTask）

（3）相关方法：

​			void contextInitialized(ServletContextEvent sce) 创建 ServletContext时触发

​			void contextDestroyed(ServletContextEvent sce) 销毁 ServletContext时触发

```java
/**
 * 1. 当一个类实现了 ServletContextListener时，该类就是一个监听器
 * 2. 该类可以监听的事件由该类实现的监听接口决定，比如实现了ServletContextListener接口的类就可以监听ServletContext对象的创建的销毁
 * 3. 此时HspServletContextListener 就是一个监听器
 * 4. 当web应用启动时，就会产生 ServletContextEvent 事件，会调用监听器的对应事件处理方法即 contextInitialized 方法，同时会传递事件对象
 * 5. 程序员可以通过 ServletContextEvent 事件对象来获取需要的信息，然后再进行业务处理
 * 6. Tomcat怎么知道这个监听器的存在? 因为我们需要在web.xml中配置
 * */
public class HspServletContextListener implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        ServletContext servletContext = servletContextEvent.getServletContext();
        System.out.println("HspServletContextListener 监听到 " +
                servletContext + " 被创建..");
        //如果我们获取到ServletContext对象，就可以进行业务处理
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
        ServletContext servletContext = servletContextEvent.getServletContext();
        System.out.println("HspServletContextListener 监听到 " +
                servletContext + " 被销毁..");

        //比如可以对ServletContext数据进行处理，或者日志的管理
        System.out.println("进行处理工作");
    }
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    
    <!-- 配置监听器 -->
    <listener>
        <listener-class>com.hspedu.listener.HspServletContextListener</listener-class>
    </listener>
</web-app>
```

##### 10.1.2.2 ServletContextAttributeListener监听器

（1）作用：监听ServletContext的属性的变化

（2）相关方法：

​			1）void attributeAdded(ServletContextAttributeEvent event) 添加属性时调用

​			2）void attributeReplaced(ServletContextAttributeEvent event) 替换属性时调用

​			3）void attributeRemoved(ServletContextAttributeEvent event) 移除属性时调用

```java
public class HspServletContextAttributeListener implements ServletContextAttributeListener {
    @Override
    public void attributeAdded(ServletContextAttributeEvent servletContextAttributeEvent) {
        System.out.println("HspServletContextAttributeListener监听到有属性的添加 " +
                servletContextAttributeEvent.getName() + " = " +
                servletContextAttributeEvent.getValue());
    }

    @Override
    public void attributeRemoved(ServletContextAttributeEvent servletContextAttributeEvent) {
        System.out.println("HspServletContextAttributeListener监听到有属性的删除 " +
                servletContextAttributeEvent.getName() + " = " +
                servletContextAttributeEvent.getValue());
    }

    @Override
    public void attributeReplaced(ServletContextAttributeEvent servletContextAttributeEvent) {
        System.out.println("HspServletContextAttributeListener监听到有属性的修改 " +
                servletContextAttributeEvent.getName() + " = " +
                servletContextAttributeEvent.getValue());
    }
}
```

```xml
<listener>
        <listener-class>com.hspedu.listener.HspServletContextAttributeListener</listener-class>
    </listener>
    <servlet>
        <servlet-name>HiServlet</servlet-name>
        <servlet-class>com.hspedu.servlet.HiServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>HiServlet</servlet-name>
        <url-pattern>/hiServlet</url-pattern>
    </servlet-mapping>
```

```java
public class HiServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("HiServlet被调用");
        //给ServletContext对象操作属性
        ServletContext servletContext = request.getServletContext();
        servletContext.setAttribute("name", "韩顺平教育");
        servletContext.setAttribute("name", "老韩教育");
        servletContext.removeAttribute("name");
        System.out.println("HiServlet处理完毕");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
```

##### 10.1.2.3 HttpSessionListener监听器

（1）作用：监听Session创建或销毁，即生命周期的监听

（2）相关方法

​			1）void sessionCreated(HttpSessionEvent se) 创建session时调用

​			2）void sessionDestroyed(HttpSessionEvent se) 销毁session时调用

（3）使用方法和前面一样，可以用于监控用户上线、离线

```java
public class HspHttpSessionListener implements HttpSessionListener {
    @Override
    public void sessionCreated(HttpSessionEvent httpSessionEvent) {
        HttpSession session = httpSessionEvent.getSession();
        //当session创建时，我们给它设置一个生命周期为 30s
        session.setMaxInactiveInterval(30);
        System.out.println("HspHttpSessionListener 监听到 session创建 = " + session.getId());

        System.out.println("用户id = " + session.getId() + " 上线");
    }

    @Override
    public void sessionDestroyed(HttpSessionEvent httpSessionEvent) {
        HttpSession session = httpSessionEvent.getSession();
        System.out.println("HspHttpSessionListener 监听到 session销毁 = " + session.getId());
        System.out.println("用户id = " + session.getId() + " 离线");
    }
}
```

```java
public class HttpSessionListenerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("HttpSessionListenerServlet被调用");

        //获取session对象
        HttpSession session = request.getSession();

        System.out.println("HttpSessionListenerServlet处理完毕");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
```

##### 10.1.2.4 HttpSessionAttributeListener监听器

（1）作用：监听Session属性的变化

（2）相关方法：

​				void attributeAdded(ServletRequestAttributeEvent srae) 添加属性时

​				void attributeReplaced(ServletRequestAttributeEvent srae) 替换属性时

​				void attributeRemoved(ServletRequestAttributeEvent srae) 移除属性时

（3）使用少，使用方法和前面一样

```java
public class HspHttpSessionAttributeListener implements HttpSessionAttributeListener {
    @Override
    public void attributeAdded(HttpSessionBindingEvent httpSessionBindingEvent) {
        HttpSession session = httpSessionBindingEvent.getSession();
        System.out.println("HspHttpSessionAttributeListener 监听到session添加属性 = " +
                httpSessionBindingEvent.getName() + " = " + httpSessionBindingEvent.getValue());
    }

    @Override
    public void attributeRemoved(HttpSessionBindingEvent httpSessionBindingEvent) {
        HttpSession session = httpSessionBindingEvent.getSession();
        System.out.println("HspHttpSessionAttributeListener 监听到session删除属性 = " +
                httpSessionBindingEvent.getName());
    }

    @Override
    public void attributeReplaced(HttpSessionBindingEvent httpSessionBindingEvent) {
        HttpSession session = httpSessionBindingEvent.getSession();
        System.out.println("HspHttpSessionAttributeListener 监听到session修改属性 = " +
                httpSessionBindingEvent.getName());
    }
}
```

```java
public class HttpSessionAttributeListenerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("HttpSessionAttributeListenerServlet被调用");
        HttpSession session = request.getSession();
        session.setAttribute("age", 100);
        session.setAttribute("age", 400);
        session.removeAttribute("age");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
```

##### 10.1.2.5 ServletRequestListener监听器

（1）作用：监听Request创建或销毁，即Request生命周期的监听

（2）相关方法：

​				void requestInitialized(ServletRequestEvent sre) 创建request时

​				void requestDestroyed(ServletRequestEvent sre) 销毁request时

（3）可以用来监控某个IP访问我们网站的频率、日志记录和访问资源等的情况

```java
public class HspRequestListener implements ServletRequestListener {
    @Override
    public void requestInitialized(ServletRequestEvent servletRequestEvent) {
        System.out.println("HspRequestListener 监听到 request 对象创建");
        ServletRequest servletRequest = servletRequestEvent.getServletRequest();
        System.out.println("记录访问日志.....");
        System.out.println("访问IP = " + servletRequest.getRemoteAddr());
        System.out.println("访问的资源 = " + ((HttpServletRequest)servletRequest).getRequestURL());
    }

    @Override
    public void requestDestroyed(ServletRequestEvent servletRequestEvent) {
        System.out.println("HspRequestListener 监听到 request 对象被销毁");
    }
}
```

##### 10.1.2.6 ServletRequestAttributeListener监听器

（1）作用：监听Request属性的变化

（2）相关方法：

​				void attributeAdded(ServletRequestAttributeEvent srae) 添加属性时

​				void attributeReplaced(ServletRequestAttributeEvent srae) 替换属性时

​				void attributeRemoved(ServletRequestAttributeEvent srae) 移除属性时

（3）使用方法和前面类似

##### 10.1.2.7 HttpSessionBindingListener感知监听器

##### 10.1.2.8 HttpSessionActivationListener感知监听器

### 10.2 过滤器Filter

#### 10.2.1 Filter过滤器说明

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222057780.png)

（1）Filter过滤器它是JavaWeb的三大组件之一（Servlet程序、Listener监听器、Filter过滤器）

（2）Filter过滤器是JavaEE的规范，是接口

（3）Filter过滤器的作用是：拦截请求、过滤响应

（4）应用场景：权限检查、日记操作、事务管理

#### 10.2.2 Filter过滤器基本原理

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222057925.png)

#### 10.2.3 Filter过滤器快速入门

​		需求：在web工程下，有后台管理目录manage，要求该目录下的所有资源（html、图片、jsp、Servlet等）用户登录后才能访问

##### 10.2.3.1 第一步：画图理解需求

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222057715.png)

##### 10.2.3.2 第二步：先完成整体框架

（1）登录页面：

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>管理后台登录</title>
</head>
<body>
<h1>管理后台登录</h1>
<form action="<%=request.getContextPath() %>/loginCheckServlet" method="post">
    u：<input type="text" name="username"/> <br/><br/>
    p：<input type="password" name="password"/> <br/><br/>
    <input type="submit" value="用户登录"/></form>
</body>
</html>
```

（2）从登录页面获取用户名和密码，并且验证（用Servlet完成），验证通过就跳转到管理员页面，验证失败就跳到登录页面

```java
public class LoginCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //获取到用户名和密码
        //假设密码是123456,就可以通过
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        if ("123456".equals(password)) {
            //合法
            //请求转发到admin.jsp
            request.getRequestDispatcher("/manage/admin.jsp").forward(request,response);
        } else {
            //不合法，返回到登录页面
            request.getRequestDispatcher("/login.jsp").forward(request,response);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
```

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>后台管理</title>
    <base href="<%=request.getContextPath() %>/manage/"/>
</head>
<body>
<h1>后台管理</h1>
<a href="#">用户列表</a>||<a href="#">添加用户</a>||<a href="#">删除用户</a>
<hr/>
<img src="1.png" height="300"/>
</body>
</html>
```

##### 10.2.3.3 第三步：加入其它功能

（1）加入session，验证合法性

登录页面

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>管理后台登录</title>
</head>
<body>
<h1>管理后台登录</h1>
<form action="<%=request.getContextPath() %>/loginCheckServlet" method="post">
    u：<input type="text" name="username"/> <br/><br/>
    p：<input type="password" name="password"/> <br/><br/>
    <input type="submit" value="用户登录"/></form>
</body>
</html>
```

Servlet页面

```java
public class LoginCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //获取到用户名和密码
        //假设密码是123456,就可以通过
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        if ("123456".equals(password)) {
            //合法
            //合法的话就把用户名加入到session
            request.getSession().setAttribute("username", username);
            //请求转发到admin.jsp
            request.getRequestDispatcher("/manage/admin.jsp").forward(request,response);
        } else {
            //不合法，返回到登录页面
            request.getRequestDispatcher("/login.jsp").forward(request,response);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
```

过滤器页面

```java
public class ManageFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        //当Tomcat创建 Filter 后，就会调用该方法进行初始化
        System.out.println("ManageFilter init 被调用...");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        //当每次调用该Filter时，doFilter就会被调用
        System.out.println("ManageFilter doFilter被调用...");
        //如果往下再不写代码，即没有继续调用请求的方法，就会停止在这

        //如果继续访问目标资源
        //在调用过滤器前，request对象已经被创建并封装成servletRequest对象
        //所以，这里就可以通过servletRequest获取很多信息，比如访问url、session、访问的参数等

        //获取Session信息，因为无法直接从ServletRequest中获取Session，所以进行强转
        HttpSession session = ((HttpServletRequest) servletRequest).getSession();
        if (session.getAttribute("username") != null) { //用户登录成功过，直接放行
            filterChain.doFilter(servletRequest,servletResponse);//这就话等价于放行
        } else { //说明没有登录过,回到登录页面
            servletRequest.getRequestDispatcher("/login.jsp").forward(servletRequest, servletResponse);
        }
    }

    @Override
    public void destroy() {
        //当filter被销毁时，会调用该方法
        System.out.println("ManageFilter destroy被调用");
    }
}
```

过滤器配置页面

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
<!--    filter一般写在其它Servlet的前面-->
    <!--
        url-pattern: 就是当请求资源的url和其匹配的时候就会调用该Filter
        /manage/*: 第一个 / 解析成 http://ip:port/工程路径
        /manage/* 的完整路径就是 http://ip:port/工程路径/manage/* ,如果请求的资源是manage目录下的任何资源都会触发这个Filter
        所以此时我们如果直接在地址栏请求manage目录下的admin.jsp时就会触发filter
    -->
    <filter>
        <filter-name>ManageFilter</filter-name>
        <filter-class>com.hspedu.filter.ManageFilter</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>ManageFilter</filter-name>
        <url-pattern>/manage/*</url-pattern>
    </filter-mapping>

    <servlet>
        <servlet-name>LoginCheckServlet</servlet-name>
        <servlet-class>com.hspedu.servlet.LoginCheckServlet</servlet-class>
    </servlet>
    
    <servlet-mapping>
        <servlet-name>LoginCheckServlet</servlet-name>
        <url-pattern>/loginCheckServlet</url-pattern>
    </servlet-mapping>
</web-app>
```

管理员页面

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>后台管理</title>
    <base href="<%=request.getContextPath() %>/manage/"/>
</head>
<body>
<h1>后台管理</h1>
<a href="#">用户列表</a>||<a href="#">添加用户</a>||<a href="#">删除用户</a>
<hr/>
<img src="1.png" height="300"/>
</body>
</html>
```

##### 10.2.3.4 第四步：优化代码

```java
public class ManageFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        //当Tomcat创建 Filter 后，就会调用该方法进行初始化
        System.out.println("ManageFilter init 被调用...");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        //当每次调用该Filter时，doFilter就会被调用
        System.out.println("ManageFilter doFilter被调用...");
        //如果往下再不写代码，即没有继续调用请求的方法，就会停止在这

        //如果继续访问目标资源
        //在调用过滤器前，request对象已经被创建并封装成servletRequest对象
        //所以，这里就可以通过servletRequest获取很多信息，比如访问url、session、访问的参数等

        //获取Session信息，因为无法直接从ServletRequest中获取Session，所以进行强转

        //优化2: 可以继续使用HttpServletRequest方法
        //HttpSession session = ((HttpServletRequest) servletRequest).getSession();
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        HttpSession session = httpServletRequest.getSession();

        //优化1:这里先获取 username 的 session 对象，这样在后面可以继续使用
        Object username = session.getAttribute("username");
        if (username != null) { //用户登录成功过，直接放行
            /**
             * filterChain.doFilter(servletRequest,servletResponse)
             * 会继续访问目标资源url
             * ServletRequest和servletResponse 对象会传递给目标资源/文件
             * servletRequest 和 servletResponse 在一次http请求中与servlet和jsp里的Request 和 Response 是同一个对象
             * */
            filterChain.doFilter(servletRequest,servletResponse);//这就话等价于放行
        } else { //说明没有登录过,回到登录页面
            servletRequest.getRequestDispatcher("/login.jsp").forward(servletRequest, servletResponse);
        }
    }

    @Override
    public void destroy() {
        //当filter被销毁时，会调用该方法
        System.out.println("ManageFilter destroy被调用");
    }
}
```

#### 10.2.4 Filter过滤器的url-pattern

（1）url-pattern: Filter的拦截路径，即浏览器在请求什么位置的资源时，过滤器会进行拦截过滤

（2）精确匹配：  `<url-pattern>/a.jsp</url-pattern>`，对应的请求地址 `http://ip[域名]:port/工程路径/a.jsp` 会被拦截

（3）目录匹配：`<url-pattern>/manage/*</url-pattern>` ，对应的请求地址 `http://ip[域名]:port/工程路径/manage/xx` ，即web工程manage目录下的所有资源都会被拦截

（4）后缀名匹配：`<url-pattern>*.jsp</url-pattern>` 后缀名可变，比如 `*.action、*.do` 等，对应的请求地址 `http://ip[域名]:port/工程路径/xx.jsp` 后缀名为 .jsp 的请求会被拦截

（5）Filter过滤器只关心请求的地址是否匹配，不关心请求的资源是否存在

#### 10.2.5 Filter过滤器的生命周期

​		Filter过滤器在web启动时，由Tomcat来创建Filter实例，只会创建一个

​		会调用Filter默认的无参构造器，并且会调用init方法，只会调用一次

​		在创建Filter实例时，同时会创建一个FilterConfig对象，并通过init方法传入

​		通过FilterConfig对象，可以获取该Filter的相关配置信息

​		当一个http请求地址和该Filter的url-pattern匹配时，就会调用doFilter方法

​		在调用doFilter方法时，Tomcat会同时创建ServletRequest 和 ServletResponse 和 FilterChain对象，并通过doFilter传入，如果后面的请求目标资源会使用到Request和Response对象，那么就可以使用ServletRequest 和 ServletResponse对象，因为ServletRequest 和 ServletResponse对象和Request和Response对象是同一个对象

#### 10.2.6 FilterConfig的基本使用

##### 10.2.6.1 FilterConfig的基本说明

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222057863.png)

（1）FilterConfig是Filter过滤器的配置类

（2）Tomcat每次创建Filter的时候，也会创建一个FilterConfig对象，这里包含了Filter配置文件的配置信息

（3）FilterConfig对象作用是获取Filter过滤器的配置内容

```xml
<filter>
        <filter-name>HspFilterConfig</filter-name>
        <filter-class>com.hspedu.filter.HspFilterConfig</filter-class>
        <!--这里就是给该Filter配置的参数-由程序员根据业务逻辑来设置-->
        <init-param>
            <param-name>ip</param-name>
            <param-value>166.66.66.66</param-value>
        </init-param>
        <init-param>
            <param-name>port</param-name>
            <param-value>8888</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>HspFilterConfig</filter-name>
        <url-pattern>/abc/*</url-pattern>
    </filter-mapping>
```

```java
public class HspFilterConfig implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("HspFilterConfig init() 被调用");
        //通过FilterConfig获取相关的参数
        String filterName = filterConfig.getFilterName();
        String ip = filterConfig.getInitParameter("ip");
        ServletContext servletContext = filterConfig.getServletContext();
        //这个可以获取到所有配置的参数名
        Enumeration<String> initParameterNames = filterConfig.getInitParameterNames();

        System.out.println("filterName = " + filterName);
        System.out.println("ip = " + ip);
        System.out.println("servletContext = " + ip);
        //遍历枚举类型(Enumeration)
        while (initParameterNames.hasMoreElements()) {
            System.out.println("配置信息的名字 = " + initParameterNames.nextElement());
        }
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

    }

    @Override
    public void destroy() {

    }
}
```

##### 10.2.6.2 FilterConfig的实例

​		封杀访问ip是128.12的网段，即只要是含有128.12的ip访问我们，我们就返回登录页面

```java
public class HspFilterConfig implements Filter {
    private String ip; //从配置里获取的ip

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("HspFilterConfig init() 被调用");
        //通过FilterConfig获取相关的参数
        String filterName = filterConfig.getFilterName();
        ip = filterConfig.getInitParameter("ip");
        ServletContext servletContext = filterConfig.getServletContext();
        //这个可以获取到所有配置的参数名
        Enumeration<String> initParameterNames = filterConfig.getInitParameterNames();

        System.out.println("filterName = " + filterName);
        System.out.println("ip = " + ip);
        System.out.println("servletContext = " + ip);
        //遍历枚举类型(Enumeration)
        while (initParameterNames.hasMoreElements()) {
            System.out.println("配置信息的名字 = " + initParameterNames.nextElement());
        }
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        //获取浏览器请求的ip，与配置里获取的ip进行比对
        //先获取浏览器请求的ip
        String remoteAddr = servletRequest.getRemoteAddr();
        if (remoteAddr.contains(ip)) {
            System.out.println("封杀该网段..");
            servletRequest.getRequestDispatcher("/login.jsp").forward(servletRequest, servletResponse);
            return; //直接返回
        } else {
            filterChain.doFilter(servletRequest, servletResponse);
        }
    }

    @Override
    public void destroy() {

    }
}
```

#### 10.2.7 FilterChain过滤器链

##### 10.2.7.1 FilterChain过滤器链的基本原理

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222058878.png)

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>hi</title>
</head>
<body>
<h1>admin 目录下的 hi.jsp</h1>
<h1>后台管理</h1>
<a href="#">用户列表</a>||<a href="#">添加用户</a>||<a href="#">删除用户</a>
<hr/>
</body>
</html>
```

```xml
<filter>
        <filter-name>AFilter</filter-name>
        <filter-class>com.hspedu.filter.AFilter</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>AFilter</filter-name>
        <url-pattern>/admin/*</url-pattern>
    </filter-mapping>

    <filter>
        <filter-name>BFilter</filter-name>
        <filter-class>com.hspedu.filter.BFilter</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>BFilter</filter-name>
        <url-pattern>/admin/*</url-pattern>
    </filter-mapping>
```

```java
public class AFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println("AFilter doFilter 的前置代码被调用...");
        filterChain.doFilter(servletRequest, servletResponse);
        System.out.println("AFilter doFilter 的后置代码被调用...");

    }

    @Override
    public void destroy() {

    }
}
```

```java
public class BFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println("BFilter doFilter 的前置代码被调用...");
        filterChain.doFilter(servletRequest, servletResponse);
        System.out.println("BFilter doFilter 的后置代码被调用...");
    }

    @Override
    public void destroy() {

    }
}
```

##### 10.2.7.2 FilterChain过滤器链的注意事项和细节

（1）多个Filter和目标资源在一次http请求中的话，在同一个线程中

（2）当有一个请求的url和Filter的url-pattern匹配时才会执行；如果有多个匹配上，就会顺序执行，形成一个Filter调用链

（3）多个Filter共同执行时，因为是一次http请求，使用同一个Request对象

（4）多个Filter执行顺序和web.xml配置顺序保持一致

（5）chain.doFilter(req,resp) 方法将执行下一个过滤器的doFilter方法，如果后面没有过滤器，则执行目标资源

#### 10.2.8 Filter过滤器作业

需求分析：使用过滤器，完成如下要求：

（1）点击发表评论页面topic.jsp，可以在showTopic.jsp显示评论内容

（2）如果发表的评论内容有关键字比如"苹果"、"香蕉"，就返回topic.jsp，并提示有禁用词

（3）要求发表评论到showTopic.jsp时，经过过滤器的处理

（4）禁用词在过滤器里配置，在启动项目时动态的获取，注意处理中文

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222058603.png)

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<html>
<head>
  <title>Title</title>
</head>
<body>
<h1>发表对阿凡达电影评论</h1>
过滤词: 苹果, 香蕉 ~~${errorInfo}
<form method="post" action="<%=request.getContextPath()%>/topic/showTopic.jsp">
  用户: <input type="text" name="username"><br/>
  评论: <textarea rows="10" name="content" cols="20"></textarea><br/>
  <input type="submit" value="发表评论">
</form>
</body>
</html>
```

```java
public class TopicFilter implements Filter {
    //想要获取到web.xml配置文件里的禁用词，需要在init方法中用FilterConfig对象获取

    //因为作用域的问题，所以把初始化放外面，让doFilter方法也能用到
    private String[] forbiddenWords = null;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        //获取禁用词
        String forbiddenword = filterConfig.getInitParameter("forbiddenword");
        forbiddenWords = forbiddenword.split(",");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println("doFilter被调用");

        //解决从topic.jsp获取到的数据有中文乱码问题
        servletRequest.setCharacterEncoding("utf-8");

        //判断topic.jsp里的评论是不是有禁用词
        String content = servletRequest.getParameter("content");
        for (String forbiddenWord : forbiddenWords) {
            if (content.contains(forbiddenWord)) {
                //包含则返回topic.jsp
                servletRequest.setAttribute("errorInfo", "你输入的有禁用词");
                servletRequest.getRequestDispatcher("/topic.jsp").forward(servletRequest, servletResponse);
                return;
            }
        }
        //没有则继续进行下一步
        filterChain.doFilter(servletRequest, servletResponse);

    }

    @Override
    public void destroy() {

    }
}
```

```xml
<filter>
        <filter-name>TopicFilter</filter-name>
        <filter-class>com.hspedu.filter.TopicFilter</filter-class>
        <!--配置禁用词-->
        <init-param>
            <param-name>forbiddenword</param-name>
            <param-value>苹果,香蕉</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>TopicFilter</filter-name>
        <url-pattern>/topic/*</url-pattern>
    </filter-mapping>
```

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1>你发表的评论是</h1>
评论内容:<%=request.getParameter("content")%>
</body>
</html>
```

注意两个jsp里的获取内容的方法，和写的地址



## 第11章 JQuery

### 11.1 JQuery介绍

（1）JQuery是一个快速的，简洁的JavaScript库，使用户能更方便地处理HTML、CSS、DOM

（2）提供方法、events、选择器，并且为网站提供AJAX交互

（3）JQuery解决了浏览器的兼容问题

### 11.2 JQuery快速入门

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JQuery快速入门</title>
<!--    引入JQuery库-->
    <script type="application/javascript" src="script/jquery-3.7.1.min.js"></script>
    <script type="application/javascript">
      /*
      * 使用dom编程
      * 1. 代码麻烦
      * 2. 获取dom对象
      * */
      //使用原生js + dom 完成
      window.onload = function () {
        var btn01 = document.getElementById("btn01");
        btn01.onclick = function () {
          alert("hello, js");
        }
      }

      //使用JQuery完成
      //1. 引入JQuery库文件
      //2. $(function(){}) 等价于原生 js 的 window.onload = function(){}
      //3. 当页面加载完毕就会执行 alert("hello, jquery");
      // $(function () {
      //   alert("hello, jquery");
      // });

      $(function () {
          //1. 得到btn01的这个对象，此时btn01不再是dom对象而是jquery对象
          var $btn01 = $("#btn01"); //$btn01 是一个jquery对象，jquery对象其实就是对dom对象的包装
          //得到jquery对象后就可以使用jquery对象的方法、事件等
          //2. 绑定事件
          $btn01.onclick(function () {
             alert("hello, jquery");
          });
      });

    </script>
</head>
<body>
<button id="btn01">按钮1</button>
</body>
</html>
```

### 11.3 JQuery对象和DOM对象

#### 11.3.1 DOM对象转JQuery对象

（1）对于一个DOM对象，只需要用`$()`把DOM对象包装起来，就可以获得一个JQuery对象

（2）DOM对象转换成JQuery对象后，就可以使用JQuery对象的方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM对象转成JQuery对象</title>
    <script type="application/javascript" src="script/jquery-3.7.1.min.js"></script>
    <script type="application/javascript">
      window.onload = function () {
        //演示通过dom对象来获取输入框的value
        //username就是dom对象
        var username = document.getElementById("username");
        alert("username value= " + username.value);

        //通过jquery对象来获取输入框的value
        //把username dom对象转成jquery对象
        var $username = $(username)
        alert("$username value = " + $username.val())
      }
    </script>
</head>
<body>
用户名 <input type="text" id="username" name="username" value="韩顺平教育">
</body>
</html>
```

#### 11.3.2 JQuery对象转DOM对象

（1）将一个JQuery对象转换成DOM对象有两种转换方式：[index] 和 .get(index)

（2）JQuery对象是一个数组对象，可以通过 [index] 的方法来得到相应的DOM对象

（3）可以通过JQuery对象提供的 .get(index) 方法得到相应的DOM对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jquery对象转dom对象</title>
  <script type="application/javascript" src="script/jquery-3.7.1.min.js"></script>
  <script type="application/javascript">
    window.onload = function () {
      var $username = $("#username");
      alert("$username value = " + $username.val());

      //把jquery对象转dom对象
      //(1) jquery是一个数组对象，封装了dom对象
      //(2) 可以通过[index]来获取，也可以通过get(index)来获取
      //方式一
      /*var username = $username[0]; //此时username就是dom对象
      alert("uername value = " + username.value);*/

      //方式二
      var username = $username.get(0); //此时username就是dom对象
      alert("uername value = " + username.value);

    }
  </script>
</head>
<body>
用户名 <input type="text" id="username" name="username" value="韩顺平教育"/>
</body>
</html>
```

### 11.4 JQuery选择器

#### 11.4.1 JQuery选择器介绍

（1）选择器是JQuery的核心，事件处理、遍历DOM和Ajax操作都依赖于选择器

（2）JQuery选择器的写法简洁：比如

​			`$("#id")` 等价于 `document.getElementById("id")`

​			`$("tagName")` 等价于 `document.getElementsByTagName("tagName")`

#### 11.4.2 基本选择器

基本选择器是JQuery中最常用的选择器，它通过id、class名、标签名来查找DOM元素

（1）通过id名查找：`$("#myDiv")` 可以直接选择html中的 id="myDiv" 的元素，返回单个元素组成的集合

（2）通过class名查找：`$(".myClass")` 可以直接选择html中的 class="myClass" 的元素或元素组（有可能是多个class是同样的值），返回集合元素

（3）通过标签名查找：`$("div")` 可以直接通过选择html中的标签名获得元素，返回集合元素

（4）`$("*")` 可以匹配所有元素，多用于结合上下文搜索，返回集合元素

（5）`$("div,span,p.myClass")` 多个选择器，可以将每一个选择器匹配到的元素合并后一起返回

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>基本选择器应用实例</title>
    <style type="text/css">
        div,span{
            width:140px;
            height: 140px;
            margin: 20px;
            background: #9999CC;
            border: #000 1px solid;
            float: left;
            font-size: 17px;
            font-family: Roman;
        }

        div.mini{
            width: 60px;
            height: 30px;
            background: #CC66FF;
            border: #000 1px solid;
            font-size: 12px;
            font-family: Roman;
        }
    </style>

    <script type="text/javascript" src="./script/jquery-3.7.1.min.js"></script>
    <script type="text/javascript">
        $(function () { //页面加载后执行这个函数
            //按钮1:改变 id 为 one 的元素的背景色为 #0000FF
            $("#b1").click(function () {
                $("#one").css("background","#0000FF");
            })

            //按钮2:改变 class 为 mini 的所有元素的背景色为 #FF0033
            $("#b2").click(function () {
                $(".mini").css("background","#FF0033");
            })

            //按钮3:改变 元素名 为 <div> 的所有元素的背景色为 #00FFFF
            $("#b3").click(function () {
                $("div").css("background","#00FFFF");
            })

            //按钮4:改变 所有元素 的背景色为 #00FF33
            $("#b4").click(function () {
                $("*").css("background","#00FF33");
            })

            //按钮5:改变所有的 <span> 元素和 id 为 two、class 为 .mini 的元素的背景色为 #3399FF"
            $("#b5").click(function () {
                $("span,#two,.mini").css("background","#3399FF");
            })
        })
    </script>
</head>
<body>
<input type="button" id="b1" value="改变 id 为 one 的元素的背景色为 #0000FF"/>
<input type="button" id="b2" value="改变 class 为 mini 的所有元素的背景色为 #FF0033"/>
<input type="button" id="b3" value="改变 元素名 为 <div> 的所有元素的背景色为 #00FFFF"/>
<input type="button" id="b4" value="改变 所有元素 的背景色为 #00FF33"/>
<input type="button" id="b5" value="改变所有的 <span> 元素和 id 为 two、class 为 .mini 的元素的背景色为 #3399FF"/>
<hr/>

<div id="one" class="mini">div id 为 one</div>
<div id="two">div id 为 two</div>
<div id="three" class="mini">div id 为 three</div>
<span id="s_one" class="mini">span one</span>
<span id="s_two">span two</span>
</body>
</html>
```

#### 11.4.3 层次选择器

如果想通过DOM元素之间的层次关系来获取特定元素，例如后代元素、子元素、相邻元素、兄弟元素等，则需要使用层次选择器

（1）祖先和后代：

​			用法：`$("form input")` 返回集合元素

​			说明：在给定的祖先元素下匹配所有后代元素

（2）父亲和儿子：

​			用法：`$("form > input")` 返回集合元素

​			说明：在给定的父元素下匹配所有子元素，子元素指的是只有儿子元素，没有孙子元素

（3）当前元素 + 右边的第一个兄弟元素

​			用法：`$("label + input")` 返回集合元素

​			说明：匹配prev元素右边的一个兄弟元素

（4）当前元素 ~ 右边的所有的兄弟元素

​			用法：`$("form ~ input")` 返回集合元素

​			说明：匹配prev元素右边的所有兄弟元素。注意：是匹配右边的所有元素，不包含该元素在内，并且匹配的是和prev同辈的元素，其后辈元素不被匹配

（5）.siblings

​			用法：`$("prev").siblings("div") `返回集合元素

​			说明：返回当前元素的所有兄弟元素里是div的元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>层次选择器应用实例</title>
    <style type="text/css">
        div,span{
            width: 140px;
            height: 140px;
            margin: 20px;
            background: #9999CC;
            border: #000 1px solid;
            float: left;
            font-size: 17px;
            font-family: Roma
        }
        div.mini{
            width: 80px;
            height: 30px;
            background: #CC66FF;
            border: #000 1px solid;
            font-size: 12px;
            font-family: Roman
        }
    </style>
    <script type="text/javascript" src="./script/jquery-3.7.1.min.js"></script>
    <script type="text/javascript">
        $(function () { //页面加载完之后执行function
            //按钮1:改变 <body> 内所有 <div> 的背景色为 #0000FF
            $("#b1").click(function () {
                $("div").css("background","#0000FF");
            })
            //按钮2:改变 <body> 内子 <div>[第一层] 的背景色为 #FF0033
            $("#b2").click(function () {
                $("body > div").css("background","#FF0033");
            })
            //按钮3:改变 id 为 one 的下一个 <div> 的背景色为 #0000FF
            $("#b3").click(function () {
                $("#one + div").css("background","#0000FF");
            })
            //按钮4:改变 id 为 two 的元素后面的所有兄弟 <div> 的元素的背景色为 #0000FF
            $("#b4").click(function () {
                $("#two ~ div").css("background","#0000FF");
            })
            //按钮5:改变 id 为 two 的元素的所有兄弟里的所有是 <div> 元素的背景色为 #0000FF
            $("#b5").click(function () {
                $("#two").siblings("div").css("background","#0000FF");
                //先找打id为two的元素，在再找到id为two的元素的所有兄弟元素中是div的元素，改变其背景
            })
        })
    </script>
</head>
<body>
<input type="button" id="b1" value="改变 <body> 内所有 <div> 的背景色为 #0000FF"/>
<input type="button" id="b2" value="改变 <body> 内子 <div>[第一层] 的背景色为 #FF0033"/>
<input type="button" id="b3" value="改变 id 为 one 的下一个 <div> 的背景色为 #0000FF"/>
<input type="button" id="b4" value="改变 id 为 two 的元素后面的所有兄弟 <div> 的元素的背景色为 #0000FF"/>
<input type="button" id="b5" value="改变 id 为 two 的元素的所有兄弟里的所有是 <div> 元素的背景色为 #0000FF"/>

<hr/>
<div id="one" class="mini">
    div id 为 one
</div>
<div id="two">
    div id 为 two
    <div id="two01">
        id two01
        是id two的第一个子元素
    </div>
    <div id="two02">
        id two02
        是id two的第二个子元素
    </div>
</div>
<div id="three" class="mini">
    div id 为 three
    <div id="three01">
        id three01
        是 id three的第一个子元素
    </div>
</div>
<div id="four" class="mini">
    div id 为 four
    <div id="four01">
        id four01
        是 id four的第一个子元素
    </div>
</div>
</body>
</html>
```

#### 11.4.4 基础过滤选择器

（1）:first

​			用法：`$("tr:first")` 返回单个元素组成的集合

​			说明：匹配找到第一个元素

（2）:last

​			用法：`$("tr:last")` 返回集合元素

​			说明：匹配找到最后一个元素

（3）:not(selector)

​			用法：`$("input:not(:checked)")` 返回元素集合

​			说明：去除所有与给定选择器匹配的元素

（4）:even

​			用法：`$("tr:even")` 返回元素集合

​			说明：匹配所有索引值为偶数的元素，从0开始计数，并且是从上到下、从左到右计数

（5）:odd

​			用法：`$("tr:odd")` 返回元素集合

​			说明：匹配所有索引值为奇数的元素

（6）:eq(index)

​			用法：`$("tr:eq(0)")` 返回元素集合

​			说明：匹配一个给定索引值的元素

（7）:gt(index)

​			用法：`$("tr:gt(0)")` 返回元素集合

​			说明：匹配所有大于给定索引值的元素

（8）:lt(index)

​			用法：`$("tr:lt(2)")` 返回元素集合

​			说明：匹配所有小于给定索引值的元素

（9）:header

​			用法：`$(":header").css("background","#EEE")` 返回元素集合

​			说明：匹配如 h1、h2、h3之类的标题元素，这个是专门用来获取标题元素的

（10）:animated

​			用法：

​			说明：匹配所有正在执行动画效果的元素

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222058688.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>基础过滤选择器-应用实例</title>
  <style type="text/css">
    div,span{
      width: 140px;
      height: 140px;
      margin: 20px;
      background: #9999CC;
      border: #000 1px solid;
      float:left;
      font-size: 17px;
      font-family:Roman;
    }
    div.mini{
      width: 80px;
      height: 30px;
      background: #CC66FF;
      border: #000 1px solid;
      font-size: 12px;
      font-family:Roman;
    }
  </style>
  <script type="text/javascript" src="./script/jquery-3.7.1.min.js"></script>
  <script type="text/javascript">
    $(function () {
      //按钮1:改变第一个 div 元素的背景色为 #0000FF
      $("#b1").click(function () {
        //$("div:first").css("background","#0000FF");
        $("div:eq(0)").css("background","#0000FF");
      })

      //按钮2:改变最后一个 div 元素的背景色为 #0000FF
      $("#b2").click(function () {
        $("div:last").css("background","#0000FF");
      })

      //按钮3:改变 class 不为 one 的所有 div 元素的背景色为 #0000FF
      $("#b3").click(function () {
        $("div:not(.one)").css("background","#0000FF");
      })

      //按钮4:改变索引值为偶数的 div 元素的背景色为 #0000FF
      $("#b4").click(function () {
        $("div:even").css("background","#0000FF");
      })

      //按钮5:改变索引值为奇数的 div 元素的背景色为 #0000FF
      $("#b5").click(function () {
        $("div:odd").css("background","#0000FF");
      })

      //按钮6:改变索引值为大于 3 的 div 元素的背景色为 #0000FF
      $("#b6").click(function () {
        $("div:gt(3)").css("background","#0000FF")
      })

      //按钮7:改变索引值为等于 3 的 div 元素的背景色为 #0000FF
      $("#b7").click(function () {
        $("div:eq(3)").css("background","#0000FF");
      })

      //按钮8:改变索引值为小于 3 的 div 元素的背景色为 #0000FF
      $("#b8").click(function () {
        $("div:lt(3)").css("background","#0000FF");
      })

      //按钮9:改变所有的标题元素的背景色为 #0000FF
      $("#b9").click(function () {
        $(":header").css("background","#0000FF");
      })
    });
  </script>
</head>
<body>
<h1>H1 标题</h1>
<h2>H2 标题</h2>
<h3>H3 标题</h3>

<input type="button" id="b1" value="改变第一个 div 元素的背景色为 #0000FF"/>
<input type="button" id="b2" value="改变最后一个 div 元素的背景色为 #0000FF"/>
<input type="button" id="b3" value="改变 class 不为 one 的所有 div 元素的背景色为 #0000FF"/>
<input type="button" id="b4" value="改变索引值为偶数的 div 元素的背景色为 #0000FF"/>
<input type="button" id="b5" value="改变索引值为奇数的 div 元素的背景色为 #0000FF"/>
<input type="button" id="b6" value="改变索引值为大于 3 的 div 元素的背景色为 #0000FF"/>
<input type="button" id="b7" value="改变索引值为等于 3 的 div 元素的背景色为 #0000FF"/>
<input type="button" id="b8" value="改变索引值为小于 3 的 div 元素的背景色为 #0000FF"/>
<input type="button" id="b9" value="改变所有的标题元素的背景色为 #0000FF"/>

<hr/>
<div id="one" class="mini">
  div id 为 one class mini
</div>
<div id="two">
  div id 为 two
  <div id="two01">
    id two01
  </div>
  <div id="two02">
    id two02
  </div>
</div>
<div id="three" class="one">
  div id 为 three class one
  <div id="three01">
    id three01
  </div>
</div>
</body>
</html>
```

#### 11.4.5 内容过滤选择器

内容过滤选择器的过滤规则主要体现在它所包含的子元素和文本内容上

（1）:contains(text)

​			用法：`$("div:contains('John')")`  返回集合元素

​			说明：匹配包含给定文本的元素，这个选择器比较有用，当我们要选择的不是dom标签元素时，它的作用是查找被标签围起来的文本内容是否符合指定的内容

（2）:empty

​			用法：`$("td:empty")` 返回集合元素

​			说明：匹配所有不包含子元素或者文本的空元素

（3）:has(selector)

​			用法：`$("div:has(p)").addClass("test")` 返回集合元素

​			说明：匹配含有选择器所匹配的元素的元素（看代码里的解释理解）

（4）:parent

​			用法：`$("td:parent")` 返回集合元素

​			说明：匹配含有子元素或者文本的元素

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222058251.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>内容过滤选择器应用实例</title>
  <style type="text/css">
    div, span {
      width: 140px;
      height: 140px;
      margin: 20px;
      background: #9999CC;
      border: #000 1px solid;
      float: left;
      font-size: 17px;
      font-family: Roman;
    }
    div.mini {
      width: 80px;
      height: 30px;
      background: #CC66FF;
      border: #000 1px solid;
      font-size: 12px;
      font-family: Roman;
    }
  </style>
  <script type="text/javascript" src="./script/jquery-3.7.1.min.js"></script>
  <script type="text/javascript">
    $(function () {
      //按钮1:改变含有文本 ‘di’ 的 div 元素的背景色为 #0000FF
      $("#b1").click(function () {
        $("div:contains('di')").css("background","#0000FF");
      })

      //按钮2:改变不包含子元素(或者文本元素) 的 div 的背景色为 pink
      $("#b2").click(function () {
        $("div:empty").css("background","pink");
      })

      //按钮3:改变含有 class 为 mini 元素的父类的 div 元素的背景色为 green
      $("#b3").click(function () {
        //这个意思就是改变class=mini元素的父类元素的div元素
        //div:has(.mini) 意思是选择一个div它的子元素如果含有class=mini的元素就改变它
        $("div:has(.mini)").css("background","green");
        //这个意思是改变class=mini的div元素
        //div.mini 意思是选择一个div它的class=mini
        //$("div.mini").css("background","green");
      })

      //按钮4:改变含有子元素(或者文本元素)的 div 元素的背景色为 yellow
      $("#b4").click(function () {
        $("div:parent").css("background","yellow");
      })

      //按钮5:改变索引值为大于 3 的 div 元素的背景色为 #0000FF
      $("#b5").click(function () {
        $("div:gt(3)").css("background","#0000FF");
      })

      //按钮6:改变不含有文本 di; 的 div 元素的背景色 pink
      $("#b6").click(function () {
        $("div:not(:contains('di'))").css("background","pink");
      })
    });
  </script>
</head>
<body>
<input type="button" id="b1" value="改变含有文本 ‘di’ 的 div 元素的背景色为 black"/>
<input type="button" id="b2" value="改变不包含子元素(或者文本元素) 的 div 的背景色为 pink"/>
<input type="button" id="b3" value="改变含有 class 为 mini 元素的 div 元素的背景色为 green"/>
<input type="button" id="b4" value="改变含有子元素(或者文本元素)的 div 元素的背景色为 yellow"/>
<input type="button" id="b5" value="改变索引值为大于 3 的 div 元素的背景色为 #0000FF"/>
<input type="button" id="b6" value="改变不含有文本 di; 的 div 元素的背景色 pink"/>

<hr/>
<div id="xxxx">
  <div id="one" class="mini">
    div id 为 one class 为 mini
  </div>
</div>
<div id="two">
  div id 为 two
  <div id="two01">
    id two01
  </div>
  <div id="two02">
    id two02
  </div>
</div>
<div id="three" class="one">
  div id 为 three class one
  <div id="three01">
    id three01
  </div>
</div>
<div id="four" class="one">
  XXXXXXXXXX
</div>
<div id="five" class="one"></div>
<div id="mover">
  执行动画
</div>
</body>
</html>
```

#### 11.4.6 可见度过滤选择器

可见度过滤选择器是根据元素的可见和不可见状态来选择相应的元素

（1）:hidden

​			用法：`$("tr:hidden")` 返回元素集合

​			说明：匹配所有的不可见元素，input元素的type属性为hidden时也会被匹配到，意思是css中的display:none 和 input type="hidden"都会被匹配到

（1）:visible

​			用法：`$("tr:visible")` 返回元素集合

​			说明：匹配所有的可见元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>可见度过滤选择器-应用实例</title>
  <style type="text/css">
    div, span {
      width: 140px;
      height: 140px;
      margin: 20px;
      background: #9999CC;
      border: #000 1px solid;
      float: left;
      font-size: 17px;
      font-family: Roman;
    }
    div.mini {
      width: 30px;
      height: 30px;
      background: #CC66FF;
      border: #000 1px solid;
      font-size: 12px;
      font-family: Roman;
    }
    div.visible {
      display: none;
    }
  </style>
  <script type="text/javascript" src="./script/jquery-3.7.1.min.js"></script>
  <script type="text/javascript">
    $(function () {
      //按钮1:改变所有可见的 div 元素的背景色为 #0000FF
      $("#b1").click(function () {
        $("div:visible").css("background","red")
      })

      //按钮2:选取所有不可见的 div, 利用 jQuery 中的 show() 方法出来, 并设置其背景色为 #0000FF
      $("#b2").click(function () {
        $("div:hidden").css("background","green");
        $("div:hidden").show();
      })

      //按钮3:选取所有的文本隐藏域, 并打印它们的值
      $("#b3").click(function () {
        //1. 先取出标签为input，并且隐藏的文本域
        var $input = $("input:hidden"); //这里的$input是jquery对象数组
        //2. 遍历数组
        //方法一:
        for (var i = 0; i < $input.length; i++) {
          var input = $input[i]; //此时的input转为了dom对象
          console.log("方法一值是 = ", input.value);
        }
        //方法二:
        //用jquery对象的each方法
        //each方法遍历时会将$input里的元素依次取出赋给this
        $input.each(function () {
          //可以使用this获取每次遍历的对象,这里this就是$input里遍历出来的对象,此时this是dom对象
          console.log("方法二值是(dom对象方式)= ", this.value);
          console.log("方法二值是(转为jquery对象方式)= ", $(this).val());
        })
      })
    });
  </script>
</head>
<body>
<input type="button" id="b1" value="改变所有可见的 div 元素的背景色为 #0000FF"/> <br/><br/>
<input type="button" id="b2" value="选取所有不可见的 div, 利用 jQuery 中的 show() 方法出来, 并设置其背景色为 #0000FF"/> <br/><br/>
<input type="button" id="b3" value="选取所有的文本隐藏域, 并打印它们的值"/> <br/><br/>

<hr/>

<input type="hidden" value="hidden1"/>
<input type="hidden" value="hidden2"/>
<input type="hidden" value="hidden3"/>
<input type="hidden" value="hidden4"/>
<div id="one" class="visible">
  div id 为 one
</div>
<div id="two" class="visible">
  div id 为 two
</div>
<div id="three" class="one">
  div id 为 three
</div>
</body>
</html>
```

#### 11.4.7 属性过滤选择器

属性过滤选择器的过滤规则是通过元素的属性来获取相应的元素

（1）[attribute]

​			用法：`$("div[id]")`

​			说明：匹配包含给定属性的元素，用法中是选取了所有带"id"属性的div标签

（2）[attribute=value]

​			用法：`$("input[name='newsletter']").attr("check",true)`

​			说明：匹配给定的属性是某个特定值的元素，用法中选取了所有name属性是newsletter的input元素

（3）[attribute!=value]

​			用法：`$("input[name!='newsletter']").attr("checked",true)`

​			说明：匹配所有不含有指定的属性，或者属性不等于特定值的元素

（4）[attribute^=value]

​			用法：`$("input[name^='news']")`

​			说明：匹配给定的属性是以某些值开始的元素

（5）[attribute$=value]

​			用法：`$("input[name$='letter']")`

​			说明：匹配给定的属性是以某些值结尾的元素

（6）[attribute*=value]

​			用法：`$("input[name*='man']")`

​			说明：匹配给定的属性是以包含某些值的元素

（7）[attributeFilter1] [attributeFilter2] [attributeFilterN]

​			用法：`$("input[id][name$='man']")`

​			说明：复合属性选择器，需要同时满足多个条件时使用。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>属性过滤选择器应用实例</title>
  <style type="text/css">
    div,span{
      width: 140px;
      height: 140px;
      margin: 20px;
      background: #9999CC;
      border: #000 1px solid;
      float: left;
      font-size: 17px;
      font-family: Roman;
    }

    div.mini {
      width: 30px;
      height: 30px;
      background: #CC66FF;
      border: #000 1px solid;
      font-size: 12px;
      font-family: Roman;
    }
    div.visible{
      display: none;
    }
  </style>
  <script type="text/javascript" src="./script/jquery-3.7.1.min.js"></script>
  <script type="text/javascript">
    $(function () {

      //按钮1:含有属性 title 的 div 元素.
      $("#b1").click(function () {
        $("div[title]").css("background","green");
      })

      //按钮2:属性 title 值等于 test 的 div 元素
      $("#b2").click(function () {
        $("div[title='test']").css("background","green");
      })

      //按钮3:属性 title 值不等于 test 的 div 元素(没有属性 title 的也将被选中)
      $("#b3").click(function () {
        $("div[title!='test']").css("background","green");
      })

      //按钮4:属性 title 值 以 te 开始 的 div 元素
      $("#b4").click(function () {
        $("div[title^='te']").css("background","green");
      })

      //按钮5:属性 title 值 以 est 结束 的 div 元素
      $("#b5").click(function () {
        $("div[title$='est']").css("background","green");
      })

      //按钮6:属性 title 值 含有 es 的 div 元素
      $("#b6").click(function () {
        $("div[title*='es']").css("background","green");
      })

      //按钮7:选取有属性 id 的 div 元素，然后在结果中选取属性 title 值含有“es”的 div元素
      $("#b7").click(function () {
        $("div[id][title*='es']").css("background","green");
      })
    });
  </script>
</head>
<body>
<input type="button" id="b1" value="含有属性 title 的 div 元素."/><br/><br/>
<input type="button" id="b2" value="属性 title 值等于 test 的 div 元素"/><br/><br/>
<input type="button" id="b3" value="属性 title 值不等于 test 的 div 元素(没有属性 title 的也将被选中)"/><br/><br/>
<input type="button" id="b4" value="属性 title 值 以 te 开始 的 div 元素"/><br/><br/>
<input type="button" id="b5" value="属性 title 值 以 est 结束 的 div 元素"/><br/><br/>
<input type="button" id="b6" value="属性 title 值 含有 es 的 div 元素"/><br/><br/>
<input type="button" id="b7" value="选取有属性 id 的 div 元素，然后在结果中选取属性 title 值含有“es”的 div元素"/><br/><br/>

<div id="one" title="test">
  div id 为 one test
</div>
<div id="one-1" title="texxx">
  div id 为 one-1 texxx
</div>
<div id="one-2" title="xxxest">
  div id 为 one-2 xxxest
</div>
<div id="one-3" title="xxxesxxxxxt">
  div id 为 one-3 xxxesxxxxxt
</div>
<div id="two" title="ate">
  div id 为 two
</div>
<div id="three" class="one">
  div id 为 three
</div>
</body>
</html>
```

#### 11.4.8 子元素过滤选择器

（1）:nth-child(index/even/odd/equation)

​			用法：`$("ul li:nth-child(2)")`

​			说明：

（2）:first-child

​			用法：`$("ul li:first-child")`

​			说明：

（3）:last-child

​			用法：`$("ul li:last-child")`

​			说明：

（4）:only-child

​			用法：`$("ul li:only-child")`

​			说明：

（5）:nth-child()



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>子元素过滤选择器应用实例</title>
  <style type="text/css">
    div, span {
      width: 140px;
      height: 70px;
      margin: 20px;
      background: #9999CC;
      border: #000 1px solid;
      float: left;
      font-size: 17px;
      font-family: Roman;
    }
    div.visible {
      display: none;
    }
  </style>
  <script type="text/javascript" src="./script/jquery-3.7.1.min.js"></script>
  <script type="text/javascript">
    $(function () {
      //按钮1:每个 class 为 one 的 div 父元素下的第 2 个子元素
      $("#b1").click(function () {
        $("div.one:nth-child(2)").css("background","yellow");
      })

      //按钮2:每个 class 为 one 的 div 父元素下的第一个子元素
      $("#b2").click(function () {
        $("div.one:first-child").css("background","green");
      })

      //按钮3:每个 class 为 one 的 div 父元素下的最后一个子元素
      $("#b3").click(function () {
        $("div.one:last-child").css("background","red");
      })

      //按钮4:如果 class 为 one 的 div 父元素下的仅仅只有一个子元素，那么选中这个子元素
      $("#b4").click(function () {
        $("div.one:only-child").css("background","pink");
      })
    });
  </script>
</head>
<body>
<input type="button" id="b1" value="每个 class 为 one 的 div 父元素下的第 2 个子元素"/><br/><br/>
<input type="button" id="b2" value="每个 class 为 one 的 div 父元素下的第一个子元素"/><br/><br/>
<input type="button" id="b3" value="每个 class 为 one 的 div 父元素下的最后一个子元素"/><br/><br/>
<input type="button" id="b4" value="如果 class 为 one 的 div 父元素下的仅仅只有一个子元素，那么选中这个子元素"/><br/><br/>

<div class="one">
  <div id="one" class="one">
    XXXXXXXXX id=one
  </div>
  <div id="two" class="one">
    XXXXXXXXX id=two
  </div>
  <div id="three" class="one">
    XXXXXXXXX id=three
  </div>
  <div id="four" class="one">
    XXXXXXXXX id=four
  </div>
</div>
<div class="one">
  <div id="five" class="one">
    XXXXXXXXX id=five
  </div>
</div>
</body>
</html>
```

#### 11.4.9 表单属性过滤选择器

此选择器主要对所选择的表单元素进行过滤

（1）:enabled

​			用法：`$("input:enabled")`

​			说明：匹配所有可用元素，意思是查找所有input中不带有disabled="disabled"的input，不为disabled，当然就是enabled

（2）:disabled

​			用法：`$("input:disabled")`

​			说明：匹配所有不可用元素

（3）:checked

​			用法：`$("input:checked")`

​			说明：匹配所有被选中的元素[复选框、单选框等，不包括select中的option]

（4）:selected

​			用法：`$("select option:selected")`

​			说明：匹配所有选中的option元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>表单对象属性过滤选择器应用实例</title>
  <style type="text/css">
    div, span {
      width: 140px;
      height: 140px;
      margin: 20px;
      background: #9999CC;
      border: #000 1px solid;
      float: left;
      font-size: 17px;
      font-family: Roman;
    }
  </style>
  <script type="text/javascript" src="./script/jquery-3.7.1.min.js"></script>
  <script type="text/javascript">
    $(function () {
      //按钮1:利用 jQuery 对象的 val() 方法改变表单内 type=text 可用<input> 元素的值
      $("#b1").click(function () {
        //.val("台球") 如果()里是空的，就返回value，如果(值),表示给该对象value设置值
        $("input[type='text']:enabled").val("台球");
      })

      //按钮2:利用 jQuery 对象的 val() 方法改变表单内 type=text 不可用<input> 元素的值
      $("#b2").click(function () {
        //.val("台球") 如果()里是空的，就返回value，如果(值),表示给该对象value设置值
        $("input[type='text']:disabled").val("足球");
      })

      //按钮3:利 用 jQuery 对 象的 length 属 性获 取 多 选框 选 中的 个 数
      $("#b3").click(function () {
        alert($("input[type='checkbox']:checked").length);
      })

      //按钮4:利 用 jQuery 对 象 的 text() 方 法 获 取 下 拉 框 选 中 的 内 容
      $("#b4").click(function () {
        //如果希望选择指定的select，可以加入属性过滤选择器
        var $select = $("select option:selected");
        $select.each(function () {
          alert("你选择了= " + $(this).text());
        })
      })
    });
  </script>
</head>
<body>

<input type="button" id="b1" value="利用 jQuery 对象的 val() 方法改变表单内 type=text 可用<input> 元素的值"/><br/><br/>
<input type="button" id="b2" value="利用 jQuery 对象的 val() 方法改变表单内 type=text 不可用<input> 元素的值"/><br/><br/>
<input type="button" id="b3" value="利 用 jQuery 对 象的 length 属 性获 取 多 选框 选 中的 个 数 "/><br/><br/>
<input type="button" id="b4" value=" 利 用 jQuery 对 象 的 text() 方 法 获 取 下 拉 框 选 中 的 内 容 "/><br/><br/>
<br>

<input type="text" value="篮球 1"/>
<input type="text" value="篮球 2"/>
<input type="text" value="篮球 3" disabled="true"/>
<input type="text" value="篮球 4" disabled="true"/>
<br>

<h1>选择你的爱好</h1>
<input type="checkbox" value="爱好 1"/>爱好 1
<input type="checkbox" value="爱好 2"/>爱好 2
<input type="checkbox" value="爱好 3"/>爱好 3
<input type="checkbox" value="爱好 4"/>爱好 4
<br>

<h1>选项如下:</h1>
<select name="job" size=9 multiple="multiple">
  <option value="选项 1">选项 1^^</option>
  <option value="选项 2">选项 2^^</option>
  <option value="选项 3">选项 3^^</option>
  <option value="选项 4">选项 4^^</option>
  <option value="选项 5">选项 5^^</option>
  <option value="选项 6">选项 6^^</option>
</select>

<select id="hsp" name="edu">
  <option value="博士">博士^^</option>
  <option value="硕士">硕士^^</option>
  <option value="本科">本科^^</option>
  <option value="小学">小学^^</option>
</select>

</body>
</html>
```

#### 11.4.10 表单选择器

（1）:input

​			用法：`$(":input")`

​			说明：匹配所有input、textarea、select和button元素

（2）:text

​			用法：`$(":text")`

​			说明：匹配所有的单行文本框

（3）:password

​			用法：`$(":password")`

​			说明：匹配所有密码框

（4）:radio

​			用法：`$(":radio")`

​			说明：匹配所有单选按钮

（5）:checkbox

​			用法：`$(":checkbox")`

​			说明：匹配所有复选框

（6）:submit

​			用法：`$(":submit")`

​			说明：匹配所有提交按钮

（7）:image

​			用法：`$(":image")`

​			说明：匹配所有图像域

（8）:reset

​			用法：`$(":reset")`

​			说明：匹配所有重置按钮

（9）:button

​			用法：`$(":button")`

​			说明：匹配所有按钮，包括直接写的元素button

（10）:file

​			用法：`$(":file")`

​			说明：匹配所有文件域

（11）:hidden

​			用法：`$("input:hidden")`

​			说明：匹配所有不可见元素，或者type为hidden的元素，此选择器不仅限于表单，除了匹配input中的hidden外，那些style为hidden的也会被匹配

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>表单选择器-应用实例</title>
  <script type="text/javascript" src="./script/jquery-3.6.0.min.js"></script>
  <script type="text/javascript">
    $(function () {
      //选择所有的button
      //这里我们就不绑定事件，直接演示
      //老师解读 $(":button") 会选择<input type="button" value="按钮1"/><br/>
      //还会选择  <button>按钮2</button>
      var $button = $(":button");
      alert("$button 大小=" + $button.length)//3

      //得到type="button" 的元素
      //老韩解读 $("input[type='button']") 只会得到 <input type="button" value="按钮1"/>
      var $button2 = $("input[type='button']");
      alert("$button2 大小=" + $button2.length)//1

      //得到<button />按照元素标签取值
      //老韩解读 $("button") 只会按照元素标签获取 <button>按钮2</button>
      var $button3 = $("button");
      alert("$button3 大小=" + $button3.length)//2
    });
  </script>
</head>
<body>
<form>
  <input type="text"/><br/>
  <input type="checkbox"/><br/>
  <input type="radio"/><br/>
  <input type="image" src="../image/2.png" height="100"/><br/>
  <input type="file"/><br/>
  <input type="submit"/><br/>
  <input type="reset"/><br/>
  <input type="password"/><br/>
  <input type="button" value="按钮1"/><br/>
  <select>
    <option/>
  </select><br/>
  <textarea></textarea><br/>
  <button>按钮2</button>
  <button>按钮3</button>
  <br/>
</form>
</body>
</html>
```

#### 11.4.11 作业

作业一：点击`<p>`标签元素弹出`<p>`内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>作业1</title>
  <script type="text/javascript" src="./script/jquery-3.7.1.min.js"></script>
  <script type="text/javascript">
    $(function () {
      //选择器选择p元素
      $("p").click(function () {
        //这里得到p标签元素
        //当我们点击p元素时，会隐式的传入this(dom对象)，表示当前点击的p元素对象
        //alert("p的内容是 = " + this.innerText);
        //用jquery对象获取
        alert("p的内容是(jquery方式) = " + $(this).text());
      })
    })
  </script>
</head>
<body>
<p>段落一</p>
<p>段落二</p>
<p>段落三</p>
</body>
</html>
```

### 11.5 JQuery的DOM操作

#### 11.5.1 查找结点，修改属性

（1）查找属性节点：查找到所需要的元素之后，可以调用JQuery对象的attr()方法来获取它的各种属性值

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>操作节点的属性</title>
  <script type="text/javascript" src="../script/jquery-3.7.1.min.js"></script>
  <script type="text/javascript">
    $(function () {
      //给button绑定事件
      $("button").click(function () {
        $("img").attr("src","../img/2.png");
        $("img").attr("height","200");
      })
    });
  </script>
</head>
<body>
<img src="../img/1.png" height="100"/>
<br/>
<button>设置图像的height属性</button>
</body>
</html>
```

#### 11.5.2 创建节点

##### 11.5.2.1 创建节点介绍

（1）创建节点使用JQuery的工厂函数`$("html标签")`；会根据传入的html标记字符串创建一个JQuery对象并返回

（2）动态创建的新节点不会被自动的添加到文档中，而是需要使用其他方法将其插入到文档中

（3）当创建单个元素时，需注意闭合标签和使用标准的XHTML格式。例如创建一个`<p>`元素，可以使用`$("<p/>")`或`$("<p></p>")`

（4）创建文本节点就是在创建元素节点时直接把文本内容写出来，创建属性节点也是在创建元素节点时一起创建

##### 11.5.2.2 内部插入法

（1）append (content)：向每个匹配的元素的内部的结尾处追加内容。

​			例如：A.append (B)

​				1）A，B都是JQuery对象

​				2）表示把B对象插入到A对象内部的结尾处

​				3）结果是B对象成为A对象的子元素/节点

（2）appendTo (content)：将每个匹配的元素追加到指定的元素中的内部结尾处

​			例如：A.appendTo (B)

​				1）A，B都是JQuery对象

​				2）表示把A对象插入到B对象内部结尾处

​				3）结果是A对象成为B对象的子元素/节点

（3）prepend (content)：向每个匹配的元素的内部的开始处插入内容

​			例如：A.prepend (B)

​				1）A，B都是JQuery对象

​				2）表示把B对象插入到A对象内部的开始处

​				3）结果是B对象成为A对象的子元素/节点

（4）prependTo (content)：将每个匹配的元素插入到指定的元素内部的开始处

​			例如：A.prependTo (B)

​				1）A，B都是JQuery对象

​				2）表示把A对象插入到B对象内部的开始处

​				3）结果是A对象成为B对象的子元素/节点

##### 11.5.2.3 外部插入法

（1）after (content)：在每个匹配的元素之后插入内容

​			例如：A.after (B)

​				1）A，B都是JQuery对象

​				2）表示把B对象插入到A对象后面

​				3）结果是B成为A的兄弟节点

（2）before (content)：在每个匹配的元素之前插入内容

​			例如：A.before (B)

​				1）A，B都是JQuery对象

​				2）表示把B对象插入到A对象前面

​				3）结果是B成为A的兄弟节点，并且在A的前面

（3）insertAfter (content)：把所有匹配的元素插入到另一个、指定的元素集合的后面

​			例如：A.insertAfter (B)

​				1）A，B都是JQuery对象

​				2）表示把A对象插入到B对象后面

​				3）结果是A成为B的后一个兄弟节点

（4）insertBefore (content)：把所有匹配的元素插入到另一个、指定的元素集合的前面

​			例如：A.insertBefore (B)

​				1）A，B都是JQuery对象

​				2）表示把A对象插入到B对象前面

​				3）结果是A成为B的前一个兄弟节点

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>创建节点-应用实例</title>
  <style type="text/css">
    div, span {
      width: 140px;
      height: 140px;
      margin: 20px;
      background: #9999CC;
      border: #000 1px solid;
      float: left;
      font-size: 17px;
      font-family: Roman;
    }
    div.mini {
      width: 30px;
      height: 30px;
      background: #CC66FF;
      border: #000 1px solid;
      font-size: 12px;
      font-family: Roman;
    }
  </style>
  <script type="text/javascript" src="../script/jquery-3.7.1.min.js"></script>
  <script type="text/javascript">
    $(function () {

      //按钮1:添加重庆 li 到 上海下(使用 dom 的传统方法)
      $("#b1").click(function () {
        //1.创建重庆的标签li
        var cq_li = document.createElement("li");
        //2.设置属性和内容
        cq_li.setAttribute("id","cq");
        cq_li.setAttribute("name","chongqing");
        cq_li.innerText = "重庆";
        //3.添加到指定元素后面
        document.getElementById("sh").append(cq_li);
      })

      //按钮2:添加重庆 li 到 上海下
      $("#b2").click(function () {
        //创建重庆li
        var $cq_li = $("<li id=\"cq\" name=\"chongqing\">重庆</li>");
        //外部插入法
        //$("#sh").after($cq_li);
        $cq_li.insertAfter($("#sh"));
      })

      //按钮3:添加成都 li 到 北京前
      $("#b3").click(function () {
        //创建成都li
        var $cd_li = $("<li id=\"cd\" name=\"chengdou\">成都</li>");
        //添加到北京li前面
        //内部插入
        //$("#bj").prepend($cd_li);
        //外部插入
        $("#bj").before($cd_li);
      })

      //按钮4:添加成都 li 到 北京和上海之间
      $("#b4").click(function () {
        //创建成都li
        var $cd_li = $("<li id=\"cd\" name=\"chengdou\">成都~~</li>");
        //在北京后面加
        //$("#bj").after($cd_li);
        //在上海前面加
        $("#sh").before($cd_li);
      })

      //按钮5:添加成都 li 到 吉林前面
      $("#b5").click(function () {
        //创建成都li
        var $cd_li = $("<li id=\"cd\" name=\"chengdou\">成都~~</li>");
        $("#jl").before($cd_li);
      })
    });
  </script>
</head>
<body>
<ul id="city">
  <li id="bj" name="beijing">北京</li>
  <li id="sh" name="shanghai">上海</li>
  <li id="jl" name="jilin">吉林</li>
  <li id="my" name="mianyang">绵阳</li>
</ul>

<input type="button" id="b1" value="添加重庆 li 到 上海下(使用 dom 的传统方法)"/><br/><br/>
<input type="button" id="b2" value="添加重庆 li 到 上海下"/><br/><br/>
<input type="button" id="b3" value="添加成都 li 到 北京前"/><br/><br/>
<input type="button" id="b4" value="添加成都 li 到 北京和上海之间"/><br/><br/>
<input type="button" id="b5" value="添加成都 li 到 吉林前面"/><br/>
</body>
</html>
```

（5）以上方法不但能将新的DOM元素插入到文档中，也能对原有的DOM元素进行移动

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>移动节点</title>
  <script type="text/javascript" src="../script/jquery-3.7.1.min.js"></script>
  <script type="text/javascript">
    $(function () {
      //按钮1:使用 after 插入法 把反恐 li 移动天津后
      $("#b1").click(function () {
        $("#tj").after($("#fk"));
      })

      //按钮2:使用 append 插入法 把反恐 li 移动天津后
      $("#b2").click(function () {
        $("#tj").append($("#fk"));
      })
    });
  </script>
</head>
<body>
您喜欢的城市:<br>
<ul id="city">
  <li id="bj" name="beijing">北京</li>
  <li id="sh" name="shanghai">上海</li>
  <li id="tj" name="tianjin">天津</li>
</ul>
您爱好的游戏:<br>
<ul id="game">
  <li id="fk" name="fakong">反恐</li>
  <li id="cq" name="chuangqi">传奇</li>
</ul>
<input type="button" id="b1" value="使用 after 插入法 把反恐 li 移动天津后"/><br/><br/>
<input type="button" id="b2" value="使用 append 插入法 把反恐 li 移动天津后"/><br/><br/>
</body>
</html>
```

#### 11.5.3 删除节点

##### 11.5.3.1 删除节点介绍

（1）remove()：从DOM中删除所有匹配的元素，传入的参数用于根据JQuery表达式来筛选元素，当某个节点用remove() 方法删除后，该节点所包含的所有后代节点将被同时删除，这个方法的返回值是一个指向已被删除的节点的引用

（2）empty()：清空节点-清空元素中的所有后代节点（不包含属性节点）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>删除节点应用实例</title>
  <script type="text/javascript" src="../script/jquery-3.7.1.min.js"></script>
  <script type="text/javascript">
    $(function () {
      //按钮1:删除所有 p
      $("#b1").click(function () {
        $("p").remove();
      })

      //按钮2:所有 p 清空
      $("#b2").click(function () {
        $("p").empty();
      })

      //按钮3:删除上海这个 li
      $("#b3").click(function () {
        $("#sh").remove();
      })
    });
  </script>
</head>
<body>
您喜欢的城市:<br>
<ul id="city">
  <li id="bj" name="beijing">北京</li>
  <li id="sh" name="shanghai">上海</li>
  <li id="tj" name="tianjin">天津</li>
</ul>
您爱好的游戏:<br>
<ul id="game">
  <li id="fk" name="fakong">反恐</li>
  <li id="cq" name="chuangqi">传奇</li>
</ul>
<p>Hello</p> how are <p>you?</p>
<p name="test">Hello, <span>Person</span> <a href="#">and person</a></p>
<input type="button" value="删除所有 p" id="b1"/>
<input type="button" value="所有 p 清空" id="b2"/>
<input type="button" value="删除上海这个 li" id="b3"/>
</body>
</html>
```

#### 11.5.4 复制节点

##### 11.5.4.1 复制节点介绍

（1）clone()：克隆匹配的DOM元素，返回值为克隆后的副本，但此时复制的新节点不具有任何行为

（2）clone(true)：复制元素的同时也复制元素中的事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>复制节点应用实例</title>
  <script type="text/javascript" src="../script/jquery-3.7.1.min.js"></script>
  <script type="text/javascript">
    $(function () {
      //点击p弹出文本信息
      $("p").click(function () {
        //隐式的传入this,this是每一个p的dom对象
        alert("段落的内容= " + $(this).text());
      })

      //克隆p，插入到按钮后面
      //$("p").clone() 表示克隆p元素，但是没有复制事件
      //$("p").clone(true) 表示克隆p元素，同时复制事件
      $("p").clone(true).insertAfter($("button"));
    });
  </script>
</head>
<body>
<button>保存</button>
<br><br><br><br><br>
///////////////////////////////////////////////<br>
<p>段落 1</p>
<p>段落 2</p>
<p>段落 3</p>
<p>段落 4</p>
<p>段落 5</p>
</body>
</html>
```

#### 11.5.5 替换节点

（1）replaceWith()：将所有匹配的元素都替换为指定的HTML或JQuery元素 A.replaceWith(B)

（2）replaceAll()：颠倒了的 replaceWith() 方法 A.replaceAll(B)

（3）注意：若在替换之前已经在元素上绑定了事件，替换后原先绑定的事件会与原先的元素一起消失

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>替换节点应用实例</title>
  <script type="text/javascript" src="../script/jquery-3.7.1.min.js"></script>
  <script type="text/javascript">
    $(function () {
      //1.将所有的p替换成button
      //$("p").replaceWith("<input type='button' id='my' value='我的按钮'/>");

      //2.将所有的p替换成超链接
      //$("p").replaceWith("<a href='http://www.baidu.com'>点击到百度</a><br/>");

      //3.使用对象来进行替换
      var $button = $("<input type='button' id='my' value='我的按钮~' />");
      $button.click(function () {
        alert("ok~~~");
      })
      $("p").replaceWith($button);

    })
  </script>
</head>
<body>
<h1>节点替换</h1>
<p>Hello</p>
<p>jquery</p>
<p>World</p>
</body>
</html>
```

#### 11.5.6 属性操作

（1）attr()：获取属性和设置属性

（2）attr()：传递一个参数时，即为某元素获取指定属性

（3）attr()：传递两个参数时，即为某元素设置指定属性的值

（4）JQuery中有很多方法都是一个函数实现获取和设置，如：attr()、html()、text()、val()、height()

（5）removeAttr()：删除指定元素的指定属性

#### 11.5.7 样式操作

（1）获取class和设置class：class是元素的一个属性，所以获取class和设置class都可以使用attr()方法来完成

（2）追加样式：addClass()

（3）移除样式：removeClass() ----- 从匹配的元素中删除全部或指定的class

（4）切换样式：toggleClass() ----- 控制样式上的重复切换，如果类名存在则删除它，如果类名不存在则添加它

（5）判断是否含有某个样式：hasClass() ----- 判断元素中是否含有某个class，如果有，则返回true；否则返回false

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>查找节点</title>
    <style type="text/css">
        div {
            width: 140px;
            height: 140px;
            margin: 20px;
            float: left;
            border: #000 1px solid;
        }
        .one {
            width: 140px;
            height: 140px;
            margin: 20px;
            background: #9999CC;
            border: #000 1px solid;
            float: left;
            font-size: 17px;
            font-family: Roman;
        }
    </style>
    <script type="text/javascript" src="../script/jquery-3.7.1.min.js"></script>
    <script type="text/javascript">
        $(function () {
            //按钮1:获取 class 和设置 class 都可以使用 attr() 方法来完成(给 id 为first 添加 .one 样式)
            $("#b1").click(function () {
                $("#first").attr("class","one");
            })

            //按钮2: 追 加 样 式 : addClass() ( 给 id 为 first 添 加 .one 样 式 )
            $("#b2").click(function () {
                $("#first").addClass("one");
            })

            //按钮3:移除样式: removeClass() --- 从匹配的元素中删除全部或指定的class(给 id 为 first 删除 .one 样式)
            $("#b3").click(function () {
                $("#first").removeClass();
            })

            //按钮4:切换样式: toggleClass() (给 id 为 first 切换 .one 样式) --- 控制样式上的重复切换.如果类名存在则删除它, 如果类名不存在则添加它
            $("#b4").click(function () {
                $("#first").toggleClass("one");
            })

            //按钮5:判断是否含有某个样式: hasClass() --- 判断元素中是否含有某个 class, 如果有, 则返回 true; 否则返回 false
            $("#b5").click(function () {
                alert($("#first").hasClass("one"));
            })
        });
    </script>
</head>
<body>
<input type="button" value="获取 class 和设置 class 都可以使用 attr() 方法来完成(给 id 为first 添加 .one 样式)" id="b1"/><br/><br/>
<input type="button" value=" 追 加 样 式 : addClass() ( 给 id 为 first 添 加 .one 样 式 )" id="b2"/><br/><br/>
<input type="button" value="移除样式: removeClass() --- 从匹配的元素中删除全部或指定的class(给 id 为 first 删除 .one 样式) " id="b3"/><br/><br/>
<input type="button" value="切换样式: toggleClass() (给 id 为 first 切换 .one 样式) --- 控制样式上的重复切换.如果类名存在则删除它, 如果类名不存在则添加它" id="b4"/><br/><br/>
<input type="button" value="判断是否含有某个样式: hasClass() --- 判断元素中是否含有某个 class, 如果有, 则返回 true; 否则返回 false" id="b5"/><br/><br/>
<div id="first">first</div>
<div id="second">second</div>
</body>
</html>
```

#### 11.5.8 获取HTML、文本和值

（1）设置或返回所选元素的内容（包括HTML标记）：html()

（2）读取和设置某个元素中的文本内容：text()，该方法既可以用于html，也可以用于XML文档

（3）读取和设置某个元素中的值：val() ----- 该方法类似JavaScript中的value属性，对于文本框、下拉列表框、单选框，该方法可以返货它们的值

this.defaultValue可以获得表单元素的默认值属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>val()课堂练习</title>
  <script type="text/javascript" src="../script/jquery-3.7.1.min.js"></script>
  <script type="text/javascript">
    $(function () {
      //1. 给b1绑定一个获取焦点事件
      $("#b1").focus(function () {
        //获取-判断
        //获取到当前值
        var currentVal = $(this).val();
        //如果当前值就是默认值，就清空，让用户输入自己的值
        //this.defaultValue可以获得表单元素的默认值属性
        if (currentVal == this.defaultValue) {
          $(this).val("");
        }
      })
      //2. 给b1绑定一个失去焦点事件
      $("#b1").blur(function () {
        //获取当前值
        var currentVal = $(this).val();
        //判断如果当前值为""，说明用户没有输入内容
        //就恢复提示的默认值
        if (currentVal == "") {
          $(this).val(this.defaultValue);
        }
      })
    });
    
  </script>
</head>
<body>
<input type="text" value="用户邮箱/手机号/用户名" id="b1"/><br>
<input type="password" value="" id="b2"/><br>
<input type="button" value="登陆" id="b3"/>
</body>
</html>
```

#### 11.5.9 常用遍历节点方法

（1）取得匹配元素的所有子元素组成的集合：children() ----- 该方法只考虑子元素而不考虑任何后代元素

（2）取得匹配元素后面紧邻的同辈元素的集合：next()/nextAll()

（3）取得匹配元素前面紧邻的同辈元素的集合：prev()/prevAll()

（4）取得匹配元素前后所有的同辈元素：siblings()

（5）获取指定的第几个元素：nextAll().eq(index)

（6）对获取到的同辈元素进行过滤：nextAll().filter("标签")

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>常用遍历节点方法的应用实例</title>
  <style type="text/css">
    div, span {
      width: 140px;
      height: 60px;
      margin: 20px;
      background: #9999CC;
      border: #000 1px solid;
      float: left;
      font-size: 17px;
      font-family: Roman;
    }
  </style>
  <script type="text/javascript" src="../script/jquery-3.7.1.min.js"></script>
  <script type="text/javascript">
    $(function () {
      //**查找所有子元素（class 为 one 的 div 的子元素)
      $("#b1").click(function () {
        //我们可以使用这样的方式$("div[class='one']") 来选择
        //class 为 one 的 div
        $("div[class='one']").children().each(function () {
          alert("子 div 的内容是~~~ " + $(this).text());
        })
        // $("div.one").children().each(function (){
        // alert("子 div 的内容是= " + $(this).text());
        // })
        //指定获取到第几个子元素, eq(1) 表示得到第 2 个子元素
        //alert($("div.one").children().eq(1).text());
      })
      //***获取后面的同辈 div 元素（class 为 one 的 div 的)
      $("#b2").click(function () {
        //老师解读
        //1. $("div.one") 选择到 class = one 的 div
        //2. nextAll() 获取到后面所有的同辈元素
        //3. filter("div"), 获取到后面所有的同辈元素, 进行过滤，只得到 div
        //4. each 遍历
        $("div.one").nextAll().filter("div").each(function () {
          alert("后面同辈 div 的内容是= " + $(this).text());
        })
        //如果我们希望得到后面同辈元素的第几个，可以 eq
        //获取到后面同辈 div 元素的第 2 个
        alert("后面同辈 div 元素的第 2 个的内容=" + $("div.one").nextAll().filter("div").eq(1).text());//aaaa.. //如果我们希望得到的是紧邻的面同辈元
        alert("紧邻的面同辈元素=" + $("div.one").next().text());//ttt... })
      })
              
        //**获取前面的同辈 div 元素（class 为 one 的 div 的)
        $("#b3").click(function () {
          //遍历
          // $("div.one").prevAll().filter("div").each(function (){
          // alert("div 的内容= " + $(this).text());
          // })
          //得到前面的同辈元素第 4 个
          //$("div.one").prevAll().eq(3);
          //得到前面的紧邻同辈元素
          alert($("div.one").prev().text());//ccccc
        })
        //**获取所有的同辈 div 元素（class 为 one 的 div 的)
        $("#b4").click(function () {
          $("div.one").siblings().filter("div").each(function () {
            alert("同辈 div text= " + $(this).text())
          })
        })
      })
  </script>
</head>
<body>
<input type="button" value="查找所有子元素 (class 为 one 的 div 的)" id="b1"/><br/><br/>
<input type="button" value="获取后面的同辈元素 (class 为 one 的 div 的)" id="b2"/><br/><br/>
<input type="button" value="获取前面的同辈元素 (class 为 one 的 div 的)" id="b3"/><br/><br/>
<input type="button" value="获取所有的同辈元素 (class 为 one 的 div 的)" id="b4"/>
<hr/>
<div>
  ccccccc
</div>
<p class="one">
  ccccccc
</p>
<div class="one">
  <div id="one">
    XXXXXXXXX one
  </div>
  <div id="two">
    XXXXXXXXX two
  </div>
  <div id="three">
    XXXXXXXXX three
  </div>
  <div id="four">
    XXXXXXXXX four
  </div>
</div>
<div>
  tttttttttt
</div>
<div>
  aaaaaaa
</div>
<div>bbbbbb</div>
<p>hello, pp</p>
</body>
</html>
```

#### 11.5.10 CSS-DOM操作

（1）获取和设置元素的样式属性：css()

（2）获取和设置元素透明度：opacity属性

（3）获取和设置元素高度，宽度：height()、width()，在设置值时，若只传递数字，则默认单位是px，如需要使用其他单位则需传递一个字符串，例如 `$("p:first").height("2em")`

（4）获取元素在当前视窗中的相对位移：offset()，其返回对象包含了两个属性：top，left，该方法只对可见元素有效

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>css-dom 操作</title>
  <script type="text/javascript" src="../script/jquery-3.6.0.min.js"></script>
  <script type="text/javascript">
    $(function (){
      $("#b1").click(function (){
        var width = $("img").width();
        alert("width=" + width);
        //offset
        var offset = $("img").offset();
        alert("img 的 top = " + offset.top);
        alert("img 的 left = " + offset.left);
      })
    })
  </script>
</head>
<body>
<br/><br/><br/>
hello,world~<img src="../image/1.png" width="200">
<button id="b1" type="button">获取图片信息</button>
</body>
</html>
```

#### 11.5.11 多选框应用

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222059309.png)

### 11.6 作业







## 第12章 JSON、Ajax、ThreadLocal、文件上传下载

### 12.1 JSON

#### 12.1.1 JSON介绍

（1）JSON指的是JavaScript对象表示法

（2）JSON是轻量级的文本数据交换格式

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222059928.png)

（3）JSON独立于编成语言[即Java、PHP、asp.net等都可以使用JSON]

（4）JSON具有自我描述性，更易理解

#### 12.1.2 JSON快速入门

（1）JSON的定义格式：k-v

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222059440.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>json快速入门</title>
  <script type="application/javascript">
    var myJson = {
      "key1" : "韩顺平教育", //字符串
      "key2" : 123, //Number
      "key3" : [1,"hello",2.3], //数组
      "key4" : {"age" : 12, "name" : "jack"}, //json对象
      "key5" : [{"k1" : 10, "k2" : "milan"}, {"k3" : 30, "k4" : "smith"}] //json数组
    };

    //访问json的属性
    
    //1. 取出key1
    console.log("key1 = " + myJson.key1);
    
    //2. 取出key3,因为key3是数组，所以进行遍历
    for (var i = 0; i < myJson.key3.length; i++) {
      console.log("第%i个元素的值= ", i, myJson.key3[i]);
    }
    //3. 取出key4
    console.log("key4= ", myJson.key4, " name= ", myJson.key4.name);

    //4. 取出key5
    console.log("key5= ", myJson.key5, " k4 = ", myJson.key5[1].k4);
  </script>
</head>
<body>

</body>
</html>
```

#### 12.1.3 JSON对象和字符串对象转换

（1）JSON.stringify(json) 功能：将一个json对象转换成为json字符串

（2）JSON.parse(jsonString) 功能：将一个json字符串转换成为json对象

#### 12.1.4 JSON对象和字符串对象转换的注意事项和细节

（1）JSON.springify(json对象) 会返回对应的String对象，并不会影响原来的json对象

（2）JSON.parse(string对象) 函数会返回对应的json对象，并不会影响原来的String对象

（3）在定义json对象时，可以使用单引号表示字符串，但是在把原生字符串转成json对象时，必须使用双引号，否则会报错

（4）JSON.springify(json对象) 返回的字符串都是双引号表示的字符串，所以在语法格式正确的情况下是可以重新转成json对象的

#### 12.1.5 JSON在Java中使用

##### 12.1.5.1 说明

​			1）Java中使用JSON，需要引入第三方的gson.jar

​			2）Gson是Google提供的用来在Java对象和JSON数据之间进行映射的Java类库

​			3）可以在JSON字符串和Java对象之间相互转换

##### 12.1.5.2 JSON在Java中的应用场景

​			1）JavaBean对象和JSON字符串的转换

​			2）List对象和JSON字符串的转换

​			3）map对象和JSON字符串的转换

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222059188.png)

##### 12.1.5.3 Java对象和JSON字符串互转

```java
public class JavaJson {
    public static void main(String[] args) {
        //创建一个gson对象，当做一个工具对象使用
        Gson gson = new Gson();

        Book book = new Book(100, "韩顺平教育");

        //JavaBean对象(Java对象)转成json字符串
        String strBook = gson.toJson(book);
        System.out.println("strBook = " + strBook);

        //json字符串转成JavaBean对象(Java对象)
        /**
         * (1) strBook 就是json字符串
         * (2) Book.class 指定将 json 字符串转成Book对象
         * (3) 底层是反射机制
         * */
        Book book2 = gson.fromJson(strBook, Book.class);
        System.out.println("book2 = " + book2);
    }
}
```

##### 12.1.5.4 List对象和JSON字符串互转

```java
public void list_json() {
        //把list对象与json字符串相互转换
        List<Book> bookList = new ArrayList<>();
        bookList.add(new Book(200, "天龙八部"));
        bookList.add(new Book(300, "三国演义"));

        //把list对象转成json字符串
        String strBookList = gson.toJson(bookList);
        System.out.println("strBookList = " + strBookList);

        //把json字符串转成list对象
        /**
         * 如果需要把json字符串转成集合这样复杂的类型，需要使用gson提供的一个类TypeToken
         * TypeToken是一个自定义泛型类，然后通过TypeToken来指定我们需要转换成的类型
         * */
        
        //TypeToken返回类型的完整路径 java.util.List<com.hspedu.json.Book>
        //需要得到类型的完整路径，然后进行底层反射

        /**
         * 关于TypeToken
         * (1) 如果只使用 new TypeToken<List<Book>>() 而不加 {} 会报错
         * (2) 因为TypeToken的无参构造器是protected，而 new TypeToken<List<Book>>() 就是调用其无参构造器
         * (3) 又因为这个方法是protected，而且不在同一个包，所以不能直接访问，因此会报错
         * (4) 如果使用 new TypeToken<List<Book>>() {} 就可以，因为这个类型不是TypeToken，而是一个匿名内部类
         * (5) 而且这个匿名内部类是有自己的无参构造器，当执行子类的无参构造器时，默认调用super方法
         * */
        Type type = new TypeToken<List<Book>>() {}.getType();

        List<Book> bookList2 = gson.fromJson(strBookList, type);
        System.out.println("bookList2 = " + bookList2);
    }
```

##### 12.1.5.5 Map对象和JSON字符串互转

```java
public void map_json() {
        //把map对象转成json字符串
        Map<String, Book> bookMap = new HashMap<>();
        bookMap.put("k1", new Book(400, "射雕英雄传"));
        bookMap.put("k2", new Book(500, "西游记"));

        String strBookMap = gson.toJson(bookMap);
        System.out.println("strBookMap = " + strBookMap);

        //把json字符串转成map对象
        Map<String, Book> bookMap2 = gson.fromJson(strBookMap, new TypeToken<Map<String, Book>>() {
        }.getType());
    }
```

### 12.2 Ajax

#### 12.2.1 Ajax基本介绍

（1）AJAX是异步的JavaScript和XML

（2）Ajax是一种浏览器异步发起请求（指定发哪些数据），局部更新页面的技术

#### 12.2.2 Ajax经典应用场景

（1）搜索引擎根据用户输入关键字，自动提示检索关键字

（2）动态加载数据，按需取得数据[树形菜单、联动菜单...]

（3）改善用户体验[输入内容前提示、带进度条文件上传...]

（4）电子商务应用[购物车、邮件订阅...]

（5）访问第三方服务[访问搜索服务、rss阅读器]

（6）页面局部刷新

#### 12.2.3 传统的Web数据通信方式

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222059241.png)

#### 12.2.4 Ajax的Web数据通信方式

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222059048.png)

#### 12.2.5 应用实例-验证用户名是否存在

（1）在输入框输入用户名

（2）点击验证用户名，使用ajax方式，服务端验证该用户名是否已经占用了，如果该用户已经占用，以json格式返回该用户信息

（3）假定用户名为king就不可用，其它用户名可以

（4）对页面进行局部刷新，显示返回信息

第一步：画出思维导图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222059201.png)

第二步：写出大概框架

登录页面：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户注册</title>
    <script type="text/javascript">
    </script>
</head>
<body>
<h1>用户注册</h1>
<form action="/ajax/checkUserServlet" method="post">
    用户名字:<input type="text" name="username" id="uname">
    <input type="button" onclick="checkUser();" value="验证用户名">
    <input style="border-width: 0;color: red" type="text" id="myres"><br/><br/>
    用户密码:<input type="password" name="password"><br/><br/>
    电子邮件:<input type="text" name="email"><br/><br/>
    <input type="submit" value="用户注册">
</form>
<h1>返回的 json 数据</h1>
<div id="div1"></div>
</body>
</html>
```

用户信息--JavaBean

```java
/**
 * 这个User类就是一个JavaBean/Pojo/entity/domain
 * */
public class User {
    private Integer id;
    private String username;
    private String pwd;
    private String email;

    public User(Integer id, String username, String pwd, String email) {
        this.id = id;
        this.username = username;
        this.pwd = pwd;
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
```

CheckUserServlet

```java
public class CheckUserServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("CheckUserServlet被调用");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
```

配置文件

```xml
<servlet>
        <servlet-name>CheckUserServlet</servlet-name>
        <servlet-class>com.hspedu.ajax.servlet.CheckUserServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>CheckUserServlet</servlet-name>
        <url-pattern>/checkUserServlet</url-pattern>
    </servlet-mapping>
```

第二步：实现ajax发送http请求给CheckUserServlet

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户注册</title>
    <script type="text/javascript">
        window.onload = function () {
            var checkButton = document.getElementById("checkButton");
            //给checkButton绑定onclick
            checkButton.onclick = function () {
                //1. 创建XMLHttpRequest对象(ajax引擎对象)
                var xhr = new XMLHttpRequest();

                //2. 获取用户填写的用户名
                var uname = document.getElementById("uname").value;

                //3. 准备发送指定数据(open或send),这里只是准备还没有正式发送
                /*
                * "GET"请求方式可以是 GET/POST
                * "/ajax/checkUserServlet?username=" + uname 就是url
                * true 表示异步发送
                * */
                xhr.open("GET","/ajax/checkUserServlet?uname=" + uname, true);

                //4. 真正发送ajax请求(ajax发送Http请求)
                //如果是POST请求，可以在send的()里填写要发送的数据，GET请求是写在了url里
                xhr.send();
            }
        }
    </script>
</head>
<body>
<h1>用户注册</h1>
<form action="/ajax/checkUserServlet" method="get">
    用户名字:<input type="text" name="username" id="uname">
    <input type="button" id="checkButton" value="验证用户名">
    <input style="border-width: 0;color: red" type="text" id="myres"><br/><br/>
    用户密码:<input type="password" name="password"><br/><br/>
    电子邮件:<input type="text" name="email"><br/><br/>
    <input type="submit" value="用户注册">
</form>
<h1>返回的 json 数据</h1>
<div id="div1"></div>
</body>
</html>
```

```java
public class CheckUserServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("CheckUserServlet被调用");

        //接收ajax提交的数据
        String uname = request.getParameter("uname");
        System.out.println("uname = " + uname);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
```

其余代码不变

第三步：实现ajax接收到CheckUserServlet的响应后做出反应

```java
public class CheckUserServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("CheckUserServlet被调用");

        //接收ajax提交的数据
        String uname = request.getParameter("uname");
        System.out.println("uname = " + uname);

        response.setContentType("text/html;charset=utf-8");
        //假定用户名king已存在，则不能使用
        if ("king".equals(uname)) {
            User king = new User(100, "king", "666", "king@sohu.com");
            //用json格式返回
            //把king转成json字符串
            String strKing = new Gson().toJson(king);
            //返回
            response.getWriter().write(strKing);
        } else {
            //如果用户名没有被占用，返回""
            response.getWriter().write("");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户注册</title>
    <script type="text/javascript">
        window.onload = function () {
            var checkButton = document.getElementById("checkButton");
            //给checkButton绑定onclick
            checkButton.onclick = function () {
                //1. 创建XMLHttpRequest对象(ajax引擎对象)
                var xhr = new XMLHttpRequest();

                //2. 获取用户填写的用户名
                var uname = document.getElementById("uname").value;

                //3. 准备发送指定数据(open或send),这里只是准备还没有正式发送
                /*
                * "GET"请求方式可以是 GET/POST
                * "/ajax/checkUserServlet?username=" + uname 就是url
                * true 表示异步发送
                * */
                xhr.open("GET","/ajax/checkUserServlet?uname=" + uname, true);

                //在send函数调用前，给XMLHttpRequest绑定一个事件 onreadystatechange
                //该事件表示可以指定一个函数，当数据变化时，会触发 onreadystatechange
                //每当xhr对象的属性readyState改变时，就会触发 onreadystatechange
                //readyState会随着请求和响应的情况进行改变
                /*
                readyState:
                   0: 请求未初始化
                   1: 服务器连接已建立
                   2: 请求已接收
                   3: 正在处理请求
                   4: 请求已完成且响应已就绪
                */
                xhr.onreadystatechange = function () {
                    //xhr里面存放了信息
                    console.log("xhr= " , xhr);
                    //如果请求已完成，且响应已就绪，并且状态码是200
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        var responseText = xhr.responseText;
                        //console.log("返回的信息= " + responseText);
                        if (responseText != "") {
                            //说明用户名已经被占用，就不可用了
                            document.getElementById("myres").value = "用户名不可用";
                        } else {
                            document.getElementById("myres").value = "用户名可用";
                        }
                        //也可以把响应的json数据显示在下方div
                        document.getElementById("div1").innerHTML = xhr.responseText;
                    }
                }

                //4. 真正发送ajax请求(ajax发送Http请求)
                //如果是POST请求，可以在send的()里填写要发送的数据，GET请求是写在了url里
                xhr.send();
            }
        }
    </script>
</head>
<body>
<h1>用户注册</h1>
<form action="/ajax/checkUserServlet" method="get">
    用户名字:<input type="text" name="username" id="uname">
    <input type="button" id="checkButton" value="验证用户名">
    <input style="border-width: 0;color: red" type="text" id="myres"><br/><br/>
    用户密码:<input type="password" name="password"><br/><br/>
    电子邮件:<input type="text" name="email"><br/><br/>
    <input type="submit" value="用户注册">
</form>
<h1>返回的 json 数据</h1>
<div id="div1"></div>
</body>
</html>
```

第四步：升级，连接数据库

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222059368.png)

代码见`D:\Study\Code\IDEA\JavaWeb\hsp\ajax`

#### 12.2.6 JavaScript原生Ajax请求问题

（1）编写原生的Ajax要写很多的代码，还要考虑浏览器兼容问题，使用不方便

（2）在实际工作中，一般使用JavaScript的库（比如JQuery）发送Ajax请求，从而解决这个问题

#### 12.2.7 JQuery的Ajax请求

##### 12.2.7.1 `$.ajax`方法

（1）`$.ajax`常用参数

​			url：请求的地址

​			type：请求的方式get或post

​			data：发送到服务器的数据，将自动转换为请求字符串格式

​			success：成功的回调函数

​			error：失败后的回调函数

​			dataTyep：返回的数据类型，常用json或text

##### 12.2.7.2 `$.get`请求和`$.post`请求

（1）`$.get`请求和`$.post`请求的常用参数

​			url：请求的url地址

​			data：请求发送到服务器的数据

​			success：成功时回调函数

​			type：返回内容格式，xml、html、script、json、text

（2）说明：`$.get`请求和`$.post`请求的底层还是使用`$.ajax()`方法来实现异步请求

##### 12.2.7.3 `$.getJSON`

（1）常用参数

​			url：请求发送哪个url

​			data：请求发送到服务器的数据

​			success：请求成功时运行的函数

（2）说明：`$.getJSON`底层使用`$.ajax()`方法来实现异步请求

##### 12.2.7.4 应用实例

###### 12.2.7.4.1 `$.ajax`方法实例-验证用户名是否存在-JQuery发送Ajax请求

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户注册</title>
    <script type="text/javascript" src="./script/jquery-3.6.0.min.js"></script>
    <script type="text/javascript">
        $(function () {
            //绑定事件
            $("#btn1").click(function () {
                //发出ajax
                /**
                 * (1)指定参数时，需要在{}里写
                 * (2)给参数时，前面需要指定参数名
                 * (3)dataType:"json" 要求服务器返回的数据格式是json
                 * */
                $.ajax({
                    url:"/ajax/checkUserServlet2",
                    type:"POST",
                    data:{//这里我们直接给JSON,传日期是为了防止浏览器缓存
                        username: $("#uname").val(),
                        date: new Date(),
                    },
                    error: function () { //失败后的回调函数
                        console.log("失败")
                    },

                    //响应的数据返回给success
                    success: function (data, status, xhr) {
                        console.log("成功");
                        console.log("data = " , data);
                        console.log("status = " , status);
                        console.log("xhr = " , xhr);

                        $("#div1").html(JSON.stringify(data));
                        if("" == data.username) {
                            $("#myres").val("该用户名可用");
                        } else {
                            $("#myres").val("该用户名不可用");
                        }
                    },
                    dataType: "json"
                })
            })
        })
    </script>
</head>
<body>
<h1>用户注册-JQuery+Ajax</h1>
<form action="/ajax/checkUserServlet2" method="post">
    用户名字:<input type="text" name="username" id="uname">
    <input type="button" id="btn1" value="验证用户名">
    <input style="border-width: 0;color: red" type="text" id="myres"><br/><br/>
    用户密码:<input type="password" name="password"><br/><br/>
    电子邮件:<input type="text" name="email"><br/><br/>
    <input type="submit" value="用户注册">
</form>
<h1>返回的 json 数据</h1>
<div id="div1"></div>
</body>
</html>
```

```java
public class CheckUserServlet2 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("CheckUserServlet2 被调用");
        //接收JQuery发送的Ajax数据
        String username = request.getParameter("username");
        System.out.println("jquery ajax username = " + username);

        response.setContentType("text/json;charset=utf-8");
        Gson gson= new Gson();
        if ("king".equals(username)) {
            User user = new User(100, "king", "abc", "king@sohu.com");
            response.getWriter().write(gson.toJson(user));
        } else {
            //返回一个不存在的User
            User user = new User(-1, "", "", "");
            response.getWriter().write(gson.toJson(user));
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
```

12.2.7.4.2 `$.get`方法实例-验证用户名是否存在-JQuery发送Ajax请求

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户注册</title>
    <script type="text/javascript" src="./script/jquery-3.6.0.min.js"></script>
    <script type="text/javascript">
        $(function () {
            //绑定事件
            $("#btn1").click(function () {
                //发出ajax
                /**
                 * (1)指定参数时，需要在{}里写
                 * (2)给参数时，前面需要指定参数名
                 * (3)dataType:"json" 要求服务器返回的数据格式是json
                 * */
                /*$.ajax({
                    url:"/ajax/checkUserServlet2",
                    type:"POST",
                    data:{//这里我们直接给JSON,传日期是为了防止浏览器缓存
                        username: $("#uname").val(),
                        date: new Date(),
                    },
                    error: function () { //失败后的回调函数
                        console.log("失败")
                    },

                    //响应的数据返回给success
                    success: function (data, status, xhr) {
                        console.log("成功");
                        console.log("data = " , data);
                        console.log("status = " , status);
                        console.log("xhr = " , xhr);

                        $("#div1").html(JSON.stringify(data));
                        if("" == data.username) {
                            $("#myres").val("该用户名可用");
                        } else {
                            $("#myres").val("该用户名不可用");
                        }
                    },
                    dataType: "json"
                })*/

                //.get的使用
                /**
                 * (1)$.get()默认是get请求，不需要指定请求方式
                 * (2)不需要指定参数名
                 * (3)实参要按顺序填写:url, data, success回调函数, 返回的数据格式
                 * */
                $.get(
                    "/ajax/checkUserServlet2",
                    {
                        username: $("#uname").val(),
                        date: new Date(),
                    },
                    function (data, status, xhr) {
                        console.log("$.get 成功");
                        console.log("data = " , data);
                        console.log("status = " , status);
                        console.log("xhr = " , xhr);

                        $("#div1").html(JSON.stringify(data));
                        if("" == data.username) {
                            $("#myres").val("该用户名可用");
                        } else {
                            $("#myres").val("该用户名不可用");
                        }
                    },
                    "json"
                )
            })
        })
    </script>
</head>
<body>
<h1>用户注册-JQuery+Ajax</h1>
<form action="/ajax/checkUserServlet2" method="post">
    用户名字:<input type="text" name="username" id="uname">
    <input type="button" id="btn1" value="验证用户名">
    <input style="border-width: 0;color: red" type="text" id="myres"><br/><br/>
    用户密码:<input type="password" name="password"><br/><br/>
    电子邮件:<input type="text" name="email"><br/><br/>
    <input type="submit" value="用户注册">
</form>
<h1>返回的 json 数据</h1>
<div id="div1"></div>
</body>
</html>
```

```java
public class CheckUserServlet2 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("CheckUserServlet2 被调用");
        //接收JQuery发送的Ajax数据
        String username = request.getParameter("username");
        System.out.println("jquery ajax username = " + username);

        response.setContentType("text/json;charset=utf-8");
        Gson gson= new Gson();
        if ("king".equals(username)) {
            User user = new User(100, "king", "abc", "king@sohu.com");
            response.getWriter().write(gson.toJson(user));
        } else {
            //返回一个不存在的User
            User user = new User(-1, "", "", "");
            response.getWriter().write(gson.toJson(user));
        }
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
```

###### 12.2.7.4.3 `$.post`方法实例-验证用户名是否存在-JQuery发送Ajax请求

post方法和get方法一样，就把get改成post就行了

###### 12.2.7.4.4 `$.getJSON`方法实例-验证用户名是否存在-JQuery发送Ajax请求

.getJSON方法就是把数据格式的参数去掉就行了

```html
$.getJSON(
	"/ajax/checkUserServlet2",
	{
		username: $("#uname").val(),
        date: new Date(),
    },
    function (data, status, xhr) {
        console.log("$.get 成功");
        console.log("data = " , data);
        console.log("status = " , status);
        console.log("xhr = " , xhr);

        $("#div1").html(JSON.stringify(data));
        if("" == data.username) {
        	$("#myres").val("该用户名可用");
        } else {
            $("#myres").val("该用户名不可用");
        }
    }
)
```

### 12.3 ThreadLocal-线程数据共享和安全

#### 12.3.1 ThreadLocal介绍

（1）ThreadLocal可以实现在同一个线程进行数据共享，从而解决多线程数据安全问题

（2）ThreadLocal可以给当前线程关联一个数据（普通变量、对象、数组），存数据用set方法

（3）ThreadLocal可以像Map一样存取数据，key为当前线程，取数据用get方法

（4）每一个ThreadLocal对象，只能为当前线程关联一个数据，如果要为当前线程关联多个数据，就需要使用多个ThreadLocal对象实例

（5）每个ThreadLocal对象实例定义的时候，一般为static类型

（6）ThreadLocal中保存数据，在线程销毁后会自动释放。

#### 12.3.2 ThreadLocal快速入门

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222100091.png)

```java
//T1类
public class T1 {
    //创建ThreadLocal对象,做成public static
    public static ThreadLocal<Object> threadLocal1 = new ThreadLocal<>();

    //Task是线程类，属于内部类
    public static class Task implements Runnable {
        @Override
        public void run() {
            Dog dog = new Dog();
            Pig pig = new Pig();

            //给ThreadLocal1对象放入set dog
            System.out.println("Task 放入了 dog = " + dog);
            threadLocal1.set(dog);

            System.out.println("Task 在run方法中 线程= " + Thread.currentThread().getName());
            new T1Service().update();
        }
    }
    public static void main(String[] args) {
        new Thread(new Task()).start();//主线程启动一个新的线程，注意不是主线程
    }
}
```

```java
//T1Service
public class T1Service {
    public void update(){
        //因为只能放一个对象，所以get()里不用写参数
        Object o = T1.threadLocal1.get();

        //获取当前线程名
        String name = Thread.currentThread().getName();
        System.out.println("在 T1Service 的 update() 线程 name= " + name + " dog = " + o);
        //调用dao-update
        new T2DAO().update();
    }
}
```

```java
//T2DAO
public class T2DAO {
    public void update() {
        //取出线程关联的ThreadLocal对象的数据
        Object o = T1.threadLocal1.get();
        //获取当前线程名
        String name = Thread.currentThread().getName();
        System.out.println("在 T2DAO 的 update() 线程是= " + name + "取出对象名 = " + o);
    }
}
```

```java
public class Dog {
}

public class Pig {
}
```

#### 12.3.3 ThreadLocal源码解读

set方法源码

```java
public void set(T value) {
    //获取当前线程，关联到当前线程
    Thread t = Thread.currentThread();
    //通过线程对象，获取到ThreadLocalMap，ThreadLocalMap是ThreadLocal的内部类
    ThreadLocalMap map = getMap(t);
    //如果map不为null，将数据放入map，map里的key值(this)就是调用它的线程对象，我们这就是threadLocal1，value值存放数据
    //由此可以看出一个threadLocal1只能关联一个数据，如果再存，就会替换之前的
    //如果map为null，就创建一个和当前线程关联的ThreadLocalMap，并且将该数据放入
    if (map != null) {
        map.set(this, value);
    } else {
        createMap(t, value);
    }
}
```

get方法源码分析

```java
public T get() {
    //先得到当前的线程对象
	Thread t = Thread.currentThread();
    //通过线程获取到对应的ThreadLocalMap
    ThreadLocalMap map = getMap(t);
    if (map != null) {
        //如果map不为空，根据当前的threadLocal对象，得到对应的Entry
    	ThreadLocalMap.Entry e = map.getEntry(this);
        //如果e不为null
    	if (e != null) {
    		@SuppressWarnings("unchecked")
            //返回当前threadLocal关联的数据value
    		T result = (T)e.value;
    		return result;
    	}
    }
    return setInitialValue();
}
```

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222100896.png)

### 12.4 文件上传下载

#### 12.4.1 文件上传

##### 12.4.1.1 文件上传流程图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222100450.png)

##### 12.4.1.2 文件上传

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <base href="<%=request.getContextPath()+"/"%>>">
    <style type="text/css">
        input[type="submit"] {
            outline: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: #31B0D5;
            border: none;
            width: 70px;
            height: 35px;
            font-size: 20px;
        }
        img {
            border-radius: 50%;
        }
        form {
            position: relative;
            width: 200px;
            height: 200px;
        }
        input[type="file"] {
            position: absolute;
            left: 0;
            top: 0;
            height: 200px;
            opacity: 0;
            cursor: pointer;
        }
    </style>
    <script type="text/javascript">
        function prev(event) {
            //获取展示图片的区域
            var img = document.getElementById("prevView");
            //获取文件对象
            let file = event.files[0];
            //获取文件阅读器,JS的一个类，直接使用即可
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
            //给 img 的 src 设置图片 url
                img.setAttribute("src", this.result);
            }
        }
    </script>
</head>
<body>
<!-- 表单的 enctype 属性要设置为 multipart/form-data -->
<form action="fileUploadServlet" method="post" enctype="multipart/form-data">
    家居图: <img src="2.jpg" alt="" width="200" height="200" id="prevView">
    <input type="file" name="pic" id="" value="" onchange="prev(this)"/>
    家居名: <input type="text" name="name"><br/>
    <input type="submit" value="上传"/>
</form>
</body>
</html>
```

```java
public class FileUploadServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //System.out.println("FileUploadServlet 被调用");

        //1. 判断是不是文件表单(enctype="multipart/form-data")
        if (ServletFileUpload.isMultipartContent(request)) {
            //System.out.println("OK");
            //2. 创建 DiskFileItemFactory 对象，用于构建一个解析上传数据的工具对象
            DiskFileItemFactory diskFileItemFactory = new DiskFileItemFactory();
            //3. 创建一个解析上传数据的工具对象
            ServletFileUpload servletFileUpload = new ServletFileUpload(diskFileItemFactory);

            //解决接收到的文件名是中文而有乱码的问题
            servletFileUpload.setHeaderEncoding("utf-8");

            //4. servletFileUpload对象可以把表单提交的数据比如 文本或文件,封装到 FileItem 文件项中
            try {
                List<FileItem> list = servletFileUpload.parseRequest(request);
                /*
                    list= [name=preview.jpg, StoreLocation=D:\Download\Tomcat\Tomcat8.0\temp\\upload_15d56923_18e66184b34__7f8c_00000000.tmp, size=73913bytes, isFormField=false, FieldName=pic,
                           name=null, StoreLocation=D:\Download\Tomcat\Tomcat8.0\temp\\upload_15d56923_18e66184b34__7f8c_00000001.tmp, size=6bytes, isFormField=true, FieldName=name]
                */
                //System.out.println("list= " + list);
                //遍历并分别处理
                for (FileItem fileItem : list) {
                    //System.out.println("fileItem= " + fileItem);
                    //判断是不是一个文件
                    if(fileItem.isFormField()) { //如果是true就是文本(input text)
                        String name = fileItem.getString("utf-8");
                        System.out.println("家居名 = " + name);
                    } else { //是一个文件
                        //获取上传的文件的名字
                        String name = fileItem.getName();
                        System.out.println("上传的文件名 = " + name);

                        //把这个上传到服务器temp目录下的文件保存到指定的目录
                        //1. 指定一个目录，就是网站工作目录下
                        String filePath = "/upload";
                        //2. 获取到完整目录
                        String fileRealPath = request.getServletContext().getRealPath(filePath);
                        //fileRealPath= D:\Study\Code\IDEA\JavaWeb\hsp\fileupdown\out\artifacts\fileupdown_war_exploded\\upload
                        System.out.println("fileRealPath= " + fileRealPath);
                        //3. 创建这个上传的目录
                        //为了不把所有的文件都放在同一个目录下，写一个工具类可以返回/2024/3/22,每天创建一个新的目录用来存放文件
                        File fileRealPathDirectory = new File(fileRealPath + WebUtils.getYearMonthDay());
                        if (!fileRealPathDirectory.exists()) {//不存在就创建
                            fileRealPathDirectory.mkdirs();
                        }

                        //4. 将文件拷贝到fileRealPathDirectory
                        //构建一个上传文件的完整路径：目录 + 文件名
                        //解决文件覆盖问题
                        //对上传的文件名进行处理,前面增加一个前缀,保证是唯一的即可
                        name = UUID.randomUUID().toString() + "_" + System.currentTimeMillis() + "_" + name;
                        String fileFullPath = fileRealPathDirectory + "/" + name;
                        fileItem.write(new File(fileFullPath));

                        //5. 提示信息
                        response.setContentType("text/html;charset=utf-8");
                        response.getWriter().write("上传成功");
                    }
                }
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        } else {
            System.out.println("不是文件表单...");
        }

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
```

##### 12.4.1.3 文件上传注意事项和细节

（1）如果将文件都上传到一个目录下，当上传文件很多时会造成访问文件速度变慢，因此可以将文件上传到不同的目录，比如在同一天上传的文件统一放到一个文件夹2024/3/22文件夹

（2）一个完美的文件上传要考虑的因素很多，比如断点续传、控制图片大小、尺寸、分片上传、防止恶意上传等，在项目中可以考虑使用WebUploader组件（百度开发）

（3）文件上传功能在项目中建议有限制的使用，一般用在头像、证明、合同、产品展示等，如果不加限制，会造成服务器空间被大量占用（比如B站评论就不能传图片，微信发1次朋友圈最多9张图等..）

（4）文件上传时，在web目录下创建一个upload文件夹，在Tomcat启动时，没有在out目录下创建对应的upload文件夹，原因是Tomcat对应的空目录是不会在out下创建相应目录的，所以只需在upload目录下放一个文件即可，这个是IDEA + Tomcat的问题，实际开发不会存在

#### 12.4.2 文件下载

##### 12.4.2.1 文件下载流程图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222100406.png)

##### 12.4.2.2 文件下载代码

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>文件下载</title>
    <base href="<%=request.getContextPath()+"/"%>>">
</head>
<body>
<h1>文件下载</h1>
<a href="fileDownloadServlet?name=1.jpg">点击下载小狗图片</a><br/><br/>
<a href="fileDownloadServlet?name=韩顺平零基础Java笔记.pdf">点击下载 韩顺平零基础 Java 笔记.pdf</a><br/><br/>
</body>
</html>

```



```java
public class FileDownloadServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //System.out.println("FileDownloadServlet被调用");
        //1. 先准备要下载的文件
        //保证当我们Tomcat启动后，在工作目录out下有download文件夹，并且有可供下载的文件
        //2. 获取要下载的文件的名字
        request.setCharacterEncoding("utf-8");
        String downLoadFileName = request.getParameter("name");
        System.out.println("downLoadFileName = " + downLoadFileName);

        //给http响应设置响应头 Content-Type,就是文件的MIME
        //通过servletContext来获取
        ServletContext servletContext = request.getServletContext();
        String downLoadPath = "/download/"; //下载目录从web工程根目录计算
        String downLoadFileFullPath = downLoadPath + downLoadFileName;
        String mimeType = servletContext.getMimeType(downLoadFileFullPath);
        System.out.println("mimeType = " + mimeType);
        response.setContentType(mimeType);

        //给http响应设置响应头 Content-Disposition
        //(1)如果是Firefox 则中文编码需要 base64
        //(2)Content-Disposition 是指定下载的数据的展示形式 , 如果attachment 则使用文件下载方式
        //(3)如果是其他(主流ie/chrome) 中文编码使用URL编码
        if (request.getHeader("User-Agent").contains("Firefox")) {
            // 火狐 Base64编码
            response.setHeader("Content-Disposition", "attachment; filename==?UTF-8?B?" +
                    new BASE64Encoder().encode(downLoadFileName.getBytes("UTF-8")) + "?=");
        } else {
            // 其他(主流ie/chrome)使用URL编码操作
            response.setHeader("Content-Disposition", "attachment; filename=" +
                    URLEncoder.encode(downLoadFileName, "UTF-8"));
        }

        //读取下载的文件数据，返回给客户端/浏览器
        //(1)创建一个和要下载的文件关联的输入流
        InputStream resourceAsStream = servletContext.getResourceAsStream(downLoadFileFullPath);
        //(2)得到返回数据的输出流
        ServletOutputStream outputStream = response.getOutputStream();
        //(3)使用工具类将输入流关联的文件对拷到输出流，并返回给客户端/浏览器
        IOUtils.copy(resourceAsStream,outputStream);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
```

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222100534.png)

##### 12.4.2.3 文件下载注意事项和细节

（1）文件下载比较麻烦的就是文件中文名处理，要针对不同的浏览器做处理

（2）对于网站的文件，很多文件可以直接下载，对于大文件会使用专业的下载工具

