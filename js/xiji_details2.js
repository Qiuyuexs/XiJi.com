window.onscroll = function(){
    //放大镜
	function minMax(){
		var oMark = document.getElementsByClassName("mark")[0];
		var oFloat = document.getElementsByClassName("zooms-handle")[0];
		var bigPic = document.getElementsByClassName("big_pic")[0];
		var smallPic = document.getElementsByClassName("small-pic")[0];
		var oDiv = document.getElementsByClassName("product-max-img")[0];
		var bigImg = bigPic.getElementsByTagName("img")[0];
		//给遮罩添加移入移出事件
		oMark.onmouseover = function(){
			oFloat.style.display = "block";
			bigPic.style.display = "block";
		}
		oMark.onmouseout = function(){
			oFloat.style.display = "none";
			bigPic.style.display = "none";
		}
		//给遮罩添加鼠标移动事件
		oMark.onmousemove  = function(evt){
			let e = evt || window.event;
			//鼠标的页面坐标 - 大盒子的offsetLeft值 - 小图盒子的offsetLeft - 滑块宽度的一半
			let l = e.pageX - oDiv.offsetLeft - smallPic.offsetLeft - oFloat.offsetWidth / 2;
			let t = e.pageY - oDiv.offsetTop - smallPic.offsetTop - oFloat.offsetHeight / 2;
			//设置边界
			if(l < 0){
				l = 0;
			}else if(l > oMark.offsetWidth - oFloat.offsetWidth){
				l = oMark.offsetWidth - oFloat.offsetWidth;
			}
			if(t < 0){
				t = 0;
			}else if(t > oMark.offsetHeight - oFloat.offsetHeight){
				t = oMark.offsetHeight - oFloat.offsetHeight;
			}
			//给滑块设置left，top          
			oFloat.style.left = l + "px";
			oFloat.style.top = t + "px";
			//设置比例     滑块在小图上的移动距离
			var percentX = l / (oMark.offsetWidth - oFloat.offsetWidth);
			var percentY = t / (oMark.offsetHeight - oFloat.offsetHeight);
			
			//设置大图的移动
			bigImg.style.left = -percentX * (bigImg.offsetWidth - bigPic.offsetWidth) + "px";
			bigImg.style.top = -percentY * (bigImg.offsetHeight - bigPic.offsetHeight) + "px";
		}
		
	}
	
	minMax();
}