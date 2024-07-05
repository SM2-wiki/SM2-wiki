# 编辑格式指示

### 基本要求

中文与英文字母之间请用一个空格隔开, 如: 我是练习 CS:GO 两年的白给生。

注意逗号的使用，英文逗号后请打一个空格，如: So it's fare thee well, my darling true. 

中文的全角逗号后请不要添加空格，如: 我起了，一枪秒了，有什么好说的。

请在适当的时候换行，使文章看起来尽量有序明了

### Markdown 语法快速上手

页面编辑支持 **Markdown** 格式 ([什么是 **Markdown** ](http://www.runoob.com/markdown/md-tutorial.html))

您可以在 [StackEdit](https://stackedit.io/app#) 这个网站上使用 **Markdown** 在线编辑，或是下载使用 [**Typora**](https://typora.io/) 编辑器

**Markdown** 的语法上手非常容易，您可以在刚刚的[网站](http://www.runoob.com/markdown/md-tutorial.html)中查阅简单教程，这里只给出一些示范和需要注意的地方

- 字体样式

  ```
  ### 加粗
  **内容**
  
  ### 斜体
  *内容*
  _内容_
  
  ### 横线
  ~~内容~~
  ```
  示例:
 
  **Bold**  
  *Italic*  
  ~~我是憨憨~~  
  
- 标题  

  ```
  # 一级标题
  ## 二级标题
  ### 三级标题
  #### 四级标题
  ```
  请只用标题表示段落的层次关系，如您需要强调的粗体，请使用 ``**变粗**``

- 列表  
  请善用列表
  
  ```
  - 我有一头小毛驴
  - 但我从来也不骑
  - 有一天我心血来潮
  
  1. 有一说一
  2. 爽到
  3. 五香麻辣人
  ```

- 段落换行
  
  http://www.runoob.com/markdown/md-paragraph.html
  
- 链接 & 图片
  
  ```
  ### 链接
  [名字](链接地址)
  [CF](https://codeforces.com)
  
  ### 图片
  ![名字](图片地址)
  ```
  
  图片建议不要使用图床，请把图片上传至同一文件夹的 ``image`` 文件夹后，使用本地图片地址
  
- 更多语法

  参见 [Material 主题官方教程](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/#icons-emojis)
  
  [使用 emoji ](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/#using-emojis) 
  以及一个 [emoji 代码查找网站](https://emojipedia.org/twitter)
  
  :grinning:   
  :face_with_raised_eyebrow:    
  :man_technologist:

### 数学公式

基本格式

```
### 行内数学公式(只能有一行公式)
$公式$

### 公式块(多行公式)
$$
公式块
$$
```

在 **SM2-wiki** 中一般使用行内公式就可以了

同样的您可以在 [**StackEdit**](https://stackedit.io/app#) 上或是下载使用 [**Typora**](https://typora.io/) 编辑数学公式

公式里面写什么? 

```
### 注意使用{}
$2^n+1$
$2^{n+1}$
$2^-1$
$2^{-1}$
```
$2^n+1$  
$2^{n+1}$  
$2^-1$   
$2^{-1}$  

```
### ^表示上标
$2^n$
${2^{n}}^{n+1}$
```
$2^n$  
${2^{n}}^{n+1}$  

```
### _表示下标
$a_{n+1}$
$(10101)_2$
```
$a_{n+1}$  
$(10101)_2$  

```
### 上标与下标结合
$\sum_{n=0}^{\infty} x^n$
```
$\sum_{n=0}^{\infty} x^n$  

```
### 常见数学符号
$\sin x  \cos' x \tan^2 x$
$\sum_{n=0}^{\infty} x^n$
$\frac{n+1}{n}$
$\lfloor \frac{n}{2} \rfloor$
```

$\sin x  \cos' x \tan^2 x$  
$\sum_{n=0}^{\infty} x^n$  
$\frac{n+1}{n}$  
$\lfloor \frac{n}{2} \rfloor$

更多教程

- https://blog.lindexi.com/post/latex-%E5%85%AC%E5%BC%8F%E9%80%9F%E6%9F%A5#%E5%9C%86%E7%82%B9

- http://mohu.org/info/symbols/symbols.htm

- https://blog.csdn.net/gsww404/article/details/78684278


