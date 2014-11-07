//on load
$(function(){
	//set handlers, etc.
	$("#button-add-player").click(function(){
		var newLi = $(".prototype").clone();
		newLi.appendTo('#list');
		newLi.removeClass('prototype');
		setHandlers();
	});
});



function setHandlers() {
	$(".unprocessed .levels-button-plus").click(function(){
		var levels = $(this).parent().parent().children('.levels-number');
		var currentLevel = parseInt(levels.text());
		levels.text(currentLevel+1);
	});

	$(".unprocessed .levels-button-minus").click(function(){
		var levels = $(this).parent().parent().children('.levels-number');
		var currentLevel = parseInt(levels.text());
		if (currentLevel == 1) {return;}
		levels.text(currentLevel-1);
	});

	$(".unprocessed .label").click(function(){
		$(this).parent().children('input').show().focus();
	});

	$(".unprocessed input").focusout(function(){
		$(this).parent().children('.label').text($(this).val());
		$(this).hide();
	});

	$("#list .unprocessed").removeClass('unprocessed');
}