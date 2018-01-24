// 奖品ID信息
var PrizeInfo = {WeeklyPrize:'27',FirstPrize:'28',SencondPrize:'29',ThirdPrize:'30',LuckyPrize:'31',Thanks:'32',ComingSoon:'-2',Drawed:'-1',ERROR:'99'};
// 奖品ID与转盘索引的对应关系
var PrizeIndex = {'27':0,'28':1,'31':2,'29':3,'32':4,'30':5,'-1':-1,'-2':-1,'99':-1};
var PrizeName = {'27':'苹果笔记本一台','28':'爱奇艺VIP年卡','29':'爱奇艺VIP半年卡','30':'爱奇艺VIP季卡','31':'解放号靠枕','32':'谢谢参与'};

// 停止转
var StopRoll = false;

// 转盘对象
var lottery={
	times:0,	// 转动圈数
	angles:0,	// 转动角度
	count:6,	// 奖品个数
	rollNum:5,	// 滚动次数
	fontColor:[ "#FFEEBE", "#FFBE04", "rgba(0,0,0,0.5)", "#69541b", "white","#FF4350" ],// 转盘文字颜色
	prizeName:[ "苹果笔记本", "爱奇艺年卡","解放号靠枕", "爱奇艺半年卡", "谢谢参与", "爱奇艺季卡"],//奖品名称
	screenWidth:0,// 屏幕宽度
	// sc:[ '#fcf16e', '#FFF', '#00FFFF','#FFF','#F9F400','#FFF','#00FF00','#FFF','skyblue','#FFF' ],// 闪动颜色
	sc:[ '#90EE90', '#FFF', '#7CFC00','#FFF','#00FF00','#FFF','#32CD32','#FFF','#008000','#FFF' ],// 闪动颜色
	cycleArray:[],// 闪动小圆圈数组
	ci:0,	// 当前小圆圈颜色
    timer:0,    //setTimeout的ID，用clearTimeout清除
    prize:-1,    //中奖位置
    init:function(){
    	var that = this;
    	this.screenWidth = document.body.clientWidth;
    	var canvasd = document.getElementById('xttblog-d');
    	var canvas = document.getElementById('xttblog');
    	var canvas01 = document.getElementById('xttblog01');
    	var canvas03 = document.getElementById('xttblog03');
    	var canvas02 = document.getElementById('xttblog02');

    	var ctxd = canvasd.getContext('2d');
    	var ctx = canvas.getContext('2d');
    	var ctx1 = canvas01.getContext('2d');
    	var ctx3 = canvas03.getContext('2d');
    	var ctx2 = canvas02.getContext('2d');

    	var ctxd_w = 0, ctxd_r = 0, ctx_w = 0, ctx_r = 0, cwgl520 = false;
    	if (this.screenWidth > 520) {
    		cwgl520 = true;
    		canvasd.width = 460;
    		canvasd.height = 460;
    		canvas.width = 420;
    		canvas.height = 420;
    		ctxd_w = canvasd.width, ctxd_r = canvasd.width / 2,
    		ctx_w = canvas.width, ctx_r = canvas.width / 2;
    	} else if(this.screenWidth > 320){
    		cwgl520 = false;
    		canvasd.width = 340;
    		canvasd.height = 340;
    		canvas.width = 300;
    		canvas.height = 300;
    		ctxd_w = canvasd.width, ctxd_r = canvasd.width / 2,
    		ctx_w = canvas.width, ctx_r = canvas.width / 2;
    	}else{
    		cwgl520 = false;
    		canvasd.width = 306;
    		canvasd.height = 306;
    		canvas.width = 266;
    		canvas.height = 266;
    		ctxd_w = canvasd.width, ctxd_r = canvasd.width / 2,
    		ctx_w = canvas.width, ctx_r = canvas.width / 2;
    	}
    	createCircled();
    	createCircle();
    	createCirText();
    	initPoint();
    	//外外圆(底盘)
    	function createCircled() {
    		ctxd.translate(ctxd_r, ctxd_r);
    		ctxd.beginPath();
    		ctxd.lineWidth = 1;
    		ctxd.arc(0, 0, ctxd_r, 0, 2 * Math.PI, false);
    		ctxd.fillStyle = that.fontColor[1];
    		ctxd.fill();
    		ctxd.save();
    		for (var i = 0; i < 20; i++) {
    			var rad = 2 * Math.PI / 20 * i;
    			var x = Math.cos(rad) * (ctxd_r - 10);
    			var y = Math.sin(rad) * (ctxd_r - 10);
    			ctxd.beginPath();
    			ctxd.arc(x, y, 4, 0, 2 * Math.PI, false);
    			ctxd.fillStyle = '#fff';
    			that.cycleArray.push({
    				x : x,
    				y : y,
    				radis : 4
    			});
    			ctxd.fill();
    		}
    		ctxd.restore();
    	}
    	setInterval(redrawCycle, 1000);
    	function redrawCycle() {
    		that.ci = that.ci + 1;
    		if(that.ci > 9){
    			that.ci = 0;
    		}
    		var co = that.sc[that.ci];
    		for (var i = 0, l = that.cycleArray.length; i < l; i++) {
    			var cycle = that.cycleArray[i];
    			var x = cycle.x;
    			var y = cycle.y;
    			ctxd.clearRect(cycle.x - cycle.radis, cycle.y - cycle.radis,
    					2 * cycle.radis, 2 * cycle.radis);
    			ctxd.beginPath();
    			ctxd.arc(x, y, 4, 0, 2 * Math.PI, false);
    			ctxd.fillStyle = co;
    			ctxd.fill();
    		}
    		ctxd.restore();
    	}
    	//外圆
    	function createCircle() {
    		//画一个nN等份扇形组成的圆形
    		var step = 2 * Math.PI / that.count;
    		var startAngle = 0;//扇形的开始弧度
    		for (var i = 1; i <= that.count; i++) {
    			ctx.save();
    			ctx.beginPath();
    			ctx.arc(ctx_r, ctx_r, 150, startAngle, step * i, false);
    			ctx.lineWidth = 250;
    			if (i % 2 == 0) {
    				ctx.strokeStyle = that.fontColor[0];
    			} else {
    				ctx.strokeStyle = that.fontColor[1];
    			}
    			startAngle = step * i;
    			ctx.stroke();
    			ctx.restore();
    		}
    	}
    	//各奖项文字
    	function createCirText() {
    		ctx.textAlign = 'center';
    		ctx.textBaseline = 'middle';
    		ctx.fillStyle = that.fontColor[3];
    		var step = 2 * Math.PI / that.count;
    		for (var i = 0; i < that.count; i++) {
    			ctx.save();
    			ctx.beginPath();
    			ctx.translate(ctx_r, ctx_r);
    			ctx.rotate(i * step);
    			if (cwgl520) {
    				ctx.font = " 22px Microsoft YaHei";
    				ctx.fillStyle = that.fontColor[3];
    				ctx.fillText(that.prizeName[i], 0, -175, 100);
    				var indx = i + 1;
    				var bg_img = document.getElementById("jp-" + indx);
    				ctx.drawImage(bg_img, -40, -165, 80, 80);
    				ctx.closePath();
    			} else if(that.screenWidth > 320){
    				ctx.font = " 18px Microsoft YaHei";
    				ctx.fillStyle = that.fontColor[3];
    				ctx.fillText(that.prizeName[i], 0, -126, 90);
    				var indx = i + 1;
    				var bg_img = document.getElementById("jp-" + indx);
    				ctx.drawImage(bg_img, -28, -115, 55, 55);
    				ctx.closePath();
    			}else{
    				ctx.font = " 14px Microsoft YaHei";
    				ctx.fillStyle = that.fontColor[3];
    				ctx.fillText(that.prizeName[i], 0, -114, 70);
    				var indx = i + 1;
    				var bg_img = document.getElementById("jp-" + indx);
    				ctx.drawImage(bg_img, -22, -105, 45, 45);
    				ctx.closePath();
    			}
    			ctx.restore();
    		}
    	}
    	function initPoint() {
    		if (cwgl520) {
    			//箭头指针
    			ctx1.beginPath();
    			ctx1.moveTo(100, 24);
    			ctx1.lineTo(90, 62);
    			ctx1.lineTo(110, 62);
    			ctx1.lineTo(100, 24);
    			ctx1.fillStyle = that.fontColor[5];
    			ctx1.fill();
    			ctx1.closePath();
    			//中间小圆
    			ctx3.beginPath();
    			ctx3.arc(100, 100, 40, 0, Math.PI * 2, false);
    			ctx3.fillStyle = that.fontColor[5];
    			ctx3.fill();
    			ctx3.closePath();
    			//小圆文字
    			ctx3.font = "Bold 20px Microsoft YaHei";
    			ctx3.textAlign = 'start';
    			ctx3.textBaseline = 'middle';
    			ctx3.fillStyle = that.fontColor[4];
    			ctx3.beginPath();
    			ctx3.fillText('开始', 80, 90, 40);
    			ctx3.fillText('抽奖', 80, 110, 40);
    			ctx3.fill();
    			ctx3.closePath();
    			//中间圆圈
    			ctx2.beginPath();
    			ctx2.arc(75, 75, 65, 0, Math.PI * 2, false);
    			ctx2.fillStyle = that.fontColor[2];
    			ctx2.fill();
    			ctx2.closePath();
    		}else if (that.screenWidth > 320){
    			//箭头指针
    			ctx1.beginPath();
    			ctx1.moveTo(100, 44);
    			ctx1.lineTo(90, 74);
    			ctx1.lineTo(110, 74);
    			ctx1.lineTo(100, 44);
    			ctx1.fillStyle = that.fontColor[5];
    			ctx1.fill();
    			ctx1.closePath();
    			//中间小圆
    			ctx3.beginPath();
    			ctx3.arc(100, 98, 28, 0, Math.PI * 2, false);
    			ctx3.fillStyle = that.fontColor[5];
    			ctx3.fill();
    			ctx3.closePath();
    			//小圆文字
    			ctx3.font = "Bold 14px Microsoft YaHei";
    			ctx3.textAlign = 'start';
    			ctx3.textBaseline = 'middle';
    			ctx3.fillStyle = that.fontColor[4];
    			ctx3.beginPath();
    			ctx3.fillText('开始', 86, 90, 30);
    			ctx3.fillText('抽奖', 86, 108, 30);
    			ctx3.fill();
    			ctx3.closePath();
    			//中间圆圈
    			ctx2.beginPath();
    			ctx2.arc(75, 75, 50, 0, Math.PI * 2, false);
    			ctx2.fillStyle = that.fontColor[2];
    			ctx2.fill();
    			ctx2.closePath();
    		} else{
    			//箭头指针
    			ctx1.beginPath();
    			ctx1.moveTo(98, 44);
    			ctx1.lineTo(88, 74);
    			ctx1.lineTo(108, 74);
    			ctx1.lineTo(98, 44);
    			ctx1.fillStyle = that.fontColor[5];
    			ctx1.fill();
    			ctx1.closePath();
    			//中间小圆
    			ctx3.beginPath();
    			ctx3.arc(98, 98, 28, 0, Math.PI * 2, false);
    			ctx3.fillStyle = that.fontColor[5];
    			ctx3.fill();
    			ctx3.closePath();
    			//小圆文字
    			ctx3.font = "Bold 14px Microsoft YaHei";
    			ctx3.textAlign = 'start';
    			ctx3.textBaseline = 'middle';
    			ctx3.fillStyle = that.fontColor[4];
    			ctx3.beginPath();
    			ctx3.fillText('开始', 84, 90, 30);
    			ctx3.fillText('抽奖', 84, 108, 30);
    			ctx3.fill();
    			ctx3.closePath();
    			//中间圆圈
    			ctx2.beginPath();
    			ctx2.arc(73, 73, 50, 0, Math.PI * 2, false);
    			ctx2.fillStyle = that.fontColor[2];
    			ctx2.fill();
    			ctx2.closePath();
    		}
    	}
    	//解决奖品图片第一次画不上的问题（就是再画一次呗）
    	setTimeout(function() {
    		createCirText();
    	}, 600);
    },
    // 开始转动
    roll:function(angles){
    	var degValue = 'rotate(' + angles + 'deg' + ')';
    	$('#xttblog').css('-o-transform', degValue); // Opera
    	$('#xttblog').css('-ms-transform', degValue); // IE浏览器
    	$('#xttblog').css('-moz-transform', degValue); // Firefox
    	$('#xttblog').css('-webkit-transform', degValue); // Chrome和Safari
    	$('#xttblog').css('transform', degValue);
        return false;
    }
};

// 抽奖对象
var draw_prize={
	md5Code : '',
	userDayPrizeCount : 0,// 已抽奖次数
	shakeCount : ,//可抽奖次数
	contextPath : '',
	drawing:false,//正在抽奖中
	prizeid:"32",
	prizename:"谢谢参与",
	prizeRecord:[],
	overtime:false,
	init : function(contextPath,md5Code,userDayPrizeCount,shakeCount){
		draw_prize.contextPath = contextPath;
		draw_prize.userDayPrizeCount = userDayPrizeCount;
		draw_prize.md5Code = md5Code;
		draw_prize.shakeCount = shakeCount;
		
		// 获取中奖列表（今年是滚动显示中奖列表）
		$.ajax({
			type: "post",
			url: draw_prize.contextPath+'/year2018_wx/lotterList',
			data:{'md5Code':draw_prize.md5Code},
			cache:false,
			success: function(data){
				data = eval("("+data+")");
				var list = data.list;
				if(list.length>0){
					draw_prize.prizeRecord = list.map(function(obj){
						var name = obj.nick_name;
						if(name.length > 4){
							name = name.substring(0,4);
						}
						return {name:name,prize:obj.prizename};
					});
					draw_prize.showRecord();
				}
			}
		});
	},
	showRecord:function(){
		var recordHtml = "";
		var rs = draw_prize.prizeRecord.length;
		if(rs > 0){
			$.each(draw_prize.prizeRecord,function(i,e){
				recordHtml += "<span>"+e.name+" 喜中 "+e.prize+"</span>";
			});
			var zhongjiangmingdan = $(".zhongjiangmingdan-wrap .zhongjiangmingdan");
			var iLiHeight = $(".zhongjiangmingdan-wrap .zhongjiangmingdan span").height();
			zhongjiangmingdan.html(recordHtml + (rs > 3 ? recordHtml : ""));
			zhongjiangmingdan.scrollTop(0);
			var timerr;
			startMove();
			function startMove() {
				var scrollTop = zhongjiangmingdan.scrollTop();
				scrollTop++;
				zhongjiangmingdan.scrollTop(scrollTop);
				timerr = setInterval(scrollUp, 50);
			}
			function scrollUp() {
				if (zhongjiangmingdan.scrollTop() % iLiHeight == 0) {
					clearInterval(timerr);
					setTimeout(startMove, 2000);
				} else {
					var scrollTop = zhongjiangmingdan.scrollTop();
					scrollTop++;
					zhongjiangmingdan.scrollTop(scrollTop);
					if (zhongjiangmingdan.scrollTop() >= zhongjiangmingdan
							.prop('scrollHeight') / 2) {
						zhongjiangmingdan.scrollTop(0);
					}
				}
			}
		}
	},
	doShake : function(){
		if(draw_prize.drawing){
			return;
		}

		//校验
		if(!draw_prize.cando()){
			shadeDiv('alert1',true);
			$(".alert1 .info").html('抽奖活动明年继续<br/>～不见不散～');
			return;
		}
		if(draw_prize.userDayPrizeCount == 0){
			if(draw_prize.shakeCount>0){
				draw_prize.drawing = true;
				// 开始转盘，避免给人没转的感觉
				draw_prize.roll();
				$.ajax({
					type: "post",
					url: draw_prize.contextPath+'/year2018_wx/shakePrize',
					data:{'md5Code':draw_prize.md5Code},
					cache:false,
					timeout:10000,
					success: function(data){
						data = eval("("+data+")");
						var code = data.code;
						if(code==0){
							//更新信息
							draw_prize.shakeCount=0;
							draw_prize.userDayPrizeCount=1;
							draw_prize.prizeid = data.prize.prizeid;
							draw_prize.prizename = PrizeName[data.prize.prizeid];
							
							draw_prize.stopRoll();
						}else if(code==-1){//地址失效
							window.location.href = draw_prize.contextPath+'/year2018_wx/close';
						}
						draw_prize.drawing = false;
					},
					complete : function(XMLHttpRequest,status){
						draw_prize.drawing = false;
						if(status == 'timeout' || status == 'error'){
							// 请求超时或错误，给提示
							draw_prize.prizeid = '99';
							draw_prize.stopRoll();
						}
					}
				});
			}else{
				shadeDiv("alert1",true);
				$(".alert1 .info").html("您今天已经抽过了<br/>明天再来吧！");
			}
		}else{
			shadeDiv("alert1",true);
			$(".alert1 .info").html("您今天已经抽过了<br/>明天再来吧！");
		}
	},
	// 展示中奖结果
	showPrize:function(){
		if(draw_prize.overtime){return;}
		if(draw_prize.prizeid == PrizeInfo.Drawed){
			// 已抽过-1
			shadeDiv("alert1",true);
			$(".alert1 .info").html("您今天已经抽过了<br/>明天再来吧！");
		}else if(draw_prize.prizeid == PrizeInfo.ComingSoon){
			// 抽奖未开始-2
			shadeDiv("alert1",true);
			$(".alert1 .info").html("抽奖活动明年继续<br/>～不见不散～");
		}else if(draw_prize.prizeid == PrizeInfo.Thanks){
			//谢谢参与24
		}else{
			if(draw_prize.prizeid == PrizeInfo.ERROR){
				// 错误99
				shadeDiv("alert1",true);
				$(".alert1 .info").html("今天抽奖的同学很多<br/>一会再来吧！");
			}else{
				// 重新渲染中奖数据
				shadeDiv("alert5",true);
				$(".alert5 .prizeinfo").html("喜中："+draw_prize.prizename);
				$("#userName").focus();
			}
		}
	},
	// 停止转盘
	stopRoll:function(){
		StopRoll = true;
		setTimeout(draw_prize.showPrize,5000);
		return;
	},
	// 启动转盘
	roll:function(){
		var total = 0;
		var cnt = 100;
		var ratio = [];
		ratio[1] = [0.2, 0.4, 0.6, 0.8, 1, 1, 1.2, 1.4, 1.6, 1.8];  
	    ratio[2] = [1.8, 1.6, 1.4, 1.2, 1, 1, 0.8, 0.6, 0.4, 0.2]; 
		for(i=0;i<200;i++){  
            //设计为200次50ms的间隔，10s出结果感觉比较好
			// 具体的思路是：我在转盘中计划了6个奖项，因此平均每个奖项在盘中所占角度为60度。指针位置固定于任意奖项正中1/2处（这里假设为正北方向)。setTimeout间隔时间不断增加偏转，以200次为例，设每次增加角度为amount=60度，最后旋转结果为总共走了3600度（10圈）回到原位。于此通过控制amount的数量变化控制奖项(每增减60/200就能停到下/上一奖项上)。
			// 旋转中的快慢效果，可以通过设置不同阶段amount的缩减/增加比例实现，只需使增减比例相同时间程度内互相对称即可。
	        var t = setTimeout(function(){  
                //计算每次偏转增量，对应阶段的增减比例最终造成快慢变化  
	        	// 其中60表示6个奖品，每个奖品60度，200次循环，每次循环0.3度偏移，1表示默认中奖序号
	            var deg = (60 - 0.3*1)*( ratio[ String(cnt).substr(0,1) ][ String(cnt).substr(1,1) ] );//2160;
	            if(StopRoll){
	            	clearTimeout(t);
	            	var prizeIndex = PrizeIndex[draw_prize.prizeid];
	            	if(prizeIndex > -1){
	            		// 有中奖
	            		lottery.roll(2160+(1080 - prizeIndex * 60));
	            	}else{
	            		// 无中奖
	            		lottery.roll(2160+1200);//改变偏转	            	
	            	}
	            }else{
	            	cnt ++;
	            	if(cnt == 300){
	            		// 转完了，超时
	            		draw_prize.overtime = true;
	            		lottery.roll(2160 + 1920);
	            	}else{
	            		lottery.roll(deg+total);//改变偏转	            	
	            		total += deg;//记录
	            	}
	            }
	        },i*50);
	    }
	},
	cando : function () {
	    var beginTime = new Date();
	    beginTime.setFullYear(2018);
	    beginTime.setMonth(0);
	    beginTime.setDate(22);
	    beginTime.setHours(0);
	    beginTime.setMinutes(0);
	    beginTime.setSeconds(0);
	    beginTime.setMilliseconds(0);
	    var endTime = new Date();
	    endTime.setFullYear(2018);
	    endTime.setMonth(0);
	    endTime.setDate(31);
	    endTime.setHours(23);
	    endTime.setMinutes(59);
	    endTime.setSeconds(59);
	    endTime.setMilliseconds(0);
	    var curTimes = new Date();
	    var flag = false;
	    if ((endTime.getTime() >= curTimes.getTime())&& (curTimes.getTime() >= beginTime.getTime())) {
	    	flag =  true;//在参与时间
	    }else{
	    	flag = false;//不在参与时间
	    }
	    return flag;
	}
};

function submitContact(){
	/**
	var userName = $("#userName").val().trim();
	var userMobile = $("#userMobile").val().trim();
	var userAddress = $("#userAddress").val().trim();
	// var userPostcode = $("#userPostCode").val().trim();
	if(!userName){
		$("#userName").attr("placeholder","请填写收货人姓名").focus();
		return false;
	}
	if(userMobile){
		if(!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(userMobile))){ 
	        $("#userMobile").val("").attr("placeholder","请填写正确的联系方式").focus();
	        return false;
	    } 
	}else{
		$("#userMobile").attr("placeholder","请填写收货人联系方式").focus();
		return false;
	}
	if(!userAddress){
		$("#userAddress").attr("placeholder","请填写收货人地址").focus();
		return false;
	}
	*/
	/**
	if(userPostcode){
		if(!(/^[1-9][0-9]{5}$/.test(userPostcode))){
			$("#userPostCode").val("").attr("placeholder","请填写正确的收货地址邮编").focus();
			return false;
		} 
	}else{
		$("#userPostCode").attr("placeholder","请填写收货地址邮编").focus();
		return false;
	}
	*/
	var userEmail = $("#userEmail").val().trim();
	if(userEmail){
		if(!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(userEmail))){ 
			$("#userEmail").val("").attr("placeholder","请填写正确的邮箱").focus();
			return false;
		} 
	}else{
		$("#userEmail").attr("placeholder","请填写您的邮箱").focus();
		return false;
	}
	shadeDiv("alert5",false);
	shadeDiv("alert6",true);
	// var postData = {username:userName,tel:userMobile,address:userAddress,postalcode:userEmail,md5Code:draw_prize.md5Code,prizeid:draw_prize.prizeid};
	var postData = {postalcode:userEmail,md5Code:draw_prize.md5Code,prizeid:draw_prize.prizeid};
	$.ajax({
		type: "post",
		url: draw_prize.contextPath + '/year2018_wx/lotterAddress',
		data:postData,
		cache:false,
		success: function(data){
			shadeDiv("alert6",false);
			shadeDiv("alert3",true);
		}
	});
}
function submitCa(){
	shadeDiv("alert4",true);
}
function shadeDiv(divClass,show){
	if(show){
		$(".shade").show();
		$("."+divClass).show();
	}else{
		$(".shade").hide();
		$("."+divClass).hide();
	}
}
//失去焦点时去掉空格
function spaceTrim(obj){
	obj.value=obj.value.trim();
}