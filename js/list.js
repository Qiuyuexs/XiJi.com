$(function(){
	function fn(){
		let json;
		$.getJSON('json/list-top.json',function(data){
			json = data;
			init()
		})
		function init(){
			console.log(json);
			for(let i = 0;i < json.length; i++){
				$(".right-top-li img").eq(i).attr({
					src: json[i].img
				})
			}
		}
	}
	fn();
	
	
	(function(){
		let json;
		$.getJSON('json/xiji_list.json',function(data){
			json = data;
			init();
		})
		function init(){
			console.log(json);
			for(let i = 0; i < json.length; i ++){
				$(".goods-item img").eq(i*2).attr({
					src: json[i].img1
				})
				$(".goods-item img").eq(i*2+1).attr({
					src: json[i].img2
				})
				//$(".goods-item").eq(i).children("div").children("div:last-child").children("h3").children("a").append(json[i].name)
				$(".goods-item").eq(i).find(".goods-name-a").append(json[i].name)
				
				//$(".goods-item").eq(i).children("div").children("div:last-child").children("div:nth-of-type(2)").children(".shipping").append(json[i].postage)
	            $(".goods-item").eq(i).find(".shipping").append(json[i].postage)
			    $(".goods-item").eq(i).find(".tag-box").children("span").append(json[i].ticket)
			    $(".goods-item").eq(i).find(".price").append(json[i].price)
			    $(".goods-item").eq(i).find(".price2").append(json[i].old)
			}
		}
	})()
})


window.onscroll = function(){
	var oNav = document.getElementById("nav");
	var _Top = document.documentElement.scrollTop || document.body.scrollTop;
	if(_Top > 400){
		oNav.style.position = "fixed";
		oNav.style.top = 0;
		oNav.style.zIndex = 10000;
	}else{
		oNav.style.position = "static";
	}
	
	
	var Up = document.getElementsByClassName("up")[0];
	//当前页面滚动的距离
	var _top = document.body.scrollTop || document.documentElement.scrollTop;
	if(_top >= 800){
		Up.style.display = "block";
	}else{
		Up.style.display = "none";
	}
	Up.onclick = function(){
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}
}



