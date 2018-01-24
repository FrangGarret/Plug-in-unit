//被保人信息数据
var recognizeeArr = [
	{"label" : "证件类型", "value" : "身份证", "tips" : {"show" : false}},
	{"label" : "性别", "value" : "女", "tips" : {"show" : false}},
	{"label" : "证件号码", "value" : "320282198903120098", "tips" : {"show" : false}},
	{"label" : "生日", "value" : "1985/01/01", "tips" : {"show" : false}},
	{"label" : "年龄", "value" : "30", "tips" : {"show" : false}},
	{"label" : "是否主被", "value" : "是", "tips" : {"show" : false}},
	{"label" : "单位所属行业", "value" : "互联网", "tips" : {"show" : false}},
	{"label" : "职业", "value" : "B-11公务员", "tips" : {"show" : false}},
	{"label" : "职业代码", "value" : "H362635", "tips" : {"show" : false}},
	{"label" : "手机号码", "value" : "13778967625", "tips" : {"show" : false}},
	{"label" : "国籍", "value" : "中国", "tips" : {"show" : false}},
	{"label" : "客户级别", "value" : "VIP", "tips" : {"show" : false}},
	{"label" : "与投保人关系", "value" : "配偶", "tips" : {"show" : false}},
	{"label" : "固定电话", "value" : "021-98765432", "tips" : {"show" : true, "value" : "PA432"}},
	{"label" : "个人年收入", "value" : "50万", "tips" : {"show" : false}}
]

//投保人信息数据
var policyHolderArr = [
	{"label" : "证件类型", "value" : "身份证", "tips" : {"show" : false}},
	{"label" : "性别", "value" : "女", "tips" : {"show" : false}},
	{"label" : "证件号码", "value" : "320282198903120098", "tips" : {"show" : false}},
	{"label" : "生日", "value" : "1985/01/01", "tips" : {"show" : false}},
	{"label" : "年龄", "value" : "30", "tips" : {"show" : false}},
	{"label" : "是否主被", "value" : "是", "tips" : {"show" : false}},
	{"label" : "单位所属行业", "value" : "互联网", "tips" : {"show" : false}},
	{"label" : "职业", "value" : "B-11公务员", "tips" : {"show" : false}},
	{"label" : "职业代码", "value" : "H362635", "tips" : {"show" : false}},
	{"label" : "手机号码", "value" : "13778967625", "tips" : {"show" : false}},
	{"label" : "国籍", "value" : "中国", "tips" : {"show" : false}},
	{"label" : "客户级别", "value" : "VIP", "tips" : {"show" : false}},
	{"label" : "与投保人关系", "value" : "配偶", "tips" : {"show" : false}},
	{"label" : "固定电话", "value" : "021-98765432", "tips" : {"show" : true, "value" : "PA432"}},
	{"label" : "个人年收入", "value" : "50万", "tips" : {"show" : false}}
]

//险种信息数据
var insureInfo = [
	{"name" : "安定平安一生健康险", "allCash" : "55,600.00", "cash" : "55,600.00", "age" : "33岁", "years" : "33岁", "dates" : "2017/1/18"},
	{"name" : "残疾险", "allCash" : "55,600.00", "cash" : "55,600.00", "age" : "33岁", "years" : "33岁", "dates" : "2017/1/18"}
]

//显示被保人信息
setPolicyHolder("#recognizee",recognizeeArr);
//显示投保人信息
setPolicyHolder("#showPolicyHolder",policyHolderArr);
//显示险种信息
setInsureDatas("#ProblemPartsTable",insureInfo)
function setPolicyHolder(dom,response){
	var policyDom = '';
	for(var i in response){
		policyDom += '<div class="d_list_box">';
		policyDom += '<div class="d_form_label">'+response[i]["label"]+'</div>';
		policyDom += '<div class="d_form_value">'+response[i]["value"];
		if(response[i]["tips"]["show"] == true){
			policyDom += '<div class="d_tips">'+response[i]["tips"]["value"]+'</div>';
		}
		policyDom += '</div>';
		policyDom += '</div>';
	}
	$(dom).html(policyDom);
}

function setInsureDatas(dom,response){
	var insureDom = '';
	for(var i in response){
		insureDom += '<div class="simulation_tr">';
		insureDom += '<div class="FWD_ellipsis simulation_tds simulation_td d_indent">'+insureInfo[i]["name"]+'</div>';
		insureDom += '<div class="FWD_ellipsis simulation_tds simulation_td d_indent">'+insureInfo[i]["allCash"]+'</div>';
		insureDom += '<div class="FWD_ellipsis simulation_tds simulation_td d_indent">'+insureInfo[i]["cash"]+'</div>';
		insureDom += '<div class="FWD_ellipsis simulation_tds simulation_td d_indent">'+insureInfo[i]["age"]+'</div>';
		insureDom += '<div class="FWD_ellipsis simulation_tds simulation_td d_indent">'+insureInfo[i]["years"]+'</div>';
		insureDom += '<div class="FWD_ellipsis simulation_tds simulation_td d_indent">'+insureInfo[i]["dates"]+'</div>';
		insureDom += '</div>';
	}
	$(dom).html(insureDom);
}

//饼图
var data = [{
    value: 1000,
    name: '销售',
    isTrue:'√'
}, {
    value: 1000,
    name: '风险',
    isTrue:'！'
}, {
    value: 1000,
    name: '产品',
    isTrue:'√'
}, {
    value: 1000,
    name: '其他',
    isTrue:'√'
}];
option = {
    backgroundColor: '#fff',
    title: {
        text: '风险视图',
        subtext: '',
        x: 'left',
        left:'0',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 20
        }
    },
    tooltip: {
        show: false,
        trigger: 'item',
        formatter:'{name}'
//      formatter: "{b}: {c} ({d}%)"
    },
    legend: {
    		show:false,
        orient: 'horizontal',
        bottom: '0%',
        data: ['<10w', '10w-50w', '50w-100w', '100w-500w', '>500w']
    },
    series: [{
        type: 'pie',
        center:['50%','50%'],
        selectedMode: 'single',
        radius: ['25%', '78%'],
        color: ['#7fc3f6', '#f68b7d', '#7fc3f6', '#7fc3f6'],

        label: {
            normal: {
                position: 'inner',
                formatter: function(param) {
                     return param.name + '\n' 
                 },
                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }]
};
var myChart = echarts.init(document.getElementById('echarts'));
myChart.setOption(option, true);



$(function(){
	$(".main_con").on("click","#menuFixed",function(){
		if($(this).hasClass("is_show")){
			$(this).removeClass("is_show");
			$("#UnderwritingResults").css({"transform":"translateY(100%)"});
		}else{
			$(this).addClass("is_show");
			$("#UnderwritingResults").css({"transform":"translateY(0%)"});
		}
	});
	$(".Policy_information_left").on("click",".Insure_single_tab_li",function(){
		$(this).addClass("active").siblings(".Insure_single_tab_li").removeClass("active");
		$(".Policy_thisContent").eq($(this).index()).show().siblings(".Policy_thisContent").hide();
	})
});