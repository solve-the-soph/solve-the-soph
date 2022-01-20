window.onload = function(){
	$('nav > a:first-of-type').on('click', function(event){
		event.preventDefault(); //阻止第一個nav被點到時真的去執行超連結預設

		$('nav > a:not(:first-of-type)').toggle(600); //toggle:點到，存在的把它消失，消失的把它用出現

		$(this).toggleClass('close'); //this=clicked first <a> element under <nav>

	});
};