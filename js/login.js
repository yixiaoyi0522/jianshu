$(function() {
	$('.icon-register').parent().click(function() {
//		debugger;
		$('#dl').removeClass('active');
		$('#zc').addClass('active');
			if($('#dl').hasClass('active')) {
			$('.content-zc').css('display', 'none');
			$('.content-dl').css('display', 'block');
		} else if($('#zc').hasClass('active')) {
			$('.content-dl').css('display', 'none');
			$('.content-zc').css('display', 'block');

	}
	})
	

	$('.icon-login').parent().click(function() {
		$('#zc').removeClass('active');
		$('#dl').addClass('active');
			if($('#dl').hasClass('active')) {
			$('.content-zc').css('display', 'none');
			$('.content-dl').css('display', 'block');
		} else if($('#zc').hasClass('active')) {
			$('.content-dl').css('display', 'none');
			$('.content-zc').css('display', 'block');

	}
	})

	$('.title span a').click(function() {
		$('.title span a').removeClass('active');
		$(this).addClass('active');
		if($('#dl').hasClass('active')) {
			$('.content-zc').css('display', 'none');
			$('.content-dl').css('display', 'block');
		} else if($('#zc').hasClass('active')) {
			$('.content-dl').css('display', 'none');
			$('.content-zc').css('display', 'block');

		}

	})
	$(window).resize(function(){
		if($(window).height() < 420){
			$('.ln-bottom').css('display','none')
		}else if($(window).height() > 420){
			$('.ln-bottom').css('display','block')
		}

	})

})