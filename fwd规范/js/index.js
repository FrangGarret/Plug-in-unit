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
    	console.log(result)
    	     var cHtml="";
        for(var i=0;i<result.length;i++){
            cHtml+="<tr><td>"+ result[i].name+"</td></tr>";//处理数据
            
        }
        console.log(cHtml)
        $("#dragTable").html(cHtml);//将数据增加到页面中
        console.log($(".tables").html())
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
