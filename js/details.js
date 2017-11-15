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
	
	//放大镜
	function minMax(){
		var Mark = $(".mark");
		var Float = $(".zooms-handle");
		var BigPic = $(".big_pic");
		var SmallPic = $(".small-pic");
		var oDiv = $(".product-max-img");
		var BigImg = $(".big_pic").children("img");
		//给遮罩添加移入移出事件
		$(".small-pic").mouseover(function(){
			Float.css("display","block");
			BigPic.css("display","block");
		})
		$(".small-pic").mouseout(function(){
			Float.css("display","none");
			BigPic.css("display","none");
		})
		//给遮罩添加鼠标移动事件
		$(".mark").mousemove(function(evt){
			evt = evt || window.event;
			//鼠标的页面坐标 - 大盒子的offsetLeft值 - 小图盒子的offsetLeft - 滑块宽度的一半
			var L = evt.pageX + oDiv.offset().left ;
			var T = evt.pageY -150 ;
			//设置边界
			if(L < 0){
				L = 0;
			}else if(L > SmallPic.pageX + 450 - 150){
				L = SmallPic.pageX + 450 - 150;
			}
			if(T < 0){
				T = 0;
			}else if(T > SmallPic.pageY + 300){
				T = SmallPic.pageY + 300;
			}
			//给滑块设置left，top
			Float.css("left","L + 'px'");
			Float.css("top","T + 'px'");
			console.log(L+"    "+T);
			//设置比例     滑块在小图上的移动距离
			var percentX = L / 150;
			var percentY = T / 150;
//			//var percentX = L / ($(".mark").offsetWidth - $(".zooms-handle").offsetWidth);
//			//var percentY = T / ($(".mark").offsetHeight - $(".zooms-handle").offsetHeight);
			//设置大图的移动
			BigImg.animate({
				left: "-percentX * (600 - 400) + 'px'",
				top: "-percentY * (600 - 400) + 'px'"},
				100, function() {
				/* stuff to do after animation is complete */
			});
//			//BigImg.style.left = -percentX * ($(".big_pic").children("img").offsetWidth - $(".big_pic").offsetWidth) + "px";
//			//$(".big_pic").children("img").style.top = -percentY * ($(".big_pic").children("img").offsetHeight - $(".big_pic").offsetHeight) + "px";
		 })
		
	}
	
	minMax();
		
	
	
	//相关商品
	function detailsTabBoxCon_0(){
		let json;
		$.getJSON('json/xiji-details-json/details-tab-box-con_0.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".tab-box-con_0 img").eq(i * 2).attr({
					src: json[i].img1
				})
				$(".tab-box-con_0 img").eq(i * 2 + 1).attr({
					src: json[i].img2
				})
				$(".tab-box-con_0").eq(i).find(".cont-tit-box").children("a").append(json[i].name)
				$(".tab-box-con_0").eq(i).find(".price-box").append(json[i].price)
				$(".tab-box-con_0").eq(i).find(".price-box").children("span").append(json[i].old)
				
			}
		}
	}
	detailsTabBoxCon_0();
})