// html엘리먼트 ie7,8인식;
document.createElement('header');
document.createElement('nav');
document.createElement('article');
document.createElement('section');
document.createElement('aside');
document.createElement('footer');

// ie css-hack
var ua = navigator.userAgent,
 doc = document.documentElement;
if ((ua.match(/MSIE 10.0/i))) {
   doc.className = doc.className + " ie10";
} else if((ua.match(/MSIE 9.0/i))) {
   doc.className = doc.className + " ie9";
} else if((ua.match(/MSIE 8.0/i))) {
   doc.className = doc.className + " ie8";
} else if((ua.match(/MSIE 7.0/i))) {
   doc.className = doc.className + " ie7";
} else if((ua.match(/rv:11.0/i))){
   doc.className = doc.className + " ie11";
}
$(document).ready(function(){
   //select

//    $( ".sel_type" ).selectmenu();

   // gnb
   // $(function(){
   // 	var $snb       = $('nav > ul > li'),
   // 		$snbLevel2 = $('nav > ul > li .snb_level2'),
   // 		$menu      = $('nav .stiky_no');

   // 	$snb.on('mouseenter mouseleave', function (e) {
   // 		var $this      = $(this),
   // 			$snbLevel2 = $this.find('.snb_level2'),
   // 			$children  = $this.children();
   // 		if (e.type === 'mouseenter') {
   // 			$snbLevel2.addClass('ative');
   // 			$children.addClass('on');
   // 		} else {
   // 			$snbLevel2.removeClass('ative');
   // 			$children.removeClass('on');
   // 		}
   // 	});

   // 	$menu.find('a').first().on('keydown', function (e) {
   // 		if (e.keyCode == 9 && e.shiftKey) {
   // 			setTimeout(function () {
   // 				$snb.children().removeClass('on');
   // 				$snbLevel2.removeClass('ative');
   // 			}, 1);
   // 		}
   // 	});
   // 	$menu.find('a').last().on('keydown', function (e) {
   // 		if (e.keyCode == 9 && !e.shiftKey) {
   // 			setTimeout(function () {
   // 				$snb.children().removeClass('on');
   // 				$snbLevel2.removeClass('ative');
   // 			}, 1);
   // 		}
   // 	});
   // 	$snb.find('> a').on('focus',function(){
   // 		var $this = $(this);
   // 		$snb.children().removeClass('on');
   // 		$snbLevel2.removeClass('ative');
   // 		$this.parent().find('.snb_level2').addClass('ative');
   // 		$this.addClass('on');
   // 	});

   // 	// 2020-09 메인개선 : 언어 선택
   // 	$('.language_sel').on('click', function () {
   // 		$(this).css('height', '68px');
   // 		$(this).addClass('on');
   // 	});
   // 	$('.language_sel').on('mouseleave', function () {
   // 		$(this).css('height', '34px');
   // 		$(this).removeClass('on');
   // 	});

   // 	//2020-09 메인개선 : 카테고리 메인
   // 	$('#main .ctgr_wrap').css('display', 'block');

   // });

   $(".sub_depth > ul > li:nth-child(2)").addClass('nav02');
   $(".sub_depth > ul > li:nth-child(3)").addClass('nav03');
   $(".sub_depth > ul > li:nth-child(4)").addClass('nav04');
   // $(".sub_depth > ul > li:nth-child(5)").addClass('nav05');// 2020-09 메인개선 nth 변경
   $(".sub_depth > ul > li:nth-child(5)").addClass('cl');// 2020-09 메인개선 nth 변경
   $(".sub_depth > ul > li:nth-child(n+5)").addClass('bm');// 2020-09 메인개선 nth 변경

   // brand open // 2020-12-28 메인개선 수정
   $(".nav_wrap .brand > a, .brand_open .brand_close button").click(function(){
	   //$(".btn_brd").toggleClass('active');
	   $(".brand_open").slideToggle("fast");
	   $('.top_sh_keyword').css('display', 'none');// 2020-09 메인개선
	   if ($(".btn_brd").hasClass('active')) {
		   $(".btn_brd").removeClass('active');
	   } else {
		   $(".btn_brd").addClass('active');
	   }
   });
   // 2020-09 메인개선
   $('.brand_open').on('mouseleave', function () {
	   $(this).slideUp();
	   $(".btn_brd").removeClass('active');// 2020-12-28 메인개선 수정
   });

   // brand tab
   $('.brand_tab a').click(function () {
	   $('.brand_tab a.active').removeClass('active')
	   $(this).addClass('active')
	   $('.brand_list_wrap').hide()
	   var contentid = $(this).parent().index()+1;
	   $('.brand_list_wrap.brand0' + contentid).show();
   });
   /*$('.brand_tab .b_open01').click(function () {
	   $('.brand_tab .b_open02').removeClass('active');
	   $('.brand_tab .b_open01').addClass('active');
	   $('.brand_list_wrap.brand02').hide();
	   $('.brand_list_wrap.brand01').show()
   });
   $('.brand_tab .b_open02').click(function () {
	   $('.brand_tab .b_open01').removeClass('active');
	   $('.brand_tab .b_open02').addClass('active');
	   $('.brand_list_wrap.brand01').hide();
	   $('.brand_list_wrap.brand02').show()
   });

   $('.brand_tab a').click(function () {
	   $('.brand_tab .active').removeClass('active')
	   $(this).addClass('active')
	   $('.brand_list_wrap').hide()
	   var contentid = $(this).attr('title')
	   $('#' + contentid).show()
   });
   */

   // 2020-09 메인개선 : search open
   // gnb stiky search
   $('.stiky_sh .sh_open').click(function () {
	   $(this).parents('.top_sh').next('.sh_box').find('.top_sh_keyword').css('display', 'block');
	   $(this).parents('.top_sh').next('.sh_box').css('display', 'block');
	   $('.brand_open').slideUp();
	   $(".btn_brd").removeClass('active');// 2020-12-28 메인개선 수정
   });
   $('.stiky_sh .sh_close').click(function () {
	   $(this).parents('.sh_box').css('display', 'none');
   });
   // gnb search
   $('.sh_open').click(function () {
	   $(this).parents('.top_sh').find('.top_sh_keyword').css('display', 'block');
	   $('.brand_open').slideUp();
	   $(".btn_brd").removeClass('active');// 2020-12-28 메인개선 수정
   });
   $('.sh_close').click(function () {
	   $(this).parents('.top_sh_keyword').css('display', 'none');
   });
   $('.top_sh_keyword').on('mouseleave', function () {
	   $('.top_sh_keyword').css('display', 'none');
   });

   // wing banner
   if (jQuery('.nav_wrap').offset()) { // make sure "#sticky" element exists
	   var stickyTop = jQuery('.nav_wrap').offset().top; // returns number

	   // 스크롤 시 카테고리
	   var $cate        = $('.btn_ctgr'),
		   $cateOpen    = $('.ctgr_wrap'),
		   $cateNavOpen = $('.ctgr_wrap > li:first > a');

	   $cate.on('mouseenter mouseleave', function (e) {//2020-09 메인개선
		   if (e.type === 'mouseenter') {
			   $cateOpen.addClass('active');
			   $cateOpen.show();
			   if ($('section').hasClass("main_container")) {
				   if ($('.nav_wrap').hasClass("nav_stiky")) {
					   $cateNavOpen.addClass('on');
					   $('.snb_level2').addClass('ative');
					   $('.top_sh_keyword').css('display', 'none');
					   $('.brand_open').slideUp();
					   $(".btn_brd").removeClass('active');// 2020-12-28 메인개선 수정
				   } else {
					   $cateNavOpen.addClass('');
					   $('.top_sh_keyword').css('display', 'none');
					   $('.brand_open').slideUp();
					   $(".btn_brd").removeClass('active');// 2020-12-28 메인개선 수정
				   }
			   } else {
				   $cateNavOpen.addClass('on');
				   $('.snb_level2').addClass('ative');
				   $('.top_sh_keyword').css('display', 'none');
				   $('.brand_open').slideUp();
				   $(".btn_brd").removeClass('active');// 2020-12-28 메인개선 수정
			   }
		   } else {
			   $cateOpen.removeClass('active');
			   $cateNavOpen.removeClass('on');
			   $('.snb_level2').removeClass('ative');
		   }
	   });
	   $cateOpen.on('mouseenter mouseleave', function (e) {
		   if (e.type === 'mouseenter') {
			   $cateOpen.addClass('active');
			   if ($('section').hasClass("main_container")) {
				   if ($('.nav_wrap').hasClass("nav_stiky")) {
					   $cateNavOpen.addClass('on');
					   $('.snb_level2').addClass('ative');
				   } else {
					   $cateNavOpen.addClass('');
				   }
			   } else {
				   $cateNavOpen.addClass('on');
				   $('.snb_level2').addClass('ative');
			   }
		   } else {
			   $cateOpen.removeClass('active');
			   $cateNavOpen.removeClass('on');
			   $('.snb_level2').removeClass('ative');
		   }
	   });

	   jQuery(window).scroll(function(){ // scroll event
		   var windowTop = jQuery(window).scrollTop();
		   if (stickyTop < windowTop){
			   jQuery('.right_wing').addClass('nav_sticky');//2020-09 메인개선
			   jQuery('.nav_wrap').addClass('nav_stiky');
			   $('.right_wing .rnav_top').css('display', 'block');
			   $('.ctgr_wrap').css('display', 'none'); //2020-09 메인개선
			   $('.main_container').addClass('active'); //2020-09 메인개선 : 20201204 메인 개선에 따른 서브페이지 수정
		   } else {
			   jQuery('.right_wing').removeClass('nav_sticky');//2020-09 메인개선
			   jQuery('.nav_wrap').removeClass('nav_stiky');
			   $('.right_wing .rnav_top').css('display', 'none');
			   $('#main .ctgr_wrap').css('display', 'block'); //2020-09 메인개선
			   $('.main_container').removeClass('active'); //2020-09 메인개선 : 20201204 메인 개선에 따른 서브페이지 수정
		   }
	   });
   }

   // left wing banner
   $(".wing_open, .wing_close").on("click" , function(){
	   $(".wing_bn_open").stop(true).animate({
		   width:"toggle"
	   },350);
	   return false;
   });

   // right wing banner : 2020-09 메인개선
   // right wing - effect & motion
   var	$rWing = $('.right_wing'),
	   $rWingNav = $('.right_wing_nav li'),
	   $rArea = $('.right_area'),
	   $rCont = $('.right_area .right_container'),
	   $rTopBtn = $('.right_wing .rnav_top');
	   // $rWingClose = $('.right_wing .right_wing_close')

   $('.header_wrap, .main_container, .container, .footer_wrap, .right_wing_close').on('click', function() {
	   $rWing.animate({right:'20px'},280);
	   $rTopBtn.animate({right:'20px'},280);
	   $rArea.animate({right:'-250px'},280);
	   $rWingNav.removeClass('active');
   });

   $rWingNav.on({
	   mouseenter: function() {
		   $(this).addClass("on");
	   },
	   mouseleave: function() {
		   $(this).removeClass("on");
	   }
   })

   $rWingNav.on('click', function() {
	   $rWing.animate({right:'270px'},280);
	   $rTopBtn.animate({right:'270px'},280);
	   $rArea.animate({right:'0'},280);
	   // if ($(this).is('.active')) {
	   // 	$rWingBtn.trigger('click');
	   // 	$(this).removeClass('active');
	   // 	return;
	   // }
	   $(this).addClass('active').siblings('li').removeClass('active');
	   $rCont.hide();
	   var contentid = $(this).children('a').attr('href');
	   $(contentid).show();
   });

   $rTopBtn.on('click', function() {
	   $('html, body').animate({scrollTop : 0},300);
   });

   /* 2020-09 메인개선 : right wing - topbanner 있을 경우 위치 삭제 */
   // right wing - topbanner 있을 경우 위치
   // var topBnBox = $('body').has('.top_banner_area').find('.right_area').addClass('top2');
   // if (jQuery('.top_banner_area').offset()) { // make sure "#sticky" element exists
   // 	var stickyRTop = jQuery('.top_banner_area').offset().top; // returns number

   // 	jQuery(window).scroll(function(){ // scroll event
   // 		var windowRTop = jQuery(window).scrollTop();
   // 		if (stickyRTop < windowRTop){
   // 			jQuery('.right_area').removeClass('top2');
   // 		} else {
   // 			jQuery('.right_area').addClass('top2');
   // 		}
   // 	});
   // }

   // time sale
   /* var slidertime =   $('.time_sale_slider').bxSlider({
	   controls:true, autoControls:false, pager:false, auto:false, infiniteLoop:false, hideControlOnEnd: true,
   }); */

   /* family site */
   $(function(){
	   var $family =  $('.family_site > a');
	   var $family2 =  $('.family_site');
	   /*
	   var $family3 =  $('.family_site_list > ul > li:last-child > a');
	   var $family4 =  $('.fm li:last-child > a');
	   */
	   $family.on('click',function(){
		   $(this).toggleClass('close');
		   $(this).parent().find('.family_site_list').slideToggle('fast');
	   });
	   $family2.on('mouseleave',function(){
		   $(this).children().removeClass('close');
		   $(this).find('.family_site_list').slideUp('fast');
	   });
	   /*
	   $family3.on('blur',function(){
		   $('.family_site > family_site_list').slideUp('fast');
		   $('.family_site > a').removeClass('close');
	   });
	   $family4.on('focus',function(){
		   $('.family_site > family_site_list').slideUp('fast');
		   $('.family_site > a').removeClass('close');
	   });
	   */
   });

   /* Breadcrumb */
   $(function(){
	   var $breadcrumb1 =  $('.depth_box > a');
	   var $breadcrumb2 =  $('.depth_box');
	   $breadcrumb1.on('click',function(){
		   $(this).toggleClass('active');
		   $(this).parent().find('ul').slideToggle('fast');
	   });
	   $breadcrumb2.on('mouseleave',function(){
		   $(this).children().removeClass('active');
		   $(this).find('ul').slideUp('fast');
	   });
   });

   /* 공유 */
   $(function(){
	   var $shareBox =  $('.share_box');
	   var $shareBox2 =  $('.share_box .share_list');
	   $shareBox.on('mouseover',function(){
		   $(this).addClass('active');
	   });
	   $shareBox2.on('mouseover',function(){
		   $(this).parent().addClass('active');
	   });
	   $shareBox.on('mouseleave',function(){
		   $(this).removeClass('active');
	   });
	   $shareBox2.on('mouseleave',function(){
		   $(this).parent().removeClass('active');
	   });
   });

   /* 통합검색 */
   $(function(){
	   var $shBar =  $('.autocomplate_list .link .btn_go');
	   $shBar.on('mouseover',function(){
		   $(this).parent().addClass('active');
	   });
	   $shBar.on('mouseleave',function(){
		   $(this).parent().removeClass('active');
	   });
   });

   // radio, checkbox 테두리 삭제
   $("input[type=radio], input[type=checkbox]").click(function(){$(this).blur();});

   // ui dialog 자동 포커스 제거
//    $.ui.dialog.prototype._focusTabbable = function() {
// 	   // this.uiDialog.focus();
// 	   // this.uiDialogTitlebarClose.focus();
//    };

   // table radio 정렬
   $('table td').has('.ui-selectmenu-button').addClass('radio_sel');

   // table re open
   $(".tr_open .detail_open").click(function(){
	   if($(this).parent().parent().next().is(":hidden")){
		   $(".tr_open .detail_open").parent().parent().next().hide();
		   $(this).parent().parent().next().show();
		   $('.tr_open .detail_open_box').removeClass("active");
		   $(this).parent().parent().addClass("active")
	   }else if($(this).parent().parent().next().is(":visible")){
		   $(this).parent().parent().next().hide();
		   $(this).parent().parent().removeClass("active");
	   }
   });

   /* faq */
   $(".faq dt").click(function(){
	   if($(this).next().is(":hidden")){
		   $(".faq dt").next().slideUp();
		   $(".faq dt").removeClass("active");
		   $(this).next().slideDown();
		   $(this).addClass("active");
	   }else if($(this).next().is(":visible")){
		   $(this).next().slideUp();
		   $(this).removeClass("active");
	   }
   });

   /* accordion */
   var $accordionList =  $('.accordion_list dt a');
   $accordionList.click(function(){
	   if($(this).parent().next().is(":hidden")){
		   $accordionList.parent().next().slideUp();
		   $accordionList.parent().removeClass("active");
		   $(this).parent().next().slideDown();
		   $(this).parent().addClass("active");
	   }else if($(this).parent().next().is(":visible")){
		   $(this).parent().next().slideUp();
		   $(this).parent().removeClass("active");
	   }
   });

   // input file
   /*
   $('.fake_file').click(function(){
	   $(".real_file").click();
   });
   */
   $('.real_file').change(function() {
	   $('.file_name span').text($('.real_file')[0].files[0].name);
	   $('.file_name .del').css('display', 'inline-block');
   });
   // input file2
   $('.fake_file2').click(function(){
	   $(".real_file2").click();
   });
   $('.real_file2').change(function() {
	   $('.file_name span').text($('.real_file2')[0].files[0].name);
	   $('.file_name .del').css('display', 'inline-block');
   });

   // 사은품
   $(".freebies_box ul li:nth-child(2n+1)").addClass('cl');

   // texearea
   /*
   $(function(){
	   var $textAreaW =  $('.textarea_wrap textarea');
	   $textAreaW.on('blur',function(){
		   $(this).parent().removeClass('active');
	   });
	   $textAreaW.on('focus',function(){
		   $(this).parent().addClass('active');
	   });
   });
   */

   // member input
   $(function(){
	   var $inputAreaW =  $('.join_row > input[type="text"], .join_row > input[type="password"]');
	   var $inputAreaW2 =  $('.join_col > input[type="text"], .join_col > input[type="password"]');
	   var $inputAreaW3 =  $('.blocks2 .join_col > input[type="text"], .blocks2 .join_col > input[type="password"]');
	   var $inputAreaW4 =  $('.join_col > .join_cols input[type="text"], .join_col > .join_cols input[type="password"]');
	   var $inputAreaW5 =  $('.join_row.placeholder_wrap');
	   $inputAreaW.on('blur',function(){
		   $(this).parent().removeClass('active');
	   });
	   $inputAreaW.on('focus',function(){
		   $(this).parent().addClass('active');
	   });
	   $inputAreaW2.on('blur',function(){
		   $(this).parent().removeClass('active');
	   });
	   $inputAreaW2.on('focus',function(){
		   $(this).parent().addClass('active');
	   });
	   $inputAreaW3.on('blur',function(){
		   $(this).parent().parent().removeClass('active');
	   });
	   $inputAreaW3.on('focus',function(){
		   $(this).parent().parent().addClass('active');
	   });
	   $inputAreaW4.on('blur',function(){
		   $(this).parent().parent().removeClass('active');
	   });
	   $inputAreaW4.on('focus',function(){
		   $(this).parent().parent().addClass('active');
	   });
	   $('.blocks2').has('input[type="text"]:disabled').addClass('dis');
	   $('.pop_wrap .blocks').has('input[type="text"]:disabled').addClass('dis');
	   $inputAreaW5.has('input[type="text"]:disabled').addClass('dis');
   });

   // placeholder
   var $placeholderWrap =  $('.placeholder_wrap input[type="text"], .placeholder_wrap input[type="password"]');
   $placeholderWrap.change(function() {
	   if ($(this).val().length == 0){
		   $(this).parent().find('label').css("display", "block");
	   }
   }).keydown(function() {
	   $(this).parent().find('label').css("display", "none");
   }).blur(function() {
	   if ($(this).val().length == 0) {
		   $(this).parent().find('label').css("display", "block");
	   } else {
		   $(this).parent().find('label').css("display", "none");
	   }
   });

   //datepicker
   $( function() {
	   $( ".datepicker" ).datepicker({
		 showOn: "button",
		 buttonImage: "https://cdn.hddfs.com/front/images/KO/common/ic_calendar.png",
		 buttonImageOnly: true,
		 dateFormat: "yy-mm-dd",
		 buttonText: "Select date",
		 changeYear: true,
		 changeMonth: true,
		 showOtherMonths: true,
		 monthNamesShort: [ "1","2","3","4","5","6","7","8","9","10","11","12" ],
		 dayNamesMin: [ "일","월","화","수","목","금","토" ],
	   });
   });

   //timepicker/
   /*
   $('.timepicker').timepicker({
	   timeFormat: 'h:mm p',
	   interval: 30,
	   minTime: '10',
	   //maxTime: '6:00pm',
	   //defaultTime: '11',
	   //startTime: '10:00',
	   dynamic: false,
	   dropdown: true,
	   scrollbar: true
   });
   */

   //spinner
//    var $spinner = $(".spinner"), $spinnerDisabled = $(".spinner:disabled");
//    $spinner.spinner({
// 	   min: 1, step: 1, disabled: false
//    });
//    $spinnerDisabled.spinner({
// 	   disabled: true
//    });

   // 공통 tab
   $('.tab_type01 a').click(function () {
	   $("img.lazy").trigger("appear");
	   $('.tab_type01 .active').removeClass('active');
	   $(this).addClass('active');
	   $('.tab_view_box').removeClass('block');
	   var contentid = $(this).attr('title');
	   $('#' + contentid).addClass('block');
	   // 상품정보고시
	   var $txtMore = $('.tb_view01 td .txt_more');
	   if ($txtMore.outerHeight() > 23){
		   $('.tb_view01 th .txt_more').css('display', 'inline-block');
		   $txtMore.addClass('h_fix');
		   $('.tb_view01 th .txt_more').click(function(){
			   $(this).toggleClass('active');
			   $txtMore.toggleClass('h_fix');
		   });
	   }
   });

   $('.tab_type02 a').click(function () {
	   $('.tab_type02 .active').removeClass('active');
	   $(this).addClass('active');
	   $('.tab_view_box2').removeClass('block');
	   var contentid = $(this).attr('title');
	   $('#' + contentid).addClass('block');
	   // if ( !$(this).closest('.tab_type02').hasClass('fixed') ) {
	   // 	return false;
	   // }
   });
   $('.tab_type03 a').click(function () {
	   $('.tab_type03 .active').removeClass('active');
	   $(this).addClass('active');
	   $('.tab_view_box3').removeClass('block');
	   var contentid = $(this).attr('title');
	   $('#' + contentid).addClass('block');
	   // if ( !$(this).closest('.tab_type03').hasClass('fixed') ) {
	   // 	return false;
	   // }
   });
   $('.tab_type04 a').click(function () {
	   $('.tab_type04 .active').removeClass('active');
	   $(this).addClass('active');
	   $('.tab_view_box2').removeClass('block');
	   var contentid = $(this).attr('title');
	   $('#' + contentid).addClass('block');
	   // if ( !$(this).closest('.tab_type04').hasClass('fixed') ) {
	   // 	return false;
	   // }
   });

	//2022-06-20 type5 추가
	$('.tab_type05 a').click(function () {
		$('.tab_type05 .active').removeClass('active');
		$(this).addClass('active');
		$('.tab_view_box5').removeClass('block');
		var contentid = $(this).attr('title');
		$('#' + contentid).addClass('block');
	}); 

   // 웨딩 tab
   $('.wedding_tab a').click(function () {
	   $('.wedding_tab .active').removeClass('active');
	   $('.buy_benefit').css('display', 'none');
	   $(this).addClass('active');
	   $('.tab_wedding_view').removeClass('block');
	   var contentid = $(this).attr('title');
	   $('#' + contentid).addClass('block');
   });
   $('.wedding_tab a.benefit_open').click(function () {
	   $('.buy_benefit').css('display', 'block');
	   var $tabSticky2 = $('.tab_sticky'),
		   targetY     = $tabSticky2.offset().top;
	   $(window).on('scroll', function () {
		   var scrollTop = $(this).scrollTop();
		   if (targetY < scrollTop) {
			   $tabSticky2.addClass('fixed');
		   } else {
			   $tabSticky2.removeClass('fixed');
		   }
	   });
	   $tabSticky2.find('li').on('click', 'a', function () {
		   if ($tabSticky2.is('.fixed')) {
			   $('html, body').animate({
				   scrollTop : targetY-110
			   }, 0)
		   }
	   })
	   /*
	   if (jQuery('.tab_sticky').offset()) { // make sure "#sticky" element exists
		   var stickyTop2 = jQuery('.tab_sticky').offset().top; // returns number
		   jQuery(window).scroll(function(){ // scroll event
			   var windowTop2 = jQuery(window).scrollTop()+60;
			   if (stickyTop2 < windowTop2){
				   jQuery('.tab_sticky').addClass('fixed');
			   } else {
				   jQuery('.tab_sticky').removeClass('fixed');
			   }
		   });
	   }
	   */
   });

   // tab stiky
   /*
   if (jQuery('.tab_sticky').offset()) { // make sure "#sticky" element exists
	   var stickyTop2 = jQuery('.tab_sticky').offset().top; // returns number

	   jQuery(window).scroll(function(){ // scroll event
		   var windowTop2 = jQuery(window).scrollTop();
		   if (stickyTop2 < windowTop2){
			   jQuery('.tab_sticky').addClass('fixed');
		   } else {
			   jQuery('.tab_sticky').removeClass('fixed');
		   }
	   });
   }
   */
   // tooltip
   /*
   $('.tooltip_wrap2 > a, .tooltip_wrap2 .ico_com.close').click(function () {
	   $(this).closest('.tooltip_wrap2').toggleClass('opened');
   });
   */
   // 이미지 로딩
   /*
   $(function() {
	   $("img.lazy").lazyload({
		   effect : "fadeIn"
	   });
   });
   */
});
// 이미지 로딩
// window.addEventListener("load", function(event) {
// 	lazyload();
// });

// brand scroll move
$(function() {
   var container 	= $('.abc_list');
   var abcTab 		= $('.abc_tab li>button');
   var abcList 	= container.find('dl');
   abcTab.click(function() {
	   // active, unactive
	   abcTab.filter('.active').removeClass('active');
	   var $this = $(this).addClass('active');
	   // find target
	   var index = abcTab.index(this);
	   var scrollTo = abcList.filter(':eq('+index+')');
	   // scrollTo
	   if(scrollTo.size() > 0) {
		   container.animate({
			   scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() + 2
		   });
	   }
   });

   //리사이징 폰트
   function measureText(pText, pFontSize) {

	   var resizeFont = document.createElement('p');

	   document.body.appendChild(resizeFont);

	   resizeFont.style.fontSize = "" + pFontSize + "px";
	   resizeFont.style.position = "absolute";
	   resizeFont.style.left = -1000;
	   resizeFont.style.top = -1000;

	   resizeFont.innerHTML = pText;

	   var lResult = {
		   width: resizeFont.clientWidth,
		   height: resizeFont.clientHeight
	   };

	   document.body.removeChild(resizeFont);
	   resizeFont = null;

	   return lResult;
   }
   function fitText(el){
	   var text = el.text();
	   var currentFsize = parseFloat(el.css('font-size'));
	   var fsize = currentFsize || 64;
	   var measured = measureText(text, fsize);

	   if (measured.width > el.width()){
		   while(true && fsize >= 6){
			   var m = measureText(text, fsize);
			   if(m.width > el.width()){
				   fsize -= 2; //2023-05-10 수정 : 이전값 0.5
				   el.attr('style','font-size: '+ fsize + 'px !important');
			   }
			   else{
				   break;
			   }
		   }
	   }
   }

   function FitAll(){
	   $('.resize').each(function(index, el){
		   fitText($(el));
	   })
   }
   FitAll();

});













/* S: 2021-09-17 추가 : 바디 클릭 시 [언어선택, 통화선택, 히든메뉴] 닫기 */
$(document).on("click", "body", function(){
	$('.language').removeClass('open');
	$(".language div").slideUp(200);

	$(".currency").removeClass("open");
	$(".currency div").slideUp(200);

	$('.hidden_menu').removeClass('open');
	$(".hidden_menu .item").slideUp(200);
});
/* E: 2021-09-17 추가 : 바디 클릭 시 [언어선택, 통화선택, 히든메뉴] 닫기 */

// HEADER
// hidden menu
$(document).on("click", ".hidden_menu .btn", function(e){
	e.preventDefault();
   if($(this).parent(".hidden_menu").hasClass("open")){
	   $(this).parent(".hidden_menu").removeClass("open");
	   $(".hidden_menu .item").slideUp(200)
       $('.float-benefit').slideDown(200);
   }else{
	   $(this).parent(".hidden_menu").addClass("open");
	   $(".hidden_menu .item").slideDown(200)
       $('.float-benefit').slideDown(200);
   }

   e.stopPropagation();

   var hiddenswiper = new Swiper('.hidden_menu .swiper-container', {
	   direction: 'vertical',
	   slidesPerView: 'auto',
	   slidesPerGroup: 1,
	   navigation: {
		   nextEl: '.controller .btn-down',
		   prevEl: '.controller .btn-up'
	   }
   });
   
   $(".language, .currency").removeClass("open");
   $(".language div, .currency div").slideUp(200);
})

$(document).on("click", ".hidden_menu .item", function(e){
	e.stopPropagation();
});
// language
$(document).on("click", ".default_menu .language a", function(e){
   if($(".language").hasClass("open")){
	   $(".language").removeClass("open");
	   $(".language div").slideUp(200);
   }else{
	   $(".language").addClass("open");
	   $(".language div").slideDown(200);
	   $(".currency").removeClass("open");
	   $(".currency div").slideUp(200);
   }

   $(".hidden_menu").removeClass("open");
   $(".hidden_menu .item").slideUp(200);

   e.stopPropagation();
});

/* S : 2022-09-14 수정 : GNB 언어변경 버튼 수정 및 영문추가 */
$(document).on('click', '.language > div > a.ko', function(){
	$('.language').removeClass('cn en').addClass('ko');
	$('.language > a').removeClass('cn en').addClass('ko');
});
$(document).on('click', '.language > div > a.cn', function(){
	$('.language').removeClass('ko en').addClass('cn');
	$('.language > a').removeClass('ko en').addClass('cn');
});
$(document).on('click', '.language > div > a.en', function(){
	$('.language').removeClass('ko cn').addClass('en');
	$('.language > a').removeClass('ko cn').addClass('en');
});
/* E: 2022-09-14 수정 : GNB 언어변경 버튼 수정 및 영문추가 */

// currency
$(document).on("click", ".default_menu .currency a", function(e){
   if($(".currency").hasClass("open")){
	   $(".currency").removeClass("open");
	   $(".currency div").slideUp(200);
   }else{
	   $(".currency").addClass("open");
	   $(".currency div").slideDown(200);
	   $(".language").removeClass("open");
	   $(".language div").slideUp(200);
   }

   $(".hidden_menu").removeClass("open");
   $(".hidden_menu .item").slideUp(200);

   e.stopPropagation();
});
$(document).on("click", ".currency > div > a.krw", function(){
	$(".currency").removeClass("cny").addClass("krw");
    $(".currency > a").removeClass("cny").addClass("krw");
})
$(document).on("click", ".currency > div > a.cny", function(){
	$(".currency").removeClass("krw").addClass("cny");
    $(".currency > a").removeClass("krw").addClass("cny");
})

// CONTAINER
// location
$(document).ready(function(){
   if($(".location").length) {
	   $(".location ul").hide();
	   $(".location strong").click(function() {
		   if(!$(this).is(".expanded")){
			   $(".location ul").slideUp(300);
			   $(".location strong").removeClass("expanded");
			   $(this).nextAll().slideDown(300);
			   $(this).addClass("expanded");
		   }
		   else{
			   $(this).nextAll().slideUp(300);
			   $(this).removeClass("expanded");
		   }
	   });
	   $(".location ul a").bind("click", function(){
		   $(".location ul").slideUp(300);
		   $(".location strong").removeClass("expanded")
	   });
   };
})

// FOOTER
// Family Site
$(document).on("click", "footer .family_site button", function(){
   if($(".family_site").hasClass("open")){
	   $(".family_site").removeClass("open");
	   $(".family_site .list").slideUp(200)
   }else{
	   $(".family_site").addClass("open");
	   $(".family_site .list").slideDown(200)
   }
});

// GNB
//gnb open 2023 개선 수정
$(document).ready(function(){
	$("<p class='gnb_dim n-gnb-dim'></p>").appendTo("body");
	var $win = $(window),
		$body = $("body"),
		$gnb = $(".navication"),
		$gnbOpen = $(".btn_gnb"),
		$gnbClose = $(".navication .gnb_close");
		$dim = $(".gnb_dim"),
		$pdVisual =	$(".pd_visual")
   	//gnb
   	// $gnbClose.hide();
   	$gnbOpen.click(function(){
		offsetY = window.pageYOffset;
		// $body.css({
		// 	overflow: "hidden",
		// 	position: "fixed",
		// 	top: -offsetY + "px",
		// 	width:"100%"
		// })
        /* S: 2023-11-23 추가*/
        $body.css({
            overflow:"",
            position:"",
            top:""
        });
        /* E: 2023-11-23 추가*/
		$gnb.addClass("open");
		$gnbClose.show();
	   	$dim.show();
		$(".searchfield").removeClass("adsearch_open");
		$(".searchfield input").removeClass("tag");
		$("#header .advanced_search").removeClass("adsearch_open").slideUp(200);
		$(".adsearch_dim").fadeOut()
		//    $("#header").animate({left:"352"},200);
	   	// $(".btn_gnb").css({visibility:"hidden"})

	   	// 상품확대 보기 열기 추가, 20231211 상품상세 연관성때문에 주석처리
	   	// $pdVisual.removeClass('reset');
	   	// $pdVisual.animate({ left: "382" }, 200);

		// 2023-07-31 스크롤시 gnb 닫기 추가
		document.onscrollend = event => {
			$gnbClose.hide();
			$dim.hide();
			$(".btn_gnb").css({visibility:""});
			$gnb.removeClass("open");
			// 상품확대 보기 닫기 추가
			// $pdVisual.addClass('reset');
		}
   	});
   	//닫기
   	$dim.click(function(){
	   	setTimeout(function(){
			// $body.css({
			// 	overflow:"",
			// 	position:"",
			// 	top:""
			// });
			$gnb.removeClass("open");
			$win.scrollTop(offsetY);
		},200);
		// $body.animate({left:"0"},200);
		/* $gnb.animate({
			left:"-352"
		},200); */
		$gnbClose.hide();
		$dim.hide()
		// $("#header").animate({left:""},200);
		$(".btn_gnb").css({visibility:""})
		// 상품확대 보기 닫기 추가
		// $pdVisual.addClass('reset');
   });

   // gnb accordion
   var lnbUI = {
	   click : function (target, speed) {
	   var _self = this,
		   $target = $(target);
	   _self.speed = speed || 300;

	   $target.each(function(){
		   if(findChildren($(this))) {
		   return;
		   }
		   // $(this).addClass("noDepth");
	   });

	   function findChildren(obj) {
		   return obj.find("> ul").length > 0;
	   }
	   $target.on("click","strong", function(e){
		   e.stopPropagation();
		   var $this = $(this),
			   $depthTarget = $this.next(),
			   $siblings = $this.parent().siblings();
		   $this.parent("li").find("ul li").removeClass("open");
		   $siblings.removeClass("open");
		   $siblings.find("ul").slideUp(250);

		   if($depthTarget.css("display") == "none") {
		   _self.activeOn($this);
		   $depthTarget.slideDown(_self.speed);
		   } else {
		   $depthTarget.slideUp(_self.speed);
		   _self.activeOff($this);
		   }
		   $("#gnb .depth_02 li p").each(function(){
			   // var gnbLuxuryImg = $(this).height();
			   var gnbText = $(this).height();
			   $(this).css({marginTop:-(gnbText/2)+"px"})
		   })
		   
			/* S : GA4 추가 */
			var gnbDepth = $(this).parents("li").find("ul.depth_02");
			if(gnbDepth.hasClass("serviceMenu") == true){
				GA_Event("click_PC_국문_공통", "햄버거_메뉴", "햄버거_메뉴", "전체서비스");
			} else if(gnbDepth.hasClass("serviceCtgList") == true){
				if ($(this).siblings("ul.depth_03").length > 0){
					var gnbNm = $(this).text().replace(/\s/g, "");
					GA_Event("click_PC_국문_공통", "햄버거_메뉴", "햄버거_메뉴", "카테고리_"+gnbNm);
				} else {
					GA_Event("click_PC_국문_공통", "햄버거_메뉴", "햄버거_메뉴", "카테고리");
				}
			} else if(gnbDepth.hasClass("gnb_luxury") == true){
				GA_Event("click_PC_국문_공통", "햄버거_메뉴", "햄버거_메뉴", "공식스토어");
			} else if(gnbDepth.hasClass("gnb_brand") == true){
				GA_Event("click_PC_국문_공통", "햄버거_메뉴", "햄버거_메뉴", "행사중인브랜드");
			}
			/* E : GA4 추가 */
	   })
	   },
	   activeOff : function($target) {
	   $target.parent().removeClass("open");
	   },
	   activeOn : function($target) {
	   $target.parent().addClass("open");
	   }
   };

   // Call lnbUI
   $(function(){
	   lnbUI.click('#gnb li', 300)
   });
});

// header 검색
$(function(){

   $("body").append("<div class='adsearch_dim'></div>")
   var SearchAdsearchOpen = function(){
        if (document.querySelector('.advanced_search').classList.contains('adsearch_open')) {
            return;
        }
	   offsetY = window.pageYOffset;
	   $(".searchfield").addClass("adsearch_open");
	   $("#header .advanced_search").addClass("adsearch_open").slideDown(200);
	   $(".adsearch_dim").fadeIn();
	   $("body").css({
		   overflow:"hidden",
		    //position:"fixed", //2023-11-22 이지웰 해더때문에 삭제
		    //top:-offsetY + "px", //2023-11-22 이지웰 해더때문에 삭제
		   width:"100%"
	   })
	   $(window).scrollTop() > 10 && $(".totop").fadeOut(); //2023-12-20 top 버튼 숨기기 
       $(window).scrollTop() > 10 && $(".btn-goto-store").fadeOut(); //2024-07-01 온/오프라인 정보 통합(지점안내 버튼 추가)
	   // 검색영역 툴팁 자동 사라짐 timer
	   setTimeout(function () {
		   $(".searchfield").removeClass("adsearch_open");
	   }, 3000);
       $(".searchfield .mainsearchinput").addClass("is-active");//2024-08-08 메인 해더 수정
   }
   var SearchAdsearchClose = function(){
	   $(".searchfield").removeClass("adsearch_open");
	   // $(".searchfield .select_search").removeClass("tag");
	   // $(".searchfield input.main_search").removeClass("tag");
	   $("#header .advanced_search").removeClass("adsearch_open").slideUp(200);
	   $(".adsearch_dim").fadeOut()
	   $("body").css({
		   overflow:"",
		   position:"",
		   top:""
	   });
	   $(window).scrollTop() > 10 && $(".totop").fadeIn(); //2023-12-20 top 버튼 숨기기 
       $(window).scrollTop() > 10 && $(".btn-goto-store").fadeIn(); //2024-07-01 온/오프라인 정보 통합(지점안내 버튼 추가)
       $("#header").removeClass("open-search");//2024-08-08 메인 해더 수정
       $(".searchfield .mainsearchinput").removeClass("is-active");//2024-08-08 메인 해더 수정
	   $(window).scrollTop(offsetY);
   }
   $(".searchfield .mainsearchinput input").focus(SearchAdsearchOpen)
   $(".advanced_search .search_close, .adsearch_dim").click(SearchAdsearchClose)
   $(".advanced_search .search_close").blur(SearchAdsearchClose);//2021-10-05 추가 : 접근성관련 검색창 닫힘기능

   // 검색영역 툴팁
   $(document).on("click", ".searchfield .select_search button", function(){
	   if($(".searchfield .select_search").hasClass("tag")){
		   $(".searchfield .select_search").removeClass("tag");
		   $(".mainsearchinput").removeClass("tag");
		   $(".searchfield .tooltip").text("해시태그로 검색하세요 :)")
	   }else{
		   $(".searchfield .select_search").addClass("tag");
		   $(".mainsearchinput").addClass("tag");
		   $(".searchfield .tooltip").text("일반단어로 검색하세요 :)")
	   }
   })
})

function sellerInfo(){
   $("#seller_information").dialog("open");
}
$(document).ready(function(){
   // 다이얼로그 초기화
   $("#seller_information").dialog({
	   autoOpen: false,
	   resizable: false,
	   width:400,
	   maxHeight: 340,
	   modal: true
   });
});


$(function(){
   $(".tab-action").tabs();
   $('.tab-action').tabs().removeClass (function (index, className) {
	   //console.log((className.match(/(^|\s)ui-\S+/g) || []).join(' '));
	   return (className.match (/(^|\s)ui-\S+/g) || []).join(' ');
   });
});

$(function(){
   $(".tab-style ul li").click(function(){
	   $(this).siblings().removeClass("ui-tabs-active");
	   $(this).addClass("ui-tabs-active");

   });
});


// 상품 모듈 swiper
// class="product-module-swiper"

$(function(){
   /* S: 2021-06-23 추가 : 슬라이드 최대 갯수에 따른 좌우 버튼 노출 여부
   if($('#container .swiper-wrapper').length > 0){
	   $('#container .swiper-wrapper').each(function(){
		   if($(this).find('.swiper-slide').length <= $(this).parent().attr('data-slide')){
			   $(this).parent().find('.swiper-prev, .swiper-next').hide();
			   $(this).parent().siblings('.swiper-prev, .swiper-next').hide();
		   } else {
			   $(this).parent().find('.swiper-prev, .swiper-next').show();
			   $(this).parent().siblings('.swiper-prev, .swiper-next').show();
		   }
		   console.log($(this).find('.swiper-slide').length+' / '+$(this).parent().attr('data-slide'));
	   });
   }
   E: 2021-06-23 추가 : 슬라이드 최대 갯수에 따른 좌우 버튼 노출 여부 */

   /* 2021-06-24 추가 : 이벤트 리스트페이지 검색어 입력 시 삭제버튼 노출 관련 */
   if($('.search_box').length > 0){
	   $('.search_box').each(function(){
		   if($(this).find('input[type="text"]').length > 0){
			   if($(this).find('input[type="text"]').val().length > 0){
				   $(this).find('.search_txt_del').show();
			   }

			   $(this).find('input[type="text"]').keyup(function(){
				   if($(this).val().length > 0){
					   $(this).closest('.search_box').find('.search_txt_del').show();
				   } else {
					   $(this).closest('.search_box').find('.search_txt_del').hide();
				   }
			   });
		   }

		   $(this).find('.search_txt_del').click(function(){
			   $(this).closest('.search_box').find('input[type="text"]').val('');
			   $(this).hide();
		   });
	   });
   }


   $(".product-module-swiper").each(function(index, element){
	   var $this = $(this);
	   $this.addClass("instance-swipwe-" + index);
	   $this.siblings(".swiper-prev").addClass("instance-prev" + index)
	   $this.siblings(".swiper-next").addClass("instance-next" + index)

	   if($this.closest('article')[0].hasAttribute('id')){
		   if($this.closest('article').attr('id').indexOf('main') > -1){ // 2021-06-28 추가 : $(".product-module-swiper") 노출 갯수 분기(메인=4개 / 나머지 5개)
			   var slidesPerView = 4;
		   } else {
			   var slidesPerView = 5;
		   }
	   } else {
		   var slidesPerView = 5;
	   }

	   if($(this).find('.swiper-slide').length > slidesPerView){
		   var loop = true;
	   } else {
		   var loop = false;
		   $this.parent().find('.swiper-next, .swiper-prev').hide();
	   }

	  var ProductModuleSwiper = new Swiper(".instance-swipwe-" + index, {
			slidesPerView: slidesPerView,
			slidesPerGroup: 1,
			loop:loop,
			observer:true,
			observeParents:true,
			spaceBetween: $this.parent().hasClass('brandshop_slide') ? 0 : 20, // 2021-08-04 브랜드샵 슬라이드 간격 0 추가
			centeredSlides: !$this.parent().hasClass('brandshop_slide') ? false : $(this).find('.swiper-slide').length < slidesPerView ? true : false, // 2021-08-04 브랜드샵 슬라이드 노출 갯수 미만 시 센터정렬
			navigation: {
				nextEl: '.instance-next'+index,
				prevEl: '.instance-prev'+index,
			},
			/* S: 2021-09-23 추가 : lazy*/
			lazy: {
				loadPrevNext: true,
				loadPrevNextAmount: slidesPerView
			},
			/* E: 2021-09-23 추가 : lazy*/
		});

		/* S: 2021-08-05 추가 : 노출갯수 미만 시 swiper 제거 */
		if($this.parent().hasClass('brandshop_slide')){
			// $(this).find('.swiper-slide').length < slidesPerView & ProductModuleSwiper.distroy();
			if($(this).find('.swiper-slide').length < slidesPerView){
				ProductModuleSwiper.destroy();
				$(this).addClass('no_swipe');
			}
		}
		/* E: 2021-08-05 추가 : 노출갯수 미만 시 swiper 제거 */
   });
})

// 상품모듈 타입 - square 타이틀 세로 정렬
$(function(){
   var BrandTitlePosition = function(){
	   $(".brand_style em").each(function(){
		   var BrandTitle = $(this).height();
		   $(this).css({marginTop:-(BrandTitle/2)+"px"})
	   })
   }
   $(".hashtag .btn").click(BrandTitlePosition);
   $(".hashtag.open").find(BrandTitlePosition);
});
$(function(){
   if($(".square_tooltip").length) {
	   $(".square_tooltip .btn").bind("click", function(){
		   if(!$(this).parent().is(".open")){
			   $(".square_tooltip").removeClass("open");
			   $(this).parent().addClass("open");
		   }
		   else{
			   $(this).parent().removeClass("open");
		   }
	   });
	   $(".square_tooltip .close").bind("click", function(){
		   $(".square_tooltip").removeClass("open");
		   $('body').find('[tabindex="-100"]').focus().removeAttr('tabindex'); //2021-10-06 추가 : 접근성 관련 팝업 포커스
	   });
   }
   if($(".ui-widget-overlay").length){
	   $(".ui-widget-overlay").css({zIndex:100})
   }

   /* S: 2021-10-06 추가 : 접근성 관련 팝업 포커스 */
	$('.square_tooltip a').keydown(function(){
		layer_focus($(this), $(this).siblings('.tooltip').find('.close'));
	});
	/* E: 2021-10-06 추가 : 접근성 관련 팝업 포커스 */
});

$(function(){
   $("#content").parents("#container").removeClass("container")
});

function layer_focus(_target, _focus_target){
	if(event.keyCode == 13){
		_target.attr('tabindex','-100');
		_focus_target.focus();
	}	
}

/* 2021-10-06 추가 : 접근성 관련 [무이자할부/카드사포인트 안내] 팝업 포커스 */
$('.purchase_benefits .con > li a.box').click(function(){
	setTimeout(function(){
		if($('.credit_pop').length > 0){
        	$('.credit_pop').siblings('.ui-dialog-titlebar').find('.ui-dialog-titlebar-close').focus();
		}
    },100);
});

function ScrollStickySize(){
   var windowWidth = $(window).width()
   var ordersheetHeight = $(".order_sheet").outerHeight(true);
   var paymentsheetHeight = $(".payment_sheet").outerHeight(true);
   if(paymentsheetHeight >= ordersheetHeight) {
	   $(".payment_sheet").addClass("top")
   }
   else{
	   $(".payment_sheet").removeClass("top")
   }
   $(".addtocart").css({"min-width":windowWidth+"px"})
};
window.addEventListener("load", ScrollStickySize)
window.addEventListener("resize", ScrollStickySize)

$(document).ready(function(){
   var ordersheetHeight = $(".order_sheet").outerHeight(true);
   var paymentsheetHeight = $(".payment_sheet").outerHeight(true);
   $(".payment_board").on("click", function(){
	   if(paymentsheetHeight >= ordersheetHeight) {
		   $(".payment_sheet").addClass("top")
	   }
	   else{
		   $(".payment_sheet").removeClass("top")
	   }
   })
})


$(function(){
   $(".num_amount input[count_range]").click(function(e){
	   e.preventDefault();
	   var type = $(this).attr("count_range");
	   var $count = $(this).siblings("input.count");
	   var count_val = $count.val(); // min 1
	   if(type=="m"){
		   if(count_val<2){ // 2021-06-22 : 개발요청으로 수정 최소 단위 1
			   return;
		   }
		   $count.val(parseInt(count_val)-1);
	   }else if(type=="p"){
		   $count.val(parseInt(count_val)+1);
	   }
   });
});
// 헤더 좌우스크롤
$(window).scroll(function(){
   $("#header").css({left:0-$(this).scrollLeft()})
})

$(function(){
   $(".terms_item .terms_toggle").click(function(){
	   if($(this).parent().parent(".terms_item li").hasClass("open")){
		   $(this).parent().parent(".terms_item li").removeClass("open")
	   }else{
		   $(this).parent().parent(".terms_item li").addClass("open")
	   }
   });

   $(".bankbook_caution .terms_toggle").click(function(){
	   if($(this).parent(".bankbook_caution").hasClass("open")){
		   $(this).parent(".bankbook_caution").removeClass("open")
	   }else{
		   $(this).parent(".bankbook_caution").addClass("open")
	   }
   });
})


// Time Sale
$(function(){
   if (window.NodeList && !NodeList.prototype.forEach) {
	   NodeList.prototype.forEach = Array.prototype.forEach;
   }
   var TimeSale = document.querySelectorAll(".get-standard-time");
   TimeSale.forEach(function(timer){
	   var countDownDate = new Date(timer.innerText).getTime();
	   var x = setInterval(function() {
		   var now = new Date().getTime();
		   var distance = countDownDate - now;
		   var h = Math.floor(distance / (1000 * 60 * 60));
		   var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		   var s = Math.floor((distance % (1000 * 60)) / 1000);
			   if(h < 10){
				   h = "0"+h;
			   }
			   if(m < 10){
				   m = "0"+m;
			   }
			   if(s < 10){
				   s = "0"+s;
			   }
			   timer.innerHTML = "<strong>"+h+"</strong><em>:</em><strong>"+m+"</strong><em>:</em><strong>"+s+"</strong>";
			   if (distance < 0) {
				   clearInterval(x);
				   timer.innerHTML = "EXPIRED";
			   }
	   }, 1000);
   });
});

//S: 2022-03-25 h.share swiper 슬라이더 추가 by pub10
//class="hshare"
$(function(){
	var HshareSwiper = new Swiper('.hshare-swiper', {
		slidesPerView: 'auto',
		slidesPerGroup: 1,
		observer:true,
		observeParents:true,
		spaceBetween: 20,
		watchOverflow:true,
		navigation: {
			nextEl: '.hshare .swiper-next',
			prevEl: '.hshare .swiper-prev',
		},
		lazy: {
			loadPrevNext: true,
		},
		//loop: $('.hshare-swiper .swiper-slide').length > 3 ? true : false,
		on: {
			init: function(){
				if($(".hshare-swiper .swiper-slide").length < 3) {
					$('.hshare .swiper-next').hide();
					$('.hshare .swiper-prev').hide();
				}
			}
		},
	});
});
//E: 2022-03-25 h.share swiper 슬라이더 추가 by pub10

$(function(){
   var scrollDiv = document.createElement("div");
   $(scrollDiv).attr("class", "totop").html("<a href='#none'>처음으로 이동</a>").appendTo("#content, #content2, article#main") // 2021-06-25 메인 totop 버튼 추가
   $(".totop").hide()
   $(".btn-goto-store").hide() //2024-07-01 온/오프라인 정보 통합(지점안내 버튼 추가)
   $(window).scroll(function(){
	   if ($(this).scrollTop() > 10) {
		   $(".totop").fadeIn();
           $(".btn-goto-store").fadeIn(); //2024-07-01 온/오프라인 정보 통합(지점안내 버튼 추가)
	   } else {
		   $(".totop").fadeOut();
           $(".btn-goto-store").fadeOut(); //2024-07-01 온/오프라인 정보 통합(지점안내 버튼 추가)
	   }
   });
   $(".totop").click(function(){
	   $("body,html").animate({scrollTop:0}, 300);
   });
})

$(function() {
   // 2021-06-10 : 장바구니 aside 수정
   var cont_right = $(".cont_right").height();
   var headerHeight = $('#header').height();
   $(".cont_right").css({height:cont_right+"px"})
   $(window).scroll(function() {
	   var WScrollTop = $(window).scrollTop();
	   var val = ($(document).height() - $(window).height() - $("#footer").outerHeight());
	   if(WScrollTop > headerHeight && WScrollTop < val){
		   $(".cont_right").css({ top: (WScrollTop - headerHeight)+"px"})
	   }
	   else if (headerHeight > WScrollTop){
		   $(".cont_right").css({top:""})
	   }
   });

   if($(".addtocart").length > 0){ // 2021-06-25 추가 : 상품관련 하단 레이어 유무에 따른 totop 버튼 위치
	   var addtocartHeight = $(".addtocart").height();
   } else {
	   var addtocartHeight = 142;
   }

   $(window).scroll(function() {
	   var WScrollTop = $(window).scrollTop();
	   var val = ($(document).height() - $(window).height() - $("#footer").outerHeight());
	   //var addtocartHeight = $(".addtocart").height(); // 2021-06-25 제거

	   // 주문결제
	   if(WScrollTop > 110 && WScrollTop < val){
		   $(".payment_sheet").css({top:(WScrollTop-110)+"px", bottom:""})
	   }
	   else if(170 > WScrollTop){
		   $(".payment_sheet").css({top:"", bottom:""})
	   }
	   else {
		   $(".payment_sheet").css({top:"auto", bottom:0})
	   }

	   if(WScrollTop < val){
		   $(".addtocart").removeClass("floor")
	   }
	   else {
		   $(".addtocart").addClass("floor")
	   }

	   if(WScrollTop < val){
		   $(".totop").removeClass("floor").css({bottom:(addtocartHeight+50)+"px"})
           $(".btn-goto-store").removeClass("floor").css({bottom:(addtocartHeight+106)+"px"}) //2024-07-01 온/오프라인 정보 통합(지점안내 버튼 추가)
	   }
	   else {
		   $(".totop").addClass("floor")
		   $(".totop").css({bottom:((WScrollTop-val)+addtocartHeight+50)+"px"})
           $(".btn-goto-store").addClass("floor") //2024-07-01 온/오프라인 정보 통합(지점안내 버튼 추가)
           $(".btn-goto-store").css({bottom:((WScrollTop-val)+addtocartHeight+106)+"px"}) //2024-07-01 온/오프라인 정보 통합(지점안내 버튼 추가)
	   }

	   /* S: 2021-06-29 수정 : 주문가능시간 버튼 위치 관련 */
	   if(WScrollTop < val){
		   if(WScrollTop < 10){
			   $(".ordertime_btn").css({bottom:(addtocartHeight-100)+"px",  transition:'bottom 0.1s'})
		   } else {
			   // $(".ordertime_btn").css({bottom:(addtocartHeight+50)+"px"})
			   $(".ordertime_btn").css({bottom:(addtocartHeight-20)+"px"})
		   }
	   }
	   else {
		   $(".ordertime_btn").css({bottom:((WScrollTop-val)+120)+"px", transition:'inherit'})
	   }
	   /* E: 2021-06-29 수정 : 주문가능시간 버튼 위치 관련 */
   });
});
$(function(){

   // 카테고리 메뉴(상품 검색)
   var $cateMenu = $('.js-cateMenu > span');
   var $cateMenuDepth = $('.js-cateMenuDepth');

   var $cateMenuDepth = $('.js-cateMenuDepth > .check_depth_list');

   // click Event
   $cateMenu.each(function (index) {
	   $cateMenu.eq(index).find('button').on('click', function () {
		   depthMenus(index);
	   });
   });


   // depth
   function depthMenus(sidx) {
	   $cateMenuDepth.css('display', 'none');
	   $cateMenuDepth.eq(sidx).css('display', 'block');
   };
   // depthRemove
   function depthRemove(){
	   $cateMenuDepth.css('display', 'none');
   }

   //전체 카테고리 선택시 모든 하위 메뉴 제거
   var $totalCate = $('.js-total-cate');

   $totalCate.on('click', function(){
	   depthRemove();
   })


   // 210607 수정 검색 필터(브랜드) : 기본 닫힘삳태(관심브랜드에 따라 상태 달라짐)
   $(document).on("click", ".filter_wrap .btn_th", function(){


	   // 관심 브랜드가 체크 2021-06-29 제거
	   // if ($(this).hasClass("open")) {
	   // 	//console.log('close')
	   // 	$(this).removeClass("open").text("브랜드 +");
	   // 	$('.brand_area').find('.sort_wrap').css({
	   // 		'display': 'block',
	   // 		'height': '150px'
	   // 	});

	   // 	//순서높이(가나다,알파벳순)
	   // 	$('.brand_area').find('.sort_result').css({
	   // 		'height': '78px'
	   // 	});
	   // }
	   // else {


	   // 	$(this).addClass("open").text("브랜드 -");
	   // 	$('.brand_area').find('.sort_wrap').css({
	   // 		'display': 'block',
	   // 		'height': '250px',
	   // 	});

	   // 	//순서높이(가나다,알파벳순)
	   // 	$('.brand_area').find('.sort_result').css({
	   // 		'height': 'auto'
	   // 	});
	   // }

   })

   $('#sortbtn0_01 button').on('click', function(){
	   idx = $(this).parent().index()
	   console.log($(this).parent().index());

   });
   $('#sortbtn0_02 button').on('click', function(){
	   idx = $(this).parent().index()
	   console.log($(this).parent().index());

   });

   $(document).on("click", ".filter_wrap .filter_onoff button", function(){

	   if($(this).parents(".filter_wrap").hasClass("open")){
		   //console.log('닫기');
		   $(this).parents(".filter_wrap").removeClass("open");

	   }else{
		   //console.log('열기');
		   $(this).parents(".filter_wrap").addClass("open");
	   }
   });
})


$(function(){
   // 세트상품선택
//    var Productselecteditemswiper = new Swiper('.selectedproduct .selecteditem_swiper', {
// 	   slidesPerView: 'auto',
// 	   // freeMode: true,
// 	   spaceBetween: 24,
// 	   observer:true,
// 	   observeParents:true,
// 	   // S: 2021-09-16 lazy 추가
// 		lazyLoadingInPrevNext: true,
// 		lazyLoading: true,
// 		lazy: {
// 			loadPrevNext: true,
// 		},
// 		// E: 2021-09-16 lazy 추가
// 	   navigation: {
// 		   prevEl: ".selecteditem-prev",
// 		   nextEl: ".selecteditem-next",
// 	   },
//    });

   // 세트상품선택
   var Productselecteditemswiper = new Swiper('.setproduct .selecteditem_swiper', {
	   slidesPerView: 'auto',
	   // freeMode: true,
	   spaceBetween: 24,
	   observer:true,
	   observeParents:true,
	   navigation: {
		   prevEl: ".selecteditem-prev",
		   nextEl: ".selecteditem-next",
	   },
   });

})

$(function(){
   var $body = $("body"),
	   $win = $(window),
	   $open = $(".buybtn_cart.set"),
	   $close = $(".setproduct_close");
   $open.click(function(){
	   offsetY = window.pageYOffset;
	   $body.css({
		   "overflow":"hidden",
		   "position":"fixed",
		   "top":-offsetY + "px"
	   });
	   $(".setproduct").show().animate({right:0},200)
	   $(".selectedproduct").animate({right:0},200)
	   setTimeout(function(){
		   $("#container").css({zIndex:"100"})
	   },200)
   });

   $close.click(function(){
	   $body.css({
		   "overflow":"",
		   "position":"",
		   "top":""
	   });
	   $(".setproduct").animate({right:"-100%"},200)
	   $(".selectedproduct").animate({right:"-100%"},200)
	   setTimeout(function(){
		   $(".setproduct").hide()
	   }, 200)
	   $("#container").css({zIndex:""})
	   $win.scrollTop(offsetY);
   });
})
// 폰트 사이즈 자동 계산
// $(function(){
// 	if($(".pop_coupon .coupon162").length) {
// 		$(".pop_coupon .coupon162 strong").each(function(){
// 			var couponnumber = $(this).text().replace(/[,.]/g,"").length;
// 			var couponfontsize = $(this).css("fontSize").replace(/[^0-9]/g,'');
// 			if(couponnumber >= 6){
// 				$(this).css({fontSize:(couponfontsize-couponnumber)+"px"})
// 			}
// 		})
// 	}
// 	if($(".pop_coupon .benefit158").length) {
// 		$(".pop_coupon .benefit158 strong").each(function(){
// 			var benefitnumber = $(this).text().replace(/[,.]/g,"").length;
// 			var benefitfontsize = $(this).css("fontSize").replace(/[^0-9]/g,'');
// 			if(benefitnumber >= 6){
// 				$(this).css({fontSize:((benefitfontsize-2)-benefitnumber)+"px"})
// 				$(this).children("em").css({fontSize:(27-benefitnumber)+"px"})
// 			}
// 		})
// 	}
// })


$(function(){
   $(".mymenu ul li").click(function(){
	   $(this).siblings().removeClass("active");
	   $(this).addClass("active");

   });

   //로케이션(화면 줄일때 이슈)
   $(".location").wrap("<div class='location_all'></div>");
});

// 하트(좋아요)
$(function(){
   // var animation1 = bodymovin.loadAnimation({ // 2021-07-02 개발팀 function  수정으로 주석 처리
	// 	container: document.getElementById('heart01_2'),
	// 	path: '../../js/KO/heart2.html',/* 퍼블경로 ->  ../../js/M_KO/heart2.html , 개발 ../../html/M_KO/js/M_KO/heart2.html */
	// 	renderer: 'svg', // Required
	// 	loop: false, // Optional
	// 	autoplay: false // Optional,
	// });
	
	// $(".btn_like, .heart-motion.after_login").on("click", function () {
	// 	if($(this).hasClass('login_checked')){ //로그인 확인 후 애니메이션
	// 		//$(this).addClass('on')

	// 		animation1.stop();
	// 		animation1.play();

	// 		if (!$(this).hasClass("on")) {
	// 			$(this).addClass('on');
	// 			$(this).find(".motion_area").css({
	// 				"display": "block"
	// 			});
	// 			$(this).css({
	// 				"opacity": "1"
	// 			});
	// 			animation1.stop();
	// 			animation1.play();
	// 		} //else { 
	// 		//	$(this).removeClass('on');
	// 		// 	$(this).find(".motion_area").css({
	// 		// 		"display": "none"
	// 		// 	});
	// 		// }
	// 	}
	// });

   $(".sns_area_all .sns_event").click(function(){
	   $(this).addClass("on");

   });
})

// select_wrap(상품상세)
$(function () {
   var $selectWrap = $('.select_wrap > .selected');

   $selectWrap.on('click', function(){
	   $(this).parent().toggleClass('open');
   })
})


/* 2021-07-26 추가 : 비디오 다운로드 관련 = 인트로, 메인 키비주얼, 상단 영상 제외한 모든 비디오는 <video preload="none"> 스크롤 시 <video preload=""> : 2021-07-28 개발팀 기능 수정에 따른 기능 제거 */
// $(function(){
// 	if($('video').length > 0){
// 		$('video').each(function(){
// 			if($(this).offset().top < $(window).height()){
// 				if($(this).attr('auto_chk') == 'false'){
// 					auto_chk = false
// 				} else {
// 					auto_chk = true
// 				}
// 				$(this).attr({
// 					preload:'',
// 					autoplay:auto_chk
// 				});
// 			}
// 		});
// 		$(window).scroll(function(){
// 			$('video').each(function(){
// 				if($(this).attr('auto_chk') == 'false'){
// 					auto_chk = false
// 				} else {
// 					auto_chk = true
// 				}
// 				$(this).attr({
// 					preload:'',
// 					autoplay:auto_chk
// 				});
// 			});
// 		});
// 	}
// });

/* S: 2021-09-09 h.story slide 추가 */
$(document).ready(function(){
	if($('.hstyle_slide_con').length>0){
		var slider_hstyle = $('.hstyle_slide_con').bxSlider({

			controls:true,
			autoControls: false,
			auto:false,
			preloadImages:'all',
			pager:false
		});
	}
});
/* E: 2021-09-09 h.story slide 추가 */

/* S: 2021-09-16 image lazy 추가 */
$(document).ready(function(){
	// prd_list_new_lazy();
});
/* E: 2021-09-16 image lazy 추가 */

// S: 2021-09-16 lazy 추가
var prd_list_new_lazy = function () {
	$('.product_list img').lazyload({
		placeholder : '../../images/KO/common/noimg.png', // 로딩 이미지
		threshold: 0, // 접근 ~px 이전에 로딩을 시도한다.
		load : function(){ // 로딩시에 이벤트
			$(this).attr('alt',$(this).attr("data-srcset"));
		}
	});
}
// E: 2021-09-16 lazy 추가

/* S:2023-11-22 이지웰 해더 추가 */
var ezwelHeader = function () {
	if ($(".ezwel_header_wrap").length){
		$("body").addClass("ezwel_type");

        //스크롤시
        $(window).on("scroll", function(e) {
            var scrollTop = $(this).scrollTop();
            var ezwelHH = $(".ezwel_header_wrap").height();
			if (scrollTop >= ezwelHH) {
                $("body").addClass("ezwel_scroll");
                $("body").removeClass("ezwel_type");
            } else {
                $("body").removeClass("ezwel_scroll");
                $("body").addClass("ezwel_type");
            }
		});
	}
}
/* E:2023-11-22 이지웰 해더 추가 */

/* S:2023-11-22 이지웰 현대차 해더 추가 */
var hdcHeader = function () {
	if ($(".hdc_header_wrap").length){
		$("body").addClass("hdc_type");

        //스크롤시
        $(window).on("scroll", function(e) {
            var scrollTop = $(this).scrollTop();
            var hdcHH = $(".hdc_header_wrap").height();
			if (scrollTop >= hdcHH) {
                $("body").addClass("hdc_scroll");
                $("body").removeClass("hdc_type");
            } else {
                $("body").removeClass("hdc_scroll");
                $("body").addClass("hdc_type");
            }
		});
	}
}
/* E:2023-11-22 이지웰 현대차 해더 추가 */


/* 2023 개선 */
//2023 개선 cart
//20130713 수정
const _mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 500; // 웹에서 확인용으로 innewWidth 추가
// vh 셋팅
function setScreenSize() {
    const _vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${_vh}px`);
}
window.addEventListener('load', () => {
    //2023 cart
	// 20230804 수정
    // 모바일 vh 셋팅
    document.querySelector('.area-cart, .myhd, .od') && _mobile && setScreenSize();
    document.querySelector('.area-cart, .myhd, .od') && _mobile && window.addEventListener('resize', setScreenSize);
    // 장바구니 세트 swiper
    document.querySelector('.wrap-swiper__set') && Array.prototype.forEach.call(document.querySelectorAll('.wrap-swiper__set'), target => {
        setSwiper({target, viewNum: 4, gap: 16, navigation: true});
    });
    /* 퍼블 확인 용 */
    // 최저가 엿보기 20230713 수정
    document.querySelector('.payment-info__low-price.type-always .bottom-price__open button') && viewSlideCont({base: '.payment-info__low-price.type-always', btn: '.payment-info__low-price .bottom-price__open button', target: '.payment-info__low-price .bottom-price__detail'});
    // 최저가 엿보기 적립금 할인 20230713 수정
    // document.querySelector('.payment-info__low-price .bottom-price__item button') && viewSlideCont({base: '.payment-info__low-price .list-bottom-price.type-detail', btn: '.payment-info__low-price .bottom-price__item button', target: '.payment-info__low-price .list-bottom-price--detail'});
    document.querySelector('.wrap-payment-cart') && viewSlideCont({base: '.wrap-payment-cart .list-bottom-price.type-detail', btn: '.wrap-payment-cart .bottom-price__item button', target: '.wrap-payment-cart .list-bottom-price--detail'});
    //2024-07-11 회원가입 개선
    $('.desc_low_price .attention__tit button').click(function(){
        $('.desc_low_price .attention__tit').addClass('hide-tooltip');
    });
        

    // 툴팁 20230713 수정
    document.querySelector('.btn-tooltip') && Array.prototype.forEach.call(document.querySelectorAll('.btn-tooltip'), el => {
        viewTooltip(el);
    });
    // 최저가 엿보기 열기
    document.querySelector('[data-role*="open__"]') && Array.prototype.forEach.call(document.querySelectorAll('[data-role*="open__"]'), el => {
        openEl(el);
    });
    // 품절삭제 체크박스 20230802 수정
    _mobile && document.getElementById('chk-sold-out') && changeSoldOut(document.getElementById('chk-sold-out'));
    // 장바구니 이런상품 어때요 swiper ///*2024-06-10 ai추천 슬라이드 변경*/
    document.querySelector('.wrap-cart .wrap-swiper-list-product') && setSwiper({target: document.querySelector('.wrap-cart .wrap-swiper-list-product'), viewNum: 4, gap: 16, pagination: '.swiper-pagination', autoplay: 4000, navigation: true,});/*2024-06-23 ai 좌우버튼 추가*/
    // 주문창 여부
    document.querySelector('.wrap-payment-cart .payment-cart') && setPadBot(document.querySelector('.wrap-payment-cart .payment-cart').parentNode);
    
    
    //2023 order
    // select box mobile
    document.querySelector('.wrap-form__select select, .form_cont select, .wrap-select select, .temp_opt select') && Array.prototype.forEach.call(document.querySelectorAll('.wrap-form__select, .form_cont, .wrap-select, .temp_opt'), el => {
        if (!el.closest('.type-order-payment.cart__content')) {
            el.querySelector('select') && setSelectBox(el);
        }
    });
    // input 삭제 버튼
    document.querySelector('.wrap-form__input, .form_cont') && Array.prototype.forEach.call(document.querySelectorAll('.wrap-form__input, .form_cont'), el => {
        if (!el.closest('.type-order-payment.cart__content')) {
            // el.addEventListener('focusin', viewDel);
            el.addEventListener('input', disableDel);
            // el.addEventListener('focusout', removeDel);
        }
    });
    // 기간 카렌다 기본 날짜 넣기 20230802 추가
    document.querySelector('[data-role="calendarData"], [data-role="calendarDpat"]') && periodCalendar(document.querySelectorAll('[data-role="calendarData"], [data-role="calendarDpat"]'));
    // 날짜 1개 선택용 카렌다 20230802 수정
    document.querySelector('[data-role="calendar"]') && Array.prototype.forEach.call(document.querySelectorAll('[data-role="calendar"]'), inp => {
        const type = inp.dataset.calendarType;
        inp.addEventListener('click', function(e) {
            setCalendar({target: inp, type, multi: false});
        });
    });
    // 등록가이드 accordion 
    document.querySelector('[data-role*="accordion__"]') && Array.prototype.forEach.call(document.querySelectorAll('[data-role*="accordion__"]'), el => {
        viewSlideCont({base: el.closest('.wrap-tit'), btn: el, target: el.closest('.wrap-tit').querySelector('.guide-passport')});
    });
    // 레이어 탭 리스트, 팝업 열기 등 mutation observer
    checkLayer();
    // 모바일 마이현대 swiper
    document.querySelector('.my-situation-swiper') && setSwiper({target: document.querySelector('.my-situation-swiper'), gap: 30, pagination: '.swiper-pagination', navigation: true});
    document.querySelector('.my-suggestion-swiper') && setSwiper({target: document.querySelector('.my-suggestion-swiper'), viewNum: 'auto', gap: 12});
    document.querySelector('.wave-open.electronic-passport-wrap') && viewSlideCont({base: '.wave-open.electronic-passport-wrap', btn: '.electronic-passport', target: '.electronic-passport-content'});
    // accordion
    document.querySelector('[role=region]') && setAccordion();
    //주문결제 주문상품 더 보기 20230725 추가
    document.querySelector('[data-role=fold__wrap-order-list]') && foldOrderProduct(document.querySelector('[data-role=fold__wrap-order-list]'));
    // 주문결제 hpoint swiper
    document.querySelector('.swiper-h-point-card') && setSwiper({target: document.querySelector('.swiper-h-point-card'), gap: 30, pagination: '.swiper-pagination'});
    // 주문결제 hpoint swiper
    document.querySelector('.swiper-h-point-account') && setSwiper({target: document.querySelector('.swiper-h-point-account'), gap: 30, pagination: '.swiper-pagination'});
    // 모달창 닫기
    document.querySelector('.layer-dim') && Array.prototype.forEach.call(document.querySelectorAll('.layer-dim'), el => {
        closeModalSwipe({base: el, cls: '.box-bottom-float', checkBody: true});
    });
    // 우측 결제 금액 스크롤 이벤트
    document.querySelector('.cart__right') && scrollFloatRight('.cart__right');
    // 모바일 최종 결제금액 보기 아코디언
    document.querySelector('.payment_final_detail .folding .detail_tit.type-btn') && paymentFoldPos('.payment_final_detail .folding');
    
    
	//2023 mypage
	// 마이현대 메뉴 서브 메뉴 보기
    document.querySelector('.wrap-my-menu .list-my-menu') && viewMyMenu('.wrap-my-menu');
    // 롤링 알림 메세지
    document.querySelector('.my-grade__alram') && myAlram();
    // 1, 3, 6개월 기간 선택
    document.querySelector('.list-order__head.type-order-history [data-role="period-calendar"]') && Array.prototype.forEach.call(document.querySelectorAll('.list-order__head.type-order-history [data-role="period-calendar"]'), el => {
        changePeriodCalendar(el.closest('.list-order__head.type-order-history'));
    });
    // 마이현대 앵커이동 20230726 추가
    document.querySelector('.my-tab-menu-info') && anchorMove(document.querySelector('.my-tab-menu-info'));
    // 모바일 전자여권 숨기기
    document.querySelector('.wave-open.electronic-passport-wrap') && hidePassport('.wave-open.electronic-passport-wrap');
    // 마이현대 높이값
    document.querySelector('.my-od-tab-content') && setSameHgt('.my-od-tab-content');
    
    // 마이현대 이런상품 어때요 swiper ///*2024-06-10 ai추천 슬라이드 변경*/
    document.querySelector('.area-mypage .wrap-swiper-list-product') && setSwiper({target: document.querySelector('.area-mypage .wrap-swiper-list-product'), viewNum: 5, gap: 16, pagination: '.swiper-pagination', autoplay: 4000, navigation: true,});/*2024-06-23 ai 좌우버튼 추가*/


    //2023 product
    let productDetailTab = document.querySelectorAll('.product_tab ul li');
    let fileNameUrl = location.href.split('/')[(location.href.split('/').length-1)].split('.')[0];

    if (fileNameUrl === 'm_product_search_list' || fileNameUrl === 'm_product_search_list_popup') {
        document.querySelector('html').style.overflowX = 'hidden';
    }

    // 모바일 상품상세 swiper
    document.querySelector('.pd-thumblist-swiper .swiper-wrapper') && setSwiper({target: document.querySelector('.pd-thumblist-swiper'), gap: 30, pagination: '.swiper-pagination', navigation: true});
    document.querySelector('.pd-giftlist-swiper .swiper-wrapper') && setSwiper({target: '.pd-giftlist-swiper', gap: 12,viewNum: 1.25, breakPoint: {600: {slidesPerView: 1,},}});
    document.querySelector('.pd-reviewlist-swiper .swiper-wrapper') && setSwiper({target: document.querySelector('.pd-reviewlist-swiper'), viewNum: 4.5, gap: 8});
    document.querySelector('.wrap-swiper__gift .swiper-wrapper .swiper-wrapper') && setSwiper({
        target: '.wrap-swiper__gift', pagination: '.swiper-pagination', navigation:  true
    });
    document.querySelector('.pd-set-swiper') && Array.prototype.forEach.call(document.querySelectorAll('.pd-set-swiper'), target => {
        target.querySelector('.swiper-wrapper') && setSwiper({target, viewNum: 5, gap: 24, navigation: true});
    });
    document.querySelector('.pd-recommended-swiper') && Array.prototype.forEach.call(document.querySelectorAll('.pd-recommended-swiper'), target => {
        target.querySelector('.swiper-wrapper') && setSwiper({target, viewNum: 4, gap: 24, navigation: true});
    });
    document.querySelector('.pd-bestbrand-swiper') && Array.prototype.forEach.call(document.querySelectorAll('.pd-bestbrand-swiper'), target => {
        target.querySelector('.swiper-wrapper') && setSwiper({target, viewNum: 4, gap: 24, navigation: true});
    });
    // document.querySelector('.pd-ititems-swiper') && Array.prototype.forEach.call(document.querySelectorAll('.pd-ititems-swiper'), target => {
    //     target.querySelector('.swiper-wrapper') && setSwiper({target, viewNum: 1, gap: 0, pagination: '.swiper-pagination', slidesPerGroup: 5, slidesPerColumn: 5});//, autoplay: 4000
    // });
    //2024-06-10 ai추천 슬라이드 상품상세 추가
	let productDetailSwiper = new Swiper('.area-product-detail .pd-ititems-swiper', {
        // slidesPerView: 1,
		slidesPerColumn:4,
        // spaceBetween: 12,
        observer: true,
        observeParents: true,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
		pagination: {
			el:'.area-product-detail .pd-ititems-swiper .swiper-pagination'
		},
        navigation: {
            nextEl: '.area-product-detail .pd-ititems-swiper .swiper-button-next',
            prevEl: '.area-product-detail .pd-ititems-swiper .swiper-button-prev',
        },/*2024-06-23 ai 좌우버튼 추가*/
    });

    // 상품 디테일 내용 탭 활성화
    for (let i = 0; i < productDetailTab.length; i++) {
        productDetailTab[i].addEventListener('click', (e) => {
            for (let j = 0; j < productDetailTab.length; j++) {
                productDetailTab[j].classList.remove('active');
            }
            e.target.parentElement.parentElement.classList.add('active');
        })
    };
    // 평점비율
    document.querySelector('[data-role=rating-bar]') && Array.prototype.forEach.call(document.querySelectorAll('[data-role=rating-bar]'), el => ratingBar(el));
    // menu sticky
    _mobile && document.querySelector('.saerch-result-content') && menuSticky('.saerch-result-content');
    // filter 20231011 수정
    // document.querySelector('[data-filter="btn"]') && viewFlterDetail(document.querySelector('[data-filter="btn"]'));
    // show hide 제어
    document.querySelector('[data-control]') && Array.prototype.forEach.call(document.querySelectorAll('[data-control]'), el => {
        viewControlCheck(el);
    })
    _mobile && setScreenSize();
    _mobile && window.addEventListener('resize', setScreenSize);
    // 상품상세 sticky
    _mobile && document.querySelector('.product_tab.productdetail_tab') && anchorMove(document.querySelector('.product_tab.productdetail_tab'));
    // pc 상품상세 sticky
    !_mobile && document.querySelector('.product_tab.productdetail_tab') && anchorMovePc(document.querySelector('.product_tab.productdetail_tab'));
    // 브랜드 검색 sticky
    _mobile && document.querySelector('.search-tab-content-wrap .brand-category') && brandSticky();
    // 레이어 observe
    checkMutationObserve();
    // 레이어 observe
    // document.querySelector('.box-float-layer .guidance-area') && intSecObserver(document.querySelector('.box-float-layer .guidance-area'));
    // 검색 레이어
    _mobile && document.querySelector('.saerch-top.saerch-top-fix-no input[type=text]') && checkIntersectionOpserve(document.querySelector('.saerch-top.saerch-top-fix-no input[type=text]'));
    // 검색 레이어 초성 클릭 
    _mobile && document.querySelector('.kr-en-conversion-wrap .initial-sound') && checkIntersectionOpserve(document.querySelector('.kr-en-conversion-wrap .initial-sound'));
    // 검색 타입 전환
    document.querySelector('.productSaerchList .saerch-top') && changeCls({base: document.querySelector('.productSaerchList .saerch-top'), btn: '.btn-search-type', cls: 'type-hash'});
    // 필터 아이콘 클릭 노출
    // document.querySelector('.product-filter-btn') && changeCls({base: document.querySelector('.product-saerch-list-right'), btn: '.product-filter-btn', cls: 'active', rel: '.search-hashtag-result', dip: 'flex'});

    // 세트상품 하단 장바구니 영역 활성화
    document.querySelector('.payment-cart-wrap .min-down-btn') && cartBtnArea({base: '.payment-cart-wrap', btn: '.min-down-btn' , cls: 'off'});
    // 필터 checkbox
    document.querySelector('.saerch-result-content dl input[type=checkbox]') && Array.prototype.forEach.call(document.querySelectorAll('.saerch-result-content dl dt input[type=checkbox]'), el => {
        agreeCheckAll(el.closest('dl'));
    });
    // list_search
    let refreshBtn = document.querySelector('.refresh-btn');
    let categoryMenuOneDepth = document.querySelectorAll('.category-menu-one-depth ul li a');
    let categoryMenuTwoDepth = document.querySelectorAll('.category-menu-two-depth ul li a');
    let categoryMenuTwoDepthOpen = document.querySelectorAll('.category-menu-two-depth-open ul li a');

    // 카테고리 드롭다운 2depth 메뉴
    $('.category-menu-two-depth-btn').click(function() {
        const _scroll = window.scrollY;
        document.querySelector('.category-menu-two-depth-open').style.top = `${_scroll}px`;
        $('.category-menu-two-depth-open').stop().slideToggle(300, () => {
            $(this).parent().toggleClass('active');
        });
        $('.category-menu-two-depth-open, .category-menu-dimmed').toggleClass('active');
        

        if ($('.category-menu-two-depth-open').hasClass('active') === true) {
            scrollHide();
        } else {
            scrollShow();
        }

        if ($('.category-menu-dimmed').hasClass('active') === true) {
            scrollHide();
        } else {
            scrollShow();
        }
    });

    // 딤 배경 처리
    $('.category-menu-dimmed').click(function() {
        if ($(this).hasClass('active') === true) {
            $('.category-menu-two-depth-open').stop().slideUp(300, function() {
                $('.category-menu-two-depth-wrap').removeClass('active');
            });
            $('.category-menu-two-depth-open, .category-menu-dimmed').removeClass('active');
            scrollHide();
            // $('.category-menu-two-depth-open').stop().slideUp(300);
            // $(this).toggleClass('active');
            // $('.category-menu-two-depth-btn').toggleClass('active');
            // $('html').css('overflow-y', 'unset');
        }
    });

    // PC 카테고리 드롭다운 메뉴
    $('.product-category-menu > li:has(ul) > a').each(function() {
        $(this).html($(this).html() + '<img src="../../front/images/KO/common/n/icon_cr_down_arrow.svg" />');
    });
    $('.product-category-menu li > a').click(function() {
        let li = $(this).parent();
        let ul = li.parent()

        ul.find('li').removeClass('active');
        ul.find('ul').not(li.find('ul')).hide();
        li.children('ul').toggle();

        if (li.children('ul').is(':visible') || li.has('ul')) {
            li.addClass('active');
        }
    });

    // 카테고리 드롭다운 1depth 메뉴 활성화
    for (let i = 0; i < categoryMenuOneDepth.length; i++) {
        categoryMenuOneDepth[i].addEventListener('click', (e) => {
            for (let j = 0; j < categoryMenuOneDepth.length; j++) {
                categoryMenuOneDepth[j].classList.remove('active');
            }
            e.target.classList.add('active');
        })
    };

    // 카테고리 드롭다운 2depth 메뉴
    for (let i = 0; i < categoryMenuTwoDepth.length; i++) {
        categoryMenuTwoDepth[i].addEventListener('click', (e) => {
            for (let j = 0; j < categoryMenuTwoDepth.length; j++) {
                categoryMenuTwoDepth[j].classList.remove('active');
            }
            e.target.classList.add('active');
        })
    };

    // 카테고리 드롭다운 2depth 메뉴 활성화
    for (let i = 0; i < categoryMenuTwoDepthOpen.length; i++) {
        categoryMenuTwoDepthOpen[i].addEventListener('click', (e) => {
            for (let j = 0; j < categoryMenuTwoDepthOpen.length; j++) {
                categoryMenuTwoDepthOpen[j].classList.remove('active');
            }
            e.target.classList.add('active');
        })
    };

    // MO 추천 상품 슬라이드
    // let swiperSuggestion = new Swiper('.suggestion-prdouct-swiper', {
    //     slidesPerView: 'auto',
    //     spaceBetween: 12,
    //     observer: true,
    //     observeParents: true,
    //     // autoplay: {
    //     //     delay: 3500,
    //     //     disableOnInteraction: false,
    //     // },
    //     pagination: {
    //         el: '.swiper_pagination',
    //     },
    // });/* 2024-03-18 검색결과 ai 추천 영역 추가 및 수정 */

    // // PC 추천 상품 슬라이드 검색결과
    let pcSwiperSuggestion = new Swiper('.pc-suggestion-prdouct-swiper', {
        slidesPerView: 4,
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
    });/* 2024-03-18 검색결과 ai 추천 영역 추가 및 수정 *//*2024-06-10 ai추천 슬라이드 변경*//*2024-06-23 ai 좌우버튼 추가*/
    // filter sticky 20231011
    !_mobile && document.querySelector('.saerch-result-content .filter-info') && unitSticky({target: document.querySelector('.saerch-result-content .filter-info'), basis: ['#header', '.product-saerch-list-top'], base: '.product-list-content-wrap'});
    // filter
    document.querySelector('.saerch-result-content #filterOptionBtn') && viewFilter({base: document.querySelector('.saerch-result-content'), btn: document.querySelector('.saerch-result-content #filterOptionBtn')});
    document.querySelector('.saerch-result-content #filterOptionBtn2') && viewFilter({base: document.querySelector('.saerch-result-content'), btn: document.querySelector('.saerch-result-content #filterOptionBtn2')});
    // video btn - mo
    document.querySelector('.dubble_box .video_area') && Array.prototype.forEach.call(document.querySelectorAll('.dubble_box .video_area'), el => {
        setVideoBtn(el);
    });
    // video btn - pc
    document.querySelector('.pord_duble .img_video') && Array.prototype.forEach.call(document.querySelectorAll('.pord_duble .img_video'), el => {
        setVideoBtn(el);
    });
    // n_display
    // 혜택 탭 202310117 수정
    document.querySelector('.display_tab_item') && displayTabEvent();
    _mobile && document.querySelector('.search-round-data-wrap.bests_ico') && checkIntersectionOpserve(document.querySelector('.search-round-data-wrap.bests_ico'));
    document.querySelector('.search-round-data__bests-ico') && setRoundDataList('.search-round-data__bests-ico');
    document.querySelector('.benefits-topbanner-swiper') && benefitsBannerSwiper(document.querySelector('.benefits-topbanner-swiper'));
    document.querySelector('.specials_products_swiper--pc') && specialProductsSlider();
    document.querySelector('.specials_brands_swiper--pc') && specialBrandsSlider();
    document.querySelector('.specials_h-share_swiper--pc') && setHShareSlider();
    document.querySelector('.display_search_top') && setSearchClear();

    // 카테고리 드롭다운 1depth 메뉴
    $('.category-menu-one-depth-btn').click(function() {
        $('.category-menu-one-depth').stop().slideToggle(300);
        $('.category-menu-one-depth').toggleClass('active');
        $(this).toggleClass('active');

        if ($('.category-menu-one-depth').hasClass('active') === true) {
            scrollHide();
        } else {
            scrollShow();
        }
    });

    //베스트 브랜드 swiper
    let bestInnerSlides = document.querySelectorAll('.bests_brand_list--top li.bests_brand_item')
        bestInnerSlides.forEach((slide, index) => {    
        slide.classList.add(`bests_top-${index}`); 
        let swiper = new Swiper(`.bests_top-${index} .best_innerslide`, {
            slidesPerView: 2,
            spaceBetween: 24,
            observer: true,
            observeParents: true,
            navigation: {
                prevEl: `.bests_top-${index} .swiper-button-prev`,
                nextEl: `.bests_top-${index} .swiper-button-next`,
            },
        });
    });
    // pc 검색 swiper
    // document.querySelector('.pc-search-hit-swiper') && new Swiper('.pc-search-hit-swiper', {
    //     slidesPerView: 'auto',
    //     spaceBetween: 0,
    //     width: 404,
    //     observer: true,
    //     observeParents: true,
    //     pagination: {
    //         el: '.swiper-search-hit-pagination',
    //         clickable: true,
    //     },
    // });

    // // PC 인기 해시태그
    // document.querySelector('.pc-search-hit-hastag-swiper') && new Swiper('.pc-search-hit-hastag-swiper', {
    //     slidesPerView: 'auto',
    //     spaceBetween: 0,
    //     width: 404,
    //     observer: true,
    //     observeParents: true,
    //     pagination: {
    //         el: '.swiper-search-hit-hastag-pagination',
    //         clickable: true,
    //     },
    // });
    // MO 세일 : 특가 상품 슬라이드
    document.querySelector('.benefits-topbanner-swiper_mo') && Array.prototype.forEach.call(document.querySelectorAll('.benefits-topbanner-swiper_mo'), el => {
        el.querySelector('.swiper-wrapper') && setSwiper({target: el, autoplay: 5000, pagination: '.swiper-pagination', paginationType: 'fraction'});
    });
    // MO 세일 : 특가 상품 슬라이드
    document.querySelector('.specials_products_swiper_mo') && Array.prototype.forEach.call(document.querySelectorAll('.specials_products_swiper_mo'), el => {
        el.querySelectorAll('.swiper-slide').length > 2 && el.querySelector('.swiper-wrapper') && setSwiper({target: el, autoplay: 5000, gap: 8, offset: 20, viewNum: 'auto'});
        el.querySelectorAll('.swiper-slide').length <= 2 && el.classList.add('no-swiper')
    });
    // MO 세일 : 특가 브랜드 슬라이드
    document.querySelector('.specials_brands_swiper_mo') && Array.prototype.forEach.call(document.querySelectorAll('.specials_brands_swiper_mo'), el => {
        el.querySelectorAll('.swiper-slide').length > 2 && el.querySelector(' .swiper-wrapper') && setSwiper({target: el, autoplay: 5000, gap: 8, offset: 20, viewNum: 'auto'});
        el.querySelectorAll('.swiper-slide').length <= 2 && el.classList.add('no-swiper')
    });
    // MO 세일 : h.share 슬라이드
    let swiperSpecialsHShare = new Swiper('.specials_h-share_swiper_mo', {
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakPoint: {
            600: {
                slidesPerView: 2,
            },
        }
    });

    document.body.removeAttribute('style');

    //세일상품 둘러보기 할인율 클릭효과
    document.querySelector('.search-round-data') && Array.prototype.forEach.call(document.querySelectorAll('.search-round-data'), el => {
        searchRoundBtn(el);
    });
    // main personal
    document.querySelector('.personal') && _mobile && setScreenSize();
    document.querySelector('.personal') && _mobile && window.addEventListener('resize', setScreenSize);
    // document.querySelector('.personal .benefits-slider') && mainBenefit();
    document.querySelector('.personal .ps_main_wrap') && mainScrollBenefit();
    // benefit swiper
    document.querySelector('.benefits-slider') && swiperBenefit('.benefits-slider');
    // 취향 선택
    document.querySelector("[data-role=curation]") && Array.prototype.forEach.call(document.querySelectorAll("[data-role=curation]"), el => {
        checkCuration(el);
    });
    // pc 메인 혜택 우측 float 메뉴
    document.querySelector('.float-benefit') && floatBenefitBtn(document.querySelector('.float-benefit'));
    // 오프라인 브랜드 이미지 확대 축소
    document.querySelector('.offline-brand-img') && offlineBrandZoom(document.querySelector('.offline-brand-img'))
    // 카테고리 펼침
    document.querySelector('.category-menu-one-depth-btn') && viewTopCategory(document.querySelector('.category-menu-one-depth-btn'));
    // pc main 무한롤링
    document.querySelector('[role="infinity"]') && Array.prototype.forEach.call(document.querySelectorAll('[role="infinity"]'), el => {
        infinityRolling(el);
    })
    // 레이어 팝업 창
    // document.querySelector('.box-float-layer .guidance-area') && Array.prototype.forEach.call(document.querySelectorAll('.box-float-layer .guidance-area'), el => {
    //     setLayHgt(el);
    // });
    document.querySelector('.box-float-layer .guidance-area') && Array.prototype.forEach.call(document.querySelectorAll('.box-float-layer .guidance-area'), el => {
        checkIntersectionOpserve(el);
    })
    // 상품 상세 더보기
    document.querySelector('.btn_more_box .btn_prodmore') && Array.prototype.forEach.call(document.querySelectorAll('.btn_more_box .btn_prodmore'), el => {
        openProdctDetail(el);
    });
    // h.share 그래프
    document.querySelector('.product__co-buying') && setShareGraph('.product__co-buying');
    // 상품상세 포토리뷰 swiper
    document.querySelector('.swiper-detail-photo') && Array.prototype.forEach.call(document.querySelectorAll('.swiper-detail-photo'), el => {
        new Swiper(el, {
			slidesPerView: 1,
			pagination: {
				el: '.pagination-fraction',
				type:'fraction'
			}
		})
    })
    _mobile && document.querySelector('.saerch-result-content .list-product__searchlist') && resetPosSearchResult(document.querySelector('.saerch-result-content .list-product__searchlist'));
    
    ezwelHeader(); //2023-12-27 이지웰 헤더
    hdcHeader(); //2024-01-11 이지웰 현대차 해더 추가
    levelExpect(); //2024-05-29 예상등급 추가(마이현대 메인)
    floatBenefitColor(); //2024-01-10 큐레이션 숨겨진 혜택 배경색 추가
    fileAtached(); //2024-04-02 입점 및 제휴문의
    listContact(); //2024-04-02 입점 및 제휴문의

    document.querySelector('.sale__first-deal') && setSaleFirstDealSlider(); // 2024-05-14 첫구매딜 추가
});
//addEventListener 끝

// 슬라이드 다운
function viewSlideCont({base, btn, target}) {
    const _base = typeof base === 'string' ? document.querySelector(base) : base;
    const _target = typeof target == 'string' ? document.querySelector(target) : target;
    const _btn = typeof btn === 'string' ? document.querySelector(btn) : btn;
    _btn && _btn.addEventListener('click', () => {
        if (!_base.classList.contains('active')) {
            _btn.setAttribute('aria-expanded', true);
            elSlideDown({base: _base, btn: _btn, target: _target, cls: 'active', execute: true, is: 'ing'});
        } else {
            _btn.setAttribute('aria-expanded', false);
            elSlideDown({base: _base, btn: _btn, target: _target, cls: 'active', execute: false, is: 'ing'});
        }
    })
}
// 툴팁 20230713 수정
function viewTooltip(btn) {
    const _target = btn.parentNode.querySelector('.wrap-tooltip__content');
    btn.addEventListener('click', () => {
        const _top = btn.getBoundingClientRect().top;
        const _left = btn.getBoundingClientRect().left;
        // 레이어 경우 top 사용 안함
        if (!btn.closest('.layer-dim')) {
            _target.style.top = `${_top + 30}px`;
        }
        // 모바일, 레이어 경우 left 사용 안함
        if (!_mobile && !btn.closest('.layer-dim')) {
            _target.style.left = `${_left}px`;
        }
        _target.classList.add('active');
    });
    _target.querySelector('.btn-close').addEventListener('click', () => {
        _target.classList.remove('active');
    });
    window.addEventListener('scroll', () => {
        //20231205
		_target.getAttribute('style') && _target.removeAttribute('style');
        if (!_target.classList.contains('active')) {
          return;
      }
      _target.classList.remove('active');
    })
}
// body freeze
function bodyFreeze(freeze) {
    const scrollFreeze = () => {
        document.body.style.overscrollBehaviorY = 'contains';
        document.querySelector('html').style.height = '100%';
        document.querySelector('html').style.overflow = 'hidden';
    }
    if (!freeze) {
        document.body.removeAttribute('style');
        document.querySelector('html').removeAttribute('style');
        document.body.classList.remove('is-dimmed');
    } else {
        scrollFreeze();
        document.body.classList.add('is-dimmed');
    }
}
// 상품 삭제 팝업
function deleteConfirm(txt) {
    bodyFreeze('freeze');
    const _layer = document.createElement('div');
    _layer.className = 'layer-dim';
    _layer.innerHTML = `
        <div class="box-confirm-layer type-delete active">
            <div class="txt-cont">${txt ? txt : '상품을 삭제하시겠습니까'}</div>
            <ul class="list-btn">
                <li><button type="button" class="btn-cancle">취소</button></li>
                <li><button type="button" class="btn-confirm">확인</button></li>
            </ul>
        </div>
    `;
    document.body.append(_layer);

    _layer.querySelector('.btn-cancle').addEventListener('click', function() {
        bodyFreeze();
        _layer.remove();
    });
    _layer.querySelector('.btn-confirm').addEventListener('click', function() {
        bodyFreeze();
        _layer.remove();
        viewConfirmTxt('삭제되었습니다.'); // 삭제 확인 문구
    })
    _layer.addEventListener('click', (e) => {
        const _cls = _layer.firstElementChild.getAttribute('class').replace('active', '').trim().split(' ').join('.');
        const _target = e.target.closest(`.${_cls}`);
        if (document.body.classList.contains('is-dimmed') && !_target) {
            bodyFreeze();
            _layer.remove();
        }
    })
}
// 확인메세지
function viewConfirmTxt(txt) {
    document.querySelector('.txt-confirm-message') && document.querySelector('.txt-confirm-message').remove(); // 20231205
    const _txt = document.createElement('div');
    _txt.className = 'txt-confirm-message';
    _txt.innerHTML = txt;
    const _hasDim = document.body.classList.contains('is-dimmed');
    document.body.append(_txt);
    setTimeout(() => {
        !_hasDim && bodyFreeze();
        _txt.remove();
    }, 1500);
}
// data-role 버튼 열기 20230713 수정
function openEl(el) {
    if (!el.dataset) {
        return;
    }
    const _dataSet = el.dataset.role.replace('open__', '');
    const _targetName = ctx_shop+`/${_dataSet}`;

    el.addEventListener('click', e => {
        e.preventDefault();
        fetch(_targetName)
            .then(res => {
                if (!res.ok){
                    throw new Error;
                }
                return res.text()
            })
            .then(res => {
                makeLayer(res);
            })
            .catch(err => {
                console.log(err);
            })
        }
    );
    // 팝업 높이값 만들기
    const setHgt = (layer) => {
        const _hgt = window.innerHeight;
        const _child = layer.querySelector('.download-coupon') ? layer.querySelector('.download-coupon') : layer.firstElementChild;
        const _baseHgt = 60;
        let _excHgt = 0;
        if (_child.clientHeight === 0 || !layer.querySelector('.area-scroll')) {
            return;
        }
        
        const _scrolls = layer.querySelectorAll('.area-scroll');
        const _setHgtTargets = Array.prototype.map.call(_scrolls, el => {
            return el.parentNode.classList.contains('download-coupon') ? el.parentNode : el;
        });
        const _scrollHgt = _setHgtTargets[0].scrollHeight;

        if ((_hgt - _baseHgt) < _child.clientHeight) {
            _child.style.transitionDuration = '0s';
            _child.style.height = `${_hgt - _baseHgt}px`;
        }
        
        _excHgt = Array.prototype.reduce.call(layer.querySelectorAll('[data-scroll="exc"]'), (acc, el) => {
            return acc += el.clientHeight + parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
        }, 0);
        const _layerExc = parseInt(window.getComputedStyle(layer.firstElementChild).getPropertyValue('padding-top')) + parseInt(window.getComputedStyle(layer.firstElementChild).getPropertyValue('padding-bottom'));
        const _scrollExc = parseInt(window.getComputedStyle(_setHgtTargets[0]).getPropertyValue('margin-top'));
        const _computedHgt = _hgt - _baseHgt - _excHgt - _scrollExc - _layerExc;
        
        if (layer.querySelector('[data-scroll="exc"]') && _computedHgt <= _child.clientHeight) {
            Array.prototype.forEach.call(_setHgtTargets, el => {
                // 20230802 수정
                if (_computedHgt > _scrollHgt && !layer.querySelector('.wrap-search-sch')) {
                    el.style.height = `${_scrollHgt}px`;
                } else {
                    el.style.height = `${_computedHgt}px`;
                }
            })
        }
        // Array.prototype.forEach.call(_setHgtTargets, el => {
        //     if (el.clientHeight >= el.scrollHeight) {
        //         el.style.height = `${el.clientHeight}px`
        //         el.classList.add('no-scroll');
        //     }
        // });
        // 수량 변경 레이어 area-scroll 높이 설정
        /* if (layer.querySelector('.wrap-option-change')) {
            layer.querySelector('.area-scroll').style.height = `${_hgt - 605}px`;
        } */
    }
    // mo 팝업 높이값 만들기 20230725 추가
    const setMoHgt = (layer) => {
        const _hgt = window.innerHeight;
        const _child = layer.querySelector('.download-coupon') ? layer.querySelector('.download-coupon') : layer.firstElementChild;
        const _baseHgt = 44;
        let _excHgt = 0;
        if (_child.clientHeight === 0 || !layer.querySelector('.area-scroll')) {
            return;
        }
        
        const _scrolls = layer.querySelectorAll('.area-scroll');
        const _setHgtTargets = Array.prototype.map.call(_scrolls, el => {
            return el.parentNode.classList.contains('download-coupon') ? el.parentNode : el;
        });
        const _scrollHgt = _setHgtTargets[0].scrollHeight;

        if ((_hgt - _baseHgt) < _child.clientHeight) {
            _child.style.transitionDuration = '0s';
            _child.style.height = `${_hgt - _baseHgt}px`;
        }
        
        _excHgt = Array.prototype.reduce.call(layer.querySelectorAll('[data-scroll="exc"]'), (acc, el) => {
            return acc += el.clientHeight + parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
        }, 0);
        const _layerExc = parseInt(window.getComputedStyle(layer.firstElementChild).getPropertyValue('padding-top')) + parseInt(window.getComputedStyle(layer.firstElementChild).getPropertyValue('padding-bottom'));
        const _scrollExc = parseInt(window.getComputedStyle(_setHgtTargets[0]).getPropertyValue('margin-top'));
        const _computedHgt = _hgt - _baseHgt - _excHgt - _scrollExc - _layerExc - 12;
        
        if (layer.querySelector('[data-scroll="exc"]') && _computedHgt <= _child.clientHeight) {
            Array.prototype.forEach.call(_setHgtTargets, el => {
                if (_computedHgt > _scrollHgt && !layer.querySelector('.wrap-search-sch')) {
                    el.style.height = `${_scrollHgt}px`;
                } else {
                    el.style.height = `${_computedHgt}px`;
                }
            })
        }
    }
    // 레이어 만들기
    const makeLayer = (res) => {
        document.querySelector('.layer-dim') && document.querySelector('.layer-dim').remove(); //20230726 수정
        const _layer = document.createElement('div');
        _layer.className = 'layer-dim';
        _layer.innerHTML = res;
        $('body').append(_layer); // 20230720 수정
        // document.body.append(_layer);
        setTimeout(() => {
            _layer.querySelector('div').classList.add('active');
            const _dim = _layer.querySelector('[data-dim]') && _layer.querySelector('[data-dim]').dataset.dim;
            bodyFreeze(`${_dim ? 'freeze' : ''}`);
            // 레이어 높이값 설정
            !_mobile && setHgt(_layer);
            _mobile && setMoHgt(_layer); //20230725 수정
        }, 100);
        // 최저가 엿보기
        document.querySelector('.wrap-payment-cart .bottom-price__detail') && viewSlideCont({base: '.wrap-payment-cart .bottom-price__detail', btn: '.wrap-payment-cart .bottom-price__open button'});
        document.querySelector('.wrap-payment-cart .list-bottom-price') && viewSlideCont({base: '.wrap-payment-cart .list-bottom-price .list-bottom-price--detail', btn: '.wrap-payment-cart .list-bottom-price > li .bottom-price__item button'});
        // 레이어 닫기
        const closeLayer = () => {
            _layer.querySelector('.active') && _layer.querySelector('.active').classList.remove('active');
            setTimeout(() => {
                bodyFreeze();
                _layer.remove();
            }, 10);
        }
        // 닫기 버튼 레이어 닫기
        _layer.querySelector('.btn-close-layer') && _layer.querySelector('.btn-close-layer').addEventListener('click', () => closeLayer())
        _layer.querySelector('[data-close="closeLayer"]') && _layer.querySelector('[data-close="closeLayer"]').addEventListener('click', () => closeLayer());
        // 딤 클릭 레이어 닫기
        _layer.addEventListener('click', (e) => {
            if (_layer.querySelector('.box-float-layer.type-close') || e.target.nodeName === 'INPUT' || e.target.nodeName === 'BUTTON' || e.target.nodeName === 'A' || e.target.nodeName === 'SELECT' || !_layer.firstElementChild.getAttribute('class')) {
                return;
            }
            const _cls = _layer.firstElementChild.getAttribute('class').replace('active', '').trim().split(' ').join('.');
            const _target = e.target.closest(`.${_cls}`);
            if (!e.target.classList.contains('type-del') && document.body.classList.contains('is-dimmed') && !_target) {
                closeLayer()
            }
        })
    }
}
// 모달 show/hide 20230724 추가 ex) viewInnerModal('#testId')
function viewInnerModal(id) {
    if (!$(id)) {
        return;
    }
    const _dim = $(`${id} [data-dim]`) && $(`${id} [data-dim]`).data('dim');
    
    const closeThisModal = () => {
        $(id).hide(
            {
                duration: 100,
                done: function() {
                    bodyFreeze();
                }
            }
        );
    }

    $('.btn-close-layer') && $('.btn-close-layer').on('click ', function() {
        closeThisModal();
        $(this).off('click');
    });

    if($(id).css("display") == "none"){
        $(id).show({
            duration: 100,
            done: function() {
                bodyFreeze(`${_dim ? 'freeze' : ''}`);
            }
        });
    }else{
        closeThisModal();
    }
}

//popup 오픈
function openEl2(data) {
    if(!data){
        return;
    }
    // 팝업 높이값 만들기
    const setHgt = (layer) => {
        const _hgt = window.innerHeight;
        const _child = layer.querySelector('.download-coupon') ? layer.querySelector('.download-coupon') : layer.firstElementChild;
        const _baseHgt = 60;
        let _excHgt = 0;
        if (_child.clientHeight === 0 || !layer.querySelector('.area-scroll')) {
            return;
        }

        const _scrolls = layer.querySelectorAll('.area-scroll');
        const _setHgtTargets = Array.prototype.map.call(_scrolls, el => {
            return el.parentNode.classList.contains('download-coupon') ? el.parentNode : el;
        });
        const _scrollHgt = _setHgtTargets[0].scrollHeight;

        if ((_hgt - _baseHgt) < _child.clientHeight) {
            _child.style.transitionDuration = '0s';
            _child.style.height = `${_hgt - _baseHgt}px`;
        }

        _excHgt = Array.prototype.reduce.call(layer.querySelectorAll('[data-scroll="exc"]'), (acc, el) => {
            return acc += el.clientHeight + parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
        }, 0);
        const _layerExc = parseInt(window.getComputedStyle(layer.firstElementChild).getPropertyValue('padding-top')) + parseInt(window.getComputedStyle(layer.firstElementChild).getPropertyValue('padding-bottom'));
        const _scrollExc = parseInt(window.getComputedStyle(_setHgtTargets[0]).getPropertyValue('margin-top'));
        const _computedHgt = _hgt - _baseHgt - _excHgt - _scrollExc - _layerExc;

        if (layer.querySelector('[data-scroll="exc"]') && _computedHgt <= _child.clientHeight) {
            Array.prototype.forEach.call(_setHgtTargets, el => {
                if (_computedHgt > _scrollHgt && !layer.querySelector('.wrap-search-sch')) {
                    el.style.height = `${_scrollHgt}px`;
                } else {
                    el.style.height = `${_computedHgt}px`;
                }
            })
        } else {
            if (layer.querySelector('.download-coupon')) {
                layer.querySelector('.download-coupon').style.height = _child.clientHeight < 400 ? '400px' : `${_child.clientHeight}px`; //20231206
            }
        }
        // Array.prototype.forEach.call(_setHgtTargets, el => {
        //     if (el.clientHeight >= el.scrollHeight) {
        //         el.style.height = `${el.clientHeight}px`
        //         el.classList.add('no-scroll');
        //     }
        // });
        // 수량 변경 레이어 area-scroll 높이 설정
        /* if (layer.querySelector('.wrap-option-change')) {
            layer.querySelector('.area-scroll').style.height = `${_hgt - 605}px`;
        } */
    }
    // 레이어 만들기
    const makeLayer = (res) => {
        const _layer = document.createElement('div');
        _layer.className = 'layer-dim';
        $(_layer).html(res);
        $("body").append(_layer);
        setTimeout(() => {
            _layer.querySelector('div').classList.add('active');
            const _dim = _layer.querySelector('[data-dim]') && _layer.querySelector('[data-dim]').dataset.dim;
            bodyFreeze(`${_dim ? 'freeze' : ''}`);
            // 레이어 높이값 설정
            !_mobile && setHgt(_layer);
        }, 100);
        // 최저가 엿보기
        document.querySelector('.wrap-payment-cart .bottom-price__detail') && viewSlideCont({base: '.wrap-payment-cart .bottom-price__detail', btn: '.wrap-payment-cart .bottom-price__open button'});
        document.querySelector('.wrap-payment-cart .list-bottom-price') && viewSlideCont({base: '.wrap-payment-cart .list-bottom-price .list-bottom-price--detail', btn: '.wrap-payment-cart .list-bottom-price > li .bottom-price__item button'});
        // 레이어 닫기
        const closeLayer = () => {
            _layer.querySelector('.active') && _layer.querySelector('.active').classList.remove('active');
            setTimeout(() => {
                bodyFreeze();
                _layer.remove();
                if(tmpHtmlDiv){closeElPop();}
            }, 10);
        }
        // 닫기 버튼 레이어 닫기
        _layer.querySelector('.btn-close-layer') && _layer.querySelector('.btn-close-layer').addEventListener('click', () => closeLayer())
        _layer.querySelector('[data-close="closeLayer"]') && _layer.querySelector('[data-close="closeLayer"]').addEventListener('click', () => closeLayer());
        // 딤 클릭 레이어 닫기
        _layer.addEventListener('click', (e) => {
            if (_layer.querySelector('.box-float-layer.type-close') || e.target.nodeName === 'INPUT' || e.target.nodeName === 'BUTTON' || e.target.nodeName === 'A' || e.target.nodeName === 'SELECT' || !_layer.firstElementChild.getAttribute('class')) {
                return;
            }
            const _cls = _layer.firstElementChild.getAttribute('class').replace('active', '').trim().split(' ').join('.');
            const _target = e.target.closest(`.${_cls}`);
            if (document.body.classList.contains('is-dimmed') && !_target) {
                closeLayer()
            }
        })
    }
    makeLayer(data);
}

function closeEl(){
    bodyFreeze();
    $(".layer-dim").remove();
    if(tmpHtmlDiv){closeElPop();}
}

// 생성된 DIV 영역 팝업
var tmpHtmlDiv;
function showElPop(data){
    if(data){
        tmpHtmlDiv = data;
        const delTargetId = $(data).attr('id');
        $("#"+delTargetId).remove();

        openEl2(tmpHtmlDiv);
    }
}

function closeElPop(){
    if(tmpHtmlDiv){
        $("body").append(tmpHtmlDiv);
        tmpHtmlDiv = "";
    }
}
// 품절삭제 체크박스 20230726 추가
function changeSoldOut(inp) {
    const _target = document.querySelector('.btn-del__sold-out');
    if (!_target) {
        return;
    }
    inp.addEventListener('change', (e) => {
        if (inp.checked) {
            _target.innerHTML = '선택삭제';
        } else {
            _target.innerHTML = '품절삭제';
        }
    })
}
// 주문창 여부
function setPadBot(target) {
    const _hgt = target.clientHeight + 20;
    const _base = document.querySelector('.area-cart') ? document.querySelector('.area-cart') : document.querySelector('.wrap-cart');
    if (!_base) {
        return;
    }
    _base.style.paddingBottom = `${_hgt}px`;
}

//2023 개선 order
// 레이어 탭 리스트, 팝업 열기 등 mutation observer
function checkLayer() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach( mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach( el => {
                    if (!el.querySelector) {
                        return;
                    }
                    // 탭 적용
                    if (el.querySelector('[role=tablist]')) {
                        const _cls = `.${el.querySelector('.box-float-layer').className.split(' ').join('.')}`;
                        setTab(_cls);
                    }
                    // 팝업 열기
                    if (el.querySelector('[data-role*="open__"]')) {
                        openEl(el.querySelector('[data-role*="open__"]'));
                    }
                    // 기간 카렌다 기본 날짜 넣기 20230802 추가
                    if (el.querySelector('[data-role="calendarData"], [data-role="calendarDpat"]')) {
                        periodCalendar(el.querySelectorAll('[data-role="calendarData"], [data-role="calendarDpat"]'));
                    }
                    // calendaer 20230802 수정
                    if (el.querySelector('.choice-date-single')) {
                        Array.prototype.forEach.call(el.querySelectorAll('[data-role="calendar"]'), inp => {
                            const type = inp.dataset.calendarType;
                            inp.addEventListener('click', function(e) {
                                setCalendar({target: inp, type, multi: false});
                            });
                        });
                    }
                    // 1, 3, 6개월 기간 선택
                    if (el.querySelector('[data-role="period-calendar"]')) {
                        Array.prototype.forEach.call(el.querySelectorAll('.list-order__head.type-order-history [data-role="period-calendar"]'), el => {
                            changePeriodCalendar(el.closest('.list-order__head.type-order-history'));
                        });
                    }
                    // tooltip
                    if (el.querySelector('.btn-tooltip')) {
                        Array.prototype.forEach.call(el.querySelectorAll('.btn-tooltip'), el => {
                            viewTooltip(el);
                        });
                    }
                    // accordion
                    if (el.querySelector('[aria-expanded]')) {
                        if (!el.querySelector('[role=region]')) {
                            return;
                        }
                        const cls = el.querySelector('[role=region]').className.split(' ').filter(el => el !== '').join('.'); //20231205
                        setAccordion(`.${cls}`);
                    }
                    // input 삭제 버튼
                    if (el.querySelector('.wrap-form__input, .form_cont') && !document.querySelector('body').querySelector('.type-order-payment.cart__content')){ //20231206
                        Array.prototype.forEach.call(document.querySelectorAll('.wrap-form__input, .form_cont'), el => {
                            // el.addEventListener('focusin', viewDel);
                            el.addEventListener('input', disableDel);
                            // el.addEventListener('focusout', removeDel);
                        });
                    }
                    // select box 
                    if (el.querySelector('.wrap-form__select select, .form_cont select, .wrap-select select, .temp_opt select')) {
                        Array.prototype.forEach.call(document.querySelectorAll('.wrap-form__select, .form_cont, .wrap-select, .temp_opt'), el => {
                            if (!el.closest('.type-order-payment.cart__content')) {
                                el.querySelector('select') && setSelectBox(el);
                            }
                        });
                    }
                    // modal close
                    // 모달창 닫기
                    if (el.classList.contains('layer-dim')) {
                        closeModalSwipe({base: el, cls: '.box-bottom-float', checkBody: true});
                    }
                });
            }
        });
    });
      
      // observe everything except attributes
      observer.observe(document.body, {
        childList: true, // observe direct children
        subtree: true, // and lower descendants too
        characterDataOldValue: true // pass old data to callback
      });
    
}
// 날짜 변환
function changeValDate(val) {
    const _join = val.split('-').map(num => parseInt(num)).join('/');
    return `${_join} 00:00:00`;
}
// 날짜 선택용 카렌다 만들기 //20230803 수정
function setCalendar({target, type, multi}) {
    if (document.querySelector('.wrap-calendar')) {
        return;
    }
    document.querySelector('.area-calendar') && document.querySelector('.area-calendar').remove();
    let _calendar = '';
    const _html = `
    ${_mobile ? '<div class="wrap-calendar__inner"><div class="btn-close-layer type-bar"><button type="button" class="conditiontton">레이어 닫기</button></div>' : ''}
    ${_mobile && target.title ? `<h3 class="tit-calendar">${target.title}</h3>` : ''}
    <div class="area-calendar">
        <div class="area-year-month">
            <p class="btn-prev"><button type="button">이전 달</button></p>
            <p class="wrap-year-month"><span class="txt-year"></span><span class="txt-month"></span></p>
            <p class="btn-next"><button type="button">다음 달</button></p>
        </div>
        <div class="wrap-calendar-day">
            <div class="wrap-week">
                <p class="day-sunday">일</p>
                <p class="day-week">월</p>
                <p class="day-week">화</p>
                <p class="day-week">수</p>
                <p class="day-week">목</p>
                <p class="day-week">금</p>
                <p class="day-saturday">토</p>
            </div>
            <div class="wrap-day">
            </div>
        </div>
    </div>
    ${_mobile ? `<button type="button" class="btn-square type-full type-dark-1 size-1">적용</button></div>` : ''}
    `;
    const _alertTxt = `<div class="box-confirm-layer m_popup_renew">
            <div class="confirm_group">
                <div class="confirm_tit">
                    <p>날짜를 선택해 주세요.</p>
                </div>
            </div>
            <div class="float_btn">
                <ul class="list-btn">
                    <li><button type="button" class="btn_confirm">확인</button></li>
                </ul>
            </div>
        </div>`;

    const _period = target.dataset.period;
    const _last = target.closest('[data-role="period-calendar"]') && target.closest('[data-role="period-calendar"]').querySelector('[data-today="0"]');
    const _base = target.parentNode;
    const _value = target.parentNode.querySelector('input').value;
    const rToday = new Date();
    rToday.setHours(0, 0, 0, 0);
    let today = new Date();
    today = type === 'birthday' ? new Date(today.getFullYear() - 19,0,1) : !!_value && _period !== 'end' && new Date(_value) <= today ? new Date(changeValDate(_value)) : today;
    const _selectedDay = !multi ?  {start: ''} : {start: '', end: ''};
    const scheduledDay = _value && new Date(changeValDate(_value)) <= today && _period === 'start' ? new Date(changeValDate(_last.value)) : today;
    const valDay = _value ? new Date(changeValDate(_value)) : today;
    let curDay = _value ? new Date(changeValDate(_value)) : today; // value 있으면 value 날짜로 아니면 현재 날짜

    // 카렌다 만들기
    const makeCalendar = () => {
        // _calendar && _calendar.querySelector('.area-calendar') && _calendar.querySelector('.area-calendar').remove();
        const firstDay = new Date(curDay.getFullYear(), curDay.getMonth(), 1);
        const lastDay = new Date(curDay.getFullYear(), curDay.getMonth() + 1, 0);
        const top = target.getBoundingClientRect().top + target.clientHeight;
        const left = _mobile ? '' : target.getBoundingClientRect().left;
        
        _calendar = _calendar ? _calendar : document.createElement('div');
        _calendar.innerHTML = _html;
        _calendar.classList.add('wrap-calendar');
        _mobile && _calendar.setAttribute('data-dim', true);
        curDay.setHours(0, 0, 0, 0);
        _calendar.querySelector('.wrap-day').innerHTML = '';
        _calendar.querySelector('.wrap-year-month .txt-year').innerHTML = `<button type-"button" class="btn-choice type-year">${curDay.getFullYear()}년</button>`;
        _calendar.querySelector('.wrap-year-month .txt-month').innerHTML = `<button type-"button" class="btn-choice type-month">${curDay.getMonth() + 1}월</button>`;
        !document.querySelector('.wrap-calendar') && document.body.append(_calendar);
        if (_mobile) {
            setTimeout(() => {
                !_calendar.classList.contains('is-active') && _calendar.classList.add('is-active');
            }, 10);
        } else {
            _calendar.querySelector('.area-calendar').style.top = `${top}px`;
            _calendar.querySelector('.area-calendar').style.left = `${left - 120}px`;
        }
        for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
            const _date = day.getDate();
            const _day = document.createElement('p');
            const _weekDay = day.getDay();

            // 첫번째 아이템 위치
            if (_date === 1) {
                _day.style.gridColumn = `${_weekDay + 1} / ${_weekDay + 2}`;
            }
            // 주말 체크
            if (_weekDay === 6) {
                _day.className = 'day-saturday';
            } else if (_weekDay === 0) {
                _day.className = 'day-sunday';
            }
            // 지난 날짜
            // if (day < scheduledDay && !type && type !== 'birthday' && !_value) {
            if (day < rToday && !type) {
                _day.classList.add('day-pass');
            }
            // 오늘 체크
            // if (day.getFullYear() === today.getFullYear() && day.getMonth() === today.getMonth() && day.getDate() === today.getDate()) {
            if (day.getFullYear() === rToday.getFullYear() && day.getMonth() === rToday.getMonth() && day.getDate() === rToday.getDate()) {
                _day.classList.add('day-today');
            }
            // 선택된 날짜 체크
            if (_value && day.getFullYear() === valDay.getFullYear() && day.getMonth() === valDay.getMonth() && day.getDate() === valDay.getDate()) {
                _day.classList.add('is-selected');
            }

            // 지난 날짜는 텍스트만, 오늘 이후 날짜 버튼 추가
            // _day.innerHTML = (day < scheduledDay && !type ? _date : `<button type="button" data-date="${day}">${_date}</button>`);
            _day.innerHTML = (day < rToday && !type ? _date : `<button type="button" data-date="${day}">${_date}</button>`);
            // 버튼 클릭 액션
            _day.querySelector('button') && _day.querySelector('button').addEventListener('click', e => {
                selectDay(e); // 날짜 선택
                type === 'history' && resetChoiceMonth(target.dataset.period); // 개월선택 라디오 초기화
            })
            _calendar.querySelector('.wrap-day').append(_day);
        }
        // 바탕 클릭 창 닫기
        _calendar.addEventListener('click', e => {
            if (e.target.nodeName === 'BUTTON') {
                return;
            }
            !e.target.classList.contains('choice-btn') && !e.target.closest(`.area-calendar`) && closeCalendar();
        })
        _calendar.querySelector('.btn-close-layer button') && _calendar.querySelector('.btn-close-layer button').addEventListener('click', () => {
            closeCalendar();
        });
        !_mobile && document.addEventListener('scroll', () => {
            if (_calendar) {
                _calendar.querySelector('.area-calendar').style.top = `${target.getBoundingClientRect().top + target.clientHeight}px`;
            }
        });
        _mobile && moChoiceMonth();
        choiceMonth(); // 달 선택
        choiceJump() // 년, 월 선택
    }
    // 년, 월 선택
    const choiceJump = () => {
        Array.prototype.forEach.call(_calendar.querySelectorAll('.wrap-year-month .btn-choice'), btn => {
            btn.addEventListener('click', (e) => {
                if (btn.classList.contains('is-choice')) {
                    return;
                }
                const _isYear = e.target.classList.contains('type-year') ? true : false;
                const _removeDim = document.createElement('div');
                const _wrapCont = document.createElement('div');
                const _wrapList = document.createElement('ul');
                _removeDim.className = 'remove-dim choice-btn';
                _wrapCont.className = 'wrap-list-dropdown is-active';
                btn.classList.contains('type-month') && _wrapCont.classList.add('type-month');
                btn.classList.add('is-choice');
                _wrapList.className = 'list-dropdown';
                const _yearStart = type === 'history' ? today.getFullYear() - 10 : type === 'birthday' ? today.getFullYear() - 50 : today.getFullYear();
                const _yearEnd = type === 'history' ? today.getFullYear() + 10 : type === 'birthday' ? today.getFullYear() + 50 : today.getFullYear() + 10;
                const _start = _isYear ? _yearStart : 1;
                const _end = _isYear ? _yearEnd : 13;
                const _unitHgt = _mobile ? 40 : 30;
                // 년, 월선택 값 넣기
                for (let i = _start; i < _end; i++) {
                    const _li = document.createElement('li');
                    const _btn = document.createElement('button');
                    _btn.setAttribute('type', 'button');
                    _btn.className = 'choice-btn';
                    _btn.dataset.year = i;
                    _btn.innerHTML = i;
                    if (_isYear) {
                        i === today.getFullYear() && _li.classList.add('is-selected');
                    } else {
                        i === today.getMonth() + 1 && _li.classList.add('is-selected');
                    }
                    _li.append(_btn);
                    _wrapList.append(_li);
                    _btn.addEventListener('click', () => {
                        curDay = _isYear ? new Date(_btn.dataset.year, curDay.getMonth(), curDay.getDate()) : new Date(curDay.getFullYear(), _btn.dataset.year - 1, curDay.getDate());
                        makeCalendar();
                        _wrapCont.remove();
                        _removeDim.remove();
                    })
                }
                // 년, 달 선택 레이어 특정 위치로 이동
                setTimeout(() => {
                    const _num = _isYear ? _wrapList.querySelector('.is-selected button').dataset.year - _yearStart : _wrapList.querySelector('.is-selected button').dataset.month - _yearStart;
                    _wrapList.scrollTop = _num * _unitHgt;
                }, 10);
                _wrapCont.append(_wrapList);
                _calendar.querySelector('.wrap-year-month').append(_removeDim);
                _calendar.querySelector('.wrap-year-month').append(_wrapCont);
                _removeDim.addEventListener('click', () => {
                    _wrapCont.remove();
                    _removeDim.remove();
                    btn.classList.contains('is-choice') && btn.classList.remove('is-choice');
                })
            })
        })
    }
    // 날짜 선택
    const selectDay = (e) => {
        const _day = new Date(e.target.dataset.date);
        const _dayTrans = `${_day.getFullYear()}-${_day.getMonth() + 1 < 10 ? `0${_day.getMonth() + 1}` : `${_day.getMonth() + 1}`}-${_day.getDate() < 10 ? `0${_day.getDate()}` : `${_day.getDate()}`}`;

        if (!multi) {
            _selectedDay.start = _dayTrans;
            insertDate({target: e.target, end: 'end'});
            // _period === 'end' && checkPeriod(target);
            return;
        }
        if (_selectedDay.start !== '' && _selectedDay.end !== '') {
            _selectedDay.start = _dayTrans;
            _selectedDay.end = '';
            insertDate({target: e.target});
        } else if (_selectedDay.start > _dayTrans || _selectedDay.start === '') {
            _selectedDay.start = _dayTrans;
            insertDate({target: e.target});
        } else if (_selectedDay.end === '') {
            _selectedDay.end = _dayTrans;
            insertDate({target: e.target, end: 'end'});
        }
    }
    // 날짜 입력
    const insertDate = ({target, end, exc}) => {
        // const _inp = type === 'single' ? [_base.querySelector('input')] : [_base.querySelector('.start-calendar'), _base.querySelector('.end-calendar')]
        const _inp = [_base.querySelector('input')];
        _calendar.querySelector('.is-selected') && _calendar.querySelector('.is-selected').classList.remove('is-selected');
        target && target.parentNode.classList.add('is-selected');
        // end && target.parentNode.classList.add('is-selected-end'); // 멀티일 경우 두번째 날짜
        if (_mobile && !exc) {
            return;
        }
        end && Object.values(_selectedDay).forEach((el, idx) => {
            //mo
            if (_inp[idx].dataset.type === 'pspt') {
                getPstpExpiDt(el);
            }
            _inp[idx].value = el;
            _inp[idx].dispatchEvent(new Event('change'));
        });
        end && closeCalendar();
    }
    // 달 선택
    const choiceMonth = () => {
        _calendar.querySelector('.area-year-month .btn-prev button').addEventListener('click', () => {
            curDay = new Date(curDay.getFullYear(), curDay.getMonth() - 1, 1);
            makeCalendar();
        });
        _calendar.querySelector('.area-year-month .btn-next button').addEventListener('click', () => {
            curDay = new Date(curDay.getFullYear(), curDay.getMonth() + 1, 1);
            makeCalendar();
        });
    }
    // 모바일 alert
    const makeAlert = () => {
        const _alert = document.createElement('div');
        _alert.className = 'alert-modal';
        _alert.innerHTML = _alertTxt;
        document.body.append(_alert);
        _alert.querySelector('button').addEventListener('click', () => {
            _alert.remove();
        })
    }
    // 모바일 달력 날짜 선택 적용
    const moChoiceMonth = () => {
        _calendar.querySelector('.btn-square').addEventListener('click', () => {
            if (!_selectedDay.start) {
                makeAlert();
                return;
            } else {
                insertDate({end: true, exc: true});
                closeCalendar();
            }
        })
    }
    // 달력 닫기
    const closeCalendar = () => {
        _calendar && _calendar.remove();
        _calendar = null;
    }
    // 개월선택 라디오 초기화
    const resetChoiceMonth = (type) => {
        // const _wrap = _base.closest('.order-history__group');
        const _wrap = document.querySelector('.area-mypage .tab-content.is-active .order-history__group');
        const _radios = _wrap.querySelector('.wrap-btn');
        _radios.querySelector('input:checked').checked = false;
        // _radios.querySelector('input').checked = true;
        // evtTrigger(_radios.querySelector('input'));
    } //2024-07-10 마이현대 주문내역 달력 수정
    makeCalendar(); // 카렌더 만들기
}
// 기간 달력
function periodCalendar(calendars) {
    Array.prototype.forEach.call(calendars, (inp, idx) => {
        if (inp.dataset.type === 'history') {
            const _type = inp.dataset.role;
            const _num = _type === 'calendarData' ? -1 : 1;
            const today = new Date();
            // const firstDay = _type === 'calendarData' ? new Date(today.getFullYear(), today.getMonth() + _num, today.getDate()) : today;
            const firstDay = _type === 'calendarData' ? new Date(today.getFullYear(), today.getMonth() - 3, today.getDate()) : today;/*2024-07-10 마이현대 주문내역 달력 수정*/
            const secondDay = _type === 'calendarData' ? today : new Date(today.getFullYear(), today.getMonth() + _num, today.getDate());
            idx % 2 === 0 && insertCurDate({target: inp, day: firstDay});
            idx % 2 !== 0 && insertCurDate({target: inp, day: secondDay});
        }
    });
}
// 달력 관련 날짜 넣기
function insertCurDate({target, day, num}) {
    const _year = day.getFullYear();
    const _month = day.getMonth() + 1 < 10 ? `0${day.getMonth() + 1}` : day.getMonth() + 1;
    const _day = day.getDate() < 10 ? `0${day.getDate()}` : day.getDate();
    const _inpuTxt = `${_year}-${_month}-${_day}`;
    target.value = _inpuTxt;
}
// 1, 3, 6개월 기간 선택 20230802 수정
function changePeriodCalendar(el) {
    if (!el.querySelector('input[name*="onthRadio"]')) {
        return;
    }
    const _inputs = el.querySelectorAll('input[name*="onthRadio"]');
    const _sequence = el.querySelectorAll('input[name*="tdCdRadio"]');
    const _calendars = el.querySelectorAll('[data-role="calendarData"], [data-role="calendarDpat"]');
    Array.prototype.forEach.call(_sequence, inp => {
        inp.addEventListener('change', () => {
            const _type = inp.value === 'order' ? 'calendarData' : 'calendarDpat';
            const _num = _type === 'calendarData' ? -1 : 1;
            const today = new Date();
            const _checked = el.querySelector('input[name*="onthRadio"]:checked').value;
            insetCalendarData(_type, today, (_num * _checked));
        })
    });
    Array.prototype.forEach.call(_inputs, inp => {
        inp.addEventListener('click', e => {
            const _type = _calendars[0].dataset.role;
            const _num = _type === 'calendarData' ? Number((e.target.value) * -1) : Number(e.target.value);
            const today = _type === 'calendarData' ? new Date(changeValDate(_calendars[1].value)) : new Date(changeValDate(_calendars[0].value));
            insetCalendarData(_type, today, _num);
        })
    });
    const insetCalendarData = (type, today, num) => {
        Array.prototype.forEach.call(_calendars, (calendar, idx) => {
            const firstDay = type === 'calendarData' ? new Date(today.getFullYear(), today.getMonth() + num, today.getDate()) : today;
            const secondDay = type === 'calendarData' ? today : new Date(today.getFullYear(), today.getMonth() + num, today.getDate());
            idx % 2 === 0 && insertCurDate({target: calendar, day: firstDay});
            idx % 2 !== 0 && insertCurDate({target: calendar, day: secondDay});
        });
    }
}
// input del button 20230802 수정
function viewDel(e) {
    if (e.target.getAttribute('type') === 'checkbox' || e.target.getAttribute('type') === 'radio' || e.target.getAttribute('type') === 'button' || e.target.nodeName === 'SELECT' || e.target.nodeName === 'A') {
        return;
    }
    const inp = e.target;
    const _base = inp.closest('.wrap-form__input, .form_cont');
    const checkIsBtn = () => {
        const _btns = _base.querySelectorAll('button, p, .timer, .remain-date'); //20230802
        const _wids = Array.prototype.reduce.call(_btns, (acc, el) => {
            return acc + (el.classList.contains('txt-error') ? 0 : el.clientWidth === 0 ? 0 : parseInt(el.clientWidth + 8));
        }, 0);
        return _wids;
    }
    const makeDel = () => {
        const _right = checkIsBtn();
        const btn = document.createElement('button');
        _base.classList.add('is-change');
        btn.className = 'btn-circle type-del';
        btn.innerHTML = '삭제';
        _base.append(btn);
        btn.style.right = `${_right === 0 ? 12 : _right}px`;
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            _base.classList.contains('is-change') && _base.classList.remove('is-change');
            inp.value = '';
            _base.querySelector('.btn-square') && _base.querySelector('.btn-square').dataset.role !== 'allSearch' && _base.querySelector('.btn-square').setAttribute('disabled', '');
            btn.remove();
        })
    }
    !_base.classList.contains('is-change') && makeDel();
    if (inp.value !== '') {
        _base.querySelector('.btn-square') && _base.querySelector('.btn-square').dataset.role !== 'allSearch' && _base.querySelector('.btn-square').removeAttribute('disabled');
    } else {
        _base.querySelector('.btn-square') && _base.querySelector('.btn-square').dataset.role !== 'allSearch' && _base.querySelector('.btn-square').setAttribute('disabled', '');
    }
}
function removeDel(e) {
    setTimeout(() => {
        if (e.target.getAttribute('type') === 'checkbox' || e.target.getAttribute('type') === 'radio' || e.target.getAttribute('type') === 'button' || e.target.nodeName === 'SELECT' || e.target.nodeName === 'A') {
            return;
        }
        const inp = e.target;
        const _base = inp.closest('.wrap-form__input, .form_cont');
        const btn = _base ? _base.querySelector('.type-del') : '';
        _base ? _base.classList.contains('is-change') && _base.classList.remove('is-change') : '';
        btn ? btn.remove() : '';
    }, 200);
}
function disableDel(e) {
    if (e.target.getAttribute('type') === 'checkbox' || e.target.getAttribute('type') === 'radio' || e.target.getAttribute('type') === 'button' || e.target.nodeName === 'SELECT' || e.target.nodeName === 'A') {
        return;
    }
    const inp = e.target;
    const _base = inp.closest('.wrap-form__input, .form_cont');
    if (inp.value !== '') {
        _base.querySelector('.btn-square') && _base.querySelector('.btn-square').dataset.role !== 'allSearch' && _base.querySelector('.btn-square').removeAttribute('disabled');
    } else {
        _base.querySelector('.btn-square') && _base.querySelector('.btn-square').dataset.role !== 'allSearch' && _base.querySelector('.btn-square').setAttribute('disabled', '');
    }
}
// select value idx
function searchValOptIdx(target, val) {
    const _options = target.querySelectorAll('option');
    const _idx = Array.prototype.findIndex.call(_options, opt => {
        return opt.value === val;
    })
    if (_idx === -1) {
        return;
    }
    return _idx;
}
// select data insert
function setAttrData(target, data) {
    const _idx = searchValOptIdx(target, data);
    target.querySelector('option[selected]') && target.querySelector('option[selected]').removeAttribute('selected');
    target.querySelectorAll('option')[_idx] && target.querySelectorAll('option')[_idx].setAttribute('selected','');
}
// custom select box
function setSelectBox(el, pop) {
    // return;
    if (!el.querySelector('select')) {
        return;
    }
    const init = {
        posWrap: '',
        addWrap: '',
        listWrap: '',
        addSelect: '',
        addBtn: '',
        fakeBtn: '',
        selectBox: '',
        options: '',
        max: {num: 0, txt: ''},
        isFirst: false,
        cls: `dropdown_${parseInt(Math.random() * 1000000)}`
    }
    const searchValOpt = (val) => {
        const _idx = Array.prototype.findIndex.call(init.options, opt => {
            return opt.value === val;
        })
        if (_idx === -1) {
            return;
        }
        return init.options[_idx].text;
    }
    const makeSelect = () => {
        init.posWrap = document.createElement('div');
        init.addWrap = el.querySelector('.wrap-add-dropdown') ? el.querySelector('.wrap-add-dropdown') : document.createElement('div');
        init.listWrap = el.querySelector('.wrap-list-dropdown') ? el.querySelector('.wrap-list-dropdown') : document.createElement('div');
        init.addSelect = el.querySelector('.list-dropdown') ? el.querySelector('.list-dropdown') : document.createElement('ul');
        init.addBtn = el.querySelector('.btn-dropdown') ? el.querySelector('.btn-dropdown') : document.createElement('button');
        init.fakeBtn = el.querySelector('.fake-dropdown') ? el.querySelector('.fake-dropdown') : document.createElement('span');
        init.selectBox = el.querySelector('select');
        init.options = init.selectBox.querySelectorAll('option');

        if (el.querySelector('.wrap-add-dropdown')) {
            return;
        }
        init.posWrap.className = pop ? 'wrap-pos-add-dropdown type-modal' : 'wrap-pos-add-dropdown';
        init.posWrap.classList.add(init.cls);
        init.addWrap.className = 'wrap-add-dropdown';
        init.listWrap.className = 'wrap-list-dropdown';
        init.addSelect.className = 'list-dropdown';
        init.addSelect.setAttribute('data-parentid', init.selectBox.id);
        init.addBtn.className = 'btn-dropdown'
        init.fakeBtn.className = 'fake-dropdown'
        init.addBtn.setAttribute('type', 'button');
        init.selectBox.disabled && init.addWrap.setAttribute('data-disabled', 'disabled');
        init.options.length === 0 && init.addWrap.setAttribute('data-disabled', 'disabled');
        init.addBtn.innerHTML = init.selectBox.value ? searchValOpt(init.selectBox.value) : init.options[0] ? init.options[0].text : '';
        if (init.selectBox.value || init.options[0] && init.options[0].value) {
            init.addBtn.classList.add('active');
        }
        init.addSelect.innerHTML = Array.prototype.reduce.call(init.options, (acc, option) => {
            if (option.text.length > init.max.num) {
                init.max.num = option.text.length;
                init.max.txt = option.text;
            }
            return acc += `<li ${init.selectBox.value === option.value ? 'class="is-selected"' : ''}><button type="button" data-value=${option.value} ${option.disabled ? 'data-disabled="disabled"' : ''}>${option.text}</button></li>`
        },'');

        init.fakeBtn.innerHTML = init.max.txt;
        init.addWrap.appendChild(init.fakeBtn);
        init.addWrap.appendChild(init.addBtn);
        init.listWrap.appendChild(init.addSelect);
        init.selectBox.insertAdjacentElement('afterend', init.addWrap);
        init.posWrap.append(init.listWrap);
        document.body.append(init.posWrap);
        el.classList.add('is-setted');
        if (!_mobile && init.fakeBtn.offsetWidth < 102) {
            init.fakeBtn.style.width = '105px';
        }
        selectData();
        init.addBtn.addEventListener('click', (e) => {
            if (!init.addWrap.classList.contains('active')) {
                const _cls = getPos({btn: init.addBtn, inner: init.listWrap, include: '.od_calc_wrap'});
                init.posWrap.classList.add(_cls);
                makeSelectPos(init.addWrap, init.posWrap, _cls);
                if (_cls.indexOf('up')) {
					init.posWrap.style.width = `${init.posWrap.dataset.wid}px`;
				}
                elSlideDown({base: init.addWrap, btn: init.addBtn, target: init.listWrap, cls: 'active', execute: true, is: 'ing'});
                !init.isFirst && setCloseSelect();
            } else {
                closeSelect();
            }
            window.addEventListener('scroll', () => {
                if (!init.addWrap.classList.contains('active')) {
                    return;
                }
                closeSelect(); // 20231204
                // makeSelectPos(init.addWrap, init.posWrap);// 20231204
            })
        });
    }
    // 닫기20231204
    const closeSelect = () => {
        elSlideDown({base: init.addWrap, btn: init.addBtn, target: init.listWrap, cls: 'active', execute: false, is: 'ing'});
        setTimeout(() => {
            init.posWrap.removeAttribute('style');
        }, 300);
    }
    // position 
    const makeSelectPos = (btn, target, type) => {
        const _type = type ? type : target.className;
        const _wid = btn.clientWidth;
        const _hgt = _type.indexOf('direct-down') !== -1 ? btn.clientHeight : 0;
        const _addHgt = _type.indexOf('direct-down') !== -1 ? 8 : -8;
        const _top = btn.getBoundingClientRect().top + _hgt + _addHgt;
        const _left = btn.getBoundingClientRect().left;
        // target.style.width = `${_wid}px`; 20231206
        target.setAttribute('data-wid', _wid);
        target.style.top = `${_top}px`;
        target.style.left = `${_left}px`;
    }
    // select body click close
    const setCloseSelect = () => {
        init.isFirst = true;
        document.body.addEventListener('click', () => {
            if (!init.addWrap.classList.contains('active')) {
                return;
            }
            elSlideDown({base: init.addWrap, btn: init.addBtn, target: init.listWrap, cls: 'active', execute: false, is: 'ing'});
            setTimeout(() => {
                init.posWrap.removeAttribute('style');
                init.posWrap.classList.contains('direct-up') && init.posWrap.classList.remove('direct-up');
                init.posWrap.classList.contains('direct-down') && init.posWrap.classList.remove('direct-down');
            }, 300);
        })
    }
    // 드롭다운 메뉴 선택
    const selectData = () => {
        const datas = init.addSelect.querySelectorAll('button');
        Array.prototype.forEach.call(datas, (data, idx) => {
            data.addEventListener('click', e => {
                init.addSelect.querySelector('.is-selected') && init.addSelect.querySelector('.is-selected').classList.remove('is-selected');
                data.parentNode.classList.add('is-selected');
                init.addBtn.innerHTML = data.innerHTML;
                if (!!data.dataset.value) {
                    init.addBtn.classList.add('active');
                } else {
                    init.addBtn.classList.remove('active');
                }
                init.selectBox.querySelector(`option[selected]`) && init.selectBox.querySelector(`option[selected]`).removeAttribute('selected');
                init.options[idx].setAttribute('selected','');
                init.options[idx].selected = true;
                init.selectBox.value = init.options[idx].value;
                init.selectBox.dispatchEvent(new Event('change'));
                // selectClickEvent(datas);
            })
        })
    }
    // 열리는 방향
    const getPos = ({btn, inner, include}) => {
        if (!btn || !inner) {
            return;
        }
        inner.style.cssText = "display: block; opacity: 0; transition: all 0s";
        const _innerHgt = inner.clientHeight;
        inner.removeAttribute('style');
        const _include = include && document.querySelector(include) ? document.querySelector(include).clientHeight : 0;
        const _btnInfo = btn.getBoundingClientRect();
        const _winHgt = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
        const _direct = _winHgt - _include - _btnInfo.top < _innerHgt ? 'direct-up' : 'direct-down';
        // const _direct = _winHgt - _include - _btnInfo.top < _innerHgt ? false : true;
        return _direct;
    };
    // observe
    const optionObserve = () => {
        let observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // console.log(mutation.type);
                // if (mutation.type === 'childList' || mutation.type === 'attributes') {
                el.querySelector('.wrap-add-dropdown') && el.querySelector('.wrap-add-dropdown').remove();
                init.posWrap.innerHTML = '';
                document.querySelector(`.wrap-pos-add-dropdown.${init.cls}`) && document.querySelector(`.wrap-pos-add-dropdown.${init.cls}`).remove()
                init.addWrap = '';
                makeSelect();
                // mutation.addedNodes.forEach(unit => {
                // });
                // }
            })
        })
        const config = {
            childList: true,
            subtree: true,
            attributes: true
        }
        observer.observe(init.selectBox, config);
    }
    makeSelect();
    optionObserve();
}
//주문결제 주문상품 더 보기 20230725 추가
function foldOrderProduct(btn) {
    const _base = btn.parentNode.querySelector('.wrap-order-list');
    const _baseHgt = _base.querySelector('.order_list > li').clientHeight;
    const _txtClose = btn.dataset.closeTxt ? btn.dataset.closeTxt : '닫기';
    const _txtOpen = btn.dataset.openTxt ? btn.dataset.openTxt : '더보기';
    let _maxHgt = 0;
    _base.style.maxHeight = `${_baseHgt}px`;

    btn.addEventListener('click', (e) => {
        if (_base.dataset.status === 'fold') {
            _base.style.maxHeight = 'none'
            _maxHgt = _base.clientHeight;
            _base.style.maxHeight = `${_baseHgt}px`;
            _base.style.transition = 'all .3s ease-out';
            setTimeout(() => {
                _base.style.maxHeight = `${_maxHgt}px`;
            }, 10);
            setTimeout(() => {
                btn.querySelector('span').innerHTML = _txtClose;
                btn.classList.add('close');
                _base.dataset.status = 'unfold';
            },300);
        } else {
            _base.style.maxHeight = `${_baseHgt}px`;
            setTimeout(() => {
                _base.dataset.status = 'fold';
                _base.style.maxHeight = `${_baseHgt}px`;
                btn.querySelector('span').innerHTML = _txtOpen;
                btn.classList.remove('close');
                window.scrollTo({
                    top: window.pageYOffset + _base.getBoundingClientRect().top - 65,
                    behavior: 'smooth'
                })
            }, 300);
        }
    })
}
// close modal
function closeModalSwipe({base, cls, checkBody}) {
    const sclTarget = base.querySelector('.box-bottom-float') ? base.querySelector('.box-bottom-float') : base;
    const initialize = {
        firstX: 0,
        firstY: 0,
        isMove: false,
        moveLeft: 0,
        moveTop: 0,
    }
    const dragStart = () => {
        base.querySelector(cls).addEventListener('touchstart', mouseDown);
        window.addEventListener('touchmove', mouseMove)
        window.addEventListener('touchend', mouseUp)
    };
    const mouseDown = (event) => {
        if (event.target.closest('.group-option-change') || event.target.closest('.area-inner-scroll') || event.target.closest('.area-scroll') || initialize.isMove || base.scrollTop > 0) {
            return;
        }

        initialize.firstX = event.type !== 'mousedown' ? event.touches[0].screenX : event.pageX;
        initialize.firstY = event.type !== 'mousedown' ? event.touches[0].screenY : event.pageY;

        initialize.moveLeft = 0;
        initialize.moveTop = 0;
        initialize.isMove = true;
    };
    const mouseMove = (event) => {
        if (!initialize.isMove) {
            return;
        }

        const _moveX = event.type !== 'mousemove' ? event.touches[0].screenX : event.pageX;
        const _moveY = event.type !== 'mousemove' ? event.touches[0].screenY : event.pageY;

        initialize.moveLeft = initialize.firstX - _moveX;
        initialize.moveTop = initialize.firstY - _moveY;
    };
    const mouseUp = (event) => {
        if (!initialize.isMove) {
            return;
        }
        if (Math.abs(initialize.moveLeft) < Math.abs(initialize.moveTop) && initialize.moveTop < 0 && sclTarget.scrollTop < 1 && Math.abs(initialize.moveTop) > 30) {
            initialize.isMove = false;
            closeEl();
            checkBody && document.querySelector('html').getAttribute('style') && document.querySelector('html').removeAttribute('style')
            checkBody && document.querySelector('body').getAttribute('style') && document.querySelector('body').removeAttribute('style')
            document.body.classList.contains('is-dimmed') && document.body.classList.remove('is-dimmed');
        }
        initialize.firstX = 0;
        initialize.firstY = 0;
        initialize.isMove = false;
        initialize.moveLeft = 0;
        initialize.moveTop = 0;
    };
    base.querySelector(cls) && dragStart();
}
function selectClickEvent() {
    
}
// event trigger
function evtTrigger(btn) {
    const _event = document.createEvent('Event');
    _event.initEvent('click', true, true);
    btn.dispatchEvent(_event);
}
// 우측 결제 금액 스크롤 이벤트
function scrollFloatRight(target) {
    const _target = document.querySelector(target);
    const _footer = document.getElementById('footer');
    const _addNum = 122;
    const _pos = window.scrollY + _target.getBoundingClientRect().top - _addNum;
    let _footerPos = window.scrollY + _footer.getBoundingClientRect().top;
    const calcuHgt = (target) => {
        return Array.prototype.reduce.call(target, (acc, el) => {
            return acc + el.clientHeight;
        }, 0)
    }
    let _hgt = calcuHgt(_target.children);
    const checkPos = () => {
        _hgt = calcuHgt(_target.children);
        _footerPos = window.scrollY + _footer.getBoundingClientRect().top;
        if (window.scrollY >= _pos && window.scrollY + _hgt + _addNum < _footerPos) {
            _target.classList.add('fixed');
            _target.removeAttribute('style');
        } else if (window.scrollY + _hgt + _addNum > _footerPos) {
            _target.style.top = `${_footer.getBoundingClientRect().top - _hgt - 50}px`;
        } else {
            _target.removeAttribute('style');
            _target.classList.contains('fixed') && _target.classList.remove('fixed');
        }
        if (document.body.clientWidth < 1200 && _target.classList.contains('fixed')) {
            _target.style.left = `${952 - window.scrollX}px`;
        }
    }
    window.addEventListener('scroll', () => {
        checkPos();
    });
    let observer = new ResizeObserver(function(entries) {
        entries.forEach(function(entrie) {
            checkPos();
        })
    })
    observer.observe(_target);
    observer.observe(document.body);
}
// 모바일 최종 결제금액 보기 아코디언
function paymentFoldPos(cls) {
    const _wrap = document.querySelector(cls);
    const _btn = _wrap.querySelector('.detail_tit.type-btn button');
    const _content = _wrap.querySelector('.detail_discount');
    const checkHgt = () => {
        setTimeout(() => {
            if (_content.classList.contains('is-active')) {
                const _scl = window.scrollY + _content.clientHeight;
                window.scrollTo({
                    top: _scl,
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                checkHgt();
            }
        }, 100);
    }
    _btn.addEventListener('click', () => {
        checkHgt();
    })
}




//2023 개선 mypage
// 마이현대 메뉴 서브 메뉴 보기
function viewMyMenu(target) {
    const base = document.querySelector(target);
    const _snb = base.querySelectorAll('.list-my-snb');
    const back = document.createElement('div');
    let _snbHgt = 0;

    back.className = 'my-menu__back';
    base.insertAdjacentElement('afterbegin', back);

    const checkHgt = () => {
        _snbHgt = Array.prototype.reduce.call(_snb, (acc, el) => {
            el.style.display = 'block';
            acc = acc < el.clientHeight ? el.clientHeight : acc;
            el.removeAttribute('style');
            return acc;
        }, 0);
        const _mrg = parseInt(window.getComputedStyle(_snb[0]).getPropertyValue('padding-top'));
        return _snbHgt + _mrg;
        
    }
    base.addEventListener('mouseenter', (e) => {
        back.style.transition = 'height .3s ease-out';
        back.style.height = `${maxHgt}px`;
        Array.prototype.forEach.call(_snb, snb => {
            elSlideDown({base, target: snb, btn: base.querySelector('a'), cls: 'is-active', execute: true, is: 'ing'})
        })
    })
    base.addEventListener('mouseleave', (e) => {
        elSlideDown({base, target: back, btn: base.querySelector('a'), cls: 'is-active', execute: false, is: 'ing'})
        Array.prototype.forEach.call(_snb, snb => {
            elSlideDown({base, target: snb, btn: base.querySelector('a'), cls: 'is-active', execute: false, is: 'ing'})
        })
    })
    const maxHgt = checkHgt();
}
// 롤링 알림 메세지
function myAlram() {
    const _base = document.querySelector('.my-grade__alram');
    const _alram = _base.querySelectorAll('a');
    const _time = 4000;/*2024-07-11 회원가입 개선*/
    let _timer = '';
    let _cur = 0;
    if (!_base.querySelector('a') || _base.querySelectorAll('a') < 2) {
        return;
    }
    const interval = () => {
        _timer = setInterval(() => {
            _base.querySelector('.is-active') && _base.querySelector('.is-active').classList.remove('is-active');
            _alram[_cur % _alram.length].classList.add('is-active');
            _cur++;
        }, _time);
    }
    interval();
    _base.addEventListener('mouseenter', () => {
        clearInterval(_timer);
        _timer = '';
    });
    _base.addEventListener('mouseleave', () => {
        interval();
    });
}
// 마이현대 앵커이동 20230726 추가
function anchorMove(base) {
    const _topHgt = 60;
    const _btnHgt = 57;
    const _btns = base.querySelectorAll('a');
    let _pos = 0;
    const _tabConts = base.parentNode.querySelectorAll('.my-panel');
    let _contPos = Array.prototype.map.call(_tabConts, cont => {
        return window.scrollY + cont.getBoundingClientRect().top;
    });
    let _is = false;
    const sclEvt = () => {
        if (window.scrollY >= _pos) {
            !base.parentNode.classList.contains('fixed') && base.parentNode.classList.add('fixed');
        } else {
            base.parentNode.classList.contains('fixed') && base.parentNode.classList.remove('fixed');
        }
        checkCurPos(window.scrollY);
    }
    const throttleUse = (callback) => {
        let _timeOut = null;
        _pos = window.scrollY + base.getBoundingClientRect().top - _topHgt;
        _contPos = Array.prototype.map.call(_tabConts, cont => {
            return window.scrollY + cont.getBoundingClientRect().top;
        });
        return function () {
            if (_timeOut) {
                window.cancelAnimationFrame(_timeOut);
            }
            _timeOut = window.requestAnimationFrame(function () {
                callback();
            });
        }
    }
    window.addEventListener('scroll', throttleUse(sclEvt, 100));
    const checkCurPos = (pos) => {
        if (_is) {
            return;
        }
        for (let i = 0; i < _contPos.length; i++) {
            const _computed = _contPos[i] - _btnHgt - _topHgt;
            if (pos > _computed && pos < _tabConts[i].clientHeight + _computed) {
                // removeArrCls(base.querySelectorAll('li'), 'is-active');
                base.querySelector('.is-active') && base.querySelector('.is-active').classList.remove('is-active');
                !_btns[i].parentNode.classList.contains('is-active') && _btns[i].parentNode.classList.add('is-active');
            }
        }
    }
    Array.prototype.forEach.call(_btns, btn => {
        btn.addEventListener('click', (e) => {
            const _link = btn.getAttribute('href');
            if (_link.indexOf('#') === -1) {
                return;
            }
            _is = true;
            // removeArrCls(base.querySelectorAll('li'), 'is-active');
            base.querySelector('.is-active') && base.querySelector('.is-active').classList.remove('is-active');
            !btn.parentNode.classList.contains('is-active') && btn.parentNode.classList.add('is-active');
            e.preventDefault();
            const _target = document.getElementById(_link.replace('#', ''));
            $('html, body').animate({
                scrollTop: window.scrollY + _target.getBoundingClientRect().top - _topHgt - _btnHgt
            }, function() {
                _is = false;
            })
            // window.scrollTo({
            //     top: window.scrollY + _target.getBoundingClientRect().top - _topHgt - _btnHgt,
            //     behavior: 'smooth'
            // });
        })
    });
}
function removeArrCls(targets, cls) {
    Array.prototype.forEach.call(targets, target => {
        target.classList.contains(cls) && target.classList.remove(cls);
    });
}
// 모바일 전자여권 숨기기
function hidePassport(el) {
    const _headerBtn = document.querySelector('.header_top > h2');
    const _menu = document.querySelector('.header_top .depth_menu');
    _headerBtn.addEventListener('click', () => {
        const _scl = window.scrollY;
        _menu.classList.contains('open') && $(el).fadeOut();
        _scl !== 0 && !_menu.classList.contains('open') && $(el).fadeIn();
    })
}
// 마이현대 높이값
function setSameHgt(cls) {
	const _targets = document.querySelectorAll(cls);
	let _max = 0;
	const calHgt = () => {
		Array.prototype.forEach.call(_targets, target => {
            target.closest('.my-tab-content').classList.add('temped');
            const _hgt = target.clientHeight;
            target.closest('.my-tab-content').classList.remove('temped');
            if (_max < _hgt) {
                _max = _hgt
            }
        });
	}
    calHgt();
    const checkHgt = (type) => {
        Array.prototype.forEach.call(_targets, target => {
            if (_max === 0 || type) {
                setTimeout(() => {
                    calHgt();
                }, 100);
            } else {
                target.style.height = `${_max}px`;
            }
        });
    }
    checkHgt();
}


//2023 개선 product
// 상품 상세 - 내용 탭메뉴 이동
function scrollIntoMove(num) {
    return;
    // let targetPosition = $("#panel" + num).offset();
    // $('html, body').animate({scrollTop : targetPosition.top - 60}, 400);
    // $('html, body').animate({scrollTop : targetPosition.top - 140}, 400);
}
// 평점 비율
function ratingBar(el) {
    const _bars = el.querySelectorAll('.bar .wrap-rating');
    const _max = 5;
    const makeBar = (bar) => {
        const _addBar = document.createElement('div');
        const _addUnit = document.createElement('div');
        const _num = bar.querySelector('.bar_num').innerHTML;
        _addBar.className = 'bar_line';
        _addUnit.className = 'gauge';
        _addBar.appendChild(_addUnit);
        bar.insertAdjacentElement('afterbegin', _addBar);
        _addUnit.style.height = `${(_num / _max) * 100}%`;

    }
    Array.prototype.forEach.call(_bars, bar => makeBar(bar));
}
// menu sticky
function menuSticky(target) {
    const _base = document.querySelector(target);
    const _filter = _base.querySelector('.product-saerch-list-top');
    if (!_filter) {
        return;
    }
    const _filterUnit = _base.querySelector('.search-hashtag-result');
    const _filterHgt = _filter.offsetHeight;
    let _unitHgt = _filterUnit.offsetHeight;
    const _resultWrap = document.querySelector('.search-round-data-wrap, .category-menu-two-depth-wrap');
    const _resultHgt = _resultWrap ? _resultWrap.offsetHeight : 0;
    const _addHgt = document.querySelector('#searchTermResult') ? 22 : 0;
    let _filterPos = _filter.getBoundingClientRect().top;
    const _headerHgt = document.querySelector('.saerch-top, .header') ? document.querySelector('.saerch-top, .header').offsetHeight : 0;

    let _filterPosPlus = _headerHgt + _resultHgt + _addHgt;
    _filterPos = _filterPos >= 60 ? _filterPos : 60;
    if (!_filter) {
        return;
    }
    window.addEventListener('scroll', e => {
        _unitHgt = _filterUnit.clientHeight;
        if (window.scrollY > _resultHgt) {
            !_base.classList.contains('is-scroll') && _base.classList.add('is-scroll');
            if (_resultWrap) {
                !_resultWrap.classList.contains('is-scroll') && _resultWrap.classList.add('is-scroll');
                _resultWrap.parentElement.style.paddingTop = `${_resultWrap.clientHeight}px`;
            }
            _base.style.paddingTop = `${_filterHgt + _unitHgt}px`;
            _filter.style.top = `${_filterPosPlus}px`;
            _filterUnit.style.top = `${_filterPosPlus + _filterHgt}px`;
        } else {
            _base.classList.contains('is-scroll') && _base.classList.remove('is-scroll');
            if (_resultWrap) {
                _resultWrap.classList.contains('is-scroll') && _resultWrap.classList.remove('is-scroll');
                _resultWrap.parentElement.removeAttribute('style');
            }
            _base.removeAttribute('style');
            _filter.removeAttribute('style');
            _filterUnit.style.removeProperty('top');
        }
    })
}
// filter 20231011 수정
function viewFlterDetail(btn) {
    const _filter = document.querySelector('[data-filter="wrap"]');
    btn.addEventListener('click', () => {
        if (btn.classList.contains('is-active')) {
            _filter.classList.remove('is-active');
            btn.classList.remove('is-active');
        } else {
            _filter.classList.add('is-active');
            btn.classList.add('is-active');
        }
    })
}
// show hide 제어
function viewControlCheck(el) {
    const _control = el.dataset.control;
    const _targets = document.querySelectorAll(`[data-${_control}]`);
    el.addEventListener('change', e => {
        Array.prototype.forEach.call(_targets, target => {
            const _cur = JSON.parse(target.getAttribute(`data-${_control}`));
            target.setAttribute(`data-${_control}`, !_cur);
        })
    })
}
// mutation observer 20231004
function checkMutationObserve() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach( mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach( el => {
                    if (!el.querySelector) {
                        return;
                    }
                    // 검색어 저장 체크
                    if (el.querySelector('[data-control]')) {
                        viewControlCheck(el.querySelector('[data-control]'));
                    }
                    // 검색 input focus
                    if (el.querySelector('.saerch-top.saerch-top-fix-no input[type=text]')) {
                        el.querySelector('.saerch-top.saerch-top-fix-no input[type=text]').focus();
                    }
                    // 필터 검색어
                    if (el.closest('.product-saerch-filter-wrap .filter-data-save')) {
                        checkFilterSearch(el);
                    }
                    // tab
                    if (el.querySelector('[role=tablist]')) {
                        const cls = el.querySelector('[role=tablist]').parentNode.className.split(' ').join('.');
                        cls && setTab(`.${cls}`);
                    }
                    // round btn is-class
                    if (el.querySelector('.search-round-data')) {
                        el.querySelector('button').addEventListener('click', (e) => {
                            setOneCls({base: el.parentNode, unit: el, cls: 'is-active'});
                        })
                    }
                    // 세트상품 swiper
                    if (el.querySelector('.select-brand-wrap .swiper-wrapper')) {
                        setSwiper({target: el.querySelector('.select-brand-wrap'), gap: 12, viewNum: 2.5, offset: 20});
                    }
                    // 오프라인 브랜드 이미지 확대 축소
                    if (el.querySelector('.offline-brand-img')) {
                        offlineBrandZoom(el.querySelector('.offline-brand-img'));
                    }
                    // 일부 팝업 높이값
                    if (el.querySelector('.box-float-layer .guidance-area')) {
                        setLayHgt(el.querySelector('.box-float-layer .guidance-area'), 'inner');
                    }
                    // pc 필터
                    if (el.querySelector('.saerch-result-content #filterOptionBtn')) {
                        viewFilter({base: document.querySelector('.saerch-result-content'), btn: document.querySelector('.saerch-result-content #filterOptionBtn')});
                    }
                    if (el.querySelector('.saerch-result-content #filterOptionBtn2')) {
                        viewFilter({base: document.querySelector('.saerch-result-content'), btn: document.querySelector('.saerch-result-content #filterOptionBtn2')});
                    }
                });
            }
        });
    });
    // observe everything except attributes
    observer.observe(document.body, {
        childList: true, // observe direct children
        subtree: true, // and lower descendants too
        characterDataOldValue: true // pass old data to callback
    });
}
// observer intersection
function checkIntersectionOpserve(target) {
    const options = {
        threshold: 0
    }
    const callback = (entries, observer) => {
        return entries.forEach(entry => {
            const {target} = entry;
            if (entry.isIntersecting) {
                if (target.closest('.saerch-top.saerch-top-fix-no') && target.nodeName === 'INPUT') {
                    target.focus();
                    document.querySelector('html').scrollTop = 0;
                    observer.unobserve(target);
                }
                if (target.classList.contains('guidance-area')) {
                    setLayHgt(target, 'inner');
                }
                if (target) {
                    searchRoundBtn();
                }
            }
        });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
}
// 검색 필터
function checkFilterSearch(el) {
    const _content = document.querySelector('.product-saerch-filter');
    const _base = el.closest('.product-saerch-filter-wrap .filter-box-footer');
    const _txt = _base.querySelector('.filter-data-save ul li');
    const _refreshBtn = _base.querySelector('.filter-box-function a');
    const addPadContent = () => {
        if (!_content) {
            return;
        }
        // _content.style.paddingBottom = `${_base.clientHeight + 48}px`;
    }
    if (_txt) {
        !_base.classList.contains('has-txt') && _base.classList.add('has-txt');
        addPadContent();
        Array.prototype.forEach.call(_base.querySelectorAll('.filter-data-save ul li button'), btn => {
            btn.addEventListener('click', () => {
                if (_base.querySelectorAll('.filter-data-save ul li').length === 0) {
                    _base.classList.remove('has-txt');
                    addPadContent();
                }
            })
        });
    } else {
        _base.classList.remove('has-txt');
        addPadContent();
    }
    _refreshBtn && _refreshBtn.addEventListener('click', () => {
        const _head = document.querySelector('.saerch-top, .header') ? document.querySelector('.saerch-top, .header').offsetHeight : 0;
        const _hgt1 = document.querySelector('.product-saerch-list-top') ? document.querySelector('.product-saerch-list-top').offsetHeight : 0;
        const _hgt2 = document.querySelector('.search-hashtag-result') ? document.querySelector('.search-hashtag-result').offsetHeight + parseInt(window.getComputedStyle(document.querySelector('.search-hashtag-result')).getPropertyValue('margin-top')) + parseInt(window.getComputedStyle(document.querySelector('.search-hashtag-result')).getPropertyValue('margin-bottom')) : 0;
        const _hgt3 = document.querySelector('.search-round-data-wrap') ? document.querySelector('.search-round-data-wrap').offsetHeight : 0;
        const _hgt4 = document.querySelector('.category-menu-two-depth-wrap') ? document.querySelector('.category-menu-two-depth-wrap').offsetHeight : 0;
        const _pad1 = document.querySelector('#searchTermResult') && document.querySelector('.saerch-result-content') ? parseInt(window.getComputedStyle(document.querySelector('.saerch-result-content')).getPropertyValue('margin-top')) + parseInt(window.getComputedStyle(document.querySelector('.saerch-result-content')).getPropertyValue('border-top-width')) : 0;
        
        const _list = document.querySelector('.saerch-result-content .list-product__searchlist') ? window.scrollY + document.querySelector('.saerch-result-content .list-product__searchlist').getBoundingClientRect().top : 0;
        const _top =  _list - _hgt1 - _hgt2 - _hgt3 - _hgt4 - _pad1 - _head ;
        $('html, body').animate({
            scrollTop: _top
        })
    })
}
// 검색 결과 리스트 위치 이동
function resetPosSearchResult(target) {
	const movePos = () => {
		const _head = document.querySelector('.saerch-top, .header') ? document.querySelector('.saerch-top, .header').offsetHeight : 0;
		const _hgt1 = document.querySelector('.product-saerch-list-top') ? document.querySelector('.product-saerch-list-top').offsetHeight : 0;
		const _hgt2 = document.querySelector('.search-hashtag-result') ? document.querySelector('.search-hashtag-result').offsetHeight + parseInt(window.getComputedStyle(document.querySelector('.search-hashtag-result')).getPropertyValue('margin-top')) + parseInt(window.getComputedStyle(document.querySelector('.search-hashtag-result')).getPropertyValue('margin-bottom')) : 0;
		const _hgt3 = document.querySelector('.search-round-data-wrap') ? document.querySelector('.search-round-data-wrap').offsetHeight : 0;
		const _hgt4 = document.querySelector('.category-menu-two-depth-wrap') ? document.querySelector('.category-menu-two-depth-wrap').offsetHeight : 0;
		const _pad1 = document.querySelector('#searchTermResult') && document.querySelector('.saerch-result-content') ? parseInt(window.getComputedStyle(document.querySelector('.saerch-result-content')).getPropertyValue('margin-top')) + parseInt(window.getComputedStyle(document.querySelector('.saerch-result-content')).getPropertyValue('border-top-width')) : 0;
		
		const _list = document.querySelector('.saerch-result-content .list-product__searchlist') ? window.scrollY + document.querySelector('.saerch-result-content .list-product__searchlist').getBoundingClientRect().top : 0;
		const _top =  _list - _hgt1 - _hgt2 - _hgt3 - _hgt4 - _pad1 - _head ;
		window.scrollTo({
			left: 0,
			top: _top,
			behavior: 'instant'
		});	
	}
	const interSectionFunc = (target) => {
		const options = {
			threshold: 0
		}
		const callback = (entries, observer) => {
			return entries.forEach(entry => {
				const {target} = entry;
				if (!entry.isIntersecting) {
					movePos();
				}
			});
		};
		const observer = new IntersectionObserver(callback, options);
		observer.observe(target);
	}
	interSectionFunc(document.querySelector('#main_loading_area'));
}
// brand sticky
function brandSticky() {
    const _base = document.querySelector('.search-tab-content-wrap');
    const _target = _base.querySelector('.brand-category');
    const _result = _base.querySelector('.kr-en-conversion-wrap');
    const _tab = document.querySelectorAll('.search-tab-menu li');
    const _tabContent = _base.querySelector('.brand-search-tab-content');
    const _parent = _base.querySelector('.brand-category-content');
    const setPos = () => {
        if (!_tabContent.classList.contains('active')) {
            return;
        }
        const _baseTop = _base.getBoundingClientRect().top - 40;
        const _top = _parent.getBoundingClientRect().top - 20;
        const _targetHgt = _target.clientHeight;
        const _resultHgt = _result.clientHeight;
        if (_base.scrollTop > _top) {
            !_base.classList.contains('is-fixed') && _base.classList.add('is-fixed');
            _parent.style.paddingTop = `${_targetHgt + _resultHgt}px`;
            _target.style.top = `${_baseTop}px`;
            _result.style.top = `${_baseTop + _targetHgt}px`;
        } else {
            _base.classList.contains('is-fixed') && _base.classList.remove('is-fixed');
            _parent.removeAttribute('style');
            _target.removeAttribute('style');
            _result.removeAttribute('style');
        }
    }
    _base.addEventListener('scroll', () => {
        setPos();
    })
    Array.prototype.forEach.call(_tab, (tab, idx) => {
        tab.addEventListener('click', () => {
            _base.scrollTop = 0;
            setPos();
        });
    })
    setPos();
}
// class toggle
function changeCls({base, btn, cls, rel, dip}) {
    if (!base || !base.querySelector(btn)) {
        return
    }
    base.querySelector(btn).addEventListener('click', () => {
        if (base.classList.contains(cls)) {
            base.classList.remove(cls);
            rel && base.parentNode.querySelector(rel) && base.parentNode.querySelector(rel).classList.remove(cls);
            rel && base.parentNode.querySelector(rel) && base.parentNode.querySelector(rel).removeAttribute('style');
        } else {
            base.classList.add(cls);
            rel && base.parentNode.querySelector(rel) && base.parentNode.querySelector(rel).classList.add(cls);
            rel && base.parentNode.querySelector(rel) && base.parentNode.querySelector(rel).setAttribute('style', `display: ${dip}`);
        }
    });
}
// 세트상품 하단 장바구니 영역 활성화
function cartBtnArea({base, btn, cls}) {
    const _base = document.querySelector(base);
    const _btn = _base.querySelector(btn);
    if (!_btn) {
        return;
    }
    _btn.addEventListener('click', () => {
        if(_base.classList.contains(cls)) {
            _base.classList.remove(cls);
        } else {
            _base.classList.add(cls);
        }
    });
}
// checkbox 전체 선택
function agreeCheckAll(base) {
    if (!base.querySelector('dd input[type=checkbox]')) {
        return;
    }
    const _inputs = base.querySelectorAll('dd input[type=checkbox]');
    const _len = _inputs.length;
    const _all = base.querySelector(`dt input[type=checkbox]`);
    const checkAll = () => {
        const _checked = base.querySelectorAll('dd input[type=checkbox]:checked').length;
        if (_checked === _len) {
            _all.checked = true;
        } else {
            _all.checked = false;
        }
    }
    const checkUnit = (type) => {
        Array.prototype.forEach.call(_inputs, inp => {
            if (type) {
                inp.checked = true
            } else {
                inp.checked = false;
            }
        });
    }
    _all.addEventListener('change', () => {
        if (_all.checked) {
            checkUnit(true)
        } else {
            checkUnit(false);
        }
    })
    Array.prototype.forEach.call(_inputs, inp => {
        inp.addEventListener('change', checkAll);
    })
}
// 스크롤 제어
function scrollHide() {
    document.querySelector('html, .productList').style.overflowY = 'hidden';
}

// 스크롤 제어
function scrollShow() {
    document.querySelector('html, .productList').style.overflowY = 'unset';
}

$(document).mouseup(function(e) {
    if ($(e.target).parents('.product-category-menu').length == 0) {
        $('.product-category-menu li').removeClass('active');
        $('.product-category-menu ul').hide();
    }
});
// sticky
function unitSticky({target, basis, base}) {
    const _footer = document.getElementById('footer');
    const _parent = target.parentNode;
    const _sibling = _parent.querySelector('.list-product__searchlist');
    const _bar = _parent.parentElement.querySelector('.product-saerch-list-top');
    const _filterBtn = _parent.querySelector('.filter-apply-btn');
    let _isTemp = false;
    const _basisHgt = Array.prototype.reduce.call(basis, (acc, unit) => {
        if (!document.querySelector(unit)) {
            return;
        }
        return acc += document.querySelector(unit).clientHeight
    }, 0)
    const calcuHgt = (target) => {
        return Array.prototype.reduce.call(target, (acc, el) => {
            const _val = parseInt(window.getComputedStyle(el).marginTop) + parseInt(el.clientHeight);
            return acc + _val;
        }, 0)
    }
    let _hgt = calcuHgt(target.children);
    let _top = window.scrollY + document.querySelector(base).getBoundingClientRect().top;
    const _pos = window.scrollY + target.getBoundingClientRect().top + _basisHgt;
    let _footerPos = window.scrollY + _footer.getBoundingClientRect().top;
    
    const checkPos = () => {
        _top = window.scrollY + document.querySelector(base).getBoundingClientRect().top;
        _hgt = calcuHgt(target.children);
        _footerPos = window.scrollY + _footer.getBoundingClientRect().top;
        if (_parent.querySelectorAll('.saerch-result-content .list-product__searchlist li, .list-product li').length < 1) {
            return;
        }
        if (window.scrollY >= _top && window.scrollY + _hgt + _basisHgt < _footerPos) {
            _isTemp = false;
            // !_parent.classList.contains('fixed') && _parent.classList.add('fixed');
            // target.removeAttribute('style');
        } else if (window.scrollY + _hgt - _basisHgt > _footerPos) {
            if (!_isTemp) {
                _isTemp = true;
                const _computed = window.innerHeight - target.getBoundingClientRect().top - _footer.getBoundingClientRect().top - 20;
                target.style.height = `${_computed}px`;
            }
        } else {
            _isTemp = false;
            const _max = _sibling.clientHeight;
            const _fooHgt = window.innerHeight - _footer.getBoundingClientRect().top > 0 ? window.innerHeight - _footer.getBoundingClientRect().top : 0;
            const _computed = window.innerHeight - _bar.getBoundingClientRect().top - _fooHgt - 80;
            const _last = _computed > _max ? _max : _computed;
            if (_last > 10) {
                target.style.height = `${_last}px`;
            }
        }
    }
    _filterBtn && _filterBtn.addEventListener('click', () => {
        const _top = document.querySelector('.saerch-result-content .list-product__searchlist') ? window.scrollY + document.querySelector('.saerch-result-content .list-product__searchlist').getBoundingClientRect().top - 190 : 0;
        $('html, body').animate({
            scrollTop: _top
        })
    })
    window.addEventListener('scroll', () => {
        if (_parent.querySelectorAll('.saerch-result-content .list-product__searchlist li, .list-product li').length > 4) {
            checkPos();
        }
    });
    let observer = new ResizeObserver(function(entries) {
        entries.forEach(function(entrie) {
            if (_parent.querySelectorAll('.saerch-result-content .list-product__searchlist li, .list-product li').length > 4) {
                checkPos();
            }
        })
    })
    observer.observe(document.body);
}
function viewFilter({base, btn}) {
    const _promo = base.querySelector('.product__promotion-bg');
    const setPromo = (hgt) => {
        _promo.style.height = hgt;
    }
    btn.addEventListener('click', () => {
        if (base.classList.contains('is-active')) {
            base.classList.remove('is-active');
            _promo && setPromo('394px');
        } else {
            base.classList.add('is-active');
            _promo && setPromo('504px');
        }
    })
}
// video btn
function setVideoBtn(el) {
    const _video = el.querySelector('video');
    if (!_video) {
        return;
    }
    const playVideo = (btn) => {
        btn.addEventListener('click', () => {
            if (_video.paused) {
                _video.play();
                !el.classList.contains('is-play') && el.classList.add('is-play');
            }  else {
                _video.pause();
                el.classList.contains('is-play') && el.classList.remove('is-play');
            }
        })
    }
    const init = () => {
        const _btn = document.createElement('button');
        _btn.setAttribute('type', 'button');
        _btn.className = 'btn-play';
        el.append(_btn);
        playVideo(_btn);
    }
    init();
}
// h.share 그래프 (main참고)
function setShareGraph(el) {
    const setGraph = ({target, is}) => {
        const _total = parseInt(target.querySelector('.co-buying__max').innerHTML);
        const _cur = parseInt(target.querySelector('.co-buying__current').innerHTML);
        const _graph = target.querySelector('.co-buying__bar');
        if (_graph.classList.contains('is-active')) {
            return;
        }
        if (is) {
            const _wid = _cur / _total * 100;
            _graph.style.width = `${_wid > 100 ? 100 : _wid}%`;
            _graph.classList.add('is-active');
        }

    }
    setOpserve({target: el, func: setGraph, end: true}) // 20230513 수정
}

const siblings = (el) => { return [...el.parentNode.children].filter((child) => child !== el) }
function setClass(el, currentClass) {
    let element = el

    const getFirstClass = (element) => {return element.classList[0]}
    const getSibs = siblings(el, getFirstClass(el))

    el.classList.add(currentClass)
    getSibs.forEach(sib => {
        sib.classList.remove(currentClass)
    })
}

// 검색
function setSearchClear() {
    const searchBox = document.querySelectorAll('.display_search_top')
    searchBox.forEach(box => {
        const input = box.querySelector('input')
        const btnClear = box.querySelector('.display_search_clear')
        let isActive = false //현재 input에 입력이벤트가 있었는지 구분하기 위한 목적
        let lastState = false //현재 value가 있는지 없는지 구분하기 위한 목적
        input.addEventListener('input', () => {
           input.value !== '' ? isActive = true : isActive = false
            if (isActive !== lastState) {
                setClear(isActive, box)
            }
            lastState = isActive
        })
        btnClear.addEventListener('click', () => {
            lastState = false
            setClear(false, box)
        })
    })
    function setClear(bool, inp) {
        const inputs = inp.querySelector('input')
        const btnClear = inp.querySelector('.display_search_clear')
        if (bool) {
            //value가 있는 상태
            btnClear.style.display = 'block'
        } else {
            //value가 없는 상태
            inputs.value = ''
            btnClear.style.display = 'none'
        }
    }
} 

//리스트 ACTIVE
function setRoundDataList(el) {
    const tarWrap = document.querySelector(el)
    if (tarWrap === null) {return}
    const eventTarget = tarWrap.querySelectorAll('button')

    $(document).on('click', `${el} button`, function() {
        const _btnParent = $(this).parent();
        setClass(_btnParent[0], 'active')
    })
}

// 혜택 swiper
function benefitsBannerSwiper(el) {
    if (el.querySelectorAll('.swiper-slide').length < 2) {
        el.classList.add('is-single');
        return;
    }
    const _opt = {target: '.benefits-topbanner-swiper', gap: 24, pagination: '.swiper-pagination', paginationType: 'fraction', autoplay: 5000, viewNum: 2};
    const _visual = document.querySelector('.benefits-topbanner-swiper');
    if (_visual === null ) return
    if (_visual.querySelectorAll('.swiper-slide').length > 3) {
        _opt.loop = 'loop';
    }
    const pageNum = _visual.querySelectorAll('.swiper-slide').length > 3 ? 1 : 2;
    const mainVisual = setSwiper(_opt);
    const _playBtn = _visual.querySelector('.btn-swiper-play button');
    _playBtn.addEventListener('click', (e) => {
        if (!_playBtn.classList.contains('is-play')) {
            _playBtn.classList.add('is-play');
            _playBtn.innerHTML = '자동 슬라이드 시작'
            mainVisual.autoplay.stop();
        } else {
            _playBtn.classList.remove('is-play');
            _playBtn.innerHTML = '자동 슬라이드 중지'
            mainVisual.autoplay.start();
        }
    });
    // progress bar
    setProgressBar({base: '.box-benefits', bar: '.swiper-progress', pageNum});
    
    const imgLightFunc = (img) => {
        const _val = 180; // 숫자값을 높이면 더 밝은 이미지에서 color black 
        img && imgLightCheck(img, (bright) => {
            img.closest('.banner__item').setAttribute('data-bright', bright);
            bright > _val && img.closest('.banner__item').classList.add('type-color-black');
        });
    }
    const transitionFunc = (el) => {
        const _total = el.slides.length;
        const _firstImg = [el.slides[el.realIndex].querySelector('img'), el.slides[(el.realIndex + 1) % _total].querySelector('img')];
        _firstImg.forEach(img => img && imgLightFunc(img));
        el.on('transitionEnd', function() {
            setProgressBar({base: '.box-benefits', bar: '.swiper-progress', idx: this.realIndex, pageNum});
        });
        el.on('transitionStart', function() {
            const _swiper = [el.slides[el.realIndex].querySelector('img'), el.slides[(el.realIndex + 1) % _total].querySelector('img')];
            _swiper.forEach(img => img && imgLightFunc(img));
        });
    }
    transitionFunc(mainVisual);
}

// progress bar 

function setProgressBar({base, bar, idx, pageNum}) {
    const _pageNum = pageNum ? pageNum : 1;
    const _swiper = typeof base === 'string' ? document.querySelectorAll(`${base} .swiper-slide`) : base.querySelectorAll('.swiper-slide');
    const _total = document.querySelector(base).querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length - (_pageNum - 1);
    const _progress = typeof base === 'string' ? document.querySelector(`${base} ${bar}`) : base.querySelector(bar);
    const _wid = _progress.clientWidth / _total;
    const _bar = _progress.querySelector('.scrollbar__unit') ? _progress.querySelector('.scrollbar__unit') : document.createElement('div');
    const init = () => {
        _bar.className = 'scrollbar__unit';
        _progress.classList.add('set-bar');
        _bar.style.width = `${_wid}px`;
        _progress.append(_bar);
    }
    const setBarWid = (idx) => {
        _bar.style.width = `${_wid * (idx + 1)}px`;
    }
    !_progress.classList.contains('set-bar') && init();
    _progress.classList.contains('set-bar') && setBarWid(idx);

}

//혜택 탭
function displayTabEvent () {
    // 탭
    const displayTabList = document.querySelectorAll('.display_tab_item button');
    const displayTabContent = document.querySelectorAll('.display_tab_content');
    Array.prototype.forEach.call(displayTabList, (tab) => {
        tab.addEventListener('click', function() {
            const parents = tab.parentElement
            const sibs = siblings(parents)

            if (tab.parentElement.parentElement.classList.contains('display_tab_menu')) {
                scrollLeft(tab);
            }
            parents.classList.add('active')
            for (let i = 0; i < sibs.length; i++) {
                let childBtn = sibs[i].querySelector('button')
                sibs[i].classList.remove('active')

                childBtn.setAttribute('aria-selected', 'false')
                childBtn.setAttribute('tab-index', -1)
            }
            tab.setAttribute('aria-selected', 'true')
            tab.setAttribute('tab-index', 1)

            let tablabel = tab.getAttribute('aria-controls')
            let displayTabContentTarget = document.querySelector(`[aria-labelledby=${tablabel}]`)

            if (tablabel === null) {return}

            // displayTabContent.classList.remove('active')
            displayTabContent.forEach(el => el.classList.remove('active'))
            displayTabContentTarget.classList.add('active')
        })
    });
    const scrollLeft = (btn) => {
        const _wrap = btn.closest('.search-tab-menu.display_tab_menu');
        const _parent = btn.parentElement;
        _wrap.scrollTo({
            left: _parent.offsetLeft - 20,
            top: 0,
            behavior: 'smooth'
        });
    }
}

// 스크롤 제어
function scrollHide() {
    document.querySelector('html, .area-display-benefits, .area-dispaly-sale, .area-display-bests').style.overflowY = 'hidden';
}

// 스크롤 제어
function scrollShow() {
    document.querySelector('html, .area-display-benefits, .area-dispaly-sale, .area-display-bests').style.overflowY = 'unset';
}

// 오늘의 특가(상품) 슬라이드
function specialProductsSlider () {
    if (document.querySelector('.specials_products_swiper--pc') === null ) return
    const _base = document.querySelector('.specials_products_swiper--pc');
    if (_base.querySelectorAll('.swiper-slide').length < 2) {
        _base.classList.add('is-single');
        return;
    }
    let swiperTodayHotdeal = new Swiper('.specials_products_swiper--pc', {
        slidesPerView: 1,
        spaceBetween: 24,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.specials_products .swiper-button-next',
            prevEl: '.specials_products .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
    let pageNum = 1

    setProgressBar({base: '.specials_products', bar: '.swiper-progress', pageNum});

    swiperTodayHotdeal.on('transitionEnd', function() {
        setProgressBar({base: '.specials_products', bar: '.swiper-progress', idx: this.realIndex, pageNum});
    })
}
// 오늘의 특가(브랜드) 슬라이드
function specialBrandsSlider () {
    if (document.querySelector('.specials_brands_swiper--pc') === null ) return
    const _base = document.querySelector('.specials_brands_swiper--pc');
    if (_base.querySelectorAll('.swiper-slide').length < 2) {
        _base.classList.add('is-single');
        return;
    }
    let swiperTodayHotdeal = new Swiper('.specials_brands_swiper--pc', {
        slidesPerView: 1,
        spaceBetween: 24,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.specials_brands .swiper-button-next',
            prevEl: '.specials_brands .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
    let pageNum = 1

    setProgressBar({base: '.specials_brands', bar: '.swiper-progress', pageNum});

    swiperTodayHotdeal.on('transitionEnd', function() {
        setProgressBar({base: '.specials_brands', bar: '.swiper-progress', idx: this.realIndex, pageNum});
    })
}

// H.Share 슬라이드
function setHShareSlider () {
    if (document.querySelector('.specials_h-share_swiper--pc') === null ) return
    const _base = document.querySelector('.specials_h-share_swiper--pc');
    if (_base.querySelectorAll('.swiper-slide').length < 5) {
        _base.classList.add('is-single');
        return;
    }
    let swiperHShare = new Swiper('.specials_h-share_swiper--pc', {
        slidesPerView: 4,
        spaceBetween: 24,
        navigation: {
            nextEl: '.hshares .swiper-button-next',
            prevEl: '.hshares .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    let pageNum = 4

    setProgressBar({base: '.hshares', bar: '.swiper-progress', pageNum});

    swiperHShare.on('transitionEnd', function() {
        setProgressBar({base: '.hshares', bar: '.swiper-progress', idx: this.realIndex, pageNum});
    })
}

// 탭 동적 처리
function searchRoundBtn(base) {
    const scrollLeft = (btn) => {
        btn.closest('.search-round-data') && btn.closest('.search-round-data').scrollTo({
            left: btn.parentElement.offsetLeft - 20,
            top: 0,
            behavior: 'smooth'
        });
    }
    base && base.parentElement.addEventListener('click', (e) => {
        if (!e.target.closest('.search-round-data') || e.target.nodeName !== 'BUTTON') {
            return;
        }
        const _wrap = e.target.closest('.search-round-data');
        scrollLeft(e.target);
        setOneCls({base: _wrap.children[0], unit: e.target.parentElement, cls: 'is-active'});
    })
    if (document.querySelector('.display_tab_content.is-active .search-round-data ul')) {
        scrollLeft(document.querySelector('.display_tab_content.is-active .search-round-data li.is-active button'));
    }
}
// 부모 영역에서 하나의 유닛에 class 설정
function setOneCls({base, unit, cls}) {
    const _units = base.children;
    Array.prototype.forEach.call(_units, unit => {
        unit.classList.contains(cls) && unit.classList.remove(cls);
    });
    !unit.classList.contains(cls) && unit.classList.add(cls);
}
function textSwipe() {
    let offsetYpos = window.pageYOffset;
    let lastScrollTop = 0;
    let psMainBg = document.querySelector('.container.ps_main_bg');
    let psMainWrap = document.querySelector('.personal .ps_main_wrap');
    let psSliderCard = document.querySelector('.personal .ps_main_wrap .ps_slider_card');
    let psTitle = document.querySelector('.personal .ps_info_top .ps_title');
    let psShort = document.querySelector('.personal .ps_main_wrap .ps_info_top .ps_short');
    let psDday = document.querySelector('.personal .ps_main_wrap .ps_info_top .ps_short .ps_Dday');
    let psMagneticInfo = document.querySelector('.personal .ps_main_wrap .ps_info_top .ps_short .ps_magnetic_info');
    let psDetailWrap = document.querySelector('.personal .ps_main_wrap .ps_info_top .ps_detail_wrap');
    let nonMember = document.querySelector('.personal .ps_info_top .ps_detail_wrap.non_member');
    let psResister = document.querySelector('.personal .ps_info_top .ps_detail_wrap.non_member .ps_resister');
    let psTo = document.querySelector('.personal .ps_info_top .ps_to');
    let psExit = document.querySelector('.personal .ps_main_wrap .ps_info_top .ps_short .ps_exit');
    let passport = document.querySelector('.personal .ps_info_top .ps_detail.passport');

    if (offsetYpos > lastScrollTop) {
        psTitle.style.transform = 'scale(0.65)'; // 폰트 사이즈 기본값 16px
    } else if (offsetYpos === 0) {
        psTitle.style.transform = 'unset';
    }
    lastScrollTop = offsetYpos;

    if (offsetYpos >= 100) {
        if (psDday !== null || passport !== null || psTo !== null || psExit !== null) {
            psDday.classList.add('ps_Dday_rolling');
            passport.style.marginTop = '0px';
            psTo.style.paddingLeft = '20px';
            psExit.style.display = 'flex';
        }
        psMagneticInfo.classList.add('ps_magnetic_info_rolling');
        psMainWrap.style.cssText = `padding-top: 0px;`;
        !psMainWrap.classList.contains('is-fold') && psMainWrap.classList.add('is-fold');
        psSliderCard.style.marginTop = '20px';
        psShort.style.marginTop = '0px';
        psMagneticInfo.style.cssText = `display: flex; padding: 0 20px;`;
        psDetailWrap.style.cssText = `height: 0px; opacity: 0; transform: translateY(-10px);`;
        if (nonMember) {
            nonMember.style.marginBottom = '0px';
        }
        if (psResister) {
            psResister.style.display = 'none';
        }
    } else {
        if (psDday !== null || passport !== null || psTo !== null || psExit !== null) {
            psDday.classList.remove('ps_Dday_rolling');
            passport.style.marginTop = '25px';
            psTo.style.paddingLeft = '15px';
            psExit.style.display = 'none';
        }
        psMagneticInfo.classList.remove('ps_magnetic_info_rolling');
        psMainWrap.style.cssText = `padding-top: 80px;`;
        psMainWrap.classList.contains('is-fold') && psMainWrap.classList.remove('is-fold');
        psSliderCard.style.marginTop = '32px';
        psShort.style.marginTop = '8px';
        psMagneticInfo.style.cssText = `display: none; padding:0 8px;`;
        psDetailWrap.style.cssText = `height: auto; opacity: 1; transform: translateY(0px);`;
        if (nonMember) {
            nonMember.style.marginBottom = '48px';
        }
        if (psResister) {
            psResister.style.display = 'block';
        }
    }

    if (psDetailWrap.classList.contains('non_member')) {
        psMainBg.style.paddingBottom = '200px';
    } else {
        psMainBg.style.paddingBottom = '174px';
    }
}
// benefit swiper
function swiperBenefit(cls) {
    new Swiper(cls, {
        slidesPerView: 3,
        observer: true,
        observeParents: true,
        spaceBetween: 8,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
}
// 메인(혜택) 바로보기 슬라이드
function mainBenefit() {
    const panels = document.querySelectorAll('.ps_card_box');

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    gsap.set('.ps_card_box', {
        zIndex: (i) => panels.length + i
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.personal',
            markers: false,
            pin: true,
            start: 'top 0%',
            end: '+=100%',
            scrub: 1,
        }
    });

    gsap.to('.ps_benefits_card_box_1', {
        opacity: 0.5,
        scale: 0.9,
        scrollTrigger: {
            trigger: '.ps_benefits_card_box_1',
            markers: false,
            start: 'top 0%',
            end: '+=10%',
            scrub: 1,
        }
    });
    gsap.to('.header', {
        scrollTrigger: {
            trigger: '.ps_benefits_card_box_2',
            markers: false,
            start: 'top 0%',
            end: '+=100%',
            scrub: 1,
        }
    });

    panels.forEach((el, i) => {
        let heighting = el.clientHeight - 405; // 박스 스와이프 했을 때 비스듬하게 겹치기 위해 수치값 조절
        // let gap = 20;
        let gap = 0;

        gsap.set(el, {
            position: 'absolute', top: `${heighting * i}`
        });

        tl.to(el, {
            y: `-${(heighting - gap) * i}`
        }).addLabel(el.classList[1]);
    });

    window.onscroll = textSwipe;
    /**
     * 메인(혜택) 상단 스와이프 이벤트
     */
}
// 메인(혜택) 바로보기 스크롤
function mainScrollBenefit() {
    const _base = document.querySelector('.ps_main_wrap');
    const _isAll = !!_base.querySelector('.ps_detail_wrap');
    const _head = document.querySelector('.header') || document.createElement('div');
    const _wrapInfo = _base.querySelector('.ps_info_top') || document.createElement('div');
    const _info = _base.querySelector('.ps_detail_wrap') || document.createElement('div');
    const _benefit = _base.querySelector('.ps_benefits') || document.createElement('div');
    const _content = _base.querySelector('.ps_slider_card') || document.createElement('div')
    const initial = {
        old: 0,
        cur: 0,
        dir: 0,
        info: 0,
        benefit: 0,
        wrapPos: 0,
        infoPos: 0,
        benefitPos: 0,
        scale: 1,
        opacity: 1,
        contPad: 0,
        scroll1: 260,
        fixTop: 150,
    }
    const init = () => {
        initial.info = _info ? _info.clientHeight : 0;
        initial.infoPos = _info ? window.scrollY + _info.getBoundingClientRect().top : 0;
        initial.wrapPos = _wrapInfo ? window.scrollY + _wrapInfo.getBoundingClientRect().top : 0;
        initial.benefit = _benefit ? _benefit.clientHeight : 0;
        initial.benefitPos = _benefit ? window.scrollY + _benefit.getBoundingClientRect().top : 0;
        initial.contPad = _wrapInfo.clientHeight !== 0 && _benefit.clientHeight !== 0 ? 320 : _wrapInfo.clientHeight === 0 && _benefit.clientHeight !== 0 ? 145 : 0;
        initial.scroll1 = _wrapInfo.clientHeight !== 0 && _benefit.clientHeight !== 0 ? 340 : _wrapInfo.clientHeight === 0 && _benefit.clientHeight !== 0 ? 180 : 0;
        initial.fixTop = _wrapInfo.clientHeight !== 0 && _benefit.clientHeight !== 0 ? 110 : 20;
        _base.classList.contains('is-fixed') && _base.classList.remove('is-fixed');
        _base.classList.contains('is-fold') && _base.classList.remove('is-fold');
        window.addEventListener('scroll', () => {
            checkDirect(window.scrollY);
            scrollReaction(window.scrollY);
        })
    }
    const moveHead = (val) => {
        if (_wrapInfo) {
            _wrapInfo.style.marginTop = `${initial.scroll1 - val}px`;
        }
        _head.style.marginTop = `${initial.scroll1 - val}px`;
    }
    const benefitReset = () => {
        _base.classList.contains('is-fold') && _base.classList.remove('is-fold');
        _base.classList.contains('is-scroll') && _base.classList.remove('is-scroll');
        _base.classList.contains('is-fixed') && _base.classList.remove('is-fixed');
        _head.removeAttribute('style');
        _benefit & _benefit.removeAttribute('style');
        _wrapInfo && _wrapInfo.removeAttribute('style');
        _content && _content.removeAttribute('style');
    }
    const scrollReaction = (val) => {
        if (initial.infoPos - val > 0 && val > 10) {
            const _num = (initial.info - (val * 2) + 20) / initial.info;
            initial.scale = _num > 1 ? 1 : _num < 0 ? 0 : _num;
            _info.style.opacity = `${initial.scale}`;
            _info.style.height = `${initial.info * initial.scale}px`;
        } else if (val < 10) {
            _info.removeAttribute('style');
        }
        if (val > initial.scroll1) {
            !_base.classList.contains('is-scroll') && _base.classList.add('is-scroll');
            moveHead(val);
        } else {
            _base.classList.contains('is-scroll') && _base.classList.remove('is-scroll');
        }
        if (_wrapInfo && val < 80) {
            _wrapInfo.style.transform = `translateY(${(val / 3.8)}px`;
        } else if (_wrapInfo && val > 80 && val < initial.scroll1) {
            // _wrapInfo.style.transform = `translateY(-${(val)}px`;
        }
        if (initial.scale < 0.04 && _isAll || val > 0 && !_isAll ) {
            !_base.classList.contains('is-fixed') && _base.classList.add('is-fixed');
            _content.style.paddingTop = `${initial.contPad}px`;
            _benefit.style.top = `${initial.fixTop}px`;
            // _wrapInfo.style.top = `${parseInt(_wrapInfo.getBoundingClientRect().top) + ((1 - initial.scale) * 10)}px`;
            // _wrapInfo.style.top = '-60px';
        } else {
            _base.classList.contains('is-fixed') && _base.classList.remove('is-fixed');
            _content.removeAttribute('style');
            _benefit.style.top = 'auto';
            _wrapInfo && _wrapInfo.style.removeProperty('top');
        }
        if (val > initial.wrapPos - 50 && val < initial.wrapPos - 50 + (initial.benefit / 2)) {
            const _num = (initial.wrapPos - 50 + (initial.benefit / 2)) - val;
            initial.opacity = (1 - ((100 - _num) * 0.005));
            _benefit.style.transform = `scale(${1 - ((100 - _num) * 0.001)})`;
            _benefit.style.opacity = initial.opacity;
        }
        if (val > 0) {
            !_base.classList.contains('is-fold') && _base.classList.add('is-fold');
        } else {
            benefitReset();
        }
    }
    // 방향
    const checkDirect = (val) => {
        initial.old = val;
        if (initial.cur > initial.old) {
            initial.dir = 1;
        } else {
            initial.dir = -1;
        }
        initial.cur = initial.old;
    }
    init();
}
// 쇼핑 큐레이션 만들기 alert
function checkCuration(btn) {
    const _base = btn.closest('.taste-step-1');
    btn.addEventListener('click', () => {
        const _list = _base.querySelector(".tab-content.is-active [data-list=curation]");
        const _num = _list.querySelectorAll('input[type=checkbox]:checked').length;
        if (_num < 3) {
            makeAlert();
        }
    });
    const makeAlert = () => {
        const _alert = document.createElement('div');
        const _lang = document.querySelector('html').getAttribute('lang');
        const _txt = _lang === 'ko' ? '최대 3가지 관심 키워드 선택해주세요.' : _lang === 'zh' ? '请选择最多3个感兴趣的关键词。' : 'Please select up to three of the following categories.';
        _alert.className = 'txt-benefit-message';
        _alert.innerHTML = _txt;
        _mobile ? document.body.append(_alert) : btn.parentNode.append(_alert);
        setTimeout(() => {
            _alert.remove();
        }, 3000);
        return false;
    }
}
// 높이값 설정
function setScreenSize() {
    const _vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${_vh}px`);
}
// pc 메인 혜택 우측 float 메뉴
function floatBenefitBtn(base) {
    const _btn = base.querySelector('.float-benefit__btn');
    const _winHgt = window.innerHeight;
    const _footer = document.getElementById('footer');
    let _footerPos = window.scrollY + _footer.getBoundingClientRect().top;
    _btn.addEventListener('click', () => {
        if (base.classList.contains('is-active')) {
            elSlideDown({base: _btn.parentElement, target: _btn.parentElement.querySelector('.float-hidden-menu'), btn: _btn, cls: 'is-active', execute: false, is: 'ing'});
            // base.classList.remove('is-active')
        } else {
            elSlideDown({base: _btn.parentElement, target: _btn.parentElement.querySelector('.float-hidden-menu'), btn: _btn, cls: 'is-active', execute: true, is: 'ing'});
            // base.classList.add('is-active')
        }
    });
    window.addEventListener('scroll', () => {
        checkPos();
    });
    const setBenefitSwiper = () => {
        setSwiper({target: '.float-benefit .float-hidden-menu .swiper-container', viewNum: 'auto', navigation: true, direction: 'vertical', slidesPerGroup: 1})
    }
    const checkPos = () => {
        _footerPos = window.scrollY + _footer.getBoundingClientRect().top;
        if (window.scrollY < 10) {
            base.classList.contains('is-min') && base.classList.remove('is-min');
        } else if (window.scrollY + _winHgt < _footerPos) {
            !base.classList.contains('is-min') && base.classList.add('is-min');
            base.classList.contains('is-max') && base.classList.remove('is-max');
            base.removeAttribute('style');
        } else if (_footer.getBoundingClientRect().top < _btn.parentElement.getBoundingClientRect().top + _btn.parentElement.clientHeight) {
            !base.classList.contains('is-min') && base.classList.add('is-min');
            !base.classList.contains('is-max') && base.classList.add('is-max');
            base.style.top = `${_footer.getBoundingClientRect().top - _btn.parentElement.clientHeight - 30}px`;
        }
        // if (document.body.clientWidth < 948) {
        //     base.style.left = `${1042 - window.scrollX}px`;
        // }
    }
    checkPos();
    setBenefitSwiper();
}
// 오프라인 팝업 이미지 확대 축소
function offlineBrandZoom(el) {
    const _base = el.querySelector('.swiper-zoom-container');
    const _img = _base.querySelector('img');
    const initial = {
        scale: 1,
        firstX: 0,
        firstY: 0,
        isMove: false,
        moveLeft: 0,
        moveTop: 0,
        wid: 0,
        hgt: 0,
        oldTrans: {left: 0, top: 0},
        curTrans: {left: 0, top: 0},
    }
    const init = () => {
        _img.style.transitionDuration = '200ms';
        _base.style.transitionDuration = '300ms';
        initial.wid = _base.clientWidth;
        initial.hgt = _base.clientHeight;
        _base.style.transform = 'translate3d(0, 0, 0)';
        _base.closest('.swiper-wrapper').style.transform = 'translate3d(0, 0, 0)';
        if (initial.wid === 0 || initial.hgt === 0) {
            setTimeout(() => {
                init();
            }, 100);
        } else {
            dragStart();
            clickZoom();
        }
    }
    const dragStart = () => {
        _base.addEventListener("mousedown", mouseDown);
        _base.addEventListener("touchstart", mouseDown);
        _base.addEventListener("mousemove", mouseMove);
        _base.addEventListener("touchmove", mouseMove);
        window.addEventListener("mouseup", mouseUp);
        window.addEventListener("touchend", mouseUp);
        _base.addEventListener("mouseout", (e) => {
            mouseUp();
        });
    };
    const mouseDown = (event) => {
        if (initial.isMove) {
            return;
        }
        event.preventDefault();

        initial.firstX = event.type !== 'mousedown' ? event.touches[0].screenX : event.pageX;
        initial.firstY = event.type !== 'mousedown' ? event.touches[0].screenY : event.pageY;

        initial.moveLeft = 0;
        initial.moveTop = 0;
        initial.isMove = true;
    };
    const mouseMove = (event) => {
        if (!initial.isMove) {
            return;
        }

        const _moveX = event.type !== 'mousemove' ? event.touches[0].screenX : event.pageX;
        const _moveY = event.type !== 'mousemove' ? event.touches[0].screenY : event.pageY;

        initial.moveLeft = _moveX - initial.firstX;
        initial.moveTop = _moveY - initial.firstY;
        transImg(initial.moveLeft, initial.moveTop);
    };
    const mouseUp = () => {
        if (!initial.isMove) {
            return;
        }
        transImg(initial.moveLeft, initial.moveTop, 'end');
        initial.isMove = false;
    };
    // 이미지 이동
    const transImg = (left, top, type) => {
        const _areaWid = (initial.wid / 2) * (initial.scale - 1);
        const _areaHgt = (initial.hgt / 2) * (initial.scale - 1);
        const _leftMove = left + initial.oldTrans.left;
        const _topMove = top + initial.oldTrans.top;
        const _dilectX = _leftMove - _areaWid > 0 ? 1 : -1;
        const _dilectY = _topMove - _areaHgt > 0 ? 1 : -1;
        const _x = type === 'end' && Math.abs(_leftMove) > Math.abs(_areaWid) ? _areaWid * _dilectX : _leftMove;
        const _y = type === 'end' && Math.abs(_topMove) > Math.abs(_areaHgt) ? _areaHgt * _dilectY : _topMove;
        if (type === 'end') {
            initial.oldTrans = {left: initial.scale === 1 ? 0 : _x, top: initial.scale === 1 ? 0 : _y};
            _base.style.transitionDuration = '200ms'
        } else {
            _base.style.transitionDuration = '0ms'
        }
        _base.style.transform = `translate3d(${initial.scale === 1 ? 0 : _x}px, ${initial.scale === 1 ? 0 : _y}px, 0px)`;
    }
    // 확대 축소 버튼 클릭
    const clickZoom = () => {
        const _btns = el.querySelectorAll('.area-offline-brand .wrap-btn button');
        Array.prototype.forEach.call(_btns, btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                btn.classList.contains('btn-zoom-in') && imgZoomIn(true);
                btn.classList.contains('btn-zoom-out') && imgZoomIn(false);
            })
        })
    }
    const imgZoomIn = (type) => {
        if (type) {
            initial.scale = initial.scale + 1 > 3 ? 3 : initial.scale + 1;
        } else if (!type && initial.scale > 0) {
            initial.scale = initial.scale - 1 < 1 ? 1 : initial.scale - 1;
        }
        _img.style.transform = `translate3d(0, 0, 0) scale(${initial.scale})`;
        _base.style.transform = 'translate3d(0, 0, 0)';
        initial.oldTrans.top = 0;
        initial.oldTrans.left = 0;
    }
    init();
}
// 카테고리 펼칠
function viewTopCategory(btn) {
    const _category = btn.parentElement.querySelector('.depth_menu, .category-menu-one-depth');
    if (!_category) {
        return;
    }
    btn.addEventListener('click', () => {
        if (btn.classList.contains('is-active')) {
            _category.style.display = 'none';
            btn.classList.remove('is-active');
        } else {
            _category.style.display = 'block';
            btn.classList.add('is-active');
        }
    })
}
// 무한롤링
function infinityRolling(el) {
    const _wid = window.innerWidth;
    const _elWid = el.clientWidth;
    const _ratio = _wid / _elWid;
    const _float = document.querySelector('.float-benefit');
    const clone = {};
    const init = () => {
        _float && _float.classList.add('type-wide');
        for (let i = 0; i < Math.ceil(_ratio); i++) {
            clone[`div${i}`] = el.children[0].cloneNode(true);
            el.append(clone[`div${i}`]);
            el.dataset.direct === 'left' && el.classList.add('is-moved');
            !el.classList.contains('is-rolling') && el.classList.add('is-rolling');
        }
    }
    init();
}
// 레이어 팝업 창
function setLayHgt(el, type) {
    const layer = el.closest('.box-float-layer');
    // 팝업 높이값 만들기
    const setHgt = (layer) => {
        const _hgt = window.innerHeight;
        const _child = layer.querySelector('.guidance-popup');
        const _baseHgt = 60;
        let _excHgt = 0;
        if (!_child || !layer.querySelector('.guidance-area')) {
            return;
        }
        const _scroll = layer.querySelector('.guidance-area');
        if ((_hgt - _baseHgt) < layer.clientHeight) {
            layer.style.height = `${_hgt - _baseHgt}px`;
        } else {
            return;
        }
        _excHgt = Array.prototype.reduce.call(layer.querySelectorAll('.layer-title'), (acc, el) => {
            return acc += el.clientHeight + parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
        }, 0);
        const _layerExc = parseInt(window.getComputedStyle(_child).getPropertyValue('padding-top')) + parseInt(window.getComputedStyle(_child).getPropertyValue('padding-bottom'));
        const _scrollExc = parseInt(window.getComputedStyle(_scroll).getPropertyValue('margin-top'));
        const _computedHgt = _hgt - _baseHgt - _excHgt - _scrollExc - _layerExc - 72;
        
        if (_computedHgt <= _child.clientHeight) {
            _scroll.style.height = `${_computedHgt}px`;
        }
    }
    setTimeout(() => {
        layer.classList.contains('active') && setHgt(layer);
    }, 100);
}
// 상품 상세 더보기
function openProdctDetail(el) {
    const _lang = document.querySelector('html').getAttribute('lang');
    const _openTxt = _lang === 'ko' ? '더 보기' : _lang === 'en' ? 'View more' : '展开'; 
    const _closeTxt = _lang === 'ko' ? '닫기' : _lang === 'en' ? 'Close' : '关闭';
    const _target = el.parentElement.parentElement.querySelector('.prodCont');
    const _max = _mobile ? 900 : 1870;
    if (!_target) {
        return;
    }
    const init = () => {
        if (_target.clientHeight < _max) {
            el.classList.contains('is-hide') && el.classList.remove('is-hide');
        } else {
            el.classList.add('is-hide');
        }
    }
    init();
    el.addEventListener('click', () => {
        if (_target.classList.contains('is-open')) {
            _target.classList.remove('is-open');
            _target.parentElement.classList.remove('is-open');
            el.querySelector('span').innerHTML = _openTxt;
            $('html, body').animate({
                scrollTop: window.scrollY + _target.getBoundingClientRect().top
            })
        } else {
            _target.classList.add('is-open');
            _target.parentElement.classList.add('is-open');
            el.querySelector('span').innerHTML = _closeTxt;
        }
    });

}
// intersection observer
function intSecObserver(target) {
    const options = {
        threshold: 0
    }
    const callback = (entries, observer) => {
        return entries.forEach(entry => {
            const {target} = entry;
            if (entry.isIntersecting) {
                target && setLayHgt(target, 'inner');
            }
        });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
}
// pc 상품 상세 anchor
function anchorMovePc(base) {
    const _topHgt = document.getElementById('header').clientHeight;
    const _btns = base.querySelectorAll('button');
    const _btnHgt = _btns[0].clientHeight;
    let _pos = 0;
    const _tabConts = base.parentNode.querySelectorAll('.tab_cont');
    let _contPos = Array.prototype.map.call(_tabConts, cont => {
        return window.scrollY + cont.getBoundingClientRect().top - parseInt(window.getComputedStyle(cont).getPropertyValue('margin-top')) - 50;
    });
    let _is = false;
    const sclEvt = () => {
        if (window.scrollY >= _pos) {
            !base.parentNode.classList.contains('fixed') && base.parentNode.classList.add('fixed');
        } else {
            base.parentNode.classList.contains('fixed') && base.parentNode.classList.remove('fixed');
        }
        checkCurPos(window.scrollY);
    }
    const throttleUse = (callback) => {
        let _timeOut = null;
        _pos = window.scrollY + base.getBoundingClientRect().top - _topHgt;
        _contPos = Array.prototype.map.call(_tabConts, cont => {
            return window.scrollY + cont.getBoundingClientRect().top - parseInt(window.getComputedStyle(cont).getPropertyValue('margin-top')) - 50;
        });
        return function () {
            if (_timeOut) {
                window.cancelAnimationFrame(_timeOut);
            }
            _timeOut = window.requestAnimationFrame(function () {
                callback();
            });
        }
    }
    window.addEventListener('scroll', throttleUse(sclEvt, 100));
    const checkCurPos = (pos) => {
        if (_is) {
            return;
        }
        for (let i = 0; i < _contPos.length; i++) {
            const _computed = _contPos[i] - _btnHgt - _topHgt;
            if (pos > _computed && pos < _tabConts[i].clientHeight + _computed) {
                // removeArrCls(base.querySelectorAll('li'), 'is-active');
                base.querySelector('.is-active') && base.querySelector('.is-active').classList.remove('is-active');
                !_btns[i].parentNode.classList.contains('is-active') && _btns[i].parentNode.classList.add('is-active');
            }
        }
    }
    Array.prototype.forEach.call(_btns, btn => {
        btn.addEventListener('click', (e) => {
            const _link = btn.getAttribute('aria-controls');
            if (_link === -1) {
                return;
            }
            _is = true;
            base.querySelector('.is-active') && base.querySelector('.is-active').classList.remove('is-active');
            !btn.parentNode.classList.contains('is-active') && btn.parentNode.classList.add('is-active');
            e.preventDefault();
            const _target = document.querySelector(`[aria-labelledby=${_link}]`);
            $('html, body').animate({
                scrollTop: window.scrollY + _target.getBoundingClientRect().top - _topHgt - _btnHgt - 50
            }, function() {
                _is = false;
            })
        })
    });
    let observer = new ResizeObserver(function(entries) {
        entries.forEach(function() {
            throttleUse(sclEvt, 100);
        })
    })
    observer.observe(document.body);
}
// 모바일 브랜드 검색 초성 클릭
function initialConsonatScl(el) {
    // const _base = document.querySelector('.brand-category-wrap .initial-sound');
    const _base = el.closest('.searchLayer');
	const _changeBtn = _base.querySelectorAll('[data-lang]');
    const _btn = _base.querySelectorAll('.brandKrTabListM button, .brandEnTabListM button');
    const _scl = _base.querySelector('.search-tab-content-wrap');
    const _openBtn = _base.querySelector('.pop-open') ? _base.querySelector('.pop-open').offsetHeight : 0;
    const _searchTop = _base.querySelector('.saerch-top') ? _base.querySelector('.saerch-top').offsetHeight : 0;
    const _addHgt1 = _base.querySelector('.saerch-top-brand') ? _base.querySelector('.saerch-top-brand').offsetHeight : 0;
    const _addHgt2 = _base.querySelector('.search-tab-menu') ? parseInt(window.getComputedStyle(_base.querySelector('.search-tab-menu')).getPropertyValue('margin-top')) + _base.querySelector('.search-tab-menu').offsetHeight : 0;
    const _addHgt3 = _base.querySelector('.search-tab-contents') ? _base.querySelector('.search-tab-contents').offsetHeight : 0;
    const _addHgt4 = _base.querySelector('.brand-category-wrap') ? parseInt(window.getComputedStyle(_base.querySelector('.brand-category-wrap')).getPropertyValue('margin-top')) + parseInt(window.getComputedStyle(_base.querySelector('.brand-category-wrap')).getPropertyValue('padding-top')) : 0;
    const _add =  _openBtn + _searchTop + _addHgt1 + _addHgt2 + _addHgt3 + _addHgt4;
	_changeBtn && Array.prototype.forEach.call(_changeBtn, btn => {
		btn.addEventListener('click', () => {
			const _target = btn.closest('.brand-category-wrap').querySelector('.initial-sound');
			_target && _target.scrollTo({
				left: 0,
				top: 0,
				behavior: 'instant'
			})
			
		})
	})
    _btn && Array.prototype.forEach.call(_btn, btn => {
        btn.addEventListener('click', () => {
            const _cls = btn.innerHTML;
            const _top = document.querySelector('[data-keyword=' + _cls + ']').getBoundingClientRect().top;
            
			btn.closest('.initial-sound') && btn.closest('.initial-sound').scrollTo({
				left: btn.parentElement.offsetLeft - 95,
				top: 0,
				behavior: 'smooth'
			});
			_scl && _scl.scrollTo({
                top: _top + _scl.scrollTop - _add,
                left: 0,
                behavior: 'smooth'
            })
        })
	})
}
// 툴틸
function viewTooltip(btn, type) {
    btn.addEventListener('click', () => {
        _viewToolTip();
    });
    const _viewToolTip = () => {
        const _winWid = window.innerWidth;
        const _target = btn.parentNode.querySelector('.wrap-tooltip__content');
        const _top = btn.getBoundingClientRect().top;
        const _left = btn.getBoundingClientRect().left;
        // 레이어 경우 top 사용 안함
        if (!btn.closest('.layer-dim')) {
            _target.style.top = `${_top + 30}px`;
        }
        // 모바일, 레이어 경우 left 사용 안함
        if (!_mobile && !btn.closest('.layer-dim')) {
            if (_winWid - _left < 330) {
                _target.style.right = `${_winWid - _left - btn.offsetWidth}px`;
                _target.style.left = 'auto';
            } else {
                _target.style.left = `${_left}px`;
                _target.style.right = 'auto';
            }
        }
        removeOther();
        // _target.classList.add('active');
        _target.style.display = 'block';
        _target.querySelector('.btn-close').addEventListener('click', () => {
            // _target.classList.remove('active');
            _target.removeAttribute('style');
        });
        window.addEventListener('scroll', () => {
            _target.getAttribute('style') && _target.removeAttribute('style');
            if (!_target.classList.contains('active')) {
                return;
            }
            _target.classList.remove('active');
        })
    }
    const removeOther = () => {
        Array.prototype.forEach.call(document.querySelectorAll('.wrap-tooltip__content'), el => {
            el.classList.contains('active') && el.classList.remove('active');
            el.style.removeProperty('display');
        })
    }
    type && _viewToolTip();
}
// 생성된 DIV 영역 팝업
function showElPop1(data){
    if(data){
        tmpHtmlDiv = data;
        const delTargetId = $(data).attr('id');
        $("#"+delTargetId).remove();

        openEl3(tmpHtmlDiv);
    }
}
function openEl3(data) {
    if(!data){
        return;
    }
    // 팝업 높이값 만들기
    const setHgt = (layer) => {
        const _hgt = window.innerHeight;
        const _child = layer.firstElementChild;
        const _baseHgt = 60;
        let _excHgt = 0;
        if (_child.clientHeight === 0 || !layer.querySelector('.area-scroll')) {
            return;
        }

        const _scrolls = layer.querySelectorAll('.area-scroll');
        const _setHgtTargets = Array.prototype.map.call(_scrolls, el => {
            return el.parentNode.classList.contains('download-coupon') ? el.parentNode : el;
        });
        const _scrollHgt = _setHgtTargets[0].scrollHeight;

        if ((_hgt - _baseHgt) < _child.clientHeight) {
            _child.style.transitionDuration = '0s';
            _child.style.height = `${_hgt - _baseHgt}px`;
        }

        _excHgt = Array.prototype.reduce.call(layer.querySelectorAll('[data-scroll="exc"]'), (acc, el) => {
            return acc += el.clientHeight + parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
        }, 0);
        const _layerExc = parseInt(window.getComputedStyle(layer.firstElementChild).getPropertyValue('padding-top')) + parseInt(window.getComputedStyle(layer.firstElementChild).getPropertyValue('padding-bottom'));
        const _scrollExc = parseInt(window.getComputedStyle(_setHgtTargets[0]).getPropertyValue('margin-top'));
        const _computedHgt = _hgt - _baseHgt - _excHgt - _scrollExc - _layerExc;

        if (layer.querySelector('[data-scroll="exc"]') && _computedHgt <= _child.clientHeight) {
            Array.prototype.forEach.call(_setHgtTargets, el => {
                if (_computedHgt > _scrollHgt && !layer.querySelector('.wrap-search-sch')) {
                    el.style.height = `${_scrollHgt}px`;
                } else {
                    el.style.height = `${_computedHgt}px`;
                }
            })
        }
    }
    // 레이어 만들기
    const makeLayer = (res) => {
        const _layer = document.createElement('div');
        _layer.className = 'layer-dim';
        $(_layer).html(res);
        $("body").append(_layer);
        setTimeout(() => {
            _layer.querySelector('div').classList.add('active');
            const _dim = _layer.querySelector('[data-dim]') && _layer.querySelector('[data-dim]').dataset.dim;
            bodyFreeze(`${_dim ? 'freeze' : ''}`);
            // 레이어 높이값 설정
            !_mobile && setHgt(_layer);
        }, 100);
    }
    makeLayer(data);
}
// 팝업 높이값 만들기
function setLayerSelfHgt(layer) {
    const _hgt = window.innerHeight;
    const _child = layer.querySelector('.download-coupon') ? layer.querySelector('.download-coupon') : layer.firstElementChild;
    const _baseHgt = 60;
    let _excHgt = 0;
    if (_child.clientHeight === 0 || !layer.querySelector('.area-scroll')) {
        return;
    }

    const _scrolls = layer.querySelectorAll('.area-scroll');
    const _setHgtTargets = Array.prototype.map.call(_scrolls, el => {
        return el.parentNode.classList.contains('download-coupon') ? el.parentNode : el;
    });
    const _scrollHgt = _setHgtTargets[0].scrollHeight;

    if ((_hgt - _baseHgt) < _child.clientHeight) {
        layer.style.transitionDuration = '0s';
        layer.style.height = `${_hgt - _baseHgt}px`;
    }

    _excHgt = Array.prototype.reduce.call(layer.querySelectorAll('[data-scroll="exc"]'), (acc, el) => {
        return acc += el.clientHeight + parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
    }, 0);
    const _layerExc = parseInt(window.getComputedStyle(layer).getPropertyValue('padding-top')) + parseInt(window.getComputedStyle(layer).getPropertyValue('padding-bottom'));
    const _scrollExc = parseInt(window.getComputedStyle(_setHgtTargets[0]).getPropertyValue('margin-top'));
    const _computedHgt = _hgt - _baseHgt - _excHgt - _scrollExc - _layerExc;

    if (layer.querySelector('[data-scroll="exc"]') && _computedHgt <= _child.clientHeight) {
        Array.prototype.forEach.call(_setHgtTargets, el => {
            if (_computedHgt > _scrollHgt && !layer.querySelector('.wrap-search-sch')) {
                el.style.height = `${_scrollHgt}px`;
            } else {
                el.style.height = `${_computedHgt}px`;
            }
        })
    }
}
// max-length
function maxLengthInpCheck(el) {
    if (el.value.length > el.maxLength) {
        el.value = el.value.slice(0, el.maxLength);
    }
}

/* S: 2023-10-18 리뷰라운지 추가 */
window.addEventListener('load', () => {
    // 리뷰라운지 리스트 배너 swiper
    document.querySelector('.review-rounge .swiper__main-banner') && setSwiper({target: '.review-rounge .swiper__main-banner', pagination: '.swiper-pagination', paginationType: 'fraction'});
    // 필터 range
    // document.querySelector("[data-role=range]") && Array.prototype.forEach.call(document.querySelectorAll("[data-role=range]"), el => {
    //     setRangeSlide(el);
    // });
    // 상세리뷰 포토 스와이프
    // document.querySelector('.swiper-detail-photo') && setSwiper({target: '.swiper-detail-photo', pagination: '.pagination-fraction', paginationType: 'fraction', navigation: true});
    // 별점입력
    document.querySelector('.star_grade') && starGrade(document.querySelector('.star_grade'));
    // observer
    reviewCheckLayer();
    /* S: 2023-11-07 리뷰라운지 수정 추가 */
    // 리뷰체크 갯수 제한 실행    
    _limitCheckboxes("review-type",3);
    _limitCheckboxes("review-problems",3);
    _limitCheckboxes("review-color",2);
    // 리뷰라운지 리스트 태그 삭제
	_checkTag('.review-rounge ul.list-filter-result','.btn-reset');
	// 리뷰라운지 리스트 좋아요 On/Off
	// _likeBtnOnOff('.review-rounge ul.list-review-rounge'); //2023-11-23 개발에서 실행시킴
    // _likeBtnOnOff('.photo-review-detail'); //2023-11-23 개발에서 실행시킴
    /* E: 2023-11-07 리뷰라운지 수정 추가 */
	reviewCate(); //2023-11-17 리스트 페이지의 카테고리 제어 추가
    reviewUnused(); //2023-12-20 키, 몸무게, 발사이즈 사용안함 추가
});
// range 슬라이드
function setRangeSlide(el) {
    const initial = {};
    const _dragArea = el.querySelector('.graph-track');
    const _curData = el.querySelector('.review-form__exp span');
    const slideMove = (thumbUnit, barUnit) => {
        const _left = initial.stepWid * initial.curVal > initial.rangeWid ? initial.rangeWid : initial.stepWid * initial.curVal;
        thumbUnit.style.left = `${_left}px`;
        barUnit.style.width = `${_left}px`;
        _curData.innerHTML = initial.value;
    }
    // slide
    const rangeInit = (target) => {
        const _range = target.querySelector('input[type=range]');
        const _wrapDivision = target.querySelector('.wrap-division');
        const _thumb = target.querySelector('.graph-track__cur');
        const _has = _range.querySelector('.cur-bar');
        const _curBar = _range.querySelector('.cur-bar') ? _range.querySelector('.cur-bar') : document.createElement('div');
        
        initial.rangeWid = 0,
        initial.stepWid = 0
        initial.steps = (_range.getAttribute('max') - _range.getAttribute('min')) / _range.getAttribute('step');
        initial.value = _range.value;
        initial.curVal = (parseInt(_range.value) - parseInt(_range.getAttribute('min'))) / parseInt(_range.getAttribute('step'));
    
        initial.rangeWid = target.clientWidth;
        initial.stepWid = initial.rangeWid / (initial.steps - 1);
    
        if (!_has) {
            _curBar.className = "cur-bar";
            _wrapDivision.append(_curBar);
        }
        slideMove(_thumb, _curBar);
    
        // range 이동
        _range.addEventListener('input', () => {
            initial.curVal = (parseInt(_range.value) - parseInt(_range.getAttribute('min'))) / parseInt(_range.getAttribute('step'));
            initial.value = _range.value;
            slideMove(_thumb, _curBar);
        });
    }
    Array.prototype.forEach.call(el.querySelectorAll('.cur-bar'), bar => {
		bar.removeAttribute('style');
		bar.remove();
	})
    setTimeout(() => {
        rangeInit(_dragArea);
    }, 100);
}
// 별점입력
function starGrade(base) {
    const starButtons = base.querySelectorAll('button');
    starButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            starButtons.forEach((button, i) => {
                if (i <= index) {
                    button.classList.add('on');
                } else {
                    button.classList.remove('on');
                }
            });
        });
    });
}
// mutation observer
function reviewCheckLayer() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach( mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach( el => {
                    if (!el.querySelector) {
                        return;
                    }
                    //필터 range 20231228
                    if (el.querySelector("[data-role=range]")) {
                        Array.prototype.forEach.call(el.querySelectorAll("[data-role=range]"), unit => {
                            setRangeSlide(unit);
                        });
                    }
                    // 상세리뷰 포토 스와이프
                    if (el.querySelector(".swiper-detail-photo")) {
                        setSwiper({target: '.swiper-detail-photo', pagination: '.pagination-fraction', paginationType: 'fraction', navigation: true});
                    }
                    // 별점입력
                    if (el.querySelector(".star_grade")) {
                        starGrade(document.querySelector('.star_grade'));
                    }
                    // 선택된 값 체크
                    if (el.querySelector('[data-text="review-type"]')) {
                        checkChoiceVal();
                    }
                });
            }
        });
    });
      
    // observe everything except attributes
    observer.observe(document.body, {
    childList: true, // observe direct children
    subtree: true, // and lower descendants too
    characterDataOldValue: true // pass old data to callback
    });
}

/* S: 2023-11-07 리뷰라운지 수정 추가 */
// 리뷰체크 갯수 제한 셋팅
function _limitCheckboxes(_checkerName,_limitNum) {	
	let _checker = document.querySelector('[data-text='+ _checkerName +']');
	if(_checker){
		let _checkerInput = _checker.querySelectorAll('input');        
		for (var i = 0; i < _checkerInput.length; i++) {
			_checkerInput[i].onclick = function() {
				var _checkedcount = 0;
				for (var i = 0; i < _checkerInput.length; i++) {
					_checkedcount += (_checkerInput[i].checked) ? 1 : 0;
				}
				if (_checkedcount > _limitNum) {
					this.checked = false;
				}
			}
		}
	}
}
// 리뷰라운지 리스트 태그 삭제
function _checkTag(target,reset){
    let _resetBtn = document.querySelector(reset)
	let _reviewPage = document.querySelector(target);    
	if(_reviewPage){
		let _reviewTag = _reviewPage.querySelectorAll('li');
		_reviewTag.forEach((_el,_idx) => {
			_el.addEventListener('click', function() {
				_el.remove();
			})
		});
		if(_resetBtn){
			_resetBtn.addEventListener('click', function(){
				_reviewTag.forEach((_el,_idx) => {
					_el.remove();
				})
			});
		}        
	}		
};
// 리뷰라운지 리스트 좋아요 On/Off
function _likeBtnOnOff(target){
	let _reviewPage = document.querySelectorAll(target);
	if(_reviewPage){
		_reviewPage.forEach((_el,_idx) => {
			let _reviewTag = _el.querySelectorAll('.review__like');
			_reviewTag.forEach((_el1,_idx1) => {
				let _reviewTagBtns = _el1.querySelector('button')
				_el1.addEventListener('click', function() {
					if(!_reviewTagBtns.classList.contains('is-active')){
						_reviewTagBtns.classList.add('is-active');
					}
					else {
						_reviewTagBtns.classList.remove('is-active');
					}
				})
			});
		});
	}
};
/* E: 2023-11-07 리뷰라운지 수정 추가 */

// 선택된 값 체크 2023-11-13 추가 20231228
function checkChoiceVal() {
    const _base = document.querySelector('.pop-review-rounge');
    const _ranges = _base.querySelectorAll('[data-role=range]');
    const _wrap = document.querySelector('.list-filter-result');
    const _list = _wrap.querySelectorAll('[data-val]');
    const searchInp = (name, val) => {
        Array.prototype.forEach.call(document.querySelectorAll(`input[name=${name}]`), inp => {
            if (inp.type === 'range') {
                if (val === 'disabled') {
                    inp.closest('.wrap-review-form').classList.add('type-disabled');
                    inp.closest('.wrap-review-form').querySelector('.review-form__tit.type__check button').classList.add('is-active');
                    inp.disabled = true;
                } else {
                	inp.closest('.wrap-review-form').classList.contains('type-disabled') && inp.closest('.wrap-review-form').classList.remove('type-disabled');
                	inp.closest('.wrap-review-form').querySelector('.review-form__tit.type__check button').classList.contains('is-active') && inp.closest('.wrap-review-form').querySelector('.review-form__tit.type__check button').classList.remove('is-active');
                	inp.disabled = false;
                    inp.value = val;
                }
            } else {
                if (inp.value === val) {
                    inp.setAttribute('checked', '');
                    inp.checked = true;
                }
            }
        })
        Array.prototype.forEach.call(_ranges, inp => {
            setRangeSlide(inp);
        })
    }
    const checkSelected = () => {
        if (_list.length === 0) {
            Array.prototype.forEach.call(_ranges, inp => {
                setRangeSlide(inp);
            })
        }
        Array.prototype.forEach.call(_list, el => {
            const _val = el.dataset.val.split('__');
            searchInp(_val[0], _val[1]);
        })
    }
    const resetSelectedCheckbox = () => {
        const _checkeds = _base.querySelectorAll('input[type=checkbox]:checked');
        Array.prototype.forEach.call(_checkeds, inp => {
            inp.checked = false;
        });
        checkSelected();
    }
    resetSelectedCheckbox();
}

/* S: 2023-11-17 리뷰라운지 리스트 카테고리 선택 */
function reviewCate() {
	$(".review-rounge .search-review-data .list-filter button").click(function(){
		if(!$(this).hasClass('is-active')){
			if(!$(this).hasClass('all')){
				$(".review-rounge .search-review-data .list-filter .all").removeClass('is-active'); //전체버튼 해제
			} else if($(this).hasClass('all')){
				$(".review-rounge .search-review-data .list-filter button").removeClass('is-active'); //카테고리 해제
			}
			$(this).addClass('is-active');
		} else {
			$(this).removeClass('is-active');
			if($(".review-rounge .search-review-data .list-filter .is-active").length == 0){
				$(".review-rounge .search-review-data .list-filter .all").addClass('is-active'); //전체버튼 해제
			}
		}
	});
} 
/* S: 2023-11-17 리뷰라운지 리스트 카테고리 선택 */
/* S: 2023-12-20 리뷰라운지 사용안함 추가 */
function reviewUnused() {
	$(document).on("click", ".type-review-rounge .btn_unused", function(){
        let formBox = $(this).parents(".wrap-review-form");
		if (!$(this).hasClass("is-active")){
            $(this).addClass("is-active");
            formBox.addClass("type-disabled");
            formBox.find("input[type=range]").attr("disabled", "disabled");
            formBox.find("input[type=range]").val("");
		} else {
            $(this).removeClass("is-active");
			formBox.removeClass("type-disabled");
            formBox.find("input[type=range]").removeAttr('disabled');
        }
	});
} 
/* E: 2023-12-20 리뷰라운지 사용안함 추가 */
/* E: 2023-10-18 리뷰라운지 추가 */
/* S: 2023-12-28 리뷰라운지 추가 */
function disableFilter(el) {
	const _val = el.dataset.val.split('__')[0];
	el.dataset.val = `${_val}__disabled`;
	el.classList.add('is-hidden');
	el.parentElement.style.display = 'none';
	removefilter(el);
}
/* E: 2023-12-28 리뷰라운지 추가 */

/* S: 2024-05-29 예상등급 추가(마이현대 메인)*/
function levelExpect () {
    let amount = $(".my-grade .status-current .status-price span").text().replace(",", "");
    let currentBar =  $(".my-grade .status-current .current-bar");
    let levelIcon = $(".my-grade .present-level");
    let dataNation = $(".my-grade__status").attr("data-nation");

    //등급 아이콘 변경 및 최저, 최대 클래스 추가
    if (amount == 0) {
        currentBar.addClass('min');
    }
    //내국인
    if (dataNation == "kor") {
        // if (0 < amount && amount < 800) {
        //     levelIcon.attr("title","Silver").text("S");
        // }
        // if (800 <= amount  && amount < 2000) {
        //     levelIcon.attr("title","Gold").text("G");
        // }
        // if (2000 <= amount && amount < 4000) {
        //     levelIcon.attr("title","Black").text("B");
        // }
        if (amount >= 4000) {
            currentBar.removeClass('min');
            currentBar.addClass('max');
            // levelIcon.attr("title","Prestige").text("P");
        }
        //bar 넓이 퍼센트 계산
        let barWidth = (amount / 4000) * 100;
        console.log(barWidth)
        if (amount >= 4000) {
            currentBar.css("width","100%");
        } else {
            currentBar.css("width", barWidth + "%");
        }
    } 
    //외국인
    else {
        // if (0 < amount && amount < 2000) {
        //     levelIcon.attr("title","Silver").text("S");
        // }
        // if (2000 <= amount  && amount < 4000) {
        //     levelIcon.attr("title","Gold").text("G");
        // }
        // if (4000 <= amount && amount < 8000) {
        //     levelIcon.attr("title","Black").text("B");
        // }
        if (amount >= 8000) {
            currentBar.removeClass('min');
            currentBar.addClass('max');
            // levelIcon.attr("title","Prestige").text("P");
        }
        //bar 넓이 퍼센트 계산
        let barWidth = (amount / 8000) * 100;
        console.log(barWidth)
        if (amount >= 8000) {
            currentBar.css("width","100%");
        } else {
            currentBar.css("width", barWidth + "%");
        }
    }
}
/* E: 2024-05-29 예상등급 추가(마이현대 메인)*/

/* S: 2024-01-10 큐레이션 숨겨진 혜택 배경색 추가 */
function floatBenefitColor() {
    if($(".float-benefit").length) {
        $(".float-benefit .float-hidden-menu .swiper-slide:nth-child(3n-2)").find(".img.fix").addClass("prod_blue");
        $(".float-benefit .float-hidden-menu .swiper-slide:nth-child(3n - 1)").find(".img.fix").addClass("prod_purp");
        $(".float-benefit .float-hidden-menu .swiper-slide:nth-child(3n)").find(".img.fix").addClass("prod_pink");
    }
}
/* E: 2024-01-10 큐레이션 숨겨진 혜택 배경색 추가 */

/* S: 2024-04-02 입점 및 제휴문의(공정거래) 신규 */
function fileAtached() {
    $('.wrap-form__file .btn-file__input input[type="file"]').change(function (e) {
        $(".wrap-form__file").addClass("is-attached");

        const fileName = e.target.files[0].name;
        const fileSize = e.target.files[0].size;
        if(fileSize < 1000000){
            var _size = Math.floor(fileSize/1000) + 'KB';
            $(".wrap-form__file .box-file__attached .file-info em").text(_size);
        }else{
            var _size = Math.floor(fileSize/1000000) + 'MB';
            $(".wrap-form__file .box-file__attached .file-info em").text(_size);
        }

        $(".wrap-form__file .box-file__attached .file-info span").text(fileName);
    });
    $('.wrap-form__file .btn-file__del').click(function(){
        let fileBox = $(this).parents('.wrap-form__file');
        fileBox.removeClass("is-attached");
        $(".wrap-form__file .box-file__attached .file-info span").text("");
        $(".wrap-form__file .box-file__attached .file-info em").text("");
        $('.wrap-form__file .btn-file__input input[type="file"]').val("");
    })
}
function listContact() {
    $('.contact_us .receive_item .receive_number a').click(function(){
        let listItem = $(this).parents('.receive_item');
        let listDetial = $(this).parents('.receive_item').find(".receive_detail");
        if(!listItem.hasClass("is-opend")){
            listItem.addClass("is-opend");
            listDetial.slideDown();
        } else {
            listItem.removeClass("is-opend");
            listDetial.slideUp();
        }
    })
}
/* E: 2024-04-02 입점 및 제휴문의(공정거래) 신규 */

/* S: 2024-05-14 첫구매딜 신규 */
// 세일페이지 첫구매딜 슬라이드
function setSaleFirstDealSlider () {
    if (document.querySelector('.sale__first-deal') === null ) return
    const _base = document.querySelector('.sale__first-deal');
    if (_base.querySelectorAll('.swiper-slide').length < 2) {
        _base.classList.add('is-single');
        return;
    }
    let swiperSaleFirstDeal = new Swiper('.sale__first-deal', {
        slidesPerView: 1,
        spaceBetween: 24,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.firstdeal .swiper-button-next',
            prevEl: '.firstdeal .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    let pageNum =1

    setProgressBar({base: '.firstdeal', bar: '.swiper-progress', pageNum});

    swiperSaleFirstDeal.on('transitionEnd', function() {
        setProgressBar({base: '.firstdeal', bar: '.swiper-progress', idx: this.realIndex, pageNum});
    })
}
/* E: 2024-05-14 첫구매딜 신규 */