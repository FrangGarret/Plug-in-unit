$(function(){
	$('.r-health').on('click',function(){
		$('.alert-bg1').show();
	});
	$('.r-policy').on('click',function(){
		$('.alert-bg2').show();
	});
	$('.alert-bg1').on('click',function(){
		$('.alert-bg1').hide();
	});
	$('.alert-bg2').on('click',function(){
		$('.alert-bg2').hide();
	});
	
//	huaban
//	$('.tool-flower').hover(function(){
//		$('.tool-wrap').show('500');
//		$('.tool-flower').hide();
//	});
	var flag=false;
	$('.tool-flower').on('click',function(){
		if(flag==false){
			$('.tool-wrap').show('500');
			flag=true;
		}else{
			$('.tool-wrap').hide();
			flag=false;
		}
	});
	$('.bd_info_top').on('click',function(){
		$('.tool-wrap').hide();
	});

//书本跳转
	$('#tool-inwrap-2').on('click',function(){
		window.location.href='../pages/book_info.html';
	});
	
	$('.box_logo').on('click',function(){
		window.location.href='../pages/info.html';
	});
	
	var trList=$('.s-t-last');
	for (var i=0;i<trList.length;i++) {
		$('.s-t-last').eq(i).find('td').last().css({
			'color':'#f2862c',
			'cursor':'pointer'
		});
	}
});
