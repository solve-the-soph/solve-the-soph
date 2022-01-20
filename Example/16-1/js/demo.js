var menuOpen = false; //The default state of the floating menu

function secSlideUp(){
	let allSections = $('article > section');
					let screenHeight = $(window).height();
					let scrollTop = $(window).scrollTop();
					allSections.each(function(index){
						let section = allSections.eq(index);
						if (screenHeight + scrollTop -50 > section.offset().top){
							section.animate({'top':0, 'opacity':1}, 500);
							}
						});
};

window.onload = function(){
	secSlideUp();
	$(window).on('scroll', secSlideUp) //只要視窗有捲動發生，都會再執行一次section Slide up

	//try to close a menu only when the menu is open
	$('body').on('click', function(){
		if(menuOpen){
			let menuItems = $('nav > a:not(:first-of-type)');
 			let delay = 0;
 			menuItems.each(function(index) {
 				setTimeout(function() {
 					menuItems.eq(index).animate({'opacity': 0}, 300, function() {
 						menuItems.eq(index).css({'display': 'none'});
 					});
 				}, delay + (50 * index));
	});
 		$('nav > a:first-of-type').removeClass('close');
			menuOpen = false;

		}
	});

	$('nav > a:first-of-type').on('click', function(event){
		event.preventDefault(); //阻止第一個nav被點到時真的去執行超連結預設
		//所有不是第一個的nav都放到menuItems
		let menuItems = $('nav > a:not(:first-of-type)');
		let delay = 0;
		//When menuOpen is true,try to hide the entire menu.
		if(menuOpen){
			menuItems.each(function(index){
				setTimeout(function(){
					menuItems.eq(index).animate({'opacity':0},300, function(){
						menuItems.eq(index).css({'display': 'none'});
						});
					}, delay+(50*index));
				});
				$(this).removeClass('close');
				menuOpen = false;
		}
		//當menu不是open(=menuOpen=false)就要把它打開。
		else{
			//run a function with thw index info for
			menuItems.each(function(index){ 
				//Use setTimeout to delay an animation for every single menuItem
				setTimeout(function(){
					menuItems.eq(index).css({'display': 'inline'});
					menuItems.eq(index).animate({'opacity':0.6},300);

				}, delay + (50* index)); //index越大，delay越久
			});
			//Add the class name 'close to the clicked first <a> under <nav>
			$(this).addClass('close');
			menuOpen = true;

		}
	

	});
};