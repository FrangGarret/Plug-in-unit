//柱状图
function zhbarOption () {
	return {
		legend:{
			bottom: 0,
			align: 'auto',
			itemGap: 40,
			itemWidth: 10,
			itemHeight: 10,
			textStyle:{
				fontSize: 12,
				color: '#999'
			},
			data:['长期险(全部)','重疾险','医疗类']
		},
		grid: {
			left: 50,
			right: 20,
			top: 20,
			bottom: 50
		},
	    xAxis: {
		    axisLabel: {
		    	color: '#999',
		    	interval: 0
		    },
		    axisTick: {
		      	show: true,
		      	alignWithLabel: true
		    },
		    axisLine:{
		    	lineStyle:{
		    		color: '#999'
		    	}
				},
				axisLabel:{
					fontSize: 12
				},
	      data: ['2019','2018','2017']
	   	},
	   	yAxis: {
				 show: true,
				 axisLine:{
		    	lineStyle:{
						color: '#999',
		    	}
				},
				axisLabel:{
					fontSize: 12
				}
	   	},
	    series: [
	    	{
					name: '长期险(全部)',
					type: 'bar',
					barWidth: 12,
					barGap:'0.5',
					itemStyle:{
						normal:{
							barBorderRadius:15,
							color: {
								type: 'bar',
								x:0,
								y:0,
								x2:0,
								y2: 1,
								colorStops:[{
									offset: 0,
									color: '#51c3fa'
								},{
									offset: 1,
									color: '#7fa1fe'
								}],
								global: false
							}
						}
					},
					label: {
						show: true,
						position: 'top',
						color: '#999',
						fontSize: 11
					},
					data: [320,220,180]
	    	},
	    	{
	    		name: '重疾险',
				type: 'bar',
				barWidth: 12,
				barGap:'0.5',
				itemStyle:{
					normal:{
						barBorderRadius:15,
						color: {
							type: 'bar',
							x:0,
							y:0,
							x2:0,
							y2: 1,
							colorStops:[{
								offset: 0,
								color: '#7bedfb'
							},{
								offset: 1,
								color: '#8db9e3'
							}],
							global: false
						}
					}
				},
				label: {
					show: true,
					position: 'top',
					color: '#999',
					fontSize: 11
				},
				data: [220,170,150]
	    	},
	    	{
	    		name: '医疗类',
				type: 'bar',
				barWidth: 12,
				barGap:'0.5',
				itemStyle:{
					normal:{
						barBorderRadius:15,
						// 颜色渐变
						color: {
							type: 'bar',
							x:0,
							y:0,
							x2:0,
							y2: 1,
							colorStops:[{
								offset: 0,
								color: '#fe8e7f'
							},{
								offset: 1,
								color: '#fa5269'
							}],
							global: false
						}
					}
				},
				label: {
					show: true,
					position: 'top',
					color: '#999',
					fontSize: 11
				},
				data: [150,160,210]
	    	}
	    ]
	}
}
function getLine(){
	return {
		color: '#bed9fe',
		grid: {
			left: 40,
			right: 20,
			top: 20,
			bottom: 20
		},
		xAxis:{
			type: 'category',
			boundaryGap: false,
			axisTick:{
				show: false
			},
			axisLine:{
				lineStyle:{
					color: '#999'
				}
			},
			axisLabel:{
				fontSize: 12
			},
			data:[1,2,3,4,5]
		},
		yAxis: {
			type: 'value',
			axisTick:{
				show: false
			},
			axisLine:{
				lineStyle:{
					color: '#999'
				}
			},
			axisLabel:{
				fontSize: 12
			}
		},
		series:[{
			data:[2,3,2.5,4,2],
			type: 'line',
			symbol: 'circle',
			symbolSize: 10,
			smooth: true,
			areaStyle:{},
			itemStyle:{
				normal:{
					barBorderRadius:15,
					color: {
						type: 'line',
						x:0,
						y:0,
						x2:0,
						y2: 1,
						colorStops:[{
							offset: 0,
							color: '#9ac2fe'
						},{
							offset: 1,
							color: '#f9fcff'
						}],
						global: false
					}
				}
			},
		}]
	}
}

// 政府交错
function getBarX(){
	return{
		grid:{
			top: 20,
			bottom: 30				
		},
		xAxis:{
			type: 'value',
			position: 'top',
			splitLine:{
				lineStyle:{
					type: 'dashed'
				}
			},
			axisLine:{
				lineStyle:{
					color: '#999'
				}
			},
			axisLabel:{
				fontSize: 12
			},
		},
		yAxis:{
			type:'category',
			axisLine:{show:false},
			axisLabel:{show:false},
			axisTick:{show:false},
			splitLine:{shpw:false},
			data:['10%','16%','18%']
		},
		series:[
			{
				type: 'bar',
				stack: '总量',
				barWidth: 20,
				itemStyle:{
					normal:{
						barBorderColor: 'rgba(0,0,0,0)',
						color: 'rgba(0,0,0,0)'
					},
					emphasis:{
						barBorderColor: 'rgba(0,0,0,0)',
						color: 'rgba(0,0,0,0)'
					}
				},
				data:[0.15, -0.05, 0.05]
			},
			{
				name: '生活费',
				type: 'bar',
				stack:'总量',
				barWidth: 20,
				itemStyle:{
					color: {
						repeat: 'repeat-x',
						type: 'bar',
						x:0,
						y:0,
						x2:1,
						y2: 0,
						colorStops:[{
							offset: 0,
							color: '#53c2fa'
						},{
							offset: 1,
							color: '#7fa0fe'
						}],
						global: false
					}
				},
				label:{
					show: true,
					formatter:'{b}',
					color: '#fff'
				},
				data:[0.1, -0.1, 0.1]
			}
		]
	}
}

