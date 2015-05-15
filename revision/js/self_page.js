// JavaScript Document<script type="text/javascript" src="../JqueryModel_min_Plugin/jquery.js">
	$(function(){
		var $language = $(".language");
		var $content =  $(".language_content");
		$(".click_event_icon")
			.toggle(function(){		//循环显示
				$(this).find("a").removeClass("language_Iink").addClass("language_Iink_change");
				$content.show();
				$(this).find(".arrow").show();
				$language.unbind("mouseover").unbind("mouseout");
			},function(){
				$(this).find("a").removeClass("language_Iink_change").addClass("language_Iink");
				$content.hide();
				$language.bind({
					mouseover:function(){$(this).find(".arrow").show();},
					mouseout:function(){$(this).find(".arrow").hide();}
							});
			});
		
		$language.bind({
			mouseover:function(){$(this).find(".arrow").show();},
			mouseout:function(){$(this).find(".arrow").hide();}
		});
		
		
		
	})