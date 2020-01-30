/**
 * options: {
 *        items:  轮播图里面的内容  每一项是一个轮播结构
 *        width/height:  轮播图的大小宽度/高度
 *        type:  轮播图的运动类型 可选值fade / animate 
 *        trigger:  小圆点的触发轮播的事件类型  可选值 click/mouseenter
 *        arrow：   左右按钮展示情况  可选值 never（不展示）/ always（总是）
 * }
 * wrap : 轮播图添加的区域
 */
/*
方法
创建结构：外层div-》ul-》li-》items
初始化样式：
事件：点击事件
动画部分change
*/
(function(){
    function Swiper(option,wrap){
        this.wrap = wrap || $('body');
        this.items = option.items || [];
        this.width = option.width || $(this.wrap).width();
        this.height = option.height || $(this.wrap).height();
        this.type = option.type || 'fade';
        this.arrow = option.arrow || 'always';
        this.showArrowBtn = typeof option.showArrowBtn == 'boolean' ? option.showArrowBtn : true;
        this.showSpot = typeof option.showSpotBtn == 'boolean' ? option.showSpotBtn : true;
        this.spotPosition = option.spotPosition || 'center';
        this.isAuto = typeof option.isAuto == 'boolean' ? option.isAuto : true;;
        this.autoTime = option.autoTime || 2000;
        this.nowIndex = 0;
        this.lock = false;
        this.timer = null;
        this.len = this.items.length;

        this.init=function(){
            this.creatDom();
            this.curStyle();
            this.bindEvent();
            if(this.isAuto){
                this.autoMove();
            }
        };
    }

    Swiper.prototype.creatDom = function(){
        console.log(this.items);
        var self = this;
        var swiperDiv = $('<div class="my-swiper"></div>').addClass('my-swiper-' + this.type);
        var swiperContentUl = $('<ul class = "my-swiper-list" ></ul>');
        var swiperSpot = $('<div class = "my-swiper-spot"></div>')
        for(var i = 0; i < this.len ; i++ ){
            $('<li></li>').append( $(this.items[i]) ).appendTo(swiperContentUl);
            $('<span></span>').appendTo(swiperSpot).addClass(
                i == self.nowIndex ? 'active' : ''
            );
        }
        swiperContentUl.appendTo(swiperDiv);

        if(this.type == 'animate'){
            $('<li></li>').append( $(this.items).eq(0).clone() ).appendTo(swiperContentUl);
        }

        var leftBtn = $('<span class="my-swiper-btn leftBtn">&lt;</span>');
        var rightBtn = $('<span class="my-swiper-btn rightBtn">&gt;</span>');
        if(this.showArrowBtn){
            swiperDiv.append(leftBtn).append(rightBtn);
        }
        if(this.showSpot){
            swiperDiv.append(swiperSpot);
        }
        $(this.wrap).append(swiperDiv);
    }
    Swiper.prototype.curStyle = function(){
        $('.my-swiper', this.wrap).css({height:this.height,width:this.width});
        $('.my-swiper-list>li', this.wrap).css({height:this.height,width:this.width})
        if(this.type == 'fade'){
            $('.my-swiper-list>li', this.wrap).hide().eq(this.nowIndex).show();
        }else if(this.type == 'animate'){
            $('.my-swiper-list',this.wrap).css({
                height: this.height,
                width: this.width * (this.len + 1)
            })
        }
        
        
        $('.my-swiper-spot',this.wrap).css({
            textAlign: this.spotPosition
        })
    }
    Swiper.prototype.bindEvent = function(){
        var self = this;
        $('.my-swiper', this.wrap).mouseenter(function () {
            clearInterval(self.timer);
        }).mouseleave(function () {
            if (self.isAuto) {
              self.autoMove();
            }
        })
        $('.rightBtn', this.wrap).click(function(){
            if(self.lock){
                return false;
            }
            self.lock = true;
            if(self.nowIndex == self.len - 1){
                if(self.type == 'animate'){
                    self.nowIndex++;
                }else{
                    self.nowIndex = 0;
                }
            }else{
                if(self.nowIndex == self.len){
                    $('.my-swiper-list', self.wrap).css({left:0})
                    self.nowIndex = 0;
                }
                self.nowIndex++;
            }
            self.change();
        })
        $('.leftBtn', this.wrap).click(function(){
            if(self.lock){
                return false;
            }
            self.lock = true;
            if(self.nowIndex == 0){
                if(self.type == 'animate'){
                    $('.my-swiper-list', self.wrap).css({left:-self.width*(self.len)})
                }
                self.nowIndex = self.len - 1;
            }else{
                self.nowIndex--;
            }
            self.change();
        })
        $('.my-swiper-spot>span', this.wrap).on('mouseenter',function(){
            if(self.lock){
                return false;
            }
            self.lock = true;
            self.nowIndex = $(this).index();
            self.change();
        })

    }
    Swiper.prototype.change = function(){
        var self = this;
        if(this.type == 'fade'){
            $('.my-swiper-list', this.wrap).find('li').fadeOut().eq(this.nowIndex).fadeIn(function(){
                self.lock = false;
            });
        }else if(this.type == 'animate'){
            $('.my-swiper-list', self.wrap).animate({
                left:-self.width*self.nowIndex
            },function(){
                self.lock = false;
            })
        }
        $('.my-swiper-spot', this.wrap).find('span').removeClass('active').eq(this.nowIndex % this.len).addClass('active');
    }
    Swiper.prototype.autoMove = function () {
        var self = this;
        clearInterval(this.timer);
        this.timer = setInterval(function () {
          $('.my-swiper > .rightBtn', self.wrap).trigger('click'); 
          if(!self.showArrowBtn && self.isAuto){
            if(self.lock){
                return false;
            }
            self.lock = true;
            if(self.nowIndex == self.len - 1){
                if(self.type == 'animate'){
                    self.nowIndex++;
                }else{
                    self.nowIndex = 0;
                }
            }else{
                if(self.nowIndex == self.len){
                    $('.my-swiper-list', self.wrap).css({left:0})
                    self.nowIndex = 0;
                }
                self.nowIndex++;
            }
            self.change();
          }         
        }, this.autoTime)
    }
    $.fn.extend({
        swiper:function(option){
            console.log(this);
            var obj = new Swiper(option,this);
            obj.init();
        }
    })
})()
