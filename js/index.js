$(function(){
	
	
	//nav区域 全部分类区
	$("#nav .all-classify_li").hover(function(){
		$(this).find(".sub-box").css("display","block");
	},function(){
		$(this).find(".sub-box").css("display","none");
	})

	//banner区域 下载二维码
	$("#banner .notice-downloadAPP").hover(function(){
		$(this).find(".QR-code").animate({height:'toggle'},"slow");
	},function(){
		$(this).find(".QR-code").animate({height:'hide'},"slow");
	})
	
	//banner轮播图
//	$.getJSON("json/bannerImg.json", function(data) {
//		$.each(data, function(index, value) {
//			$(".bannerImg").append("<li><a href='#'><img src='" + value.img + "'/></a></li>")
//			$("#banner .slide").append("<li class='normal'></li>");
//		})
//		var $uLis = $(".bannerImg li");
//		var $oLis = $("#banner .slide li");
//		var $index = 0;
//		$oLis.eq(0).addClass("show");
//		$(".banner-picture,#arr-left,#arr-right,.slide li").mouseenter(function() {
//			$("#arr-left,#arr-right").css("opacity", "1");
//			clearInterval($timer);
//		})
//		$(".banner-picture,.slide li").mouseleave(function() {
//			$("#arr-left,#arr-right").css("opacity", "0");
//			$.timer();
//		})
//		$oLis.hover(function() {
//			var $now = $(this).index();
//			$uLis.hide(1, function() {
//				$uLis.eq($now).fadeTo(1000,1);
//			})
//			$oLis.removeClass().addClass("normal");
//			$oLis.eq($now).addClass("show");
//		})
//		$("#arr-right").click(function() {
//			$index++;
//			if($index >= data.length) {
//				$index = 0;
//			}
//			$uLis.hide(1, function() {
//				$uLis.eq($index).fadeTo(1000,1);
//			})
//			$oLis.removeClass().addClass("normal");
//			$oLis.eq($index).addClass("show");
//		})
//		$("#arr-left").click(function() {
//			$index--;
//			if($index < 0) {
//				$index = 5;
//			}
//			$uLis.hide(0.1, function() {
//				$uLis.eq($index).fadeTo(1000,1);
//			})
//			$oLis.removeClass().addClass("normal");
//			$oLis.eq($index).addClass("show");
//		})
//		$.extend({
//			timer: function() {
//				$timer = setInterval(function() {
//					$index++
//					if($index >= data.length) {
//						$index = 0;
//					}
//					$uLis.hide(0.1, function() {
//						$uLis.eq($index).fadeTo(1000,1);
//					})
//					$oLis.removeClass().addClass("normal");
//					$oLis.eq($index).addClass("show");
//				}, 3000)
//			}
//		})
//		$.timer();
//	})
	
	$.getJSON("json/bannerImg.json",function(data){
		$.each(data, function(index , value) {
			$(".bannerImg").append(`<li><a href='#'><img src=${ value.img }/></a></li>`)
		});
		$(".banner-picture,#arr-left,#arr-right,.slide li").mouseenter(function() {
			$("#arr-left,#arr-right").css("opacity", "1");
			clearInterval($timer);
		})
		$(".banner-picture,.slide li").mouseleave(function() {
			$("#arr-left,#arr-right").css("opacity", "0");
			$.timer();
		})
		var $uLis = $("#banner .bannerImg li");
		var $oLis = $("#banner .slide li");
		var $index = 0;
		$oLis.mouseenter(function(){
			clearInterval($timer);
			$oLis.click(function(){
				$index = $(this).index();
				$uLis.eq($index)
					 .fadeIn(1000)
					 .siblings()
					 .fadeOut(1000);
				$(this).addClass("current")
					   .siblings()
					   .removeClass("current");
			})
		}).mouseleave(function(){
			$.timer();
		})
		$("#arr-right").click(function() {
				$index++;
				if($index >= data.length) {
					$index = 0;
				}
				$oLis.eq($index)
					 .addClass("current")
					 .siblings()
					 .removeClass("current");
				$uLis.eq($index)
					 .fadeIn(1000)
					 .siblings()
					 .fadeOut(1000);
			})
			$("#arr-left").click(function() {
				$index--;
				if($index < 0) {
					$index = 5;
				}
				$oLis.eq($index)
					 .addClass("current")
					 .siblings()
					 .removeClass("current");
				$uLis.eq($index)
					 .fadeIn(1000)
					 .siblings()
					 .fadeOut(1000);
			})
		$.extend({
			timer : function(){
				$timer = setInterval(function(){
					$index++;
					if($index == 6){
						$index = 0;
					}
					$oLis.eq($index)
						 .addClass("current")
						 .siblings()
						 .removeClass("current");
					$uLis.eq($index)
						 .fadeIn(1000)
						 .siblings()
						 .fadeOut(1000);
				},2000)
			}
		});
		
		$.timer();
	})
	

	//activity
	$.getJSON("json/index-activity.json",function(data){
		$.each(data, function(index,value) {
			$(".activity-box").append("<div><a href='#'><img src='"+value.img+"'/></a></div>")
		});
	})

	function productLeftHot_0(){
		let json;
		$.getJSON('json/product-json/product-left-hot_0.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".tab-box-con_0 img").eq(i * 2).attr({
					src: json[i].img
				})
				$(".tab-box-con_0 img").eq(i * 2 + 1).attr({
					src: json[i].img2
				})
				$(".tab-box-con_0").eq(i).find(".product-name").children("a").append(json[i].name)
				$(".tab-box-con_0").eq(i).find(".product-ticket").children("span").append(json[i].ticket)
				$(".tab-box-con_0").eq(i).find(".product-money").children("span:last-child").append(json[i].price)
				
			}
		}
	}
	productLeftHot_0();
	
	function productLeftHot_8(){
		let json;
		$.getJSON('json/product-json/product-left-hot_8.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".tab-box-con_8 img").eq(i * 2).attr({
					src: json[i].img
				})
				$(".tab-box-con_8 img").eq(i * 2 + 1).attr({
					src: json[i].img2
				})
				$(".tab-box-con_8").eq(i).find(".product-name").children("a").append(json[i].name)
				$(".tab-box-con_8").eq(i).find(".product-ticket").children("span").append(json[i].ticket)
				$(".tab-box-con_8").eq(i).find(".product-money").children("span:last-child").append(json[i].price)
				
			}
		}
	}
	productLeftHot_8();
	
	function productLeftNew(){
		let json;
		$.getJSON('json/product-json/product-left-new.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".product-left-new-box-li img").eq(i * 2).attr({
					src: json[i].img
				})
				$(".product-left-new-box-li img").eq(i * 2 + 1).attr({
					src: json[i].img2
				})
				$(".product-left-new-box-li").eq(i).find(".product-name").children("a").append(json[i].name)
				$(".product-left-new-box-li").eq(i).find(".product-ticket").children("span").append(json[i].ticket)
				$(".product-left-new-box-li").eq(i).find(".product-money").children("span:last-child").append(json[i].price)
				
			}
		}
	}
	productLeftNew();
    function productRightShopTop_0(){
    	let json;
		$.getJSON('json/product-json/product-right-shop-content_0.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".product-right-shop-top-content_0 img").eq(i).attr({
					src: json[i].img
				})
				$(".product-right-shop-top-content_0").eq(i).find(".text-right-top").children("a").append(json[i].name)
				$(".product-right-shop-top-content_0").eq(i).find(".text-right-bottom").append(json[i].price)
				
			}
		}
    }
    productRightShopTop_0();
    
    function productRightShopBottom_0(){
    	let json;
		$.getJSON('json/product-json/product-right-shop-bottom-content_0.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".product-right-shop-bottom-content_0 img").eq(i).attr({
					src: json[i].img
				})
				$(".product-right-shop-bottom-content_0").eq(i).find(".text-right-top").children("a").append(json[i].name)
				$(".product-right-shop-bottom-content_0").eq(i).find(".text-right-bottom").append(json[i].price)
				
			}
		}
    }
    productRightShopBottom_0();

    //fine-goods
	function fineGoods_01(){
		let json;
		$.getJSON('json/fine-goods-json/fine-goods-01-product.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".fine-goods_01 img").eq(i * 2).attr({
					src: json[i].img
				})
				$(".fine-goods_01 img").eq(i * 2 + 1).attr({
					src: json[i].img2
				})
				$(".fine-goods_01").eq(i).find(".product-name").children("a").append(json[i].name)
				$(".fine-goods_01").eq(i).find(".product-ticket").children("span").append(json[i].ticket)
				$(".fine-goods_01").eq(i).find(".product-money").children("span:last-child").append(json[i].price)
				
			}
		}
	}
	fineGoods_01();
	function fineGoods_02(){
		let json;
		$.getJSON('json/fine-goods-json/fine-goods-02-product.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".fine-goods_02 img").eq(i * 2).attr({
					src: json[i].img
				})
				$(".fine-goods_02 img").eq(i * 2 + 1).attr({
					src: json[i].img2
				})
				$(".fine-goods_02").eq(i).find(".product-name").children("a").append(json[i].name)
				$(".fine-goods_02").eq(i).find(".product-ticket").children("span").append(json[i].ticket)
				$(".fine-goods_02").eq(i).find(".product-money").children("span:last-child").append(json[i].price)
				
			}
		}
	}
	fineGoods_02();
	function fineGoods_03(){
		let json;
		$.getJSON('json/fine-goods-json/fine-goods-03-product.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".fine-goods_03 img").eq(i * 2).attr({
					src: json[i].img
				})
				$(".fine-goods_03 img").eq(i * 2 + 1).attr({
					src: json[i].img2
				})
				$(".fine-goods_03").eq(i).find(".product-name").children("a").append(json[i].name)
				$(".fine-goods_03").eq(i).find(".product-ticket").children("span").append(json[i].ticket)
				$(".fine-goods_03").eq(i).find(".product-money").children("span:last-child").append(json[i].price)
				
			}
		}
	}
	fineGoods_03();
	function fineGoods_04(){
		let json;
		$.getJSON('json/fine-goods-json/fine-goods-04-product.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".fine-goods_04 img").eq(i * 2).attr({
					src: json[i].img
				})
				$(".fine-goods_04 img").eq(i * 2 + 1).attr({
					src: json[i].img2
				})
				$(".fine-goods_04").eq(i).find(".product-name").children("a").append(json[i].name)
				$(".fine-goods_04").eq(i).find(".product-ticket").children("span").append(json[i].ticket)
				$(".fine-goods_04").eq(i).find(".product-money").children("span:last-child").append(json[i].price)
				
			}
		}
	}
	fineGoods_04();
	
	//excellent-select-product
	function excellentSelectLi(){
		let json;
		$.getJSON('json/excellent-select-product.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".excellent-select-li img").eq(i).attr({
					src: json[i].img
				})
				$(".excellent-select-li").eq(i).find(".excellent-title").children("a").append(json[i].title)
				$(".excellent-select-li").eq(i).find(".excellent-text").children("a").append(json[i].text)
				
			}
		}
	}
	excellentSelectLi();
	
	//excellent-select-product动画
	
	$(".excellent-select-innerbox").mouseenter(function(){
		$(this).find('img').animate({right:"+30px"},"1000");
	})
	$(".excellent-select-innerbox").mouseleave(function(){
		$(this).find('img').animate({right:"+15px"},"1000");
	})
	//public-goods
	function publicGoods_0(){
		let json;
		$.getJSON('json/public-goods-json/public-goods-content_0.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".public-goods_0 img").eq(i*2).attr({
					src: json[i].img
				})
				$(".public-goods_0 img").eq(i*2+1).attr({
					src: json[i].img2
				})
				$(".public-goods_0").eq(i).find(".product-name").children("a").append(json[i].name)
				$(".public-goods_0").eq(i).find(".product-ticket").children("span").append(json[i].ticket)
				$(".public-goods_0").eq(i).find(".product-money").children("span:last-child").append(json[i].price)
				
			}
		}
	}
	publicGoods_0();
	function publicGoods_1(){
		let json;
		$.getJSON('json/public-goods-json/public-goods-content_1.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".public-goods_1 img").eq(i*2).attr({
					src: json[i].img
				})
				$(".public-goods_1 img").eq(i*2+1).attr({
					src: json[i].img2
				})
				$(".public-goods_1").eq(i).find(".product-name").children("a").append(json[i].name)
				$(".public-goods_1").eq(i).find(".product-ticket").children("span").append(json[i].ticket)
				$(".public-goods_1").eq(i).find(".product-money").children("span:last-child").append(json[i].price)
				
			}
		}
	}
	publicGoods_1();
	function publicGoods_2(){
		let json;
		$.getJSON('json/public-goods-json/public-goods-content_2.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".public-goods_2 img").eq(i*2).attr({
					src: json[i].img
				})
				$(".public-goods_2 img").eq(i*2+1).attr({
					src: json[i].img2
				})
				$(".public-goods_2").eq(i).find(".product-name").children("a").append(json[i].name)
				$(".public-goods_2").eq(i).find(".product-ticket").children("span").append(json[i].ticket)
				$(".public-goods_2").eq(i).find(".product-money").children("span:last-child").append(json[i].price)
				
			}
		}
	}
	publicGoods_2();
	function publicGoods_3(){
		let json;
		$.getJSON('json/public-goods-json/public-goods-content_3.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".public-goods_3 img").eq(i*2).attr({
					src: json[i].img
				})
				$(".public-goods_3 img").eq(i*2+1).attr({
					src: json[i].img2
				})
				$(".public-goods_3").eq(i).find(".product-name").children("a").append(json[i].name)
				$(".public-goods_3").eq(i).find(".product-ticket").children("span").append(json[i].ticket)
				$(".public-goods_3").eq(i).find(".product-money").children("span:last-child").append(json[i].price)
				
			}
		}
	}
	publicGoods_3();
	function publicGoods_4(){
		let json;
		$.getJSON('json/public-goods-json/public-goods-content_4.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".public-goods_4 img").eq(i*2).attr({
					src: json[i].img
				})
				$(".public-goods_4 img").eq(i*2+1).attr({
					src: json[i].img2
				})
				$(".public-goods_4").eq(i).find(".product-name").children("a").append(json[i].name)
				$(".public-goods_4").eq(i).find(".product-ticket").children("span").append(json[i].ticket)
				$(".public-goods_4").eq(i).find(".product-money").children("span:last-child").append(json[i].price)
				
			}
		}
	}
	publicGoods_4();
	function publicGoods_5(){
		let json;
		$.getJSON('json/public-goods-json/public-goods-content_5.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".public-goods_5 img").eq(i*2).attr({
					src: json[i].img
				})
				$(".public-goods_5 img").eq(i*2+1).attr({
					src: json[i].img2
				})
				$(".public-goods_5").eq(i).find(".product-name").children("a").append(json[i].name)
				$(".public-goods_5").eq(i).find(".product-ticket").children("span").append(json[i].ticket)
				$(".public-goods_5").eq(i).find(".product-money").children("span:last-child").append(json[i].price)
				
			}
		}
	}
	publicGoods_5();
	function publicGoods_6(){
		let json;
		$.getJSON('json/public-goods-json/public-goods-content_6.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".public-goods_6 img").eq(i*2).attr({
					src: json[i].img
				})
				$(".public-goods_6 img").eq(i*2+1).attr({
					src: json[i].img2
				})
				$(".public-goods_6").eq(i).find(".product-name").children("a").append(json[i].name)
				$(".public-goods_6").eq(i).find(".product-ticket").children("span").append(json[i].ticket)
				$(".public-goods_6").eq(i).find(".product-money").children("span:last-child").append(json[i].price)
				
			}
		}
	}
	publicGoods_6();
	function publicGoods_7(){
		let json;
		$.getJSON('json/public-goods-json/public-goods-content_7.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".public-goods_7 img").eq(i*2).attr({
					src: json[i].img
				})
				$(".public-goods_7 img").eq(i*2+1).attr({
					src: json[i].img2
				})
				$(".public-goods_7").eq(i).find(".product-name").children("a").append(json[i].name)
				$(".public-goods_7").eq(i).find(".product-ticket").children("span").append(json[i].ticket)
				$(".public-goods_7").eq(i).find(".product-money").children("span:last-child").append(json[i].price)
				
			}
		}
	}
	publicGoods_7();
	
	//guess-like
	function guessyoulike(){
		let json;
		$.getJSON('json/guess-you-like.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i++){
				$(".guess-product-box img").eq(i*2).attr({
					src: json[i].img
				})
				$(".guess-product-box img").eq(i*2+1).attr({
					src: json[i].img2
				})
				$(".guess-product-box").eq(i).find(".product-name").children("a").append(json[i].name)
				$(".guess-product-box").eq(i).find(".product-ticket").children("span").append(json[i].ticket)
				$(".guess-product-box").eq(i).find(".product-money").children("span:last-child").append(json[i].price)
				
			}
		}
	}
	guessyoulike();
})
//
//window.onscroll = function(){
//	var oDivMain = document.getElementsByClassName("logo-form")[0];
//	var topSearch = document.getElementsByClassName("top-search")[0];
//	var _Top = document.documentElement.scrollTop || document.body.scrollTop;
//	if(_Top > 400){
//		oDivMain.style.position = "fixed";
//		topSearch.style.display = "none";
//		oDivMain.style.top = 0;
//		oDivMain.style.zIndex = 10000;
//		oDivMain.style.boxShadow = "0px 4px 5px rgba(0,0,0,0.2)";
//		oDivMain.style.width = "100%";
//	}else{
//		oDivMain.style.position = "static";
//		topSearch.style.display = "block";
//		oDivMain.style.boxShadow = "none";
//		oDivMain.style.width = "1200px";
//	}
//	
//	
//	var Up = document.getElementsByClassName("up")[0];
//	//当前页面滚动的距离
//	var _top = document.body.scrollTop || document.documentElement.scrollTop;
//	if(_top >= 800){
//		Up.style.display = "block";
//	}else{
//		Up.style.display = "none";
//	}
//	Up.onclick = function(){
//		document.body.scrollTop = document.documentElement.scrollTop = 0;
//	}
//}


