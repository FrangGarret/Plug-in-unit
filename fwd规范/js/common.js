//封装ajax方法
// ajax封装
//方家亮
//2017-12-20
function ajax(url, data, success, cache, alone, async, type, dataType, error) {
	var type = type || 'post'; //请求类型
	var dataType = dataType || 'json'; //接收数据类型
	var async = async || true; //异步请求
	var alone = alone || false; //独立提交（一次有效的提交）
	var cache = cache || false; //浏览器历史缓存
	var success = success || function(data) {
		/*console.log('请求成功');*/
		setTimeout(function() {
			alert('提示信息')
		}, 500);
		if(data.status) { //服务器处理成功
			setTimeout(function() {
				if(data.url) {
					location.replace(data.url);
				} else {
					location.reload(true);
				}
			}, 1500);
		} else { //服务器处理失败
			if(alone) { //改变ajax提交状态
				ajaxStatus = true;
			}
		}
	};
	var error = error || function(data) {
		/*console.error('请求成功失败');*/
		/*data.status;//错误状态吗*/
		//layer.closeAll('loading');
		setTimeout(function() {
			if(data.status == 404) {
				alert('请求失败，请求未找到');
			} else if(data.status == 503) {
				alert('请求失败，服务器内部错误');
			} else {
				alert('请求失败,网络连接超时');
			}
			ajaxStatus = true;
		}, 500);
	};
	/*判断是否可以发送请求*/
	if(!ajaxStatus) {
		return false;
	}
	ajaxStatus = false; //禁用ajax请求
	/*正常情况下1秒后可以再次多个异步请求，为true时只可以有一次有效请求（例如添加数据）*/
	if(!alone) {
		setTimeout(function() {
			ajaxStatus = true;
		}, 1000);
	}
	$.ajax({
		'url': url,
		'data': data,
		'type': type,
		'dataType': dataType,
		'async': async,
		'success': success,
		'error': error,
		'jsonpCallback': 'jsonp' + (new Date()).valueOf().toString().substr(-4),
		'beforeSend': function() {
			//添加加载动画
		},
	});
}

// ajax提交(post方式提交)

function post(url, data, success, cache, alone) {
	ajax(url, data, success, cache, alone, false, 'post', 'json');
}

// ajax提交(get方式提交)
function get(url, success, cache, alone) {
	ajax(url, {}, success, alone, false, 'get', 'json');
}

// jsonp跨域请求(get方式提交)
function jsonp(url, success, cache, alone) {
	ajax(url, {}, success, cache, alone, false, 'get', 'jsonp');
}
//---------------------------------------------------------------------------------------------------------------------
//JSON数据拼接方法
//方家亮
//2017-12-21
function createJson(prop, val, jsons) {
	// 如果 val 被忽略
	if(typeof val === "undefined") {
		// 删除属性
		delete jsons[prop];
	} else {
		// 添加 或 修改
		jsons[prop] = val;
	}
}
//---------------------------------------------------------------------------------------------------------------------
//alert方法
//方家亮
//2017-12-21
function fwd_alert(message, callback) {
	var create = function() {
		return document.createElement.apply(document, arguments);
	}

	var bgDialog = create("div"), //创建遮罩背景
			look = create("p"),
		dialog = create("div"), //创建当前弹出框
		messageBox = create("ul"),
		totalButton = create("div"),
		okBubbton = create("button")
	
	dialog.className = "FWD_alert";
	look.className = 'FWD_alert_tips'
	bgDialog.className = "FWD_background";
	messageBox.className = "FWD_alert_info_Warp";
	totalButton.className = 'FWD_alert_btns_warp';
	okBubbton.className = 'enter_btn';
	
	look.innerHTML = '温馨提示'
	
	if(typeof message == 'string') {
		var messageLi = create("li");
		messageLi.innerHTML = message.replace(/\[|]/g, '');
		messageLi.className = "FWD_alert_info_one";
		messageBox.appendChild(messageLi);
	} else {
		var messageJson = JSON.parse(message)
		for(var i = 0; i < messageJson.length; i++) {
			var messageLi = create("li");
			messageLi.className = 'FWD_alert_info_more'
			messageLi.innerHTML = messageJson[i];
			messageBox.appendChild(messageLi);
		}
	}
	okBubbton.innerHTML = "确定";
	okBubbton.onclick = function() {

		if(callback) {
			callback(true);
		}

		bgDialog.parentNode.removeChild(bgDialog);

	};
	totalButton.appendChild(okBubbton);
	dialog.appendChild(look);
	dialog.appendChild(messageBox);
	dialog.appendChild(totalButton);
	bgDialog.appendChild(dialog);

	document.body.appendChild(bgDialog);

}
//---------------------------------------------------------------------------------------------------------------------
//自定义时间消失的弹出框
function fwd_alert_diyTime(message,times,callback) {
	var create = function() {
		return document.createElement.apply(document, arguments);
	}

	var bgDialog = create("div"), //创建遮罩背景
			look = create("p"),
		dialog = create("div"), //创建当前弹出框
		messageBox = create("ul")
		
	
	dialog.className = "FWD_alert";
	look.className = 'FWD_alert_tips'
	bgDialog.className = "FWD_background";
	messageBox.className = "FWD_alert_info_Warp";
	look.innerHTML = '温馨提示'
	
	if(typeof message == 'string') {
		var messageLi = create("li");
		messageLi.innerHTML = message.replace(/\[|]/g, '');
		messageLi.className = "FWD_alert_info_one";
		messageBox.appendChild(messageLi);
	} else {
		var messageJson = JSON.parse(message)
		for(var i = 0; i < messageJson.length; i++) {
			var messageLi = create("li");
			messageLi.className = 'FWD_alert_info_more'
			messageLi.innerHTML = messageJson[i];
			messageBox.appendChild(messageLi);
		}
	}

	if(times){
		setTimeout(function(){
			if(callback){
				callback(true);
			}
			bgDialog.parentNode.removeChild(bgDialog);
		},times)
	}else{
			setTimeout(function(){
				if(callback){
					callback(true);
				}
				bgDialog.parentNode.removeChild(bgDialog);
			},2000)
			
	}

	
	dialog.appendChild(look);
	dialog.appendChild(messageBox);
	
	bgDialog.appendChild(dialog);

	document.body.appendChild(bgDialog);

}




//---------------------------------------------------------------------------------------------------------------------
//confirm方法
//方家亮
//2017-12-21
function FWD_confirm(message, callback) {

	var create = function() {

		return document.createElement.apply(document, arguments);

	}

	var bgDialog = create("div"), //创建半透明背景层
		dialog = create("div"), //创建弹出框
		//提示信息栏
		look = create("p"),

		messageBox = create("ul"),

		totalButton = create("div"),

		okBubbton = create("button"),

		cancelButton = create("button");

	dialog.className = "FWD_confirm";
	look.className = "FWD_confirm_tips";

	//添加背景层样式
	bgDialog.className = "FWD_background";
	messageBox.className = "FWD_confirm_info_Warp";
	okBubbton.className = "enter_btn";
	cancelButton.className = "cancel_btn";
	totalButton.className = "FWD_confirm_btns_warp";

	look.innerHTML = "温馨提示";
	if(typeof message == 'string') {
		var messageLi = create("li");
		messageLi.className = 'FWD_confirm_info_one'
		messageLi.innerHTML = message.replace(/\[|]/g, '');
		messageLi.className = "alignCenter";
		messageBox.appendChild(messageLi);
	} else {
		var messageJson = JSON.parse(message)
		for(var i = 0; i < messageJson.length; i++) {
			var messageLi = create("li");
			messageLi.className = 'FWD_confirm_info_more'
			messageLi.innerHTML = messageJson[i];
			messageBox.appendChild(messageLi);
		}
	}

	okBubbton.innerHTML = "確定";

	cancelButton.innerHTML = "取消";

	okBubbton.onclick = function() {
		if(callback) {
			callback(true);
		}
		bgDialog.parentNode.removeChild(bgDialog);

	};

	cancelButton.onclick = function() {
		if(callback) {
			callback(false);
		}
		bgDialog.parentNode.removeChild(bgDialog);
	}

	dialog.appendChild(look);
	dialog.appendChild(messageBox);
	dialog.appendChild(totalButton);
	bgDialog.appendChild(dialog);
	totalButton.appendChild(okBubbton);
	totalButton.appendChild(cancelButton);
	document.body.appendChild(bgDialog);

}
//---------------------------------------------------------------------------------------------------------------------


//走马灯组件
(function($){
	$.fn.myScroll = function(options){
	//默认配置
	var defaults = {
		speed:40,  //滚动速度,值越大速度越慢
		rowHeight:42 //每行的高度
	};
	
	var opts = $.extend({}, defaults, options),intId = [];
	
	function marquee(obj, step){
	
		obj.find("ul").animate({
			marginTop: '-=1'
		},0,function(){
				var s = Math.abs(parseInt($(this).css("margin-top")));
				if(s >= step){
					$(this).find("li").slice(0, 1).appendTo($(this));
					$(this).css("margin-top", 0);
				}
			});
		}
		
		this.each(function(i){
			var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
			intId[i] = setInterval(function(){
				if(_this.find("ul").height()<=_this.height()){
					clearInterval(intId[i]);
				}else{
					marquee(_this, sh);
				}
			}, speed);

			_this.hover(function(){
				clearInterval(intId[i]);
			},function(){
				intId[i] = setInterval(function(){
					if(_this.find("ul").height()<=_this.height()){
						clearInterval(intId[i]);
					}else{
						marquee(_this, sh);
					}
				}, speed);
			});
		
		});

	}

})(jQuery);
//-------------------------------------------------------------------------------------------------------------------------------
















