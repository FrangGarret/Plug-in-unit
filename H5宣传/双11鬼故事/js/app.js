
$('.btn-start').on('click',function(){
	$('.first-page').removeClass('active');
	$('.last-page').removeClass('active');
	$('.container-video').addClass('active');
	$('video')[0].play();	
});
  $(document).ready(function(){

$('.screen-container').width(window.screen.availWidth+"px");
$('.screen-container').height(window.screen.availHeight+"px");

});
	 $(".btn-goout").click(function(){
		  $(".share_box").show();
		});
	$(".share_box").click(function(){
		  $(".share_box").hide();
		});
$('video').on('ended',function(){
	$('.first-page,.container-video').removeClass('active');
	$('.last-page').addClass('active');
});

		var percent=0;
		setInterval(function(){
			percent++;if(percent<100){
				$('#loading_font').html('Loading  '+percent+'%');
				}
				
				},100)
			$('.btn-start').hide();
		window.onload=function(){
				$('.btn-start').show();
				$('#loading_font').hide();
				$('#loading').hide();
			
			}
$('.btn-restart').on('click',function(){
	$('.last-page').removeClass('active');
	$('.first-page').removeClass('active');
	$('.container-video').addClass('active');
	$('video')[0].play();	
});
