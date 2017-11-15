$(function(){    
    //nav区域 全部分类区
	$("#nav .all-classify_li").hover(function(){
		$(this).find(".sub-box").css("display","block");
	},function(){
		$(this).find(".sub-box").css("display","none");
	})
    $("#nav .nav-left").mouseenter(function(){
		$(".all-classify-box").stop(true,true);
		$(".all-classify-box").slideDown('fast');
	})
	$(".nav-left").mouseleave(function(){
		$(".all-classify-box").stop(true,true);
		$(".all-classify-box").slideUp('fast');
	})
})