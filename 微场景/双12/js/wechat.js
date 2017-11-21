$(function() {
    window.share = {
        imgUrl : window.location.origin + "/img/share.jpg",
        link : "http://t.cn/RMmHYxy",
        title : "1212淘宝亲亲节",
        desc : "1212淘宝亲亲节",
        suc : function(){
            window.location.href=window.location.origin;
        }
    };
	
	var sharedesc = [
            '亲，你的1212到了，请查收',
            '1212来了！提前来转转',
            '亲，1212邀你一起转转转转转转',
            '亲亲亲亲亲，这次1212厉害了',
            '1212，厉害了亲亲亲亲亲合力'
        ];

    window.share.desc = sharedesc[Math.floor(Math.random()*5)];

		
	
    shareConfig();
});

function shareConfig(){
    //alert(JSON.stringify(window.share));
    $.getJSON('a.php?act=jsticket',
        { 'strURL' :  location.href },
        function(data)
        {            
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appid, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature,// 必填，签名，见附录1
                jsApiList: [
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'translateVoice',
                    'startRecord',
                    'stopRecord',
                    'onVoiceRecordEnd',
                    'playVoice',
                    'onVoicePlayEnd',
                    'pauseVoice',
                    'stopVoice',
                    'uploadVoice',
                    'downloadVoice',
                    'chooseImage',
                    'uploadImage',
                    'downloadImage'
                ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });

            wx.ready(function () {
                wxcheck();
                function wxcheck(){
                    wx.checkJsApi({
                        jsApiList: [
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage'
                        ],
                        success: function (res) {
                            //alert(JSON.stringify(res));
                        }
                    });
                }

                wx.onMenuShareTimeline({
                    imgUrl : window.share.imgUrl,
                    link : window.share.link,
                    title : window.share.desc,
                    desc : window.share.desc,
                    success: function () {
						_hmt.push(['_trackEvent', 'onclick', '分享朋友圈']);
                        // 用户确认分享后执行的回调函数
                        //    if(window.share.suc) window.share.suc();
						WeixinJSBridge.call('closeWindow');
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.onMenuShareAppMessage({
                    imgUrl : window.share.imgUrl,
                    link : window.share.link,
                    title : window.share.title,
                    desc : window.share.desc,
                    trigger: function (res) {
                        //	alert('用户点击分享到朋友圈');
                    },
                    success: function (res) {
						_hmt.push(['_trackEvent', 'onclick', '分享好友']);
                        //	alert('已分享');
                        //    if(window.share.suc) window.share.suc();
						WeixinJSBridge.call('closeWindow');  
                        
                    },
                    cancel: function (res) {
                        //	alert('已取消');
                    },
                    fail: function (res) {
                        //	alert(JSON.stringify(res));
                    }
                });





            });
        });


}
