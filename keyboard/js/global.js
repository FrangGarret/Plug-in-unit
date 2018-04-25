var t=setTimeout("GBS_baoquan_delay()",5000),
	indexs = 1,//当前显示第几张（第一张不需要延时）
	startAni,
    screenImg = ["1.jpg","2.jpg"],
    html = '';
//延时任务
function GBS_baoquan_delay(){
	$("#boxImg,#boxImg .imgs:nth-child(1)").fadeIn();
	startAni = setInterval(imgAni,5000);
	clearTimeout(t);
}
//重置延时任务
function GPS_baoquan_Reset(){
	$("#boxImg,#boxImg .imgs").fadeOut();
	indexs = 1;
	clearTimeout(t);
	clearInterval(startAni);
	t=setTimeout("GBS_baoquan_delay()",5000);
}
//重置延时任务的触发条件
function loading(){
	document.onmousemove = GPS_baoquan_Reset;
	document.onkeydown=GPS_baoquan_Reset;
	document.onclick=GPS_baoquan_Reset;
}
//屏保动画
function imgAni(){
	if(indexs > screenImg.length-1){
		indexs = 0;
	}
	$("#boxImg .imgs").eq(indexs).fadeIn().siblings().fadeOut();
	indexs += 1;
}

//跳转页面cur:当前页,next:下一页,pageUrl:请求的页面地址
function PageEvent(){};
PageEvent.prototype = {
	next : function(cur,next,pageUrl){
		$(cur).animate({"left":"-20%"},300);
		$(next).animate({"left":"0"},300);
		if(pageUrl != undefined){
			ajaxPage(pageUrl,next);
		}
	},
	pre : function(cur,pre){
		$(pre).animate({"left":"0"},300);
		$(cur).animate({"left":"100%"},300);
	},
	index : function(index){
		$(index).animate({"left":"0"},300);
		$.each($(".page"),function(i){
			if(i > 0){
				$(".page").eq(i).animate({"left":"100%"},300);
			}
		});
	}
};
var goPage = new PageEvent();