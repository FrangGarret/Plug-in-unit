$(function() {
	//调用走公告数据

	//渲染待核保任务、待跟进事项、合同质检 的任务数量
	var task_Table = '<li class="task_tab active">' +
		'		<i class="iconfont">' +
		'			<svg class="icon" aria-hidden="true">' +
		'				<use xlink:href="#icon-daihebaorenwu2"></use>' +
		'			</svg>' +
		'	</i>待核保任务' +
		'	<span class="task_tab_nums">288</span>' +
		'</li>' +
		'<li class="task_tab">' +
		'	<i class="iconfont">' +
		'		<svg class="icon" aria-hidden="true">' +
		'			<use xlink:href="#icon-daigenjinshixiang"></use>' +
		'		</svg>' +
		'	</i>待跟进事项' +
		'	<span class="task_tab_nums">288</span>' +
		'</li>' +
		'<li class="task_tab">' +
		'	<i class="iconfont">' +
		'		<svg class="icon" aria-hidden="true">' +
		'			<use xlink:href="#icon-hetongzhijian"></use>' +
		'		</svg>' +
		'	</i>合同质检' +
		'	<span class="task_tab_nums">288</span>' +
		'</li>'

	$('.task_tab_warp_ul').html(task_Table)
	
	
	//调用走马灯效果
	$('.myscroll').myScroll({
		speed: 40, //数值越大，速度越慢
		rowHeight: 42 //li的高度
	});

	//调用datatable	
	/**
	 * Created by zzg on 2017/4/26.
	 */

	
	


	//点击核保任务、保全任务、理赔任务tab栏切换
	$('.Task_ranking_tab_li').click(function() {
		$(this).addClass('active').siblings('.Task_ranking_tab_li').removeClass('active')
	})

})