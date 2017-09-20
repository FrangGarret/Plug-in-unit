$(function(){
	//.form_tabs li
	var hideArr = '<span class="icon_form_tabs_cur"></span>';
	$("#formTabsTop li").on("click",function(){
		if($(this).hasClass("current")){
			return false;
		}else{
			$(this).addClass("current").siblings().removeClass("current");
			$(".icon_form_tabs_cur").remove();
			$(this).append(hideArr);
			$(".form_tabs_con").eq($(this).index()).show().siblings().hide();
		}
		setNavHeight();
	});
	
	//.form_tabs li secend
	var hideArrBlue = '<span class="icon_form_tabs_cur_blue"></span>';
	$("#formTabsBottom li").on("click",function(){
		if($(this).hasClass("current")){
			return false;
		}else{
			$(this).addClass("current").siblings().removeClass("current");
			$(".icon_form_tabs_cur_blue").remove();
			$(this).append(hideArrBlue);
			$(".form_tabs_bottom_con").eq($(this).index()).show().siblings().hide();
		}
		setNavHeight();
	});
	
	
	//确认报送
	$("#sureSend").on("click",function(){
		$("#sureSendPanel").show();
		setListTable(listTableRenWei,"#listCon1_1");
		setNavHeight();
	});
	
	//核对报送进度提交
	$("#jinDuSearch").on("click",function(){
		console.log($("#selectZhuanTai").val())
		if($("#yueFen").val() == "" ){
			$("#yueFen").css({"border":"1px solid red"});
		}else if($("#canshu").val() == ""){
			$("#canshu").css({"border":"1px solid red"});
		}else{
			$("#hideJinDuSearch").show();
			setListTable(listTableJinDu,"#listConJinDu");
			setNavHeight();
			var offsetT = $("#hideJinDuSearch").offset().top;
			$("html,body").animate({scrollTop : offsetT},100);
		}
	});
	$("input,sclect").focus(function(){
		$(this).css({"border":"1px solid #ababab"});
	});
	$("#listConJinDu").on("click"," tr td",function(){
		$("#hideJinDuSearchHide").show();
		setListTable(listTableJinDuL,"#hasLineTableL");
		setListTable(listTableJinDuR,"#hasLineTableR");
		setNavHeight();
	})
	
	//点击查看详情
	$('#listCon,#listCon1').on('click','.list_oper',function(){
		$(".bg_pop,#showPop").show();
		changePage('#boxPanel','pages/daily_details.html');
		$(".title_left").html("日结报账管理明细");
		$("body").css({"overflow":"hidden"});
	});
	$("#showPop").on("click",".icon_close",function(){
		$(".bg_pop,#showPop").hide();
		$("body").css({"overflow":"auto"});
	});
	
	//历史工单查询
	$('#data').on('click',function(){
		$('#box_table_img').hide();
		changePage('#data_company_remedy','pages/data_company_remedy.html');
	});
	$('#images').on('click',function(){
		$("#yixiangkongzhi").click();
	});
	$('#baoSongHide').on('click',".list_oper_yingxiang",function(){
		$("#yingxiangchaxun").click();
	});
	$('#data_company_remedy').on('click','.link_back',function(){
		$('#box_table_img').show();
		$('#data_company_remedy').html("");
	});
	
//	//调用，模拟select
//	$.setSel(".select");
	
	//baoSongSubmit
	$("#baoSongSubmit").on("click",function(){
		$("#baoSongHide").show();
		//表格赋值
		setListTable(listTableRen,"#listCon1");
		setNavHeight();
	});
	
	//图片加载完成重新设置左侧菜单高度
	$("img").load(function(){
		setNavHeight();
	});
});

//表格数据-人工复核
var listTableRen = {
	"tBody" : [
		["政保合作非大病", "20160919", "-", "116", "人民币", "175.868.23", "人工核对", "人工待核对", "付", "20160922-001",[{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]],
		["政保合作非大病", "20160919", "-", "116", "人民币", "175.868.23", "人工核对", "人工待核对", "付", "20160922-001",[{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]],
		["政保合作非大病", "20160919", "-", "116", "人民币", "175.868.23", "人工核对", "人工待核对", "付", "20160922-001",[{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]],
		["政保合作非大病", "20160919", "-", "116", "人民币", "175.868.23", "人工核对", "人工待核对", "付", "20160922-001",[{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]]
	]
}
//表格数据-未人工复核
var listTableRenWei = {
	"tBody" : [
		["唐山中支", "政保合作非大病-理赔", "20170901", "-", "116", "人民币", "175.868.23", "人工核对",  "人工待核对", "付", "20160922-001", [{"name":"color_red", "value" : "人工复核"}]],
		["唐山中支", "（被）代付款-总公司集中待付", "20170901", "-", "116", "人民币", "175.868.23", "人工核对",  "人工待核对", "付", "20160922-001", [{"name":"color_blue", "value" : "自动报送"}]]
	]
}
//表格数据-自动报送
var listTable = {
	"tBody" : [
		["新保期缴－转保费收入", "20160919", "-", "116", "人民币", "175.868.23", "人工优先", "待核对", "收", "20160922-001", [{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]],
		["新保期缴－转保费收入", "20160919", "-", "116", "人民币", "175.868.23", "人工优先", [{"name":"color_red", "value" : "核对未过"}], "收", "20160922-001",[{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]],
		["新保期缴－转保费收入", "20160919", "-", "116", "人民币", "175.868.23", "人工优先", "待核对", "收", "20160922-001", [{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]],
		["新保期缴－转保费收入", "20160919", "-", "116", "人民币", "175.868.23", "人工优先", "待核对", "收", "20160922-001", [{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]],
		["新保期缴－转保费收入", "20160919", "-", "116", "人民币", "175.868.23", "人工优先", [{"name":"color_blue", "value" : "核对通过"}], "收", "20160922-001",[{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]],
		["新保期缴－转保费收入", "20160919", "-", "116", "人民币", "175.868.23", "人工优先", "待核对", "收", "20160922-001", [{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]],
		["新保期缴－转保费收入", "20160919", "-", "116", "人民币", "175.868.23", "人工优先", "待核对", "收", "20160922-001", [{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]],
		["新保期缴－转保费收入", "20160919", "-", "116", "人民币", "175.868.23", "人工优先", "待核对", "收", "20160922-001", [{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]],
		["新保期缴－转保费收入", "20160919", "-", "116", "人民币", "175.868.23", "人工优先", "待核对", "收", "20160922-001", [{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]],
		["新保期缴－转保费收入", "20160919", "-", "116", "人民币", "175.868.23", "人工优先", "待核对", "收", "20160922-001", [{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]],
		["新保期缴－转保费收入", "20160919", "-", "116", "人民币", "175.868.23", "人工优先", "待核对", "收", "20160922-001", [{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]],
		["新保期缴－转保费收入", "20160919", "-", "116", "人民币", "175.868.23", "人工优先", "待核对", "收", "20160922-001", [{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]],
		["新保期缴－转保费收入", "20160919", "-", "116", "人民币", "175.868.23", "人工优先", "待核对", "收", "20160922-001", [{"name":"list_oper", "value" : "查看"},{"name":"list_daochu","value" : "导出"}],[{"name":"list_oper_yingxiang", "value" : "查看"}]]
	]
}
//表格数据-核对报送进度查询
var listTableJinDu = {
	"tBody" : [
		["-", "全司", "0", "20170901"],
		["1", "北京分公司", "0", "20170901"],
		["2", "天津分公司", "0", "20170901"],
		["3", "河北分公司", "0", "20170901"],
		["4", "山西分公司", "0", "20170901"],
		["5", "辽宁分公司", "0", "20170901"],
		["6", "大连分公司", "0", "20170901"],
		["7", "黑龙江分公司", "0", "20170901"]
	]
}
//表格数据-核对报送进度查询左
var listTableJinDuL = {
	"tBody" : [
		["1", "河北分公司本部"],
		["2", "唐山中支"],
		["3", "河北分公司本部"],
		["4", "唐山中支"],
		["5", "河北分公司本部"],
		["6", "唐山中支"],
		["7", "河北分公司本部"],
		["8", "唐山中支"]
	]
}
//表格数据-核对报送进度查询右
var listTableJinDuR = {
	"tBody" : [
		["08/30_19:00","08/30_19:00","<div class='timebg1'>08/30_19:00</div>","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00"],
		["08/30_19:00","<div class='timebg2'>08/30_19:00</div>","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00"],
		["08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","<div class='timebg3'>08/30_19:00</div>","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00"],
		["08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00"],
		["08/30_19:00","08/30_19:00","<div class='timebg4'>08/30_19:00</div>","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00"],
		["08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00"],
		["08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00"],
		["08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00","08/30_19:00"]
	]
}

//表格赋值
setListTable(listTable,"#listCon");