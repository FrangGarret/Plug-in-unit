	//网站热力图实现
	var _speedMark = new Date();

	/**
	 *  分析主JS，该JS部署时放在页面</boday>标签之前，所有引入的其他JS位置之后
	 *  该JS文件会自动加载hot.js文件，进行行为追踪，无需配置。
	 *  配置说明：
	 *  如果追踪页面加载速度，需要在页面标签<head>内靠前位置Javascript语句块中嵌入代码： var _speedMark = new Date(); 如不配置，该功能不可用，这种方式实现比较传统，为的是兼容更多的浏览器，如果只考虑高版本的浏览器，可以用很简单很直接的方式来解决。这里就不累赘讲述了。
	 */
	/**************************参数说明********************************
	 * 
	 *  bs      浏览器及版本，中间固定用“/”隔开： 如   Firefox/29
	 *  fl    	Flash版本：如 13.0 r0
	 *  hp    	是否设置为首页，y表是，否则为空
	 *  jv    	是否禁用脚本：0表否，1表是
	 *  lg    	浏览器语言：如 zh-cn
	 *  ps      页面加载用时：如 271 单位为毫秒，如没配置该属性，ps没值，网页首次加载有值，其它情况下值为0
	 *  pvi     用户标识：如 5699369775 第一次访问页面时产生，只要用户不清除客户端cookie，该值永远存在 
	 *  rurl  	上一个页面地址
	 *  scl   	屏幕颜色深度：如 24-bit
	 *  scr     屏幕分辨率: 如 1600x900
	 *  sh      滚动条可滚动高度：如 3259
	 *  si      本地一次会话标识： 如 s479879256
	 *  tz      区时：如 8
	 *  ui      登陆的用户ID，未登陆时没有该值：如 7155113994790596
	 *  url     当前的URL
	 *  x       鼠标点击事件时，相对body中轴线的x坐标， 中轴线左边为负，右边为正，此值只有开启热点追踪时才会产生，页面初始化时无值
	 *  y       鼠标点击事件时的y坐标，此值只有开启热点追踪时才会产生，页面初始化时无值
	 *
	 **************************参数说明********************************/

	/**************************使用方法********************************
	 *
	 * 配置方式：
	 * 在页面</body>标签之前其他外部文件引入之后的位置加入该js引用
	 *
	 *   
	 *
	 **************************使用方法********************************/

	;
	(function() {
		function ea() {
			this.url = [];
			this.init()
		}
		var h, k, j, l, p, r, q, n, m, o,
			f = {};
		ea.prototype = {
			init: function() {
				f ? l = f : l = {};
				h = document;
				k = h.location;
				j = h.body;
				m = navigator;
				p = m.platform;
				q = this.getCookieSetDomain();
			},
			run: function() {
				g.init();
				this.url.push(this.getUrl());
				//this.url.unshift("http://180.163.187.8:1080/go.php?");
				this.url.push(this.getRefInfo());
				this.url.push(this.getPvi());
				this.url.push(this.getSi());
				this.url.push(this.getMainEnvInfo());
				this.url.push(this.getExtendEnvInfo());
				this.url.push(this.getBrowserInfo());
				this.url.push(this.getPageSpeed());
				this.url.push(this.getScrollHeight());
				this.url.push(this.getUi());
				g.save();
				this.sendInfo(this.url.join(""));
				this.loadHotClick(this);
			},
			loadHotClick: function(a) {
				u && u.getScript({
					url: "js/hot.js",
					callback: function() {
						(new hot(a)).watchClick();
					}
				})
			},
			inArray: function(a, c) {
				for(i = 0; i < a.length && a[i] != c; i++);
				return i != a.length;
			},
			getUi: function() {
				var a = "",
					b = "";
				a = unescape(g.get("pi=", !0));

				if("-" != a) {
					for(var a = a.split(";"), c = 0; c < a.length; c++) {
						b = a[c];
						break;
					}
				}
				return "&ui=" + b;

			},
			getUrl: function() {
				return "&url=" + escape(h.URL);
			},
			getRefInfo: function() {
				return "&rurl=" + escape(h.referrer.substr(0, 100));
			},
			getPageSpeed: function() {
				return "undefined" == typeof _speedMark ? "&ps=" : "&ps=" + (new Date - _speedMark);
			},
			getPvi: function() {
				try {
					return m.cookieEnabled ? "&pvi=" + g.setCookie("pgv_pvi", !0) : "&pvi=NoCookie";
				} catch(a) {
					return "&pvi=NoCookie";
				}
			},
			getSi: function() {
				return "&si=" + g.setCookie("ssi");
			},
			getBrowserInfo: function() {
				var a = b.detect();
				return "&os=" + a.os + "&bs=" + a.browser + "/" + a.version;
			},
			getScrollHeight: function() {
				return "&sh=" + Math.max(j.scrollHeight, h.documentElement.scrollHeight);
			},
			getMainEnvInfo: function() {
				var a = "";
				try {
					var c = "-",
						b = "-",
						d = "-",
						e = "-",
						o = 0;
					self.screen && (c = screen.width + "x" + screen.height, b = (screen.colorDepth || 0) + "-bit");
					m.language ? d = m.language.toLowerCase() : m.browserLanguage && (d = m.browserLanguage.toLowerCase());
					o = m.javaEnabled() ? 1 : 0;
					e = -((new Date).getTimezoneOffset()) / 60;
					a = "&scr=" + c + "&scl=" + b + "&lg=" + d + "&jv=" + o + "&tz=" + e
				} catch(g) {} finally {
					return a
				}
			},
			getExtendEnvInfo: function() {
				var a = "";
				try {
					var c = k.href,
						b = "",
						a = a + ("&fl=" + this.getFlashInfo());
					j.addBehavior && (j.addBehavior("#default#homePage"), j.isHomePage(c) && (a += "&hp=y")) || (a += "&hp=");
					j.addBehavior && (j.addBehavior("#default#clientCaps"), b = j.connectionType);
				} catch(d) {} finally {
					return a
				}
			},
			getFlashInfo: function() {
				var a = "-",
					c = navigator;
				try {
					if(c.plugins && c.plugins.length)
						for(var b = 0; b < c.plugins.length; b++) {
							if(-1 < c.plugins[b].name.indexOf("Shockwave Flash")) {
								a = c.plugins[b].description.split("Shockwave Flash ")[1];
								break
							}
						} else if(window.ActiveXObject)
							for(b = 12; 5 <= b; b--) try {
								if(eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." +
										b + "');")) {
									a = b + ".0";
									break
								}
							} catch(d) {}
				} catch(e) {}
				return a
			},
			getParameter: function(a, c) {
				if(a && c) {
					var b = c.match(RegExp("(\\?|#|&)" + a + "=([^&^#]*)(#|&|$)"));
					return b ? b[2] : ""
				}
				return ""
			},
			getCookieSetDomain: function() {
				var a =
					window.location.host,
					c = {
						"com.cn": 1,
						"net.cn": 1,
						"gov,cn": 1,
						"com.hk": 1
					},
					b = a.split(".");
				2 < b.length && (a = (c[b.slice(-2).join(".")] ? b.slice(-3) : b.slice(-2)).join("."));
				return a
			},
			sendInfo: function(a) {
				n = new Image(1, 1);
				n.onload = n.onerror = function() {
					n.onload = n.onerror = null;
					n = null;
				}
				n.src = a;
				console.log(n.src)
			}
		};
		var u = {
				config: {
					url: "",
					charset: "utf-8",
					callback: function() {}
				},
				merge: function(a, c) {
					for(var b in c) a[b] = c[b];
					return a
				},
				getScript: function(a) {
					var c;
					this.config = this.merge(this.config, a);
					a = document.createElement("script");
					a.setAttribute("type", "text/javascript");
					a.setAttribute("charset", this.config.charset);
					a.setAttribute("src", this.config.url);
					var b = document.getElementsByTagName("script")[0];
					b.parentNode.insertBefore(a, b);
					c = this.config.callback;
					a.onload = a.onreadystatechange = function() {
						("undefined" == typeof this.readyState || "loaded" == this.readyState || "complete" == this.readyState) && c()
					}
				}
			},
			d = {
				GetRandomNum: function(a, b) {
					var g = b - a;
					var r = Math.random();
					return(a + Math.round(r * g));
				}
			},
			g = {
				sck: [],
				sco: {},
				init: function() {
					var a = this.get("pgv_info=", !0);
					if("-" != a) {
						for(var a = a.split("&"), c = 0; c < a.length; c++) {
							var b = a[c].split("=");
							this.set(b[0], unescape(b[1]))
						}
					}
				},
				get: function(a, c) {
					var b = c ? h.cookie : this.get("pgv_info=", !0),
						d = "-",
						e;
					e = b.indexOf(a);
					if(-1 < e) {
						e += a.length;
						d = b.indexOf(";", e); - 1 == d && (d = b.length);
						if(!c) {
							var f = b.indexOf("&", e); - 1 < f && (d = Math.min(d, f))
						}
						d = unescape(b.substring(e, d))
					}
					return d
				},
				set: function(a, c) {
					this.sco[a] = c;
					for(var b = !1, d = this.sck.length, e = 0; e < d; e++)
						if(a == this.sck[e]) {
							b = !0;
							break
						}
					b || this.sck.push(a)
				},
				setCookie: function(a, c) {
					var b = g.get(a + "=", c);
					if("-" == b) {
						c ? b = "" : b = "s";
						var d = (new Date).getUTCMilliseconds(),
							b = b + Math.round(2147483647 * Math.abs(Math.random() + 1)) * (d + 1) % 1E10
					}
					c ? this.saveCookie(a + "=" + b, "expires=Sun, 18 Jan 2038 00:00:00 GMT;") : this.set(a, b);
					return b
				},
				save: function() {
					if(l.sessionSpan) {
						var a = new Date;
						a.setTime(a.getTime() + 6E4 * l.sessionSpan)
					}
					for(var c = "", b = this.sck.length, d = 0; d < b; d++) c += this.sck[d] + "=" + this.sco[this.sck[d]] + "&";
					c = "pgv_info=" + c.substr(0, c.length - 1);
					b = "";
					a && (b = "expires=" + a.toGMTString());
					this.saveCookie(c, b)
				},
				saveCookie: function(a, c) {
					h.cookie = a + ";path=/;domain=" + q + ";" + c
				}
			},
			b = {
				detect: function() {
					var ret = {
						browser: this.search(this.data.bs),
						version: this.search(navigator.userAgent),
						os: this.search(this.data.os)
					};
					if(ret.os == 'Linux') {
						var distros = ['CentOS', 'Debian', 'Fedora', 'Gentoo', 'Mandriva', 'Mageia', 'Red Hat', 'Slackware', 'SUSE', 'Turbolinux', 'Ubuntu'];
						for(var i = 0; i < distros.length; i++) {
							if(navigator.userAgent.toLowerCase().match(distros[i].toLowerCase())) {
								ret.distro = distros[i];
								break;
							}
						}
					}
					return ret;
				},
				search: function(data) {
					if(typeof data === "object") {
						for(var i = 0; i < data.length; i++) {
							var dataString = data[i].string,
								dataProp = data[i].prop;
							this.version_string = data[i].versionSearch || data[i].identity;
							if(dataString) {
								if(-1 != dataString.indexOf(data[i].subString)) {
									return data[i].identity;
								}
							} else if(dataProp) {
								return data[i].identity;
							}
						}
					} else {
						var index = data.indexOf(this.version_string);
						if(index == -1) return;
						return parseFloat(data.substr(index + this.version_string.length + 1));
					}
				},
				data: {
					bs: [{
							string: navigator.userAgent,
							subString: "Chrome",
							identity: "Chrome"
						},
						{
							string: navigator.userAgent,
							subString: "OmniWeb",
							versionSearch: "OmniWeb/",
							identity: "OmniWeb"
						},
						{
							string: navigator.vendor,
							subString: "Apple",
							identity: "Safari",
							versionSearch: "Version"
						},
						{
							prop: window.opera,
							identity: "Opera",
							versionSearch: "Version"
						},
						{
							string: navigator.vendor,
							subString: "iCab",
							identity: "iCab"
						},
						{
							string: navigator.vendor,
							subString: "KDE",
							identity: "Konqueror"
						},
						{
							string: navigator.userAgent,
							subString: "Firefox",
							identity: "Firefox"
						},
						{
							string: navigator.vendor,
							subString: "Camino",
							identity: "Camino"
						},
						{
							string: navigator.userAgent,
							subString: "Netscape",
							identity: "Netscape"
						},
						{
							string: navigator.userAgent,
							subString: "MSIE",
							identity: "Explorer",
							versionSearch: "MSIE"
						},
						{
							string: navigator.userAgent,
							subString: "Gecko",
							identity: "Mozilla",
							versionSearch: "rv"
						},
						{
							string: navigator.userAgent,
							subString: "Mozilla",
							identity: "Netscape",
							versionSearch: "Mozilla"
						}
					],
					os: [{
							string: navigator.platform,
							subString: "Win",
							identity: "Windows"
						},
						{
							string: navigator.platform,
							subString: "Mac",
							identity: "Mac"
						},
						{
							string: navigator.userAgent,
							subString: "iPhone",
							identity: "iPhone/iPod"
						},
						{
							string: navigator.userAgent,
							subString: "iPad",
							identity: "iPad"
						},
						{
							string: navigator.userAgent,
							subString: "Android",
							identity: "Android"
						},
						{
							string: navigator.platform,
							subString: "Linux",
							identity: "Linux"
						}
					]
				}
			};
		ea && (new ea).run();
	})();