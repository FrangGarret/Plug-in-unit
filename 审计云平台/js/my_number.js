$(function(){

    /*$(".date_selector").css({"z-index":"9"});*/
    $.setSel(".select");
    $(".btn_add").on('click',function(){
        $(".tishu_toggle li i").removeClass("current");
        $(".tishu_toggle li").eq(0).find("i").addClass("current");
    });
    $(".toggle_cur li").on('click',function(){
        $(".tishu_toggle li i").removeClass("current");
        $(".tishu_toggle li").eq($(this).index()).find("i").addClass("current");
    });
    $(".unfold").on("click",function(){
        if($('.tab_wrap').is(":hidden")){
            $('.tab_wrap').stop().slideToggle();
            $(".unfold").html("收起<span></span>");
            $(".unfold span").css({'transform':'rotate(0deg)','top':'10px'});
        }else{
            $('.tab_wrap').stop().slideToggle();
            $(".unfold").html("展开<span></span>");
            $(".unfold span").css({'transform':'rotate(180deg)','top':'3px'});
        }
    });
    /* 全选反选 */
    $('input[name="checkAll"]').on('click',function(){
        var allTr=$(this).parents('.table1').find('tbody tr');
        for(var i=0;i<allTr.length;i++){
            if($(this).is(':checked')){
                allTr.eq(i).find('input[type=checkbox]').prop("checked", true);
            }else{
                allTr.eq(i).find('input[type=checkbox]').prop("checked", false);
            }
        }
    });
    $(".table1").on("click","tbody tr",function(){
        var all=$('.table1').find('tbody tr');
        if(!all.find('input[type="checkbox"]').checked){
            $('input[name="checkAll"]').prop("checked",false);
        }
        var allchek=$('.table1').find('tbody tr input[type="checkbox"]').length;
        var mychek=$('.table1').find('.checkDetial:checked').length;
        if(allchek == mychek){
            $('input[name="checkAll"]').prop("checked",true);
        }
    });
    /*删除*/
    $('.table2').on("click",".del_btnSmall",function(){
        $(this).closest('tr').remove();
    });
})

