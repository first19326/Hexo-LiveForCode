$(document).ready(function () {
    let searchSettings = window.config.Search;
    let isSearchSettingsValid = searchSettings.applicationID &&
                                searchSettings.apiKey &&
                                searchSettings.indexName;
    let scroll = null;
    if (!isSearchSettingsValid) {
        window.console.error('Search settings are invalid.');
        return;
    }

    let search = instantsearch({
        appId          : searchSettings.applicationID,
        apiKey         : searchSettings.apiKey,
        indexName      : searchSettings.indexName,
        searchFunction : function (helper) {
            let searchInput = $('#search-input').find('input');

            if (searchInput.val()) {
                helper.search();
            }
        }
    });

    // Search Render Function
    search.on('render', function() {
        scroll.refresh();
    });

    // Registering Widgets
    [
        instantsearch.widgets.searchBox({
            container   : '#search-input',
            placeholder : searchSettings.labels.placeholder
        }),

        instantsearch.widgets.hits({
            container   : '#search-hits',
            hitsPerPage : searchSettings.hits.page || 10,
            templates   : {
                item: function (data) {
                    let link = data.permalink ? data.permalink : ('/' + data.path);
                    return ('<a href="' + link + '" class="search-hit-link">' + data._highlightResult.title.value + '</a>');
                },
                empty: function (data) {
                    return ('<div id="search-hits-empty" class="search-hits-empty">' + searchSettings.labels.empty.replace(/\$\{query}/, data.query) + '</div>');
                }
            },
            cssClasses: {
                item: 'search-hit-item'
            }
        }),

        instantsearch.widgets.stats({
            container : '#search-stats',
            templates : {
                body: function (data) {
                    let stats = searchSettings.labels.stats.replace(/\$\{hits}/, data.nbHits).replace(/\$\{time}/, data.processingTimeMS);
                    return (stats + '<hr/>');
                }
            }
        }),

        instantsearch.widgets.pagination({
            container: '#search-pagination',
            scrollTo: '#search-stats',
            showFirstLast: false,
            labels: {
                previous : '<i class="iconfont icon-left"></i>',
                next     : '<i class="iconfont icon-right"></i>'
            },
            cssClasses: {
                link     : 'page-number',
                active   : 'current',
                disabled : 'disabled'
            }
        })
    ].forEach(search.addWidget, search);

    search.start();

    $('body').on('click', '.search', function(e) {
        e.stopPropagation();
        // 打开搜索窗口时, 关闭菜单
        $('.menu-button-close').click();
        $('body').append('<div class="search-cover"></div>').css('overflow', 'hidden');
        // 移动端防止滚动
        $('.search-cover').on("touchmove", function(event){
            event.preventDefault;
        }, false);
        // 移动端防止滚动-输出框获取焦点时
        document.body.addEventListener('touchmove', handler, { passive: false });
        $('.search-window').toggle();
        $('#search-input').find('input').focus();
        // 初始化滚动条
        let height = $(".search-content").outerHeight();
        $(".search-scroll").css("height", "calc(100% - " + height + "px)");
        scroll = new IScroll(".search-scroll", {
            scrollbars: true,
            mouseWheel: true,
            fadeScrollbars: true,
            resizePolling: 60
        });
    });

    $('body').on('click', '.search-close-icon', function() {
        $('.search-window').hide();
        $('.search-cover').remove();
        // 移除移动端防止滚动监听-输出框获取焦点时
        document.body.removeEventListener('touchmove', handler, { passive: false });
        $('body').css('overflow', 'auto');
        // 关闭搜索窗口时, 搜索内容清空
        $('#search-input').find('input').val('');
        $('#search-stats').empty();
        $('#search-hits').empty();
        $('#search-pagination').empty();
        // 销毁滚动条
        scroll.destroy();
        scroll = null;
    });

});

function handler(event) {
    event.preventDefault();
    event.stopPropagation();
}