console.log('im working baby!');
$(document).ready(function(){
	$('a').hover(function(){
		$(this).css('color', '#363825');
	},function(){
		$(this).css('color', '#577377');	 
		})
	});