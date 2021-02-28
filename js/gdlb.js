$(function () {
	imgscrool('#ban1');
});
//函数
function imgscrool(obj) {
	var moving = false;
	var i = 0;
	var clone = $(obj + " .banner .img li").first().clone(true);
	$(obj + " .banner .img").append(clone);
	var size = $(obj + " .banner .img li").size();
	for (var j = 0; j < size - 1; j++) {
		$(obj + " .banner .num").append("<li></li>");
	}
	$(obj + " .banner .num li").first().addClass("on");
	/*鼠标划入出现圆点*/
	if ($(obj + " .banner .num li")) {
		$(obj + " .banner .num li").on("click", function () {
			var index = $(this).index();
			i = index;
			$(obj + " .banner .img").stop().animate({
				left: -index * 528
			}, 2000)
			$(this).addClass("on").siblings().removeClass("on")
		})
	};

	/*自动轮播*/
	var t = setInterval(function () {
		i++;
		move();
	}, 2000)

	/*对banner定时器的操作*/
	$(obj + " .banner").hover(function () {
		clearInterval(t);
	}, function () {
		t = setInterval(function () {
			i++;
			move();
		}, 2000)
	})



	if ($(obj + " .banner .btn_l")) {
		/*向左的按钮*/
		$(obj + " .banner .btn_l").stop(true).click(function () {
			if (moving) {
				return;
			};
			moving = true;
			i--;
			move();
		})
		/*向右的按钮*/
		$(obj + " .banner .btn_r").stop(true).click(function () {
			if (moving) {
				return;
			}
			moving = true;
			i++;
			move();
		})
	};

	function move() {
		if (i == size) {
			$(obj + " .banner  .img").css({
				left: 0
			})
			i = 1;
		}
		// 修改轮播每屏宽度
		if (i == -1) {
			$(obj + " .banner .img").css({
				left: -(size - 1) * 528
			})
			i = size - 2;
		}
		$(obj + " .banner .img").stop(true).delay(200).animate({
			left: -i * 528
		}, 1500, function () {
			moving = false;
		})
		if (i == size - 1) {
			$(obj + " .banner .num li").eq(0).addClass("on").siblings().removeClass("on")
		} else {
			$(obj + " .banner .num li").eq(i).addClass("on").siblings().removeClass("on")
		}
	}
}