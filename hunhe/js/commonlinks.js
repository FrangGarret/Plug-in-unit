function commonLinks(mythis, options) {
	var href = mythis.getAttribute('href');
	//非plus环境，直接走href跳转
	if(!mui.os.plus) {
		location.href = href;
		return;
	}
	var id = mythis.getAttribute("data-wid");
	if(!id) {
		id = href;
		console.log('此时的ID是' + id)
	}

	if(href && ~href.indexOf('.html')) {
		//如下场景不适用下拉回弹：
		//1、单webview下拉刷新；2、底部有fixed定位的div的页面
		if(!~id.indexOf('pullrefresh.html') && !~href.indexOf("examples/tabbar.html") && !~href.indexOf("list-to-detail/listview.html")) {
			options.styles.bounce = "vertical";
		}
		//图标页面需要启动硬件加速
		if(~id.indexOf('icons.html') || ~id.indexOf("echarts.html")) {
			options.styles.hardwareAccelerated = true;
		}
		if(~id.indexOf('im-chat.html')) {
			options.extras.acceleration = "none";
		}

		var titleType = mythis.getAttribute("data-title-type");
		console.log('导航栏是'+titleType)
		
		if(titleType && titleType.indexOf("native") > -1) { //原生导航
			options.styles.titleNView = {
				autoBackButton: true,
				backgroundColor: '#f7f7f7',
				titleText: this.innerHTML.trim(),
				splitLine: {
					color: '#cccccc'
				}
			};

			options.show = {
				event: 'loaded'
			}
			//有原生标题的情况下，就不需要waiting框了
			options.waiting = {
				autoShow: false
			}

			//透明渐变导航,增加类型设置
			if(titleType == "transparent_native") {
				options.styles.titleNView.type = "transparent";
			}

			//处理原生图片轮播
			if(~id.indexOf("slider-native.html")) {
				options.styles.subNViews = [{ //配置图片轮播
					id: 'slider-native',
					type: 'ImageSlider',
					styles: {
						left: 0,
						right: 0,
						top: 0,
						height: '200px',
						position: 'static',
						loop: true,
						images: [{
							src: '_www/images/yuantiao.jpg',
							width: '100%'
						}, {
							src: '_www/images/shuijiao.jpg',
							width: '100%',
						}, {
							src: '_www/images/muwu.jpg',
							width: '100%',
						}, {
							src: '_www/images/cbd.jpg',
							width: '100%',
						}]
					}
				}];
			}
		} else {
			//非原生导航，需要设置顶部状态栏占位
			options.styles.statusbar = {
				background: "#f7f7f7"
			}
		}
		if(id && id == "viewgroup") { //强制启用截屏
			options.extras.acceleration = "capture";
		}
		//打开新窗口
		mui.openWindow(href, id, options);

	}
}