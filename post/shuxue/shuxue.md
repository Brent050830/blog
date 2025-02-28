+++
date = '2025-02-08T18:07:37+08:00'
draft = true
title = '数学物理公式'
categories = [
    "公式",
]

author = "Brent"
tags = [
    "学习",
]
image = "https://pic1.imgdb.cn/item/67a798d5d0e0a243d4fd27cd.webp"
hidden = false

math = true

+++
## 基本公式写法

### 行内式与独立式

$x+y=1$
$$x-y=1$$

### 上下标
$$
x^2=y_1=x^{x_1+y}\\
x^2+y_1=2
$$
### 括号

$$
f(x,y)=x^2+y_2,x \epsilon[1,10],y \epsilon\{1,2,3\}
$$
- 对大括号进行转义
$$
\left.(\sqrt {1 \over 2}\right)\\
$$
$$
\{ \}\\
\lbrace 
$$
### 省略号
### 分数
$$
\frac{1-x}{y+1}
$$
$$
x\over{x+1}
$$
### 开方

$$
\sqrt[3]{9}
$$
### 向量

$$
\vec a\\
\vec {ab}
$$
### 极限

$$
\lim_{n\rightarrow+\infty}\frac{1}{n}
$$
### 求导
$$
y\prime=nx^{n-1}
$$
### 方程组
$$
y:\begin{cases}
    x+y=1\\
    x-y=0\\
    x^{y+1}=1
\end{cases}
$$
### 矩阵
$$
A= \left[\begin{matrix}
1&2&3\\
4&5&6\\
7&8&9\\
\end{matrix}\right]
$$
### 对数
$$
\log\\
\lg\\
\ln
$$
### 数学符号
$$
\not=\\
\approx\\
\leq\\
\geq\\
\times\\
\cdot\\
\pm\\
\div\\
\infty\\
\sum\\
\prod\\
\coprod\\
\uparrow\\
\downarrow\\
\leftarrow\\
\rightarrow\\
\overline{a+b+c}\\
$$
### 定积分
$$
\int\\
\iint\\
\iiint\\
\oint\\
$$
### 三角函数
$$
\bot\\
\angle\\
30^\circ\\
\sin\\
\cos\\
\tan\\
\cot\\
\sec\\
\csc
$$
### 集合
$$
\emptyset\\
\in\\
\notin\\
\supset\\
\supseteq\\
\bigcap\\
\bigcup\\
\bigvee\\
\bigwedge\\
$$
### 希腊字母
$$
\alpha\\
\beta\\
\gamma\\
\pi\\
$$
| No.  | Lowercase  | Uppercase  |  English  |              IPA              |
| :--: | :--------: | :--------: | :-------: | :---------------------------: |
| $1$  |  $\alpha$  |    $A$     |  $alpha$  |          **/'ælfə/**          |
| $2$  |  $\beta$   |    $B$     |  $beta$   |    **/'bi:tə/or/'beɪtə/**     |
| $3$  |  $\gamma$  |  $\Gamma$  |  $gamma$  |          **/'gæmə/**          |
| $4$  |  $\delta$  |  $\Delta$  |  $delta$  |         **/'deltə/**          |
| $5$  | $\epsilon$ |    $E$     | $epsilon$ |        **/'epsɪlɒn/**         |
| $6$  |  $\zeta$   |    $Z$     |  $zeta$   |         **/'zi:tə/**          |
| $7$  |   $\eta$   |    $H$     |   $eta$   |          **/'i:tə/**          |
| $8$  |  $\theta$  |  $\Theta$  |  $theta$  |         **/'θi:tə/**          |
| $9$  |  $\iota$   |    $I$     |  $iota$   |         **/aɪ'əʊtə/**         |
| $10$ |  $\kappa$  |    $K$     |  $kappa$  |          **/'kæpə/**          |
| $11$ | $\lambda$  | $\lambda$  | $lambda$  |         **/'læmdə/**          |
| $12$ |   $\mu$    |    $M$     |   $mu$    |          **/mju:/**           |
| $13$ |   $\nu$    |    $N$     |   $nu$    |          **/nju:/**           |
| $14$ |   $\xi$    |   $\Xi$    |   $xi$    |   **/ksi/or/'zaɪ/or/'ksaɪ/**  |
| $15$ | $\omicron$ |    $O$     | $omicron$ | **/əu'maikrən/or/'ɑmɪ,krɑn/** |
| $16$ |   $\pi$    |   $\Pi$    |   $pi$    |           **/paɪ/**           |
| $17$ |   $\rho$   |    $P$     |   $rho$   |           **/rəʊ/**           |
| $18$ |  $\sigma$  |  $\Sigma$  |  $sigma$  |         **/'sɪɡmə/**          |
| $19$ |   $\tau$   |    $T$     |   $tau$   |       **/tɔ:/or/taʊ/**        |
| $20$ | $\upsilon$ | $\Upsilon$ | $upsilon$ |  **/'ipsilon/or/'ʌpsilɒn/**   |
| $21$ |   $\phi$   |   $\Phi$   |   $phi$   |           **/faɪ/**           |
| $22$ |   $\chi$   |    $X$     |   $chi$   |           **/kaɪ/**           |
| $23$ |   $\psi$   |   $\Psi$   |   $psi$   |          **/psaɪ/**           |
| $24$ |  $\omega$  |  $\Omega$  |  $omega$  |   **/'əʊmɪɡə/or/oʊ'meɡə/**    |

**使用katex**     
[KATEX](https://katex.org/docs/supported.html)      

## 随机
### 随机过程的基本概念
- 分为三大类
1. 随机过程——参数集和状态空间是连续的（每时每刻的温度变化）
2. 随机序列——离散的
3. 链——既不是随机过程，也不是随机序列（马尔科夫链）
>状态空间：温度取值     
参数集：时间

|随机过程的分布函数||
|:-:|:-:|
|①一维分布函数|$F(t,x)=P \lbrace X(t)<x\rbrace$|
|②二维分布函数|$F(s,t;x,y)=P \lbrace X(s)<x,X(t)<y\rbrace $|

|随机过程的数字特征||
|:-:|:-:|
|①均值函数|$$m(t)=E(X(t))$$|
|②方差函数|$D(t)=E(X^2(t))-m^2(t)=C(t,t)$|
|③协方差函数|$C(s,t)=E(X(s)X(t))-m(s)m(t)$|
|④相关函数|$R(s,t)=E(X(s)X(t))$|
|⑤互协方差函数|$C_{XY}(s,t)=R_{XY}(s,t)-E(X(s))E(Y(Y(t)))$|
|⑥互相关函数|$R_{XY}(s,t)=E(X(s)Y(t))$|
> 随机过程的数字特征都与数学期望有关

-互协方差函数、与两个分布有关
#### 题型一：随机过程的数字特征
$①X(t)=α\cos(\beta t+\theta),\theta在[0,2\pi]上均匀分布，求X(t)的均值函数，方差，相关、协方差$
           

解：    

$$
E(X(t))=\int^{+\infty}_{-\infty}X(t)f(\theta)d\theta=\int^{2\pi}_0\alpha\cos(\beta+\theta)\frac{1}{2\pi}d\theta=0\\
期望是对随机变量求的\\
R(s,t)=E(X(s)X(t))=\int^{+\infty}_{-\infty}X(t)X(s)f(\theta)d\theta \\
=\frac{\alpha^2}{2}\cos\beta(t-s)\\
使用积化和差公式\\
C(s,t)=E(X(s)X(t))-m(s)m(t)=R(s,t)\\
D(t)=C(t,t)=\frac{\alpha^2}{2}
$$

$$
②设随机过程的X(t)=Vt，其中V是(0.1)上均匀分布的随机变量，求过程X(t)的均值和自相关函数\\
解：\\
V的概率密度函数为\\
f(v)= \begin{cases}
   1,v\epsilon(0,1) \\
   0,其他 
\end{cases}\\
E(X(t))=\int^{+\infty}_{-\infty}x(t)f(v)dv=\int^1_0vtdt=\frac{t}{2}\\
R_x(t_1,t_2)=E(X(t_1)Y(t_2))=E(Vt_1Vt_2)=\int_0^1v^2t_1t_2dv=\frac{t_1t_2}{3}\\
$$

## 我们