$(function(){
	$(".control").fullpage({
		//显示每一屏的颜色,"#282923"
		sectionsColor:  ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
		verticalCentered:false,
		navigation: true,
		afterLoad:function(link,index){//在每一屏幕加载结束触发
			//加载完第x屏后，显示动画
			$(".screen0"+index).addClass("now")

		},
		onLeave:function(index,nextIndex,direction){
			if((index===2&&nextIndex===3)||(index===3&&nextIndex===4)||(index===5&&nextIndex===6)){
				$(".screen0"+index).addClass("leave")
			}
		}
	})
	//点击“继续”，进入下一屏
	$(".next").on("click",function(){
		$.fn.fullpage.moveSectionDown()
	})

	//第二屏的沙发完成动画（掉落），第三屏的沙发显示
	$(".screen02 .sofa2").on("webkitAnimationEnd",function(){
		$(".sofa3").css("opacity","1")
	})

	//第三屏的沙发完成动画（掉落），(1)第四屏的沙发显示(2)购物车开始移动
	$(".screen03 .sofa3").on("webkitAnimationEnd",function(){
		$(".sofa4").css("opacity","1")
		$(".cartSofa").addClass("go")
	})
	//第四屏购物车移动至消失后，文字改变、电脑以及地址开始显示
	$(".cartSofa").on("webkitAnimationEnd",function(){
		$(".screen04").removeClass("now")
		$(".screen04").addClass("show")
	})

	// 第五屏中鼠标点击后，沙发从上掉下来
	$(".mouse").on("webkitTransitionEnd",function(){
		$(".sofa5").addClass("dropdown5")
		$(".paper").addClass("paperUp")
		
	})

	$(".box").on("webkitTransitionEnd",function(){
		$(".box").addClass("boxDown")
	})

	$(".box").on("webkitAnimationEnd",function(){
		$(".screen06").addClass("drive")
	})

	$(".buyer").on("webkitTransitionEnd",function(){
		$(".man").addClass("deliver")
	})
	$(".man").on("webkitAnimationEnd",function(){
		$(".man").addClass("deliver")
	})

	$(".man").on("webkitAnimationEnd",function(){
		$(".sure").addClass("show")
	})

	$(".sure").on("webkitTransitionEnd",function(){
		$(".text61").addClass("show")
		$(".text62").addClass("show")
		$(".door").addClass("show")
		$(".woman").addClass("show")
	})
	//图片随着鼠标移动而移动
	$(".screen08").on("mousemove",function(e){
		$(this).find(".hand8").css({
			left: e.clientX-250,
			top:  e.clientY-50
		})
	})
});