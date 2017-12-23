$(function(){
//调用走公告数据


//调用走马灯效果
$('.myscroll').myScroll({
	speed: 40, //数值越大，速度越慢
	rowHeight: 42 //li的高度
});	
	
	
//调用datatable	
/**
 * Created by zzg on 2017/4/26.
 */

var  page = {
    "pageId":"",
    "data":null,
    "maxshowpageitem":5,//最多显示的页码个数
    "pagelistcount":10,//每一页显示的内容条数
      "init":function(listCount,currentPage,options){
      	this.data=options.data,
      	this.pageId=options.id,
    this.maxshowpageitem=options.maxshowpageitem,//最多显示的页码个数
    this.pagelistcount=options.pagelistcount//每一页显示的内容条数
    page.initPage(listCount,currentPage);
  },
  /**
     * 初始化数据处理
     * @param listCount 列表总量
     * @param currentPage 当前页
     */
  "initPage":function(listCount,currentPage){
        var maxshowpageitem = page.maxshowpageitem;
        if(maxshowpageitem!=null&&maxshowpageitem>0&&maxshowpageitem!=""){
            page.maxshowpageitem = maxshowpageitem;
        }
        var pagelistcount = page.pagelistcount;
        if(pagelistcount!=null&&pagelistcount>0&&pagelistcount!=""){
            page.pagelistcount = pagelistcount;
        }   
        page.pagelistcount=pagelistcount;
        if(listCount<0){
            listCount = 0;
        }
        if(currentPage<=0){
            currentPage=1;
        }
     
        page.setPageListCount(listCount,currentPage);
   },
    /**
     * 初始化分页界面
     * @param listCount 列表总量
     */
    "initWithUl":function(listCount,currentPage){
        var pageCount = 1;
        if(listCount>=0){
            var pageCount = listCount%page.pagelistcount>0?parseInt(listCount/page.pagelistcount)+1:parseInt(listCount/page.pagelistcount);
        }
        var appendStr = page.getPageListModel(pageCount,currentPage);
        $("#"+page.pageId).html(appendStr);
    },
    /**
     * 设置列表总量和当前页码
     * @param listCount 列表总量
     * @param currentPage 当前页码
     */
    "setPageListCount":function(listCount,currentPage){
        listCount = parseInt(listCount);
        currentPage = parseInt(currentPage);
        page.initWithUl(listCount,currentPage);
        page.initPageEvent(listCount);
        page.viewPage(currentPage,listCount,page.pagelistcount,page.data)
//      fun(currentPage);
    },
    //页面显示功能
     "viewPage":function (currentPage,listCount,pagelistcount,data){
            var NUM=listCount%pagelistcount==0?listCount/pagelistcount:parseInt(listCount/pagelistcount)+1;
            if(currentPage==NUM){
                var result=data.slice((currentPage-1)* pagelistcount,data.length);
            }
            else{
                var result=data.slice((currentPage-1)*pagelistcount,(currentPage-1)*pagelistcount+pagelistcount);
            }
            options.callBack(result);
    },
    "initPageEvent":function(listCount){
        $("#"+page.pageId +">li[class='pageItem']").on("click",function(){
            page.setPageListCount(listCount,$(this).attr("page-data"),page.fun);
        });
    },
    "getPageListModel":function(pageCount,currentPage){
        var prePage = currentPage-1;
        var nextPage = currentPage+1;
        var prePageClass ="pageItem";
        var nextPageClass = "pageItem";
        if(prePage<=0){
            prePageClass="pageItemDisable";
        }
        if(nextPage>pageCount){
            nextPageClass="pageItemDisable";
        }
        var appendStr ="";
        appendStr+="<li class='"+prePageClass+"' page-data='1' page-rel='firstpage'>首页</li>";
        appendStr+="<li class='"+prePageClass+"' page-data='"+prePage+"' page-rel='prepage'>&lt;</li>";
        var miniPageNumber = 1;
        if(currentPage-parseInt(page.maxshowpageitem/2)>0&&currentPage+parseInt(page.maxshowpageitem/2)<=pageCount){
            miniPageNumber = currentPage-parseInt(page.maxshowpageitem/2);
        }else if(currentPage-parseInt(page.maxshowpageitem/2)>0&&currentPage+parseInt(page.maxshowpageitem/2)>pageCount){
            miniPageNumber = pageCount-page.maxshowpageitem+1;
            if(miniPageNumber<=0){
                miniPageNumber=1;
            }
        }
        var showPageNum = parseInt(page.maxshowpageitem);
        if(pageCount<showPageNum){
            showPageNum = pageCount;
        }
        for(var i=0;i<showPageNum;i++){
            var pageNumber = miniPageNumber++;
            var itemPageClass = "pageItem";
            if(pageNumber==currentPage){
                itemPageClass = "pageItemActive";
            }

            appendStr+="<li class='"+itemPageClass+"' page-data='"+pageNumber+"' page-rel='itempage'>"+pageNumber+"</li>";
        }
        appendStr+="<li class='"+nextPageClass+"' page-data='"+nextPage+"' page-rel='nextpage'>&gt;</li>";
        appendStr+="<li class='"+nextPageClass+"' page-data='"+pageCount+"' page-rel='lastpage'>尾页</li>";
       return appendStr;

    }
}

var datas=[
    {"did":1,"name":"又降价！Intel狂推首款可超频i3 中国特供","price":36,"img_sm":"p0281.jpg","material":"明虾、番茄酱、白糖、白醋、葱、姜、淀粉"},
    {"did":2,"name":"父子俩野营时喂了一只野猫 打开帐篷震惊","price":16.5,"img_sm":"p2679.jpg","material":"切片吐司、紫薯、铁棍山药、糖桂花、炼乳"},
    {"did":3,"name":"iPhone 7为啥卖不动？终于知道了！","price":32,"img_sm":"p8489.jpg","material":"三黄鸡、杭椒、干红椒、新鲜小米椒、麻椒、八角、香叶、葱、姜、生抽"},
    {"did":4,"name":"7吨超美国！中国革命性大卫星领先世界1代","price":36,"img_sm":"p0281.jpg","material":"明虾、番茄酱、白糖、白醋、葱、姜、淀粉"},
    {"did":5,"name":"昨晚全世界都被杭州美哭了(图)","price":16.5,"img_sm":"p2679.jpg","material":"切片吐司、紫薯、铁棍山药、糖桂花、炼乳"},
    {"did":6,"name":"A系处理器成历史！苹果从零自研GPU","price":32,"img_sm":"p8489.jpg","material":"三黄鸡、杭椒、干红椒、新鲜小米椒、麻椒、八角、香叶、葱、姜、生抽"},
    {"did":7,"name":"黑科技让NVMe SSD性能爆炸！再不浪费容量","price":36,"img_sm":"p0281.jpg","material":"明虾、番茄酱、白糖、白醋、葱、姜、淀粉"},
    {"did":8,"name":"都是泪！QQ最新大数据：年轻人看完沉默了","price":16.5,"img_sm":"p2679.jpg","material":"切片吐司、紫薯、铁棍山药、糖桂花、炼乳"},
    {"did":9,"name":"特斯拉什么车都要造：但就是不造它","price":32,"img_sm":"p8489.jpg","material":"三黄鸡、杭椒、干红椒、新鲜小米椒、麻椒、八角、香叶、葱、姜、生抽"},
    {"did":10,"name":"新一代宝马X4首次现身：内外大换血！","price":36,"img_sm":"p0281.jpg","material":"明虾、番茄酱、白糖、白醋、葱、姜、淀粉"},
    {"did":11,"name":"又降价！Intel狂推首款可超频i3 中国特供","price":36,"img_sm":"p0281.jpg","material":"明虾、番茄酱、白糖、白醋、葱、姜、淀粉"},
    {"did":12,"name":"父子俩野营时喂了一只野猫 打开帐篷震惊","price":16.5,"img_sm":"p2679.jpg","material":"切片吐司、紫薯、铁棍山药、糖桂花、炼乳"},
    {"did":13,"name":"iPhone 7为啥卖不动？终于知道了！","price":32,"img_sm":"p8489.jpg","material":"三黄鸡、杭椒、干红椒、新鲜小米椒、麻椒、八角、香叶、葱、姜、生抽"},
    {"did":14,"name":"7吨超美国！中国革命性大卫星领先世界1代","price":36,"img_sm":"p0281.jpg","material":"明虾、番茄酱、白糖、白醋、葱、姜、淀粉"},
    {"did":15,"name":"昨晚全世界都被杭州美哭了(图)","price":16.5,"img_sm":"p2679.jpg","material":"切片吐司、紫薯、铁棍山药、糖桂花、炼乳"},
    {"did":16,"name":"A系处理器成历史！苹果从零自研GPU","price":32,"img_sm":"p8489.jpg","material":"三黄鸡、杭椒、干红椒、新鲜小米椒、麻椒、八角、香叶、葱、姜、生抽"},
    {"did":17,"name":"黑科技让NVMe SSD性能爆炸！再不浪费容量","price":36,"img_sm":"p0281.jpg","material":"明虾、番茄酱、白糖、白醋、葱、姜、淀粉"},
    {"did":18,"name":"都是泪！QQ最新大数据：年轻人看完沉默了","price":16.5,"img_sm":"p2679.jpg","material":"切片吐司、紫薯、铁棍山药、糖桂花、炼乳"},
    {"did":19,"name":"特斯拉什么车都要造：但就是不造它","price":32,"img_sm":"p8489.jpg","material":"三黄鸡、杭椒、干红椒、新鲜小米椒、麻椒、八角、香叶、葱、姜、生抽"},
    {"did":20,"name":"新一代宝马X4首次现身：内外大换血！","price":36,"img_sm":"p0281.jpg","material":"明虾、番茄酱、白糖、白醋、葱、姜、淀粉"},
    {"did":21,"name":"二十四节气怎样来的？老祖宗真智慧","price":32,"img_sm":"p8489.jpg","material":"三黄鸡、杭椒、干红椒、新鲜小米椒、麻椒、八角、香叶、葱、姜、生抽"}
];
var options={
	"id":"page",//显示页码的元素
	"data":datas,//显示数据
    "maxshowpageitem":3,//最多显示的页码个数
    "pagelistcount":8,//每页显示数据个数
    "callBack":function(result){
    	     var cHtml="";
        for(var i=0;i<result.length;i++){
            cHtml+="<tr>"
            				+"<td class='FWD_tables_td FWD_ellipsis' title='"+result[i].name+"'>"+ result[i].name+"</td>"
            				+"<td class='FWD_tables_td FWD_ellipsis' title='"+result[i].price+"'>"+ result[i].price+"</td>"
            				+"<td class='FWD_tables_td FWD_ellipsis' title='"+result[i].img_sm+"'>"+ result[i].img_sm+"</td>"
            				+"<td class='FWD_tables_td FWD_ellipsis' title='"+result[i].material+"'>"+ result[i].material+"</td>"
            				+"<td class='FWD_tables_td FWD_ellipsis' title='"+result[i].name+"'>"+ result[i].name+"</td>"
            				+"<td class='FWD_tables_td FWD_ellipsis' title='"+result[i].price+"'>"+ result[i].price+"</td>"
            				+"<td class='FWD_tables_td FWD_ellipsis' title='"+result[i].img_sm+"'>"+ result[i].img_sm+"</td>"
            				+"<td class='FWD_tables_td FWD_ellipsis' title='"+result[i].material+"'>"+ result[i].material+"</td>"
            				+"</tr>";//处理数据
            
        }
        $("#dragTable").html(cHtml);//将数据增加到页面中
    }
};
page.init(datas.length,1,options);


	

//点击待核保任务、待跟进事项、合同质检切换视图
$('.task_tab_warp').on('click','.task_tab ',function(){
	var $this = $(this);
	var index_ = $(this).index();
	$this.addClass('active').siblings('.task_tab').removeClass('active');
	$('.search_input_warp').eq(index_).show(0).siblings('.search_input_warp').hide(0);
})
	
	
var myChart1 = echarts.init(document.getElementById('main1'));	
var myChart2 = echarts.init(document.getElementById('main2'));	
var myChart3 = echarts.init(document.getElementById('main3'));	
option1 = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {	//设置仪表盘
        show : false,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'任务件处理进度',
            type:'gauge',
            center : ['50%', '50%'],    // 默认全局居中
            radius : [0, '75%'],
            startAngle: 140,
            endAngle : -140,
            min: 0,                     // 最小值
            max: 100,                   // 最大值
            precision: 0,               // 小数精度，默认为0，无小数点
            splitNumber: 10,             // 分割段数，默认为5
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lightgreen'],[0.4, 'lightgreen'],[0.8, 'lightgreen'],[1, 'lightgreen']], 
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                show: true,        // 属性show控制显示与否，默认不显示
                splitNumber: 5,    // 每份split细分多少段
                length :8,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#eee',
                    width: 1,
                    type: 'solid'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show: true,
                formatter: function(v){
                    switch (v+''){
                        case '10': return '100';
                        case '30': return '200';
                        case '60': return '300';
                        case '90': return '400';
                        default: return '';
                    }
                },
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#333'
                }
            },
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                length :30,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#eee',
                    width: 2,
                    type: 'solid'
                }
            },
            pointer : {
                length : '80%',
                width : 8,
                color : 'auto'
            },
            title : {
                show : true,
                offsetCenter: ['-65%', -10],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#333',
                    fontSize : 15
                }
            },
            detail : {
                show : true,
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth: 0,
                borderColor: '#ccc',
                width: 100,
                height: 40,
                offsetCenter: ['-60%', 10],       // x, y，单位px
                formatter:'{value}件',
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontSize : 24
                }
            },
            data:[
            	{value: 50, name: '处理进度'}
            ]
        }
    ]
};
option2 = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {	//设置仪表盘
        show : false,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'任务件处理时间',
            type:'gauge',
            center : ['50%', '50%'],    // 默认全局居中
            radius : [0, '75%'],
            startAngle: 140,
            endAngle : -140,
            min: 0,                     // 最小值
            max: 5,                   // 最大值
            precision: 0,               // 小数精度，默认为0，无小数点
            splitNumber: 1,             // 分割段数，默认为5
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'skyblue'],[0.4, 'skyblue'],[0.8, 'skyblue'],[1, 'skyblue']], 
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                show: true,        // 属性show控制显示与否，默认不显示
                splitNumber: 5,    // 每份split细分多少段
                length :8,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#eee',
                    width: 1,
                    type: 'solid'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show: true,
                formatter: function(v){
                    switch (v+''){
                        case '0': return '0';
                        case '1': return '1';
                        case '2': return '2';
                        case '3': return '3';
                        case '4': return '4';
                        case '5': return '5';
                        default: return '';
                    }
                },
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#333'
                }
            },
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                length :30,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#eee',
                    width: 2,
                    type: 'solid'
                }
            },
            pointer : {
                length : '80%',
                width : 8,
                color : 'auto'
            },
            title : {
                show : true,
                offsetCenter: ['-65%', -10],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#333',
                    fontSize : 15
                }
            },
            detail : {
                show : true,
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth: 0,
                borderColor: '#ccc',
                width: 100,
                height: 40,
                offsetCenter: ['-60%', 10],       // x, y，单位px
                formatter:'{value}h/件',
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontSize : 24
                }
            },
            data:[
            	
            	{value: 4, name: '件均处理时间'}
            
            ]
        }
    ]
};

option3 = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {	//设置仪表盘
        show : false,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'差错率',
            type:'gauge',
            center : ['50%', '50%'],    // 默认全局居中
            radius : [0, '75%'],
            startAngle: 140,
            endAngle : -140,
            min: 0,                     // 最小值
            max: 100,                   // 最大值
            precision: 0,               // 小数精度，默认为0，无小数点
            splitNumber: 10,             // 分割段数，默认为5
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lightgreen'],[0.4, 'skyblue'],[0.8, 'orange'],[1, '#ff4500']], 
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                show: true,        // 属性show控制显示与否，默认不显示
                splitNumber: 5,    // 每份split细分多少段
                length :8,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#eee',
                    width: 1,
                    type: 'solid'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show: true,
                formatter: function(v){
                    switch (v+''){
                        case '10': return '弱';
                        case '30': return '低';
                        case '60': return '中';
                        case '90': return '高';
                        default: return '';
                    }
                },
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#333'
                }
            },
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                length :30,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#eee',
                    width: 2,
                    type: 'solid'
                }
            },
            pointer : {
                length : '80%',
                width : 8,
                color : 'auto'
            },
            title : {
                show : true,
                offsetCenter: ['-65%', -10],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#333',
                    fontSize : 15
                }
            },
            detail : {
                show : true,
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth: 0,
                borderColor: '#ccc',
                width: 100,
                height: 40,
                offsetCenter: ['-60%', 10],       // x, y，单位px
                formatter:'{value}%',
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontSize : 24
                }
            },
            data:[
            	{value: 80, name: '差错率'}
            ]
        }
    ]
};
clearInterval(timeTicket1);
var timeTicket1 = setInterval(function (){
    option1.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
    myChart1.setOption(option1, true);
},2000)
clearInterval(timeTicket2);
var timeTicket2 = setInterval(function (){
//  option2.series[0].data[0].value = 20;
    myChart2.setOption(option2, true);
},2000)
clearInterval(timeTicket3);
var timeTicket3 = setInterval(function (){
    option3.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
    myChart3.setOption(option3, true);
},2000)
                    	
//点击核保任务、保全任务、理赔任务tab栏切换
$('.Task_ranking_tab_li').click(function(){
	$(this).addClass('active').siblings('.Task_ranking_tab_li').removeClass('active')
})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
