$(function(){
	// 商品翻页动画
	var recommendation = $(".recommend ul"),			
	pre = $(".logo-left-arrow"),	//前页
	next= $(".logo-right-arrow");	//下页
	function moveLists (offset) {
                var left = parseInt(recommendation.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                if(left<-1954){
                	//  取消向右点击
                	recommendation.css('left',-1954);
                }else if(left>0){
                	// 取消向左点击
                	recommendation.css('left',0);
                }else{
                	recommendation.css('left',offset);
            	}                
            }
    next.on("click",function(){    	   	
        moveLists(-977);          
    });
	pre.on("click",function(){		
    	moveLists(977);
	});
	// !商品翻页动画

	// 土豪翻页动画
	var chart = $(".lists ul");
	var down  = $(".down");
	var up    = $(".up");
	function movechart(offset){
		var top = parseInt(chart.css('top')) + offset;		
		 if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
       	if(top<-388){
                	//  取消向下点击
                	chart.css('top',-388);
                }else if(top>0){
                	// 取消向上点击
                	chart.css('top',0);
                }else{
                	chart.css('top',offset);
            	}      	
	}
	 down.on("click",function(){    	   	
        movechart(-305);                
    });
	up.on("click",function(){		
    	movechart(305);
	});
	// !土豪翻页动画

	// 自动聚焦周榜
	$(".title").on("click",function(){
		$(this).children("a").removeClass("chart-active");
	});	
    //切换导航展示li     
    var $bar = $(".progress-bar");
    $(".nav-lists").children("li").on({
        mouseenter:function(){
            $(this).find("article").addClass('article-active');
            if($bar.is(":animated")){
                $bar.stop(true,true);
            }
             $bar.animate({
                width:"100%"
             },'slow');
        },
        mouseleave:function(){
            $(this).find("article").removeClass('article-active');        
            if($bar.is(":animated")){
                $bar.stop(true,true);
            }
            $bar.animate({
                width:"0"
             },'fast');
        }
    })
    //固定nav在页面顶端
    var $nav = $(".navigation");
    var $top = $nav.offset().top;
    $(window).scroll(function(){   
        if($top<=$(this).scrollTop()){
            $nav.addClass("nav-fixed-top");
        }else{
            $nav.removeClass("nav-fixed-top");
        }
    });
    //carousel 时间切换.
     var container = $('.carsouel');
            var list = $('.container');
            var buttons = $('#buttons span');            
            var index = 1;
            var len = 5;
            var interval = 3000;
            var timer;


            function animate (offset) {
                var left = parseInt(list.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                list.animate({'left': offset}, 600, function () {
                    if(left > -200){
                        list.css('left', -1200 * len);
                    }
                    if(left < (-1200 * len)) {
                        list.css('left', -1200);
                    }
                });
            }

            function showButton() {
                buttons.eq(index-1).addClass('on').parent().siblings().children("span").removeClass('on');
            }
            function nextPage(){
                 if (list.is(':animated')) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-1200);
                showButton();
            }

            function play() {
                console.log(1);
                timer = setTimeout(function () {                    
                    play();
                    nextPage();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }
           

            buttons.each(function () {
                 $(this).bind('click', function () {
                     if (list.is(':animated') || $(this).attr('class')=='on') {
                         return;
                     }
                     var myIndex = parseInt($(this).attr('index'));
                     var offset = -1200 * (myIndex - index);

                     animate(offset);
                     index = myIndex;
                     showButton();
                 })
            });

            container.on({
                mouseover:stop,
                mouseout:play
            });
            play();

            //登录弹框
            var openModal = function(target){   //打开弹窗效果
                target.modal({overlayClose:true,
                onOpen: function (dialog) {
                    dialog.overlay.fadeIn("fast", function () {  //罩层载入
                              dialog.data.hide();           //数据载入动画
                                   dialog.container.fadeIn('fast', function () { //内容区载入
                                        dialog.data.fadeIn('normal');    //数据显示动画
                                                                                          });
                                                                           });
                                                                 },
                          overlayCss:{backgroundColor:"#000"},
                          opacity:85
                                });
            }
             $("[role='login']").on("click",function(){
                openModal($("#login"));
            });
              $("#for-login").on("click",function(){
                 $.modal.close();
                 openModal($("#login"));
            })
               $("#for-signin").on("click",function(){
                $.modal.close();
                openModal($("#signin"));
            })
            $("[role='release']").on("click",function(){
                openModal($("#signin"));  
            })
            $("[role='sending']").on("click",function(){
                openModal($("#signin"));
            })
})