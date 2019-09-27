title: SM2 Wiki
date: 2019/9/22
web: https://github.com/SM2-wiki/SM2-wiki/blob/master/docs/index.md

# Welcome to **SM2 Wiki**!  [![GitHub watchers](https://img.shields.io/github/watchers/SM2-wiki/SM2-wiki.svg?style=social&label=Watch)](https://github.com/SM2-wiki/SM2-wiki)  [![GitHub stars](https://img.shields.io/github/stars/SM2-wiki/SM2-wiki.svg?style=social&label=Stars)](https://github.com/SM2-wiki/SM2-wiki) 

## Introduction

欢迎来到 **SM2 Wiki**!

此网站是关于新加坡 **SM2(Senior Middle 2)** 奖学金项目的一个 **免费**，**公开** 的知识整合站点。

这里您可以获得：

- 关于SM2项目的基本介绍

- 关于如何准备这个奖学金项目的指导与提示

- 往届 **SM2** 学生的经验及心得

- 准备上坡的注意事项

- 上坡后的注意事项

- 其他

## 创建初衷 & 灵感

创建这个网站的初衷是帮助对这个奖学金项目感兴趣或已经着手准备的同学更加便捷地查找相关资料以及获得来自往届学生的实时帮助。在[关于](https://sm2-wiki.github.io/SM2-wiki/intro/about/)中您可以看到更多这个站点的相关信息。

它的创立灵感则来自于 [**OI Wiki**](https://oi-wiki.org/) 。本项目从它的 [**github** 仓库](https://github.com/OI-wiki/OI-wiki/) 中得到了许多帮助，同时也参考了它的设计理念与设计模式，特在此致谢。

## How to make SM2 Wiki better

如您所见，这个网站仍相对简单，尚有许多内容等待添加，因此我们诚邀您的加入！

如果您擅长前端开发，懂得如何在 [**mkdocs-material** 主题](https://s0squidfunk0github0io.icopy.site/mkdocs-material/) 中自定义主题来完善更多功能，欢迎联系我来加入 [**SM2 Wiki Team**](https://github.com/SM2-wiki) ，让这个站点变得更 cool!

丰富网站内容的具体方法尚未完善。详细说明将在完善后发布。

若有宝贵的建议，欢迎您在线上或线下与我联系！

## Copyleft

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a>进行许可。

## More information

为了 **SM2 Wiki** 的长久发展，项目创立者创建了小组 [**SM2 Wiki Team**](https://github.com/SM2-wiki) 来管理它。

目前团队中只有一人，希望日后有更多的人加入，让 **SM2 Wiki** 变得越来越好

联系团队成员请参见 [如何做出你的贡献](https://sm2-wiki.github.io/SM2-wiki/intro/htc/)

> Project started from 2019/9/19

> Site started running from 2019/9/21

## Material color palette 颜色主题

### Primary colors 主色

> 默认为 `blue` 

点击色块可更换主题的主色

<div id="color-button">
<button data-md-color-primary="red">Red</button>
<button data-md-color-primary="pink">Pink</button>
<button data-md-color-primary="purple">Purple</button>
<button data-md-color-primary="deep-purple">Deep Purple</button>
<button data-md-color-primary="indigo">Indigo</button>
<button data-md-color-primary="blue">Blue</button>
<button data-md-color-primary="light-blue">Light Blue</button>
<button data-md-color-primary="cyan">Cyan</button>
<button data-md-color-primary="teal">Teal</button>
<button data-md-color-primary="green">Green</button>
<button data-md-color-primary="light-green">Light Green</button>
<button data-md-color-primary="lime">Lime</button>
<button data-md-color-primary="yellow">Yellow</button>
<button data-md-color-primary="amber">Amber</button>
<button data-md-color-primary="orange">Orange</button>
<button data-md-color-primary="deep-orange">Deep Orange</button>
<button data-md-color-primary="brown">Brown</button>
<button data-md-color-primary="grey">Grey</button>
<button data-md-color-primary="blue-grey">Blue Grey</button>
<button data-md-color-primary="white">White</button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-primary]");
  Array.prototype.forEach.call(buttons, function(button) {
    button.addEventListener("click", function() {
      document.body.dataset.mdColorPrimary = this.dataset.mdColorPrimary;
      localStorage.setItem("data-md-color-primary",this.dataset.mdColorPrimary);
    })
  })
</script>

### Accent colors 辅助色

> 默认为 `red` 

点击色块更换主题的辅助色

<div id="color-button">
<button data-md-color-accent="red">Red</button>
<button data-md-color-accent="pink">Pink</button>
<button data-md-color-accent="purple">Purple</button>
<button data-md-color-accent="deep-purple">Deep Purple</button>
<button data-md-color-accent="indigo">Indigo</button>
<button data-md-color-accent="blue">Blue</button>
<button data-md-color-accent="light-blue">Light Blue</button>
<button data-md-color-accent="cyan">Cyan</button>
<button data-md-color-accent="teal">Teal</button>
<button data-md-color-accent="green">Green</button>
<button data-md-color-accent="light-green">Light Green</button>
<button data-md-color-accent="lime">Lime</button>
<button data-md-color-accent="yellow">Yellow</button>
<button data-md-color-accent="amber">Amber</button>
<button data-md-color-accent="orange">Orange</button>
<button data-md-color-accent="deep-orange">Deep Orange</button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-accent]");
  Array.prototype.forEach.call(buttons, function(button) {
    button.addEventListener("click", function() {
      document.body.dataset.mdColorAccent = this.dataset.mdColorAccent;
      localStorage.setItem("data-md-color-accent",this.dataset.mdColorAccent);
    })
  })

  // #758
  document.getElementsByClassName('md-nav__title')[1].click()
</script>

