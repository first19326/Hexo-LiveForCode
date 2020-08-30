{
    var sidebar = 
        '<div class="menu-wrap optiscroll" style="display:none">' + 
        '   <nav class="menu">' +
        '       <div class="menu-introduce">' +
        '           <div class="introduce-avatar"></div>' +
        '           <div class="introduce-info">' +
        '               <div class="introduce-user"><span></span></div>' +       
        '           </div>' +
        '       </div>' +
        '       <div class="menu-list">' +
        '           <ul></ul>' +
        '       </div>' +
        '       <div class="menu-link"></div>' +
        '   </nav>' +
        '   <button class="menu-button-close">Close Menu</button>' +
        '   <div class="morph-shape" id="morph-shape" data-morph-open="M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z">' +
        '       <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none">' +
        '           <path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z"/>' +
        '       </svg>' +
        '   </div>' +
        '</div>' +
        '<button class="menu-button-open">MENU</button>' +
        '<div class="content-wrap"></div>';

    window.defaultConfig = {
        GitHubUserName: 'first19326',
        GitHubRepositories: 'Hexo-LiveForCode',
        BlogUser: "LiveForCode",
        BlogAvatar: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/image/sidebar/avatar.jpg",
        BlogStartDate: "2020-01-01",
        WebsiteTitleBlur: "(◍´꒳`◍) Hi, Live For Code",
        WebsiteTitleBlurTimeOut: 500,
        WebsiteTitleFocus: "(*´∇｀*) 欢迎回来!",
        WebsiteTitleFocusTimeOut: 1000,
        WebsiteFavicon: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/image/website/logo.png",
        ProgressBar: {
            id: 'topProgressBar',
            color: '#77B6FF',
            height: '2px',
            duration: 0.2
        },
        Loading: {
            rebound: {
                tension: 16,
                friction: 5
            },
            spinner: {
                id: 'spinner',
                radius: 90,
                sides: 3,
                depth: 4,
                colors: {
                    background: '#F0F0F0',
                    stroke: '#272633',
                    base: null,
                    child: '#272633'
                },
                alwaysForward: true,
                restAt: 0.5,
                renderBase: false
            }
        },
        HomeHeaderAnimationRendered: true,
        HomeHeaderAnimation: {
            radius: 15,
            density: 0.2,
            color: 'rgba(255, 255, 255, .2)',
            clearOffset: 0.3
        },
        ArticleHeaderAnimationRendered: false,
        ArticleHeaderAnimatiAon: {
            triW: 14,
            triH: 20,
            neighbours: ["side", "top", "bottom"],
            speedTrailAppear: .1,
            speedTrailDisappear: .1,
            speedTriOpen: 1,
            trailMaxLength: 30,
            trailIntervalCreation: 100,
            delayBeforeDisappear: 2,
            colors: [
                '#96EDA6', '#5BC6A9',
                '#38668C', '#374D84',
                '#BED5CB', '#62ADC6',
                '#8EE5DE', '#304E7B'
            ]
        },
        BackAnimationRendered: true,
        IEBrowserBackAnimationRendered: false,
        BackAnimation: {
            colorSaturation: "60%",
            colorBrightness: "50%",
            colorAlpha: 0.5,
            colorCycleSpeed: 5,
            verticalPosition: "random",
            horizontalSpeed: 200,
            ribbonCount: 3,
            strokeSize: 0,
            parallaxAmount: -0.2,
            animateSections: true
        },
        HomeHeaderImage: [
            "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/image/header/home.jpg"
        ],
        HomeBannerText: "",
        ArticleHeaderImage: [
            "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/image/header/article.jpg"
        ],
        OtherBannerText: "",
        MenuList : [
            {
                name: "首页",
                href: "",
                target: "",
                class: ""
            },
            {
                name: "标签",
                href: "",
                target: "",
                class: ""
            },
            {
                name: "分类",
                href: "",
                target: "",
                class: ""
            },
            {
                name: "归档",
                href: "",
                target: "",
                class: ""
            },
            {
                name: "赞赏",
                href: "",
                target: "",
                class: ""
            },
            {
                name: "关于",
                href: "",
                target: "",
                class: ""
            },
            {
                name: "订阅",
                href: "",
                target: "",
                class: ""
            },
            {
                name: "搜索",
                href: "",
                target: "",
                class: ""
            },
            {
                name: "留言板",
                href: "",
                target: "",
                class: ""
            },
            {
                name: "友情链接",
                href: "",
                target: "",
                class: ""
            }
        ],
        MenuLink : [
            {icon: "icon-weibo", url: ""},
            {icon: "icon-wechat", url: ""},
            {icon: "icon-qq", url: ""},
            {icon: "icon-github", url: ""}
        ],
        FooterStyle: 2,
        BottomText: {
            icon: "like-fill",
            left: "",
            right: ""
        },
        ThemeInfo: true,
        ConsoleList: [],
        FontIconExtend: "",
        Donate: {
            paypal : "",
            bitcoin: "",
            alipay : "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/image/donate/alipay.png",
            wechat : "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/image/donate/wechat.png"
        },
        Search: {
            applicationID: "U8CZAW9G9Z",
            apiKey: "b479add179b24524aa5f8773e9694c62",
            indexName: "Notes",
            hits: {
                page: 10
            },
            labels: {
                placeholder: "搜索",
                empty: "未发现与 「${query}」 相关的内容",
                stats: "${hits} 条相关条目，使用了 ${time} 毫秒"
            }
        },
        Valine: {
            switch: true,
            el: ".comments-content",
            appId: "srhKtvWPQTWYKh3qX8G8M7v0-gzGzoHsz",
            appKey: "8uVSP1q6UlALVC5igYfIfv2h",
            placeholder: "你是我一生只会遇见一次的惊喜...",
            notify: false,
            verify: false,
            avatar: "mm",
            meta: "nick,mail,link",
            pageSize: 5,
            lang: "zh-cn",
            visitor: true
        },
        Tocbot: {
            switch: true,
            tocSelector: ".toc",
            contentSelector: ".article-body",
            headingSelector: "h1, h2, h3, h4, h5",
            headingsOffset: 0,
            scrollSmooth: true,
            scrollSmoothOffset: -5,
            positionFixedSelector: ".toc",
            positionFixedClass: "toc-fixed"
        }, 
        Require: {
            baseUrl: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/js/",
            waitSeconds: 100
        },
        Meting: {
            setting: {
                id: "3778678", 
                lrcshow: false, 
                server: "netease", 
                type: "playlist", 
                fixed: true, 
                autoplay: false, 
                loop: "all", 
                order: "random", 
                preload: "auto", 
                volume: 0.67, 
                mutex: true
            }
        },
        Style: {
            aplayer: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/css/APlayer.css",
            archive: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/css/archive.css",
            donate: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/css/donate.css",
            fancybox: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/css/jquery.fancybox.css",
            footer: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/css/footer.css",
            highlight: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/css/dark.css",
            iconfont: "https://at.alicdn.com/t/font_1546312_l3yohatebw.css",
            index: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/css/index.css",
            mCustomScrollbar: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/css/jquery.mCustomScrollbar.css",
            menuBubble: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/css/menu-bubble.css",
            optiscroll: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/css/optiscroll.css",
            page: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/css/page.css",
            post: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/css/post.css",
            search: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/css/search.css",
            tocbot: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/css/tocbot.css"
        },
        Script: {
            aplayer: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/js/APlayer.min.js",
            config: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/js/require.config.js",
            index: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/js/index.js",
            instantSearch: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/js/instantsearch.min.js",
            jQuery: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/js/jquery-3.4.1.min.js",
            loading: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/js/loading.js",
            mCustomScrollbar: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/js/jquery.mCustomScrollbar.min.js",
            meting: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/js/Meting.min.js",
            mousewheel: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/js/jquery.mousewheel.min.js",
            require: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/js/require.min.js"
        },
        Font: {
            LongCang: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/font/LongCang.css",
            Monda: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/font/Monda.css",
            NotoSansSC: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/font/NotoSansSC.css",
            Playball: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/font/Playball.css",
            PTMono: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/font/PTMono.css",
            RobotoSlab: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/font/RobotoSlab.css",
            Rosario: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/font/Rosario.css",
            UbuntuMono: "https://cdn.jsdelivr.net/gh/first19326/hexo-liveforcode@master/static/font/UbuntuMono.css"
        },
        Suffix: {
            about: "简单地活着, 肆意又精彩."
        },
        Theme: {
            url: "https://github.com/first19326/Hexo-LiveForCode",
            name: "Hexo - Live For Code"
        }
    };

    $("#sidebar").prepend(sidebar);

    window.config = $.extend(true, window.defaultConfig, window.config);

    // Start Cache
    $.ajaxSetup({cache: true});

    // Load loading.js
    $.getScript(window.config.Script.loading, function () {

        // Loading Start
        loading.initRebound();
        loading.initSpinner();
        loading.spinner.init(loading.spring, true);

        $.getScript(window.config.Script.mCustomScrollbar, function () {
            $.getScript(window.config.Script.require, function () {
                $.getScript(window.config.Script.config, function () {
                    var staticResource = [
                        'Optiscroll', 'ToProgress', 'Rotate',
                        'SnapSvg', 'Classie', 'Main4', 'Tools'];
                    require(staticResource, function() {
                        require(['Base'], function() {
                            (new Base).init();
                        });
                    });
                });
            });
        });
    });
}
