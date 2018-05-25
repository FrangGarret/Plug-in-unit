$(function() {
	var myChart1 = echarts.init(document.getElementById('main1'));
	var myChart2 = echarts.init(document.getElementById('main2'));
	var myChart3 = echarts.init(document.getElementById('main3'));
	option1 = {
		//  title: {
        //     //show:false,
        //     x: "100",
        //     bottom: 200,
        //     //text:'AAA',
        //     subtext: '处理进度'
        // },
		tooltip: {
			show:false,
			formatter: "{a} <br/>{b} : {c}%"
			
		},
		series: [{
			name: '处理进度',
			type: 'gauge',
			center:['50%','50%'],
			axisLine: {
				show: true,
				lineStyle: {
					width: 10,
					shadowBlur: 0,
					color: [
						[0.2, '#90ee90'],
						[0.4, '#90ee90'],
						[0.6, '#90ee90'],
						[0.8, '#90ee90'],
						[1, '#90ee90']
					]
				}
			},
			axisLabel: {
				formatter: function(e) {
					switch(e + "") {
						case "0":
							return "100";
						case "20":
							return "200";
						case "40":
							return "300";
						case "60":
							return "400";
						case "80":
							return "500";
						case "100":
							return "600";
						default:
							return "";
					}
				},
				textStyle: {
					fontSize: 12,
					fontWeight: ""
				}
			},
			title:{
				offsetCenter:['0%',"115%"]
			},
			startAngle: 220,
			endAngle: -40,
			axisTick: {
				splitNumber: 5
			},
			detail: {
				formatter: '{value}件',
				offsetCenter:['0%',"85%"],
				textStyle: {
					fontSize: 20,
					fontWeight: "",
					color: "#1295f3"
				}
			},
			data: [{
				value: 4.46,
				name: '处理进度'
			}]
		}]
	};
	option2 = {
		tooltip: {
			show:false,
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [{
			name: '件均处理时间',
			type: 'gauge',
			axisLine: {
				show: true,
				lineStyle: {
					width: 10,
					shadowBlur: 0,
					color: [
						[0.2, '#87ceeb'],
						[0.4, '#87ceeb'],
						[0.6, '#87ceeb'],
						[0.8, '#87ceeb'],
						[1, '#87ceeb']
					]
				}
			},
			axisLabel: {
				formatter: function(e) {
					switch(e + "") {
						case "10":
							return "5";
						case "30":
							return "10";
						case "60":
							return "15";
						case "90":
							return "20";
						default:
							return "";
					}
				},
				textStyle: {
					fontSize: 12,
					fontWeight: ""
				}
			},
			title:{
				offsetCenter:['0',"115%"]
			},
			startAngle: 220,
			endAngle: -40,
			axisTick: {
				splitNumber: 5
			},
			detail: {
				formatter: '{value}h/小时',
				offsetCenter:['0%',"85%"],
				textStyle: {
					fontSize: 20,
					fontWeight: "",
					color: "#1295f3"
				}
			},
			data: [{
				value: 4.46,
				name: '件均处理时间'
			}]
		}]
	};
	option3 = {
		tooltip: {
			show:false,
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [{
			name: '差错率',
			type: 'gauge',
			axisLine: {
				show: true,
				lineStyle: {
					width: 10,
					shadowBlur: 0,
					color: [
						[0.2, '#90ee90'],
						[0.4, '#ffa500'],
						[0.6, '#87ceeb'],
						[0.8, '#87ceeb'],
						[1, '#ff4500']
					]
				}
			},
			axisLabel: {
				formatter: function(e) {
					switch(e + "") {
						case "10":
							return "弱";
						case "30":
							return "低";
						case "60":
							return "中";
						case "90":
							return "高";
						default:
							return "";
					}
				},
				textStyle: {
					fontSize: 12,
					fontWeight: ""
				}
			},
			title:{
				offsetCenter:['0',"115%"]
			},
			startAngle: 220,
			endAngle: -40,
			axisTick: {
				splitNumber: 5
			},
			detail: {
				formatter: '{value}/100',
				offsetCenter:['0%',"85%"],
				textStyle: {
					fontSize: 20,
					fontWeight: "",
					color: "#1295f3"
				}
			},
			data: [{
				value: 4.46,
				name: '差错率'
			}]
		}]
	};
//	clearInterval(timeTicket1);
//	var timeTicket1 = setInterval(function() {
		option1.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
		myChart1.setOption(option1, true);
		window.onresize = myChart1.resize()
//	}, 1000)
	
//	clearInterval(timeTicket2);
//	var timeTicket2 = setInterval(function() {
		//  option2.series[0].data[0].value = 20;
		myChart2.setOption(option2, true);
		window.onresize = myChart2.resize()
//	}, 1000)
	
//	clearInterval(timeTicket3);
//	var timeTicket3 = setInterval(function() {
		option3.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
		myChart3.setOption(option3, true);
		window.onresize = function(){
			myChart3.resize()
			myChart2.resize()
			myChart1.resize()
		}
//	}, 1000)
	$('.left_son_top_right_son').children('div').css({
		'transform':'translateX(-50%)',
		'left'		 : '50%'
	})
})