function $ajax(obj){
	//1.初始化参数
	obj = obj || {};
	obj.type = obj.type.toUpperCase() || "GET";
	obj.url = obj.url || "";
	obj.asyn = obj.asyn || true;
	obj.data = obj.data || null;
	obj.success = obj.success || function(){};
	obj.error = obj.error || function(){};
	//2.obj.data
	var arr = [];
	for(var key in obj.data){
		arr.push(key + "=" + obj.data[key]);
	}
	var str = arr.join("&");
	//3.创建ajax对象
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	//4.判断obj.type
	if(obj.type.toUpperCase() == "POST"){
		xhr.open(obj.type,obj.url,obj.asyn);
		xhr.setRequestHeader("Content-type","text/plain;charset=utf-8");
		xhr.send(str);
	}else{
		xhr.open(obj.type,obj.url + "?" + str,obj.asyn);
		xhr.send();
	}
	//5.设置状态改变事件
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				obj.success(xhr.responseText);
			}else{
				obj.error();
			}
		}
	}
}
