webpackJsonp([1], [, function(e, t, n) {
	"use strict";
	n.d(t, "d", function() {
		return ie
	}), n.d(t, "e", function() {
		return oe
	}), n.d(t, "b", function() {
		return ae
	}), n.d(t, "a", function() {
		return re
	}), n.d(t, "c", function() {
		return se
	});
	var i = n(161),
		o = n.n(i),
		a = n(162),
		r = n.n(a),
		s = n(164),
		c = n.n(s),
		u = n(163),
		d = n.n(u),
		l = n(169),
		h = n.n(l),
		p = n(168),
		f = n.n(p),
		m = n(167),
		g = n.n(m),
		v = n(166),
		A = n.n(v),
		w = n(165),
		S = n.n(w),
		y = n(170),
		x = n.n(y),
		k = n(171),
		C = n.n(k),
		M = n(172),
		I = n.n(M),
		b = n(173),
		_ = n.n(b),
		T = n(174),
		E = n.n(T),
		B = n(175),
		R = n.n(B),
		V = n(176),
		P = n.n(V),
		j = n(177),
		G = n.n(j),
		O = n(178),
		D = n.n(O),
		U = n(179),
		J = n.n(U),
		N = n(180),
		L = n.n(N),
		F = n(181),
		W = n.n(F),
		H = n(182),
		z = n.n(H),
		Y = n(160),
		Q = n.n(Y),
		Z = n(183),
		K = n.n(Z),
		q = n(141),
		X = n.n(q),
		$ = n(140),
		ee = n.n($),
		te = n(139),
		ne = n.n(te),
		ie = 375,
		oe = 600,
		ae = {
			videoSprite: X.a,
			audioSprite: ee.a,
			backgroundAudio: ne.a
		},
		re = {
			earth: o.a,
			earthBump: r.a,
			earthSpec: c.a,
			earthCloud: d.a,
			iNambia: h.a,
			iMariana: f.a,
			iGreenland: g.a,
			iGalapagos: A.a,
			iAntarcica: S.a,
			cloud0: x.a,
			cloud1: C.a,
			cloud2: I.a,
			cloud3: _.a,
			cloud4: E.a,
			cloud5: R.a,
			cloud6: P.a,
			cloud7: G.a,
			cloud8: D.a,
			cloud9: J.a,
			cloud10: L.a,
			cloud11: W.a,
			cloud12: z.a,
			meteor: Q.a,
			wxShareImg: K.a
		},
		se = [{
			name: "namibia",
			coord: [-19.2, 14.11666667],
			position: [4.6, -1.29, -2.42],
			cameraFarPosition: [-20.03, 13.47, -14.61],
			cameraNearPosition: [-3.54, 2.38, -2.58],
			imageName: "iNambia",
			coordSpriteIndex: 4,
			videoSprite: [10.8, 19.1],
			soundSprite: [0, 10.057142857142857]
		}, {
			name: "mariana",
			coord: [18.25, 142.81666667],
			position: [-4.39, 2.66, -2.41],
			cameraFarPosition: [26.46, -6.94, -9.96],
			cameraNearPosition: [4.52, -1.3, -1.63],
			imageName: "iMariana",
			coordSpriteIndex: 3,
			videoSprite: [2.8, 8.4],
			soundSprite: [24, 34.10938775510204]
		}, {
			name: "greenland",
			coord: [72.16666667, -43],
			position: [1.88, 5.09, .89],
			cameraFarPosition: [7.24, 26.52, 7.06],
			cameraNearPosition: [1.3, 4.66, 1.24],
			imageName: "iGreenland",
			coordSpriteIndex: 2,
			videoSprite: [40.2, 47.8],
			soundSprite: [48, 58.10938775510204]
		}, {
			name: "galapagos",
			coord: [1.33333333, -91.15],
			position: [.55, .024, 5.39],
			cameraFarPosition: [-.6, .14, 28.21],
			cameraNearPosition: [-.1, .024, 4.99],
			imageName: "iGalapagos",
			coordSpriteIndex: 1,
			videoSprite: [22, 37.43],
			soundSprite: [12, 22.057142857142857]
		}, {
			name: "antarctica",
			coord: [-77.96666667, -155.63333333],
			position: [-1.32, -5.05, .98],
			cameraFarPosition: [-7.88, -27, 1.87],
			cameraNearPosition: [-1.39, -4.75, .33],
			imageName: "iAntarcica",
			coordSpriteIndex: 0,
			videoSprite: [50.9, 69],
			soundSprite: [36, 46.05714285714286]
		}]
}, , , , , , , , , , , , , , , , , , , , function(e, t, n) {
	"use strict";

	function i(e) {
		return r.load(a.a[e])
	}
	t.a = i;
	var o = n(8),
		a = n(1),
		r = new o.TextureLoader;
	r.crossOrigin = ""
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
	var i = n(0)(n(77), n(196), null, null);
	e.exports = i.exports
}, function(e, t, n) {
	"use strict";
	var i = n(94),
		o = n.n(i),
		a = n(87),
		r = n.n(a);
	! function(e, t) {
		"function" == typeof define && (n(209) || define.cmd) ? define(function() {
			return t(e)
		}) : t(e, !0)
	}(window, function(e, t) {
		function n(t, n, i) {
			e.WeixinJSBridge ? WeixinJSBridge.invoke(t, a(n), function(e) {
				u(t, e, i)
			}) : h(t, i)
		}

		function i(t, n, i) {
			e.WeixinJSBridge ? WeixinJSBridge.on(t, function(e) {
				i && i.trigger && i.trigger(e), u(t, e, n)
			}) : i ? h(t, i) : h(t, n)
		}

		function a(e) {
			return e = e || {}, e.appId = R.appId, e.verifyAppId = R.appId, e.verifySignType = "sha1", e.verifyTimestamp = R.timestamp + "", e.verifyNonceStr = R.nonceStr, e.verifySignature = R.signature, e
		}

		function s(e) {
			return {
				timeStamp: e.timestamp + "",
				nonceStr: e.nonceStr,
				package: e.package,
				paySign: e.paySign,
				signType: e.signType || "SHA1"
			}
		}

		function c(e) {
			return e.postalCode = e.addressPostalCode, delete e.addressPostalCode, e.provinceName = e.proviceFirstStageName, delete e.proviceFirstStageName, e.cityName = e.addressCitySecondStageName, delete e.addressCitySecondStageName, e.countryName = e.addressCountiesThirdStageName, delete e.addressCountiesThirdStageName, e.detailInfo = e.addressDetailInfo, delete e.addressDetailInfo, e
		}

		function u(e, t, n) {
			"openEnterpriseChat" == e && (t.errCode = t.err_code), delete t.err_code, delete t.err_desc, delete t.err_detail;
			var i = t.errMsg;
			i || (i = t.err_msg, delete t.err_msg, i = d(e, i), t.errMsg = i), n = n || {}, n._complete && (n._complete(t), delete n._complete), i = t.errMsg || "", R.debug && !n.isInnerInvoke && alert(r()(t));
			var o = i.indexOf(":");
			switch(i.substring(o + 1)) {
				case "ok":
					n.success && n.success(t);
					break;
				case "cancel":
					n.cancel && n.cancel(t);
					break;
				default:
					n.fail && n.fail(t)
			}
			n.complete && n.complete(t)
		}

		function d(e, t) {
			var n = e,
				i = w[n];
			i && (n = i);
			var o = "ok";
			if(t) {
				var a = t.indexOf(":");
				o = t.substring(a + 1), "confirm" == o && (o = "ok"), "failed" == o && (o = "fail"), -1 != o.indexOf("failed_") && (o = o.substring(7)), -1 != o.indexOf("fail_") && (o = o.substring(5)), o = o.replace(/_/g, " "), o = o.toLowerCase(), ("access denied" == o || "no permission to execute" == o) && (o = "permission denied"), "config" == n && "function not exist" == o && (o = "ok"), "" == o && (o = "fail")
			}
			return t = n + ":" + o
		}

		function l(e) {
			if(e) {
				for(var t = 0, n = e.length; n > t; ++t) {
					var i = e[t],
						o = A[i];
					o && (e[t] = o)
				}
				return e
			}
		}

		function h(e, t) {
			if(!(!R.debug || t && t.isInnerInvoke)) {
				var n = w[e];
				n && (e = n), t && t._complete && delete t._complete, console.log('"' + e + '",', t || "")
			}
		}

		function p(e) {
			if(!(C || M || R.debug || "6.0.2" > T || B.systemType < 0)) {
				var t = new Image;
				B.appId = R.appId, B.initTime = E.initEndTime - E.initStartTime, B.preVerifyTime = E.preVerifyEndTime - E.preVerifyStartTime, O.getNetworkType({
					isInnerInvoke: !0,
					success: function(e) {
						B.networkType = e.networkType;
						var n = "https://open.weixin.qq.com/sdk/report?v=" + B.version + "&o=" + B.isPreVerifyOk + "&s=" + B.systemType + "&c=" + B.clientVersion + "&a=" + B.appId + "&n=" + B.networkType + "&i=" + B.initTime + "&p=" + B.preVerifyTime + "&u=" + B.url;
						t.src = n
					}
				})
			}
		}

		function f() {
			return(new Date).getTime()
		}

		function m(t) {
			I && (e.WeixinJSBridge ? t() : S.addEventListener && S.addEventListener("WeixinJSBridgeReady", t, !1))
		}

		function g() {
			O.invoke || (O.invoke = function(t, n, i) {
				e.WeixinJSBridge && WeixinJSBridge.invoke(t, a(n), i)
			}, O.on = function(t, n) {
				e.WeixinJSBridge && WeixinJSBridge.on(t, n)
			})
		}
		if(!e.jWeixin) {
			var v, A = {
					config: "preVerifyJSAPI",
					onMenuShareTimeline: "menu:share:timeline",
					onMenuShareAppMessage: "menu:share:appmessage",
					onMenuShareQQ: "menu:share:qq",
					onMenuShareWeibo: "menu:share:weiboApp",
					onMenuShareQZone: "menu:share:QZone",
					previewImage: "imagePreview",
					getLocation: "geoLocation",
					openProductSpecificView: "openProductViewWithPid",
					addCard: "batchAddCard",
					openCard: "batchViewCard",
					chooseWXPay: "getBrandWCPayRequest",
					openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
					startSearchBeacons: "startMonitoringBeacons",
					stopSearchBeacons: "stopMonitoringBeacons",
					onSearchBeacons: "onBeaconsInRange",
					consumeAndShareCard: "consumedShareCard",
					openAddress: "editAddress"
				},
				w = function() {
					var e = {};
					for(var t in A) e[A[t]] = t;
					return e
				}(),
				S = e.document,
				y = S.title,
				x = navigator.userAgent.toLowerCase(),
				k = navigator.platform.toLowerCase(),
				C = !(!k.match("mac") && !k.match("win")),
				M = -1 != x.indexOf("wxdebugger"),
				I = -1 != x.indexOf("micromessenger"),
				b = -1 != x.indexOf("android"),
				_ = -1 != x.indexOf("iphone") || -1 != x.indexOf("ipad"),
				T = function() {
					var e = x.match(/micromessenger\/(\d+\.\d+\.\d+)/) || x.match(/micromessenger\/(\d+\.\d+)/);
					return e ? e[1] : ""
				}(),
				E = {
					initStartTime: f(),
					initEndTime: 0,
					preVerifyStartTime: 0,
					preVerifyEndTime: 0
				},
				B = {
					version: 1,
					appId: "",
					initTime: 0,
					preVerifyTime: 0,
					networkType: "",
					isPreVerifyOk: 1,
					systemType: _ ? 1 : b ? 2 : -1,
					clientVersion: T,
					url: encodeURIComponent(location.href)
				},
				R = {},
				V = {
					_completes: []
				},
				P = {
					state: 0,
					data: {}
				};
			m(function() {
				E.initEndTime = f()
			});
			var j = !1,
				G = [],
				O = (v = {
					config: function(e) {
						R = e, h("config", e);
						var t = !1 !== R.check;
						m(function() {
							if(t) n(A.config, {
								verifyJsApiList: l(R.jsApiList)
							}, function() {
								V._complete = function(e) {
									E.preVerifyEndTime = f(), P.state = 1, P.data = e
								}, V.success = function(e) {
									B.isPreVerifyOk = 0
								}, V.fail = function(e) {
									V._fail ? V._fail(e) : P.state = -1
								};
								var e = V._completes;
								return e.push(function() {
									p()
								}), V.complete = function(t) {
									for(var n = 0, i = e.length; i > n; ++n) e[n]();
									V._completes = []
								}, V
							}()), E.preVerifyStartTime = f();
							else {
								P.state = 1;
								for(var e = V._completes, i = 0, o = e.length; o > i; ++i) e[i]();
								V._completes = []
							}
						}), R.beta && g()
					},
					ready: function(e) {
						0 != P.state ? e() : (V._completes.push(e), !I && R.debug && e())
					},
					error: function(e) {
						"6.0.2" > T || (-1 == P.state ? e(P.data) : V._fail = e)
					},
					checkJsApi: function(e) {
						var t = function(e) {
							var t = e.checkResult;
							for(var n in t) {
								var i = w[n];
								i && (t[i] = t[n], delete t[n])
							}
							return e
						};
						n("checkJsApi", {
							jsApiList: l(e.jsApiList)
						}, function() {
							return e._complete = function(e) {
								if(b) {
									var n = e.checkResult;
									n && (e.checkResult = JSON.parse(n))
								}
								e = t(e)
							}, e
						}())
					},
					onMenuShareTimeline: function(e) {
						i(A.onMenuShareTimeline, {
							complete: function() {
								n("shareTimeline", {
									title: e.title || y,
									desc: e.title || y,
									img_url: e.imgUrl || "",
									link: e.link || location.href,
									type: e.type || "link",
									data_url: e.dataUrl || ""
								}, e)
							}
						}, e)
					},
					onMenuShareAppMessage: function(e) {
						i(A.onMenuShareAppMessage, {
							complete: function() {
								n("sendAppMessage", {
									title: e.title || y,
									desc: e.desc || "",
									link: e.link || location.href,
									img_url: e.imgUrl || "",
									type: e.type || "link",
									data_url: e.dataUrl || ""
								}, e)
							}
						}, e)
					},
					onMenuShareQQ: function(e) {
						i(A.onMenuShareQQ, {
							complete: function() {
								n("shareQQ", {
									title: e.title || y,
									desc: e.desc || "",
									img_url: e.imgUrl || "",
									link: e.link || location.href
								}, e)
							}
						}, e)
					},
					onMenuShareWeibo: function(e) {
						i(A.onMenuShareWeibo, {
							complete: function() {
								n("shareWeiboApp", {
									title: e.title || y,
									desc: e.desc || "",
									img_url: e.imgUrl || "",
									link: e.link || location.href
								}, e)
							}
						}, e)
					},
					onMenuShareQZone: function(e) {
						i(A.onMenuShareQZone, {
							complete: function() {
								n("shareQZone", {
									title: e.title || y,
									desc: e.desc || "",
									img_url: e.imgUrl || "",
									link: e.link || location.href
								}, e)
							}
						}, e)
					},
					startRecord: function(e) {
						n("startRecord", {}, e)
					},
					stopRecord: function(e) {
						n("stopRecord", {}, e)
					},
					onVoiceRecordEnd: function(e) {
						i("onVoiceRecordEnd", e)
					},
					playVoice: function(e) {
						n("playVoice", {
							localId: e.localId
						}, e)
					},
					pauseVoice: function(e) {
						n("pauseVoice", {
							localId: e.localId
						}, e)
					},
					stopVoice: function(e) {
						n("stopVoice", {
							localId: e.localId
						}, e)
					},
					onVoicePlayEnd: function(e) {
						i("onVoicePlayEnd", e)
					},
					uploadVoice: function(e) {
						n("uploadVoice", {
							localId: e.localId,
							isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
						}, e)
					},
					downloadVoice: function(e) {
						n("downloadVoice", {
							serverId: e.serverId,
							isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
						}, e)
					},
					translateVoice: function(e) {
						n("translateVoice", {
							localId: e.localId,
							isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
						}, e)
					},
					chooseImage: function(e) {
						n("chooseImage", {
							scene: "1|2",
							count: e.count || 9,
							sizeType: e.sizeType || ["original", "compressed"],
							sourceType: e.sourceType || ["album", "camera"]
						}, function() {
							return e._complete = function(e) {
								if(b) {
									var t = e.localIds;
									t && (e.localIds = JSON.parse(t))
								}
							}, e
						}())
					},
					getLocation: function(e) {},
					previewImage: function(e) {
						n(A.previewImage, {
							current: e.current,
							urls: e.urls
						}, e)
					},
					uploadImage: function(e) {
						n("uploadImage", {
							localId: e.localId,
							isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
						}, e)
					},
					downloadImage: function(e) {
						n("downloadImage", {
							serverId: e.serverId,
							isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
						}, e)
					},
					getLocalImgData: function(e) {
						!1 === j ? (j = !0, n("getLocalImgData", {
							localId: e.localId
						}, function() {
							return e._complete = function(e) {
								if(j = !1, G.length > 0) {
									var t = G.shift();
									wx.getLocalImgData(t)
								}
							}, e
						}())) : G.push(e)
					},
					getNetworkType: function(e) {
						var t = function(e) {
							var t = e.errMsg;
							e.errMsg = "getNetworkType:ok";
							var n = e.subtype;
							if(delete e.subtype, n) e.networkType = n;
							else {
								var i = t.indexOf(":"),
									o = t.substring(i + 1);
								switch(o) {
									case "wifi":
									case "edge":
									case "wwan":
										e.networkType = o;
										break;
									default:
										e.errMsg = "getNetworkType:fail"
								}
							}
							return e
						};
						n("getNetworkType", {}, function() {
							return e._complete = function(e) {
								e = t(e)
							}, e
						}())
					},
					openLocation: function(e) {
						n("openLocation", {
							latitude: e.latitude,
							longitude: e.longitude,
							name: e.name || "",
							address: e.address || "",
							scale: e.scale || 28,
							infoUrl: e.infoUrl || ""
						}, e)
					}
				}, o()(v, "getLocation", function(e) {
					e = e || {}, n(A.getLocation, {
						type: e.type || "wgs84"
					}, function() {
						return e._complete = function(e) {
							delete e.type
						}, e
					}())
				}), o()(v, "hideOptionMenu", function(e) {
					n("hideOptionMenu", {}, e)
				}), o()(v, "showOptionMenu", function(e) {
					n("showOptionMenu", {}, e)
				}), o()(v, "closeWindow", function(e) {
					e = e || {}, n("closeWindow", {}, e)
				}), o()(v, "hideMenuItems", function(e) {
					n("hideMenuItems", {
						menuList: e.menuList
					}, e)
				}), o()(v, "showMenuItems", function(e) {
					n("showMenuItems", {
						menuList: e.menuList
					}, e)
				}), o()(v, "hideAllNonBaseMenuItem", function(e) {
					n("hideAllNonBaseMenuItem", {}, e)
				}), o()(v, "showAllNonBaseMenuItem", function(e) {
					n("showAllNonBaseMenuItem", {}, e)
				}), o()(v, "scanQRCode", function(e) {
					e = e || {}, n("scanQRCode", {
						needResult: e.needResult || 0,
						scanType: e.scanType || ["qrCode", "barCode"]
					}, function() {
						return e._complete = function(e) {
							if(_) {
								var t = e.resultStr;
								if(t) {
									var n = JSON.parse(t);
									e.resultStr = n && n.scan_code && n.scan_code.scan_result
								}
							}
						}, e
					}())
				}), o()(v, "openAddress", function(e) {
					n(A.openAddress, {}, function() {
						return e._complete = function(e) {
							e = c(e)
						}, e
					}())
				}), o()(v, "openProductSpecificView", function(e) {
					n(A.openProductSpecificView, {
						pid: e.productId,
						view_type: e.viewType || 0,
						ext_info: e.extInfo
					}, e)
				}), o()(v, "addCard", function(e) {
					for(var t = e.cardList, i = [], o = 0, a = t.length; a > o; ++o) {
						var r = t[o],
							s = {
								card_id: r.cardId,
								card_ext: r.cardExt
							};
						i.push(s)
					}
					n(A.addCard, {
						card_list: i
					}, function() {
						return e._complete = function(e) {
							var t = e.card_list;
							if(t) {
								t = JSON.parse(t);
								for(var n = 0, i = t.length; i > n; ++n) {
									var o = t[n];
									o.cardId = o.card_id, o.cardExt = o.card_ext, o.isSuccess = !!o.is_succ, delete o.card_id, delete o.card_ext, delete o.is_succ
								}
								e.cardList = t, delete e.card_list
							}
						}, e
					}())
				}), o()(v, "chooseCard", function(e) {
					n("chooseCard", {
						app_id: R.appId,
						location_id: e.shopId || "",
						sign_type: e.signType || "SHA1",
						card_id: e.cardId || "",
						card_type: e.cardType || "",
						card_sign: e.cardSign,
						time_stamp: e.timestamp + "",
						nonce_str: e.nonceStr
					}, function() {
						return e._complete = function(e) {
							e.cardList = e.choose_card_info, delete e.choose_card_info
						}, e
					}())
				}), o()(v, "openCard", function(e) {
					for(var t = e.cardList, i = [], o = 0, a = t.length; a > o; ++o) {
						var r = t[o],
							s = {
								card_id: r.cardId,
								code: r.code
							};
						i.push(s)
					}
					n(A.openCard, {
						card_list: i
					}, e)
				}), o()(v, "consumeAndShareCard", function(e) {
					n(A.consumeAndShareCard, {
						consumedCardId: e.cardId,
						consumedCode: e.code
					}, e)
				}), o()(v, "chooseWXPay", function(e) {
					n(A.chooseWXPay, s(e), e)
				}), o()(v, "openEnterpriseRedPacket", function(e) {
					n(A.openEnterpriseRedPacket, s(e), e)
				}), o()(v, "startSearchBeacons", function(e) {
					n(A.startSearchBeacons, {
						ticket: e.ticket
					}, e)
				}), o()(v, "stopSearchBeacons", function(e) {
					n(A.stopSearchBeacons, {}, e)
				}), o()(v, "onSearchBeacons", function(e) {
					i(A.onSearchBeacons, e)
				}), o()(v, "openEnterpriseChat", function(e) {
					n("openEnterpriseChat", {
						useridlist: e.userIds,
						chatname: e.groupName
					}, e)
				}), v),
				D = 1,
				U = {};
			return S.addEventListener("error", function(e) {
				if(!b) {
					var t = e.target,
						n = t.tagName,
						i = t.src;
					if("IMG" == n || "VIDEO" == n || "AUDIO" == n || "SOURCE" == n) {
						if(-1 != i.indexOf("wxlocalresource://")) {
							e.preventDefault(), e.stopPropagation();
							var o = t["wx-id"];
							if(o || (o = D++, t["wx-id"] = o), U[o]) return;
							U[o] = !0, wx.ready(function() {
								wx.getLocalImgData({
									localId: i,
									success: function(e) {
										t.src = e.localData
									}
								})
							})
						}
					}
				}
			}, !0), S.addEventListener("load", function(e) {
				if(!b) {
					var t = e.target,
						n = t.tagName;
					if(t.src, "IMG" == n || "VIDEO" == n || "AUDIO" == n || "SOURCE" == n) {
						var i = t["wx-id"];
						i && (U[i] = !1)
					}
				}
			}, !0), t && (e.wx = e.jWeixin = O), O
		}
	})
}, function(e, t, n) {
	var i = n(0)(n(74), n(206), null, null);
	e.exports = i.exports
}, , , function(e, t, n) {
	"use strict";
	var i = n(89),
		o = n.n(i),
		a = n(96),
		r = n.n(a),
		s = n(95),
		c = n.n(s),
		u = n(22),
		d = n.n(u),
		l = n(23),
		h = n.n(l),
		p = n(1),
		f = n(147),
		m = n.n(f),
		g = n(159),
		v = n.n(g),
		A = function() {
			function e(t) {
				d()(this, e), this.controller = t
			}
			return h()(e, [{
				key: "forward",
				value: function() {}
			}, {
				key: "backward",
				value: function() {}
			}]), e
		}(),
		w = function(e) {
			function t(e) {
				d()(this, t);
				var n = r()(this, (t.__proto__ || o()(t)).call(this, e));
				return n.tween = new v.a.Tween({
					x: 3.55,
					y: 0,
					z: -328,
					ry: 0
				}).to({
					x: 0,
					y: 0,
					z: -28,
					ry: -2 * Math.PI
				}, 1600).onUpdate(function() {
					e.earth.setCamera(this.x, this.y, this.z), e.earth.earthGroup.rotation.y = this.ry
				}).onComplete(function() {
					e.changeState("idle")
				}).easing(v.a.Easing.Cubic.Out).start(), n
			}
			return c()(t, e), h()(t, [{
				key: "forward",
				value: function() {
					v.a.update()
				}
			}]), t
		}(A),
		S = function(e) {
			function t(e) {
				d()(this, t);
				var n = r()(this, (t.__proto__ || o()(t)).call(this, e));
				return e.state instanceof w || e.playSprite("audio"), e.earth.controller.enabled = !0, n
			}
			return c()(t, e), h()(t, [{
				key: "forward",
				value: function() {
					this.controller.changeState("rotating")
				}
			}]), t
		}(A),
		y = function(e) {
			function t(e) {
				d()(this, t);
				var n = r()(this, (t.__proto__ || o()(t)).call(this, e));
				return n.tween = null, e.pauseSprite("audio"), e.earth.controller.enabled = !1, n
			}
			return c()(t, e), h()(t, [{
				key: "forward",
				value: function() {
					var e = this,
						t = this.controller.earth,
						n = this.controller.target;
					this.tween ? v.a.update() : this.tween = new v.a.Tween(t.cameraPosition()).to({
						x: n.cameraFarPosition[0],
						y: n.cameraFarPosition[1],
						z: n.cameraFarPosition[2]
					}, 1e3).onUpdate(function() {
						t.setCamera(this.x, this.y, this.z)
					}).onComplete(function() {
						e.controller.changeState("zooming"), e.tween = null
					}).start()
				}
			}, {
				key: "backward",
				value: function() {
					this.tween ? v.a.update() : this.controller.state = new S(this.controller)
				}
			}]), t
		}(A),
		x = function(e) {
			function t(e) {
				d()(this, t);
				var n = r()(this, (t.__proto__ || o()(t)).call(this, e));
				return n.direction = "", n.tween = null, e.hideCloud(), e.showEarth(), n
			}
			return c()(t, e), h()(t, [{
				key: "_setDirection",
				value: function(e) {
					var t = this,
						n = this.controller.earth,
						i = this.controller.target,
						o = n.cameraPosition(),
						a = null;
					this.direction !== e && (a = "forward" === e ? {
						x: i.cameraNearPosition[0],
						y: i.cameraNearPosition[1],
						z: i.cameraNearPosition[2]
					} : {
						x: i.cameraFarPosition[0],
						y: i.cameraFarPosition[1],
						z: i.cameraFarPosition[2]
					}, this.direction = e, this.tween && this.tween.stop(), this.tween = new v.a.Tween(o).to(a, 1e3).onUpdate(function() {
						n.setCamera(this.x, this.y, this.z)
					}).onComplete(function() {
						t._handleTweenComplete()
					}).start())
				}
			}, {
				key: "_handleTweenComplete",
				value: function() {
					"forward" === this.direction ? this.controller.changeState("diving") : this.controller.changeState("idle"), this.tween = null
				}
			}, {
				key: "forward",
				value: function() {
					this._setDirection("forward"), this.tween && v.a.update()
				}
			}, {
				key: "backward",
				value: function() {
					this._setDirection("backward"), this.tween && v.a.update()
				}
			}]), t
		}(A),
		k = function(e) {
			function t(e) {
				d()(this, t);
				var n = r()(this, (t.__proto__ || o()(t)).call(this, e));
				return n.count = 0, e.showCloud(), e.hideEarth(), e.hideVideo(), n
			}
			return c()(t, e), h()(t, [{
				key: "_throttle",
				value: function(e) {
					this.count % 3 == 0 && (e && e(), this.count = 0), this.count++
				}
			}, {
				key: "forward",
				value: function() {
					var e = this.controller.cloud;
					e.currentFrameIndex === e.images.length - 1 ? this.controller.changeState("presenting") : this._throttle(function(t) {
						return e.next()
					})
				}
			}, {
				key: "backward",
				value: function() {
					var e = this.controller.cloud;
					0 === e.currentFrameIndex ? this.controller.changeState("zooming") : this._throttle(function(t) {
						return e.prev()
					})
				}
			}]), t
		}(A),
		C = function(e) {
			function t(e) {
				d()(this, t);
				var n = r()(this, (t.__proto__ || o()(t)).call(this, e));
				return e.hideCloud(), e.showVideo(), n
			}
			return c()(t, e), h()(t, [{
				key: "backward",
				value: function() {
					this.controller.changeState("diving")
				}
			}]), t
		}(A),
		M = function() {
			function e(t) {
				d()(this, e), this.earth = t.earth, this.cloud = t.cloud, this.audioSprite = t.audioSprite, this.videoSprite = t.videoSprite, this.onStateChange = t.onStateChange, this.onTargetChange = t.onTargetChange, this.state = null, this.touchDown = !1, this.target = null, this.targetList = [], this._init()
			}
			return h()(e, [{
				key: "_init",
				value: function() {
					var e = this;
					setTimeout(function(t) {
						e.state = new w(e)
					}, 800), this._shuffleTargetList(), this._loop()
				}
			}, {
				key: "_shuffleTargetList",
				value: function() {
					this.targetList = m()(p.c.map(function(e) {
						return e.name
					}))
				}
			}, {
				key: "_loop",
				value: function() {
					requestAnimationFrame(this._loop.bind(this)), this._animate()
				}
			}, {
				key: "_animate",
				value: function() {
					this.state && (this.state instanceof w && this.state.forward(), this.touchDown && this.target ? this.state.forward() : this.state.backward())
				}
			}, {
				key: "showEarth",
				value: function() {
					this.earth.container.style.display = "block"
				}
			}, {
				key: "hideEarth",
				value: function() {
					this.earth.container.style.display = "none"
				}
			}, {
				key: "showCloud",
				value: function() {
					this.cloud.el.style.display = "block"
				}
			}, {
				key: "hideCloud",
				value: function() {
					this.cloud.el.style.display = "none"
				}
			}, {
				key: "showVideo",
				value: function() {
					this.playSprite("video"), this.videoSprite.media.style.display = "block"
				}
			}, {
				key: "hideVideo",
				value: function() {
					this.pauseSprite("video"), this.videoSprite.media.style.display = "none"
				}
			}, {
				key: "playSprite",
				value: function(e) {
					this.target && ("video" === e ? this.videoSprite.repeat(this.target.name) : "audio" === e && this.audioSprite.play(this.target.name))
				}
			}, {
				key: "pauseSprite",
				value: function(e) {
					"video" === e ? this.videoSprite.pause() : "audio" === e && this.audioSprite.pause()
				}
			}, {
				key: "start",
				value: function() {
					this.touchDown = !0
				}
			}, {
				key: "end",
				value: function() {
					this.touchDown = !1
				}
			}, {
				key: "nextTarget",
				value: function() {
					var e = (this.targetList.indexOf(this.target ? this.target.name : null) + 1) % this.targetList.length;
					this.setTarget(this.targetList[e])
				}
			}, {
				key: "setTarget",
				value: function(e) {
					this.target = p.c.filter(function(t) {
						return t.name === e
					})[0], this.playSprite("audio"), this.videoSprite.set(e), this.onTargetChange && this.onTargetChange()
				}
			}, {
				key: "changeState",
				value: function(e) {
					switch(e) {
						case "idle":
							this.state = new S(this);
							break;
						case "rotating":
							this.state = new y(this);
							break;
						case "zooming":
							this.state = new x(this);
							break;
						case "diving":
							this.state = new k(this);
							break;
						case "presenting":
							this.state = new C(this);
							break;
						default:
							this.state = new A(this)
					}
					this.onStateChange && this.onStateChange(e)
				}
			}]), e
		}();
	t.a = M
}, function(e, t, n) {
	"use strict";

	function i() {
		return new o.Mesh(new o.SphereGeometry(5.2, 40, 40), new o.MeshPhongMaterial({
			map: n.i(a.a)("earthCloud"),
			transparent: !0,
			opacity: 1,
			blending: o.AdditiveBlending
		}))
	}
	t.a = i;
	var o = n(8),
		a = n(21)
}, function(e, t, n) {
	"use strict";

	function i() {
		return new o.Mesh(new o.SphereGeometry(5, 32, 32), new o.MeshPhongMaterial({
			map: n.i(a.a)("earth"),
			bumpMap: n.i(a.a)("earthBump"),
			bumpScale: .15,
			specularMap: n.i(a.a)("earthSpec"),
			specular: new o.Color("#909090"),
			shininess: 5,
			transparent: !0
		}))
	}
	t.a = i;
	var o = n(8),
		a = n(21)
}, function(e, t, n) {
	"use strict";

	function i() {
		var e = new s.Group;
		return e.add(a()), e.add(o()), e
	}

	function o() {
		var e = new s.SphereGeometry(5, 40, 40),
			t = new s.MeshBasicMaterial({
				color: 0
			}),
			n = new s.Mesh(e, t);
		return n.material.transparent = !1, n
	}

	function a() {
		var e = new s.SphereGeometry(5, 40, 40),
			t = r(),
			n = new s.Mesh(e, t);
		return n.material.side = s.BackSide, n.material.transparent = !1, n.scale.x = n.scale.y = n.scale.z = 1.3, n
	}

	function r() {
		return new s.ShaderMaterial({
			uniforms: {
				c: {
					type: "f",
					value: .34
				},
				p: {
					type: "f",
					value: 9.17
				}
			},
			vertexShader: c,
			fragmentShader: u
		})
	}
	n.d(t, "b", function() {
		return d
	}), t.a = i;
	var s = n(8),
		c = ["varying vec3 vNormal;", "void main() {", "vNormal = normalize( normalMatrix * normal );", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
		u = ["uniform float c;", "uniform float p;", "varying vec3 vNormal;", "void main() {", "float intensity = pow( c - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), p );", "gl_FragColor = vec4( 0.2, 0.58, 0.9, 0.3 ) * intensity;", "}"].join("\n"),
		d = {
			uniforms: {
				tSampler1: {
					type: "t",
					value: null
				},
				tSampler2: {
					type: "t",
					value: null
				}
			},
			vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
			fragmentShader: ["uniform sampler2D tSampler1;", "uniform sampler2D tSampler2;", "varying vec2 vUv;", "void main() {", "vec4 texture1 = texture2D( tSampler1, vUv );", "vec4 texture2 = texture2D( tSampler2, vUv );", "gl_FragColor = texture1 + texture2;", "}"].join("\n")
		}
}, function(e, t, n) {
	"use strict";
	var i = n(22),
		o = n.n(i),
		a = n(23),
		r = n.n(a),
		s = n(67),
		c = n(69),
		u = n(66),
		d = n(65),
		l = n(70),
		h = n(1),
		p = n(8),
		f = n(158)(p),
		m = n(153)(p),
		g = h.d,
		v = h.e,
		A = function() {
			function e(t, n) {
				o()(this, e), this.container = "string" == typeof t ? document.getElementById(t) : t, this.width = 2 * g, this.height = 2 * v, this.camera = null, this.renderer = null, this.controller = null, this.scene = null, this.earthGroup = null, this.locationGroup = null, this.cloud = null, this.hasGlow = !1, this.autoRotate = !0, this.rotationSpeed = .001, this.cloudSpeed = -3e-4, this._init()
			}
			return r()(e, [{
				key: "_init",
				value: function() {
					this._createRenderer(), this._createScene(), this._createCamera(), this._createLight(), this._createEarth(), this._createCloud(), this._createLocations(), this._createOutGlow(), this._createController(), this._loop()
				}
			}, {
				key: "_createController",
				value: function() {
					var e = new f(this.camera);
					e.rotateSpeed = .3, e.autoRotate = !1, e.enableZoom = !1, e.enablePan = !1, e.enabled = !0, this.controller = e
				}
			}, {
				key: "_createCamera",
				value: function() {
					var e = new p.PerspectiveCamera(40, this.width / this.height, .1, 1e3);
					e.position.set(3.55, 0, -328), this.scene.add(e), this.camera = e
				}
			}, {
				key: "_createLight",
				value: function() {
					this.scene.add(n.i(c.a)()), this.camera.add(n.i(c.b)())
				}
			}, {
				key: "_createScene",
				value: function() {
					this.scene = new p.Scene, this.earthGroup = new p.Group, this.locationGroup = new p.Group, this.scene.add(this.earthGroup), this.earthGroup.add(this.locationGroup)
				}
			}, {
				key: "_createEarth",
				value: function() {
					var e = n.i(u.a)();
					this.earthGroup.add(e)
				}
			}, {
				key: "_createCloud",
				value: function() {
					var e = n.i(d.a)();
					this.earthGroup.add(e), this.cloud = e
				}
			}, {
				key: "_createLocations",
				value: function() {
					var e = this;
					h.c.forEach(function(t) {
						var i = n.i(l.a)(t);
						e.locationGroup.add(i)
					})
				}
			}, {
				key: "_createRenderer",
				value: function() {
					var e = new p.WebGLRenderer({
							alpha: !0,
							antialias: !0,
							preserveDrawingBuffer: !0
						}),
						t = this.container;
					e.setClearColor(0, 0), e.setSize(this.width, this.height), e.domElement.style.position = "relative", e.domElement.style.width = this.width / 2 + "px", e.domElement.style.height = this.height / 2 + "px", t.appendChild(e.domElement), this.renderer = e
				}
			}, {
				key: "_createOutGlow",
				value: function() {
					this.blurScene = new p.Scene, this.glowGroup = s.a(), this.blurScene.add(this.glowGroup);
					var e = new p.WebGLRenderTarget(this.width, this.height, {
							minFilter: p.LinearFilter,
							magFilter: p.LinearFilter,
							format: p.RGBAFormat,
							stencilBuffer: !0
						}),
						t = new m.RenderPass(this.blurScene, this.camera),
						n = new m.RenderPass(this.scene, this.camera);
					this.blurComposer = new m(this.renderer, e), this.blurComposer.addPass(t), this.sceneComposer = new m(this.renderer, e), this.sceneComposer.addPass(n);
					var i = new m.ShaderPass(s.b, "tSampler1");
					i.uniforms.tSampler2.value = this.blurComposer.renderTarget2.texture, i.renderToScreen = !0, this.sceneComposer.addPass(i), this.hasGlow = !0
				}
			}, {
				key: "_loop",
				value: function() {
					requestAnimationFrame(this._loop.bind(this)), this._animate(), this._render()
				}
			}, {
				key: "_animate",
				value: function() {
					var e = this.rotationSpeed,
						t = this.cloudSpeed;
					this.autoRotate && (this.camera.position.x = this.camera.position.x * Math.cos(e) - this.camera.position.z * Math.sin(e), this.camera.position.z = this.camera.position.z * Math.cos(e) + this.camera.position.x * Math.sin(e)), this.cloud.rotation.y += t, this.controller.update()
				}
			}, {
				key: "_render",
				value: function() {
					this.isStart && this.hasGlow ? (this.blurComposer.render(), this.sceneComposer.render()) : (this.renderer.render(this.scene, this.camera), this.isStart = !0)
				}
			}, {
				key: "setCamera",
				value: function() {
					3 === arguments.length ? this.camera.position.set(arguments[0], arguments[1], arguments[2]) : this.camera.position.set(arguments[0].x, arguments[0].y, arguments[0].z)
				}
			}, {
				key: "cameraPosition",
				value: function() {
					return {
						x: this.camera.position.x,
						y: this.camera.position.y,
						z: this.camera.position.z
					}
				}
			}, {
				key: "startAutoRotate",
				value: function() {
					this.autoRotate = !0
				}
			}, {
				key: "stopAutoRotate",
				value: function() {
					this.autoRotate = !1
				}
			}]), e
		}();
	t.a = A
}, function(e, t, n) {
	"use strict";

	function i() {
		return new a.AmbientLight(3750201, .5)
	}

	function o() {
		var e = new a.SpotLight(16777215, 1.2);
		return e.position.set(-26, 11, -11), e.angle = .2, e.castShadow = !1, e.penumbra = .4, e.distance = 124, e.decay = 1, e.shadow.camera.near = 50, e.shadow.camera.far = 200, e.shadow.camera.fov = 35, e.shadow.mapSize.height = 1024, e.shadow.mapSize.width = 1024, e
	}
	t.a = i, t.b = o;
	var a = n(8)
}, function(e, t, n) {
	"use strict";

	function i(e) {
		var t = new o.SpriteMaterial({
				map: n.i(a.a)(e.imageName),
				color: 16777215,
				fog: !0
			}),
			i = new o.Sprite(t);
		return i.position.set(e.position[0], e.position[1], e.position[2]), i.scale.set(1.4, 1.4, 1.4), i
	}
	t.a = i;
	var o = n(8),
		a = n(21)
}, function(e, t, n) {
	"use strict";
	var i = n(22),
		o = n.n(i),
		a = n(23),
		r = n.n(a),
		s = n(145),
		c = n.n(s),
		u = n(146),
		d = n.n(u),
		l = n(1),
		h = [50, 100],
		p = [1, 3],
		f = function() {
			function e(t) {
				o()(this, e), this.el = t, this.meteorImage = null, this.width = 2 * window.innerWidth, this.height = 2 * window.innerHeight, this.context = null, this.stars = [], this.meteor = null, this._init()
			}
			return r()(e, [{
				key: "_init",
				value: function() {
					this._loadImage(), this._createCanvas(), this._createStars(), this._loop()
				}
			}, {
				key: "_loop",
				value: function() {
					requestAnimationFrame(this._loop.bind(this)), this._shine(), this._moveMeteor(), this._render()
				}
			}, {
				key: "_render",
				value: function() {
					this._clear(), this._drawStars(), this.meteor && this.meteorImage && this._drawMeteor()
				}
			}, {
				key: "_loadImage",
				value: function() {
					var e = new Image;
					e.src = l.a.meteor, this.meteorImage = e
				}
			}, {
				key: "_createCanvas",
				value: function() {
					var e = document.createElement("canvas");
					e.width = this.width, e.height = this.height, e.style.width = this.width / 2 + "px", e.style.height = this.height / 2 + "px", this.el.appendChild(e), this.context = e.getContext("2d")
				}
			}, {
				key: "_createStars",
				value: function() {
					for(var e = c.a.apply(null, h), t = this.width, n = this.height, i = 0; i < e; i++) this.stars.push({
						x: c()(0, t),
						y: c()(0, n),
						r: c.a.apply(null, p),
						shine: !1
					})
				}
			}, {
				key: "_clear",
				value: function() {
					this.context.clearRect(0, 0, this.width, this.height)
				}
			}, {
				key: "_shine",
				value: function() {
					var e = d()(this.stars, c()(.9 * this.stars.length, this.stars.length));
					this.stars.forEach(function(t) {
						-1 === e.indexOf(t) ? t.shine = !1 : t.shine = !0
					})
				}
			}, {
				key: "_drawStars",
				value: function() {
					var e = this;
					this.stars.forEach(function(t) {
						e._drawStar(t)
					})
				}
			}, {
				key: "_drawStar",
				value: function(e) {
					var t = this.context;
					t.globalAlpha = .2, t.fillStyle = "#FFF", t.beginPath(), t.arc(e.x, e.y, e.r, 0, 2 * Math.PI, !0), t.closePath(), t.fill(), e.shine && (t.globalAlpha = c()(.5, 1), t.fillStyle = "#FFF", t.beginPath(), t.arc(e.x, e.y, .8 * e.r, 0, 2 * Math.PI, !0), t.closePath(), t.fill())
				}
			}, {
				key: "_drawMeteor",
				value: function() {
					this.meteorImage.complete && this.context.drawImage(this.meteorImage, this.meteor.x, this.meteor.y)
				}
			}, {
				key: "_createMeteor",
				value: function() {
					var e = this;
					setTimeout(function() {
						var t = c()(.5 * e.width, 1.5 * e.width),
							n = c()(-.5 * e.height, .5 * e.height);
						e.meteor = {
							x: t,
							y: n,
							fromX: t,
							fromY: n,
							toX: -.1 * e.width,
							toY: 1.1 * e.height,
							speed: c()(2, 4)
						}
					}, c()(0, 1))
				}
			}, {
				key: "_moveMeteor",
				value: function() {
					var e = this.meteor;
					e ? e.x < e.toX || e.y > e.toY ? this._createMeteor() : (e.x -= e.speed, e.y += e.speed) : this._createMeteor()
				}
			}]), e
		}();
	t.a = f
}, function(e, t, n) {
	"use strict";

	function i() {
		fetch(s + "?url=" + encodeURIComponent(window.location.href), {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			mode: "cors"
		}).then(function(e) {
			return e.json()
		}).then(function(e) {
			o(e.appId, e.timestamp, e.nonceStr, e.signature)
		})
	}

	function o(e, t, n, i) {
		window.wx.config({
			debug: !1,
			appId: e,
			timestamp: t,
			nonceStr: n,
			signature: i,
			jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
		}), a()
	}

	function a() {
		var e = "http://xplan.jackyang.me",
			t = r.a.wxShareImg,
			n = window.wx;
		n.ready(function() {
			n.onMenuShareTimeline({
				title: "地球上最漂亮的H5",
				link: e,
				imgUrl: t
			}), n.onMenuShareAppMessage({
				title: "地球上最漂亮的H5",
				desc: "这不是xplan官方链接，是来自外籍杰克的最强山寨版 -_-",
				link: e,
				imgUrl: t
			})
		})
	}
	t.a = i;
	var r = n(1),
		s = "http://wx-service.yotta-tech.cn/jsapi/config"
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = n(63),
		o = (n.n(i), n(60), n(62)),
		a = n(61),
		r = n.n(a);
	o.a.config.productionTip = !1, window.loader = null, new o.a({
		el: "#app",
		render: function(e) {
			return e(r.a)
		}
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = n(90),
		o = n.n(i),
		a = n(135),
		r = (n.n(a), n(151)),
		s = n.n(r),
		c = n(193),
		u = n.n(c),
		d = n(194),
		l = n.n(d),
		h = n(185),
		p = n.n(h),
		f = n(1),
		m = n(184),
		g = n.n(m);
	t.default = {
		name: "app",
		components: {
			loading: u.a,
			show: l.a,
			meteor: p.a,
			"background-audio": g.a
		},
		data: function() {
			return {
				progress: 13,
				loading: !0
			}
		},
		mounted: function() {
			this.initLoader()
		},
		methods: {
			initLoader: function() {
				var e = this,
					t = new s.a;
				o()(f.a).forEach(function(e) {
					t.add(e, f.a[e])
				}), t.onProgress.add(function() {
					e.progress = Math.round(t.progress)
				}), t.onComplete.add(function() {
					setTimeout(function() {
						e.loading = !1
					}, 500)
				}), t.load(), window.loader = t
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = n(1);
	t.default = {
		data: function() {
			return {
				audioSrc: i.b.backgroundAudio
			}
		},
		mounted: function() {
			var e = this.$el;
			window.wx.ready(function() {
				e.play(), e.pause(), setTimeout(function(t) {
					return e.play()
				}, 0)
			})
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = n(71);
	t.default = {
		mounted: function() {
			new i.a(this.$el)
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = n(137),
		o = (n.n(i), n(1)),
		a = n(97),
		r = n.n(a);
	t.default = {
		wrapper: null,
		mounted: function() {
			var e = this;
			this.$options.wrapper = this.$refs.wrapper, window.addEventListener("resize", function() {
				e.resize()
			}), this.resize()
		},
		methods: {
			resize: function() {
				var e = this.$options.wrapper,
					t = new r.a({
						containerWidth: window.innerWidth,
						containerHeight: window.innerHeight,
						originWidth: o.d,
						originHeight: o.e,
						centerType: "contain"
					}).ratio();
				e.style.transform = "scale(" + t + ")"
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		props: {
			showPressButton: Boolean,
			showXplanButton: Boolean
		},
		methods: {
			handleStart: function() {
				this.$emit("hold")
			},
			handleEnd: function() {
				this.$emit("release")
			},
			handleClickXPlan: function() {
				this.$emit("knowmore")
			}
		}
	}
}, function(e, t, n) {
	"use strict";

	function i() {
		var e = {};
		return r.c.forEach(function(t) {
			e[t.name] = t.soundSprite
		}), e
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var o = n(54),
		a = n.n(o),
		r = n(1);
	t.default = {
		audioSprite: null,
		mounted: function() {
			this.createAudioSprite()
		},
		methods: {
			createAudioSprite: function() {
				var e = new a.a({
					media: r.b.audioSprite,
					mediaType: "audio",
					sprites: i(),
					onReady: function() {},
					onSpriteEnd: this.handleSpriteEnd.bind(this)
				});
				this.$options.audioSprite = e, window.wx.ready(function() {
					e.media.play(), e.media.pause()
				})
			},
			handleSpriteEnd: function() {
				this.$emit("spriteend")
			}
		}
	}
}, function(e, t, n) {
	"use strict";

	function i(e) {
		return new Array(13).fill("").map(function(t, n) {
			return e["cloud" + n].data
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var o = n(144),
		a = n.n(o),
		r = n(1);
	t.default = {
		imageSprite: null,
		mounted: function() {
			this.createImageSprite()
		},
		methods: {
			createImageSprite: function() {
				var e = i(window.loader.resources),
					t = new a.a(this.$refs.container, {
						interval: 80,
						width: r.d,
						height: r.e,
						images: e
					});
				this.$options.imageSprite = t
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		props: {
			showTips: {
				type: Boolean,
				default: !0
			},
			showCoord: {
				type: Boolean,
				default: !0
			},
			coordIndex: {
				type: Number,
				default: 0
			}
		},
		data: function() {
			return {
				backgroundPosition: ""
			}
		},
		watch: {
			coordIndex: function(e) {
				this.setBackgroundPosition(e)
			}
		},
		methods: {
			setBackgroundPosition: function(e) {
				this.backgroundPosition = ["0px 0px", "0px -19px", "0px -38px", "0px -57px", "0px -76px"][e]
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = n(68);
	t.default = {
		earth: null,
		data: function() {
			return {}
		},
		mounted: function() {
			var e = new i.a(this.$refs.mountNode);
			this.$options.earth = e
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function() {
			return {
				active: !1
			}
		},
		mounted: function() {
			var e = this;
			setTimeout(function() {
				e.active = !0
			}, 9e3)
		},
		methods: {
			handleBack: function() {
				this.active && this.$emit("back")
			},
			handleRegister: function() {
				this.active && (window.location.href = "https://kandian.qq.com/mqq/activity/html/qqexplore.html")
			}
		}
	}
}, function(e, t, n) {
	"use strict";

	function i() {
		var e = {};
		return r.c.forEach(function(t) {
			e[t.name] = t.videoSprite
		}), e
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var o = n(54),
		a = n.n(o),
		r = n(1);
	t.default = {
		videoSprite: null,
		data: function() {
			return {
				videoSrc: r.b.videoSprite
			}
		},
		mounted: function() {
			this.createVideoSprite()
		},
		methods: {
			createVideoSprite: function() {
				var e = new a.a({
					media: this.$refs.video,
					mediaType: "video",
					sprites: i()
				});
				this.$options.videoSprite = e, window.wx.ready(function() {
					e.media.play(), e.media.pause()
				})
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = n(136),
		o = (n.n(i), n(59)),
		a = n.n(o);
	t.default = {
		components: {
			page: a.a
		},
		props: {
			progress: {
				type: Number,
				default: 0
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = n(138),
		o = (n.n(i), n(72)),
		a = n(64),
		r = n(59),
		s = n.n(r),
		c = n(189),
		u = n.n(c),
		d = n(191),
		l = n.n(d),
		h = n(190),
		p = n.n(h),
		f = n(188),
		m = n.n(f),
		g = n(192),
		v = n.n(g),
		A = n(187),
		w = n.n(A),
		S = n(186),
		y = n.n(S);
	t.default = {
		controller: null,
		components: {
			page: s.a,
			"show-cover": u.a,
			"show-end-cover": l.a,
			"show-earth": p.a,
			"show-clouds": m.a,
			"show-video-sprite": v.a,
			"show-audio-sprite": w.a,
			"show-actions": y.a
		},
		data: function() {
			return {
				isEnd: !1,
				showTips: !0,
				showCoord: !1,
				showXplanButton: !1,
				coordIndex: -1,
				revealed: !1
			}
		},
		mounted: function() {
			this.addDocumentTouchMove(), this.createController(), setTimeout(o.a, 300)
		},
		methods: {
			addDocumentTouchMove: function() {
				document.documentElement.addEventListener("touchmove", this.handleDocumentTouchMove.bind(this))
			},
			handleHold: function() {
				this.$options.controller.start()
			},
			handleRelease: function() {
				this.$options.controller.end()
			},
			handleKnowMore: function() {
				this.isEnd = !0
			},
			handleBack: function() {
				this.isEnd = !1
			},
			handleDocumentTouchMove: function(e) {
				this.showTips && (this.showTips = !1), e.preventDefault()
			},
			handleAudioSpriteEnd: function() {
				this.$options.controller.nextTarget()
			},
			createController: function() {
				var e = this,
					t = this.$refs.earth.$options.earth,
					n = this.$refs.cloudSprite.$options.imageSprite,
					i = this.$refs.videoSprite.$options.videoSprite,
					o = this.$refs.audioSprite.$options.audioSprite,
					r = new a.a({
						earth: t,
						cloud: n,
						videoSprite: i,
						audioSprite: o,
						onTargetChange: function() {
							e.showCoord = !1
						},
						onStateChange: function(t) {
							e.showXplanButton = "idle" === t, "zooming" === t && (e.showCoord = !0, e.coordIndex = r.target.coordSpriteIndex), "presenting" === t && (e.revealed = !0)
						}
					});
				setTimeout(function(e) {
					return r.nextTarget()
				}, 1e3), this.$options.controller = r
			}
		}
	}
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
	e.exports = n.p + "static/media/music_bg.6a58d58.mp3"
}, function(e, t, n) {
	e.exports = n.p + "static/media/music_sprite.8a28f11.mp3"
}, function(e, t, n) {
	e.exports = n.p + "static/media/video_sprite.1ad92e6.mp4"
}, , , , , , , , , , , , , , , , , , , function(e, t) {
	e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACCCAYAAADMtbNXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplYzc1MDQ3OS01ZjMyLWI2NDgtODk1Ni1mMTg3ZWY0ZTBlNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDhDMjlDMTAyMkU4MTFFNzg0NjZFMzM1NDQ4NTUxNEEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDhDMjlDMEYyMkU4MTFFNzg0NjZFMzM1NDQ4NTUxNEEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2YzlkMjlkZi1mYjRiLWE0NGMtODcwOC1hNDM3Nzg1OTg5NWMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphMDk3YTM0YS0yYjFlLTExZTctYThj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"
}, function(e, t, n) {
	e.exports = n.p + "static/img/earth4.7cddb76.jpg"
}, function(e, t, n) {
	e.exports = n.p + "static/img/earth_bump.55b3930.jpg"
}, function(e, t, n) {
	e.exports = n.p + "static/img/earth_cloud.171481f.png"
}, function(e, t, n) {
	e.exports = n.p + "static/img/earth_spec.dc4fc60.jpg"
}, function(e, t) {
	e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMAmSHdd2ZEEbu+7jPMJBhPA4gUB6uQQByNCp1pPSwvKKZuOA7KxbaxV5TCfdjQoYVdSuH25oWeqE0AAAQCSURBVHja7ZbXltowEEBHxb1gDKabNWBMb5v4/38tajhONpCHJeVh7jkgH8mSrkYjASAIgiAIgiAIgiAIgiAIgiAIgiAIgvwfpMulAx9wHPg73Na1wBvATxCiS5uBW0tsU891taixADiBTzKqDRwaOBGEIRFwKQCuBdR3GgHj5XdrxaccDnWD9UsB1eJaZqltgW0In48A/VI3yCUaLIHrym/xLCPQBWb/LED4CwQudYtpo1UzQ02B1H1gIYh26tYNrs18yvQz+4TAvi1QfBegFqOOb4kH8BmzWBg0SeB2XxmBU1vA/S5gWy4hzApqug2Z1a0tcp/K8ZkRCHxay1rX+gMR2OoktEXYOYPAB2b7VKeHG9paAOrACPyBHAgoJYRSEYG+mIl3wTKHjfr2ljlKwGkEXn4KaE0Y833GSE3lUllAGVMCAeMAJHTURdSnRuDl9wCtqb4JqRLgJGAE+mJarq8r4uv7iZqOL78JjYBF+iIqth/SsCvT33XDABQWc4WARkbgU3Q+/hY4xAEIAls4wJ/H/BoiCPLfserpsteuGOdzGs3zRLc4oEnfKNwZLweRLJMoeBsG85V4WiWgmds53HHgdyyGurSXZuRFBDAcZVm26451yxYUCT+TDmiGh6La2Ymw47tMMBd6i9gMQKrJdAya6Rs8J6/NmBdf909LW3jfbHd0u+molJ4JQHW4HDlIOmzS6SzKLIFkcDucBh3R9y3M1fLDzfVmrStHS/sjeM7o/gb/cqIqZuay7t5AQ9+PuV71ZAxLbwUAS19ZO1dluOyDJNrLxcbvWnEaqWLre/CUYTmoIj3hjr/TlsCoc1dcHLJGIF+nAL09hxYzI+BJgQmBFol73W2fZ8AGJhctkEF3Pf4o0CvpsIyVwJnme7mg4DR+JBDvA2gxWMO1gif0qhkE3koJTMTHG0P6k8C1ADhPVXbt2WkTyfBu4JHA/NyDFoTD2JvDYwb+gfMvnbsA9NcAPwms1wu+9lQS7k4b3ct7KBC5cfuIv5/59OsFHjMpdyRbTxoB2GzSzQ8CwTshpDjJVdAscm2VfOHskUBStdNjeiRkV5QreEASl0O5D+G8EYAidGdtgV1XndGzygHonNRgi6NeZ977kIQzX3enKUDidZ7/k9pOzqrMCrldZmM3daCDo7L37RipmeRJpJsUSKUMsiOn8bwolIDtgX5Vbbb19RDFOdkLxWup2rfl8oHANNPRzneJ6Ghi51RL3ahWcrtAE4+UO7Dqa72rVxUeGYJkftCnNKNmR7xir15bTHUmkEcncUgTUMgyjUGzjFSRqqMWp6CIY7ljCUBkKmbTxdX0GOuyNzQHIJ8uLDUGdcw8MSAIgiAIgiAIgiAIgiDIP+cbwYZo6BY4nAcAAAAASUVORK5CYII="
}, function(e, t) {
	e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMAmd1md7yqRCERGbDMwVUJhw0HMgOmdMaBKGvvtlpPy52SLyWhYTk9FR3pjHxv0kk2+NZMQQHi3M5/EC1fAAAEX0lEQVR42uzQsWrDMBSF4XMlWVHBFCcu7aCSUgqd0iHjff8Xq65irCSQQVmS4XwYbGwwvw6IiIiIiIiIiIiIiIiIiJ7Cdv/+t9/iUXbTUYt8eEOjWG0cgJRnGOcB+HH9MkYYTZAABBmn/uN/6OJzdzsAIbeAGFDNrjwLgEGNlGtCt6ir78uAjRbeAkSrIPWNGrFZFEBbwEr7/Wpz/IFZTjTYDwfvasWJBOfVO3sSW0VFZLQYLe4MED1zwCJp8ksA7OZmIMaLAFsuR5HQFtCiO+JLz8RbATEA+fV6gfr6xSWsC0hAr3/262xHbRgKA/DvLCbOvpBJCCEECPuwzAzTGb//i7VeoHBDJaSqqsR3AcG24j/nWCC++ZX6dwBcAtAhJxZFxpkOcDkDsCjgx5cK+I8E8PgVAi0cXgIYvgFkQ1j+7RnQhfLtSwtM+kiAil8JocUUJr1qAeMOtWQAPgx1AMHmNhBSgwt+/EiAZMMvvlJohgmLXAWAHw4zPdFTAfQJNmUjwji04YePBEDDz96O0CxDbKG/B+QTy1cdQHeLEW47PU5hW5nhwCJD9lAANEMubU7QmB/GnGeqAjYnDteuK2ANiQMg87nB7ExEJHgsAFbl99ub/8rw9PS/6a3wT41+zPAvrYsR/q5o5kQ463+eL/pQ2ABa6jJc9HGxmq3xmztzcaGu79tR28530NaTRBd+BK0xISWtV3tTKNsjtAHJba89j2edZ9f5QCcjxfg1wl1JPW4Ya/yaQfrgPUivFrT6rQ/BHTdLarhqV36ePm22g8gpNyMVe1M6bBobjSwS7djRPji4I+sCSEGlCksCAunlBcoiGDcqQDAF9mpdHOQRhOlmDiEsXLH2x1I9xkZUJPE/gf4qwR3t3oXC1G62W2S3ASZlz9MBBkBwUMVwaAiha6EkKQBvC2UihtPCwp/YBDdIjO32JsA6WPXFzsAqqBrPk+2ocphUjtnHm78eDpRjLdYtfHrCfUEsO0cJmTBxv2KKRZBeB9hRYCIzsfF73boq9wfcYgbAkdmisiP5CJgFfSgz1aEkNvLo826AHAB6sVV+ifvNedflvLkOYG9aMv4RyRYcEkgZ9zrCSxHKFk1PzbIaU1HzDMqp0Nu6dWvhjsn7ALr5CRDVxKzM3LsKsCx2VWXu5/oQKi39tawMmLhBDqUT69sJFC+G5hY17nBLlWDwVQH4KCD4CwDWHEJeyjNef4oAut/OtytrI1awd7XV656JmXdTfRqvAFRialR0uGuyfz0c4nfR5dQu1ZCXAqVthimO6ncg2n8A668lJOJBmI8jANO9NzqNvLGaW357o+Xc8weyqsaktzPCKe475XneLuQ2JoOwnkdAtiVlhOkc0mEJJHMX0mgKtTyBiP3iddTqQ0lKSryXCNKspV4Pf5KGVfXRl1cOpM91H0gWh2UKtobEXKC/jiA56c37wNyZA5xlpvn7U7ObR3h6evrZHhwSAAAAAAj6/9obBgAAAACYCK6Kd1XA/S7rAAAAAElFTkSuQmCC"
}, function(e, t) {
	e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAY1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+aRQ2gAAAAIHRSTlMApzjdbyIPd96ZZlQqRNHDu4t9tRzuVTPMhmLvpWhMAdMfP38AAALbSURBVHja7dWLjtsgEAXQAewhGIzfdpK++P+v7CwhxHa3XlVJq5U6R1lnFBO4wrMEGGOMMcYYY4wxxhhjjDHGGGPsc0ApEbZK+kP4N743gbT1Zv1QAqoFIvV2S5tYVwLIeQYSP3zajy4kehdgngzBbQBUNOyiSirrkJTwjD5kV7ibddBLSwHaaROgrKpLW+nJVNVCAUBrivRcgDI8fEFIWhVUO51nVBdo6Y6iC9GzyjQFQEqI9AZPuISVb3A3B631MrWC6iU+HKVgpw50mUIw8IwmrHxd5VIaqymYBUCHsEAVQv1rgBfwYaWFBFWoxXnSdRsMnCejUBllAGCpkiU3IVlevgO6DaU+a1rIVPVZ1Zfpoo0q6cajBd6EMl1f3QPtHMoyKBLKtlK1VqiNFrA/Kuilarq+/L+gptnpFVcRqObzAtqg0u99MwZ49TkAqwCPc6Bq5yqb4W6e/spJmB/B+iBqVdZCdM5ffPlvQRmoCfUT2/v0r2F5e2eM/a9kJ4SREFnR2zFW4o3NlQPSw42LhbNw10FiNyMsTVyM8IGusYi2uc1RXKUxsTpJMuYKY1WkyCJeC0jGU52qk12PKDope1/Aod4gEBxi5kIC+tuyEG2rwb4bgLYwVUNj1wGKOLOFA84jRDimANAVvw2QJtsFQI/NCJFw3u4CgPRwoOhzmQLIk3ts/K6COP8+gO3yNIJG1LsAMMijAPHmeF+jGJr0zE6CuF0FMcE+AC0w+nsAcI3bBegPA9jUrsLLuCHDbuP3lfNuF8B5Sj/YFCAm2AYwRwGsgMTfNsT0hwHi/NsA3UDxB5EDgPVuHQA9woGmhugqbgGwkccBoPbXHOAxfzPmAJTgugrQdXDENde4vnf3JmzwOADY0zqA7VbdLO4jcgDsBoRDTjTGeDPmnuy73Hp214Sb5yab+PEQb6U2FJsRRSMG3yF8ZJQS4Y84+IgExhhjjDHGGGOMMcY+n5/DzjUoMfyHpwAAAABJRU5ErkJggg=="
}, function(e, t) {
	e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAaVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8G612AAAAInRSTlMAId3AQJmAZncQ8eDQoGBwu7HuzJBEUFWrMDT5iAjphE1BxTj6ZQAAAtFJREFUeNrt1GmPmzAQgOGxscE2901Itof//4/swJijTb8UVqqqzqMo641X+LVhA4wxxhhjjDHGGGOMMcYYY4wxxpD9mj2frbHwlwzOr758h0PlyQvHYxKMYPzOADQzzhoN93x7+uA5v01WBt8kahqJAAmPLwEoqeATAuwXv5MfsJsMINkvbwmA1rjgKYAmdbWdxnWlPxlh167jdSVZad22WlcSRGNDgBRGC4nbx5e+E1D7Ew0b6y3t9ucAaEYKmL1tvO9p9VsBrT+pYDP7TQLSCKG1EAYDXhMFvCbMW7cvp08MmH4zjwE+wIC+mdeA9bmwMOm+keZWgPYnMbzBlUxPJ9Av6zRmCUgaC8lyZJU0o2/vBMz+8BRAjk33chQJqqoE4fy0Brw0jioDxuNASwM3TH7XwTvfj8f3wHj6N0SJlBqQvhVgWx/UH/Cm9zMstAZyBPRtO5t7AeTj9fTIvV/F4Mfayu0EkD/IKqGvQdxAD/fYsSyHsP13yQkwxv4jHaxECUGptpkoHiyNgIhtUDx+HeQWrrFe0AVyCNJtFJVDFtMISOz2wSMM1HaZEq5RrgNkXQZEZc6GAAXC2XOAi4qwbkYFe0CZpXBN3DlARe6A5EVe7gGQqVNAUauQGcdFZs8B6QP/+pJa5QUsC9V0AeusSPeAwYtTQDTgQiEAqCAEqAy3AJekVuHlHxnEtO8yp62jKHOugCNApDRNAdBldg9YNuEEXGBTbBDLBVRNQYVSHQ2jiH5uAV2t1ODsFgB5ZkOA9YNSdQwXqBx31dnULilIpRGizUQqK88BLkJpsQdgQQgo03UKLlgO3rr1/mEEQF0A6mIKEKk4Aoqa7vYRAHlOAakIj8gfo9ud+8eyNg6FC3c7zJVRCKBf6XmnAJpwy4dDBKHwz7mfdxV3+/NOK0Z0FhQVntJTgM3Ufmz0GF6j4CorgDHGGGOMMcYYY4yxf8UPl+A21xu6V/cAAAAASUVORK5CYII="
}, function(e, t) {
	e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMAIneZvN1mBUMXpJ4L7jPMyKqXdRKzh109N4tVG5OOMSvSxK4muID5px5Hb2liV0zi1/A1/F3YAAADJklEQVR42u3V6ZaaMBgG4JeQsAqIBVzAddyd0ba5/3vrRxBkzumvMj3tj+85CiEgeSGLYIwxxhhjjDHGGGOMMcYYY4wxVvNWeb6Y4V/Zj7VxqPASxbQRNoyuZGkQbZkq3REYwor003cfLUe+mk0dU6JvL0Cbx6KDgba6c0BLebZsn85Som7cUdZfCVDqnln3xqlVG/SxBSiBJexMWf0ukMKKsmcANShDoHtWaFCveKZ1+nweA0RoK0skXVQ2AWKdYYCx7snxZJnHVykFULqjnm+gVHWeIm0CFCm+PoCdIbW9iPpBNP0Uid4siBwQL4pNAOVgiPPvusChspRKlDqpG45VYSdefxoakagDOFGGIe6/G4SpFBDaBmwlKE4U06iMvH6Akk6mJkBhf900lOg4Spkb2yJLVVwPiFildQBPOnUAIb9sHdi8FqIKT16SxOIZQMqsmQWZlJZOEgEdU33RBfiypVhe0JLPxS/R2utPQ88MuFSTWL8oDOQtzZ8RY4z1jEZtoUKj8tHwM7Nzm+PM7HzPs9AdG9UIQ3yEMxj3wIWR39EoiyZHaJkLVyCrQ/69qb4t0ZBXDFFuT2tTmOZNgLj7q75pH8T76YE4k/o1LWfwTlMQEcC46iOGeJf5j70J8NYEWAZvGxgrbVoKT7dXgHodt3OQbyGMIEgzDPBtt//Y+q8A1tidNI80Co9pXXFehJ8DyKIXYD12g9ugAOM5jtuqCyBCrKUpxfkluAOL4/owagO4y4lQ0aUXoFjhmg8NgPM2awNIx612ZdMneD/D3c2QrnsBbsH2/Argjh/Yj69DAyDYojQBHqedlCdz7+MCl131ONDZ6acuqL6/dwHudP3hVAwOgOA8Pbv1fmnNN9eE6txJCSwXNjW2KLoAK4+2k7AL8HbczzeP8WZwAIS6vuE62YPY1KJ/oLvG0Y+6MwK3DVDMaZNM2wCznQ+SfsMfE0kTwE2kmYOozbcXzCWItGmz2VUmAAl2q4Namh56qw8XqF2TGf7UZT2C4T+osPZhxCP4G6Ct2NCpam9KH+8fnmt+SMdud70PxhhjjDHGGGOMMcb+f78A50RZHXPVua0AAAAASUVORK5CYII="
}, function(e, t, n) {
	e.exports = n.p + "static/img/kf_cloud_00000.6eb12f7.jpg"
}, function(e, t, n) {
	e.exports = n.p + "static/img/kf_cloud_00001.7ddb6a7.jpg"
}, function(e, t, n) {
	e.exports = n.p + "static/img/kf_cloud_00002.0fd9613.jpg"
}, function(e, t, n) {
	e.exports = n.p + "static/img/kf_cloud_00003.fa866db.jpg"
}, function(e, t, n) {
	e.exports = n.p + "static/img/kf_cloud_00004.87be649.jpg"
}, function(e, t, n) {
	e.exports = n.p + "static/img/kf_cloud_00005.6f47587.jpg"
}, function(e, t, n) {
	e.exports = n.p + "static/img/kf_cloud_00006.b86ce20.jpg"
}, function(e, t, n) {
	e.exports = n.p + "static/img/kf_cloud_00007.739e988.jpg"
}, function(e, t, n) {
	e.exports = n.p + "static/img/kf_cloud_00008.41d7c9f.jpg"
}, function(e, t, n) {
	e.exports = n.p + "static/img/kf_cloud_00009.b80af52.jpg"
}, function(e, t, n) {
	e.exports = n.p + "static/img/kf_cloud_00010.4d60e20.jpg"
}, function(e, t, n) {
	e.exports = n.p + "static/img/kf_cloud_00011.88cedc8.jpg"
}, function(e, t, n) {
	e.exports = n.p + "static/img/kf_cloud_00012.25e4d52.jpg"
}, function(e, t, n) {
	e.exports = n.p + "static/img/wx_share_img.699cfd4.png"
}, function(e, t, n) {
	var i = n(0)(n(75), n(201), null, null);
	e.exports = i.exports
}, function(e, t, n) {
	var i = n(0)(n(76), n(199), null, null);
	e.exports = i.exports
}, function(e, t, n) {
	var i = n(0)(n(78), n(204), null, null);
	e.exports = i.exports
}, function(e, t, n) {
	var i = n(0)(n(79), n(195), null, null);
	e.exports = i.exports
}, function(e, t, n) {
	var i = n(0)(n(80), n(200), null, null);
	e.exports = i.exports
}, function(e, t, n) {
	var i = n(0)(n(81), n(207), null, null);
	e.exports = i.exports
}, function(e, t, n) {
	var i = n(0)(n(82), n(202), null, null);
	e.exports = i.exports
}, function(e, t, n) {
	var i = n(0)(n(83), n(198), null, null);
	e.exports = i.exports
}, function(e, t, n) {
	var i = n(0)(n(84), n(205), null, null);
	e.exports = i.exports
}, function(e, t, n) {
	var i = n(0)(n(85), n(197), null, null);
	e.exports = i.exports
}, function(e, t, n) {
	var i = n(0)(n(86), n(203), null, null);
	e.exports = i.exports
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement;
			return(e._self._c || t)("div", {
				staticClass: "c-audioSprite",
				staticStyle: {
					display: "none"
				}
			})
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "c-page"
			}, [n("div", {
				ref: "wrapper",
				staticClass: "c-page__wrapper"
			}, [e._t("default")], 2)])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("page", [n("div", {
				staticClass: "c-loading"
			}, [n("div", {
				staticClass: "c-loading__text"
			}), e._v(" "), n("div", {
				staticClass: "c-loading__orbits"
			}), e._v(" "), n("div", {
				staticClass: "c-loading__progress"
			}, [e._v(e._s(e.progress) + "%")]), e._v(" "), n("div", {
				staticClass: "c-loading__tips"
			}, [e._v("打开声音体验更佳")])])])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "c-endCover"
			}, [e._m(0), e._v(" "), n("div", {
				staticClass: "c-endCover__slogan"
			}), e._v(" "), n("div", {
				ref: "actions",
				staticClass: "c-endCover__actions"
			}, [n("span", {
				staticClass: "c-endCover__backBtn",
				on: {
					click: e.handleBack
				}
			}), e._v(" "), n("span", {
				staticClass: "c-endCover__registerBtn",
				on: {
					click: e.handleRegister
				}
			})])])
		},
		staticRenderFns: [function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "c-endCover__texts"
			}, [n("div", {
				staticClass: "c-endCover__text line1"
			}), e._v(" "), n("div", {
				staticClass: "c-endCover__text line2"
			}), e._v(" "), n("div", {
				staticClass: "c-endCover__text line3"
			}), e._v(" "), n("div", {
				staticClass: "c-endCover__text line4"
			})])
		}]
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement;
			return(e._self._c || t)("div", {
				staticClass: "c-meteor"
			})
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "c-clouds"
			}, [n("div", {
				ref: "container",
				staticClass: "c-clouds__spriteContainer"
			})])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement;
			return(e._self._c || t)("audio", {
				staticStyle: {
					display: "none"
				},
				attrs: {
					src: e.audioSrc,
					autoplay: "",
					loop: ""
				}
			})
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "c-earth"
			}, [n("div", {
				ref: "mountNode"
			})])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("page", [n("div", {
				class: {
					"c-show": !0, "low-position": e.isEnd
				}
			}, [n("transition", {
				attrs: {
					name: "fade"
				}
			}, [n("show-cover", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.isEnd,
					expression: "!isEnd"
				}],
				attrs: {
					"show-tips": e.showTips,
					"show-coord": e.showCoord,
					"coord-index": e.coordIndex
				}
			})], 1), e._v(" "), e.isEnd ? n("show-end-cover", {
				on: {
					back: e.handleBack
				}
			}) : e._e(), e._v(" "), n("show-earth", {
				ref: "earth"
			}), e._v(" "), n("show-clouds", {
				ref: "cloudSprite"
			}), e._v(" "), n("show-video-sprite", {
				ref: "videoSprite"
			}), e._v(" "), n("show-audio-sprite", {
				ref: "audioSprite",
				on: {
					spriteend: e.handleAudioSpriteEnd
				}
			}), e._v(" "), n("transition", {
				attrs: {
					name: "fade"
				}
			}, [n("show-actions", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.isEnd,
					expression: "!isEnd"
				}],
				attrs: {
					"show-press-button": !e.showTips,
					"show-xplan-button": e.showXplanButton && e.revealed
				},
				on: {
					hold: e.handleHold,
					release: e.handleRelease,
					knowmore: e.handleKnowMore
				}
			})], 1)], 1)])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "c-actions"
			}, [n("span", {
				class: {
					"c-actions__longPressText": !0, "is-active": e.showPressButton
				}
			}), e._v(" "), n("span", {
				class: {
					"c-actions__longPress": !0, "is-active": e.showPressButton
				},
				on: {
					touchstart: function(t) {
						t.preventDefault(), e.handleStart(t)
					},
					touchend: e.handleEnd,
					touchcancel: e.handleEnd
				}
			}), e._v(" "), n("span", {
				class: {
					"c-actions__xplan": !0, "is-active": e.showXplanButton
				},
				on: {
					click: e.handleClickXPlan
				}
			})])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "c-videoSprite"
			}, [n("video", {
				ref: "video",
				staticClass: "c-videoSprite__video",
				attrs: {
					src: e.videoSrc,
					"webkit-playsinline": "",
					playsinline: ""
				}
			})])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				attrs: {
					id: "app"
				}
			}, [n("loading", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.loading,
					expression: "loading"
				}],
				attrs: {
					progress: e.progress
				}
			}), e._v(" "), e.loading ? e._e() : n("show"), e._v(" "), e.loading ? e._e() : n("meteor"), e._v(" "), n("background-audio"), e._v(" "), n("footer", {
				staticStyle: {
					position: "fixed",
					"z-index": "100",
					bottom: "0",
					width: "100%",
					padding: "4px",
					color: "rgba(255,255,255,.7)",
					"text-align": "center"
				}
			}, [e._v("ygjack414@hotmail.com")])], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "c-earthCover"
			}, [n("div", {
				staticClass: "c-earthCover__cover"
			}), e._v(" "), n("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.showCoord,
					expression: "showCoord"
				}],
				staticClass: "c-earthCover__coord",
				style: {
					backgroundPosition: e.backgroundPosition
				}
			}), e._v(" "), n("transition", {
				attrs: {
					name: "fade"
				}
			}, [n("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.showTips,
					expression: "showTips"
				}],
				staticClass: "c-earthCover__tips"
			}, [n("div", {
				staticClass: "c-earthCover__hand"
			})])])], 1)
		},
		staticRenderFns: []
	}
}], [73]);
//# sourceMappingURL=app.9f4c4ff46d744d903154.js.map