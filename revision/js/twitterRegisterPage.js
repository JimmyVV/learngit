// JavaScript Document<script type="text/javascript" src="../JqueryModel_min_Plugin/jquery.js">
	var reg;
	$(function(){
		//验证fullname
		$("#fullName_part>input").keyup(function(){
			if($(this).val().length>0)
			{
				$(this).siblings("span").removeClass("error").addClass("correct").text("");
			}
			else
			{
				$(this).siblings("span").removeClass("correct").addClass("error").text("fullname is required");
			}
		});
		$("#email_part>input").keyup(function(){
			reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
			if(reg.test($(this).val())==true)
			{
				$(this).siblings("span").removeClass("error").addClass("correct").text("");
			}
			else if($(this).val()=="")
			{
				$(this).siblings("span").removeClass("correct").addClass("error").text("email is required");	
			}
			else
			{
				$(this).siblings("span").removeClass("correct").addClass("error").text("doesn't look like a valid email");
			}
		});
		$("#Password_part>input").keyup(function(){
			if($(this).val().length>0)
			{
				var border = "0%";
				var ps_length = $(this).val().length;
				$(this).siblings("span").removeClass("error").addClass("correct").text("");
				if(ps_length<3)
				{
					border="30%";
				}
				else if(ps_length<6)
				{
					border="60%";
				}
				else
				{
					border="100%";
				}		
				if(!$(".showLength").is(":animated"))
				{
					$(".showLength").animate({						
							width:border
						});
				}
			}
			else{
				$(this).siblings("span").removeClass("correct").addClass("error").text("password is required");
				$(".showLength").animate({						
						width:"0"
					});
			}
		});	
		$("#userName_part>input").keyup(function(){
			reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
			if(reg.test($(this).val())==true)
			{
				$(this).siblings("span").removeClass("error").addClass("correct").text("");
			}
			else if($(this).val()=="")
			{
				$(this).siblings("span").removeClass("correct").addClass("error").text("Username is required");
			}
			else
			{
				$(this).siblings("span").removeClass("correct").addClass("error").text("doesn't look like a valid username");	
			}
		});
		var $language = $(".language");
		var $content  = $(".language_content");
		$(".click_event_icon")
			.toggle(function(){		//循环显示
				$(this).find("a").removeClass("language_Iink").addClass("language_Iink_change");
				$content.show();
			},function(){
				$(this).find("a").removeClass("language_Iink_change").addClass("language_Iink");
				$content.hide();
			});
		
		
	})