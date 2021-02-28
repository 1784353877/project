$(function () {
    //nav 效果
    $(".g-nav>li").on("mouseenter", function () {
        $(this).addClass("bgc");
    })
    $(".g-nav>li").on("mouseleave", function () {
        $(this).removeClass("bgc");
    })

    //显示导航栏效果
    $(".goods .sort").on("click", function () {
        $(this).siblings("#nav").slideToggle();
    })

    //导航栏效果
    $("#nav .hover").on("mouseenter", function () {
        $(this).addClass("bgc1");
        $(this).find("h3").children("a").css("color", "white");
        $(this).find(".part").css("display", "block");
    });
    $("#nav .hover").on("mouseleave", function () {
        $(this).removeClass("bgc1");
        $(this).find("h3").children("a").css("color", "black");
        $(this).find(".part").css("display", "none");
    });

    //Tab切换
    $("#tab-goods").on("click", function () {
        $(this).addClass("tab-active").siblings("li").removeClass("tab-active");
        $(".cont-all").show().siblings(".serve").hide();
        $(".det-img").show().siblings(".serve").hide();
    });
    $("#tab-serve").on("click", function () {
        $(this).addClass("tab-active").siblings("li").removeClass("tab-active");
        $(".serve").show().siblings(".cont-all").hide();
        $(".serve").show().siblings(".det-img").hide();
    });


    //返回顶部
    $(".arrow-up").on("click", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //侧边栏滑动
    $(".qq").on("mouseenter", function () {
        $(this).stop().animate({
            "right": 0
        }, 500);
    })
    $(".qq").on("mouseleave", function () {
        $(this).stop().animate({
            "right": "-175px"
        }, 500);
    })

    //用户登录后的效果
    $.cookie("username");
    console.log($.cookie("username"));
    if ($.cookie("username") != undefined) {
        $("#top p span").text($.cookie("username") + ',欢迎您回来');
        $("#top p .user").text("用户中心");
        $("#top p .out").text("退出");
    }

    //数量加减
    var t = $(".join-money");
    $(".plus").click(function () {
        t.val(parseInt(t.val()) + 1); //点击加号输入框数值加1
        //显示总金额
    });
    $(".min").click(function () {
        t.val(parseInt(t.val()) - 1); //点击减号输入框数值减1
        if (t.val() <= 0) {
            t.val(parseInt(t.val()) + 1); //最小值为1
        }
    })

    //根据索引进行json传值
    $.cookie("index");
    var $index = $.cookie("index");
    $.ajax({
        url: "../json/detail.json",
        type: "get",
        dataType: "json",
        success: function (res) {
            console.log(res);
            console.log(res.list[$index]);


            $(".current").children().eq(3).text(res.list[$index].a);
            $(".current").children().eq(4).text(res.list[$index].span);
            $(".goods-name").text(res.list[$index].p);

            for (var i = 0; i < res.list[$index].url.length; i++) {
                var $img = $(".animation03").children().eq(i).children("div").children("img");
                var $bigimg = $(".images-cover").children("img");
                $bigimg.attr("src", res.list[$index].url[0]);
                $bigimg.css("margin-left", "-210px");
                $bigimg.attr("width", "420px");
                var $show = res.list[$index].url[i];
                $img.attr("src", $show);
            }
            $(".pre").text(res.list[$index].price);

            $(".faddish").children().find("em").text(res.list[$index].num);

            $(".suggest-pre").children().text(res.list[$index].suggest);

            $(".art-no").children("b").text(res.list[$index].goods);

            $(".activity").children("b").text(res.list[$index].active);

            $("<p></p>");
            $(".select-color").append($("<p></p>"));
            $("<a></a>");
            $(".select-color").children("p").append($("<a></a>"));
            $(".select-color").children("p").children("a").text(res.list[$index].color);

            $(".size-num").children("span").eq(0).text(res.list[$index].size);

            $(".head1").children("a").text(res.list[$index].store);

            for (var i = 0; i < res.list[$index].look.length; i++) {
                var $aa = $(".gs-bot").children("ul").children("li").eq(i).children("a");
                $aa.append(res.list[$index].look[i]);
            }

            for (var i = 0; i < res.list[$index].pri.length; i++) {
                var $span = $(".gs-bot").children("ul").children("li").eq(i).children("span");
                $span.text(res.list[$index].pri[i]);
            }

            for (var i = 0; i < res.list[$index].sale1.length; i++) {
                var $pa = $(".new-goods").children("ul").children("li").eq(i).children("span").eq(0).children("a");
                $pa.append(res.list[$index].sale1[i]);
            }

            for (var i = 0; i < res.list[$index].sale2.length; i++) {
                var $pa = $(".hot-goods").children("ul").children("li").eq(i).children("span").eq(0).children("a");
                $pa.append(res.list[$index].sale2[i]);
            }
            $(".det-img").prepend(res.list[$index].detail);
        }
    });

    //加入购物车传值
    $(".submit").children().eq(1).on("click", function () {
        var $num = $(".join-money").val();
        console.log($num);
        $.cookie("cart" + $index, $num);
        if ($.cookie("cartnum")) {
            if ($.cookie("cartnum").indexOf($index) == -1) {
                var $cartnum1 = $.cookie("cartnum").split(',');
                $cartnum1.unshift($index);
                $.cookie("cartnum", $cartnum1);
            }
        } else {
            var cartnum = [];
            cartnum.unshift($index);
            $.cookie("cartnum", cartnum);
        }
    })
})