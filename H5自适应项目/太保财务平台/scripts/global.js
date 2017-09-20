var startIndex = 0;
$(function(){
//	当前时间
	var myDate = new Date();
	var year = myDate.getFullYear();
	var month = myDate.getMonth()+1;
	var date = myDate.getDate();
	var hour = myDate.getHours();
	var minute = myDate.getMinutes();
	var seconds = myDate.getSeconds();
	$('.time-date').text(year+'/'+month+'/'+date+' '+hour+':'+minute+':'+seconds);
	
	//头部菜单点击显示更多
	$('.m-t-r-more').toggle(function(){
		$('.m-t-middle-box').stop().slideDown();
	},function(){
		$('.m-t-middle-box').stop().slideUp();
	});
	
	//响应式设置
	$(".menu-more").on("click",function(){
		if($(".wrapper-left").css("display") == "none"){
			$('.wrapper-left').show();
			$(this).css({"background-image":"url(styles/images/left.png)","left":"210px"});
			$(".wrapper-right").css({"margin-left":"210px"});
		}else{
			$('.wrapper-left').hide();
			$(this).css({"background-image":"url(styles/images/right.png)","left":"0"});
			$(".wrapper-right").css({"margin-left":"auto"});
		}
	});
	
	//调用方法，配置菜单值
	setMenuDatas(menuTabs);
	//调用方法，设置默认左侧菜单高度
	setNavHeight();
	
	//菜单点击时添加右侧tabs
	$(".w-click-list").on("click",function(){
		var getId = $(this).attr("id"),urls = $(this).attr("name");
		//判断是否有子菜单
		if($(this).next("ul").length > 0){
			//有子菜单时展开子菜单，不添加tabs
			if($(this).hasClass("list-open")){
				$(this).removeClass("list-open").css('background-color','#4f5f6f');
			}else{
				$(this).addClass("list-open").css('background-color','#40505f');
			}
//			$(".w-second-menu").slideUp();
			$(this).next("ul").slideToggle(100);
			setTimeout(function(){
				setNavHeight();
			},100);
		}else{
			//判断该菜单对应的右tabs是否已经显示，如果已经显示，仅调用右侧tabs的click事件
			if($("#for"+getId).attr("name") == "isShow"){
				$("#for"+getId).click();
				return false;
			}else{
				var getliVal = '<li id="for'+getId+'" name="isShow">'+$(this).html()+'</li>';
				$(".append_tabs").append(getliVal);
				$(".append_tabs_con").hide();
				$("#mainContent").append('<div class="append_tabs_con" id="for'+getId+'Con"></div>');
				changePage($("#for"+getId+"Con"),urls);
				$("#for"+getId).click();
				resetUlW();
				resetCurPosition();
				startIndex = $(".append_tabs li").length;
			}
		}
	});
	
	//可删除tabs
	var iconDelete = '<span class="icon_delete"></span>';
	$(".append_tabs").on("click","li",function(){
		var getCurId = $(this).attr("id");
		if(!$(this).hasClass("current")){
			$(".icon_delete").remove();
			$(this).addClass("current").append(iconDelete).siblings().removeClass("current");
			$(".append_tabs_con").hide()
			$("#"+getCurId+"Con").show();
		}
		startIndex = $(this).index();
		ulMarginLeft = parseInt($(".append_tabs").css("margin-left"));
		console.log($(this).offset().left +","+ $(".append_tabs_panel").offset().left)
		if($(".append_tabs").width() > $(".append_tabs_panel").width()){
			if($(this).offset().left < $(".append_tabs_panel").offset().left){
				ulMarginLeft += Math.abs($(this).offset().left - $(".append_tabs_panel").offset().left);
			}else if($(this).offset().left >= $(".append_tabs_panel").offset().left+$(".append_tabs_panel").width()){
				ulMarginLeft -= Math.abs($(this).offset().left + $(this).width());
			}
			clickOption(ulMarginLeft);
		}
	});
	$(".append_tabs").on("click",".icon_delete",function(){
		if($(".append_tabs li").length <= 1){
			$(".icon_delete").remove();
			return false;   
		}else{
			var getCurId = $(this).parent().attr("id"),getIndexs = 0;
			if($(this).parent().index() == 0){
				getIndexs = 0;
			}else{
				getIndexs = $(this).parent().index()-1;
			}
			$(this).parent().removeAttr("name").remove();
			$("#"+getCurId+"Con").remove();
			$(".append_tabs li").eq(getIndexs).click();
			resetUlW();
			resetCurPosition();
		}
	});
	//tabs左右箭头事件
	var lastLiWidth = 0,ulMarginLeft = 0;
	$(".box_append_tabs").on("click",".span_prev",function(){
		ulMarginLeft = parseInt($(".append_tabs").css("margin-left"));
		startIndex -= 1;
		lastLiWidth = $(".append_tabs li").eq(startIndex).width()+62;
		ulMarginLeft += lastLiWidth;
		clickOption(ulMarginLeft);
	});
	$(".box_append_tabs").on("click",".span_next",function(){
		ulMarginLeft = parseInt($(".append_tabs").css("margin-left"));
		lastLiWidth = $(".append_tabs li").eq(startIndex).width()+62;
		ulMarginLeft -= lastLiWidth;
		startIndex += 1;
		clickOption(ulMarginLeft);
	});
	
	//扩展select样式
	$.extend({
		setSel : function(selClass){
			var selHtml = '',_this = this;
			for(var n = 0;n < $(selClass).length;n++){
				selHtml = '';
				selHtml += '<div class="box_div_select">';
				selHtml += '<div class="box_select_val"><div class="div_select">'+$(selClass).eq(n).find("option:selected").html()+'</div>';
				selHtml += '<span class="icon icon_select"></span></div>';		
				selHtml += '<ul class="list_ul_select">';
				for(var i = 0;i < $(selClass).eq(n).find("option").length;i++){
					selHtml += '<li>'+$(selClass).eq(n).find("option").eq(i).html()+'</li>';
				}
				selHtml += '</ul>';		
				selHtml += '</div>';
				$(selClass).eq(n).parent().append(selHtml);
			}
			$(".div_select,.icon_select").on("click",function(e){
				_this.showSel(e,this);
			});
			$(".list_ul_select li").on("click",function(e){
				_this.checkVal(e,this);
			});
			$("html,body").on("click",function(){
				_this.hideSel();
			});
		},
		showSel : function(e,obj){
			e.stopPropagation();
			$(".list_ul_select").hide();
			$(obj).parent().next(".list_ul_select").show();
		},
		checkVal : function(e,obj){
			e.stopPropagation();
			$(obj).parent().parent().parent().find(".select option").eq($(obj).index()).attr("selected","selected").siblings().removeAttr("selected");
			$(obj).parent().hide().parent().find(".div_select").html($(obj).html());
		},
		hideSel : function(){
			$(".list_ul_select").hide();
		}
	});
});

function changePage(forDom,_url){
	if(_url == "undefined"){
		$(forDom).html("开发中");
	}else{
		$.ajax({
			url : _url,
			type : 'get',
			timeout : "10000",
			dataType : 'html',
			success : function(data){
				$(forDom).html(data);
				setNavHeight();
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
				if(errorThrown == "timeout"){
					alert("请求超时，请稍后再试！");
				}
				setNavHeight();
			}
		});
	}
}
//设置左侧菜单高度
function setNavHeight(){
	$('.wrapper-left').height("auto");
	var bodyH = $("body").height()-118,windowsH =  $(window).height()-118,selfH = $('.wrapper-left').height();
	var newArr = [bodyH,windowsH,selfH];
	var setNavH = Math.max.apply(this,newArr);
	$('.wrapper-left').height(setNavH);
}

function setListTable(arr,tableDom){
	var htmls = '';
	for(var i in arr["tBody"]){
		htmls += '<tr>';
		for(var j in arr["tBody"][i]){
			htmls += '<td>';
			if(typeof arr["tBody"][i][j] == "object"){
				for(var k in arr["tBody"][i][j]){
					htmls += '<span class="'+arr["tBody"][i][j][k]["name"]+'">'+arr["tBody"][i][j][k]["value"]+ '</span>';
				}
			}else{
				htmls += arr["tBody"][i][j];
			}
			
			htmls += '</td>';
		}
		htmls += '</tr>';
		
	}
	$(tableDom).html(htmls);
	//table隔行变色
	$(tableDom).find("tr:odd td").css({"background":"#eff7ff"});
}

function resizeRec(){
	var w = $(window).width();
	if(w > 1024){
		$('.wrapper-left').show();
		$(".menu-more").css({"background-image":"url(styles/images/left.png)","left":"210px"});
		$(".wrapper-right").css({"margin-left":"210px"});
	}else{
		$('.wrapper-left').hide();
		$(".menu-more").css({"background-image":"url(styles/images/right.png)","left":"0"});
		$(".wrapper-right").css({"margin-left":"auto"});
	}
}
window.onresize = function(){
	resizeRec();
	setNavHeight();
}
window.onload = function(){
	//默认显示的页
	$("#hedui").click();
}

//左侧菜单数据
var menuTabs = [
	{"name" : "财务管理", "icon" : "w-finance", "id" : "caiwu","children":[
		{"name":"日结管理","id" : "rijieguanli"},
		{"name":"月结管理","id" : "yuejieguanli"},
		{"name":"数据状态查询","id" : "zhuagntaichaxun"},
		{"name":"数据查询","id" : "shujuchaxun","children":[
			{"name":"日结数据","id":"rijieshuju","children":[
				{"name":"日结汇总查询","id":"rijiehuizongchaxun"},
				{"name":"日结明细查询","id":"rijiemingxichaxun"},
				{"name":"文件导出下载","id":"wenjiandaochuxiazai"}
			]},
			{"name":"预收保费","id":"yushoubaofei","children":[
				{"name":"预收保费余额明细表","id":"ysbfyemxbiao"},
				{"name":"预收保费余额汇总表","id":"ysbfyehzbiao"},
				{"name":"预收保费账龄分析明细表","id":"ysbfzlfxmxbiao"},
				{"name":"预收保费账龄分析汇总表","id":"ysbfzlfxhzbiao"}
			]}
		]},
		{"name":"薪酬数据管理","id" : "xinchouguanli"},
		{"name":"预留预提数据管理","id" : "yuliuguanli"},
		{"name":"人管数据查询","id" : "renguanchaxun"},
		{"name":"再保数据管理","id" : "zaibaoguanli"},
		{"name":"绩效数据管理","id" : "jixiaoguanli"}
	]},
	{"name" : "业务管理", "icon" : "w-business", "id" : "yewu"},
	{"name" : "系统核算管理", "icon" : "w-computation", "id" : "hesuan", "children" : [
		{"name" : "日结核对报送","background":"#525c65","id" : "hedui", "urls" : "pages/index.html"},
		{"name" : "日结综合查询", "background":"#525c65","id" : "zonghe"},
		{"name" : "日结影像监控","background":"#59646e","id" : "yixiangkongzhi", "urls" : "pages/daily_monitoring.html"},
		{"name" : "日结统计报表","background":"#59646e","id" : "tongji"},
		{"name" : "日结信息查询","background":"#59646e","id" : "xinxichaxun"},
		{"name" : "系统核对指南","background":"#59646e","id" : "heduizhinan"},
		{"name" : "核对自动化率","background":"#59646e","id" : "zidonghua"}
	]},
	{"name" : "财务账号管理", "icon" : "w-account", "id" : "zhanghao"},
	{"name" : "电子档案管理", "icon" : "w-record", "id" : "dangan", "children" : [
		{"name":"日结影像查询","background":"#59646e","id" : "caiwu", "id" : "yingxiangchaxun", "urls" : "pages/daily_image.html"},
		{"name":"人工上传影像","id":"rgscyingxiang"},
		{"name":"月结影像查询","id":"yjyxchaxun"},
		{"name":"月度监控","id":"ydjiankong"},
		{"name":"出纳影像查询","id":"cnyxchaxun"},
		{"name":"电子档案查询","id":"dzdachaxun"},
		{"name":"人管影像查询","id":"rgyxchaxun"},
		{"name":"日结影像补录日志","id":"rjyxblrizhi"},
		{"name":"问题件修复","id":"wtjxiufu"}
	]},
	{"name" : "系统管理", "icon" : "w-system", "id" : "guanli"},
	{"name" : "文件下载管理", "icon" : "w-download", "id" : "xiazai","children":[
		{"name":"日结导出下载","id":"rjdcxiazai"},
		{"name":"月结导出下载","id":"yjdcxiazai"}
	]},
	{"name" : "核算品控管理", "icon" : "w-quality-control", "id" : "pingkong","children":[
		{"name":"品控工作任务","id":"pkgzrenwu"},
		{"name":"待核工单查询","id":"dhgdchaxun"},
		{"name":"品控统计查询","id":"pktjchaxun"},
		{"name":"品控管理报表","id":"pkglbaobiao"},
		{"name":"分公司工单（数量及时效）统计表","id":"fgsgdtongjibiao"},
		{"name":"指定分公司进行分配","id":"zdfgsjxfenpei"},
		{"name":"指定分公司个数进行分配","id":"zdfgsgsjxfenpei"},
		{"name":"核算品控报告","id":"hspkbaogao"}
	]}
];
var str = '';
function getMenuDatas(arr){
	for(var i in arr){
		str += '<li class="w-nav-w"><span class="w-click-list';
		if(arr[i]["icon"] != undefined){
			str += ' w-f-con '+arr[i]["icon"]+ '" ';
		}else{
			str += '" ';
		}
		str += 'id="'+arr[i]["id"]+'" name="'+arr[i]["urls"]+'" title="'+arr[i]["name"]+'">'
		str += arr[i]["name"]+ '</span>';
		if(arr[i]["children"] != null){
			if(arr[i]["open"] == true){
				str += '<ul class="w-second-menu-wrap w-second-menu" style="display:block">';
			}else{
				str += '<ul class="w-second-menu-wrap w-second-menu">';
			}
			getMenuDatas(arr[i]["children"]);
			str += '</ul>';
		}
		str += '</li>';
	}
}
function setMenuDatas(arr){
	getMenuDatas(arr);
	$(".inwrap").html(str);
}

//重设可添加的tab的ul宽度
function resetUlW(){
	var getLiW = 0;
	for(var i = 0; i < $(".append_tabs li").length;i++){
		getLiW += $(".append_tabs li").eq(i).width()+62;
	}
	$(".append_tabs").width(getLiW);
}
//重设添加或删除之后的当前位置
function resetCurPosition(){
	if($(".append_tabs").width() > $(".append_tabs_panel").width()){
		var getRemainedW = $(".append_tabs_panel").width() - $(".append_tabs").width();
		$(".append_tabs").stop().animate({"margin-left":getRemainedW+"px"},100);
		$(".span_prev,.span_next").show();
	}else{
		$(".append_tabs").stop().animate({"margin-left":"0px"},100);
		$(".span_prev,.span_next").hide();
	}
}
function clickOption(ulMarginLeft){
	if(ulMarginLeft >= 0){
		ulMarginLeft = 0;
		startIndex = 0;
	}else if(ulMarginLeft <= $(".append_tabs_panel").width() - $(".append_tabs").width()){
		ulMarginLeft = $(".append_tabs_panel").width() - $(".append_tabs").width();
		startIndex = $(".append_tabs li").length;
	}else{
	}
	$(".append_tabs").stop().animate({"margin-left": ulMarginLeft+"px"},100);
}
