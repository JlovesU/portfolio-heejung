$(document).ready(function(){

	// 메인 슬라이드
	/*
	var eventSlider = $('.event_slide').bxSlider({
		controls:true, autoHover:true, autoControls:true, pagerType:'full', pagerCustom: '.event_pager', mode:'fade'
	});
	var $evstop = $('.event_visual_wrap > .bx-wrapper .bx-stop');
	var $evstart = $('.event_visual_wrap > .bx-wrapper .bx-start');
	var $evp = $('.event_visual_wrap > .bx-wrapper .bx-controls-direction a');
	$evstop.click(function(){
		$(this).css('display', 'none');
		$evstart.css('display', 'block');
	});
	$evstart.click(function () {
		$(this).css('display', 'none');
		$evstop.css('display', 'block');
	});
	$evp.click(function () {
		$evstart.css('display', 'none');
		$evstop.css('display', 'block');
	});
	var evH = $(".event_visual_wrap .event_pager").outerHeight();
	$('.event_visual_wrap .bx-controls, .event_visual_wrap .event_total').css('top', evH + 43);
	*/
	var evsSlider = $('.evs_slide').bxSlider({
		controls:true, autoHover:true, autoControls: false, auto:false,
	});


	// 상품소팅 type 타이틀 활성화
	var $productTYpe = $('.prd_tab_menu > ul > li > a'), $productTYpe2 = $('.prd_tab_smenu > ul > li > a');
	$productTYpe.click(function(){
		//$productTYpe.removeClass('active');
		$(this).parent().parent().find('li a.active').removeClass('active');
		$(this).addClass('active');
	});
	$productTYpe2.click(function(){
		$productTYpe2.removeClass('active');
		$(this).addClass('active');
	});

	// 상품소팅 type 리스팅 (리스트형:prdListType || 카드형:prdCardType)
	var $productSortTYpe = $('.tb_sort.ev button.ico_com')
	$productSortTYpe.click(function(){
		var isThis = $(this).hasClass('active');

		$productSortTYpe.removeClass('active');
		$(this).addClass('active');

		if(!isThis) {
			$(".event_reply.photo").toggleClass('card_type')
		}

		if (jQuery('.sticky_tabs').offset()) { // make sure "#sticky" element exists
		var stickyTop4 = jQuery('.sticky_tabs').offset().top; // returns number

		jQuery(window).scroll(function(){ // scroll event
			var windowTop4 = jQuery(window).scrollTop() + 70;
			if (stickyTop4 < windowTop4){
				jQuery('.sticky_tabs').addClass('fixed');
			} else {
				jQuery('.sticky_tabs').removeClass('fixed');
			}
		});
	}
	});

	// 상세검색 toggle
	// var $shDetailArea = $('.sh_table tbody tr.sh_detail'), $shBtnMore = $('.sh_table button.ico_com.toggle');
	// $shBtnMore.click(function(){
	// 	$shDetailArea.toggleClass('opened');
	// 	$(this).toggleClass('active');
	// });

	// 상세검색 브랜드 open
	var $shDetaileBrand = $('.sh_ck_list.brand_type li:nth-child(n+9)')
	$shDetaileBrand.addClass('more_area');
	$('.th_brand .btn_th').click(function(){
		$shDetaileBrand.toggleClass('more_area');
		//$('.sh_table .brand_sort').toggleClass('more_area');
		$('.sh_ck_list.brand_type ul').toggleClass('scroll');
		$(this).toggleClass('active');
	});

	/*
	var $shDetaileBrand = $('.sh_ck_list.brand_type li:nth-child(n+13)')
	$shDetaileBrand.addClass('more_area');
	$('.th_brand button').click(function(){
		$shDetaileBrand.toggleClass('more_area');
		$('.sh_table .brand_sort').toggleClass('more_area');
		$('.sh_ck_list.brand_type ul').toggleClass('scroll');
		$(this).find('.ico_com').toggleClass('active');
	});
	*/

	// 이벤트 카테고리 open
	var $evCategory = $('.prd_tab_menu.type2 .view_cate')
	var $evCategory2 = $('.prd_tab_menu.type2 > ul > li > a')
	$evCategory2.click(function(){
		$('.prd_tab_smenu').css('display', 'none');
	});
	$evCategory.click(function(){
		$('.prd_tab_smenu').css('display', 'block');
	});

	$('.product_title_wrap').has('.prd_tab_menu').next().addClass('tit_type2');


	// 상품 paging 버튼 활성화 (숫자링크만 .active 적용되도록 처리)
	/*
	$(".paging a").click(function(e){
		var name = e.currentTarget.className;

		if(name == 0) {
			$(".paging a").removeClass('active');
			$(this).addClass('active');
		}
	});
	*/

	// 댓글 배경색 변경
	var $snsLabel = $('.reply_box .sns_share label');
	$snsLabel.click(function(){
		var $snsChkValue = $(this).attr('class');
		$(this).closest('.reply_box').removeClass('facebook twitter kakao blog');
		$(this).closest('.reply_box').addClass($snsChkValue);
	});

	// 베스트 > 검색어 베스트 > 박스형태 순위 list > 활성화.
	$('.best_keyword_list a').click(function(){
		var obj = $('.best_keyword_list li');

		obj.removeClass('active');
		$(this).parent('li').addClass('active');
	});

	// 상세페이지 사은품 이동
	$(".p_dot_list .link02").click(function() {
		$('.tab_type01 .active').removeClass('active');
		$('.tab_type01 ul li:first-child a').addClass('active');
		$('.tab_view_box').removeClass('block');
		$('.tab_view_box#detail01').addClass('block');
		$('html, body').animate({
			scrollTop: $("#freebiesArea").offset().top - 190
		}, 0);
		//$(this).closest('.reply_box').addClass($snsChkValue);
		return false;
	});

	// 신상품
	/* S: 20201204 메인 개선에 따른 서브페이지 수정 */
	var newBrandBox =  $('.new_brand_box ul').bxSlider({
		auto:false, controls:true, pager:false,
		onSliderLoad: function(){
			$('.new_brand_box').css('visibility', 'visible');
		}
	});
	/* E : 20201204 메인 개선에 따른 서브페이지 수정 */

});
$(window).load(function(){
	// sticky tabs
	if (jQuery('.sticky_tabs').offset()) { // make sure "#sticky" element exists
		var stickyTop4 = jQuery('.sticky_tabs').offset().top; // returns number

		jQuery(window).scroll(function(){ // scroll event
			var windowTop4 = jQuery(window).scrollTop() + 70;
			if (stickyTop4 < windowTop4){
				jQuery('.sticky_tabs').addClass('fixed');
			} else {
				jQuery('.sticky_tabs').removeClass('fixed');
			}
		});
	}

	// sticky tabs
	// if (jQuery('.detatil_sticky').offset()) { // make sure "#sticky" element exists
		/*var stickyTop3 = jQuery('.detatil_sticky').offset().top; // returns number

		jQuery(window).scroll(function(){ // scroll event
			var windowTop3 = jQuery(window).scrollTop()+360;
			if (stickyTop3 < windowTop3){
				jQuery('.detatil_sticky').addClass('fixed');
			} else {
				jQuery('.detatil_sticky').removeClass('fixed');
			}
		});*/

	// 	jQuery(window).scroll(function(){ // scroll event
	// 		var stickyTop3 = jQuery('.detatil_sticky').next('div').offset().top - 70; // returns number
	// 		var windowTop3 = jQuery(window).scrollTop();

	// 		if (stickyTop3 < windowTop3){
	// 			jQuery('.detatil_sticky').addClass('fixed');
	// 		} else {
	// 			jQuery('.detatil_sticky').removeClass('fixed');
	// 		}
	// 	});
	// }

	// H.Style tooltip
	var $hstoryNav = $('.hstory_nav > li > a');
	$hstoryNav.on('mouseenter mouseleave', function (e) {
		var $this = $(this), $hstoryTooltip = $this.closest('li').find('.hstory_tooltip');
		if (e.type === 'mouseenter') {
			$hstoryTooltip.show();
		} else {
			$hstoryTooltip.hide();
		}
	});
});
