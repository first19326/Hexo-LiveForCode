function websiteTools() {
    const tools  = this;
    const colors = {
        'gray': 'color: #1B2B34; font-size: 12px; line-height: 18px;',
        'red': 'color: #EC5F67; font-size: 12px; line-height: 18px;',
        'orange': 'color: #F99157; font-size: 12px; line-height: 18px;',
        'yellow': 'color: #FAC863; font-size: 12px; line-height: 18px;',
        'green': 'color: #99C794; font-size: 12px; line-height: 18px;',
        'teal': 'color: #5FB3B3; font-size: 12px; line-height: 18px;',
        'blue': 'color: #6699CC; font-size: 12px; line-height: 18px;',
        'purple': 'color: #C594C5; font-size: 12px; line-height: 18px;',
        'brown': 'color: #AB7967; font-size: 12px; line-height: 18px;'
    };

    /**
     * 加载CSS文件
     */
    this.dynamicLoadingCss = function (path) {
        if (!path || path.length === 0) { throw new Error('Argument "path" is required !'); }
        var head = document.getElementsByTagName('head')[0], link = document.createElement('link');
        link.href = path; link.rel = 'stylesheet'; link.type = 'text/css'; head.appendChild(link);
    };

    /**
     * 控制台输出图片
     */
    this.consoleImg = function(url) {
        console.log('%c', 'padding: 50px 300px; line-height: 120px; background: url(' + url + ') no-repeat;');
    };

    /**
     * 控制台输出内容
     */
    this.consoleText = function(list, mode) {
       
        switch (mode) {
            case 'random':
                var colorList = [colors.red, colors.orange, colors.yellow, colors.green, colors.teal, colors.blue, colors.purple, colors.brown];
                $.each(list, function (i) {
                    var str = (list[i]).toString();
                    var ind = tools.randomNum(0, colorList.length - 1);
                    console.log('%c' + str, colorList[ind]);
                });
                break;
            case 'banner':
                $.each(list, function (i) {
                    var arr = list[i];
                    console.log('\n' + ' %c ' + (arr[0]) + ' %c ' + (arr[1]) + ' ' + '\n', 'color: #FADFA3; background: #030307; padding: 5px 0;', 'background: #FADFA3; padding: 5px 0;');
                });
                break;

            default:
                console.log('%c' + list.join('\n'), colors.gray);
                break;
        }
    };

    /**
     * 滚动主体滚动条到指定位置
     */
    this.actScroll = function(endScroll, time) {
        $('html,body').stop().animate({scrollTop: endScroll}, time);
    };

    /**
     * 随机数
     */
    this.randomNum = function(minNum, maxNum){
        switch(arguments.length){
            case 1:
                return parseInt(Math.random() * minNum + 1);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
                break;
            default:
                return 0;
                break;
        }
    };

    /**
     * 随机字符串
     */
    this.randomString = function(len) {
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        var maxPos = $chars.length;
        var pwd = '';
        for (i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    };

    /**
     * 获取页面滚动百分比
     */
    this.getScrollPercent = function() {
        var scrollTo      = $(window).scrollTop(),
            docHeight     = $(document).height(),
            windowHeight  = $(window).height(),
            scrollPercent = (scrollTo / (docHeight-windowHeight)) * 100;
        return scrollPercent.toFixed(0);
    };

    /**
     * 过滤HTML中JavaScript代码
     */
    this.htmlFiltrationScript = function(str) {
        var subStr = new RegExp('\<script.*\<\/script\>', 'ig');
        return str.replace(subStr, '');
    };

    /**
     * 运行时间
     * @Param dateStr 年-月-日
     */
    this.getRunDate = function (dateStr) {
        dateStr = (dateStr).toString().split('-');
        var date = new Date();
        date.setUTCFullYear(dateStr[0], dateStr[1] - 1, dateStr[2]);
        date.setUTCHours(0, 0, 0, 0);
        var birthDay = date;
        var today = new Date();
        var timeold = today.getTime() - birthDay.getTime();
        var sectimeold = timeold / 1000;
        var secondsold = Math.floor(sectimeold);
        var msPerDay = 24 * 60 * 60 * 1000;
        var e_daysold = timeold / msPerDay;
        var daysold = Math.floor(e_daysold);
        var e_hrsold = (daysold - e_daysold) * -24;
        var hrsold = Math.floor(e_hrsold);
        var e_minsold = (hrsold - e_hrsold) * -60;
        var minsold = Math.floor((hrsold - e_hrsold) * -60);
        var seconds = Math.floor((minsold - e_minsold) * -60).toString();
        return {
            daysold: daysold,
            hrsold: hrsold,
            minsold: minsold,
            seconds: seconds
        };
    }

    /**
     * 获取当前日期 年-月-日
     * @returns {String}
     */
    this.getNowFormatDate = function() {
        var date = new Date();
        var seperator = '-';
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = '0' + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = '0' + strDate;
        }
        return year + seperator + month + seperator + strDate;
    };

    /**
     * HTML 转义
     * @return {String}
     */
    this.HTMLEncode = function(html) {
        var t = document.createElement('div');
        (t.textContent != null) ? (t.textContent = html) : (t.innerText = html);
        var output = t.innerHTML;
        t = null;
        return output;
    };

    /**
     * 判断是否为IE浏览器 包括非Chromium内核的Edge浏览器
     */
    this.isIE = function() {
        if (!!window.ActiveXObject || 'ActiveXObject' in window) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 函数防抖
     */
    let debounceTimer = null
    this.debounce = function(fn, delay) {
        return function() {
            if (debounceTimer) clearTimeout(debounceTimer);
            debounceTimer = setTimeout(function() {
                fn.apply(this, arguments);
                debounceTimer = null;
            }, delay);
        }
    }

    /**
     * 函数节流
     */
    let throttleTimer = null;
    this.throttle = function(fn, delay) {
        return function() {
            if (throttleTimer) return ;
            throttleTimer = setTimeout(function() {
                fn.apply(this, arguments);
                throttleTimer = null;
            }, delay);
        }
    }
}