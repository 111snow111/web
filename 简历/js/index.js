$(function(){
	$(" .btn-1").click(function(){
		$(".hid").hide();
		$(this).siblings().show();
	})
	$(".btn").click(function(){
		$(".hid").hide();
//		$(this).parent().siblings().hide();
//		$(this).parent().hide();
	})
})

$(function(){
	$(".nav-con button").click(function(){
		$(".navbar-collapse ").slideToggle();
	})
})

