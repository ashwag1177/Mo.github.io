

var element = document.getElementById('images');
 Imgs = [
 'https://sa.mostaql.com/assets/images/landing/header-bg-0.png',
 'https://sa.mostaql.com/assets/images/landing/header-bg-2.png',
 'https://sa.mostaql.com/assets/images/landing/header-bg-1.png',
 'https://sa.mostaql.com/assets/images/landing/header-bg-3.png'

 ], 
 randomNumber= Math.floor(Math.random() * Imgs.length);
 function changeImage(element , Imgs) {
 	'use strict';
 	setInterval(function (){
 		 element.src = Imgs[randomNumber];

 	}, 1000);
 }
changeImage(element , Imgs);