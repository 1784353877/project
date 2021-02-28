window.onload = function () {
    var oInps = document.getElementsByTagName('input');
    var oI = document.getElementsByTagName('i');
    // 手机号码验证
    // 失去焦点时发生
    oInps[0].onblur = function () {
        // 判断手机号格式
        if (/^1[356789]\d{9}$/.test(oInps[0].value)) {
            oI[0].className = "right"
            oI[0].innerText = "手机号输入正确"
        } else {
            oI[0].className = "wrong"
            oI[0].innerText = "手机号输入错误"
        }
    }

    // 注册密码设置
    oInps[1].onblur = function () {
        // 以数字 字母 标点符号 组成
        if (/^[0-9a-zA-Z,.]{8,14}$/.test(oInps[1].value)) {
            oI[1].className = "right"
            oI[1].innerText = "密码输入正确"
        } else {
            oI[1].className = "wrong"
            oI[1].innerText = "密码输入错误"
        }
    }


    // 验证码设置
    oInps[2].onblur = function () {
        var res = verifyCode.validate(oInps[2].value);
        if (res) {
            oI[2].className = "right"
            oI[2].innerText = "验证码输入正确"
        } else {
            oI[2].className = "wrong"
            oI[2].innerText = "验证码输入错误"
        }
    }
}

// ajax表单注册
$(function () {
    $('#register').on('click', function () {
        $.ajax({
            url: '../php/register.php',
            type: post,
            data: {
                'username': $('username').val(),
                'password': $('password').val(),
            },
            success: function (res) {
                console.log(JSON.parse(res));
                var obj = JSON.parse(res);
                if (obj.status == 1) {
                    alert("登录成功，3秒后跳转主页");
                    setTimeout(function () {
                        window.location.href = "login.html";
                        
                        // location.href = 'index.html';
                    }, 3000)
                } else {
                    alert("注册失败，请重新注册");
                }
            }
        })
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