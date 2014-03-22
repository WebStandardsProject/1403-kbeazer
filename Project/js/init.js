console.log('im working baby!');
$(document).ready(function(){
	$('a').hover(function(){
		$(this).css('color', '#a3ab94');
	},function(){
		$(this).css('color', '#02a4e2');	 
		})
	});