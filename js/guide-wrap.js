$(function() {
//debugger;
	$(window).resize(function() { //当窗口改变宽度时执行此函数
		if($(window).width() < 1285){
			$('.footer-l').css('float','none');
			$('.footer-r').css({
				'float':'none',
				'margin-left':'65px'
				});
			
		}
		if($(window).width() > 1285){
			$('.footer-l').css('float','left');
			$('.footer-r').css({
				'float':'right',
				'margin-left':'0'
				});
			
		}
		var wrap = $('#guide-wrap');
		//	console.log(wrap);
		if(wrap.width() < 450) {
			$('.guide-img').css('display', 'none');
			$('#guide-wrap .text-part').css('display', 'none');
			$('#guide-wrap .d-btn').css({
				'width': '100%',
				'margin-top': '48px'
			})
		}
		if(wrap.width() < 670 && wrap.width() >= 450) {
			$('.guide-img').css('display', 'none');
			//		$('#guide-wrap .text-part')
			//		.css({'position':'relative','left':'50px'})
			$('#guide-wrap .d-btn').css({
				'width': '46%',
				'margin-top': '35px'
			});
			$('#guide-wrap .text-part').css({
				'display': 'inline-block',
				'margin-top': '30px',
				'width': '46%',
				'margin-left': '30px'

			})

		}
		if(wrap.width() > 670) {
			$('.guide-img').css({
				'display': 'inline-block',
				'margin-left': '20px'
			});
			$('#guide-wrap .text-part').css({
				'display': 'inline-block',
				'width': 'auto'
			});
			$('#guide-wrap .d-btn').css(
				'width', '33%'
			);
		}
		
		//屏幕高度小于420px时隐藏左下角元素
		if($(window).height() < 420){
			$('.ln-bottom').css('display','none')
		}else if($(window).height() > 420){
			$('.ln-bottom').css('display','block')
		}
		
		
		

	})

//	//刷新时不执行上面函数，出来布局混乱
//	var wrap = $('#guide-wrap');
//	//	console.log(wrap);
//	if(wrap.width() < 930 && wrap.width() >= 450) {
//		$('.guide-img').css('display', 'none');
//		//		$('#guide-wrap .text-part')
//		//		.css({'position':'relative','left':'50px'})
//		$('#guide-wrap .d-btn').css({
//			'width': '46%',
//			'margin-top': '35px'
//		});
//		$('#guide-wrap .text-part').css({
//			'margin-top': '30px',
//			'width': '46%',
//			'margin-left': '30px'
//		})
//
//	}
//	if(wrap.width() < 450) {
//		$('.guide-img').css('display', 'none');
//		$('#guide-wrap .text-part').css('display', 'none');
//		$('#guide-wrap .d-btn').css({
//			'width': '100%',
//			'margin-top': '48px'
//		})
//	}
	
	//footer部分的布局
	
	if($(window).width() < 1210){
			$('.footer-l').css('float','none');
			$('.footer-r').css({
				'float':'none',
				'margin-left':'65px'
				});
			
		}
	
	
})