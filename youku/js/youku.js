// JavaScript Document
$(function() {
    var $Icons = $(".header_nav_Icons").parent();
    $.modal.defaults.closeClass = "simplemodal-close_img";
    for (var i = 0; i < $Icons.length; i++) {

        $Icons.get(i).addEventListener("touchstart", function() {
            if ($(this).hasClass("header_nav--fontColor") == true) //包含header_nav--fontColor表示次元素被选中
            {
                $(this).removeClass("header_nav--fontColor").find("span:eq(0)").css("background-position-x", function() {
                    return parseFloat($(this).css("background-position-x")) + 48 + "px";
                });
            } else if ($(this).hasClass("header-sidebar--right2--register") == true) {
                $(".modal_register").modal({
                    position: ["0", ]
                });
            } else {
                $(this).addClass("header_nav--fontColor").find("span:eq(0)").css("background-position-x", function() {
                    return parseFloat($(this).css("background-position-x")) - 48 + "px";
                })
            }
            var $siblings = $("span[class*=--img]").not($(this).find("span:eq(0)")); //获取其他标签元素
            $siblings.each(function() {
                if ($(this).parent().hasClass("header_nav--fontColor") == true) {
                    $(this).css("background-position-x", function() {
                        return parseFloat($(this).css("background-position-x")) + 48 + "px";
                    }).parent().removeClass("header_nav--fontColor");
                    switch ($(this).parent().attr("class")) //如果其他header_logo标签有窗口实现，关闭该窗口
                    {
                        case "header_nav_channel": //attain channel's logo
                            $(".header_channel--names").hide();
                            break;
                        case "header-sidebar--right2--register": //attain register's logo

                            break;
                        case "header_nav--right2--record": //attain record's log
                            $(".header_record_Columns").css("display", "none");
                            break;
                        case "header_nav_search": //attain search's logo
                            $(".header_searchColumn").removeClass("header_searchColumn--boxshadow");
                            break;
                    }
                }
            })

        }, false)
    }
    document.getElementById("header_nav_channel").addEventListener("touchstart", function() {
        if ($(".header_channel--names").css("display") == "none")
            $(".header_channel--names").show();
        else
            $(".header_channel--names").hide();
    }, false); //下述为原来click执行的事件
    /*
		$(".header_nav_channel").click(function(){
				if($(".header_channel--names").css("display")=="none")
				$(".header_channel--names").show();
				else
				$(".header_channel--names").hide();
			})
		*/
    document.getElementById("header_nav_search").addEventListener("touchstart", function() {
        if ($(".header_searchColumn").hasClass("header_searchColumn--boxshadow") == true)
            $(".header_searchColumn").removeClass("header_searchColumn--boxshadow");
        else
            $(".header_searchColumn").addClass("header_searchColumn--boxshadow");
    }, false); //下述为原来click执行的事件

    /*
		$(".header_nav_search").click(function(){
				if($(".header_searchColumn").hasClass("header_searchColumn--boxshadow")==true)
					$(".header_searchColumn").removeClass("header_searchColumn--boxshadow");
				else
					$(".header_searchColumn").addClass("header_searchColumn--boxshadow");
		});
		*/
    //	
    /*					实现navigator属性
    var myScroll;
    function loaded(){
        myScroll = new IScroll('#nav_list',{scrollX:true,scollY:false});
    }
    document.addEventListener("touchmove",function(e){e.preventDefault();},false);
    */
    document.getElementById("header_nav--right2--record").addEventListener("touchstart", function() {
        if ($(".header_record_Columns").css("display") == "table") {
            $(".header_record_Columns").css("display", "none");
        } else {
            $(".header_record_Columns").css("display", "table");
        }
    }, false)
    var startX;
    var moveX = 0;
    var endX = 0;
    document.getElementById("nav_list").addEventListener("touchstart", function(event) {
        event.preventDefault();
        var touch = event.touches[0];
        startX = touch.pageX;
    }, false);
    document.getElementById("nav_list").addEventListener("touchmove", function(event) {
        event.preventDefault(); //防止网页滑动
        var touch = event.touches[0];
        endX = touch.pageX;
        var origin_location = touch.pageX - startX + moveX;
        var $list = $(".nav_list");
        $list.css({
            transition: "transform",
            transform: "translate(" + origin_location + "px" + ",0px) scale(1) translateZ(0px)",
            webkitTransform: "translate(" + origin_location + "px" + ",0px) scale(1) translateZ(0px)"
        });

    }, false);
    document.getElementById("nav_list").addEventListener("touchend", function() {
        var $list = $(".nav_list");
        moveX += endX - startX + 10;
        if (moveX >= 0) {
            moveX = 0;
            $list.css({
                transition: "transform 500ms",
                transform: "translate(0px,0px) scale(1) translateZ(0px)",
                webkitTransform: "translate(0px,0px) scale(1) translateZ(0px)"
            });
        } else {
            if (($list.position().left - $(".nav_list_bottom").width()) < (-$(this).width())) //get the location when the ul's right side attach parent-right border;
            {
                moveX = $(".nav_list_bottom").width() - $list.width();
            }
            $list.css({
                transition: "transform 500ms",
                transform: "translate(" + moveX + "px" + ",0px) scale(1) translateZ(0px)",
                webkitTransform: "translate(" + moveX + "px" + ",0px) scale(1) translateZ(0px)"
            });
        }
    }, false);

    //实现滚动页面固定特效	
    function getActualTop(element) //获取元素的绝对位置
    {
        var actualTop = element.offsetTop;　　　　
        var current = element.offsetParent; //获取父层元素（Ps:可能不止一个）
        　　　　
        while (current !== null) {　　　　　　
            actualTop += current.offsetTop;　　　　　　
            current = current.offsetParent;　　　　
        }　　　　
        return actualTop;

    }
    var $exceptHitIcon = $(".move--left"); //get the heigth when goto_logo appear
    var goto_top = getActualTop($exceptHitIcon[0]); //get the specific height;
    var closetTitle = -1;
    var originTitle = -1;
    var titles_wrap = $(".title_wrap");
    var titles = $(".title");
    var orginTitle_top = getActualTop(titles_wrap[0]);
    $(window).on("touchmove scroll", function() {
        var Top = $(window).scrollTop() + 40;
        for (var i = 0; i < titles_wrap.length; i++) {

            if (Top > getActualTop(titles_wrap[i])) {
                closetTitle = i; //得到最近一个比scrollTop()大的title
            } else if (Top < orginTitle_top) {
                closetTitle = -1;
            }
        }
        for (var i = 0; i < titles.length; i++) {
            if (i === closetTitle) {
                titles.eq(closetTitle).addClass("fixed");
            } else {
                titles.eq(i).removeClass("fixed");
            }
        }
        if (Top > goto_top) {
            $(".gotoTop").removeClass("goto_hide");
        } else {
            $(".gotoTop").addClass("goto_hide");
        }
    })
    //回到顶部的方法
    $(".gotoTop")[0].addEventListener("touchstart", function() {
        $(window).scrollTop(0);
    }, false);
    /*
		$(".header-sidebar--right2--register").click(function(){
			$(".modal_register").modal({
				position:["0",]
			});	
		})
		*/
    /*
		document.getElementById("simplemodal-close_img").addEventListener("touchstart",function(){
			$(".header_nav_register--img").css("background-position-x",function(){ return parseFloat($(this).css("background-position-x"))+48+"px";}).parent().removeClass("header_nav--fontColor");
		},false);
*/
    /*
		$(".simplemodal-close_img").click(function(){
			$(".header_nav_register--img").css("background-position-x",function(){ return parseFloat($(this).css("background-position-x"))+48+"px";}).parent().removeClass("header_nav--fontColor");
		})*/
    //下述为原来click执行的事件
    /*
		$(".header_nav_Icons").click(
			function(){
				if($(this).parent().hasClass("header_nav--fontColor")==true)		//包含header_nav--fontColor表示次元素被选中
					{
						$(this).css("background-position-x",function(){ return parseFloat($(this).css("background-position-x"))+48+"px";}).parent().removeClass("header_nav--fontColor");						
					}
					else
					{
						$(this).css("background-position-x",function(){ return parseFloat($(this).css("background-position-x"))-48+"px";}).parent().addClass("header_nav--fontColor");
					}
				var $siblings = $("span[class*=--img]").not(this);		//获取其他标签元素
				$siblings.each(function(){
					if($(this).parent().hasClass("header_nav--fontColor")==true)
						{
							$(this).css("background-position-x",function(){ return parseFloat($(this).css("background-position-x"))+48+"px";}).parent().removeClass("header_nav--fontColor");
						switch($(this).parent().attr("class"))
						{
							case "header_nav_channel": 					//attain channel's logo
								$(".header_channel--names").hide();
								break;
							case "header-sidebar--right2--register": 		//attain register's logo

								break;
							case "header_nav--right2--record": 			//attain record's log

								break;
							case "header_nav_search": 				//attain search's logo
								$(".header_searchColumn").removeClass("header_searchColumn--boxshadow");
								break;
						}
						}
					}				
				)
			}
		)
		$(".header_nav_channel").click(function(){
				if($(".header_channel--names").css("display")=="none")
				$(".header_channel--names").show();
				else
				$(".header_channel--names").hide();
			})
		$(".header_nav_search").click(function(){
				if($(".header_searchColumn").hasClass("header_searchColumn--boxshadow")==true)
					$(".header_searchColumn").removeClass("header_searchColumn--boxshadow");
				else
					$(".header_searchColumn").addClass("header_searchColumn--boxshadow");
		});
		 $.modal.defaults.closeClass="modalClose";
		$(".header-sidebar--right2--register").click(function(){
			$(".modal_register").modal({
				position:["0",]
			});	
		})
		$(".simplemodal-close_img").click(function(){
			$(".header_nav_register--img").css("background-position-x",function(){ return parseFloat($(this).css("background-position-x"))+48+"px";}).parent().removeClass("header_nav--fontColor");
		})
		$(".header_nav--right2--record").click(function(){
			
		})
		*/
})