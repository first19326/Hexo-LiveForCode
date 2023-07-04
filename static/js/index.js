{
    window.defaultConfig = {
        GitHubUserName: 'first19326',
        GitHubRepositories: 'Hexo-LiveForCode',
        User: 'LiveForCode',
        UserAvatar: '/image/sidebar/avatar.jpg',
        WebsiteStartDate: '2020-01-01',
        Home: 'javascript:;',
        WebsiteTitleBlur: '(◍´꒳`◍) Hi, Live For Code',
        WebsiteTitleBlurTimeOut: 500,
        WebsiteTitleFocus: '(*´∇｀*) 欢迎回来!',
        WebsiteTitleFocusTimeOut: 1000,
        WebsiteFavicon: {
            light: '/image/website/logo/logo.png',
            dark: '/image/website/logo/logo-dark.png'
        },
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
        BackAnimationRendered: true,
        IEBrowserBackAnimationRendered: false,
        BackAnimation: {
            colorSaturation: '60%',
            colorBrightness: '50%',
            colorAlpha: 0.5,
            colorCycleSpeed: 5,
            verticalPosition: 'random',
            horizontalSpeed: 200,
            ribbonCount: 3,
            strokeSize: 0,
            parallaxAmount: -0.2,
            animateSections: true
        },
        HomeHeaderImage: [
            '/image/header/home.jpg'
        ],
        HomeBannerText: '',
        ArticleHeaderImage: [
            '/image/header/article.jpg'
        ],
        OtherBannerText: '',
        Error: {
            icon: "icon-swimming",
            title: "PAGE NOT FOUND",
            content: [
                "很抱歉，您访问的页面不存在！",
                "可能是输入地址有误或该地址已变更。"
            ],
            buttons: [
                {
                    icon: "icon-home",
                    text: "返回首页",
                    href: "/",
                    class: ""
                }
            ]
        },
        MenuNotice: {
            enable: false,
            notice: '',
            speed: 0
        },
        MenuList : [
            {
                name: '首页',
                icon: 'icon-home-fill',
                href: '/',
                type: 'index',
                class: '',
                target: '_self'
            }
        ],
        MenuLink : [],
        FooterStyle: 2,
        BottomText: '<div><span class="face">ღゝ◡╹)ノ♡</span></div><div>【人生若只如初见<span><i class="iconfont icon-like-fill"></i></span>何事秋风悲画扇】</div><div>Live For Code</div>',
        ConsoleList: [],
        FontIconExtend: '',
        Donate: {
            paypal : '',
            bitcoin: '',
            alipay : '/image/donate/alipay.png',
            wechat : '/image/donate/wechat.png'
        },
        Search: {
            applicationID: '',
            apiKey: '',
            indexName: '',
            hits: {
                page: 10
            },
            labels: {
                placeholder: '搜索',
                empty: '未发现与 「${query}」 相关的内容',
                stats: '${hits} 条相关条目，使用了 ${time} 毫秒'
            }
        },
        Comment: {
            switch: true,
            type: 'Valine' 
        },
        Valine: {
            el: '.comments-content',
            appId: '',
            appKey: '',
            serverURLs: '',
            placeholder: '你是我一生只会遇见一次的惊喜...',
            notify: false,
            verify: false,
            avatar: 'mm',
            meta: 'nick,mail,link',
            pageSize: 5,
            lang: 'zh-cn',
            visitor: true
        },
        Tocbot: {
            switch: true,
            tocSelector: '.toc',
            contentSelector: '.article-body',
            headingSelector: 'h1, h2, h3, h4, h5',
            headingsOffset: 0,
            scrollSmooth: true,
            scrollSmoothOffset: -5,
            positionFixedSelector: '.toc',
            positionFixedClass: 'toc-fixed'
        }, 
        Require: {
            baseUrl: '/js/',
            waitSeconds: 100
        },
        Music: {
            type: 'Meting'
        },
        APlayer: {
            container: '.aplayer',
            fixed: true,
            autoplay: false, 
            loop: 'all',
            order: 'random', 
            preload: 'auto',
            volume: 0.67,
            mutex: true,
            lrcType: 3,
            audio: [
                {
                    name: 'Endless Tears',
                    artist: 'CLIFF EDGE',
                    cover: '/music/cover/Endless Tears.jpg',
                    url: '/music/song/Endless Tears.mp3',
                    lrc: '/music/lrc/Endless Tears.lrc'
                }
            ]
        },
        Meting: {
            api: 'https://api.i-meto.com/meting/api',
            id: '3778678', 
            lrcshow: false, 
            server: 'netease', 
            type: 'playlist', 
            fixed: true, 
            autoplay: false, 
            loop: 'all', 
            order: 'random', 
            preload: 'auto', 
            volume: 0.67, 
            mutex: true
        },
        Mouse: {
            enable: false,
            options: {
              size: 6,
              sizeF: 24
            }
        },
        LazyLoad: {
            default: '/image/website/lazyload.svg'
        },
        Style: {
            aplayer: '/css/APlayer.css',
            archive: '/css/archive.css',
            base: '/css/base.css',
            clipboard: '/css/clipboard.css',
            code: '/css/code.css',
            donate: '/css/donate.css',
            fancybox: '/css/jquery.fancybox.css',
            footer: '/css/footer.css',
            iconfont: '/iconfont/iconfont.css',
            index: '/css/index.css',
            menuBubble: '/css/menu-bubble.css',
            mouse: '/css/mouse.css',
            page: '/css/page.css',
            post: '/css/post.css',
            search: '/css/search.css',
            tocbot: '/css/tocbot.css',
            valine: '/css/valine.css',
            waline: '/css/waline.css',
            walineCustom: '/css/waline-custom.css'
        },
        Script: {
            aplayer: '/js/APlayer.min.js',
            config: '/js/require.config.js',
            index: '/js/index.js',
            instantSearch: '/js/instantsearch.min.js',
            iscroll: '/js/iscroll.js',
            jQuery: '/js/jquery-3.4.1.min.js',
            loading: '/js/loading.js',
            meting: '/js/Meting.min.js',
            require: '/js/require.min.js',
            waline: '/js/waline.mjs',
            pageview: '/js/pageview.mjs',
            comment: '/js/comment.mjs'
        },
        Font: {
            LongCang: '/font/LongCang.css',
            Monda: '/font/Monda.css',
            NotoSansSC: '/font/NotoSansSC.css',
            NotoSerifSC: '/font/NotoSerifSC.css',
            Playball: '/font/Playball.css',
            PTMono: '/font/PTMono.css',
            Roboto: '/font/Roboto.css',
            RobotoSlab: '/font/RobotoSlab.css',
            Rosario: '/font/Rosario.css',
            UbuntuMono: '/font/UbuntuMono.css'
        },
        Suffix: {
            about: '简单地活着, 肆意又精彩.'
        },
        Theme: {
            url: 'https://github.com/first19326/Hexo-LiveForCode',
            name: 'Hexo - Live For Code'
        }
    };

    window.config = $.extend(true, window.defaultConfig, window.config);

    // Start Cache
    $.ajaxSetup({cache: true});

    // Load loading.js
    $.getScript(window.config.Script.loading, function () {

        // Loading Start
        loading.initRebound();
        loading.initSpinner();
        loading.spinner.init(loading.spring, true);

        $.getScript(window.config.Script.require, function () {
            $.getScript(window.config.Script.config, function () {
                var staticResource = [
                    'ToProgress', 'Rotate',
                    'SnapSvg', 'Classie', 'Menu', 'VelocityUI', 'Tools'
                ];
                require(staticResource, function() {
                    require(['Base'], function() {
                        (new Base).init();
                    });
                });
            });
        });
    });
}
