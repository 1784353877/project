
$(function () {
    $('#login').on('click', function () {
        $.ajax({
            url: '../php/login.php',
            async: true,
            type: 'post',
            data: {
                'username':$('#username').val(),
                'password':$('#password').val(),
            },
            success:function (res) {
                console.log(JSON.parse(res));
                var obj = JSON.parse(res);
                if (obj.status == 1) {
                    alert("登录成功，3秒后跳转主页");
                    setTimeout(function () {
                        // window.location.href = "../html/index.html";
                    }, 3000);

                    创建cookie
                    $.cookie('username', $('username').val());
                    // location.href="../html/index.html";
                } else {
                    alert("登录失败，请重新输入");
                }
            }
        });
    })
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
})




