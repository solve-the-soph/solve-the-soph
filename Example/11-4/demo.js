window.onload = function(){
	$('body > button').eq(1).on('click', function(){
		alert('Button clicked!');
	})
	$('body > input').eq(0).on('keypress', function(){
		let inputVal = $(this).val(); //val()=value 就是打字進去的內容
		let textarea = $('body > textarea').eq(0);
		textarea.html(inputVal);
	});
}