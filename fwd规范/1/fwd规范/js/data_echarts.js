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
			show:true,
			formatter: "{a} <br/>{b} : {c}%",
			left:100,
			bottom:100,
			y:'center'
		},
		series: [{
			name: '指标',
			type: 'gauge',
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
				offsetCenter:['-70%',"25%"]
			},
			startAngle: 140,
			endAngle: -140,
			axisTick: {
				splitNumber: 5
			},
			detail: {
				formatter: '{value}%',
				offsetCenter:['-70%',"0%"],
				textStyle: {
					fontSize: 20,
					fontWeight: "",
					color: "#000"
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
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [{
			name: '指标',
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
				offsetCenter:['-70%',"25%"]
			},
			startAngle: 140,
			endAngle: -140,
			axisTick: {
				splitNumber: 5
			},
			detail: {
				formatter: '{value}%',
				offsetCenter:['-70%',"0%"],
				textStyle: {
					fontSize: 20,
					fontWeight: "",
					color: "#000"
				}
			},
			data: [{
				value: 4.46,
				name: '处理进度'
			}]
		}]
	};
	option3 = {
		tooltip: {
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [{
			name: '指标',
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
				offsetCenter:['-70%',"25%"]
			},
			startAngle: 140,
			endAngle: -140,
			axisTick: {
				splitNumber: 5
			},
			detail: {
				formatter: '{value}%',
				offsetCenter:['-70%',"0%"],
				textStyle: {
					fontSize: 20,
					fontWeight: "",
					color: "#000"
				}
			},
			data: [{
				value: 4.46,
				name: '处理进度'
			}]
		}]
	};
	clearInterval(timeTicket1);
	var timeTicket1 = setInterval(function() {
		option1.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
		myChart1.setOption(option1, true);
	}, 2000)
	clearInterval(timeTicket2);
	var timeTicket2 = setInterval(function() {
		//  option2.series[0].data[0].value = 20;
		myChart2.setOption(option2, true);
	}, 2000)
	clearInterval(timeTicket3);
	var timeTicket3 = setInterval(function() {
		option3.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
		myChart3.setOption(option3, true);
	}, 2000)
})