$(function () {
	imgscrool1('#ban2');
})

//函数
function imgscrool1(obj) {
	var moving = false;
	var width = $(obj + " .banner1 .img1 img").width();
	var i = 0;
	var clone = $(obj + " .banner1 .img1 li").first().clone(true);
	$(obj + " .banner1 .img1").append(clone);
	var size = $(obj + " .banner1 .img1 li").size();
	for (var j = 0; j < size - 1; j++) {
		$(obj + " .banner1 .num1").append("<li></li>");
	}
	$(obj + " .banner1 .num1 li").first().addClass("on");

	/*鼠标划入圆点*/
	if ($(obj + " .banner1 .num1 li")) {

		$(obj + " .banner1 .num1 li").hover(function () {
			var index = $(this).index();
			i = index;
			$(obj + " .banner1 .img1").stop().animate({
				left: -index * width
			}, 1000)
			$(this).addClass("on").siblings().removeClass("on")
		})
	};

	/*自动轮播*/
	var t = setInterval(function () {
		i++;
		move1();
	}, 2000)

	/*对banner定时器的操作*/
	$(obj + " .banner1").hover(function () {
		clearInterval(t);
	}, function () {
		t = setInterval(function () {
			i++;
			move1();
		}, 2000)
	})


	if ($(obj + " .banner1 .btn_l")) {

		/*向左的按钮*/
		$(obj + " .banner1 .btn_l").stop(true).click(function () {
			if (moving) {
				return;
			};
			moving = true;
			i--
			move1();
		})

		/*向右的按钮*/
		$(obj + " .banner1 .btn_r").stop(true).click(function () {
			if (moving) {
				return;
			}
			moving = true;
			i++
			move1()
		})

	};

	function move1() {

		if (i == size) {
			$(obj + " .banner1  .img1").css({
				left: 0
			})
			i = 1;
		}
		// 修改轮播每屏宽度
		if (i == -1) {
			$(obj + " .banner1 .img1").css({
				left: -(size - 1) * width
			})
			i = size - 2;
		}
		$(obj + " .banner1 .img1").stop(true).delay(200).animate({
			left: -i * width
		}, 1000, function () {
			moving = false;
		})

		if (i == size - 1) {
			$(obj + " .banner1 .num1 li").eq(0).addClass("on").siblings().removeClass("on")
		} else {
			$(obj + " .banner1 .num1 li").eq(i).addClass("on").siblings().removeClass("on")
		}
	}
}