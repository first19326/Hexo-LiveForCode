$(document).ready(function () {
    var searchSettings = window.config.Search;
    var isSearchSettingsValid = searchSettings.applicationID &&
                                searchSettings.apiKey &&
                                searchSettings.indexName;

    if (!isSearchSettingsValid) {
        window.console.error('Search settings are invalid.');
        return;
    }

    var search = instantsearch({
        appId          : searchSettings.applicationID,
        apiKey         : searchSettings.apiKey,
        indexName      : searchSettings.indexName,
        searchFunction : function (helper) {
            var searchInput = $('#search-input').find('input');

            if (searchInput.val()) {
                helper.search();
            }
        }
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
                    var link = data.permalink ? data.permalink : ('/' + data.path);
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
                    var stats = searchSettings.labels.stats.replace(/\$\{hits}/, data.nbHits).replace(/\$\{time}/, data.processingTimeMS);
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
        $('.search-window').toggle();
        $('#search-input').find('input').focus();
    });

    $('body').on('click', '.search-close-icon', function() {
        $('.search-window').hide();
        $('.search-cover').remove();
        $('body').css('overflow', '');
        // 关闭搜索窗口时, 搜索内容清空
        $('#search-input').find('input').val('');
        $('#search-stats').empty();
        $('#search-hits').empty();
        $('#search-pagination').empty();
    });

});
