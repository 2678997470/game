if((/4399\.air\.wd/gi).test(navigator.userAgent)){
	//其他微端
}else if((/4399\.zm5\.air/gi).test(navigator.userAgent)){
	//造梦微端不检测域名
}else if((/app\.4399\.funnycore/gi).test(navigator.userAgent)){
	//趣核不检测域名
}else{
	var blnOur = false;
	var arrOurDomain = ["http://www.4399.com","http://4399.com","http://www.4399.net","http://4399.net","http://my.4399.com","http://www.3839.com","http://3839.com","http://www2.4399.net","http://4399.somp3.com",".4399.com","http://test.4399.com","http://www.4399er.com"]
	var strLocation = document.referrer;
	if(top!=window){
		for (var j=0;j<arrOurDomain.length;j++){
			if(strLocation.indexOf(arrOurDomain[j])>=0){
				blnOur = true;
				break;
			}
		}
	}

	if(!blnOur){
		alert("莫恋：欢迎访问 再续天庭 0.82 无任何修改 上单原版");
	}
}
