---
title: Markdown使用
description: Markdown入门
date: 2025-01-26
slug: Markdown
image: https://pic1.imgdb.cn/item/67c03ef6d0e0a243d4073f65.jpg
categories:
    - Markdown
---
# <font face="仿宋" font color=orange>Markdown入门教程</font>
## Ordered List
1. Step1
1. Step2
2. Step3
**引用**
>应引用
>
>>二级嵌套
1. **列表**
   - 我们是
   - 嘿嘿
   - 我们
    1. 无序列表 
    2. 嵌套
    3. 有序
    4. to do list
    - [x] a
    - [ ] b
    - [ ] c
2. **表格**
   | 左对齐 | 居中对齐 | 右对齐 |
   | :- | :----: | ----: |
   |a|b|c|
   |谁|是|是|
3. ## 段落
   - 换行——两个以上空格后回车或者空一行     

     
     ​    
   ***
   
     朵朵
   |字体|代码|
   |:-:|:-:|
   |*斜体*|**|
   |==高亮==|== ==|
   |**粗体**|** **|
   |***斜粗体***|*** ***|
   |~~删除~~|~~ ~~|
   |<u>下划线</u>|<u> </u>|
   
4. ## 脚注    
    大物[^1]
    朵朵
5. ***代码***
   ```c++
    #include<iostream>
    using namespace std；
    int main(){
        print("hello world");
        return 0;
    }
   ```
6. ### 超链接
   [我的个人网站](https://brent050830.github.io/hugo-dev/)
7. ### 图片的插入操作：
   使用图床：
   - [图床软件的链接](https://imgse.com)

    或者使用html语言来实现：
8. ### 其他操作
   ==**插入latex语法：**==
   - 单行显示的语法：$f(x)=ax+b$
    - 块显示的语法：
   $$
    \begin{Bmatrix}
    a & b \\
    c&d
    \end{Bmatrix}
   $$
    Inline math: $\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…$

Block math:
$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } } 
$$

9. ### 进阶的样式：
    - 进一步美化
    css语法：ctrl+shift+p 搜索
    <center>
   
    **插入图片**

    ![](https://s2.loli.net/2025/01/26/o1TMIwRtC9JcNuK.jpg)

![](https://s2.loli.net/2025/01/26/Wb2CpBfh9tLoMSI.jpg)

![](https://s2.loli.net/2025/01/26/I2fgH9XxWBro3OA.jpg)

![](https://s2.loli.net/2025/01/26/aqiTOoVRhK7k6eb.png)


[^1]: 这是脚注的内容


# 对照的相应代码：
```Markdown
# <font face="仿宋" font color=orange>Markdown入门教程</font>
## Ordered List
1. Step1
1. Step2
2. Step3
**引用**
>应引用
    >>二级嵌套
1. **列表**
   - 我们是
   - 嘿嘿
   - 我们
    1. 无序列表 
    2. 嵌套
    3. 有序
    4. to do list
    - [x] a
    - [ ] b
    - [ ] c
2. **表格**
   | 左对齐 | 居中对齐 | 右对齐 |
   | :- | :----: | ----: |
   |a|b|c|
   |谁|是|是|
3. ## 段落
   - 换行——两个以上空格后回车或者空一行     

      
         
    ***    
             
     朵朵
     |字体|代码|
     |:-:|:-:|
     |*斜体*|**|
     |==高亮==|== ==|
     |**粗体**|** **|
     |***斜粗体***|*** ***|
     |~~删除~~|~~ ~~|
     |<u>下划线</u>|<u> </u>|
       
         
4. ## 脚注    
    大物[^1]
    朵朵
5. ***代码***
    ```c++
    #include<iostream>
    using namespace std；
    int main(){
        print("hello world");
        return 0;
    }
```
6. ### 超链接
   [我的个人网站](https://brent050830.github.io/hugo-dev/)
7. ### 图片的插入操作：
   使用图床：
   - [图床软件的链接](https://imgse.com)

    或者使用html语言来实现：
8. ### 其他操作
   ==**插入latex语法：**==
   - 单行显示的语法：$f(x)=ax+b$
    - 块显示的语法：
   $$
    \begin{Bmatrix}
    a & b \\
    c&d
    \end{Bmatrix}
   $$
    Inline math: $\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…$

Block math:
$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } } 
$$

9. ### 进阶的样式：
    - 进一步美化
    css语法：ctrl+shift+p 搜索
    <center>
   
    **插入图片**

    ![](https://s2.loli.net/2025/01/26/o1TMIwRtC9JcNuK.jpg)

![](https://s2.loli.net/2025/01/26/Wb2CpBfh9tLoMSI.jpg)

![](https://s2.loli.net/2025/01/26/I2fgH9XxWBro3OA.jpg)

![](https://s2.loli.net/2025/01/26/aqiTOoVRhK7k6eb.png)


[^1]: 这是脚注的内容
```

```