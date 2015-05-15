$(function(){
		$(".head_nav li").bind(
		{
			mouseover:function(){				
				$(this).css("color","#0084B4");									
			},
			mouseout:function(){
				$(this).css("color","#66757f");									
			}
		})	
		$("#sendTwitter_input_newText").keyup(function(){
			var original = $(this)[0];
			var num = $("#countNum_2")[0];
			num.innerHTML = 140-original.value.length;	
			var $sendBt = $("#sendBt_2");
			if(original.value.length>0)
			{
				$sendBt.removeAttr('disabled').addClass("sentBt-onabled");
			}
			else
			{
				$sendBt.attr('disabled','disabled').removeClass("sentBt-onabled");	
			}		
		})
		$("#window_content_newText").keyup(function(){
			var original = $(this)[0];
			var num = $("#countNum")[0];
			num.innerHTML = 140-original.value.length;
			var $sendBt = $("#sendBt");
			if(original.value.length>0)
			{
				$sendBt.removeAttr('disabled').addClass("sentBt-onabled");
			}
			else
			{
				$sendBt.attr('disabled','disabled').removeClass("sentBt-onabled");	
			}
		})
		var $modal=$(".modal");
		$(".close_icon").click(function(){
			$modal.css("display","none");
		})
		$(".head_rightAction_sendText").click(function(){
			$modal.css("display","block");
		})
		//				show the prompt
		var $privacy = $(".privacy");
		$(".head_rightAction_Btprivacy").mouseover(function(){		
			$privacy.css("display","block");
		}).mouseout(function(){
			$privacy.css("display","none");
		}).click(function(){
			var $dropmenu=$(".dropmenu");
			if($dropmenu.css("display")=="block"){
				$dropmenu.css("display","none");
				$(this).mouseover(function(){$privacy.css("display","block");});
			}else{
				$dropmenu.css("display","block");
				$(this).unbind("mouseover");
				$privacy.css("display","none");
			}
		})
		$(".icon_bt").mouseover(function(){
			$(this).siblings("div").css("display","block");
		}).mouseout(function(){
			$(this).siblings("div").css("display","none");
		});
		var $portrait = $(".portrait");
		$(".addPortrait").mouseover(function(){
			$portrait.css("display","block");
		}).mouseout(function(){
			$portrait.css("display","none");
		})
		var $instant = $("#sendTwitter_instant");
		var $then = $("#sentTwitter_click");
		$("#sendTwitter_text").focus(function(){
			$then.css("display","block");
			$instant.css("display","none");
		});
		$("#sendTwitter_input_newText").blur(function(){
			if($(this)[0].value.length>0);
			else{
				$then.css("display","none");
				$instant.css("display","block");
			}
		})
		$(".content_middle_content>li").mouseover(function(){
			$(this).find(".translation_text").css("display","inline-block").parent().css("color","#A3ABB2");
		}).mouseout(function(){
			$(this).find(".translation_text").css("display","none").parent().css("color","#ccd6dd");
		})
	})