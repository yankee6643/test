(function(jQuery){
	jQuery(function(){
		// jQuery('.header_wrap .menu_wrap .menu_content .mcategory li.ftc').on({
		//     mouseenter : function(){
		//         jQuery(this).find('.all_cate_wrap').stop().show(400);
		//     },mouseleave : function(){
		//         jQuery(this).find('.all_cate_wrap').stop().hide(200);
		//     }
		// });

	
		
		jQuery('.input-keyword').attr('placeholder','스킨 디자인은 역시 메이크샵!');

		jQuery('.cate_03').on({
			mouseenter : function(){
				jQuery(this).find('.logm_sub').show();
			},mouseleave : function(){
				jQuery(this).find('.logm_sub').hide();
			}
		});

		jQuery('.lnb > li >a').on({
			mouseenter : function(){
				var _curImg = jQuery(this).find('img').attr('src');
				_curImg = _curImg.replace('_off','_on');
				jQuery(this).find('img').attr('src',_curImg);
                
			},mouseleave : function(){
				var _curImg = jQuery(this).find('img').attr('src');
				_curImg = _curImg.replace('_on','_off');
				jQuery(this).find('img').attr('src',_curImg);
			}
		});

		jQuery('.id').attr('placeholder' , '아이디 ID').css('text-indent','15px');
		jQuery('.pw').attr('placeholder' , '비밀번호 PW').css('text-indent','15px');
		jQuery('.nmz').attr('placeholder' , '이름 NAME').css('text-indent','15px');
		jQuery('.nm').attr('placeholder' ,  '이름 NAME').css('text-indent','15px');
		jQuery('.em').attr('placeholder' , '이메일 E-MAIL').css('text-indent','15px');
		jQuery('.noz').attr('placeholder' , '주문번호 ORDER NO.').css('text-indent','15px');
		jQuery('.mo').attr('placeholder' , '휴대폰번호 MOBILE NO').css('text-indent','15px');
	});





var s = { // selector
    categoryOpen : jQuery('#gnb .menu1 a'),
    gnbSub : jQuery('#gnb .gnb_sub'),
    gnbSubMenu : jQuery('#gnb .gnb_sub li'),
    gnbMenu : jQuery('#gnb .gnb_menu'),
    current : 'current',
    time : 200                 
}

s.categoryOpen.hover(function(){
    s.gnbSub.show();
    s.categoryOpen.addClass('on');
    sizeAction(false, 'reset');
}, function(){
    s.gnbSub.hide();
    s.categoryOpen.removeClass('on');
    s.gnbSub.hover(function(){
        s.gnbSub.show();
        s.categoryOpen.addClass('on');
    }, function(){
        s.gnbSub.hide();
        s.categoryOpen.removeClass('on');
    });
});

s.gnbSubMenu.hover(function(){
    var jQuerytarget = jQuery(this);
    jQuery(s.current).removeClass(s.current);
    jQuerytarget.addClass(s.current);
    var jQuerytarget = jQuery(this);
    jQuerytarget.removeClass(s.current);
    sizeAction(false);
   
});

// 레이어 가로 사이즈
function sizeAction(option, type){
    var snbSize = s.gnbMenu.data('min');
    if(option){
        if(type === 'recommend'){
            snbSize = s.gnbMenu.data('max');
        }else{
            snbSize = s.gnbMenu.data('min') + s.gnbMenu.data('default');
        }
    }

    if(type === 'reset'){
        s.gnbSub.css({width : snbSize});
    }else{
        s.gnbSub.stop().animate({width : snbSize}, s.time);    
    }
}

var gnbTimer = null;
jQuery(window).on('resize', function(){
    clearTimeout(gnbTimer);
    gnbTimer = setTimeout(resize_gnb, 300);
});
function resize_gnb(){
    var winHeight =  jQuery(window).height();
    var defaultHeight = (s.gnbMenu.children('li').length*38) + 75; // GNB의 메뉴 갯수 * height 값 + 21(메뉴 첫번째 마지막,공백) + 54(기본 GNB의 height)
    if(winHeight < defaultHeight){
        s.gnbMenu.addClass('size_over');
        s.gnbMenu.height(winHeight/1.2);
    }else{
        s.gnbMenu.removeClass('size_over');
        s.gnbMenu.height('auto');
    }
}
resize_gnb();











jQuery(window).scroll(function() {
	var scroll = jQuery(window).scrollTop();
	//console.log(scroll);
	if (scroll >= 20) {
		//console.log('a');
		jQuery(".header_wrap .menu_wrap").addClass("fixed");
	} else {
		//console.log('a');
		jQuery(".header_wrap .menu_wrap").removeClass("fixed");
	}
});










jQuery('#go_top').click(function(){
             jQuery('html, body').animate({scrollTop:0}, '1000');
             return false;
    });

    jQuery('#go_bottom').click(function(){
             jQuery('html, body').animate({scrollTop:jQuery(document).height()}, '1000');
             return false;
    });


    /*var H = jQuery("#view_menu").height();
    jQuery("ul.depth1 >li > ul.depth2").height(H);
    */

    jQuery('.nv_wrap span').last().addClass('actv');




    /*최상단 이벤트배너 제어*/
    jQuery("#xbtn").click(function () {
        setCookie("showCookies", "N", 1); //1일동안 유지되는 쿠키 생성
        jQuery('#topBnr').hide(); // 레이어 감춤
    });


    if (getCookie("showCookies") != "N") {
        jQuery("#topBnr").show(); // showCookies 라는 이름의 쿠키 값이 "N" 이 아니면 레이어 보여줌
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires + '; Path=/;';
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }

    function delete_cookie(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }


    


    jQuery("ul.depth1 >li").mouseenter(function () {
        jQuery(this).children("a").addClass("on");
        jQuery(this).children("ul.depth2").animate({"width":"174px"},300);
    }).mouseleave(function () {
        jQuery(this).children("a").removeClass("on");
        jQuery(this).children("ul.depth2").animate({"width":"0px"},0);
    });


    jQuery("ul.depth1 >li > ul.depth2 li").mouseenter(function () {
        jQuery(this).children("a").addClass("on");
        jQuery(this).children("ul.depth2").show();
    }).mouseleave(function () {
        jQuery(this).children("a").removeClass("on");
        jQuery(this).children("ul.depth2").hide();
    });
})(jQuery);