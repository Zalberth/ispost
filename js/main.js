$(function() {
	$('#joinis').on('click',function() {
		$('#centerZone .recruit').css('display','block');
		$('#centerZone .recruit').animate({height:"200px"});
	});
	$('#centerZone .nextTime').on('click',function() {
		
		$('#centerZone .recruit').animate({height:"0px"},function() {
			$(this).css('display','none');
		});
	});
	$('#logoTitle').on('click',function() {
		 window.location.href='index.html';
	});
})