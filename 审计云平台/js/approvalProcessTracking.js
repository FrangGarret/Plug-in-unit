$(function() {
	$(".publicTopic").click(function() {
		$(this).next('ul').stop().slideToggle(200);
	});
    setNavHeight();
    var urlsTishu = ["my_number.html","apply.html","my_task.html"];
    var urlsTask = ["task_allot.html"];
    var urlsCharts = ["query_log.html"];
    $(".publicNav li").on('click',function(){
        if($(this).parent().hasClass("tishu_toggle")){
            changePage(urlsTishu[$(this).index()]);
        }else if($(this).parent().hasClass("task_toggle")){
            changePage(urlsTask[$(this).index()]);
        }else if($(this).parent().hasClass("rizhi_toggle")){
            changePage(urlsCharts[$(this).index()]);
        }
        $(".publicNav li i").removeClass("current");
        $(this).find("i").addClass("current");
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
            $(obj).parent().hide().parent().find(".div_select").html($(obj).html()).css({"color":"#333"});
        },
        hideSel : function(){
            $(".list_ul_select").hide();
        }
    });
});
function changePage(_url){
    $.ajax({
        url : _url,
        type : 'get',
        dataType : 'html',
        success : function(data){
            $("#mainContent").html(data);
            setNavHeight();
        }
    });
}
//设置左侧菜单高度
function setNavHeight(){
    var bodyH = $("body").height()-78,windowsH =  $(window).height()-78;
    var setNavH = bodyH >= windowsH ? bodyH : windowsH;
    $('.sideNav').height(setNavH);
}
window.onresize = function(){
    setNavHeight();
}