//dropwown
$('#myJD').addDropdown({
    width: 280,
    widthCol: 126,
    justifyConent: 'start',
    menuList: [{
        title: "",
        items: [{
            href: '#',
            name: '待处理订单',
        }, {
            href: '#',
            name: '消息',
        }, {
            href: '#',
            name: '返修退换货',
        }, {
            href: '#',
            name: '我的问答',
        }, {
            href: '#',
            name: '降价商品',
        }, {
            href: '#',
            name: '我的关注',
        }
        ],
    }, {
        title: '',
        items: [{
            href: '#',
            name: '我的京豆',
        }, {
            href: '#',
            name: '我的优惠券',
        }, {
            href: '#',
            name: '我的白条',
        }
        ],
    }]
});

$('#procurement').addDropdown({
    width: 140,
    widthCol: 56,
    justifyConent: 'start',
    menuList: [{
        title: '',
        items: [{
            href: '',
            name: '企业购'
        }, {
            href: '',
            name: '商用场景馆'
        }, {
            href: '',
            name: '工业品'
        }, {
            href: '',
            name: '礼品卡'
        }]
    }]
});

$('#service').addDropdown({
    width: 170,
    widthCol: 70,
    justifyContent: 'end',
    menuList: [{
        title: '客户',
        items: [{
            name: '帮助中心',
            href: ''
        }, {
            name: '售后服务',
            href: ''
        }, {
            name: '在线客服',
            href: '',
        }, {
            name: '意见建议',
            href: ''
        }, {
            name: '电话客服',
            href: ''
        }, {
            name: '客服邮箱',
            href: ''
        }, {
            name: '金融咨询',
            href: ''
        }, {
            name: '全球售客服'
        }]
    }, {
        title: '商户',
        items: [{
            name: '合作招商'
        }, {
            name: '学习中心'
        }, {
            name: '商家后台'
        }, {
            name: '京麦工作台'
        }, {
            name: '商家帮助'
        }, {
            name: '规则平台'
        }]
    }]
});

$('#bar-navs').addDropdown({
    direction: 'x',
    width: 1188,
    menuList: [{
        title: '特色主题',
        width: 340,
        widthCol: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }, {
            name: '京东金融科技'
        }, {
            name: '陪伴计划'
        }, {
            name: '出海招商'
        }, {
            name: '拍拍'
        }]
    }, {
        title: '特色主题',
        width: 270,
        itemWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }]
    }, {
        title: '特色主题',
        width: 340,
        widthCol: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }, {
            name: '京东金融科技'
        }, {
            name: '陪伴计划'
        }, {
            name: '出海招商'
        }, {
            name: '拍拍'
        }]
    }]
});
// swiper
$('.fs-2 .slider-focus').swiper({
    items: $('.fs-2 .slider-focus > img'),
    showArrowBtn: true,
    showSpotBtn: true,
    spotPosition: 'left',
    type: 'fade',
    width: 590,
    height: 470,
    isAuto: true,
    autoTime: 3000
})
$('.slider-recommend').swiper({
    items: $('.slider-recommend > .recommend-item'),
    showArrowBtn: true,
    showSpotBtn: false,
    type: 'fade',
    width: 190,
    height: 470,
    isAuto: true,
    autoTime: 5000
})
$('.slider-l').swiper({
    items: $('.slider-l .item'),
    showArrowBtn: true,
    showSpotBtn: false,
    type: 'animate',
    width: 800,
    height: 260,
    isAuto: false
})
$('.seckill .slider-r').swiper({
    items: $('.slider-r > .seckill-brand-1'),
    showArrowBtn: false,
    showSpotBtn: true,
    type: 'animate',
    width: 180,
    height: 240,
    autoTime: 1500
})
//img hover
$('.logo').hover(function () {
    $('.logo-hover', this).css({
        backgroundImage: 'url(https://img1.360buyimg.com/da/jfs/t1/16134/5/11584/77878/5c90a4bdE5ae12937/38714fb6679b8daf.gif?v=0.4816663691124261' + new Date().getTime() + ')'
    }).fadeIn();
}, function () {
    setTimeout(function () {
        $('.logo-hover', $('.logo')).fadeOut();
    }, 2500)
})
var lock = true;
$('.fs .ad .fs_act_lk_img').hover(function () {
    lock = false;
    $('.ad-hover').animate({ width: 790 }, 2000)
}, function () {
    setTimeout(function () {
        $('.ad-hover').animate({ width: 0 }, 2000)
    }, 500)
    lock = true;
})

//searchBox
var placeholders = ['清风抽纸', '购物神器', '美孚1号', '乐高', '内存卡', '水杯', '羽绒服'];
function placeHolderChange() {
    var count = 0;
    setInterval(function () {
        $('#search-inp').prop('placeholder', placeholders[count])
        count++;
        count = count % placeholders.length;
    }, 2500)
}
placeHolderChange();

function deelSearchData(data) {
    $('#search-box').empty().show();
    var data = data.result;
    for (var i = 0; i < data.length; i++) {
        $('<li><a>' + data[i][0] + '</a> <span class="searchNumber">约' + parseInt(data[i][1]) + '个商品</span></li>').appendTo($('#search-box'))
    }
}
var searchTimer = null;
var searchBoxTimer = null;
$('#search-inp').on('keyup', function () {
    clearTimeout(searchTimer);
    var val = $(this).val();
    if (val) {
        searchTimer = setTimeout(function () {
            $.ajax({
                url: 'https://suggest.taobao.com/sug',
                type: 'Get',
                data: {
                    code: 'utf-8',
                    q: val,
                    _ksTS: '1577155207661_623',
                    callback: 'deelSearchData',
                    k: 1,
                    area: 'c2c',
                    bucketid: 8
                },
                dataType: 'jsonp'
            })
        }, 500)
    }
}).hover(function () {
    clearTimeout(searchTimer);
}, function () {
    searchTimer = setTimeout(function () {
        $('#search-box').empty().hide();
    }, 500)
})
$('#search-box').hover(function () {
    clearTimeout(searchTimer);
}, function () {
    searchTimer = setTimeout(function () {
        $('#search-box').empty().hide();
    }, 500)
})
//  左侧菜单栏数据
var menuList = [{
    titles: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    titles: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    titles: ['电脑', '办公'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    titles: ['家居', '家具', '家装', '厨具'],
    content: {
        tabs: ['家居', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}];

function renderMenuList() {
    for (var i = 0; i < menuList.length; i++) {
        var menuData = menuList[i];
        var oLi = $('<li></li>');
        menuData.titles.forEach(function (title, index, arr) {
            $('<a href="#"></a>').text(title).appendTo(oLi);
            if (index < arr.length - 1) {
                $('<span>/</span>').appendTo(oLi);
            }
        });
        $('.menu-list').append(oLi)
    }
}
renderMenuList();
var menuTimer = null;
$('.menu-list').on('mouseenter', 'li', function () {
    clearTimeout(menuTimer)
    var index = $(this).index();
    console.log(index)
    renderMenuContent(menuList[index].content);
    $('.menu-content').fadeIn();
}).mouseleave(function () {
    menuTimer = setTimeout(function () {
        $('.menu-content').fadeOut();
    }, 500)
});
function renderMenuContent(data) {
    var tabsDiv = $('<div class="tabs"></div>');
    var detailDiv = $('<div class="detail"></div>');
    var oUl = $('<ul></ul>');
    data.tabs.forEach(function (tab) {
        $('<li><a href="#">' + tab + '<i class="iconfont">&#xe630;</i></a></li>').appendTo(oUl);
    });
    tabsDiv.append(oUl)
    data.subs.forEach(function (sub) {
        var oDl = $('<dl></dl>');
        $(`<dt>
        <a href="#">${sub.title}
          <i class="iconfont">&#xe630;</i>
        </a>
      </dt>`).appendTo(oDl);
        var oDD = $('<dd></dd>');
        sub.items.forEach(function (item) {
            $('<a href="#"></a>').text(item).appendTo(oDD);
        })
        oDl.append(oDD).appendTo(detailDiv);
    });
    $('.menu-content').empty().append(tabsDiv).append(detailDiv)

}

$('.menu-content').mouseleave(function () {
    menuTimer = setTimeout(function () {
        $('.menu-content').fadeOut();
    }, 500)
}).mouseenter(function () {
    clearTimeout(menuTimer)
});

$('.service_frame').mouseenter(function () {
    $('.service_frame').not('.service_frame2').find('a').css({
        marginTop: -36,
    });
    if ($(this).hasClass('service_frame2')) {
        $(this).find('a').css({
            marginTop: -91,
            background: '#fff'
        })
    } else {
        if ( $('.service_frame2 a').css('margin-top') != '-91px') {
            $('.service_frame2 a').css({
                marginTop: 0
            })
        }
    }
    $('.service-pop').css({
        top: 32,
    }).find('.service-content').text($(this).text());
    $('.service_frame_on').removeClass('service_frame_on');
    $(this).addClass('service_frame_on')
})
$('.close').click(function() {
    $('.service_frame a').css({
        marginTop: 0,
    });
    $('.service-pop').css({
        top: 238,
    });
    $('.service_frame_on').removeClass('service_frame_on');

})

var endTime = new Date('2019-12-25 24:00').getTime();
setInterval(function () {
    var nowTime = new Date().getTime();
    var hour = Math.floor((endTime - nowTime) / 1000 / 60 / 60);
    var minute = parseInt((endTime - nowTime) / 1000 / 60) - hour * 60;
    var second = parseInt((endTime - nowTime) / 1000) - hour * 60 * 60 - minute * 60;
    if (hour < 10) {
        hour = '0' + hour;
    }
    $('.hour').text(hour);
    if (minute < 10) {
        minute = '0' + minute;
    }
    $('.minute').text(minute);
    if (second < 10) {
        second = '0' + second;
    }
    $('.second').text(second)
}, 1000)
