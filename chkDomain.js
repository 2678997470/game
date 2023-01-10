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
		alert("莫恋：再续天庭0.82 33页商城 GM后台 /r/n QQ群1：726765437|QQ群2：714556668|QQ群3：392349183|QQ群4：789744589|QQ群5：106158473|By：晓澜造梦QQ群：785658327");
	}
}
