$(function() {

	//list-title的点击
	$('.list-title li:not(.active)').click(function() {
		$('#list-article').css('display', 'none');
		$('.list-title li').removeClass('active')
		$(this).addClass('active');
	})
	$('.list-title li:first').click(function() {
		$('#list-article').css('display', 'block');
		$('#list-article').css('display', 'none');
		$('.list-title li').removeClass('active')
		$(this).addClass('active');

	})

	//小屏，简的下拉框
	$('#jian').click(function() {
		$('.list-title li').removeClass('active')
		if($('#jian-list').css('display') == 'none') {
			$('#jian-list').css('display', 'block')
		} else if($('#jian-list').css('display') == 'block') {
			$('#jian-list').css('display', 'none');
		}

	});

	//夜间模式

	$('.icon-yue').click(function() {

		console.log($('body').css('background'));
		if($('body').css('background') != 'rgb(63, 63, 63) none repeat scroll 0% 0% / auto padding-box border-box') {
			$('.list-title li').click(function() {
				$('.list-title li').removeClass('active');
				$(this).addClass('active2');
				$(this).siblings().removeClass('active2');
			})
			$('body').css('background', '#3f3f3f');
			$('.page-title').css('background', '#3f3f3f');
			$('input').css('background', '#555');
			$('.s-navbar-user').css('background', '#3f3f3f');
			//登录字体颜色
			$('.login').css('color', '#d1d1d1');
			//左上角'简'
			$('#jian').css('background', '#222');
			$('#jian').mouseover(function() {
				$(this).css('background', '#555');
			})
			$('#jian').mouseout(function() {
					$(this).css('background', '#222');
				})
				//左上方发现颜色
			$('#find-f').css('color', '#eee');
			$('#find-f').mouseover(function() {
				$(this).css('background', '#222');
			})
			$('#find-f').mouseout(function() {
				$(this).css('background', '#3f3f3f');
			})
			$('#find-f').parent().siblings().children().mouseover(function() {
				$(this).css('background', '#222');
			})
			$('#find-f').parent().siblings().children().mouseout(function() {
				$(this).css('background', '#3f3f3f');
			})

			//active

			$('.list-title .active').addClass('active2');

			//			console.log($('.list-title .active>a'));

		} else if($('body').css('background') == 'rgb(63, 63, 63) none repeat scroll 0% 0% / auto padding-box border-box') {
			$('.list-title .active2').removeClass('active2').addClass('active');
			$('.list-title li').click(function() {
				$('.list-title li').removeClass('active2');
				$(this).addClass('active');
				$(this).siblings().removeClass('active');

			})

			$('body').css('background', '#FFFFFF');
			$('.page-title').css('background', '#FFFFFF');
			$('.s-navbar-user').css('background', '#fff');
			$('input').css('background', '#fff');
			$('.login').css('color', '#555555');

			//左上角'简'
			$('#jian').css('background', '#e78170');
			$('#jian').mouseover(function() {
				$(this).css('background', '#e78170');
			})
			$('#jian').mouseout(function() {
				$(this).css('background', '#e78170');
			})

			//左上方发现颜色
			$('#find-f').css('color', '#999');
			$('#find-f').mouseover(function() {
				$(this).css('background', '#eee');
			})
			$('#find-f').mouseout(function() {
				$(this).css('background', '#fff');
			})
			$('#find-f').parent().siblings().children().mouseover(function() {
				$(this).css('background', '#eee');
			})
			$('#find-f').parent().siblings().children().mouseout(function() {
				$(this).css('background', '#fff');
			})

			//active

			$('.list-title li').removeClass('active2');
			$('.list-title .active').addClass('active');
			//
		}
	})

})