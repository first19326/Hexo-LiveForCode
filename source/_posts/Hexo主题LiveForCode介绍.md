---
title: Hexo主题LiveForCode介绍
comments: true
donate: true
tags: Hexo
categories: Web
description: Hexo主题LiveForCode介绍.
sticky: 10000
abbrlink: 1112885395
date: 2020-08-01 00:00:00
from:
url:
author:
about:
avatar:
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

## 第三方服务

### Abbrlink

Hexo 默认的文章链接是以时间和文件名称命名的，如果文件名称是中文，那么文章链接会被转译，而转义后的链接很长，并且也不美观。[Hexo-Abbrlink](https://github.com/rozbo/hexo-abbrlink) 插件基于文章的标题自动为文章生成固定的链接。

1.安装 Hexo-Abbrlink 插件。前往站点根目录，执行命令安装：

```
npm install hexo-abbrlink --save
```

2.编辑 **站点配置文件**，修改以下配置：

```yml
permalink: posts/:abbrlink/ 
# or
permalink: posts/:abbrlink.html
```

3.编辑 **站点配置文件**，新增以下配置：

```yml
# abbrlink config
abbrlink:
  alg: crc32      #support crc16(default) and crc32
  rep: dec        #support dec(default) and hex
```

Hexo-Abbrlink 插件主要的设置选项：

- 算法（alg）：目前支持 `crc16` 和 `crc32` 算法，默认值为 `crc16`。

- 形式（rep）：生成的链接可以是十进制（`dec`）格式，也可以是十六进制（`hex`）格式，默认值为十进制（`dec`）格式。

生成的链接地址（参考）：

```
crc16 & hex
https://notes.worstone.cn/article/66c8.html

crc16 & dec
https://notes.worstone.cn/article/65535.html
```

```
crc32 & hex
https://notes.worstone.cn/article/8ddf18fb.html

crc32 & dec
https://notes.worstone.cn/article/1690090958.html
```

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

注：这里的 **apiKey** 为 `Search-Only API Key`  
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

### Vercel

[Vercel](https://vercel.com/) 是一个开箱即用的网站托管平台，方便开发者快速部署自己的网站。它在全球都拥有 CDN 节点，因此比 Github 官方自带的 Github Pages 更加稳定，访问速度更快。

#### Vercel 部署方式

进入到 Vercel 官网后，可以选择使用 Github 进行授权登录。Vercel 部署有两种方式（**推荐第一种方式**）：

1.利用 Vercel 的 Hexo 模板进行部署。

> 特别说明 使用这种方式需要已经安装 Hexo。<font color="red">不需要</font> 进行 Hexo 初始化，即 `hexo init` 。

选择 **Clone Template**，点击下方的 **Browse All Templates**，然后找到 **Hexo** 模版。

![template](/image/article/1112885395/template.png)

选择模板后，进入到创建仓库界面，设置好仓库名称，然后点击 **Create** 即可。至于是否设置成私有仓库，根据个人意愿选择，目前 Github 的私有仓库是 **免费** 的。

![repository](/image/article/1112885395/repository.png)

等待 Vercel 部署完成，跳转到部署成功的页面。点击 **Go to Dashboard** 即可查看刚刚的项目。

![congratulations](/image/article/1112885395/congratulations.png)

部署好的模板项目是 Hexo 默认的主题，需要将 Github 对应的项目下载到本地进行修改。项目想要在本地进行运行，需要**安装相关依赖**，通过`npm install` 或 `cnpm install` 或`yarn install`皆可进行安装。依赖安装完成后，即可进行主题安装等相关操作。

2.通过 GitHub 托管 `hexo deploy` 生成的网页文件进行部署。

创建新的项目，选择 **Import Git Repository**，然后选择 Hexo 网站对应的仓库，点击 **Import**。

![import](/image/article/1112885395/import.png)

跳转到 **Configure Project** 页面，项目名称可以自行修改，其他的自定义选项，**建议不要修改**，除非有什么特殊需求。

![configure](/image/article/1112885395/configure.png)

点击 **Deploy**，然后等待部署完成即可。部署完成后，Vercel 会提供几个默认的域名，可以在对应项目中查看。

#### Vercel 自定义域名

进入到 Vercel 的 **Dashboard**，然后点击对应项目，然后点击 **View Domains**，进入到项目的 **Domains** 界面，在这里可以进行域名管理。如果想要使用 Vercel 提供的二级域名，可以直接添加 `xxx.vercel.app`；如果想要绑定自己的域名，在添加域名后，会提示 **Invalid Config**，需要添加 DNS 解析。

#### Vercel DNS 解析

1.如果是根域名，请在你的 DNS 解析处添加 **A 记录**，指向 `76.76.21.21`。

2.如果是子域名，请在你的 DNS 解析处添加 **CNAME 记录**，指向 `cname.vercel-dns.com`。

添加 DNS 解析记录之后，在 **Vercel Domains** 界面对应域名下方显示对号即表明验证成功。

![invalid](/image/article/1112885395/invalid.png)

> 特别说明 Github 仓库的分支尽量选择 **master**，否则 Github 推送之后，还需到 Vercel 手动部署项目。

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
#### 基于 `Valine.js` 实现方式

在文章列表页面加载 `Valine.js`， 只要 Valine 配置项中的 `el` 元素不存在即不会加载评论框相关内容。

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

> 特别说明 使用 __国际版的 LeanCloud__ 的时候，需要配置 __主题配置文件__ 中 Valine 的 `serverURLs`，内容为 LeanCloud 的 `Request Domain`，国内版则需要 **域名备案**。

#### 基于 `Waline.js` 实现方式

1.文章评论数统计

详情请参见 [Waline 文档-评论数统计](https://waline.js.org/guide/features/comment.html)

2.文章阅读量统计

详情请参见 [Waline 文档-浏览量统计](https://waline.js.org/guide/features/pageview.html)

### 评论列表

评论功能可以选择 `Valine.js` 或 `Waline.js`，配置详情参见 [Valine](https://valine.js.org/)、[Waline](https://waline.js.org/) 。

> 特别说明 __主题配置文件__ 中评论的数据存储如果使用 LeanCloud，则 `appId` 与 `appKey` 请大家自行配置自己的参数。另外，由于 LeanCloud **不再提供默认域名**，**国内版本需要域名备案**，否则无法使用。

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
`APlayer.js` 是通过 `XMLHttpRequest` 获取歌词文件，所以存在 __跨域__ 问题。可以考虑将歌词文件放在主题文件夹 `LiveForCode` 的 `source` 文件夹下（ __注意__ ：这里的 `source` 文件夹不是 `Hexo` 站点目录下的 `source` 文件夹），解决跨域的问题。由于 `jsDelivr` 在响应请求的时候，会添加 `access-control-allow-origin: *` 的响应标头信息，故而不存在跨域问题，也可以使用这种方式。不过需要注意的是，`jsDelivr` 对资源的大小有所限制，不可以超过 __50M__ 。  
`APlayer.js` 获取到歌词后会将歌词中的空白行去掉，由于是单行显示歌词，所以有译文的双行歌词，只会显示下面一行歌词，可以将译文歌词拼接在歌词原文的后面解决这个问题。  


## 常见问题

### 关于 jQuery 版本
mCustomScroll 目前暂不支持 `jQuery3.5` 以及以上版本，否则会导致代码块中的滚动条失效。  

### Position: fixed 定位问题
由于背景动画的 `z-index` 为 `-1`，导致在IE浏览器中，菜单等多处 `position: fixed` 样式的部件出现闪烁抖动的问题，所以默认在IE浏览器中关闭了背景动画。如果是高版本IE，例如IE11则可在设置 -> Internet选项 -> 高级，将浏览中的'使用平滑滚动'选项勾掉，也可以解决这个问题。  

### 关于 Github Page 的使用
详情请参见 [将 Hexo 部署到 GitHub Pages](https://hexo.io/zh-cn/docs/github-pages)。  
Github Page 支持设置自己的域名，建议在 Hexo 主题的 source 文件夹下新增一个 CNAME 的文件，将自己的域名配置进去，否则每次提交的时候会覆盖掉相关域名设置。  
在域名的解析设置中，可以使用 CNAME 解析方式，也可以使用 A 记录 的方式。如果是 A 记录 的方式，则需要检索当前 Github Page 对应的服务器 IP 地址。  

### 关于 CDN
CDN 可以在阿里云购买相关的 CDN 服务器，效果肯定是更好，这里使用的是 [jsDelivr](https://www.jsdelivr.com/) 免费的 CDN 加速服务。但是有一个弊端，如果修改代码的时候没有 Github 的相关版本信息，则很容易读取到 jsDelivr 的缓存数据，而不是修改后的最新代码。至于这个缓存时间，我也拿捏不准。不过免费而且效果不错的东西，大家就不要要求太多了。 

### 关于 Valine
由于很多小伙伴直接使用主题中 Valine 的 `appId` 以及 `appKey`，而且 Valine 默认设置的 `path` 为 `window.location.pathname`，会导致大家的留言板数据出现异常。所以这里还是建议大家设置自己的 LeanCloud，__推荐使用国际版__ ，后续如果想要添加邮件提醒，这样会方便很多。

### 关于 Waline

Valine 评论功能简单，不支持评论管理以及通知功能，虽说可以通过 [Valine-Admin](https://github.com/DesertsP/Valine-Admin) 实现评论管理以及通知等功能，但非常麻烦。其他的评论系统有些需要服务器，例如 Artalk。所以选择集成了 Waline，通过在 Vercel 部署以达到无需服务器的目的。如果考虑到 **访问速度** 的问题，可以选择部署在 **华为云** 的 Serverless 上，每个月都有免费的资源。

### 关于 Vercel
Github Pages 内容部署的服务器在美国，可能会导致国内部分地区加载速度较慢，大家可以将项目部署到 __Vercel__ ，来提高网站的访问速度，同时也 __方便百度对站点内容进行收录__ 。如果 __网站域名已经备案__ ，则可以考虑 __国内的阿里云或腾讯云的相关产品__ ，效果会更好。
目前 Vercel 提供的默认 `.app` 域名由于 **DNS 污染** 国内无法访问，**需要添加自己的域名（无需备案）**。

### Cannot read property 'LongCang' of undefined  
这个问题比较常见，是主题文件路径不正确导致的。因为很多小伙伴都询问这个问题，所以在这里进行一个说明。    

![Hexo-LiveForCode](/image/article/1112885395/structure.png)

直接从 Github 下载 `Zip` 格式的文件解压后或 Github `Clone` 后的文件结构应该如上图所示。这里需要注意，是将解压后文件夹中的 `LiveForCode` 文件夹复制到 `Hexo` 的 `themes` 文件夹下，而不是将解压后的 `Hexo-LiveForCode` 复制到 `themes` 文件夹下。

### 标签、分类、归档等页面 `404` 或 `Cannot GET`
由于 `Hexo` 的标签、分类、归档等页面的目录修改为了 `tag`、`category`、`archive`，故使用默认的 __站点配置文件__ 会出现这个问题。需要将 __站点配置文件__ 中的 `Directory` 相关配置修改为：

```yml
tag_dir: tag
archive_dir: archive
category_dir: category
```


## 阶段计划
- 添加本地搜索
- 加入服务状态页面
- 添加 `即刻短文` 功能
- 标签外挂（Tag Plugins）
- 卡片式风格（文章列表）
- 图片懒加载
- 使用变量统一样式文件
- 添加 Hexo-Admin
- 使用 Vue.js 重构项目
- 加入 Pjax，优化页面加载速度
- 补充国际化支持语言
- 重新编写部署教程，添加视频教程


## 总结
由于我还是一名小白，可能还有很多问题无法解决，这个主题也可能存在很多不尽如人意的地方，在细节方面我也会尽力地去修改，也欢迎大家提出自己的问题，以及主题的相关建议，也欢迎大家提交代码。如果觉得这个主题不错，欢迎大家去使用。当然了，如果能赞赏我一下，我也是不介意的。(●ˇ∀ˇ●)  

这个主题可定制的地方目前可能比较少，欢迎大家修改，也希望这个主题能够越来越好看，也希望越来越多的人能够喜欢。  