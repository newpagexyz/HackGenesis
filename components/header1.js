Vue.component('header1', {
    template: `
	<div class="nav">
		<div class="container">

			
				<div class="nav__row">
					<div class="null"></div>
						<a href="" class="nav__logo"><img src="img/logo.png"><p>+79819030068</p></a>

					<div class="nav__menu menu">
						<div class="menu__icon icon__menu">
							<span></span>
							<span></span>
							<span></span>
						</div>
						<nav class="menu__body">
							<ul class="menu__list">
								<li><a href="#adress" class="menu__link">Адреса</a></li>
								<li><a href="#" class="menu__link">Партнерам</a></li>
								<li><a href="#sale" class="menu__link">Акции</a></li>
								<li><a href="#" class="menu__link">Компаниям</a></li>
								
							</ul>
						</nav>
					</div>
					<div class="nav__actions act-nav">
						<a class="act-nav__region"><span>+79819030068</span></a>
						<div class="act-nav__user user-nav">
							<div class="user-nav__icon"><img src="icon/ico_man_2.svg" alt=""></div>
							<ul class="user-nav__menu">
								
					
										<li>
											<a href="" class="user-nav__link user_nav__link1">vk</a>
										</li>
										<li>
											<a href="" class="user-nav__link user_nav__link2">whatsapp</a>
										</li>
										<li>
											<a href="" class="user-nav__link user_nav__link3">instagram</a>
										</li>
										<li>
											<a href="" class="user-nav__link user_nav__link4">telegram</a>
										</li>
								
							</ul>
							
						</div>
						
					</div>
			</div>
			</div>
		</div>
		<script>
			
var user_icon =document.querySelector('.user-nav__icon');

user_icon.addEventListener("click", function(e) {
	var user_menu= document.querySelector('.user-nav__menu');
	user_menu.classList.toggle('_active');
});
//по клику мимо закрой панельку
document.documentElement.addEventListener('click', function(e){
if(!e.target.closest('.user-nav')){
	var user_menu= document.querySelector('.user-nav__menu');
	user_menu.classList.remove('_active');
}
});

var icon__menu =document.querySelector('.icon__menu');
icon__menu.addEventListener("click", function(e) {
	var nav__menu= document.querySelector('.nav__menu');
	nav__menu.classList.toggle('_active');
	var menu__body= document.querySelector('.menu__body');
	menu__body.classList.toggle('_active');
});
		</script>
		`
})