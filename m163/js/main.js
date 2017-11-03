/**
 * @author CodeCook [t_fate@163.com]
 */
$(function() {
  var $win = $(window);
  var $body = $('body');
  var $video = $('#video');
  var $loading = $('.loading');
  var $container = $('.container');
  var video = $video.get(0);
  var $step = $('.step');
  var $step1 = $step.filter('.step1');
  var $step2 = $step.filter('.step2');
  var $step3 = $step.filter('.step3');
  var $step4 = $step.filter('.step4');
  var $step5 = $step.filter('.step5');
  var $pageEnd = $step.filter('.page-end');
  var $pageShare = $step.filter('.page-share');
  var bgmAudio;
  
  $win.on('scroll.page', function (e) {
    e.preventDefault();
  }).on('touchmove.page', function (e) {
    e.preventDefault();
  });

  function playVideo() {
    video.play();
  }
  function pauseVideo() {
    video.pause();
  }

  function parseUA() {
    var u = navigator.userAgent;
    var u2 = navigator.userAgent.toLowerCase();
    return { //移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
      weixin: u2.match(/MicroMessenger/i) == "micromessenger",
      ali: u.indexOf('AliApp') > -1,
    };
  }

  function RandomNumBoth(Min,Max){
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
  }

  /**
   * 随机数组
   * @param  {[type]} source [description]
   * @param  {[type]} 随机长度      [description]
   * @return {[type]}        [description]
   */
  function randomArr(source, l){
    var arr = [], len = l || 1;
    while(arr.length < len){
      var index = source[Math.floor(Math.random(source.length) * source.length)];

      if(arr.indexOf(index) == -1){
        arr.push(index);
      }
    }
    return arr;
  }

  //获得角度
  function getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
  };

  //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
  function getDirection(startx, starty, endx, endy) {
    var angx = endx - startx;
    var angy = endy - starty;
    var result = 0;

    //如果滑动距离太短
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
      return result;
    }

    var angle = getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
      result = 1;
    } else if (angle > 45 && angle < 135) {
      result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
      result = 3;
    } else if (angle >= -45 && angle <= 45) {
      result = 4;
    }

    return result;
  }

  var stepTarget = 'step1';

  /**
   * 时间节点
   */
  var timePoint = {
    step1: 26.667334,
    step2: 46.880411,
    step3: 106.801732,
    step4: 128.052738,
    step41: 130.386816, // 发大招时间
    step5: 147.422544,
    stopbgm: 157.46478,
  }

  var ua = parseUA();
  //跳到pc页面
//if (!ua.mobile) {
//  location.href = 'pc.html';
//  return false;
//}
  /**
   * 视频播放流程控制
   */
  $video.on('canplay', function() {
    // alert('canplay');
  }).on('timeupdate', function() {
    var vtime = video.currentTime;
    console.log('当前播放进度：' + video.currentTime);
    if (vtime >= timePoint.step1 && stepTarget == 'step1') {
      pauseVideo();
      $step1.trigger('onshow');
    } else if (vtime >= timePoint.step2 && stepTarget == 'step2') {
      pauseVideo();
      $step2.trigger('onshow');
    } else if (vtime >= timePoint.step3 && stepTarget == 'step3') {
      pauseVideo();
      $step3.trigger('onshow');
    } else if (vtime >= timePoint.step4 && stepTarget == 'step4') {
      pauseVideo();
      $step4.trigger('onshow');
    } else if (vtime >= timePoint.step5 && stepTarget == 'step5') {
      pauseVideo();
      $step5.trigger('onshow');
    } else if (vtime >= timePoint.stopbgm && stepTarget == 'stopbgm') {
      if (bgmAudio) {
        bgmAudio.pause();
      }
      stepTarget = 'over';
    }
  }).on('ended', function() {
    $pageEnd.fadeIn();
  });

  /**
   * step1
   */
  !function(){
    var step1 = $step1.get(0);
    var startx, starty;
    var $hand = $step1.find('.hand');

    var showIn = false;

    var tl = new TimelineMax({
      paused: true,
      repeat: -1,
    });
    tl.to($hand, 0, {
      delay: 0.5,
      onComplete: function() {
        $hand.addClass('touch');
      },
    })
    tl.set($hand.find('.q'), { opacity: 1 });
    tl.to($hand.find('.q'), 0.5, {
      scale: 1.1,
      alpha: 0,
      delay: 0.1,
    });
    tl.set($hand.find('.l'), { opacity: 1 });
    tl.to($hand, 1, { x: -150 });
    tl.to($hand.find('.l'), 1, {
      alpha: 0,
      onComplete: function () {
        $hand.removeClass('touch');
      },
    }, '-=1');

    var inTl = new TimelineMax({ paused: true, onComplete: function() {
      tl.play();
    }});

    inTl.from($step1.find('.txt'), 0.4, { y: '+=200', alpha: 0 });
    inTl.from($step1.find('.hand'), 0.4, { alpha: 0 });
    
    $step1.on('onshow', function() {
      if (!showIn) {
        inTl.play();
        $step1.show();
        showIn = true;
      }
    }).on('onhide', function() {
      tl.pause();
      $step1.hide();
      showIn = false;
    });
    
    //手指接触屏幕
    step1.addEventListener("touchstart", function(e) {
      startx = e.touches[0].pageX;
      starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
    step1.addEventListener("touchend", function(e) {
      var endx, endy;
      endx = e.changedTouches[0].pageX;
      endy = e.changedTouches[0].pageY;
      var direction = getDirection(startx, starty, endx, endy);
      if (direction == 3) {
        stepTarget = 'step2';
        $step1.trigger('onhide');
        playVideo();
      }
    }, false);
  }();

  /**
   * step2
   */
  !function(){
    var step2 = $step2.get(0);

    var showIn = false;

    var pushTl = new TimelineMax({ paused: true });

    pushTl.to($step2.find('.clm'), 1, { y: 67 })
    pushTl.to($step2.find('.i'), 1, { x: 4, y: 105 }, '-=1');

    var tl = new TimelineMax({ 
      paused: true,
      repeat: -1, 
    });

    tl.from($step2.find('.line i'), 1, { height: '0%' });
    tl.to($step2.find('.hand'), 1, { y: '+=42' }, '-=1');

    $step2.on('onshow', function() {
      if (!showIn) {
        $step2.show();
        tl.play();
        showIn = true;
      }
    }).on('onhide', function() {
      $step2.hide();
      tl.pause();
      showIn = false;
    });

    var startx, starty;
    //手指接触屏幕
    step2.addEventListener("touchstart", function(e) {
      startx = e.touches[0].pageX;
      starty = e.touches[0].pageY;
      $step2.find('.tip').hide();
    }, false);

    step2.addEventListener('touchmove', function(e) {
      var moveY = e.touches[0].pageY;
      pushTl.progress( (moveY - starty) / 100 );
    });
    //手指离开屏幕
    step2.addEventListener("touchend", function(e) {
      var endx, endy;
      endx = e.changedTouches[0].pageX;
      endy = e.changedTouches[0].pageY;

      if (endy - starty < 100) {
        $step2.find('.tip').show();
        pushTl.progress(0);
      }else {
        var direction = getDirection(startx, starty, endx, endy);
        if (direction == 2) {
          $step2.find('.a').addClass('acricle')
          setTimeout(function() {
            stepTarget = 'step3';
            $step2.trigger('onhide');
            playVideo();
          }, 2000)
        }
      }
    }, false);
  }();

  /**
   * step3
   */
  !function(){
    var $hand = $step3.find('.hand');
    var $electric = $step3.find('.electric');
    var $progress = $('.progress i');
    var sdAudio = $('#sd-audio').get(0);
    var step = 5;
    var pwidth = 50;
    
    var timer, handTimer; 
    var showIn = false;

    var tl = new TimelineMax({ paused: true });

    tl.from($step3.find('.txt'), 0.3, { y: '+=100', alpha: 0.5 });
    tl.from($step3.find('.gourd'), 0.3, { x: '-=200', alpha: 0 });
    tl.from($step3.find('.dl'), 0.3, { x: '+=200', alpha: 0 }, '-=0.3');
    tl.from($step3.find('.progress'), 0.3, { alpha: 0 });
    tl.from($step3.find('.electric'), 0.3, { alpha: 0 });
    tl.from($step3.find('.hand'), 0.3, { alpha: 0 }, '-=0.3');

    $step3.bind('onshow', function() {
      if (!showIn) {
        $step3.show();
        tl.play();
        if (!timer) {
          timer = setInterval(function() {
            $hand.toggleClass('right left');
          }, 2000);
        }

        showIn = true;
      }
    });
    

    var txtArray = [
      '抱土豪大腿',
      '加油你是<br />最胖的',
      '你可以的',
      '干巴爹',
    ];

    function showHand() {
      if (handTimer) {
        clearTimeout(handTimer);
      }
      handTimer = setTimeout(function() {
        $hand.show();
      }, 3000);
    }

    function createHart($target){
      $hand.hide();
      var txt = randomArr(txtArray, 1)[0];
      var $hart = $('<div class="hart"><i></i>' + txt + '</div>');

      var deg = RandomNumBoth(-50, 50);
      var left = RandomNumBoth(0, 50);
      var hx = RandomNumBoth(-10, 10);

      $hart.find('i').css({
        'left': left + 'px',
        'webkitTransform': 'rotate('+ deg +'deg)',
        'transform': 'rotate('+ deg +'deg)'
      });
      $hart.css({
        'webkitTransform': 'translateX('+ hx +'px)',
        'transform': 'translateX('+ hx +'px)',
      })

      $target.append($hart);

      TweenLite.to($hart, 1, {
        y: '-=150',
        alpha: 0.3,
        ease: Power1.easeInOut,
        onComplete: function() {
          $hart.remove();
        },
       });
    }

    function renderProgress(){
      $progress.css({
        width: pwidth + '%'
      });

      if (5 > pwidth || pwidth > 95) {
        if (timer) {
          clearTimeout(timer);
        }
        stepTarget = 'step4';
        $step3.hide();
        sdAudio.pause();
        tl.pause();
        showIn = false;
        playVideo();
      }
    }

    $electric.on('webkitAnimationEnd', function() {
      $electric.removeClass('animate');
      sdAudio.currentTime = 0;
      sdAudio.pause();
    });

    $step3.on('touchstart', '.gourd', function(){
      $(this).addClass('touch');
      $electric.addClass('animate');
      sdAudio.play();
    }).on('touchend', '.gourd', function (){
      var $this = $(this);

      $this.removeClass('touch');
      createHart($this);

      pwidth -= step;

      renderProgress();
      showHand();
    }).on('touchstart', '.dl', function(){
      $(this).addClass('touch');
      $electric.addClass('animate');
      sdAudio.play();
    }).on('touchend', '.dl', function(){
      var $this = $(this);

      $this.removeClass('touch');
      createHart($this);

      pwidth += step;

      renderProgress();
      showHand();
    });
  }();

  /**
   * step4
   */
  !function(){
    var $icon = $step4.find('.icon');
    var showIn = false;

    var tl = new TimelineMax({ paused: true });
    tl.from($step4.find('.txt'), 0.5, { y: '+=200', alpha: 0 });
    tl.from($step4.find('.hand'), 0.2, { alpha: 0, scale: 1.4 }, '-=0.3');
    tl.from($step4.find('.icon'), 0.5, { x: '-=100', alpha: 0 });

    $step4.on('onshow', function() {
      if (!showIn) {
        tl.play();
        $step4.show();
      }
    });

    $step4.on('touchstart', function (){
      stepTarget = 'step5';
      playVideo();
      // el animate
      $icon.addClass('animate');
      TweenMax.to($icon.find('em'), timePoint.step41 - timePoint.step4, { height: '100%', onComplete: function() {
        $step4.hide();
        tl.pause();
      }});
    }).on('touchend', function() {
      $icon.removeClass('animate');
      if (video.currentTime < timePoint.step41) {
        stepTarget = 'step4';
        $step4.show();
        pauseVideo();
        video.currentTime = timePoint.step4 + 0.2;
        TweenMax.to($icon.find('em'), 0.2, { height: '0%' });
      }
    });
  }();

  /**
   * step5
   */
  !function(){
    var choiseMuisc  = -1;
    var showIn = false;
    var $mlist = $('.mlist a');
    var timer;
    var tindex = 0;
    var tl = new TimelineMax({ paused: true, onComplete: function() {
      timer = setInterval(function() {
        if (tindex >= $mlist.length) {
          tindex = 0;
        }
        $mlist.removeClass('tip').eq(tindex).addClass('tip');
        tindex++;
      }, 500);

      $mlist.eq(0).addClass('tip');
    }});
    tl.from($step5.find('.c'), 0.3, { scale: 0 });
    tl.from($step5.find('.o'), 0.3, { scale: 0, y: '+=200'}, '-=0.2');
    tl.from($step5.find('.p'), 0.3, { scale: 0, x: '-=200', y: '+=400' }, '-=0.2');
    tl.from($step5.find('.w'), 0.3, { scale: 0, y: '+=200'}, '-=0.2');
    tl.from($step5.find('.q'), 0.3, { scale: 0, y: '-=100' }, '-=0.2');

    $step5.on('onshow', function() {
      if (!showIn) {
        tl.play();
        $step5.show();
      }
    });

    $step5.on('click', '.mlist a', function () {
      var $this = $(this);

      if (timer) {
        clearInterval(timer);
      }

      if (choiseMuisc !== -1) {
        return false;
      }

      choiseMuisc = $this.index();
      $mlist.removeClass('tip');
      $this.addClass('tip active');

      bgmAudio = document.createElement('audio');
      bgmAudio.oncanplay = function() {
        stepTarget = 'stopbgm';
        setTimeout(function() {
          $step5.hide();
        }, 200);

        if (timer) {
          clearInterval(timer);
        }
        bgmAudio.play();
        playVideo();
      };
      bgmAudio.id = 'bgm';
      bgmAudio.src = 'source/'+ $this.data('name') +'.mp3';
      $body.append(bgmAudio);
      document.getElementById('bgm').play();
    });
  }();

  /**
   * page-end
   */
  !function() {

    if (!ua.weixin) {
      $pageEnd.find('.btns').addClass('notweixin');
      $pageEnd.find('.btn2').remove();
    }

    $pageEnd.on('click', '.btn1', function() { // 再玩一次
      window.location.reload();
    }).on('click', '.btn2', function() { // 分享
      $pageShare.show();
    }).on('click', '.btn3', function() { // go play
      location.href = "https://adl.netease.com/d/g/qnm/c/gw";
    });
  }();

  /**
   * page-share
   */
  !function() {
    $pageShare.on('click', function() {
      $(this).hide();
    });
  }();


  /**
   * image pre loading
   */
  !function() {
    $loading.on('click', '.btn', function() {
      $loading.hide();
      playVideo();
    });

    function progress() {
    }

    function complete() {
      $loading.find('.hl').hide();
      $loading.find('.boy').show().addClass('animate');
      setTimeout(function(){
        $loading.find('.btn').addClass('animate').on('webkitTransitionEnd', function() {
          $(this).addClass('aend');
        });
      }, 500);
    }

    $.getJSON('js/manifest.json').done(function(data) {
      var imgTotal = data.length;
      var loaded = 0;
      var promiseArr = [];

      function loadImg() {
        var img = new Image();
        img.onload = function () {
          ++loaded;
          progress();
          if (loaded < imgTotal) {
            loadImg();
          } else {
            complete();
          }
        }
        img.src = data[loaded].src;
      }

      loadImg();
    });

    //-- dev param 
    // function dev(){
    //   video.currentTime = timePoint.step3 - 2.1;
    //   stepTarget = 'step3';
    //   $loading.hide();
    //   playVideo();
    // }
    // $body.on('click', 'button.start', function () {
    //   dev();
    // }).on('click', 'button.end', function () {
    //   pauseVideo();
    // });
    // dev();
    // complete();
  }();
});
