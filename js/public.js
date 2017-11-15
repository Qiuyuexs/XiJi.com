$(function(){
	//top隐藏列表
	$("#xiji-top ul li").eq(2).hover(function(){
		$(this).find(".help").slideDown(300);
	},function(){
		$(this).find(".help").slideUp(300);
	})
	//logo区域 登陆注册隐藏窗口
	$(".logo-login-regist").mouseenter(function(){
		$(".login-frame").stop(true,true);
		$(".login-frame").slideDown('slow');
	})
	$(".logo-login-regist").mouseleave(function(){
		$(".login-frame").stop(true,true);
		$(".login-frame").slideUp('slow');
	})
})

