// JavaScript Document<script type="text/javascript" src="../JqueryModel_min_Plugin/jquery.js">
	$(function(){
		var $language = $(".language");
		$language
			.toggle(function(){		//循环显示
				$(this).find("a").removeClass("language_Iink").addClass("language_Iink_change");
				$(".language_content").show();
				$(this).find(".arrow").show();
				$language.unbind("mouseover").unbind("mouseout");
			},function(){
				$(this).find("a").removeClass("language_Iink_change").addClass("language_Iink");
				$(".language_content").hide();
			});
		$(".language_content li").hover(function(){
			$(this).addClass("li_bg_color");
			$(this).find("a").addClass("a_color");
		},function(){
			$(this).removeClass("li_bg_color");
			$(this).find("a").removeClass("a_color");
		});
		$(".change_content a:eq(0)").hover(function(){
			$(this).css({
				"text-decoration":"none"
			})
		},function(){
			$(this).css({
				"text-decoration":"underline"
			})
		})
		$("input[name=log_in_account]").keyup(function(){
			if($(this).val()=="")
			{
				$(this).attr();
				$(this).css({
					"color":"rgb(178, 173, 173)",
					"font-size":"12px"
				})
			}
		});
		var i = 0;
		function changeBg(){
			i++;		
			if(i==6)
				i=0;
			$(".bg>img").attr("src","images/bg"+(i+1)+".jpg").hide().fadeIn("slow");
			$(".change_content>div").eq(i).fadeIn("slow").siblings().hide();
		}
		setInterval(changeBg,3000);
	})