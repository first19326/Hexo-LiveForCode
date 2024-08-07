# Hexo - Live For Code

Hexo - Live For Code 主题介绍以及使用说明：[Hexo主题LiveForCode介绍](https://notes.worstone.cn/article/1112885395/)

## 公告

目前，jsDelivr 中国地区的功能已经 __恢复正常__。如果后续再次出现问题，可以切换 __本地的静态资源__，保证网站 __正常运行__。

由于主题修改内容比较多，所以计划拆分版本，将当前的内容切换到 __release-1.0.0__ 分支中，后续 __master__ 分支将为 __最新版本主题__。由于静态资源有些许出入，所以将 __CDN 静态资源__ 仓库同样进行了拆分。使用 __1.0.0 版本__ 主题的小伙伴需要将 __主题配置文件__ 静态资源链接中的 `@master` 修改为 `@release-1.0.0`。给大家带来的不便，深表歉意。

## 资源说明

| 名称 | 说明 |
| :- | :- |
| static | 此为主题 Style、Script、Font、Image 等静态资源文件 |
| source | 此为主题 文章、标签、分类 等模板文件 |
| _config.yml | 此为 Hexo 站点配置文件，仅供参考 |
| LiveForCode | 此为主题 Live For Code 页面模板等主要内容 |

提示：  
如果在 __主题配置文件__ 中添加新的配置信息，并且想要在 `javascript` 中使用，那么请将其同步配置到 `config.ejs` 中。在 `javascript` 中使用 `window.config.xxx` 获取对应的配置信息。  

如果不想要在 `javascript` 中使用，或者只是修改 __主题配置文件__ 中的配置信息，则不需要同步配置。  

## 后续计划

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

## 修改说明

- 2024/07/15

1. `F` 修复了页脚样式不生效的问题

- 2023/07/04

1. `F` 修复了 **README.md** 中 《**Hexo主题LiveForCode介绍**》文章链接错误的问题

<br/>

1. `A` 新增了音乐接口相关配置
2. `A` 新增了个人主页相关配置
3. `A` 新增了 **函数节流** 以及 **函数防抖**
4. `U` 修改了版权信息

- 2023/05/13

1. `A` 新增了深色模式下 **网站图标** 文件。
2. `A` 新增了 **适配系统模式** 更换 **网站图标** 的方法。
3. `U` 修改了 **网站图标** 相关配置，以适配更多场景。

- 2023/05/02

1. `U` 修改了 **mouse** 相关文件位置，并修改对应的样式文件 `mouse.css`。
2. `U` 修改了 **网站图标** 文件，并修改了 **主题配置文件** 中对应的 `url`。
3. `U` 修改了主题默认配置。

- 2023/04/19

1. `A` 新增了深色模式下的 **Github SVG** 文件。
2. `U` 修改了 `code.css` 样式。
3. `U` 修改了 `waline-custom.css` 样式，并修复了 **Waline** 在不同模式下代码高亮样式不一致的问题。
4. `U` 修改了 `donate.css` 样式，添加深色模式下 **Donate** 样式。

- 2023/04/12

1. `A` 新增了右下角菜单按钮并绑定对应事件。
2. `U` 修改了 **iconfont** 内容。
3. `U` 修改了 `menu-bubble.css` 样式。
4. `U` 修改了 **Tools** 代码结构，拆分出了 **Music** 以及 **Wrap-Right** 模块。
5. `U` 修改了 **Waline** 代码样式。
6. `U` 修改了 **Wrap-Right** 代码结构、样式以及动画效果。

- 2023/04/06

1. `F` 修复了 **Waline** 样式错误的地方。

<br/>

1. `U` 修改了评论模块背景图片，并且重新命名（相关样式文件进行了同步修改）。
2. `U` 修改了 `menu-bubble.css` 样式，关闭了在 **Safari** 浏览器中 `button` 点击的默认样式。
3. `U` 修改了 `valine.css` 样式，在移动端不显示评论模块的背景图片（`<textarea>` 标签在移动端不可以手动调整高度）。
4. `U` 修改了 `waline-custom.css` 样式，在移动端不显示评论模块的背景图片；修改了输入框以及文本框字体颜色（CSS 中的伪类不可以动态修改样式，即使是使用变量）。

- 2023/03/29

1. `F` 修复了深色模式下 **Safari** 浏览器中 **Waline** 输入框字体颜色不正确的问题。

<br/>

1. `A` 新增了深色模式下 **Waline** 关于 `<textarea>` 标签 `placeholder` 字体颜色的样式。
2. `U` 修改了 `base.css` 中的样式。
3. `U` 修改了 `fancybox.css` 中的样式。
4. `U` 修改了 `clipboard.css` 中的样式，修复 **Safari** 浏览器下复制代码按钮点击后出现蓝色外边框的问题。

- 2023/03/27

1. `F` 修复了菜单按钮消失的问题。

<br/>

1. `A` 新增了网页字符集（charset）设置。
2. `U` 更新了复制代码的方法，复制代码时，会清除选中代码样式。

- 2023/03/20

1. `F` 修复了代码块与行号分离的问题。

<br/>

1. `A` 新增了邮件模板相关内容。
2. `U` 修改了 **Waline** 样式，并对 `720px` 以下屏幕尺寸进行适配。

- 2023/03/12

1. `F` 修复了文章列表样式出现的问题。

<br/>

1. `A` 新增了 **Waline** 适配，可以在 **主题配置文件** 中配置并使用 Waline 相关功能。
2. `A` 新增了 `Hexo主题LiveForCode介绍` 文章中，关于 Waline 相关内容。
3. `U` 修改了 **主题配置文件** 中评论相关的属性。（说明：由于引入了 Waline 相关内容，所以对 **主题配置文件** 相关属性进行调整）
4. `U` 修改了 `Hexo主题LiveForCode介绍` 文章中，关于 Valine 相关内容。
5. `U` 更新了 **浏览量**、**评论数** 展示的逻辑。对于评论数而言，`theme.Comment.switch`（全局）、`theme.Waline.comment`（Waline）、`post.comments`（文章）优先级由高到低。对于浏览量而言，`theme.Valine.visitor`（Valine）或 `theme.Waline.pageview`（Waline）直接控制。

- 2022/07/15

1. `U` 修改了首页样式。
2. `U` 修改了文章页面样式。
3. `U` 修改了 CDN 版本的 __主题配置文件__ 名称。
3. `U` 修改了 CDN 版本的 __主题配置文件__ 中的静态资源链接。（说明：由于即将 __发布新版本的主题__，静态资源有些出入，所以拆分了版本）

- 2022/06/06

1. `F` 修复了 Github Pages 统一跳转到 `notes.worstone.cn` 的问题。__CNAME 文件__ 需要修改为自己的域名，如果出现此问题，请将内容清空。
2. `F` 修复了图片插件不生效的问题。
3. `F` 修复了 `<blockquote>` 标签样式异常的问题。

<br/>

1. `A` 新增了 `Hexo主题LiveForCode介绍` 文章的相关图片。
2. `D` 删除了无用的图片。

- 2022/05/21

1. `F` 修复了网站样式丢失的问题，并提供了多种解决方案。
1. `F` 修复了 __Valine__ 相关的问题，将相关设置还原，添加域名判断存在其他问题。
3. `F` 修复了归档页面样式问题。

<br/>

1. `A` 新增了 __Hexo-Abbrlink__ 插件，并引入相关设置，引入文章短链接替换日期加文章名称的形式。
2. `A` 新增了 __Valine Service__，引入评论邮件通知功能，以及评论后台管理。
3. `A` 新增了 `Hexo主题LiveForCode介绍` 文章中，关于 __Vercel__ 部署以及 `Hexo-Abbrlink` 插件相关设置。
4. `U` 修改了 __Valine__ 版本，并针对主题样式对其进行调整。
5. `U` 修改了静态资源文件引入方式，将其添加到 __Hexo__ 主题目录中的 `source` 文件夹中。

- 2022/03/20

1. `F` 修复了 __Valine__ 切换国际版 __LeanCloud__ 时，由于域名 `us.avoscloud.com` 失效导致的 __Valine__ 不可用的问题。需要用户添加 __Valine__ 配置中的 `serverURLs`，内容为 __LeanCloud__ 的 `Request Domain`。

<br/>

1. `A` 新增了 `Hexo主题LiveForCode介绍` 文章中，关于 __Valine__ 的相关问题。
2. `U` 修改了 __Valine__ 设置，文章路径 `path` 新增域名判断，解决文章评论以及留言内容数据异常的问题。

- 2021/09/30

1. `A` 新增了鼠标动画相关内容。该动画效果来源于 __@BNDong__。
2. `U` 修改了文章后缀的样式，在 __720px__ 屏幕尺寸设备将隐藏文章后缀。

- 2021/08/08

1. `F` 修复了网页控制台提示的 `favicon.ico 404` 的问题，实际显示效果没有变化。

- 2021/08/02

1. `U` 修改了 `Hexo主题LiveForCode介绍` 文章中，__Algolia Search__ 设置中的错误内容。__感谢提供信息的小伙伴__。

- 2021/07/01

1. `A` 新增了 `Hexo主题LiveForCode介绍` 文章中，`Cannot read property 'LongCang' of undefined` 问题 以及 标签、分类、归档等页面 `404` 或 `Cannot GET` 问题的说明以及解决方案。    

- 2021/05/28

1. `U` 修改了网站首页的标题设置，即 `<title>` 标签内容。现在的网站首页的标题为 __站点配置文件__ 中的 `title` 属性。    

- 2021/03/31

1. `F` 修复了 `jsDelivr` 超过 __50M__ 失效的问题。    

<br/>

1. `U` 修改了相关文件中的 `CDN` 配置链接，并将主题的静态资源文件提取到单独的仓库中，以便通过 `jsDelivr` 进行加速。    
2. `U` 修改了 `H5 <video>` 中的字幕样式。    

- 2021/03/26

1. `F` 修复了设置成 `Meting` 后，无法加载音乐播放插件的问题。    

- 2021/03/20

1. `A` 新增了 `友情链接` 页面的图片，解决了由于网络原因图片加载失败的问题。    
2. `U` 修改了 `友情链接` 页面图片 `url`。    
3. `U` 修改了 `Hexo` 配置文件，修改了 `use_date_for_updated` 属性为 `updated_option` 以适应高版本的 `Hexo`，详细信息参考官方文档 [日期 / 时间格式](https://hexo.io/zh-cn/docs/configuration#%E6%97%A5%E6%9C%9F-%E6%97%B6%E9%97%B4%E6%A0%BC%E5%BC%8F)。    

- 2020/11/20

1. `F` 修复了 `jsDelivr` 超过 __50M__ 失效的问题。  

<br/>

1. `U` 修改了 `music` 文件的位置，将其调整到主题的 `source` 文件目录下，原位置只保留主题默认的一首歌曲信息。  
2. `U` 修改了主题中音乐播放器配置中的歌曲信息，修改其访问路径。  
3. `U` 修改了 `Hexo主题LiveForCode介绍` 文章中，音乐播放器相关内容。  

- 2020/11/09

1. `F` 修复了文章 `<ol>` 标签样式异常的问题。  
2. `F` 修复了文章中某些代码块字体大小异常的问题。  
3. `F` 修复了手机端横屏时，字体大小异常的问题。  
4. `F` 修复了菜单配置异常的问题。  

<br/>

1. `A` 新增了 `Hexo主题LiveForCode介绍` 文章中，安装主题时 `source` 文件夹处理的相关内容，解决安装主题后，分类、标签、赞赏等页面出现的 `404` 情况，__十分抱歉给各位带来不好的体验__。  
2. `A` 新增了 `Hexo主题LiveForCode介绍` 文章中，`404` 错误页面的设置内容。  
3. `A` 新增了 `Hexo主题LiveForCode介绍` 文章中，音乐播放器相关内容。  
4. `U` 修改了 `Hexo主题LiveForCode介绍` 文章的排版格式。  

- 2020/11/08

1. `A` 新增了 `APlayer` 相关的音乐文件 `music`，其中包括封面、歌曲以及歌词。  
2. `A` 新增了 `APlayer` 相关设置，可以不再依赖 `Meting.js` 实现音乐播放器功能，并且保留 `Meting.js` 的实现方式，可以相互切换。  

- 2020/11/05

1. `F` 修复了当前 `404` 页面存在的小问题，例如 `404` 标题重影问题。  

<br/>

1. `A` 新增了 `404` 页面背景图片。  
2. `U` 修改了主题 `LiveForCode` 中的 `404` 页面原型以及主题中的 `404` 页面相关文件。适配了手机端样式，以及高分辨率下的样式。  

- 2020/10/22

1. `U` 修改了 `Hexo主题LiveForCode介绍` 文章中关于主题安装部分的错误内容。  

- 2020/09/17

1. `U` 修改了菜单样式，适配手机端的 `Safari` 浏览器。`Safari` 浏览器在上滑的时候会隐藏底部的工具栏，此时点击工具栏所在区域的链接时，默认触发 __底部工具栏显示__ 的事件，然后触发页面调整，将点击元素内容移出工具栏所在区域，并且阻止元素后续事件。但是当元素样式为 `position: fixed` 时，底部工具栏显示会直接将元素内容遮盖，并阻止元素后续事件，导致元素无法点击。（`ios 13` 新的特性，可以将 `Safari` 浏览器的底部工具栏设置为时刻隐藏的状态，但是这也出现了一个问题，那就是隐藏了工具栏以后，工具栏对应位置的所有 __点击事件__ 失效）  
2. `U` 修改了 `#sidebar` 元素的位置，使页面布局更加合理。  

- 2020/09/15

1. `F` 修复了菜单滚动条在移动端穿透的问题。  
2. `F` 修复了查询窗口中的输入框获取焦点时，页面缩放的问题。  
3. `F` 修复了查询窗口在移动端滚动事件从当前元素中逃逸的问题。  
4. `F` 修复了移动端搜索窗口在搜索框获得焦点时，`body` 仍会发生滚动的问题。  
5. `F` 修复了移动端菜单按钮的图标与单词错位的问题。  

<br/>

1. `A` 新增了 `iscroll.js` 滚动插件，解决查询窗口滚动逃逸的问题。  
2. `D` 删除了页面中 `#sidebar` 元素样式。（仅仅是一个盒子元素，没有在页面显示）  
3. `D` 删除了 `optiscroll.js` 滚动插件以及对应样式。  
4. `D` 删除了 `jquery.mousewheel.js` 插件。（此插件是 `mCustomScrollbar.js` 插件的依赖插件，之前修改遗漏）  
5. `U` 修改了文章列表页面阅读统计部分样式，使其响应式效果更佳。  
6. `U` 修改了菜单的页面结构以及样式，使之可以支持原生的滚动事件。  

- 2020/09/13  

1. `A` 新增了 `word-two`、`word-three` 样式，用于文章信息卡片。文章信息卡片中的信息标题默认为 `4` 字，如果修改为 `2` 字或者 `3` 字，添加对应样式即可。  
2. `U` 修改了文章页样式，包括：文章标签与分类信息字体、文章信息卡片字体以及信息标题样式。  
3. `U` 修改了评论列表样式，`Valine.js` 在没有评论下的字体颜色。  
4. `U` 修改了文章页图片样式，图片修改为居中放置。  

- 2020/09/12   

1. `F` 修复了 `Valine.js 1.4.14` 版本中 获取用户 `IP` 接口 `MIME` 类型不匹配错误。  
2. `F` 修复了代码块换行以及字体大小变化等样式错误。  

<br/>

1. `A` 新增了 `Hexo` 自带的代码高亮配置，因其是通过生成静态页面的时候，直接解析 `Markdown` 内容，生成对应的代码格式，并通过页面的 `Style` 文件，实现代码高亮。  
2. `A` 新增了新的代码高亮样式 `normal` 以及 `night`，分别为 [Tomorrow Theme](https://github.com/chriskempson/tomorrow-theme) 中的 `Tomorrow` 以及 `Tomorrow Night Eighties`，稍有修改。  
3. `D` 删除了 `mCustomScrollbar.js` 代码块的滚动条插件。（由于 IE 浏览器以及手机端兼容性问题）  
4. `D` 删除了 `highlight.js` 代码高亮插件。（由于 `highlight.js` 插件必须在 `javascript` 中动态处理代码块高亮，若 `Markdown` 中的代码块过多，则会导致页面加载速度略慢、客户端性能开销稍大）  
5. `U` 修改了代码块的样式，固定代码行，设置仅代码内容可以水平滚动。  