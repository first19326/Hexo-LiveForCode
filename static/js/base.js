function Base() {

    const script      = this,
          tools       = new websiteTools,
          progressBar = new ToProgress(window.config.ProgressBar, '.progressbar-top'); 


    let temScroll      = 0,                       // 上一次页面滚动位置
        wrapRightTimer = null,
        timers         = {                        // 定时器
            setMenuDataTimer              : null, // 菜单设置数据定时器ID
            setSearchTimer                : null, // 搜索设置定时器ID
            setArticleHeaderCategoryTimer : null, // 文章信息分类设置定时器ID
            setArticleHeaderTagTimer      : null, // 文章信息标签设置定时器ID
            setTocTimer                   : null, // 文章目录设置定时器ID
            setLazyLoadTimer              : null, // 图片懒加载定时器ID
            setDonateTimer                : null, // 赞赏模块定时器ID
            setCommentsTimer              : null, // 评论框设置定时器ID
            setWrapRightTimer             : null, // 主页右下角菜单设置定时器ID
        };

//----------------------------------- 初始化 -----------------------------------------//

    /**
     * 初始化
     */
    this.init = function () {
        script.loadingBeforeInit(); // Loading 前初始化
        script.endLoading();        // Loading 结束
        script.loadingAfterInit();  // Loading 后初始化
    };

//----------------------------- Loading 前后逻辑处理 ----------------------------------//

    /**
     * Loading前初始化
     */
    this.loadingBeforeInit = function () {

        // 延时清除全部定时器
        setTimeout(script.clearIntervalAll, 30000);

        // 添加扩展字体图标库
        if (window.config.FontIconExtend !== '') tools.dynamicLoadingCss(window.config.FontIconExtend);

        // 页面初始化
        ($('.header-subtitle').length > 0) ? script.otherInit() : script.homeInit();
    };

    /**
     * Loading后初始化
     */
    this.loadingAfterInit = function () {

        // 添加页脚
        script.addFooter();

        // 背景动画
        script.setBackAnimation();   

        // 更换网站图标
        let favicon = $('link[rel="shortcut icon"]');
        if (favicon.length) {
            favicon.attr('href', window.config.WebsiteFavicon);
        } else {
            let link  = document.createElement('link');
            link.type = "image/x-icon";
            link.rel  = "shortcut icon";
            link.href = window.config.WebsiteFavicon;
            document.getElementsByTagName('head')[0].appendChild(link);
        }

        // 滚动监听
        $(window).scroll( function() { script.scrollMonitor(); });

        // 窗口变化监听
        $(window).resize( function() { script.resizeMonitor(); });

        // 设置名称
        $('.header-title').text(window.config.BlogUser);

        // 初始化样式
        script.initStyle();

        // HTML5-TITLE
        script.htmlTitle();

        // 设置菜单侧边栏内容
        timers.setMenuDataTimer = window.setInterval( script.setMenuData, 1000 );

        // 设置搜索功能
        timers.setSearchTimer = window.setInterval( script.setSearch, 1000 );

        // 图片懒加载
        timers.setLazyLoadTimer = window.setInterval( script.imageLazyLoad, 1000 );

        // 添加页面特效控制
        script.setPageAnimationControl();

        // 控制台输出
        tools.consoleText(window.config.ConsoleList, 'banner');
    };

//---------------------------------- 逻辑处理 --------------------------------------//

//=================== 逻辑处理：公共方法 ===================//

    /**
     * 清除全部定时器
     */
    this.clearIntervalAll = function () {
        $.each(timers, function (e) {
            null != timers[e] && window.clearInterval(timers[e]);
        });
    };

    /**
     * 清除单个定时器
     */
    this.clearIntervalTimer = function (timer) {
        null != timer && window.clearInterval(timer);
    };

    /**
     * 滚动处理
     */
    this.scrollMonitor = function() {

        let homeScroll     = $('#container').offset().top - 40,
            docScroll      = $(document).scrollTop(),
            docHeight      = $(document).height(),
            windowHeight   = $(window).height(),
            scrollPercent  = tools.getScrollPercent(),
            openButton     = $('.menu-button-open'),
            toUpDown       = $(".up-down"),
            toUpDownI      = $(".up-down div"),
            toUpDownSpan   = $('.up-down span');            
            

        // 设置滚动条
        progressBar.setProgress(scrollPercent);

        // 设置头部底部按钮
        if (homeScroll <= docScroll) {
            toUpDownI.rotate({animateTo:0});
            toUpDown.attr('data', 'up');
            toUpDownSpan.text('返回顶部');
        } else {
            toUpDownI.rotate({animateTo:-180});
            toUpDown.attr('data', 'down');
            toUpDownSpan.text('跳至底部');

            // 如果滚动到页面底部，则设置为返回顶部
            if (docScroll == (docHeight - windowHeight)) {
                toUpDownI.rotate({animateTo:0});
                toUpDown.attr('data', 'up');
                toUpDownSpan.text('返回顶部');
            }
        }

        // 设置上下滚动
        if (temScroll < docScroll) { 
            // 向下滚动
            // 滚过头图
            if (homeScroll <= docScroll) { 

                // 设置菜单按钮
                if (!openButton.hasClass('menu-button-scroll')) {
                    openButton.addClass('menu-button-scroll');
                    openButton.text('');
                }
            }

        } else { 
            // 向上滚动
            // 滚入头图
            if (homeScroll >= docScroll) { 

                // 设置菜单按钮
                if (openButton.hasClass('menu-button-scroll')) {
                    openButton.removeClass('menu-button-scroll');
                    openButton.text('MENU');
                }
            }
        }

        // 设置目录状态
        script.setTocStatus();
        // 设置目录Fixed定位（相对于浏览器窗口进行定位）
        script.setTocPositionFixed();
        // 设置右下角菜单状态
        script.setWrapRightStatus();

        temScroll = docScroll;
    };

    /**
     * 屏幕大小变化处理
     */
    this.resizeMonitor = function() {
        script.setDomHomePosition();

        // 设置目录位置
        script.setTocPosition();
        // 设置目录状态
        script.setTocStatus();
    };

    /**
     * 右下角菜单事件处理
     */
    this.wrapRightMous = function(parentObject, subObject) {
        $(parentObject).on({
            mouseover : function(){
                $(subObject).show();
            },
            mouseout : function(){
                $(subObject).hide();
            },
            click: function () {

                if (subObject === '.attention span') {
                    let attDiv = $('.attention');
                    // 点击关注
                    if ($(parentObject).attr('switch') == 'false') {
                        $(parentObject).attr('switch', 'true');
                        $(subObject).text('已关注');  
                        $(parentObject).find('i').removeClass('icon-like').addClass('icon-like-fill');
                    } else {
                        $(parentObject).attr('switch', 'false');
                        $(subObject).text('关注');
                        $(parentObject).find('i').removeClass('icon-like-fill').addClass('icon-like');
                    }
                }

                if (subObject === '.up-down span') {
                    // 点击滚动
                    let ac = $(this).attr('data');
                    if (ac === 'down') {
                        let docHeight    = $(document).height();
                        let windowHeight = $(window).height();
                        tools.actScroll(docHeight - windowHeight, 2000)
                    } else {
                        tools.actScroll(0, 2000)
                    }
                }
            }
        }) ;
    };

    /**
     * 右下角菜单状态设置
     */
    this.setWrapRightStatus = function() {
        $('.wrap-right').fadeIn(300);
        clearTimeout(wrapRightTimer);
        wrapRightTimer = setTimeout(function() {
            $('.wrap-right').fadeOut(300);
        }, 5000);
    }

    /**
     * 初始化样式
     */
    this.initStyle = function(){

        if (window.ActiveXObject || "ActiveXObject" in window) { 
            // IE Browser
            // Menu Style
            $(".menu").css("background", "rgba(0, 0, 0, 1)");
            $(".morph-shape").css("position", "absolute");
            $(".morph-shape").css("fill", "rgba(0, 0, 0, 1)");
        } else {
            // Other Browser
            // Scroll Down Style
            $(".scroll-down").css("font-size", "34px");
            $(".scroll-down-icon").css("position", "relative");
        }
    }


//=================== 逻辑处理：页面公共处理

    /**
     * 结束Loading页面
     */
    this.endLoading = function() {
        loading.spinner.setComplete();
        $('.loading').hide();
        $('#cover').hide();
    };

    /**
     * HTML-TITLE
     */
    this.htmlTitle = function() {
        let RelTitle = document.title,
            hidden,
            visibilityChange,
            timer;

        if (typeof document.hidden !== "undefined") {
            hidden = "hidden";
            visibilityChange = "visibilitychange";
        } else if (typeof document.mozHidden !== "undefined") { 
            // Firefox up to v17
            hidden = "mozHidden";
            visibilityChange = "mozvisibilitychange";
        } else if (typeof document.webkitHidden !== "undefined") { 
            // Chrome up to v32, Android up to v4.4, Blackberry up to v10
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
        }

        function handleVisibilityChange() {
            if (timer) clearTimeout(timer);
            if (document[hidden]) {
                timer = setTimeout(function () {
                    document.title = window.config.WebsiteTitleBlur;
                }, window.config.WebsiteTitleBlurTimeOut);
            } else {
                document.title = window.config.WebsiteTitleFocus;
                timer = setTimeout(function () {
                    document.title = RelTitle;
                }, window.config.WebsiteTitleFocusTimeOut);
            }
        }
        if (typeof document.addEventListener !== "undefined" || typeof document[hidden] !== "undefined") {
            document.addEventListener(visibilityChange, handleVisibilityChange, false);
        }
    };

    /**
     * 初始化主体内容位置
     */
    this.setDomHomePosition = function () {
        $('#container').css('margin-top', $('.header').outerHeight() + 'px');
    };

    /**
     * 页面特效控制
     */
    this.setPageAnimationControl = function () {
        if (window.config.HomeHeaderAnimationRendered
            || window.config.ArticleHeaderAnimationRendered
            || window.config.BackAnimationRendered
        ) {
            let html = '<div id="animationSwitch" data="off" style="z-index: 999; position: absolute; top: 15px; right: 20px; font-size: 14px; color: #F9F9F9; cursor: pointer;">';
            html += '<span class="iconfont icon-lightning" style="display: inline-block;"></span>';
            html += '<span>关闭页面特效</span>';
            html += '</div>';
            $('#tools').prepend(html);
            $('#animationSwitch').click(function () {
                if ($(this).attr('data') == 'off') {
                    $('body').find('canvas').hide();
                    $('#animationSwitch span').first().rotate({animateTo:-360});
                    $('#animationSwitch span').last().text("打开页面特效");
                    $(this).attr('data', 'on');
                } else {
                    $('body').find('canvas').show();
                    $('#animationSwitch span').first().rotate({animateTo:360});
                    $('#animationSwitch span').last().text("关闭页面特效");
                    $(this).attr('data', 'off');
                }
            });
        }
    };

    /**
     * 设置菜单数据
     */
    this.setMenuData = function() {

        let introduceAvatar = $('.introduce-avatar'),       // 简介头像
            introduceUser   = $('.introduce-user span'),    // 简介名称
            menuList        = $('.menu-list ul'),           // 菜单列表
            menuLink        = $('.menu-link'),              // 菜单链接
            menuListArr     = window.config.MenuList,
            menuLinkArr     = window.config.MenuLink;
        
        // 添加个人简介头像
        if (window.config.BlogAvatar != '') {
            introduceAvatar.append("<img src='" + window.config.BlogAvatar + "'>");
        }

        // 设置个人简介名称
        if (window.config.BlogUser != '') {
            introduceUser.text(window.config.BlogUser);
        }

        // 添加菜单列表
        if (menuListArr.length > 0) {
            $.each(menuListArr, function (i) {
                let tab = menuListArr[i];
                let li = $("<li></li>"),
                    a  = $("<a></a>");
                if (tab.href && tab.href != '') {
                    a.attr("href", tab.href);
                    a.attr("target", tab.target);
                } else {
                    a.attr("href", "javascript:;");
                    a.attr("target", "_self");    
                }
                if (tab.class && tab.class != '') {
                    a.addClass(tab.class);
                }
                a.text(tab.name);
                li.append(a);
                menuList.append(li);            
            });
        }

        // 添加菜单链接
        if (menuLinkArr.length > 0) {
            $.each(menuLinkArr, function (i) {
                let link = menuLinkArr[i];
                let a    = $("<a></a>"),
                    span = $("<span></span>").addClass('iconfont');
                if (link.url && link.url != '') {
                    a.attr("href", link.url);
                    a.attr("target", "_blank");
                } else {
                    a.attr("href", "javascript:;");
                    a.attr("target", "_self");
                }
                span.addClass(link.icon);
                a.append(span);
                menuLink.append(a);             
            });
        }

        // 清除定时器
        if (
            menuListArr.length == menuList.find('li').length 
            && menuLinkArr.length == menuLink.find('a').length
        ) {
            script.clearIntervalTimer(timers.setMenuDataTimer);
        }

    };

    /**
     * 添加搜索
     */
    this.setSearch = function() {
        if ($('.search-window').length > 0) {
            require(['Search']);      
        }
        script.clearIntervalTimer(timers.setSearchTimer);
    }

    /**
     * 添加页脚
     */
    this.addFooter = function() {
        const footer = $('#footer');

        footer.append('<div><span class="face">ღゝ◡╹)ノ♡</span></div>');

        if (window.config.BottomText.left || window.config.BottomText.right)
            footer.append('<div>【' + window.config.BottomText.left + '<span><i class="iconfont icon-' + window.config.BottomText.icon + '"></i></span>' + window.config.BottomText.right + '】</div>');

        if (window.config.ThemeInfo) footer.append('<div class="theme-info">Live For Code</div>');

        switch (parseInt(window.config.FooterStyle)) {
            case 1:
                init_v1();
                break;

            case 2:
            default:
                init_v2();
                break;
        }

        function init_v1() {
            footer.prepend('<div class="footer-image"></div>').addClass('footer-v1');
        }

        function init_v2() {
            let backFooter = '<footer>' +
                '<footer-background>' +
                '<figure class="clouds"></figure>' +
                '<figure class="background"></figure>' +
                '<figure class="foreground"></figure>' +
                '</footer-background>' +
                '</footer>';
            footer.prepend(backFooter);
        }

    };

    /**
     * 设置背景动画
     */
    this.setBackAnimation = function() {
        if (window.config.BackAnimationRendered) {
            if (window.config.IEBrowserBackAnimationRendered || !tools.isIE()) {
                require(['RibbonsEffect']);
            }
        }
    }

    /**
     * 图片懒加载（友情链接）
     */
    this.imageLazyLoad = function() {

        if ($(".friends").length > 0) {
            require(['LazyLoad'], function() {
                $(".friend-card .avatar").lazyload();
            });
        }
        script.clearIntervalTimer(timers.setLazyLoadTimer);
    }

//=================== 逻辑处理：主页处理

    /**
     * 主页初始化
     */
    this.homeInit = function() {

        // 设置主页图片
        let homeHeaderImage = window.config.HomeHeaderImage, backImage;

        homeHeaderImage.length > 0 ?
            (homeHeaderImage.length > 1 ? backImage = homeHeaderImage[tools.randomNum(0, homeHeaderImage.length - 1)] : backImage = homeHeaderImage[0])
            : backImage = "";
        $('.header').css({
            'background': '#222 url(' + backImage + ')  center center no-repeat',
            'background-size': 'cover'
        });

        // 头图点击滚动到内容位置
        $('.scroll-down').click(function () {
            let endScroll = $('#container').offset().top + 10; 
            tools.actScroll(endScroll, 1000);
        });

        // 设置右下角菜单
        timers.setWrapRightTimer = window.setInterval( script.addWrapRight, 1000 );

        script.setHitokoto();
        script.scrollMonitor();
        script.setDomHomePosition();

        if (window.config.HomeHeaderAnimationRendered) {
            require(['CircleMagic'], function() {
                $('.header').circleMagic(window.config.HomeHeaderAnimation);
            });
        }

        if ($('.title').length == 0) {
            // 初始化评论列表（用于获取文章阅读数以及评论数）
            timers.setCommentsTimer  = window.setInterval( script.initComments, 1000 );
        }
    };

    /**
     * 设置主页标语
     */
    this.setHitokoto = function() {

        if (window.config.HomeBannerText !== "") {
            $('#hitokoto').text(window.config.HomeBannerText).css('display', '-webkit-box');
            script.setDomHomePosition();
            return true;
        }

        let headerTextList = [
            '每一个不曾起舞的日子，都是对生命的辜负。',
            '公主死去了，屠龙的少年还在燃烧',
            '我们听过无数的道理，却仍旧过不好这一生。',
            '生如夏花之绚烂，死如秋叶之静美。',
            '但凡不能杀死你的，最终都会使你更强大。',
            '好看的皮囊千篇一律，有趣的灵魂万里挑一。',
            '青春是一本太仓促的书，我们含着泪，一读再读。',
            '教育就是当一个人把在学校所学全部忘光之后剩下的东西。',
            '孤独不是一种脾性，而是一种无奈。',
            '有时候你以为天要塌下来了，其实是自己站歪了。',
            '温柔正确的人总是难以生存，因为这世界既不温柔，也不正确。',
            '死并非生的对立面，而作为生的一部分永存。',
            '不要努力成为一个成功者，要努力成为一个有价值的人。',
            '不要因为走得太远，忘了我们为什么出发。',
            '你的问题主要在于读书不多而想得太多。',
            '岁月不饶人，我亦未曾饶过岁月。',
            '当你凝视深渊时，深渊也在凝视着你。',
            '有的人25岁就死了，只是到75岁才埋葬。'
        ];

        settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://v2.jinrishici.com/one.json",
            "method": "GET"
        };

        $.ajax(settings).done(function (response) {
            if (response && response.status === "success") {
                $('#hitokoto').text(response.data.content).show();
                $('#hitokotoAuthor').text('《' + response.data.origin.title + '》 - ' + response.data.origin.dynasty + ' - ' + response.data.origin.author).show();
            } else {
                let listIndex = tools.randomNum(0, headerTextList.length - 1);
                $('#hitokoto').text(headerTextList[listIndex]).show();
            }
            script.setDomHomePosition();
            return false;
        });
    };

    /**
     * 添加主页右下角菜单
     */
    this.addWrapRight = function() {
        const wrapRight = $('.wrap-right');
        if (wrapRight.length > 0) {

            // 添加上下滚动
            let upDownHtml = '<div class="up-down" data="up"><span>返回顶部</span><div><i class="iconfont icon-top"></i></div></div>';
            wrapRight.prepend(upDownHtml);
            script.wrapRightMous('.up-down', '.up-down span');

            // 添加关注
            let attHtml = '<div class="attention" switch="false"><span>关注</span><i class="iconfont icon-like"></i></div>';
            wrapRight.prepend(attHtml);

            script.wrapRightMous('.attention', '.attention span');
            // 触发一次滚动处理，防止未有对象，初始化失败
            script.scrollMonitor(); 
        }
        script.clearIntervalTimer(timers.setWrapRightTimer);
    };

//=================== 逻辑处理：非主页处理

    /**
     * 非主页初始化
     */
    this.otherInit = function() {

        // 设置文章样式
        $('.inner').css('max-width', '100vw');

        if ($('.Chinese').length == 0) {
            // 设置文章信息
            timers.setArticleHeaderCategoryTimer = window.setInterval( script.setArticleHeaderCategory, 1000 );
            timers.setArticleHeaderTagTimer      = window.setInterval( script.setArticleHeaderTag, 1000 );
        }

        if ($('.Chinese').length > 0) {
            script.setOtherHitokoto();
        }

        script.setDomHomePosition();
        script.setOtherHeaderImage();

        script.setLightBox();

        // 设置代码样式
        script.setCodeStyle();
        
        if ($('.Chinese').length == 0) {
            // 初始化文章目录位置
            timers.setTocTimer = window.setInterval( script.initToc, 1000 );
        }

        // 初始化赞赏模块
        timers.setDonateTimer = window.setInterval( script.initDonate, 1000 );

        // 初始化评论列表
        timers.setCommentsTimer  = window.setInterval( script.initComments, 1000 );

        // 设置右下角菜单
        timers.setWrapRightTimer = window.setInterval( script.addWrapRight, 1000 );

    };

    /**
     * 其他页面标语
     */
    this.setOtherHitokoto = function() {

        if (window.config.OtherBannerText !== "") {
            $('.Chinese').text(window.config.OtherBannerText).css('display', '-webkit-box');
            script.setDomHomePosition();
            return true;
        }

        let headerTextList = [
            '每一个不曾起舞的日子，都是对生命的辜负。',
            '公主死去了，屠龙的少年还在燃烧',
            '我们听过无数的道理，却仍旧过不好这一生。',
            '生如夏花之绚烂，死如秋叶之静美。',
            '但凡不能杀死你的，最终都会使你更强大。',
            '好看的皮囊千篇一律，有趣的灵魂万里挑一。',
            '青春是一本太仓促的书，我们含着泪，一读再读。',
            '教育就是当一个人把在学校所学全部忘光之后剩下的东西。',
            '孤独不是一种脾性，而是一种无奈。',
            '有时候你以为天要塌下来了，其实是自己站歪了。',
            '温柔正确的人总是难以生存，因为这世界既不温柔，也不正确。',
            '死并非生的对立面，而作为生的一部分永存。',
            '不要努力成为一个成功者，要努力成为一个有价值的人。',
            '不要因为走得太远，忘了我们为什么出发。',
            '你的问题主要在于读书不多而想得太多。',
            '岁月不饶人，我亦未曾饶过岁月。',
            '当你凝视深渊时，深渊也在凝视着你。',
            '有的人25岁就死了，只是到75岁才埋葬'
        ];

        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://sentence.iciba.com/index.php?c=dailysentence&m=getdetail&title=" + tools.getNowFormatDate(),
            "method": "POST",
            "dataType": 'jsonp',
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
            }
        };

        $.ajax(settings).done(function (response) {
            if (response.errno === 0) {
                $('.Chinese').text(response.note).show();
                $('.English').text(response.content).show();
            } else {
                let listIndex = tools.randomNum(0, headerTextList.length - 1);
                $('.Chinese').text(headerTextList[listIndex]).show();
            }
            script.setDomHomePosition();
            return false;
        });
    };

    /**
     * 设置文章信息-分类
     */
    this.setArticleHeaderCategory = function () {
        let categories = $('.category').find('a');
        if (categories.length > 0) {
            $.each(categories, function (i) {
                let category = $(categories[i]);
                $('.header-subinfo').append('<span class="category-color">' + (category.text()) + '</span>');
            });
        }
        script.clearIntervalTimer(timers.setArticleHeaderCategoryTimer);
    };

    /**
     * 设置文章信息-标签
     */
    this.setArticleHeaderTag = function () {
        let tags = $('.tag').find('a');
        if (tags.length > 0) {
            $.each(tags, function (i) {
                let tag = $(tags[i]);
                $('.header-subinfo').append('<span class="tag-color">' + (tag.text()) + '</span>');
            });
        }
        script.clearIntervalTimer(timers.setArticleHeaderTagTimer);
    };

    /**
     * 初始化文章目录插件位置
     */
    this.initToc = function() {
        if (window.config.Tocbot.switch && $('.toc').length > 0) {
            require(['Tocbot'], function() {
                tocbot.init({
                    tocSelector           : window.config.Tocbot.tocSelector,
                    contentSelector       : window.config.Tocbot.contentSelector,
                    headingSelector       : window.config.Tocbot.headingSelector,
                    headingsOffset        : window.config.Tocbot.headingsOffset,
                    scrollSmooth          : window.config.Tocbot.scrollSmooth,
                    scrollSmoothOffset    : window.config.Tocbot.scrollSmoothOffset,
                });
            });
            
            script.resizeMonitor();
        }

        script.clearIntervalTimer(timers.setTocTimer);
    };

    /**
     * 设置目录状态（显示或者隐藏）
     */
    this.setTocStatus = function() {
        if (window.config.Tocbot.switch && $('.toc').length > 0) {
            let bodyWidth       = parseFloat(document.body.clientWidth),
                docScroll       = $(document).scrollTop(),
                suffixEndScroll = $('.suffix-end').offset().top;
                
            if (docScroll < suffixEndScroll && bodyWidth > 1360) {
                $('.toc').fadeIn(300);
            } else {
                $('.toc').fadeOut(300);
            }
        }
    }

    /**
     * 设置目录位置
     */
    this.setTocPosition = function() {
        if(window.config.Tocbot.switch && $('.toc').length > 0) {
            let bodyWidth      = parseFloat(document.body.clientWidth),
                headerHeight   = $('.header').outerHeight(),
                containerWidth = $('#container').outerWidth(), 
                tocWidth       = $('.toc').outerWidth(),
                bothWidth      = (bodyWidth - containerWidth) / 2,
                right          = bothWidth - tocWidth;

            $('.toc').css('top', headerHeight + 'px');
            $('.toc').css('right', (right > 0 ? right : 0) + 'px');
        }
    }
 
    /**
     * 设置目录Fixed定位（相对于浏览器窗口进行定位）
     */
    this.setTocPositionFixed =  function() {
        if (window.config.Tocbot.switch && $('.toc').length > 0) {

            let docScroll = $(document).scrollTop(),
                header    = $(".header").outerHeight();
            if (docScroll > header) {
                $(window.config.Tocbot.positionFixedSelector).addClass(window.config.Tocbot.positionFixedClass);
            } else {
                $(window.config.Tocbot.positionFixedSelector).removeClass(window.config.Tocbot.positionFixedClass);
            }
        }
    }

    /**
     * 设置非主页头图
     */
    this.setOtherHeaderImage = function() {

        let articleHeaderImage = window.config.ArticleHeaderImage,
            backImage;

        articleHeaderImage.length > 0 ?
            (articleHeaderImage.length > 1 ? backImage = articleHeaderImage[tools.randomNum(0, articleHeaderImage.length - 1)] : backImage = articleHeaderImage[0])
            : backImage = "";


        $('.header').css({
            'height': '40vh',
            'background': '#222 url(' + backImage + ')  center center no-repeat',
            'background-size': 'cover'
        });

        $('#container').css('margin-top', '40vh');
 
        if (window.config.ArticleHeaderAnimationRendered) {

            require(['TweenMax', 'Tween'], function() {

                $('#articleHeaderCanvas').css({
                    'width': '100%',
                    'height': '100%',
                    'top': '0',
                    'bottom': '0',
                    'left': '0',
                    'right': '0',
                    'margin': 'auto'
                });
                initCanvas('articleHeaderCanvas');
                start();
            });
        }   
    };

    /**
     * 设置图片灯箱效果
     */
    this.setLightBox = function () {

        // 设置图片点击查看
        const articleBody = $('.article-body'), 
              images      = $('.article-body > p > img');

        if (articleBody.length > 0 && images.length > 0) {
            $.each(images, function (i) {
                let image = $(images[i]);
                image.parent('p').css('text-align', 'center');
                image.wrap('<a data-fancybox href="' + image.attr('src') + '"></a>');
            });
        }

        require(['FancyBox']);
    };

    /**
     * 设置代码
     */
    this.setCodeStyle = function () {
        let codeBlock = $('.highlight'),
            pre       = $('.highlight .code pre');

        loadCodeStyle();
        setCopyBtn();

        // 计算代码块的宽度
        function loadCodeStyle() {
            if (codeBlock.length > 0) {             
                codeBlock.each(function (i, block) {
                    let lineNumWidth = $(block).find(".gutter").width();
                    $(block).find(".code").css("width", "calc(100% - " + ( lineNumWidth ? lineNumWidth : 0 ) + "px)");
                });
            }
        }

        // 设置代码复制
        function setCopyBtn() {
            require(['Clipboard'], function (Clipboard) {
                pre.each(function (i) {
                    window.Clipboard = Clipboard;
                    let object = $(this), id = tools.randomString(8);
                    object.wrap('<code-box id="' + id + '" style="position: relative; display: block;"></code-box>');
                    object.attr('code-id', id);

                    let html = '<button code-id="' + id + '" type="button" class="clipboard" data-clipboard-action="copy" data-clipboard-target="pre[code-id=\'' + id + '\']" aria-label="复制代码"><i class="iconfont icon-copy"></i></button>';

                    $('#'+id).prepend(html);
                });

                $('code-box button').click(function () {
                    $(this).find('i').removeClass('icon-copy').addClass('icon-check');
                    setTimeout("$('code-box button[code-id=" + $(this).attr('code-id') + "] i').removeClass('icon-check').addClass('icon-copy')", 1500);
                });

                $('code-box').on({
                    mouseover : function(){
                        $(this).find('button').css({
                            opacity    : 1,
                            visibility : 'visible'
                        });
                    },
                    mouseout : function(){
                        $(this).find('button').css({
                            opacity    : 0,
                            visibility : 'hidden'
                        });
                    }
                });

                new Clipboard('.clipboard');
            });
        }
    };

    /**
     * 初始化赞赏模块
     */
    this.initDonate = function() {

        if($('.donate').length > 0) {
            require(['Donate']);
        }
        script.clearIntervalTimer(timers.setDonateTimer);
    }

    /**
     * 初始化评论列表
     */
    this.initComments = function() {
        if (window.config.Valine.switch) {
            require(['LeanCloud', 'Valine'], function(LeanCloud, Valine) {
                window.AV    = LeanCloud;
                let metaStr  = window.config.Valine.meta;
                let metaArr  = metaStr.split(',');
                let fieldStr = window.config.Valine.requiredFields;
                let fieldArr = fieldStr.split(',');
                let valine   = new Valine();
    
                valine.init({
                    el             : window.config.Valine.el,
                    appId          : window.config.Valine.appId,
                    appKey         : window.config.Valine.appKey,
                    placeholder    : window.config.Valine.placeholder,
                    path           : window.location.pathname,
                    avatar         : window.config.Valine.avatar,
                    meta           : metaArr,
                    requiredFields : fieldArr,
                    pageSize       : window.config.Valine.pageSize,
                    lang           : window.config.Valine.lang,
                    visitor        : window.config.Valine.visitor,
                    enableQQ       : window.config.Valine.enableQQ
                });
            })
        }

        script.clearIntervalTimer(timers.setCommentsTimer);    
    }

}