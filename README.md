# Hexo - Live For Code
Hexo - Live For Code 主题介绍以及使用说明：[Hexo主题LiveForCode介绍](https://www.notes.worstone.cn/2020/08/01/Hexo主题LiveForCode介绍/)   

## 资源说明
| 名称 | 说明 |
| :- | :- |
| 404 | 此为主题 404 页面文件 | 
| static | 此为主题 Style、Script、Font、Image 等静态资源文件 | 
| source | 此为主题 文章、标签、分类 等模板文件 | 
| _config.yml | 此为 Hexo 站点配置文件，仅供参考 |
| LiveForCode | 此为主题 Live For Code 页面模板等主要内容 |   

提示：  
如果在 __主题配置文件__ 中添加新的配置信息，并且想要在 `javascript` 中使用，那么请将其同步配置到 `config.ejs` 中。在 `javascript` 中使用 `window.config.xxx` 获取对应的配置信息。  
如果不想要在 `javascript` 中使用，或者只是修改 __主题配置文件__ 中的配置信息，则不需要同步配置到 `config.ejs` 中。  

## 修改说明
- 2020/09/13  

1. `A` 新增了 `word-two`、`word-three` 样式，用于文章信息卡片。文章信息卡片中的信息标题默认为 `4` 字，如果修改为 `2` 字或者 `3` 字，添加对应样式即可。
2. `U` 修改了文章页样式，包括：文章标签与分类信息字体、文章信息卡片字体以及信息标题样式。  
3. `U` 修改了评论列表样式，`Valine.js` 在没有评论下的字体颜色。  

- 2020/09/12   

1. `F` 修复了 `Valine.js 1.4.14` 版本中 获取用户 `IP` 接口 `MIME` 类型不匹配错误。  
2. `F` 修复了代码块换行以及字体大小变化等样式错误。  

<br/>

1. `A` 新增了 `Hexo` 自带的代码高亮配置，因其是通过生成静态页面的时候，直接解析 `Markdown` 内容，生成对应的代码格式，并通过页面的 `Style` 文件，实现代码高亮。  
2. `A` 新增了新的代码高亮样式 `normal` 以及 `night`，分别为 [Tomorrow Theme](https://github.com/chriskempson/tomorrow-theme) 中的 `Tomorrow` 以及 `Tomorrow Night Eighties`，稍有修改。
3. `D` 删除了 `mCustomScrollbar.js` 代码块的滚动条插件。（由于 IE 浏览器以及手机端兼容性问题）  
4. `D` 删除了 `highlight.js` 代码高亮插件。（由于 `highlight.js` 插件必须在 `javascript` 中动态处理代码块高亮，若 `Markdown` 中的代码块过多，则会导致页面加载速度略慢、客户端性能开销稍大）  
5. `U` 修改了代码块的样式，固定代码行，设置仅代码内容可以水平滚动。