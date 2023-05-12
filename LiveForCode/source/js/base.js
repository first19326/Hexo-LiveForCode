function Base() {

    const script              = this,
          tools               = new websiteTools,
          progressBar         = new ToProgress(window.config.ProgressBar, '.progressbar-top'),
          rootElement         = document.documentElement,
          modeAttributeName   = 'color-scheme',
          modeLocalStorageKey = 'color-scheme',
          validModeKeys       = { light: true, dark: true },
          invertModeObject    = { light: 'dark', dark: 'light' };
    
    const modeListeners = {
        light: (mediaQueryList) => {
            if (mediaQueryList.matches) {
                let localMode = localStorage.getItem(modeLocalStorageKey);
                if (localMode == null) {
                    // 触发一次动画效果
                    script.toggleModeAnimation('light');
                }
                script.setWebsiteFavicon(window.config.WebsiteFavicon.light);
            }
        },
        dark: (mediaQueryList) => {
            if (mediaQueryList.matches) {
                let localMode = localStorage.getItem(modeLocalStorageKey);
                if (localMode == null) {
                    // 触发一次动画效果
                    script.toggleModeAnimation('dark');
                }
                script.setWebsiteFavicon(window.config.WebsiteFavicon.dark);
            }
        }
    }
    
    let temScroll      = 0,                // 上一次页面滚动位置
        timers         = {                 // 定时器
            setSearchTimer         : null, // 搜索设置定时器ID
            setTocTimer            : null, // 文章目录设置定时器ID
            setLazyLoadTimer       : null, // 图片懒加载定时器ID
            setDonateTimer         : null, // 赞赏模块定时器ID
            setCommentsTimer       : null, // 评论框设置定时器ID
            setWrapRightEventTimer : null, // 主页右下角菜单事件设置定时器ID
            setArchiveMotionTimer  : null, // 归档页面加载动画定时器ID
        };
    
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
        ($('.header').length > 0) ? script.otherInit() : script.homeInit();

        // 浅色/深色模式样式初始化
        script.initModeStyle();
    };

    /**
     * Loading后初始化
     */
    this.loadingAfterInit = function () {
        // 触发一次滚动事件, 设置菜单按钮样式
        script.scrollMonitor();

        // 设置右下角菜单事件
        timers.setWrapRightEventTimer = window.setInterval( script.setWrapRightEvent, 1000 );

        // 添加页脚
        script.addFooter();

        // 背景动画
        script.setBackAnimation();
        
        // 设置鼠标动画
        script.setMouseAnimation();

        // 初始化网站图标
        script.initWebsiteFavicon();

        // 滚动监听
        $(window).scroll( function() { script.scrollMonitor(); });

        // 窗口变化监听
        $(window).resize( function() { script.resizeMonitor(); });

        // 初始化样式
        script.initStyle();

        // HTML5-TITLE
        script.htmlTitle();

        // 归档页面动画
        timers.setArchiveMotionTimer = window.setInterval( script.setArchiveMotion, 1000 );

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

        let homeScroll     = $('#container').offset().top,
            docScroll      = $(document).scrollTop(),
            scrollPercent  = tools.getScrollPercent(),
            openButton     = $('.menu-button-open');         
            
        // 设置滚动条
        progressBar.setProgress(scrollPercent);

        // 设置上下滚动
        if (temScroll < docScroll) { 
            // 向下滚动，滚过头图
            if (homeScroll <= docScroll) { 

                // 设置菜单按钮
                if (!openButton.hasClass('menu-button-scroll')) {
                    openButton.addClass('menu-button-scroll');
                    openButton.text('');
                }
            }
        } else { 
            // 向上滚动，滚入头图
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

        temScroll = docScroll;
    };

    /**
     * 屏幕大小变化处理
     */
    this.resizeMonitor = function() {

        // 设置目录位置
        script.setTocPosition();
        // 设置目录状态
        script.setTocStatus();
    };

    /**
     * 初始化样式
     */
    this.initStyle = function(){

        if (window.ActiveXObject || 'ActiveXObject' in window) { 
            // IE Browser
            // Menu Style
            $('.menu').css('background', 'rgba(0, 0, 0, 1)');
            $('.morph-shape').css('position', 'absolute');
            $('.morph-shape').css('fill', 'rgba(0, 0, 0, 1)');
        } else {
            // Other Browser
            // Scroll Down Style
            $('.scroll-down').css('font-size', '34px');
            $('.scroll-down-icon').css('position', 'relative');
        }
    }

    /**
     * 设置网站图标
     */
    this.setWebsiteFavicon = function(websiteFavicon) {
        let favicon = $('link[rel="shortcut icon"]');
        if (favicon.length) {
            favicon.attr('href', websiteFavicon);
        } else {
            let link  = document.createElement('link');
            link.type = 'image/x-icon';
            link.rel  = 'shortcut icon';
            link.href = websiteFavicon;
            document.getElementsByTagName('head')[0].appendChild(link);
        }
    }

    /**
     * 从 Media 中获取浅色/深色模式
     */
    this.getModeFromMedia =  function() {
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    /**
     * 从 LocalStorage 中获取浅色/深色模式
     */
    this.getModeFromLocal = function() {
        return localStorage.getItem(modeLocalStorageKey);
    }

    /**
     * 转换当前的 Mode 值
     */ 
    this.invertMode = function() {
        let mode = script.getModeFromLocal();
        if (validModeKeys[mode]) {
            mode = invertModeObject[mode];
        } else if (mode === null) {
            mode = invertModeObject[script.getModeFromMedia()];
        }
        localStorage.setItem(modeLocalStorageKey, mode);
        return mode;
    }

    /**
     * 应用浅色/深色模式设置
     */ 
    this.applyModeSetting = (invertMode) => {
        let mode = invertMode || script.getModeFromLocal();
        let mediaMode = script.getModeFromMedia();
        if (mode === mediaMode) {
            script.resetModeSetting();
        } else if (validModeKeys[mode]) {
            rootElement.setAttribute(modeAttributeName, mode);
        } else {
            script.resetModeSetting();
            return mediaMode;
        }
        return mode;
    }

    /**
     * 重置浅色/深色模式设置
     */ 
    this.resetModeSetting = function() {
        rootElement.removeAttribute(modeAttributeName);
        localStorage.removeItem(modeLocalStorageKey);
    }

    /**
     * 初始化网站图标 （根据从 Media 中获取浅色/深色模式值）
     */
    this.initWebsiteFavicon = function() {
        let mediaMode = script.getModeFromMedia();
        let websiteFavicon = window.config.WebsiteFavicon.light;
        if (mediaMode == 'dark') {
            websiteFavicon = window.config.WebsiteFavicon.dark;
        }
        script.setWebsiteFavicon(websiteFavicon);
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

        if (typeof document.hidden !== 'undefined') {
            hidden = 'hidden';
            visibilityChange = 'visibilitychange';
        } else if (typeof document.mozHidden !== 'undefined') { 
            // Firefox up to v17
            hidden = 'mozHidden';
            visibilityChange = 'mozvisibilitychange';
        } else if (typeof document.webkitHidden !== 'undefined') { 
            // Chrome up to v32, Android up to v4.4, Blackberry up to v10
            hidden = 'webkitHidden';
            visibilityChange = 'webkitvisibilitychange';
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
        if (typeof document.addEventListener !== 'undefined' || typeof document[hidden] !== 'undefined') {
            document.addEventListener(visibilityChange, handleVisibilityChange, false);
        }
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
                    $('#animationSwitch span').last().text('打开页面特效');
                    $(this).attr('data', 'on');
                } else {
                    $('body').find('canvas').show();
                    $('#animationSwitch span').first().rotate({animateTo:360});
                    $('#animationSwitch span').last().text('关闭页面特效');
                    $(this).attr('data', 'off');
                }
            });
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
     * 设置右下角菜单事件
     */
    this.setWrapRightEvent = function() {
        const wrapRight = $('.wrap-right');

        if (wrapRight.length > 0) {

            // 关注
            $('.wrap-right .favorites').on('click', function() {
                if ($(this).attr('switch') == 'false') {
                    $(this).attr('switch', 'true');
                    $(this).find('.iconfont').removeClass('icon-favorites').addClass('icon-favorites-fill');
                    $(this).find('.icontext').text('已关注');
                } else {
                    $(this).attr('switch', 'false');
                    $(this).find('.iconfont').removeClass('icon-favorites-fill').addClass('icon-favorites');
                    $(this).find('.icontext').text('关注');
                }
            });

            // 浅色/深色模式切换
            $('.wrap-right .mode').on('click', function() {
                let invertMode = script.invertMode();
                script.toggleModeAnimation(invertMode);
                script.applyModeSetting(invertMode);
            });

            window.matchMedia('(prefers-color-scheme: light)').addListener(modeListeners.light);
            window.matchMedia('(prefers-color-scheme: dark)').addListener(modeListeners.dark);

            // 跳至底部
            $('.wrap-right .bottom').on('click', function() {
                // 每次触发事件都重新获取数据信息，防止屏幕尺寸调整引起功能执行不正常
                let docHeight    = $(document).height();
                let windowHeight = $(window).height();
                $('body').velocity('scroll', { offset: docHeight - windowHeight, mobileHA: false });
            });
            
            // 设置
            $('.wrap-right .set').on('click', function(e) {
                $('.wrap-right-hide').hasClass('show') ? $('.wrap-right-hide').removeClass('show') : $('.wrap-right-hide').addClass('show');
                if ($(this).hasClass('show')) {
                    $('.wrap-right-hide').addClass('status');
                    setTimeout(() => {
                        $('.wrap-right-hide').removeClass('status');
                    }, 300);
                }
                $(this).hasClass('show') ? $(this).removeClass('show') : $(this).addClass('show');
            });

            // 返回顶部
            $('.wrap-right .top').on('click', function() {
                $('body').velocity('scroll', { mobileHA: false });
            });
        }
        
        script.clearIntervalTimer(timers.setWrapRightEventTimer);
    };

    /**
     * 初始化浅色/深色模式样式
     */
    this.initModeStyle = function() {
        let mode = script.applyModeSetting();
        if (mode == 'light') {
            $('.light').show(), $('.dark').hide();
        } else {
            $('.light').hide(), $('.dark').show();
        }
    }

    /**
     * 切换浅色/深色模式动画
     */
    this.toggleModeAnimation = function(mode) {
        let show = $('.light'), hide = $('.dark');
        if (mode == 'dark') {
            show = $('.dark'), hide = $('.light');
        }
        hide.addClass('hide');
        setTimeout(function() {
            hide.removeClass('hide').hide();
            show.addClass('show').show();
            setTimeout(function() {
                show.removeClass('show');
            }, 300);
        }, 300);
    }

    /**
     * 添加页脚
     */
    this.addFooter = function() {
        
        const footer = $('#footer');

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
     * 图片懒加载
     */
    this.imageLazyLoad = function() {

        // 文章详情图片懒加载
        // Markdown 文章书写格式：<p><img src='/image/website/lazyload.svg' data-original=''></p>
        if ($('.article-body').length > 0) {
            require(['LazyLoad'], function() {
                $('.article-body img').lazyload();
            });
        }
        script.clearIntervalTimer(timers.setLazyLoadTimer);
    }

    /**
     * 设置鼠标动画
     */
    this.setMouseAnimation = function() {

        if (window.config.Mouse.enable) {
            require(['Gsap'], function() {
                require(['Mouse']);
            });
        }
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
            : backImage = '';
        $('#header').css({
            'background': '#222 url(' + backImage + ')  center center no-repeat',
            'background-size': 'cover'
        });

        // 头图点击滚动到内容位置
        $('.scroll-down').click(function () {
            let endScroll = $('#container').offset().top; 
            $('body').velocity('scroll', { offset: endScroll, mobileHA: false });
        });

        script.setHitokoto();

        if (window.config.HomeHeaderAnimationRendered) {
            require(['CircleMagic'], function() {
                $('#header').circleMagic(window.config.HomeHeaderAnimation);
            });
        }

        if ($('#count').length == 1 && window.config.Comment.type != "Waline") {
            // 初始化评论列表（用于获取文章阅读数以及评论数）
            timers.setCommentsTimer  = window.setInterval( script.initComments, 1000 );
        }
    };

    /**
     * 设置主页标语
     */
    this.setHitokoto = function() {

        if (window.config.HomeBannerText !== '') {
            $('#hitokoto').text(window.config.HomeBannerText).css('display', '-webkit-box');
            return true;
        }

        let settings = {
            'async': true,
            'crossDomain': true,
            'url': 'https://v2.jinrishici.com/one.json',
            'method': 'GET'
        };

        $.ajax(settings).done(function (response) {
            if (response && response.status === 'success') {
                $('#hitokoto').text(response.data.content).show();
                $('#hitokotoAuthor').text('《' + response.data.origin.title + '》 - ' + response.data.origin.dynasty + ' - ' + response.data.origin.author).show();
            } else {
                let listIndex = tools.randomNum(0, headerTextList.length - 1);
                $('#hitokoto').text(headerTextList[listIndex]).show();
            }
            return false;
        });
    };

//=================== 逻辑处理：非主页处理

    /**
     * 非主页初始化
     */
    this.otherInit = function() {

        // 设置文章样式
        $('.inner').css('max-width', '100vw');

        script.setOtherHitokoto();

        script.setOtherHeaderImage();

        script.setLightBox();

        // 设置代码样式
        script.setCodeStyle();

        // 设置复选框样式
        script.setCheckBoxStyle();

        // 设置表格样式
        script.setTableStyle();
        
        // 初始化文章目录位置
        timers.setTocTimer = window.setInterval( script.initToc, 1000 );

        // 初始化赞赏模块
        timers.setDonateTimer = window.setInterval( script.initDonate, 1000 );

        // 初始化评论列表
        timers.setCommentsTimer  = window.setInterval( script.initComments, 1000 );
    };

    /**
     * 其他页面标语
     */
    this.setOtherHitokoto = function() {

        if (window.config.OtherBannerText !== '') {
            $('.Chinese').text(window.config.OtherBannerText).css('display', '-webkit-box');
            return true;
        }

        let settings = {
            'async': true,
            'crossDomain': true,
            'url': 'https://sentence.iciba.com/index.php?c=dailysentence&m=getdetail&title=' + tools.getNowFormatDate(),
            'method': 'POST',
            'dataType': 'jsonp',
            'headers': {
                'content-type': 'application/x-www-form-urlencoded',
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
            return false;
        });
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
                endScroll = $('.end').offset().top;
                
            if (docScroll < endScroll && bodyWidth > 1360) {
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
                headerHeight   = $('#header').outerHeight(),
                containerWidth = $('#container').outerWidth(), 
                tocWidth       = $('.toc').outerWidth(),
                bothWidth      = (bodyWidth - containerWidth) / 2,
                right          = bothWidth - tocWidth + 2;

            $('.toc').css('top', headerHeight + 'px');
            $('.toc').css('right', (right > 0 ? right : 0) + 'px');
        }
    }
 
    /**
     * 设置目录 Fixed 定位（相对于浏览器窗口进行定位）
     */
    this.setTocPositionFixed =  function() {
        if (window.config.Tocbot.switch && $('.toc').length > 0) {

            let docScroll = $(document).scrollTop(),
                header    = $('#header').outerHeight();
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
            : backImage = '';


        $('#header').css({
            'background': '#222 url(' + backImage + ')  center center no-repeat',
            'background-size': 'cover'
        });
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
                    let lineNumWidth = $(block).find('.gutter').outerWidth() + 1;
                    $(block).find('.code').css('width', 'calc(100% - ' + ( lineNumWidth ? lineNumWidth : 0 ) + 'px)');
                });
            }
        }

        // 设置代码复制
        function setCopyBtn() {
            require(['Clipboard'], function (Clipboard) {
                pre.each(function (i) {
                    let object = $(this), id = tools.randomString(8);
                    object.wrap('<code-box id="' + id + '" style="position: relative; display: block;"></code-box>');
                    object.attr('code-id', id);

                    let html = '<button code-id="' + id + '" type="button" class="clipboard" data-clipboard-action="copy" data-clipboard-target="pre[code-id=\'' + id + '\']" aria-label="复制代码"><i class="iconfont icon-copy"></i></button>';

                    $('#'+id).prepend(html);
                });

                $('code-box button').click(function () {
                    $(this).find('i').removeClass('icon-copy').addClass('icon-check');
                    setTimeout('$("code-box button[code-id=' + $(this).attr("code-id") + '] i").removeClass("icon-check").addClass("icon-copy")', 1500);
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

                let clipboard = new Clipboard('.clipboard');
                clipboard.on('success', function (e) {
                    // 清除选中样式
                    e.clearSelection();
                });
            });
        }
    };

    /**
     * 设置复选框样式
     */
    this.setCheckBoxStyle = function() {

        // 移除复选框的 disabled 属性，避免透明度样式变化
        $('input[type="checkbox"]').removeAttr('disabled');
    }

    /**
     * 设置表格样式
     */
    this.setTableStyle = function() {
        let tables = $('.article-body table');
        $.each(tables, function() {
            if ($(this).parent('figure').length == 0) {
                $(this).wrap('<div class="table"></div>');
            }
        });
    }

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
        if (window.config.Comment.type != "Waline") {
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
                    serverURLs     : window.config.Valine.serverURLs,
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
            });
        }

        script.clearIntervalTimer(timers.setCommentsTimer);    
    }

    /**
     * 设置归档页面加载动画
     */
    this.setArchiveMotion = function() {
        if ($('.archive-move-on').length > 0) {

            // 归档年份
            $('.archive-year').velocity('transition.slideRightIn', { 
                stagger: 100, 
                drag: true 
            });

            // 归档文章信息
            $('.article-header').velocity('transition.slideDownIn', { 
                stagger: 100,  // 以毫秒为单位指定交错选项，以按目标量连续延迟集合中每个元素的动画
                drag: true,    // 将拖动选项设置为 true 以连续增加集合中每个元素的动画持续时间
                delay: 1000    // 动画延迟时间
            });
        }

        script.clearIntervalTimer(timers.setArchiveMotionTimer);    
    }
}