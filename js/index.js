

$(function(){
    //nav 效果
    $(".g-nav>li").on("mouseenter",function(){
        $(this).addClass("bgc");
    });
    $(".g-nav>li").on("mouseleave",function(){
        $(this).removeClass("bgc");
    });

    //导航栏效果
    $("#nav .hover").on("mouseenter",function(){
        $(this).addClass("bgc1");
        $(this).find("h3").children("a").css("color","red");
        $(this).find(".part").css("display","block");
    });
    $("#nav .hover").on("mouseleave",function(){
        $(this).removeClass("bgc1");
        $(this).find("h3").children("a").css("color","white");
        $(this).find(".part").css("display","none");
    });

    //轮播图
    $(".swiper-container").on("mouseenter",function(){
        $(".swiper-button-prev").css("display","block");
        $(".swiper-button-next").css("display","block");
        swiper.stopAutoplay();//mySwiper 为上面你swiper实例化的名称
    });
    $(".swiper-container").on("mouseleave",function(){
        $(".swiper-button-prev").css("display","none");
        $(".swiper-button-next").css("display","none");
        swiper.startAutoplay();
    });

    //tab栏切换
    $(".t-top ul li").on("mouseenter",function(){
        $(this).addClass("active").siblings('li').removeClass("active");
        $(".t-bot ul").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
    });

    // //品牌馆效果
    // $(".brand-box>ul li").on("mouseenter",function(){
    //     $(this).children(".brand-mask").css("opacity","1");
    // });
    // $(".brand-box>ul li").on("mouseleave",function(){
    //     $(this).children(".brand-mask").css("opacity","0");
    // });

    //json动态从list中插入图片文字
    $.ajax({
        url:"../json/list.json",
        type:"get",
        dataType:"json",
        success:function(res){
            console.log(res);
            var $ul1 = $(".con-cen .ul1");
            var $ul2 = $(".con-cen .ul2");
            var $ul3 = $(".con-cen .ul3");
            var $ul4 = $(".con-cen .ul4");
            var $ul5 = $(".con-cen .ul5");
            var $ul6 = $(".con-cen .ul6");
            var $ul7 = $(".con-cen .ul7");
            var $ul8 = $(".con-cen .ul8");
            for(var i=0;i<res.list1.length;i++){
                var $aaa = $("<a></a>");
                $(".con-cen .ul1 .float").on("click",function(){
                    $.cookie("index",$(this).index());
                });
                $aaa.attr("href","detail.html");
                $aaa.attr("target","_blank");
                $aaa.addClass("clear");
                $aaa.addClass("float");
                $ul1.append($aaa);
                var $Li = $("<li></li>");
                $aaa.append($Li);
                var $P = $("<p></p>").addClass("pic");
                $Li.append($P);
                $P.append(res.list1[i].url);

                var $h3 = $("<h3></h3>");
                $Li.append($h3);
                var $aa = $("<a></a>").attr("href","#");
                $h3.append($aa);
                ($aa).append(res.list1[i].p);
                
                var $span = $("<span></span>").addClass("price");
                var $Span = $("<span></span>").addClass("number")
                $h3.append($span);
                $h3.append($Span);
                $span.append(res.list1[i].span);
                $Span.append(res.list1[i].b);
            }
            for(var i=0;i<res.list2.length;i++){
                var $aaa = $("<a></a>");
                $aaa.attr("href","detail.html");
                $aaa.addClass("clear");
                $aaa.addClass("float");
                $ul2.append($aaa);
                var $Li = $("<li></li>");
                $aaa.append($Li);
                var $P = $("<p></p>").addClass("pic");
                $Li.append($P);
                var $a = $("<a></a>").attr("href","#");
                $P.append($a);
                $a.append(res.list2[i].url);
                var $h3 = $("<h3></h3>");
                $Li.append($h3);
                var $aa = $("<a></a>").attr("href","#");
                $h3.append($aa);
                ($aa).append(res.list2[i].p);
                var $span = $("<span></span>").addClass("price");
                var $Span = $("<span></span>").addClass("number")
                $h3.append($span);
                $h3.append($Span);
                $span.append(res.list2[i].span);
                $Span.append(res.list2[i].b);
            }
            for(var i=0;i<res.list3.length;i++){
                var $aaa = $("<a></a>");
                $aaa.attr("href","detail.html");
                $aaa.addClass("clear");
                $aaa.addClass("float");
                $ul3.append($aaa);
                var $Li = $("<li></li>");
                $aaa.append($Li);
                var $P = $("<p></p>").addClass("pic");
                $Li.append($P);
                var $a = $("<a></a>").attr("href","#");
                $P.append($a);
                $a.append(res.list3[i].url);
                var $h3 = $("<h3></h3>");
                $Li.append($h3);
                var $aa = $("<a></a>").attr("href","#");
                $h3.append($aa);
                ($aa).append(res.list3[i].p);
                var $span = $("<span></span>").addClass("price");
                var $Span = $("<span></span>").addClass("number")
                $h3.append($span);
                $h3.append($Span);
                $span.append(res.list3[i].span);
                $Span.append(res.list3[i].b);
            }
            for(var i=0;i<res.list4.length;i++){
                var $aaa = $("<a></a>");
                $aaa.attr("href","detail.html");
                $aaa.addClass("clear");
                $aaa.addClass("float");
                $ul4.append($aaa);
                var $Li = $("<li></li>");
                $aaa.append($Li);
                var $P = $("<p></p>").addClass("pic");
                $Li.append($P);
                var $a = $("<a></a>").attr("href","#");
                $P.append($a);
                $a.append(res.list4[i].url);
                var $h3 = $("<h3></h3>");
                $Li.append($h3);
                var $aa = $("<a></a>").attr("href","#");
                $h3.append($aa);
                ($aa).append(res.list4[i].p);
                var $span = $("<span></span>").addClass("price");
                var $Span = $("<span></span>").addClass("number")
                $h3.append($span);
                $h3.append($Span);
                $span.append(res.list4[i].span);
                $Span.append(res.list4[i].b);
            }
            for(var i=0;i<res.list5.length;i++){
                var $aaa = $("<a></a>");
                $aaa.attr("href","detail.html");
                $aaa.addClass("clear");
                $aaa.addClass("float");
                $ul5.append($aaa);
                var $Li = $("<li></li>");
                $aaa.append($Li);
                var $P = $("<p></p>").addClass("pic");
                $Li.append($P);
                var $a = $("<a></a>").attr("href","#");
                $P.append($a);
                $a.append(res.list5[i].url);
                var $h3 = $("<h3></h3>");
                $Li.append($h3);
                var $aa = $("<a></a>").attr("href","#");
                $h3.append($aa);
                ($aa).append(res.list5[i].p);
                var $span = $("<span></span>").addClass("price");
                var $Span = $("<span></span>").addClass("number")
                $h3.append($span);
                $h3.append($Span);
                $span.append(res.list5[i].span);
                $Span.append(res.list5[i].b);
            }
        }
    })

    //友情链接收起展开

    $(".href #href-up").on("click",function(){
        $(this).children().text("展开友情链接︿");
        $(".href-block").stop().slideToggle();
    });

    //返回顶部
    $(".arrow-up").on("click", function(){
        $('body,html').animate({scrollTop : 0}, 500);
        return false;
    });

    //侧边栏滑动
    $(".qq").on("mouseenter",function(){
        $(this).stop().animate({"right":0},500);
    })
    $(".qq").on("mouseleave",function(){
        $(this).stop().animate({"right":"-175px"},500);
    })

    //用户登录后的效果
    $.cookie("username");
    console.log($.cookie("username"));
    if($.cookie("username")!=undefined){
        $("#top p span").text($.cookie("username")+',欢迎您回来');
        $("#top p .user").text("用户中心");
        $("#top p .out").text("退出");
        $(".b-right .no-login").text($.cookie("username"));
        $(".b-right .slide-btn").children().hide();
        var $a1=$("<a></a>");
        var $a2=$("<a></a>");
        var $a3=$("<a></a>");
        $(".b-right .slide-btn").append($a1);
        $a1.addClass("create-a");
        $(".b-right .slide-btn").append($a2);
        $a2.addClass("create-a");
        $(".b-right .slide-btn").append($a3);
        $a3.addClass("create-a");
        var $span1=$("<span></span>");
        var $span2=$("<span></span>");
        var $span3=$("<span></span>");
        $a1.append($span1);
        $span1.addClass("create-span");
        $a2.append($span2);
        $span2.addClass("create-span");
        $a3.append($span3);
        $span3.addClass("create-span");
        $span1.text("待付款");
        $span2.text("待发货");
        $span3.text("已完成");
        var $b1=$("<b></b>");
        var $b2=$("<b></b>");
        var $b3=$("<b></b>");
        $a1.append($b1);
        $b1.addClass("create-b");
        $a2.append($b2);
        $b2.addClass("create-b");
        $a3.append($b3);
        $b3.addClass("create-b");
        $b1.text("0");
        $b2.text("0");
        $b3.text("0");
    }
})

