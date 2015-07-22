$(function() {
	$('#hublists li').on('mouseenter',function() {
		$('.banLine').addClass('turnGreen');
		$(this).addClass('slightMoveup');
		$(this).addClass('biggerFont');
		//alert($(this).css('font-size'));	
		//可利用setInterveal来实现文字放大动画	
	});
	$('#hublists li').on('mouseleave',function() {
		$('.banLine').removeClass('turnGreen');
		$(this).removeClass('biggerFont');
		$(this).removeClass('slightMoveup');
	});
})