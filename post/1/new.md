+++
date = '2025-01-28T18:50:40+08:00'
author = "Brent"
draft = true
title = 'Python学习'
categories = [
    "Python"
]
tags = [
    "学习",
]
image = "https://img0.baidu.com/it/u=4178333864,3313587158&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666"


+++
**使用pycharm**
**Python有6种数据类型**
- 整数
- 浮点数
- 字符串
  >字符串需要用""包围起来
    
    ## 基本内容
  ### **字面量**
  ```Python
    666
    13.14
    "我是"
  ```
  ```Python
    # 进行输出字面量（**print**）
    print(666)
    print(13.14)
    print("黑马程序员")
  ```
  ### **注释**
    ```Python
    # 以#作为开头，以一个空格隔开（单行注释）
    """
    多行注释的使用
    可以换行
    """
    666# 一个整数字面量
    13.14# 浮点数字面量
    print(666)
    print(13.14)
    print("黑马程序员")# 输出字符串字面量
    """
    多行注释可以用来
    """
    ```
    **ctrl+/**      快速注释           
    tab ,shift+tab  实现缩进与退4格        
    ### **变量**
    - 记录数据用的（储存）
  > 变量名称=变量值
  
    ```python
    money=49
    print("钱包还有:",money)# print可以输出多个数据，使用，隔开即可
    50-10
    50/2
    50*2
    money=money-10# 通过变量减
    print("钱包还有:",money)
    print("钱包还有:", money,"元，因为买了10元的冰淇淋")
    '''
    为什么使用变量，为了重复使用它
    '''
    print("现在是下午1点，钱包剩余：",money)
    print("现在是下午2点，钱包剩余：",money)
    print("现在是下午3点，钱包剩余：",money)
    print("现在是下午4点，钱包剩余：",money)
    # 变量的值可以改变！！！
    # print输出多份内容：print(1,2,3,4)
    ```
    **作业**
  
  ![](https://s2.loli.net/2025/01/28/g5FNaKtuVdEA8nv.png)
  
    ```python
    print("当前钱包余额：",50,"元")
    print("花费：",10,"元")
    print("花费：",10,"元")
    print("最终钱包剩余：",35,"元")
    ```
    ### 数据类型
    ```python
    """
    数据是有类型的
    可以使用type函数进行
    使用变量储存type返回值
    """
    print(type("我们"))
    print(type(666))
    print(type(11.233))
    a=type("wm")
    b=type(444)
    print(a)
    # 上述查看了字面量的类型
    # 还可以看看吧变量中储存数据的类型
    name="ssss"
    name_type=type(name)
    print(name_type)
    # 以上三种方式！！！
    # type是查看输出的类型（数据的类型）
    # 而非变量的类型，而是变量存储的数据的类型。
    ```
  |类型|描述|说明|
  | :-: | :----: |:----: |
  |string|字符串||
  |int|整形||
  |float|浮点数||
  
     >在python中，变量所存储的类型是无需声明的    
     变量在python中是没有类型的   
   type有返回值（目前的第一个有返回值的）
  
     ### 数据类型转换
     **为什么转换？**
     1. input默认是字符串
      三种：
    - int
    - float
    - str
>三者是有返回值的
  
  ```python
  a=str(11)
  b=int(11.11)
  c=float("12")
  d=int(float("12.92"))# "12.92"不能直接变成int?
  print(a,type(a))
  print(b,type(b))
  print(c,type(c))
  print(d,type(d))
  """
  任意数字都可以转字符串
  但是字符串转数字必须所有内容都是数字
  浮点数转换为整数丢失小数部分！！！
  """
  ```
  ### 标识符
  > 标识符和变量的关系    
  标识符包括**变量、类、方法**。

**三个规则**
>1. 内容限定     
    1. 英文    
    2. 中文(不推荐使用)     
    3. 数字(不能用在开头)     
    4. 下划线_
 > 2. 大小写敏感    
     1. a!=A
>3. 不可使用关键字    
    1. 不需要背     
    2. 大小写敏感也适用于关键字
 ```python
 # 1_name="ss" # 错误的
 #name_!="ss"
 a="333"
 A=666
 print(a,A)
 # 使用关键字是错误的！！！
 # class=1(×)
 Class=1# (√)
 ```
 **规范**
 - 明了
 - 简短
 - 下划线命名法
 - 英文字母小写或驼峰命名法
  ### 运算符
  - 算术运算符
![](https://s2.loli.net/2025/01/29/OTkxb2AfcRMC7Yu.png)
    使用    
  ```python
print("1+1=",1+1)
print("1-1=",1-1)
print("1*1=",1*1)
print("1/1=",1/1)
# /的返回值为浮点数类型？
print("11//2=",11//2)
print("11%2=",11%2)
print("2**2=",2**2)
  ```
  - 赋值运算符

![](https://s2.loli.net/2025/01/29/TnXGHAzCiKb2MJI.png)
```python
num=1
num+=1
# num=num+1
print(num)
num-=1
print(num)
```
### 字符串拓展
#### 字符串的定义
1. **单引号定义**
2. 双引号
3. 三引号"""ssss"""(用变量接受为字符串，反之为注释)     
==最常用为双引号==

**字符串包括'  "**
- 单引号定义
- 双引号定义
- 转义字符
```python
name1='"我是"'# "我是"
name2="'我是'"# '我是'
name3="\"我是\""# "我是"
```
#### 字符串的拼接
- +号
  >字面量与变量拼接      

  ```python
  print("我是"+"cb")
  print("woshi","cb")# 逗号分割中间会有空格
  age=19
  print("wojinnian"+str(age)+"suile")
  # 实现类型转换的拼接
  # 因为只能实现字符串的拼接
  ```
#### 字符串的格式化
- 变量太多事，拼接太麻烦了
- 无法与其他类型拼接
![](https://s2.loli.net/2025/01/30/DtioSVHmRT4KBpl.png)
**占位的方式**
与c语言类似的地方    
> %s相当于+str()的形式     
%用来占位               
s声明类型     

```Python
m="我叫"
n="%scb"%m
age=19
b="%s,年龄是%s"%(n,age)# 多变量占位
c="%s,年龄是%d"%(n,age)
```
1. %s 字符串
2. %d 整数
3. %f  浮点数
>这里的sdf实际上实现了类型转换         
必须符合之前的要求
#### 格式化的精度控制

> m.n来控制    m为宽度，n为小数精度    
> %7.2f   %5d      
> 小数部分和小数点也会计入宽度     
> 小数部分四舍五入        
> m比本身宽度小时，不生效
```python
num=11.1234567
print("精度控制%7.2f"%num)
print("精度控制%7.6f"%num)# 可见是优先看小数位数
print("精度控制%7.4f"%num)
print("精度控制%3f"%num)# 不生效
```
#### 快速格式化的方式
**f"{}"**
不限数据类型，不做精度控制，原样输出
```python
name="cb"
age=19
year=2005
print(f"我的名字是{name}，年龄是{age}，出生于{year}")
```
f"{变量}{变量}"的方式     
==适合对精度没有要求==
#### 表达式的格式化
表达式：一条有明确执行结果的代码语句     
- 1+1、5*2
- 变量的定义
```Python
print("1*1=%d"%(1*1))
print(f"1*2的结果是{1*2}")
print("字符串的类型名字是%s"%type("字符串"))
# 相当于得有返回值
```
小作业：
![](https://s2.loli.net/2025/01/31/WPJVLDxX2ohEs7y.png)

```python
name="博客"
price=19.99
code="003032"# 需要使用字符串定义！！！
factor=1.2
day=7
print(f"公司：{name}，股票代码{code}，当前股价{19.99}")
print("每日增长系数:%.1f，经过%d天的增长，股价达到了%.2f"%(factor,day,price*factor**day))# 可以直接表达式计算诶
```
### 数据输入
input语句
> 终于开始输入了
>获取键盘的输入
- print——输出
- inpuu——输入
  
```python
print("请告诉我你是谁")
name=input()
print("你是%s"%name)

name=input("请告诉我你是谁")# input中的内容相当于print
print("你是%s"%name)
# input输入的数据类型是字符串类型！！！
# 都当做字符串看待（无论输入什么）
# 需要数据类型转换
```
**小作业**
![](https://s2.loli.net/2025/01/31/1FaH3lVtJ5XW2Rf.png)
```python
print(f"你好：{input("名称")}，您是尊贵的：{input("类型")}用户，欢迎您的光临")
```

  ## 语句学习
  ### 布尔类型和比较运算符
  > 布尔类型    表示真假 
  > 比较运算    

1. 布尔类型    
   是否          
   是一种数字类型    
   - Ture(真)   1
   - False(假)    0
  > 赋值    
  > 比较运算     
  ```python
  result=10>5
  re="ad"=="ac"
  bool_1=True
  bool_2=False
  print(f"bool_1的变量内容是：{bool_1},类型是{type(bool_1)}")
  # 可以直接赋值
  # ==，！=，>,<,>=,<=
  bool_1=True
  bool_2=False
  print(f"bool_1的变量内容是：{bool_1},类型是{type(bool_1)}")
  num1=10
  num2=10
  print(f"num1==num2的结果是{num1==num2}")
  nm1="itc"
  nm2="ith"
  print(f"itc==ith的结果是{nm1==nm2}")
  # 还可以利用比较运算的方式进行赋值！！！（布尔类型）
  ```
![](https://s2.loli.net/2025/01/31/WkFdo1KjlXQHqPy.png)
> 六种比较运算符                      

  ### if语句基本格式
  **布尔类型在判断语句中的作用**
             
```python
age=30
if age>=18:# 冒号
  print("我已经成年了") # 有4行的缩进 tab
# 是通过缩进来看代码的归属
age=int(input("你的年龄是："))# input输入的都是字符串类型
if age>=18:
  print("我已经成年了")
else:
  print("没成年")
print("时间过得真快")

```
- if后面必须是布尔类型
- 不要忘记冒号
- 属于if的雨具有四个空格缩进

### if else语句
组合使用（不符合时输出的值）
```Python
if :
  1
  2
  3
  4
else:# else的缩进应该与if同级，语法与if一致
  1
  2
  3
  4
# else无需判断条件
```
### if elif else
多条件判断的实现
> if 条件：           
> elif 条件：       
> else:           
>
```python
if 1:
elif 2:
elif 3:
else:
# 例题
h=int(input("请输入你的身高(cm)："))
vip=int(input("请输入你的vip级别："))
if h<120:
    print("身高可以免费")# 先判断第一句，条件之间是互斥的
elif vip>3:
    print("vip可以免费")
else:
    print("不好意思，需要收费")
# ctrl+/:注释
if int(input("请输入你的身高(cm)："))<120:
    print("身高可以免费")
elif int(input("请输入你的vip级别：")):
    print("vip可以免费")
else:
    print("不好意思，需要收费")
# 此时非常简洁，并且一次无需输入多个变量！！
```
**注意事项**
- elif语句可以有很多个
- 判断是互斥和有顺序的
- 空格缩进不可以省去
从而实现多个条件的判断
### 判断语句的嵌套
**终极用法**         
嵌套使用          
外层判断——>内层判断      
![](https://s2.loli.net/2025/02/01/nIW92CxP8zGweqQ.png)
- 注意层次关系，空格缩进！
  ```python
  if int(input("你的身高是多少："))>120:
    print("身高不达标")
    if int(input("你的级别："))<4:
        print("级别不达标")
    else:
        print("级别达标")
  else :
      print("身高达标")
  ```
  **python的缩进十分重要，与c不同**    
 用缩进来区分代码块！！！
 ### 猜数字游戏
  ```Python
  import random
num=random.randint(1,10)# 产生随机数1~10
print(num)
a=int(input("输入你猜测的数字："))
if a==num:
    print("你猜中了")
else:
    if a>num:
        print("你猜的数字大了")
    else:
        print("你猜的数字小了")
    a = int(input("输入你猜测的数字："))
    if a == num:
        print("你猜中了")
    else:
        if a > num:
            print("你猜的数字大了")
        else:
            print("你猜的数字小了")
        a = int(input("输入你猜测的数字："))
        if a == num:
            print("你猜中了")
        else:
            print("都猜不中")
  ```
  多层嵌套，但是太过复杂了！
  ### 循环语句while
```python
# 基本形式
while 条件:
  1
  2
  3
  4
# 只要满足条件，就会无限循环执行
# 条件同样是布尔类型
```
> 案例
```python
i=0
while i<100:
    print("我喜欢你")
    i+=1# 要改变条件才能结循环
print(i)
# 求1~100的和！
i=1
s=0
while i<=100:
    s+=i
    i+=1# 结束条件设计
print(f"1加到100的和是：{s}")
```
1. 条件为布尔类型，Ture为继续循环，False为结束循环
2. 设置循环的终止条件
3. 同样需要空格确定代码归属
 > 数字炸弹游戏
 ```Python
 import random
num=random.randint(1,100)# 产生随机数
n=0# 记录猜的次数
flag=1# 布尔类型变量，循环的标记！
# flag=False/Ture也可以定义！
while flag:
    a=int(input("请输入一个数字："))# 循环条件要改变！
    if a==num:# 猜对时候的判断
        flag=0
    else:# 猜错
        if a>num:
            print("猜的数字大了")
        else:
            print("猜的数字小了")
    n+=1
print(f"猜对了，你猜的次数为：{n}")
 ```
 ### while循环嵌套使用
 ```Python
 i=1
  while i<=100:
    j = 1# 定义在循环体，使每次外层循环都会执行内层
    print(f"我喜欢你第{i}天")
    while j<=10:
        print(f"玫瑰花第{j}朵")
        j+=1
    i+=1# 要改变条件才能结循环
  print(f"坚持到{i-1}天，表白成功")
 ```
 1. 同理，缩进决定层次关系！
 2. 循环体条件需要改变！避免无限循环
 3. 难点：条件的控制，每一层有自己的循环条件
### 嵌套案例
> print输出不换行的实现
```Python
print("hello",end='')
print("world",end='')# 下面这个不改也行？
# 实现输出不换行
```
> 制表符\t
```Python
print("hello world")
print("hhh hhh")
# 对不齐
print("hello\tworld")
print("hhhhhh\thhh")
# 能对齐
# 所以\t相当于根据字数给格子
```
> 99乘法表
```Python
i=1
while i<=9:
    j=1
    while j<=i:
        if i!=j:
            print(f"{i}*{j}={i * j}\t",end='')# 制表符作用于前面元素
        else:
            print(f"{i}*{j}={i * j}")
        j+=1
    i+=1
    # 也可以利用print()实现换行，输出空内容，不用条件判断
```
  ### for循环
  #### 基本语法
  - while是自定义循环条件
  - for是“轮询”机制，一个个执行
  ```python
  # for 临时变量in 待处理的数据集
  name="abcdef"
  for x in name:
    print(x,end='')
  ```
  ![](https://s2.loli.net/2025/02/01/3H7x4wq9BLmGKy8.png)
  - 无法定义循环条件
  - 同样需要缩进
  ```python
  char=input("请输入一串字符")
  a=0
  for x in char:
      if x=='a':
          a+=1
  print(a)
  # 计算a的数目
  ```
  #### range语句
  >待处理数据集称为序列类型
  - 包括字符串、列表、元组等
  - 其内容可以一个个依次取出
  - range语句生成一个简单的数字序列
  > 语法：         
  1. range(num)为0开始，到num-1  
  2. range(num1,num2)  不含num2
  3. range(num1,num2,step) step为步径
  ```python
  for i in range(10,100,2):
    print(i)
    <!-- 10 12  ·····  98 -->
  ```
  #### 变量作用域
  ```Python
  for i in range(3):
    print(i)
  print(i)# i作用范围应该在for循环内部！
  ```
  > 全局变量，局部变量       
  想访问临时变量，可以先在循环外进行定义
  ### for的嵌套
  ```python
  # 同样的案例：
  i=1
  for i in range(1,101):
      print(f"今天是我表白的第{i}天，加油")
      for j in range(1,11):
          print(f"送的第{j}朵玫瑰花")
  print(f"表白的第{i}天成功")
  ```
  **空格缩进确定层次关系**        
  在嵌套中尤为重要！！
  - for与while循环可以嵌套使用
  ```python
  for i in range(1,10):
    for j in range(1,i+1):
        print(f"{j}*{i}={i*j}\t",end='')
    print()
  <!-- 利用for输出乘法表  -->
  ```
  ### 循环中断
  1. break
  2. continue
  - 跳出某次循环 ，进入下一次
  - 直接结束循环 
```python
# continue
for i in range(1,6):
  print("1")
  continue
  print("2")
# 只能作用于它所在的循环
for i in range(1,6):
  print("1")
  for j in range(1,3):

    print("2")
    continue
    print("3")# 只作用与这一句
  print("4")

```
```python
# break 直接结束所在整个循环
for i in range(1,100):
  print("1")
  break
  print("2")
print("3")
# 只输出1,3一次
# 同样只能控制所在的循环
```
### 案例

![](https://s2.loli.net/2025/02/02/hV46N1u9lydw8WU.png)
```Python
import random
n=10000
r=0
for i in range(1,21):
    r=random.randint(1,10)
    if(n==0):
        break
    if r<5:
        print(f"员工{i},绩效{r}，低于5，不发工资")
        continue
    else:
        n-=1000
        print(f"员工{i}，发放工资1000元,还剩{n}")
print("工资发完了")
```
## 函数
### 函数介绍
- 函数是可以重复使用的，有特定功能的代码段
- 比如len()函数,str()
```Python
# 自己开发功能，实现字符串长度计算！！
def my_len(data):
    count=0
    for i in data:
        count+=1
    print(f"字符串{data}的长度是{count}")
my_len("dsffg")
my_len("dsffgggg")
# 一组织好的，可重复使用，有特点功能
```
### 函数语法
```python
def 函数名(传入参数):# 有空格，要冒号
  函数体# tab
  return 返回值
# 定义函数，输出相关信息
def hi():
    print("hi")
# 函数的调用
函数名（参数）
hi()# 这个函数没有参数
```
- 参数不需要可以省略
- 返回值也可有可无
- 函数必须先定义后使用
### 函数参数的传入
**函数计算式，接受外部提供的数据
```python
def add(x,y):# 通过参数的传递实现
  result=x+y
  print(f"{x}+{y}={result}")
add(1,2)
# x和y，称为形式参数（形参）用逗号分割
# 外部的1,2为实际参数（实参），按照顺序传入，使用逗号分割
```
- 形参、实参
- 参数数量不限，使用逗号分开
- 传入参数时，要与形参一一对应，逗号隔开
```python
def tem():
    data=float(input("请输入你的体温："))
    if(data>37.5):
        print("不正常")
    else:
        print("正常")
tem()
```
### 函数返回值
```python
def add(a,b):
  result=a+b
  return result# result 为返回值 
  print("这句话不执行了")# return之后不执行！！
r=add(1,3)
print(r)
```
### None返回值
无返回值函数实际上就是返回了None这个字面量        
return None也可以，和不加这句一样
```python
def hi():
  return None
print(type(hi()))
# 类型为<class 'NoneType'>
# 在if判断中，None==False，用于判断
def check(age):
    if age>18:
        return "success"
    else:
        return None
r=check(16)
if r==None:
    print("未成年")
# 声明无初始值的变量：
name=None
```
**三种基本的用法**
### 函数说明文档
```python
def add(x,y):
  """
  add函数接受两个函数，俩个数相加的功能
  """
  result =x+y
  print(f"两数相加的结果是：{result}")
  return result
```
**通过多行注释，解释参数，返回值和功能！！**
### 函数的嵌套调用
在一个函数中调用另一个函数
```python
def b():
    print("2")
def a():
    print("1")
    b()
    print("3")
a()# 先输出1，在进入b，输出2，最后输出3
```
**b执行完成后才会执行a的剩余内容**
### 变量的作用域
- 局部变量
```Python
# 定义在函数体内部的变量，只在函数体内生效
def a():
  num=100
  print(num)
a()
print(num)# 错误
```
- 全局变量
```Python
num=200
def a():
  print(num)
def b():
  print(num)
a()
b()
print(num)
# 会执行3次
```
- 在函数内修改全局变量
```python
num=200
def a():
  print(num)
def b():
  num=500# 变成局部变量了，这个num和外面的num没有任何关系
  print(num)
a()
b()
print(num)
```
> 如何修改
```Python
num=200
def a():
  print(num)
def b():
  global num# ！！！！
  num=500# 变成全局变量了，这个num和外面的num是一个
  print(num)
a()
b()
print(num)
```
### 综合案例
[![屏幕截图 2025-02-02 205805.png](https://pic1.imgdb.cn/item/679f6d60d0e0a243d4f99905.png)](https://pic1.imgdb.cn/item/679f6d60d0e0a243d4f99905.png)

```Python
money=5000000
name=input("请输入你的名字")
flag=1
def cha():
    print("查询余额")
    print(f"{name}，你好，你的余额是{money}")
def cun(num):
    print("存款")
    global money
    money+=num
    print(f"{name}，你好，您存款{num}元成功")
    print(f"{name}，你好，你的余额是{money}")
def qu(num):
    print("存款")
    global money
    money-=num
    print(f"{name}，你好，您取款{num}元成功")
    print(f"{name}，你好，你的余额是{money}")
def tui():
    global flag
    flag=0
    return 1
while flag:
    print(f"{name}，您好，欢迎使用ATM，请选择操作：")
    print("查询余额\t【输入1】")
    print("存款\t\t【输入2】")
    print("取款\t\t【输入3】")
    print("退出\t\t【输入4】")
    xuan=int(input("请输入你的选择："))
    if xuan==1:
        cha()
    elif xuan==2:
        num=int(input("请输入数额"))
        cun(num)
    elif xuan==3:
        num = int(input("请输入数额"))
        qu(num)
    else:
        tui()
```
## 数据容器
### 入门
- 一种可以容纳多分数据的数据类型
- 容纳的数据元素    
按照：
1. 重复元素
2. 是否可以修改
3. 是否有序       
**可以分为**列表、元组、字符串、集合、字典
### 列表
#### 列表的定义
一个人的名字可以用字符串     
100个人使用列表
```Python
# 变量名称=[元素1，元素2····]# 列表内的数据称为元素
list =["ith","itc","python"]
print(list)
print(type(list))
# 简单的字符串列表，中括号，以逗号分隔
list =["ith",666,True]
print(list)
print(type(list))
# 列表中的元素类型可以不同！！
list =[[1,2,3],[1,2,4],[1,3,4,5]]
print(list)
print(type(list))
# 列表中可以嵌套列表！！！
```
**定义**
```Python
list =[[1,2,3],[1,2,4],[1,3,4,5]]
print(list)
print(type(list))
# <class 'list'>
```
- 元素类型没有限制！
#### 列表的下标索引
- 在列表中取出对应位置的数据
```Python
list =[[1,2,3],[1,2,4],[1,3,4,5]]
print(list[0])# 第一个
print(list[2])# 第二个
print(list[1])
# 下标取出列表中元素
# 还可以反向索引
list =[[1,2,3],[1,2,4],[1,3,4,5]]
print(list[-1])# 倒数第一个
print(list[-2])# 倒数第二个
print(list[-3])
# 二位的数组
list =[[1,2,3],[1,2,4],[1,3,4,5]]
print(list[-1][1])# 两层，先外后内 3
print(list[-2][2])# 4
print(list[-3][0])# 1
# 下标小心超出范围，会报错
list=["cb","it","python"]
print(list[1][1])# t
# 字符串也是列表
list="zbcdefghijklmn"
print(list[3])
```
#### 列表的常用操作
- 插入
- 删除
- 清空
- 修改
- 统计元素个数
> 方法与函数        
> 如果将函数定义为class的成员，函数称为方法

**查询，添加**
```Python
# 查询某元素的下标
list=['itcast','ithei','python']
num=list.index("ithei")# 方法的调用与函数有所不同
print(num)
list.index('hello')# 元素不存在会报错
# 修改某个元素值
list[1]='ddd'# 重新赋值
# 插入元素 列表.insert(下标，元素)
list.insert(1,"插入元素")
print(list)
# 追加，到列表的尾部
list.append("尾部")
# 追加一批元素
list.extend(其他数据容器)
list.extend([1,2,3])
list.extend(list)
```
**删除**
```python
# 元素的删除，下标，两种方式
del list[2]
list.pop(2)# 是一个方法，作用是返回取出的元素，同时取出元素
print(list.pop(1))
# 赋值的同时也删除了
e=list.pop(2)
print(list)
print(e)
# 删除第一个匹配项
list =[1,2,3,1,2,4,1,3,4,5]
list.remove(1)
print(list)# [2, 3, 1, 2, 4, 1, 3, 4, 5]
# 清空列表
list.clear()
print(list)
```
**统计数量**
```Python
list =[1,2,3,1,2,4,1,3,4,5]
list.remove(1)
print(list)
print(list.count(1))# 1出现的次数
# 总元素
a=len(list)
print(a)
```
归纳
[![图片.png](https://pic1.imgdb.cn/item/679fa8f4d0e0a243d4f9a014.png)](https://pic1.imgdb.cn/item/679fa8f4d0e0a243d4f9a014.png)
特点：
[![图片.png](https://pic1.imgdb.cn/item/679fa936d0e0a243d4f9a01a.png)](https://pic1.imgdb.cn/item/679fa936d0e0a243d4f9a01a.png)
#### 例题
```python
list=[21,25,21,23,22,20]
list.append(31)# 追加到尾部
list.extend([29,33,30])
num1=list[0]
num2=list[-1]
print(num1,num2)
index=list.index(31)
print(index)
print(f"列表的内容为：{list}")
```
![运行结果](https://pic1.imgdb.cn/item/67a043b8d0e0a243d4f9a6e3.png)
#### 列表的遍历
将容器内的元素取出
```python
# while循环遍历
def while_1():
  index=0
  while index<len(list):
    element=list[index]
    print(f"列表的元素是{element}")
    index+=1
while_1()
# 使用for循环遍历
def for_1():
  for i in list:# for循环本身就是使用列表中的
    element=i
    print(f"列表的元素是{element}")
for_1()
```
![](https://pic1.imgdb.cn/item/67a06fcdd0e0a243d4f9b3e8.png)
**for循环受限，但是用起来会比较简单**
- 所以for循环使用的次数多一点
```python
index=0
list=[1,2,3,4,5,6,7,8,9,10]
new=[]
while index<len(list):
  if list[index]%2==0:
    new.append(list[index])
  index+=1
print(new)
```
### 元组
- 元组不可以修改
- 元组使用()定义
```python
yuan=(1,"hello",True)
# 定义空元组的方式！！
y2=()
y3=tuple()
print(f"t1的内容是：{type(yuan)},{yuan}")
print(f"y2的内容是：{type(y2)},{y2}")
print(f"y3的内容是：{type(y3)},{y3}")
# t1的内容是：<class 'tuple'>,(1, 'hello', True)
# y2的内容是：<class 'tuple'>,()
# y3的内容是：<class 'tuple'>,()
# 定义单个的元组
y4=("hello",)# 还得有逗号
# 元组的嵌套：
y5=((1,2,3),(1,2,4))
```
```Python
# 下标索引
print(y5[1][2])
# 取出元组中的元素
```
**元组的操作**  
- 元组不可修改
```python
# 1. index查找
y5=(1,2,3,1,2,4)
index=y5.index(1)
print(index)
# 2. count数目
num=y5.count(1)
print(num)
# 3. len长度
num=len(y5)
print(num)
```
也可以遍历，做法与列表相同    
- 元组里的元素不能修改
- 但是元组内的嵌套列表可以修改
```python
y5=((1,2,3),[1,2,4])
y5[1][1]=12# 可以这样修改
print(y5)
```
总结
![](https://pic1.imgdb.cn/item/67a0c129d0e0a243d4f9be3e.png)
### 字符串（作为数据容器）
- 再认字符串
- 是字符的容器
```Python
# 取某一下标的元素
str="itheima and itcast"
s1=str[2]
s2=str[-16]
print(s1,s2)# h
# 字符串也是无法修改的，但是可以整个完全修改（重新赋值）
# 查找下标
index=str.index('and')
print(index)
# 字符串的替换（将全部字符串1替换为新的字符串）
# replace
# 不是修改，而是得到一个新的字符串
new=str.replace("it","程序")# 使用新的字符串接收
print(new)
# 字符串分割 split
str="hello python itheima and itcast"
list=str.split(" ")# 以某个字符串为分割 此处为空格
print(list)
# 最后得到的结果是一个列表！！
# strip（去除前后指定的字符串）
str="   hello python itheima and itcast   "
str1=str.strip()
print(str1)
# 结果hello python itheima and itcast
# 不传参数，去除首尾空格，说明有默认参数
str="12hello python itheima and itcast12"
str1=str.strip("12")
print(str1)
# 这样也可以都去除，实际上时去除“1”和“2”
str="12hello python itheima and itcast21"
str1=str.strip("12")
print(str1)
# count
c=str.count("h")
print(c)
# 长度len
l=len(str1)
print(l)
```
**总结**
![](https://pic1.imgdb.cn/item/67a0dd23d0e0a243d4f9e26d.png)
![](https://pic1.imgdb.cn/item/67a0dd71d0e0a243d4f9e2e4.png)
- 只可以存储字符串
- 不可以修改（增减元素）
### 字符串案例
![](https://pic1.imgdb.cn/item/67a0de17d0e0a243d4f9e4c0.png)
```Python
str="itheima itcast boxuegu"
c=str.count("it")
print(c)
str1=str.replace(" ","|")
print(str1)
list=str1.split("|")
print(list)
```
### 数据容器的切片
- 序列
内容连续、有序、可使用下标索引的一类数据容器      
- 切片
从序列中取一个子序列
![](https://pic1.imgdb.cn/item/67a0e059d0e0a243d4f9eb18.png)
```Python
# 序列[起始下标：结束下标：步长]
# 起始留空从0开始，结束不包，留空截取到结尾，步长负数，反向取
# 同样是得到一个新的序列
list=[1,2,3,4,5,6,7]
result=list[1:4]
print(result)
# [2,3,4]
list=(1,2,3,4,5,6,7)
result=list[:]
print(result)
# (1, 2, 3, 4, 5, 6, 7)
list='01234567'
result=list[::2]
print(result)
# 0246
list='01234567'
result=list[::-1]
print(result)
# 76543210，将序列翻转
list=[1,2,3,4,5,6,7]
result=list[3:1:-1]
print(result)
# [4, 3]
```
```Python
str="我问问，员序程马黑来，dgga学"
str1=str.replace("来","，")
list=str1.split("，")
str2=list[1]
str3=str2[::-1]
print(str3)
```
### 集合
- 之前都支持重复，集合不支持，去重
- 内容无序
```python
# 使用大括号定义
set={1,2,3,4,5,6,6}
print(set)
# 定义空集合
em=set()# 空集合
set={1,2,3,4,5,6,6}# 自动去除相同元素
print(set)
set2={}# 不能这样定义空集合，这是空字典
print(set2)
```
- 集合无序，不支持下标索引
- 允许修改
```Python
# 添加新元素 add
set={1,2,3,4,5,6,6}
set.add("python")
print(set)
# 移除元素 remove
set.remove("python")
print(set)
# 随机取出元素 pop
a=set.pop()
print(set,a)# {2, 3, 4, 5, 6} 1
# 清空clear
set.clear()
# 差集 difference
set1={1,2,3}
set2={1,5,6}
set3=set1.difference(set2)
print(set3)
print(set1)# set1,2不变
print(set2)# {2, 3} {1, 2, 3} {1, 5, 6}
# 消除差集 set1变化，出去与2相同的元素
set1={1,2,3}
set2={1,5,6}
set1.difference_update(set2)
print(set1)
print(set2)# {2, 3}  {1, 5, 6}
# 合并union
set1={1,2,3}
set2={1,5,6}
set3=set1.union(set2)
print(set3)
print(set1)
print(set2)# {1, 2, 3, 5, 6} {1, 2, 3} {1, 5, 6}
# 元素数目 len
len(set1)
# 遍历
# 集合不支持下标索引，不用while，用for
set={1,2,3,4,5,6,6}
for e in set:
  print(e)
```
![](https://pic1.imgdb.cn/item/67a0e8b5d0e0a243d4f9fc25.png)
![](https://pic1.imgdb.cn/item/67a0e8d7d0e0a243d4f9fc97.png)
### 字典
#### 定义
- key-value 
```Python
{}键值对
# 定义
dict={
  "nianl":19,# 大括号定义，逗号隔开
  "nian":2025,
  "yue":2,
  "ri":4
}
# 空字典2种
dic={}
dic=dict()
print(dic)# {}
# key不能重复
# 会覆盖掉重复的
# 从字典中获取数据（无下标索引）
c=dic["ri"]
print(c)
print(dic["nian"])
print(dic["nianl"])
print(dic["yue"])
# 嵌套，key不能是字典，value可以任意数据
fen={
  1:{
    "yuwen":100,# 逗号
    "shuxue":100,
    "yinyu":100
  },# 逗号
  2:{
    "yuwen":10,
    "shuxue":10,
    "yinyu":10
  }
}
print(fen)
print(fen[1]["yuwen"])# 多层调用
```
![](https://pic1.imgdb.cn/item/67a0ef4bd0e0a243d4fa179d.png)
#### 字典的常用操作
```Python
# 新增元素字典[key]=value
dict={1:99,2:100,3:23}
dict[4]=66
print(dict)
# 更新，语法同上
dict[1]=66
print(dict)
# 元素的删除 pop
dict[1]=66
s=dict.pop(1)
print(s)# s=66
print(dict)
# 清空clear
dict.clear()
# 得到字典中的全部key
keys=dict.keys()
print(keys)# dict_keys([2, 3, 4])
# 遍历字典
# 方式一
for key in keys:
  print(f"key:{key}")
  print(f"value:{dict[key]}")
# 方式2，直接进行for循环
for key in dict:
  print(f"key:{key}")
  print(f"value:{dict[key]}")
# 不能使用while循环
# 统计元素数量 len
num=len(dict)
print(num)
```
**总结**
![](https://pic1.imgdb.cn/item/67a1865bd0e0a243d4fbb444.png)
![](https://pic1.imgdb.cn/item/67a18675d0e0a243d4fbb47e.png)
#### 字典例题
![](https://pic1.imgdb.cn/item/67a18805d0e0a243d4fbb85c.png)
```Python
dict={
  "wang":{
    "部门":"keji",
    "工资":2000,
    "级别":1
  },
"zhou":{
    "部门":"shichang",
    "工资":5000,
    "级别":2
  },
"lin":{
    "部门":"shichang",
    "工资":7000,
    "级别":3
  },
"zhang":{
    "部门":"keji",
    "工资":4000,
    "级别":1
  },
"liu":{
    "部门":"shichang",
    "工资":6000,
    "级别":2
  }
}
print(dict)
for key in dict:
  if dict[key]["级别"]==1:
    dict[key]["级别"]=2
    dict[key]["工资"]+=1000
print(dict)
# 这是一个内外层嵌套字典
```
### 总结对比
- 是否支持下标索引
  - 支持：列表、元组、字符串-序列
  - 不支持：集合、字典
- 重复元素：
  - 支持：列表、元组、字符串-序列类型
  - 不支持：集合、字典-非序列类型
- 是否可以修改
  - 支持：列表、集合、字典
  - 不支持：元组、字符串
**表格对比**
![](https://pic1.imgdb.cn/item/67a18cfdd0e0a243d4fbc01c.png)
**应用场景**
![](https://pic1.imgdb.cn/item/67a18df2d0e0a243d4fbc084.png)
### 通用操作
1. 都可以for循环遍历
2. len(),max(),min()
```Python
# len
len(list)
len(tuple)
len(str)
# max取最大的元素
max(list)
max(str)
print(max(dict))# 字典直接判断key，没有理会value
# min为最小的元素
```
3. 通用转换功能
```Python
# list
list(list)
list(tuple)
list(set)
list(str)# 将字符串一个一个拆分开
list(dict)# 结果是keys
# tuple
# str
# set
# 有无转换成字典的函数,没有办法,没有键值对
```
>[!NOTE]
>展示一下通用转化的结果    
![](https://pic1.imgdb.cn/item/67a196c9d0e0a243d4fbc16f.png)     
![](https://pic1.imgdb.cn/item/67a1f6d0d0e0a243d4fbce8c.png)    
可见字典转字符串所有元素都能保留下来      
![](https://pic1.imgdb.cn/item/67a21e1dd0e0a243d4fbd2ef.png)     
集合数据的无序性和去重性质

4. 通用排序功能
```python
# sorted
list=[2,3,1,4,5]
tuple=(2,3,1,4,5)
str="bdcefga"
set={3,1,2,5,4}
dict={"key3":1,"key1":2,"key2":3,"key5":4,"key4":5}
print(f"排序的结果是：{sorted(list)}")
print(f"排序的结果是：{sorted(tuple)}")
print(f"排序的结果是：{sorted(str)}")
print(f"排序的结果是：{sorted(set)}")
print(f"排序的结果是：{sorted(dict)}")
# 排序的结果为列表对象
print(f"排序的结果是：{sorted(list,reverse=True)}")
print(f"排序的结果是：{sorted(tuple,reverse=True)}")
print(f"排序的结果是：{sorted(str,reverse=True)}")
print(f"排序的结果是：{sorted(set,reverse=True)}")
print(f"排序的结果是：{sorted(dict,reverse=True)}")
# 反转排序
```
> [!NOTE]   
> 排序的结果是：[1, 2, 3, 4, 5]   
> 排序的结果是：[1, 2, 3, 4, 5]     
> 排序的结果是：['a', 'b', 'c', 'd', 'e', 'f', 'g']        
> 排序的结果是：[1, 2, 3, 4, 5]         
> 排序的结果是：['key1', 'key2', 'key3', 'key4', 'key5']

**总结**      
![](https://pic1.imgdb.cn/item/67a22594d0e0a243d4fbd48c.png)
### 字符串大小的比较
**基于ASCLL码比较**       
>[!TIP]      
按位比较，一位一位进行，只要有一位大，那么整体就大，后面不需要了       
```Python
print(f"ab>a的结果是{'ab'>'a'}")# 结果是True
```
## 函数进阶
### 多返回值
如何返回多个返回值
```python
def return_num():
  return 1
  return 2
print(return_num())
# 此时只会返回1，因为return之后的语句不会执行
def return_num():
  return 1,"hello",True# 使用逗号隔开，支持不同类型
x,y=return_num()# 逗号隔开，按顺序接受
print(x,y)
print(return_num())
"""
1 2    结果
(1, 2)
"""
```
### 多种传参方式
1. 位置参数
按找传入参数的位置来确定传入的参数（一般用的）
2. 关键字参数     
以键值对的形式进行传参数     
```Python
def user(name,age,gender):
  print(1)
user("小明",age=20,,gender="男")
# 可以与位置参数混用，但位置参数必须在前面，关键词参数之间不存在先后顺序！！！
user(age=18,gender="男",name="ee")
# 可以不按照参数的定义顺序传参
```
3. 缺省参数     
>[!NOTE]     
给一个不传递时的默认参数

```Python
def user(name,age,gender="男"):# 给参数一个默认值
  print(f"姓名是{name},年龄是{age},性别是{gender}")
user("小明",age=20)
# 默认的参数必须写到最后面的
def user(name,age=18,gender="男"):# 这样也是可以的
```
4. 不定长参数
>[!NOTE]    
不确定传递多少参数！！！

```Python
def user(*args):
  print(args)# args为元组
user('tom',18,True)
# 位置不定长
def info(**k):
  print(k)# k为字典
info(name="tom",nian=19)# k-v型的
# 关键字不定长！
```
**总结**
![](https://pic1.imgdb.cn/item/67a24905d0e0a243d4fbd867.png)
### 匿名函数
#### 传入函数
>[!NOTE]     
将函数作为参数传入      

```Python
def t(a):# 此处的a为一个函数
  result=a(1,2)# 这里要求a为函数，且支持本行逻辑调用
  print(result)
def c(x,y):
  return x+y
t(c)# 将c函数传入a中
```
>[!TIP]
这是计算逻辑的传递，而非数据的传递      
这里数据确定了，但是计算逻辑不确定       
实现函数调用接口的功能？       
比如一个函数需要再不同情况下调用不同函数（计算逻辑），就可以使用这种函数调用快速实现！

```python
def t(a):
  result=a(1,2)
  print(result)
def c(x,y):
  return x+y
def b(x,y):
  return x-y
t(c)
t(b)
# 这样？传入计算逻辑
```
#### lambda定义匿名函数
- def定义带有名称的
- lambda定义匿名，只能临时使用一次
>[!WARN]
>lambda 变量:一行代码      
只能一行
```Python
def t(a):
  result=a(1,2)
  print(result)
t(lambda x,y:x+y)# 默认返回x+y
```
> 作用是简化？
## 文件
### 编码
- 文件通过编码为二进制，存在电脑中，也可以反向翻译回去
- UTF-8
- 编码本，有多种编码的方式
### 读取操作
- 文本文件，视频文件、音频文件、图像文件、可执行文件等等
- 操作：打开，读写，关闭
1. 打开
```python
open(name,mode,encoding)

```
>[!NOTE]
r：以只读方式打开    
w:打开一个文件只用于写入，文件已存在则删除原有内容      
a:打开文件用于追加，已存在则写入原有的内容之后！不存在则创建新的
1. 打开
```python
f=open("C:/Users/17871/Desktop/test.txt","r",encoding="UTF-8")
print(type(f))# <class '_io.TextIOWrapper'>
```
2. 读取
```python
# read方法 文件.read(num)多少字节
f=open("C:/Users/17871/Desktop/test.txt","r",encoding="UTF-8")
print(f"读取10字节的结果是{f.read(10)}")
print(f"读取全部内容的结果是{f.read()}")
# 多次调用read会从上一次的结尾开始读取
list=f.readlines()
print(list,type(list))
# readlines读取所有行并且返回一个列表
# 结果：['我的记事本\n', '1111111\n', '2222222\n', '1111111\n'] <class 'list'>
# 该函数同样是从上次read的结尾开始读的
# readline 实现一次读取一行，返回字符串？
str=f.readline()
str1=f.readline()
print(str,type(str))
print(str1,type(str1))
# for循环读取文件行
for line in f:
  print((f"{line}"))
# 每一次读取一行
```
3. 关闭
```Python
import time
time.sleep(5000)
# 使程序一直运行，文件仍然在被调用
f.close()
import time
time.sleep(5000)
# 这样就解除文件调用了！！
# with open语法
with open("C:/Users/17871/Desktop/test.txt","r",encoding="UTF-8") as f:
  for line in f:
    print((f"{line}"))
  str = f.readline()
  print(str, type(str))
  # 在with open中写文件操作，结束后自动关闭
```
4. 总结：
![](https://pic1.imgdb.cn/item/67a333f3d0e0a243d4fbf417.png)
### 作业
![](https://pic1.imgdb.cn/item/67a3392dd0e0a243d4fbf544.png)
```Python
c=0
with open("C:/Users/17871/Desktop/test.txt","r",encoding="UTF-8") as f:
  for line in f:
    c+=line.count("itheima")
print(c)
# 1
with open("C:/Users/17871/Desktop/test.txt","r",encoding="UTF-8") as file:
    c = file.read().count("itheima")
print(c)
# 2
with open("C:/Users/17871/Desktop/test.txt","r",encoding="UTF-8") as f:
  for line in f:
    line=line.strip()
    print(line)
    words=line.split(" ")
    for word in words:
      if word =="itheima":
        c+=1
print(c)
# 3
```
>除了readlines为列表，其他都是字符串返回
### 文件的写操作
**open**打开        
**write**写入     
**flush**刷新    
- 直接write时，内容并未真正写入文件。在内存中，缓冲区
- flush时才会真正写入
```Python
# w：不存在的文件/重置
f=open("C:/Users/17871/Desktop/test.txt","w",encoding="UTF-8")
f.write("hello world")
import time
f.flush()# 这样才能保存！！
time.sleep(44444)
# close也附带flush的功能
f.close()
```
### 文件的追加操作
>[!NOTE]
将之前的"w"改为"a"即可
```Python
f=open("C:/Users/17871/Desktop/test.txt","a",encoding="UTF-8")
f.write("hello world")
import time
# f.flush()
f.close()
```
**\n：换行**

### 文件操作综合

![](https://pic1.imgdb.cn/item/67a33d50d0e0a243d4fbf616.png)
![](https://pic1.imgdb.cn/item/67a33d65d0e0a243d4fbf619.png)

```python
f=open("C:/Users/17871/Desktop/test.txt","r",encoding="UTF-8")
for i in f:
  c=i.count("正式")
  if c==1:
    b=open("C:/Users/17871/Desktop/test.txt.bak","a",encoding="UTF-8")
    b.write(i)
    b.close()
f.close
# 还可以使用strip和split
```
## 异常
### 什么是异常
- 错误时，解释器无法继续执行,BUG
### 异常的捕获方式
- warning
- error
```Python
try:
  可能发生错误的代码
except:
  出现异常执行的代码
# 如下：出现异常时执行except中的内容
try:
  f=open("C:/Users/17871/Desktop/abc.txt","r",encoding="UTF-8")
except:
  print("之前不存在")
  f=open("C:/Users/17871/Desktop/abc.txt", "w", encoding = "UTF-8")
# 捕获指定异常
try:
  print(name)
except NameError as e:
  print("出现了变量未定义的异常")
  print(e)# 将错误的说明语句输出：name 'name' is not defined
# 只捕获nameerror
# 捕获多种异常：括号，类似元组的形式
try:
  print(name)
  1/0
except (NameError,ZeroDivisionError) as e:
  print("出现了变量未定义的异常或除0异常")
  print(e)
# 捕获所有异常：最开始的语法就可以
except Exception as e:# 或利用这种！Exception是一个顶级的异常
```
**else,finally**可有可无的部分
```Python
try:
  print("name")
except Exception as e:
  print("出现了变量未定义的异常或除0异常")
  print(e)
else:
  print("没有异常")
# 没有异常时执行try和else!
finally:
  print("一直会执行！")
  f.close()
# 有没有异常都会执行
```
### 异常的传递
```python
def f1():
  print("1开始")
  num=1/0
  print("1结束")
def f2():
  print("2开始")
  f1()
  print("2结束")
try:
  f2()
except Exception as e:
  print(f"捕捉了{e}")
# 输出为
"""
2开始
1开始
捕捉了division by zero
可见传递性！在高的层级捕获就可以
"""
```
### Python模块
#### 模块的导入
1. 什么是模块
- 一个Python文件，有函数、类、变量
- 将模块当做工具包使用
>[!TIP]
语法：

```Python
[from 模块名] import 模块名
模块名.功能名
# time模块为例子
import time
print("你好")
time.sleep(5)# 使用模块内部的功能
print("我好")
```
**from**
```Python
from time import sleep
print("你好")
sleep(5)# 只调用了sleep功能！
print("我好")
# import*
from time import *# *表示全部功能
print("你好")
sleep(5)# 直接sleep就可以了hh
print("我好")
```
**as**
```Python
# 给模块或者功能改名！
import time as t# 换了一个名字
t.sleep(3)
from time import sleep as sl
sl(5)
```
>[!ERROR]
模块导入一般写在开头
#### 自定义模块
```Python
# 调用
import jia
jia.test(1,2)
from jia import test
test(1,2)
# 模块
def test(a,b):
    print(a+b)
# 同名时
from jia import test
from jian import test
test(1,2)# 执行第二个
# 方式调用模块时,模块内调用执行,可以使用main
def test(a,b):
    print(a-b)
if __name__ == '__main__':
    test(1,2)
# 只有内部运行时会执行，外部调用不会

__all__ =['test1']
def test2(a,b):
    print(a-b)

def test1(a, b):
    print(a + b)
if __name__ == '__main__':
    test2(1,2)
# 此时from jian import *只会调用test1
```
### Python包
#### 自定义包
- 储存模块（py文件），是个文件夹
- 包含多个模块文件，且包含_init_.py文件
1. 创建自己的
>[!NOTE]
在根目录下创建目录，再在目录下写模块

```Python
import my.jian
my.jian.test1(1,2)
from my import jian
from my.jian import test1
# 多种导入的方式
```
总结
![](https://pic1.imgdb.cn/item/67a37c5fd0e0a243d4fc003a.png)

#### 安装第三方包
![](https://pic1.imgdb.cn/item/67a37d27d0e0a243d4fc006b.png)
>[!TIP]
在cmd中输入pip install -i https://pypi.tuna.tsinghua.edu.cn/simple 包名称     
![](https://pic1.imgdb.cn/item/67a37f59d0e0a243d4fc014f.png)
## 基础综合案例
### 折线图
#### json数据
- 负责不同编程语言的流通的数据格式
- 实现不同语言的传递，中转

<iframe src="https://easylink.cc/9ycg8h" width="100%" height="500" title="PDF document"></iframe>
