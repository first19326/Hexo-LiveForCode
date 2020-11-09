---
title: Hexo主题LiveForCode介绍
date: 2020-08-01 00:00:00
# 文章出处名称 #
from: 
# 文章出处链接 #
url: 
# 文章作者名称 #
author:
# 文章作者签名 #
about: 
# 文章作者头像 #
avatar: 
# 是否开启评论 #
comments: true
# 文章标签 #
tags: Hexo
# 文章分类 #
categories: Web
# 文章摘要 #
description: Hexo主题LiveForCode介绍.
# 文章置顶 #
sticky: 10000
---

[Hexo](https://hexo.io/zh-cn/) 是高效的静态站点生成框架，他基于 [Node.js](https://nodejs.org/en/)。通过 Hexo 你可以轻松地使用 [Markdown](https://daringfireball.net/projects/markdown/) 编写文章，除了 Markdown 本身的语法之外，还可以使用 Hexo 提供的 [标签插件](https://hexo.io/zh-cn/docs/tag-plugins.html) 来快速的插入特定形式的内容。在这篇文章中，假定你已经成功安装了 Hexo，并使用 Hexo 提供的命令创建了一个站点。  

> 你可以访问 [Hexo 的文档](https://hexo.io/zh-cn/docs/) 了解如何安装 Hexo  

在 Hexo 中有两份主要的配置文件，其名称都是 `_config.yml`。其中，一份位于 Hexo 根目录下，主要包含 Hexo 本身的配置；另一份位于主题目录下，这份配置由主题作者提供，主要用于配置主题相关的选项。  
为了描述方便，在以下说明中，将前者称为 __站点配置文件__ ， 后者称为 __主题配置文件__ 。  


## 主题预览
[Hexo - Live For Code](https://www.notes.worstone.cn)  


## 安装Live For Code
Hexo 安装主题的方式非常简单，只需要将主题文件拷贝至 Hexo 根目录的 themes 目录下，然后修改下配置文件即可。具体到 LiveForCode 来说，安装步骤如下。  

### 下载主题
如果你熟悉 Git，建议你使用 `克隆最新版本` 的方式，之后的更新可以通过 `git pull` 来快速更新，而不用再次下载压缩包替换。  
1. 克隆最新版本  
在终端窗口下，定位到 Hexo 站点目录下。使用 Git Checkout 代码：  
```shell
cd your-hexo-site
git clone https://github.com/first19326/hexo-liveforcode
```
将克隆下来的文件夹中的 `LiveForCode` 文件夹移动至站点的 `themes` 目录下，并将 `source` 文件夹中的 `about`、`category`、`comment`、`donate`、`friend` 以及 `tag` 文件夹移动至 Hexo 站点目录下的 `source` 文件夹中。这些文件夹分别对应着 __关于__ 、 __标签__ 、 __留言板__ 、 __赞赏__ 、 __友情链接__ 以及 __分类__ 页面，其中的 `index.md` 中的内容为各个页面显示的内容，大家可以根据自己的情况进行修改。  

2. 下载稳定版本  
前往 LiveForCode 版本发布页面。  
选择你所需要的版本，下载 Download 区域下的 Source Code (zip) 到本地。  
解压所下载的压缩包，并将解压后的文件夹中的 `LiveForCode` 文件夹移动至站点的 `themes` 目录下，并将 `source` 文件夹中的 `about`、`category`、`comment`、`donate`、`friend` 以及 `tag` 文件夹移动至 Hexo 站点目录下的 `source` 文件夹中。这些文件夹分别对应着 __关于__ 、 __标签__ 、 __留言板__ 、 __赞赏__ 、 __友情链接__ 以及 __分类__ 页面，其中的 `index.md` 中的内容为各个页面显示的内容，大家可以根据自己的情况进行修改。  

### 启用主题
与所有 Hexo 主题启用的模式一样。当 克隆/下载 完成后，打开 __站点配置文件__ ，找到 theme 字段，并将其值更改为 `LiveForCode`。  

```yml
theme: LiveForCode
```

到此，NexT 主题安装完成。下一步我们将验证主题是否正确启用。在切换主题之后、验证之前，我们最好使用 `hexo clean` 来清除 Hexo 的缓存。  

### 验证主题
首先启动 Hexo 本地站点，并开启调试模式（即加上 --debug），整个命令是 `hexo s --debug`。 在服务启动的过程，注意观察命令行输出是否有任何异常信息，如果你碰到问题，这些信息将帮助他人更好的定位错误。  
当命令行输出中提示出： `INFO  Hexo is running at http://0.0.0.0:4000/. Press Ctrl+C to stop.` 此时即可使用浏览器访问 `http://localhost:4000`，检查站点是否正确运行。  


## 站点设定
在 __站点配置文件__ 中，我修改了标签归档页面、分类归档页面以及文章归档页面的路径，如果大家使用默认的路径，则需要修改 __主题配置文件__ 中的菜单设置。  

```yml
tag_dir: tag
archive_dir: archive
category_dir: category
```


## 主题设定
由于 __主题配置文件__ 可能有所改动，就不在这里给大家详细说明，我会在 __主题配置文件__ 中添加适当的注释，麻烦大家参考页面以及注释内容进行修改。  


## 404 页面设定
主题中有相应的 `404` 错误页面，是单独的静态页面，没有添加到模板中。在使用主题的时候，需要大家将其中的 __返回首页__ 的跳转链接 `https://notes.worstone.cn` 替换为自己网站的地址。  
404 错误页面在主题文件夹 `LiveForCode` 中的 `source` 文件夹中。  

```html
<div class="buttons">
    <a href="javascript:;" onclick="reload();">刷新页面</a>
    <a href="https://notes.worstone.cn" target="_self">返回首页</a>
</div>
```


## 第三方服务

### Algolia Search
1.前往 [Algolia](https://www.algolia.com/) 注册页面，注册一个新账户。 可以使用 GitHub 或者 Google 账户直接登录，注册后的 14 天内拥有所有功能（包括收费类别的）。之后若未续费会自动降级为免费账户，免费账户总共有 10,000 条记录，每月有 100,000 的可以操作数。注册完成后，创建一个新的 Index，这个 Index 将在后面使用。  
2.Index 创建完成后，此时这个 Index 里未包含任何数据。 接下来需要安装 `Hexo Algolia` 扩展，这个扩展的功能是搜集站点的内容并通过 API 发送给 Algolia。前往站点根目录，执行命令安装：  

```shell
npm install --save hexo-algolia
```

3.编辑 __站点配置文件__ ，新增以下配置：  

```yml
algolia:
  applicationID: 'applicationID'
  apiKey: 'apiKey'
  indexName: '...'
```

注：这里的 applicationID 为 `Search-Only API Key`  
4.当配置完成，在站点根目录下执行一下命令更新 Index。请注意观察命令的输出。  

```shell
export HEXO_ALGOLIA_INDEXING_KEY=Admin API Key
hexo algolia
```

5.Hexo Algolia 命令设置选项  

```
Options:
  --dry-run       Does not push content to Algolia (default: false).
  --flush         Resets the Algolia index before starting the indexation (default: false).
  --indexing-key  An algolia API key with add/delete records permissions.
		              It should be different than the search-only API key configured in _config.yml.
  --layouts       A comma-separated list of page layouts to index (default: "page").
```

说明：  
`--flush` 如果是 `false` 则每一次都会直接添加内容到 Algolia 相关的 Index 中，如果不是第一次提交，则将其设置为 `true`  
`--layouts` 如果使用默认设置，提交的时候会将分类归档、标签归档、赞赏、留言板等页面内容提交到 Algolia， 在搜索的时候，将会搜索到分类归档、标签归档、赞赏、留言板等页面内容，建议使用时将其设置为 `post`。  

```shell
hexo algolia --flush true --layouts post
```

### 设置 RSS
1.安装 `Hexo-Feed` 插件。前往站点根目录，执行命令安装：  

```shell
npm install --save hexo-generator-feed
```

2.根据个人需求，编辑 __站点配置文件__ ：  

```yml
feed:
  type: atom
  path: atom.xml
  limit: 10
```

### 文章数据统计
文章数据统计基于 `Valine.js` 插件实现。  
实现方式：在文章列表页面加载 `Valine.js`， 只要 Valine 配置项中的 `el` 元素不存在即不会加载评论框相关内容。  

1.文章评论数统计  
Valine 会自动查找页面中 class 值为 `valine-comment-count` 的元素，获取其 `data-xid` 为查询条件。并将得到的值填充到其 class 的值为 `valine-comment-count` 的元素里：  

```html
<!-- data-xid 将作为查询条件 -->
<span class="valine-comment-count" data-xid="<Your/Path/Name>"></span>
```

2.文章阅读量统计  
Valine 从 `v1.2.0` 开始支持文章阅读量统计。  

```javascript
new Valine({
    el: '#vcomments',
    ...
    visitor: true // 阅读量统计
})
```

如果开启了阅读量统计，Valine 会自动检测 LeanCloud 应用中是否存在 `Counter` 类，如果不存在会自动创建，无需手动创建。  
Valine 会自动查找页面中 class 值为 `leancloud_visitors` 的元素，获取其 `id` 为查询条件。并将得到的值填充到其 class 的值为 `leancloud-visitors-count` 的子元素里：  

```html
<!-- id 将作为查询条件 -->
<span id="<Your/Path/Name>" class="leancloud_visitors" data-flag-title="Your Article Title">
    <i class="leancloud-visitors-count"></i>
</span>
```

### 评论列表
评论功能使用的是 `Valine.js` 插件，配置详情请参见 [Valine](https://valine.js.org/)。  

> 特别说明 __主题配置文件__ 中的 Valine 的 `appId` 与 `appKey` 请大家自行配置自己的参数。如果评论数据提交到我的 LeanCloud 工作空间，我并不能保证数据的完整性。  

### 赞赏页面
赞赏页面使用了 [Sponsor Page](https://github.com/Kaiyuan/sponsor-page)，并做了相关修改使其适应博客样式。感兴趣的小伙伴自行去了解吧。  

### 音乐播放器
音乐播放器功能是使用 `APlayer.js` 以及 `Meting.js` 实现，配置详情参见 [APlayer](https://aplayer.js.org/#/home)、[Meting](https://github.com/metowolf/MetingJS)。  
主题中有两种实现方式，一种是 `APlayer.js` 结合 `Meting.js` 的实现方式，另外一种是 `APlayer.js` 单独的实现方式，两种实现方式各有优缺点：  
第一种实现方式配置简单，并且可以从各个音乐平台解析音乐。由于是从各个平台解析，故而不是特别稳定，并且在 `IE` 浏览器中需要特殊设置。  
第二种实现方式配置相对复杂，需要单独提供音乐相关信息，但是十分稳定，且对于 `IE` 浏览器也可兼容，无需特殊配置。  
主题中默认以 __第一种实现方式__ 实现，第二种实现方式为备选方案，在第一种实现方式出现问题的时候，可以切换到第二种实现方式，保证网站的稳定运行。  
针对第二种实现方式需要 __注意__ 的地方：  
`APlayer.js` 是基于 `HTML 5 Audio` 实现的一款音乐播放器插件，故而支持的音频格式有限，包括：`MP3`、`Wav` 以及 `Ogg` 格式，并且不同浏览器对这三种音频格式的支持也各有不同，详细信息大家参考 [HTML5 Audio(音频)](https://www.runoob.com/html/html5-audio.html)。如果音频格式不支持，可以通过音频转换工具进行格式转换。  
`APlayer.js` 是通过 `XMLHttpRequest` 获取歌词文件，所以存在 __跨域__ 问题。可以考虑将歌词文件放在主题文件夹 `LiveForCode` 的 `source` 文件夹下（ __注意__ ：这里的 `source` 文件夹不是 `Hexo` 站点目录下的 `source` 文件夹），解决跨域的问题。由于主题使用 `jsDelivr` 增加静态资源的访问速度，而 `jsDelivr` 在响应请求的时候，会添加 `access-control-allow-origin: *` 的响应标头信息，故而不存在跨域问题。  
`APlayer.js` 获取到歌词后会将歌词中的空白行去掉，由于是单行显示歌词，所以有译文的双行歌词，只会显示下面一行歌词，可以将译文歌词拼接在歌词原文的后面解决这个问题。  

## 常见问题

### 关于 jQuery 版本
mCustomScroll 目前暂不支持 `jQuery3.5` 以及以上版本，否则会导致代码块中的滚动条失效。  

### Position: fixed 定位问题
由于背景动画的 `z-index` 为 `-1`，导致在IE浏览器中，菜单等多处 `position: fixed` 样式的部件出现闪烁抖动的问题，所以默认在IE浏览器中关闭了背景动画。如果是高版本IE，例如IE11则可在设置 -> Internet选项 -> 高级，将浏览中的'使用平滑滚动'选项勾掉，也可以解决这个问题。  

### 关于 Github Page 的使用
详情请参见 [将 Hexo 部署到 GitHub Pages](https://hexo.io/zh-cn/docs/github-pages)。  
Github Page 支持设置自己的域名，建议在 Hexo 主题的 source 文件夹下新增一个 CNAME 的文件，将自己的域名配置进去，否则每次提交的时候会覆盖掉相关域名设置。  
在域名的解析设置中，可以使用 CNAME 解析方式，也可以使用 A记录 的方式。如果是 A记录 的方式，则需要检索当前 Github Page 对应的服务器 IP 地址。  

### 关于 CDN
CDN 可以在阿里云购买相关的 CDN 服务器，效果肯定是更好，这里使用的是 [jsDelivr](https://www.jsdelivr.com/) 免费的 CDN 加速服务。但是有一个弊端，如果修改代码的时候没有Github的相关版本信息，则很容易读取到 jsDelivr 的缓存数据，而不是修改后的最新代码。至于这个缓存时间，我也拿捏不准。不过免费而且效果不错的东西，大家就不要要求太多了。  


## 阶段计划
1.使用 Vue.js 重构项目  
2.整理模板的样式文件  
3.加入 Pjax，优化页面加载速度  
4.补充国际化支持语言  
5.考虑是否加入黑夜模式  


## 总结
由于我还是一名小白，可能还有很多问题无法解决，这个主题也可能存在很多不尽如人意的地方，在细节方面我也会尽力地去修改，也欢迎大家提出自己的问题，以及主题的相关建议，也欢迎大家提交代码。如果觉得这个主题不错，欢迎大家去使用。当然了，如果能赞赏我一下，我也是不介意的。(●ˇ∀ˇ●)  

这个主题可定制的地方目前可能比较少，欢迎大家修改，也希望这个主题能够越来越好看，也希望越来越多的人能够喜欢。  