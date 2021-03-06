
$('.menu, .overlay').click(function () {
	$('.menu').toggleClass('clicked');

	$('#nav').toggleClass('show');

});

$(document).ready(function () {
	$('.projects__name').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});
});

$(function () {

	$('#explane').on('click', function (e) {
		$('html,body').stop().animate({ scrollTop: $('.about__me').offset().top }, 1000);
		e.preventDefault();
	});


	$('#welcome__link').on('click', function (e) {
		$('html,body').stop().animate({ scrollTop: $('#welcome').offset().top }, 1000);
		e.preventDefault();
	});



	$('#about__link').on('click', function (e) {
		$('html,body').stop().animate({ scrollTop: $('#about__me').offset().top }, 1000);
		e.preventDefault();
	});



	$('#projects__link').on('click', function (e) {
		$('html,body').stop().animate({ scrollTop: $('#projects').offset().top }, 1000);
		e.preventDefault();
	});



	$('#skills__link').on('click', function (e) {
		$('html,body').stop().animate({ scrollTop: $('#skills').offset().top }, 1000);
		e.preventDefault();
	});



	$('#contacts__link').on('click', function (e) {
		$('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 1000);
		e.preventDefault();
	});

	$('#me').on('click', function (e) {
		$('html,body').stop().animate({ scrollTop: $('.me').offset().top }, 1000);
		e.preventDefault();
	});
});

mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}
function topFunction() {

	$('html, body').animate({ scrollTop: 0 }, 1000);

};

const allLang = ['en', 'pl', 'ua'];
const select = document.querySelector('select');
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
	let lang = select.value;
	location.href = window.location.pathname + "#" + lang;
	location.reload();
};

function changeLanguege() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#en';
		location.reload();
	};
	select.value = hash;
	document.querySelector(".lng-title").innerHTML = langArr['lng-title'][hash];
	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}
	};
};
changeLanguege();