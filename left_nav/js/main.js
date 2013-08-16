$(document).ready(function(){
    
	$("#menu_toggle, #close_left_nav").on('click',function(){
		if ($("body").width() < 900){
			$("body").toggleClass("show_left_menu");
			
			if ($(".show_left_menu").length){
				var min_height = $(window).height();
				var left_nav_height = $("#left_nav ul").height();

				$("#left_nav, #wrap_all").css({"min-height":min_height+"px", "height":left_nav_height+"px"});
			}else{
				$("#left_nav, #wrap_all").css({"min-height":"auto", "height":"auto"});
			}
		}
		return false;
	});
	
	function response(){
		//console.log($(window).width());
		if ($("body").width() > 899){
			$("body").removeClass("show_left_menu");
			$("#left_nav, #wrap_all").css({"min-height":"auto", "height":"auto"});
		}else{
		
			//$("#wrap_all").css({"width": $(window).width()});
		}
		
		if ($(".show_left_menu").length){
			var min_height = $(window).height();
			var left_nav_height = $("#left_nav ul").height();

			$("#left_nav, #wrap_all").css({"min-height":min_height+"px", "height":left_nav_height+"px"});
		}
	}
	
	
	$(window).resize(response);
	
	var start_nav_height = $("#left_nav ul").height();
	var content_wrap_height = $(".content_wrap").height();
	
	console.log(start_nav_height);
	console.log(content_wrap_height);
	console.log(start_nav_height - content_wrap_height);
	
	var height_fix = start_nav_height - content_wrap_height + 15;
	
	if (height_fix > 0){
		$("#height_fixer").css({"height":height_fix+"px"});
	}
	
	
});

