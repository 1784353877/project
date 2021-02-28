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




    var $index = $.cookie("$index");
    console.log($index);
    $.ajax({
        type: "get",
        url: "../json/cart.json",
        dataType: "json",
        success: function (res) {
            console.log(res.cart);
            var cartnum = $.cookie("cartnum").split(",");
            console.log(cartnum);
            for (var i = 0; i < cartnum.length; i++) {
                console.log(cartnum[i]);
                var $tr = $("<tr></tr>");
                $tr.addClass("cart_item");
                $("tbody").append($tr);
                var $tdpad = $("<td></td>");
                $tdpad.addClass("padding1");
                $tr.append($tdpad);
                var $p = $("<p></p>");
                $p.addClass("ware_pic");
                $tdpad.append($p);
                var $aimg = $("<a></a>");
                $p.append($aimg);
                var $imgsrc = $("<img>");
                $aimg.append($imgsrc);
                $imgsrc.attr("src", res.cart[cartnum[i]].src);

                var $h3 = $("<h3></h3>");
                $tdpad.append($h3);
                var $h3a = $("<a></a>");
                $h3.append($h3a);
                $h3a.attr("href", "detail.html");
                $h3a.text(res.cart[cartnum[i]].tit);

                var $h3span = $("<span></span>");
                $h3.append($h3span);
                $h3span.text(res.cart[cartnum[i]].color);

                var $tda = $("<td></td>");
                $tda.addClass("align2");
                $tr.append($tda);
                var $tdaspan = $("<span></span>");
                $tda.append($tdaspan);
                $tdaspan.text(res.cart[cartnum[i]].price);

                var $tdal = $("<td></td>");
                $tdal.addClass("align2");
                $tr.append($tdal);
                var $red = $("<input type='button' value='-'>");
                var $num = $("<input type='text' value='1'>");
                var $add = $("<input type='button' value='+'>");
                $red.addClass("addBtn min");
                $num.addClass("join-money min");
                $add.addClass("plus");
                $tdal.append($red);
                $tdal.append($num);
                $tdal.append($add);

                //获取数量
                var $cart = $.cookie("cart" + cartnum[i]);
                console.log($cart);
                $num.val($cart);

                var $tdali = $("<td></td>");
                $tdali.addClass("align2");
                $tr.append($tdali);
                var $tdalispan = $("<span></span>");
                $tdalispan.addClass("org");
                $tdali.append($tdalispan);
                //$tdalispan.text();
                var $tdalig = $("<td></td>");
                $tdalig.addClass("align2");
                $tr.append($tdalig);
                var $tdaliga = $("<a href= 'javascript:void(0)'></a>");
                $tdaliga.addClass("del");
                $tdalig.append($tdaliga);
                $tdaliga.text("删除");

                //获取数量算小计
                //var $unit = $(".cart_item").children("td").eq(1).children("span").text();
                //console.log($unit);
                //var $rate = $(".cart_item").children("td").eq(3).children("span");
                $tdalispan.text(parseInt($tdaspan.text()) * parseInt($num.val()));

                //计算总价函数
                function setTotal() {
                    var sum = 0;
                    $(".cart_item").each(function () {
                        var num = parseInt($(this).children("td").eq(2).children("input").eq(1).val());
                        var price = parseInt($(this).children("td").eq(1).children("span").text());
                        sum += num * price;
                    });
                    $(".total").children("span").text(sum.toFixed(2));
                }
            }




            //数量加
            $(".plus").on("click", function () {
                var value = $(this).prev("input");
                value.val(parseInt(value.val()) + 1);
                setTotal();
                //小计
                var $price = $(this).parent('td').prev('td').children("span").text();
                //console.log($price);
                var $cal = $(this).parent('td').next('td').children("span")
                var $values = $(this).prev("input").val();
                $cal.text(parseInt($price) * parseInt($values));
                //console.log($cal.text());
            });
            //数量减
            $(".addBtn").on("click", function () {
                var value = $(this).next("input");
                value.val(parseInt(value.val()) - 1);
                if (value.val() <= 0) {
                    value.val(parseInt(value.val()) + 1);
                }
                setTotal()
                //小计
                var $price = $(this).parent('td').prev('td').children("span").text();
                //console.log($price);
                var $cal = $(this).parent('td').next('td').children("span");
                var $values = $(this).next("input").val();
                $cal.text(parseInt($price) * parseInt($values));

            });

            setTotal();


            //删除商品
            $(".del").on("click", function () {
                var num = [];
                location.reload();
                //$(this).parent("td").parent("tr").remove();
                num.push($.cookie("cartnum"));
                console.log(num);
                var nums = num[0].split(',');
                console.log(nums);
                nums.splice($(this).parent("td").parent("tr").index() - 1, 1);
                // nums.splice($(this).parent("td").parent("tr").index() , 1);

                console.log(nums);
                $.cookie("cartnum", nums);
                setTotal();
            });
        }
    })
});