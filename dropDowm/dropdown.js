(function(){
    function dropdowm(option,wrap){
        this.wrap = wrap;
        this.width = option.width;
        this.widthCol = option.widthCol;
        this.menuList = option.menuList || [];
        this.justifyContent = option.justifyContent || 'start';
        this.direction = option.direction || 'y';
        this.init = function(){
            this.creatDom();
            this.initStyle();
        }
    }

    dropdowm.prototype.creatDom = function(){
        var dropdownDiv = $('<div class = "my-dropdown"></div>');
        this.menuList.forEach(function(menu,index){
            var oDl = $('<dl></dl>');
            if(menu.title){
                $('<dt>'+ menu.title +'</dt>').appendTo(oDl);
            }
            menu.items.forEach(function(item){
                $('<dd><a href = '+ item.href +'>'+ item.name +'</a></dd>').appendTo(oDl);
            })
            oDl.appendTo(dropdownDiv);
        })
        dropdownDiv.appendTo(this.wrap);
    }
    dropdowm.prototype.initStyle = function(){
        var self = this;
        $('.my-dropdown',this.wrap).css({
            width:this.width
        })
        $('.my-dropdown > dl > dd',this.wrap).css({
            width:this.widthCol
        })
        if(this.justifyContent == 'end'){
            $('.my-dropdown',this.wrap).css({
                right:0,left:'auto'
            })
        }
        if(this.direction == 'x'){
            $('.my-dropdown',this.wrap).css({
                right:-69,left:'auto'
            })
            this.menuList.forEach(function(item){
                $('.my-dropdown', self.wrap).find('dl').css({
                    width:item.width,
                    float:'left',
                    borderLeft: '1px solid #eee',
                    borderBottom: 'none',
                    marginTop:'10px',
                    padding:'0 0 10px 15px'
                }).find('dd').css({
                    width:item.widthCol
                })
            })
        }
    }

    $.fn.extend({
        addDropdown: function(option){
            var obj = new dropdowm(option,this);
            obj.init();
        }
    })
}())