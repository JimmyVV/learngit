 $(function() {
            // 添加鼠标悬浮提示效果
            var addAnimation = function(ele, classname1, classname2) {
                    for (var i = 0; i < ele.length; i++) {
                        if (!$(ele[i]).hasClass(classname1)) {                            
                            $(ele[i]).on({
                                mouseover: function() {
                                    $(this).addClass(classname2)
                                },
                                mouseout: function() {
                                    $(this).removeClass(classname2)
                                }
                            });
                        }else{
                            $(ele[i]).removeClass(classname2);
                            $(ele[i]).off("mouseover").off("mouseout");
                        }
                    }
                } 
                           // 添加切换样式效果            
            // $(".pagination a").not("[role='change-page']").on("click",changeClass(event,"active"));
            //给首页和土豪榜添加样式 
            addAnimation($("[data-toggle='navigation']"), "active", "in");
            var $mysending = $("#sending-table");
            $(".sending").on("click", function() {
                if ($mysending.css("display") === "none") {
                    $mysending.show();
                } else {
                    $mysending.hide();
                }
            });
            var $commodity = $(".recommend").find("li:not(:first-child):not(:last-child)").children("div");
            $(".recommend ul").on({
                mouseenter: function(e) {
                    $commodity.show();
                },
                mouseleave: function(e) {
                    $commodity.hide();
                }
            });
            // 登录的模态窗口
            $("[role='login']").on("click",function(){
              $("#login").modal({overlayClose:true,
                onOpen: function (dialog) {
                    dialog.overlay.fadeIn("fast", function () {  //罩层载入
                              dialog.data.hide();           //数据载入动画
                                   dialog.container.fadeIn('fast', function () { //内容区载入
                                        dialog.data.fadeIn('normal');    //数据显示动画
                                                                                          });
                                                                           });
                                                                 },
                          overlayCss:{backgroundColor:"#000"},
                          opacity:60
                                });
            });
            $("#for-login").on("click",function(){
                 $.modal.close();
                 $("#login").modal({overlayClose:true,
                onOpen: function (dialog) {
                    dialog.overlay.fadeIn("fast", function () {  //罩层载入
                              dialog.data.hide();           //数据载入动画
                                   dialog.container.fadeIn('fast', function () { //内容区载入
                                        dialog.data.fadeIn('normal');    //数据显示动画
                                                                                          });
                                                                           });
                                                                 },
                          overlayCss:{backgroundColor:"#000"},
                          opacity:60
                                });
            })
            $("#for-signin").on("click",function(){
                $.modal.close();
                 $("#signin").modal({overlayClose:true,
                        onOpen: function (dialog) {
                    dialog.overlay.fadeIn("fast", function () {  //罩层载入
                              dialog.data.hide();           //数据载入动画
                                   dialog.container.fadeIn('fast', function () { //内容区载入
                                        dialog.data.fadeIn('normal');    //数据显示动画
                                                                                          });
                                                                           });
                                                                 },
                          overlayCss:{backgroundColor:"#000"},
                          opacity:60
                                });     
            })
            $("[role='register']").on("click",function(){
                     $("#signin").modal({overlayClose:true,
                        onOpen: function (dialog) {
                    dialog.overlay.fadeIn("fast", function () {  //罩层载入
                              dialog.data.hide();           //数据载入动画
                                   dialog.container.fadeIn('fast', function () { //内容区载入
                                        dialog.data.fadeIn('normal');    //数据显示动画
                                                                                          });
                                                                           });
                                                                 },
                          overlayCss:{backgroundColor:"#000"},
                          opacity:60
                                });
            });
            // 给pagination添加样式变化事件                 
            $(".pagination a").not("[role='change-page']").on("click",function(){
                var $target = $(this);
                    if(!$target.hasClass("active")){
                        $target.addClass("active");                        
                        $target.parent().siblings().children("a").removeClass("active");                        
                    }     
            });
            // 前进后退的切换
            // $("[aria-label='Previous']").on("click",function(){
            //     $(".pagination a.active")
            // })
            // 侧边栏
            $(window).scroll(function(){
                var $aside=$("aside");
                if($(this).scrollTop()>=136){
                    $aside.css({
                        position:"fixed",
                        top:"100px"
                    });
                }else{
                    $aside.css({
                        position:"absolute",
                        top:"236px"
                    });
                }
                
            });           
            // 榜单移动效果
            var chartsMove = function(){
                var $charts=$("#charts");                           
                if($charts.position().left+$charts.width()>$charts.parent().width())
                {
                    $charts.css({
                        left:function(){
                            return parseInt($(this).css("left"))-1+"px"
                        }
                    });
                }else{
                    $charts.css({
                        left:"0px"
                    })
                }

            };    
                   
            var chartsMoving = setInterval(chartsMove,1000/60);
            $(".charts-containter").on({
                mouseover:function(){
                    clearInterval(chartsMoving);
                },
                mouseout:function(){
                    chartsMoving=setInterval(chartsMove,1000/60)
                }
            });
            $("[role='aside']").on("click",function(){
                var text = $(this).attr("title");
                $("#commodity-name").text(text);
            });            
        // signin验证   
        $.ajaxSetup({
            dataType:"JSON"      
        })
        var globalPrompt = false;          
        $("#signin").find("[role='nickname']").on("blur",function(){
                globalPrompt = false;
                var signment = false;
                var content = $(this).val();
                var $prompt = $(this).parent().next("span");
                var reg1 =/^[\u4e00-\u9fa5A-Za-z0-9-_]*$/;
                var reg2 =/^[\u4e00-\u9fa5A-Za-z0-9-_]{4,12}$/;    
                if(content==""||content==null){                    
                    $prompt.text("输入值不能为空！");                                                            
                }else if(!reg1.test(content)){
                    $prompt.text("输入只能中英文，数字，下划线和减号！");
                }else if(!reg2.test(content)){
                    $prompt.text("输入长度只能在4~12位！");
                }else{
                    // 执行ajax操作
                    $.ajax({
                        url:"",
                        type:"post",
                        data:{
                            nickname:content,
                        },
                        success:function(data){
                             // if(!data.success){
                                 $prompt.text(data.mes);
                                 console.log($(this).parent());
                             // }
                             signment=true;
                        }
                    })
                    // 判断ajax是否通过
                    if(signment){
                        $prompt.text("");                        
                        globalPrompt = true;
                    }
                }
        })
        // 验证邮箱登录
        $("#signin").find("[role='email']").on("blur",function(){
            globalPrompt = false;
            var signment =false;
            var content = $(this).val();
            var $prompt = $(this).parent().next("span");
            var reg1=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if(content==""||null){
                $prompt.text("输入值不能为空！"); 
            }else if(!reg1.test(content)){
                $prompt.text("邮箱格式不正确!"); 
            }else{
                // 执行ajax操作
                 $.ajax({
                        url:"",
                        type:"post",
                        data:{                            
                            email:email
                        },
                        success:function(data){
                             if(!data.success){
                                 $prompt.text(data.mes);
                             }
                             signment=true;
                        }
                    })
                 // 判断ajax是否通过
                    if(signment){
                        $prompt.text("");                        
                        globalPrompt = true;
                    }   
            }
        })
        // 密码格式验证
        $("#signin").find("[role='password']").on("blur",function(){
            globalPrompt = false;
            var signment =false;
            var content = $(this).val();
            var $prompt = $(this).parent().next("span");
            var reg1= /^[a-zA-Z]\w*$/;
            var reg2= /^[a-zA-Z]\w{5,15}$/
            if(content==""||null){
                $prompt.text("密码不能为空！"); 
            }else if(!reg1.test(content)){
                $prompt.text("密码以字母开头，只能包含字母,数字,下划线!"); 
            }else if(!reg2.test(content)){
                $prompt.text("输入长度只能在6~16位！");
            }else{
                 $.ajax({
                        url:"",
                        type:"post",
                        data:{
                            password1:content                            
                        },
                        success:function(data){
                             if(!data.success){
                                 $prompt.text(data.mes);
                             }
                             signment=true;
                        }
                    })
                 // 判断ajax是否通过
                    if(signment){
                        $prompt.text("");                        
                        globalPrompt = true;
                    }   
            }
        })
        // 密码一致性验证
        $("#signin").find("[role='confirm']").on("blur",function(){
            globalPrompt = false;
            var signment =false;
            var $prompt = $(this).parent().next("span");
            var content1 = $(this).val();            
            var content2 =  $("#signin").find("[role='password']").val();
            if(content1!=content2){
                $prompt.text("两次密码输入不一致"); 
            }else{
                $.ajax({
                    url:"",
                        type:"post",
                        data:{
                            password1:content1,
                            password2:content2
                        },
                        success:function(data){
                             if(!data.success){
                                 $prompt.text(data.mes);
                             }
                             signment=true;
                        }
                })                         
                if(signment){
                        $prompt.text("");                        
                        globalPrompt = true;
                    }   
            }
        });
        $("#signin").find("[type='submit']").on("click",function(){
            if(!globalPrompt){
                return false;
            }
        })
         // signin验证 
         // login验证
         $("#login").find("[type='submit']").on("click",function(){
            globalPrompt = false;
            
         });
         $("#login").find("[role='password']").on("blur",function(){
            globalPrompt = false;
            
         })
         // login验证
    })